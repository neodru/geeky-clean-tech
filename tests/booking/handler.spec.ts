import { test, expect } from '@playwright/test';
import { buildSync } from 'esbuild';
import { mkdtempSync, rmSync } from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { onRequestGet } from '../../functions/api/booking-test-target';
import { syntheticLead } from './helpers';

// Bundle JSON as Pages does, without requiring modern import attributes in
// application code that Cloudflare's older Functions compiler cannot parse.
const bundleDir = mkdtempSync(join(tmpdir(), 'gct-booking-handler-'));
const bundlePath = join(bundleDir, 'contact.cjs');
buildSync({
  entryPoints: [fileURLToPath(new URL('../../functions/api/contact.ts', import.meta.url))],
  outfile: bundlePath,
  bundle: true,
  platform: 'node',
  format: 'cjs',
});
const { onRequestPost } = createRequire(import.meta.url)(bundlePath) as typeof import('../../functions/api/contact');
test.afterAll(() => rmSync(bundleDir, { recursive: true, force: true }));

// Exercise the actual Pages Function with only the external Notion call mocked.
// These checks do not establish persistence in a real Notion database.
for (const selection of [
  { service: 'Wi-Fi & Home Network Fix', plan: '' },
  { service: 'Package: Wi-Fi That Just Works', plan: 'wi-fi-that-just-works' },
]) {
  test(`Pages Function writes complete ${selection.plan ? 'package' : 'service'} payload once`, async () => {
    const lead = { ...syntheticLead(), ...selection };
    const form = new FormData();
    for (const [key, value] of Object.entries(lead)) form.set(key, value);
    const originalFetch = globalThis.fetch;
    const writes: { url: string; body: string }[] = [];
    globalThis.fetch = async (url, options) => {
      writes.push({ url: String(url), body: String(options?.body) });
      return Response.json({ id: 'synthetic-notion-page' });
    };
    try {
      const response = await onRequestPost({
        request: new Request('https://test.example/api/contact', {
          method: 'POST',
          headers: { Accept: 'application/json', Origin: 'https://test.example' },
          body: form,
        }),
        env: { NOTION_TOKEN: 'synthetic-test-token', NOTION_DATABASE_ID: 'synthetic-test-database' },
      });
      expect(response.status).toBe(200);
      expect(await response.json()).toEqual({ ok: true });
      expect(writes).toHaveLength(1);
      expect(writes[0].url).toBe('https://api.notion.com/v1/pages');
      const payload = JSON.parse(writes[0].body);
      expect(payload.parent.database_id).toBe('synthetic-test-database');
      const properties = payload.properties;
      const text = (parts: { text: { content: string } }[]) => parts.map((part) => part.text.content).join('');
      expect(text(properties.Name.title)).toBe(lead.name);
      expect(properties.Email.email).toBe(lead.email);
      expect(properties.Phone.phone_number).toBe(lead.phone);
      expect(properties.Audience.select.name).toBe(lead.audience);
      expect(properties.Service.select.name).toBe(lead.service);
      expect(text(properties.Message.rich_text)).toBe(
        lead.plan ? `${lead.message}\n\nPlan: ${lead.plan}` : lead.message
      );
    } finally {
      globalThis.fetch = originalFetch;
    }
  });
}

test('server rejects invalid inputs and cross-origin requests without writing', async () => {
  const originalFetch = globalThis.fetch;
  let writes = 0;
  globalThis.fetch = async () => {
    writes++;
    return Response.json({});
  };
  try {
    for (const [field, value, origin, status] of [
      ['name', '', 'https://test.example', 422],
      ['email', 'invalid', 'https://test.example', 422],
      ['service', 'Unknown service', 'https://test.example', 422],
      ['name', 'E2E TEST', 'https://other.example', 403],
    ] as const) {
      const form = new FormData();
      for (const [key, content] of Object.entries({ ...syntheticLead(), service: 'Home IT Support' }))
        form.set(key, content);
      form.set(field, value);
      const response = await onRequestPost({
        request: new Request('https://test.example/api/contact', {
          method: 'POST',
          headers: { Accept: 'application/json', Origin: origin },
          body: form,
        }),
        env: { NOTION_TOKEN: 'synthetic-test-token', NOTION_DATABASE_ID: 'synthetic-test-database' },
      });
      expect(response.status).toBe(status);
    }
    expect(writes).toBe(0);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('integration preflight rejects production, mismatched targets, and production bot secrets', () => {
  const id = '11111111111111111111111111111111';
  const valid = { NOTION_DATABASE_ID: id, E2E_NOTION_TEST_DATABASE_ID: id };
  const probe = (host: string, env = valid) =>
    onRequestGet({ request: new Request(`https://${host}/api/booking-test-target`), env });
  expect(probe('abc.project.pages.dev').status).toBe(200);
  expect(probe('project.pages.dev').status).toBe(404);
  expect(probe('geekycleantechnology.com').status).toBe(404);
  expect(probe('abc.project.pages.dev', { ...valid, NOTION_DATABASE_ID: 'different' }).status).toBe(404);
  expect(
    probe('abc.project.pages.dev', {
      NOTION_DATABASE_ID: 'e61123ba4ee848b9ad0983d34405bff1',
      E2E_NOTION_TEST_DATABASE_ID: 'e61123ba4ee848b9ad0983d34405bff1',
    }).status
  ).toBe(404);
  expect(
    onRequestGet({
      request: new Request('https://abc.project.pages.dev/api/booking-test-target'),
      env: { ...valid, TURNSTILE_SECRET_KEY: 'production-secret' },
    }).status
  ).toBe(404);
});
