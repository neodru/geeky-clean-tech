/**
 * POST /api/contact — Cloudflare Pages Function.
 *
 * Validates the contact form and creates a row in the Notion "Website Leads"
 * database. Answers JSON to the page's fetch() and redirects plain (no-JS)
 * form posts back to /contact with a #sent or #send-error fragment.
 *
 * Environment (Cloudflare Pages → Settings → Variables and secrets):
 * - NOTION_TOKEN          (secret)   Notion internal integration token.
 * - NOTION_DATABASE_ID    (variable) Website Leads database ID.
 * - TURNSTILE_SECRET_KEY  (secret, optional) Enables the Turnstile check.
 */

import { allowedContactServices } from '../../src/data/contactServices';

interface Env {
  NOTION_TOKEN?: string;
  NOTION_DATABASE_ID?: string;
  TURNSTILE_SECRET_KEY?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

const AUDIENCES = ['Home / Personal', 'Senior / Family', 'Business'];
// Same list the contact form's dropdown is built from, packages included.
const SERVICES = allowedContactServices();
// Optional plan id from ?plan= links (e.g. "executive", "stop-the-scammers").
const PLAN_RE = /^[a-z0-9-]{1,40}$/;

const MAX_MESSAGE = 5000;
// Notion caps each rich_text segment at 2000 characters.
const NOTION_TEXT_CHUNK = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface Lead {
  name: string;
  email: string;
  phone: string;
  audience: string;
  service: string;
  plan: string;
  message: string;
}

type Validation = { ok: true; lead: Lead } | { ok: false; error: string };

const field = (data: FormData, key: string) => String(data.get(key) ?? '').trim();

export function validate(data: FormData): Validation {
  const lead: Lead = {
    name: field(data, 'name'),
    email: field(data, 'email'),
    phone: field(data, 'phone'),
    audience: field(data, 'audience'),
    service: field(data, 'service'),
    plan: field(data, 'plan'),
    message: field(data, 'message'),
  };

  if (!lead.name || lead.name.length > 200) return { ok: false, error: 'Please enter your name.' };
  if (!EMAIL_RE.test(lead.email) || lead.email.length > 254)
    return { ok: false, error: 'Please enter a valid email address.' };
  if (lead.phone.length > 40) return { ok: false, error: 'Please check your phone number.' };
  if (!AUDIENCES.includes(lead.audience)) return { ok: false, error: 'Please choose who this is for.' };
  if (!SERVICES.includes(lead.service)) return { ok: false, error: 'Please choose a service.' };
  // Ignore a malformed plan rather than rejecting the lead over a hidden field.
  if (lead.plan && !PLAN_RE.test(lead.plan)) lead.plan = '';
  if (!lead.message || lead.message.length > MAX_MESSAGE)
    return { ok: false, error: `Please describe how we can help (up to ${MAX_MESSAGE} characters).` };

  return { ok: true, lead };
}

function richText(text: string) {
  const chunks = [];
  for (let i = 0; i < text.length; i += NOTION_TEXT_CHUNK) {
    chunks.push({ type: 'text', text: { content: text.slice(i, i + NOTION_TEXT_CHUNK) } });
  }
  return chunks;
}

export function notionPage(databaseId: string, lead: Lead) {
  return {
    parent: { database_id: databaseId },
    properties: {
      Name: { title: richText(lead.name) },
      'Lead Status': { select: { name: 'New' } },
      Service: { select: { name: lead.service } },
      Audience: { select: { name: lead.audience } },
      Email: { email: lead.email },
      Phone: { phone_number: lead.phone || null },
      // The plan rides in the message so it needs no extra Notion column.
      Message: { rich_text: richText(lead.plan ? `${lead.message}\n\nPlan: ${lead.plan}` : lead.message) },
      Source: { select: { name: 'Website form' } },
    },
  };
}

async function passesTurnstile(secret: string, token: string, ip: string | null) {
  if (!token) return false;
  const body = new FormData();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
  const outcome = (await res.json()) as { success?: boolean };
  return outcome.success === true;
}

function respond(request: Request, status: number, error?: string) {
  const wantsJson = (request.headers.get('Accept') ?? '').includes('application/json');
  if (wantsJson) {
    return Response.json(error ? { ok: false, error } : { ok: true }, { status });
  }
  // Plain HTML form post (JavaScript disabled): send the visitor back to the page.
  const target = new URL(`/contact/#${error ? 'send-error' : 'sent'}`, request.url);
  return Response.redirect(target.toString(), 303);
}

export async function onRequestPost({ request, env }: PagesContext): Promise<Response> {
  // Browsers always send Origin on cross-site POSTs; reject other sites' forms.
  const origin = request.headers.get('Origin');
  if (origin && origin !== new URL(request.url).origin) {
    return respond(request, 403, 'Forbidden.');
  }

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return respond(request, 400, 'Invalid form submission.');
  }

  // Honeypot filled in: pretend it worked so bots do not retry.
  if (field(data, '_gotcha')) return respond(request, 200);

  if (env.TURNSTILE_SECRET_KEY) {
    const token = field(data, 'cf-turnstile-response');
    const ip = request.headers.get('CF-Connecting-IP');
    if (!(await passesTurnstile(env.TURNSTILE_SECRET_KEY, token, ip))) {
      return respond(request, 403, 'Please complete the verification and try again.');
    }
  }

  const result = validate(data);
  if (!result.ok) return respond(request, 422, result.error);

  if (!env.NOTION_TOKEN || !env.NOTION_DATABASE_ID) {
    console.error('Contact form is not configured: NOTION_TOKEN or NOTION_DATABASE_ID is missing.');
    return respond(request, 503, 'The contact form is temporarily unavailable.');
  }

  const res = await fetch('https://api.notion.com/v1/pages', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.NOTION_TOKEN}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
    },
    body: JSON.stringify(notionPage(env.NOTION_DATABASE_ID, result.lead)),
  });

  if (!res.ok) {
    console.error(`Notion API error ${res.status}: ${await res.text()}`);
    return respond(request, 502, 'Your message could not be saved.');
  }

  return respond(request, 200);
}
