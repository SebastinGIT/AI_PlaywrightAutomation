import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  globalSetup: './global-setup.ts',
  use: {
    headless: false,
    baseURL: 'https://practicetestautomation.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
