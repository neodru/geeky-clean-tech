import { test, expect } from '@playwright/test';
import { assertProductionTurnstileSiteKey } from '../../src/utils/turnstile';

test('production rejects every official Turnstile test site key', () => {
  for (const key of [
    '1x00000000000000000000AA',
    '2x00000000000000000000AB',
    '1x00000000000000000000BB',
    '2x00000000000000000000BB',
    '3x00000000000000000000FF',
  ]) {
    expect(() => assertProductionTurnstileSiteKey(key, 'main', true)).toThrow('Turnstile test key');
  }
});

test('preview builds and local development permit Turnstile test keys', () => {
  for (const branch of ['codex/contact-form-fixes', undefined]) {
    expect(() => assertProductionTurnstileSiteKey('1x00000000000000000000AA', branch, true)).not.toThrow();
  }
  expect(() => assertProductionTurnstileSiteKey('1x00000000000000000000AA', 'main', false)).not.toThrow();
});

test('production permits real site keys and the existing optional unset configuration', () => {
  expect(() => assertProductionTurnstileSiteKey('0x4AAAAAAExampleWidgetKey', 'main', true)).not.toThrow();
  expect(() => assertProductionTurnstileSiteKey(undefined, 'main', true)).not.toThrow();
});
