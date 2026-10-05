// Read-only preflight for booking integration tests. Unavailable unless the
// preview explicitly declares a dedicated test database matching its write target.
interface Env {
  NOTION_DATABASE_ID?: string;
  E2E_NOTION_TEST_DATABASE_ID?: string;
  TURNSTILE_SECRET_KEY?: string;
}
const normalize = (id: string) => id.replace(/-/g, '').toLowerCase();
const productionDatabase = 'e61123ba4ee848b9ad0983d34405bff1';

export function onRequestGet({ request, env }: { request: Request; env: Env }) {
  const id = env.E2E_NOTION_TEST_DATABASE_ID;
  const preview = /^[a-z0-9-]+\.[a-z0-9-]+\.pages\.dev$/.test(new URL(request.url).hostname);
  // Official always-pass Turnstile secret is permitted only on the test preview.
  const testBotCheck = !env.TURNSTILE_SECRET_KEY || env.TURNSTILE_SECRET_KEY === '1x0000000000000000000000000000000AA';
  if (
    !preview ||
    !id ||
    !/^[a-f0-9-]{32,36}$/i.test(id) ||
    normalize(id) === productionDatabase ||
    normalize(id) !== normalize(env.NOTION_DATABASE_ID ?? '') ||
    !testBotCheck
  ) {
    return new Response(null, { status: 404 });
  }
  return Response.json({ databaseId: normalize(id), testTarget: true }, { headers: { 'Cache-Control': 'no-store' } });
}
