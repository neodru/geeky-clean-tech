import { test, expect } from '@playwright/test';
import { chooseBooking, expectSuccess, fillLead, syntheticLead } from './helpers';

const preview = process.env.E2E_PREVIEW_URL;
const database = process.env.E2E_NOTION_TEST_DATABASE_ID;
const token = process.env.E2E_NOTION_TOKEN;
const normalize = (id: string) => id.replace(/-/g, '').toLowerCase();

test.beforeEach(async ({ page, request }) => {
  test.skip(
    !preview || !database || !token,
    'Requires preview URL, dedicated Notion test database ID, and read token.'
  );
  const url = new URL(preview!);
  expect(url.protocol).toBe('https:');
  expect(url.hostname).toMatch(/^[a-z0-9-]+\.[a-z0-9-]+\.pages\.dev$/);
  expect(normalize(database!)).not.toBe('e61123ba4ee848b9ad0983d34405bff1');
  const target = await request.get(`${url.origin}/api/booking-test-target`);
  expect(target.status(), 'Preview must attest that its write target is the dedicated test database').toBe(200);
  expect(await target.json()).toEqual({ databaseId: normalize(database!), testTarget: true });
  const schema = await request.get(`https://api.notion.com/v1/databases/${database}`, {
    headers: { Authorization: `Bearer ${token}`, 'Notion-Version': '2022-06-28' },
  });
  expect(schema.status(), 'Test database must be readable before creating leads').toBe(200);
  const databaseInfo = await schema.json();
  expect(normalize(databaseInfo.id)).toBe(normalize(database!));
  for (const [name, type] of Object.entries({
    Name: 'title',
    Email: 'email',
    Phone: 'phone_number',
    Audience: 'select',
    Service: 'select',
    Message: 'rich_text',
    'Lead Status': 'select',
    Source: 'select',
  })) {
    expect(databaseInfo.properties[name]?.type, `Missing or incompatible test property: ${name}`).toBe(type);
  }
  // Prevent a build-time endpoint override from sending to another environment.
  await page.goto('/contact');
  const action = await page.locator('gct-contact-form form').getAttribute('action');
  expect(new URL(action!, url).href).toBe(`${url.origin}/api/contact`);
  const widget = page.locator('[data-turnstile]');
  if (await widget.count()) await expect(widget).toHaveAttribute('data-sitekey', '1x00000000000000000000AA');
});

for (const kind of ['service', 'package'] as const) {
  test(`${kind} booking persists exactly one complete Notion record`, async ({ page, request }) => {
    const selection = await chooseBooking(page, kind);
    const lead = syntheticLead();
    await fillLead(page, lead);
    if (await page.locator('[data-turnstile]').count()) {
      await expect.poll(() => page.locator('[name="cf-turnstile-response"]').inputValue()).not.toBe('');
    }
    let submissions = 0;
    page.on('request', (req) => {
      if (new URL(req.url()).pathname === '/api/contact' && req.method() === 'POST') submissions++;
    });
    await page.getByRole('button', { name: 'Request IT Support', exact: true }).click();
    await expectSuccess(page);
    const query = async () => {
      const response = await request.post(`https://api.notion.com/v1/databases/${database}/query`, {
        headers: { Authorization: `Bearer ${token}`, 'Notion-Version': '2022-06-28' },
        data: { filter: { property: 'Email', email: { equals: lead.email } }, page_size: 100 },
      });
      expect(response.status(), 'Notion test database query must succeed').toBe(200);
      return response.json();
    };
    await expect.poll(async () => (await query()).results.length, { timeout: 15_000 }).toBe(1);
    // Observe a second time to catch duplicate writes after the UI acknowledges.
    await page.waitForTimeout(1500);
    const records = await query();
    expect(records.has_more).toBe(false);
    expect(records.results).toHaveLength(1);
    expect(submissions).toBe(1);
    const properties = records.results[0].properties;
    const text = (parts: { plain_text: string }[]) => parts.map((part) => part.plain_text).join('');
    expect(text(properties.Name.title)).toBe(lead.name);
    expect(properties.Email.email).toBe(lead.email);
    expect(properties.Phone.phone_number).toBe(lead.phone);
    expect(properties.Audience.select.name).toBe(lead.audience);
    expect(properties.Service.select.name).toBe(selection.service);
    expect(text(properties.Message.rich_text)).toBe(
      selection.plan ? `${lead.message}\n\nPlan: ${selection.plan}` : lead.message
    );
  });
}
