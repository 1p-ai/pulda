import { defineConfig } from '@playwright/test';

const PORT = process.env.PORT || 4321;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 30 * 1000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'list',
  webServer: {
    command: `node ./node_modules/astro/astro.js preview --host 127.0.0.1 --port ${PORT}`,
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
});
