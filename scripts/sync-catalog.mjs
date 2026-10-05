#!/usr/bin/env node
/**
 * Sync the service catalog from Notion (the master copy) into src/data/catalog.json.
 *
 * Usage:
 *   NOTION_TOKEN=secret_xxx npm run sync:catalog
 *   npm run sync:catalog -- --input pages.json   # offline: raw Notion page objects from a saved query
 *
 * Environment:
 *   NOTION_TOKEN                     Notion internal integration secret (required unless --input).
 *   NOTION_CATALOG_DATA_SOURCE_ID    Optional override for the catalog data source.
 *
 * Only rows with "Active" checked are published. The script validates every row and
 * refuses to write the file if anything is wrong, so a bad edit in Notion can never
 * reach the website.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import prettier from 'prettier';
import { PLAN_ID_MAX, PLAN_ID_RE } from '../src/data/planId.js';

const DATA_SOURCE_ID = process.env.NOTION_CATALOG_DATA_SOURCE_ID || '5f8dca75-ab8b-473b-942f-7acec366c028';
const NOTION_VERSION = '2025-09-03';
const OUTPUT = fileURLToPath(new URL('../src/data/catalog.json', import.meta.url));

// Website layout for each Notion "Area" option, in display order.
// `title` must match the Notion option exactly; `label` (optional) is the heading shown on the website.
// Adding a new Area in Notion requires adding it here (the sync fails until you do).
const AREAS = [
  { id: 'account-security', title: 'Secure Online & Email Account Management', icon: 'tabler:mail-cog' },
  { id: 'mobile-security', title: 'Secure Mobile Device Configuration', icon: 'tabler:device-mobile-check' },
  { id: 'pc-security', title: 'Secure PC Configuration', icon: 'tabler:device-desktop-check' },
  { id: 'password-training', title: 'Password Management Training', icon: 'tabler:password-user' },
  {
    id: 'ios',
    title: 'Apple iOS Setup & Configuration',
    label: 'Apple iOS Setup & Configuration (iPhone & iPad)',
    icon: 'tabler:brand-apple',
  },
  { id: 'android', title: 'Android Setup & Configuration', icon: 'tabler:brand-android' },
  { id: 'macos', title: 'Apple macOS Setup & Configuration', icon: 'tabler:device-laptop' },
  { id: 'windows', title: 'Windows Setup & Configuration', icon: 'tabler:brand-windows' },
  { id: 'cloud', title: 'Cloud Account Configuration', icon: 'tabler:cloud-lock' },
  { id: 'network', title: 'Home Network & Wi-Fi', icon: 'tabler:wifi' },
];
const PACKAGE_AREA = 'Packages';

// Icons for known packages; new packages fall back to a generic icon.
const BUNDLE_ICONS = {
  'stop-the-scammers': 'tabler:shield-x',
  'new-phone-made-easy': 'tabler:device-mobile-heart',
  'never-locked-out': 'tabler:lock-open',
  'wi-fi-that-just-works': 'tabler:wifi',
};
const DEFAULT_BUNDLE_ICON = 'tabler:package';

// --- Notion API -------------------------------------------------------------

async function notionQuery(token) {
  const pages = [];
  let cursor;
  do {
    const res = await fetchWithRetry(`https://api.notion.com/v1/data_sources/${DATA_SOURCE_ID}/query`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Notion-Version': NOTION_VERSION,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page_size: 100,
        filter: { property: 'Active', checkbox: { equals: true } },
        ...(cursor ? { start_cursor: cursor } : {}),
      }),
    });
    const body = await res.json();
    if (!res.ok) {
      throw new Error(`Notion API ${res.status}: ${body.message ?? JSON.stringify(body)}`);
    }
    pages.push(...body.results);
    cursor = body.has_more ? body.next_cursor : undefined;
  } while (cursor);
  return pages;
}

async function fetchWithRetry(url, init, attempts = 4) {
  for (let i = 1; ; i++) {
    const res = await fetch(url, init);
    if ((res.status !== 429 && res.status < 500) || i >= attempts) return res;
    const wait = Number(res.headers.get('retry-after')) || 2 ** i;
    console.warn(`Notion API ${res.status}; retrying in ${wait}s (attempt ${i}/${attempts})`);
    await new Promise((r) => setTimeout(r, wait * 1000));
  }
}

// --- Property readers -------------------------------------------------------

const text = (p) =>
  (p?.title ?? p?.rich_text ?? [])
    .map((t) => t.plain_text)
    .join('')
    .trim();
const number = (p) => (p?.type === 'formula' ? p.formula?.number : p?.number) ?? null;
const select = (p) => p?.select?.name ?? null;
const multi = (p) => (p?.multi_select ?? []).map((o) => o.name);
const checkbox = (p) => p?.checkbox === true;
const sku = (p) => p?.unique_id?.number ?? null;

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// --- Transform & validate ---------------------------------------------------

export function buildCatalog(pages) {
  const errors = [];
  const areas = new Map(
    AREAS.map(({ id, title, label, icon }) => [title, { id, title: label ?? title, icon, services: [] }])
  );
  const bundles = [];
  const rates = new Set();
  const serviceSkus = new Set();

  const rows = pages
    .map((page) => ({ page, p: page.properties ?? {} }))
    .filter(({ p }) => checkbox(p['Active']))
    .sort((a, b) => (sku(a.p['SKU']) ?? Infinity) - (sku(b.p['SKU']) ?? Infinity));

  for (const { page, p } of rows) {
    const title = text(p['Service']);
    const where = `"${title || page.id}"`;
    const type = select(p['Type']);
    const area = select(p['Area']);
    const hours = number(p['Est. Hours']);
    const description = text(p['Client Description']);

    if (!title) errors.push(`${page.id}: missing Service name`);
    if (!description) errors.push(`${where}: missing Client Description`);
    if (!(hours > 0) || !Number.isInteger(hours * 4)) {
      errors.push(`${where}: Est. Hours must be a positive multiple of 0.25 (got ${hours})`);
    }

    if (type === 'Package') {
      const price = number(p['Package Price']);
      const includes = text(p['Includes'])
        .split(';')
        .map((s) => s.trim())
        .filter(Boolean);
      const tagline = text(p['Tagline']);
      if (!(price > 0)) errors.push(`${where}: packages need a Package Price`);
      if (!includes.length) errors.push(`${where}: packages need Includes (separate services with ";")`);
      if (!tagline) errors.push(`${where}: packages need a Tagline`);
      const id = slugify(title);
      if (!PLAN_ID_RE.test(id)) {
        errors.push(
          `${where}: package name is too long for a booking link (max ${PLAN_ID_MAX} characters once simplified)`
        );
      }
      bundles.push({
        id,
        title,
        tagline,
        forWho: description,
        icon: BUNDLE_ICONS[id] ?? DEFAULT_BUNDLE_ICON,
        includes,
        hours,
        price,
      });
      continue;
    }

    if (type !== 'Service') {
      errors.push(`${where}: Type must be "Service" or "Package" (got ${type})`);
      continue;
    }
    // Booking links use catalog-<SKU>; every active service needs a stable,
    // unique identifier across categories to avoid selecting another service.
    const serviceSku = sku(p['SKU']);
    if (!Number.isSafeInteger(serviceSku) || serviceSku <= 0) {
      errors.push(`${where}: SKU must be a positive safe integer (got ${serviceSku})`);
    } else if (serviceSkus.has(serviceSku)) {
      errors.push(`${where}: duplicate service SKU ${serviceSku}`);
    } else {
      serviceSkus.add(serviceSku);
    }
    const target = areas.get(area);
    if (!target) {
      const hint = area === PACKAGE_AREA ? 'set Type to "Package"' : 'add it to AREAS in scripts/sync-catalog.mjs';
      errors.push(`${where}: unknown Area "${area}" (${hint})`);
      continue;
    }
    const price = number(p['Display Price']);
    const exact = number(p['Exact Price']);
    const pricingType = select(p['Pricing Type']);
    if (!(price > 0)) errors.push(`${where}: Display Price is empty`);
    if (pricingType !== 'Fixed' && pricingType !== 'From') {
      errors.push(`${where}: Pricing Type must be "Fixed" or "From" (got ${pricingType})`);
    }
    if (exact > 0 && hours > 0) rates.add(Math.round((exact / hours) * 100) / 100);
    if (target.services.some((s) => s.title === title)) errors.push(`${where}: duplicate service in ${area}`);

    target.services.push({
      sku: serviceSku,
      title,
      description,
      hours,
      price,
      pricing: pricingType === 'From' ? 'from' : 'fixed',
      delivery: multi(p['Delivery']),
    });
  }

  if (rates.size > 1) {
    errors.push(`Services use different hourly rates (${[...rates].join(', ')}); check the price formulas`);
  }
  const hourlyRate = [...rates][0];
  if (!hourlyRate) errors.push('Could not determine the hourly rate (no active services with prices)');

  const bundleIds = new Set();
  for (const b of bundles) {
    if (bundleIds.has(b.id)) errors.push(`Duplicate package "${b.title}"`);
    bundleIds.add(b.id);
  }

  return {
    errors,
    catalog: {
      hourlyRate,
      areas: [...areas.values()].filter((a) => a.services.length),
      bundles,
    },
  };
}

// --- Main -------------------------------------------------------------------

async function main() {
  const inputFlag = process.argv.indexOf('--input');
  let pages;
  if (inputFlag !== -1) {
    const file = process.argv[inputFlag + 1];
    if (!file) throw new Error('--input needs a file path');
    const raw = JSON.parse(await readFile(file, 'utf8'));
    pages = Array.isArray(raw) ? raw : raw.results;
  } else {
    const token = process.env.NOTION_TOKEN;
    if (!token) throw new Error('Set NOTION_TOKEN (Notion internal integration secret), or pass --input <file>');
    pages = await notionQuery(token);
  }

  const { errors, catalog } = buildCatalog(pages);
  if (errors.length) {
    console.error(`Catalog sync failed; ${errors.length} problem(s) in Notion:\n  - ${errors.join('\n  - ')}`);
    process.exit(1);
  }

  const json = await prettier.format(JSON.stringify(catalog), {
    ...(await prettier.resolveConfig(OUTPUT)),
    parser: 'json',
  });
  const previous = await readFile(OUTPUT, 'utf8').catch(() => '');
  const serviceCount = catalog.areas.reduce((n, a) => n + a.services.length, 0);
  const summary = `${serviceCount} services in ${catalog.areas.length} areas, ${catalog.bundles.length} packages, $${catalog.hourlyRate}/hr`;

  if (previous === json) {
    console.log(`Catalog unchanged (${summary}).`);
    return;
  }
  await writeFile(OUTPUT, json);
  console.log(`Updated src/data/catalog.json (${summary}).`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
