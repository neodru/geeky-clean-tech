import { test, expect } from '@playwright/test';
import { buildCatalog } from '../../scripts/sync-catalog.mjs';

function row(sku: number | null, area = 'Home Network & Wi-Fi', active = true) {
  return {
    id: `test-service-${area}-${sku}`,
    properties: {
      Active: { checkbox: active },
      Service: { title: [{ plain_text: `E2E service ${area} ${sku}` }] },
      Type: { select: { name: 'Service' } },
      Area: { select: { name: area } },
      SKU: { unique_id: sku === null ? null : { number: sku } },
      'Client Description': { rich_text: [{ plain_text: 'Synthetic catalog validation fixture.' }] },
      'Est. Hours': { number: 1 },
      'Display Price': { number: 155 },
      'Exact Price': { number: 155 },
      'Pricing Type': { select: { name: 'Fixed' } },
    },
  };
}

test('catalog sync preserves unique service booking identifiers across categories', () => {
  const result = buildCatalog([row(60), row(61, 'Windows Setup & Configuration')]);
  expect(result.errors).toEqual([]);
  expect(result.catalog.areas.flatMap((area) => area.services)).toEqual([
    expect.objectContaining({ sku: 61 }),
    expect.objectContaining({ sku: 60 }),
  ]);
});

test('catalog sync rejects missing and unsafe service SKUs', () => {
  for (const sku of [null, 0, -1, 1.5, Number.NaN, Number.POSITIVE_INFINITY, Number.MAX_SAFE_INTEGER + 1]) {
    expect(buildCatalog([row(sku)]).errors).toContain(
      `"E2E service Home Network & Wi-Fi ${sku}": SKU must be a positive safe integer (got ${sku})`
    );
  }
});

test('catalog sync rejects duplicate SKUs even in different categories', () => {
  const result = buildCatalog([row(60), row(60, 'Windows Setup & Configuration')]);
  expect(result.errors).toContain('"E2E service Windows Setup & Configuration 60": duplicate service SKU 60');
});

test('inactive catalog rows do not invalidate active booking identifiers', () => {
  const result = buildCatalog([
    row(60),
    row(60, 'Windows Setup & Configuration', false),
    row(null, 'Home Network & Wi-Fi', false),
  ]);
  expect(result.errors).toEqual([]);
  expect(result.catalog.areas.flatMap((area) => area.services)).toHaveLength(1);
});
