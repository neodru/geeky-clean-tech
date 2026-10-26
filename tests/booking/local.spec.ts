import { test, expect } from '@playwright/test';
import { chooseBooking, expectSuccess, fillLead, syntheticLead } from './helpers';

test.beforeEach(async ({ page }) => {
  // UI-only tests must never deliver synthetic leads. Per-test API mocks are
  // registered later and take precedence; every other POST is blocked.
  await page.route('**/*', async (route) => {
    if (route.request().method() === 'POST') return route.abort('blockedbyclient');
    return route.continue();
  });
});

test('plain-language search returns relevant keyboard-selectable results', async ({ page }) => {
  await page.goto('/pricing');
  const input = page.getByLabel('Describe what you need help with');
  await input.fill('slow computer');
  await input.press('Enter');
  const results = page.locator('[data-search-results]');
  await expect(results).toContainText(/Speed|Startup|Cleanup/i);
  await input.fill('Wi-Fi');
  await input.press('Enter');
  await expect(results).toContainText('Wi-Fi & Home Network Fix');
  await expect(results).toContainText('Wi-Fi That Just Works');
  // Reach a result by actual tab navigation, including the example buttons.
  const link = results.getByRole('link').first();
  for (let i = 0; i < 12 && !(await link.evaluate((el) => el === document.activeElement)); i++) {
    await page.keyboard.press('Tab');
  }
  await expect(link).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/contact\/?\?service=/);
  await expect(page.getByLabel('Service needed')).not.toHaveValue('');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

for (const kind of ['service', 'package'] as const) {
  test(`${kind} booking preserves selection and submits once (mocked API)`, async ({ page }) => {
    const selection = await chooseBooking(page, kind);
    const lead = syntheticLead();
    const submissions: string[] = [];
    await page.route('**/api/contact', async (route) => {
      submissions.push(route.request().postData()!);
      await route.fulfill({ status: 200, json: { ok: true } });
    });
    await fillLead(page, lead);
    await page.getByRole('button', { name: 'Request IT Support', exact: true }).click();
    await expectSuccess(page);
    expect(submissions).toHaveLength(1);
    for (const [key, value] of Object.entries({ ...lead, ...selection })) {
      expect(submissions[0]).toContain(`name="${key}"\r\n\r\n${value}\r\n`);
    }
    await expect(page.getByLabel('Service needed')).toHaveValue(selection.service);
    await expect(page.locator('[data-plan-field]')).toHaveValue(selection.plan);
  });
}

test('required fields and invalid email prevent submission', async ({ page }) => {
  let submissions = 0;
  await page.route('**/api/contact', async (route) => {
    submissions++;
    await route.fulfill({ json: { ok: true } });
  });
  await page.goto('/contact');
  const submit = page.getByRole('button', { name: 'Request IT Support', exact: true });
  await submit.click();
  await expect(page.getByRole('textbox', { name: 'Name', exact: true })).toBeFocused();
  const lead = syntheticLead();
  await fillLead(page, lead);
  await page.getByLabel('Service needed').selectOption('Home IT Support');
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('invalid-email');
  await submit.click();
  await expect(page.getByRole('textbox', { name: 'Email', exact: true })).toBeFocused();
  expect(submissions).toBe(0);
});

// Server messages are shown only when the visitor can act on them.
const SERVER_MESSAGES: Record<string, string> = {
  '403': 'Please complete the verification and try again.',
  '422': 'Please check your phone number.',
};

for (const failure of ['503', '422', '403', 'network']) {
  test(`${failure} failure preserves data and permits retry`, async ({ page }) => {
    await chooseBooking(page, 'package');
    const lead = syntheticLead();
    await fillLead(page, lead);
    let attempts = 0;
    await page.route('**/api/contact', async (route) => {
      attempts++;
      if (attempts > 1) return route.fulfill({ json: { ok: true } });
      if (failure === 'network') return route.abort('failed');
      return route.fulfill({ status: Number(failure), json: { error: SERVER_MESSAGES[failure] ?? 'Unavailable.' } });
    });
    const submit = page.getByRole('button', { name: 'Request IT Support', exact: true });
    await submit.click();
    await expect(page.locator('[data-form-status]')).toContainText(SERVER_MESSAGES[failure] ?? 'could not be sent');
    await expect(submit).toBeEnabled();
    await expect(page.getByRole('textbox', { name: 'Name', exact: true })).toHaveValue(lead.name);
    await expect(page.getByLabel('How can we help?')).toHaveValue(lead.message);
    await expect(page.locator('[data-plan-field]')).toHaveValue('wi-fi-that-just-works');
    await submit.click();
    await expectSuccess(page);
    expect(attempts).toBe(2);
  });
}

test('changing package to service clears stale plan', async ({ page }) => {
  await chooseBooking(page, 'package');
  await page.getByLabel('Service needed').selectOption('Home IT Support');
  await expect(page.locator('[data-plan-field]')).toHaveValue('');
});
