import { Page } from '@playwright/test';

// Self-healing click
export async function clickWithHeal(
  page: Page,
  primary: string,
  fallback: string
) {
  try {
    await page.locator(primary).click({ timeout: 3000 });
  } catch {
    console.log("Primary locator failed. Trying fallback...");
    await page.locator(fallback).click();
  }
}
