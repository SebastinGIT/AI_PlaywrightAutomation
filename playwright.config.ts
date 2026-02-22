import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  use: {
    headless: false,
    baseURL: 'https://practicetestautomation.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
