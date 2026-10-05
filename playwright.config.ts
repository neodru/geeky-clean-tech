import { defineConfig, devices } from '@playwright/test';

const preview = process.env.E2E_PREVIEW_URL;
const integrationOnly = process.argv.some((arg) => arg.includes('preview-desktop') || arg.includes('preview-mobile'));

export default defineConfig({
  testDir: './tests/booking',
  fullyParallel: true,
  retries: 0,
  workers: 2,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: `playwright-report/${integrationOnly ? 'integration' : 'local'}` }],
  ],
  outputDir: `test-results/${integrationOnly ? 'integration' : 'local'}`,
  use: {
    baseURL: 'http://127.0.0.1:4321',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  webServer: integrationOnly
    ? undefined
    : {
        command: 'npm run build && node scripts/booking-preview.mjs',
        url: 'http://127.0.0.1:4321',
        reuseExistingServer: false,
        timeout: 120_000,
        env: { PUBLIC_CONTACT_FORM_ENDPOINT: '/api/contact', PUBLIC_TURNSTILE_SITE_KEY: '' },
      },
  projects: [
    { name: 'desktop', testIgnore: /integration/, use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', testIgnore: /integration/, use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } },
    {
      name: 'preview-desktop',
      testMatch: /integration/,
      use: { ...devices['Desktop Chrome'], baseURL: preview, trace: 'off' },
    },
    {
      name: 'preview-mobile',
      testMatch: /integration/,
      use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium', baseURL: preview, trace: 'off' },
    },
  ],
});
