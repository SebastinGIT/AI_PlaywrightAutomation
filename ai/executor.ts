import { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

export async function executeSteps(page: Page, steps: string[]) {

  const login = new LoginPage(page);

  for (const step of steps) {

    if (step.includes("goto")) {
      await page.goto('/login');
    }

    if (step.includes("username")) {
      await page.fill('#username', 'testuser');
    }

    if (step.includes("password")) {
      await page.fill('#password', 'password123');
    }

    if (step.includes("click")) {
      await login.login('testuser', 'password123');
    }

    if (step.includes("verify")) {
      await page.waitForTimeout(1000);
    }
  }
}
