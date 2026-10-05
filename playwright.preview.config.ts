import { defineConfig } from '@playwright/test';
import base from './playwright.config';

const preview = process.env.E2E_PREVIEW_URL;
if (!preview) throw new Error('Set E2E_PREVIEW_URL to a Cloudflare Pages preview URL.');
const url = new URL(preview);
if (url.protocol !== 'https:' || !/^[a-z0-9-]+\.[a-z0-9-]+\.pages\.dev$/.test(url.hostname)) {
  throw new Error('UI verification requires an HTTPS Cloudflare Pages preview URL.');
}

export default defineConfig({
  ...base,
  testMatch: 'local.spec.ts',
  testIgnore: [],
  webServer: undefined,
  outputDir: 'test-results/preview-ui',
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'playwright-report/preview-ui' }]],
  use: {
    ...base.use,
    baseURL: preview,
    serviceWorkers: 'block',
    ...(process.env.HTTPS_PROXY ? { proxy: { server: process.env.HTTPS_PROXY } } : {}),
  },
  projects: base.projects?.filter((project) => ['desktop', 'mobile'].includes(project.name!)),
});
