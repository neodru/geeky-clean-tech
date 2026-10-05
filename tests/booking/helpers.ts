import { randomUUID } from 'node:crypto';
import { expect, type Page } from '@playwright/test';

export function syntheticLead() {
  const id = randomUUID();
  return {
    name: `E2E TEST ${id}`,
    email: `booking-${id}@example.invalid`,
    phone: '+1 619 555 0100',
    audience: 'Home / Personal',
    message: `Synthetic booking verification ${id}. No customer action required.`,
  };
}

export async function fillLead(page: Page, lead: ReturnType<typeof syntheticLead>) {
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill(lead.name);
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill(lead.email);
  await page.getByRole('textbox', { name: 'Phone', exact: true }).fill(lead.phone);
  await page.getByLabel('This is for').selectOption(lead.audience);
  await page.getByLabel('How can we help?').fill(lead.message);
}

export async function chooseBooking(page: Page, kind: 'service' | 'package') {
  await page.goto('/pricing');
  const input = page.getByLabel('Describe what you need help with');
  await input.fill('Wi-Fi');
  await input.press('Enter');
  const cards = page.locator('[data-search-results] > li');
  const card = cards.filter({
    has: page.getByRole('heading', {
      name: kind === 'service' ? 'Wi-Fi & Home Network Fix' : 'Wi-Fi That Just Works',
      exact: true,
    }),
  });
  await expect(card).toBeVisible();
  const link = card.getByRole('link', { name: `Book this ${kind}` });
  const href = await link.getAttribute('href');
  await link.click();
  await expect(page).toHaveURL(new RegExp('/contact\\?'));
  const params = new URL(href!, 'http://localhost').searchParams;
  const service = page.getByLabel('Service needed');
  await expect(service).toHaveValue(kind === 'service' ? 'Wi-Fi & Home Network Fix' : 'Package: Wi-Fi That Just Works');
  await expect(service.locator('option:checked')).toHaveAttribute('data-service', params.get('service')!);
  await expect(page.locator('[data-plan-field]')).toHaveValue(params.get('plan') ?? '');
  return { service: await service.inputValue(), plan: params.get('plan') ?? '' };
}

export async function expectSuccess(page: Page) {
  await expect(page.locator('[data-form-status]')).toContainText('Thanks! Your request is in.');
  await expect(page.getByRole('button', { name: 'Request IT Support', exact: true })).toBeEnabled();
}
