import { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

export async function executeSteps(page: Page, steps: string[]) {

  const login = new LoginPage(page);

  for (const step of steps) {

    if (step.includes("goto")) {
      await page.goto('/practice-test-login');
    }

    if (step.includes("username")) {
      await page.fill('#username', 'student');
    }

    if (step.includes("password")) {
      await page.fill('#password', 'Password123');
    }

    if(step.includes("submit")) {
        await page.click('button');
    }

//Commented the below code
//     if (step.includes("click")) {
//       await login.login('testuser', 'Password123');
//     }

    if (step.includes("verify")) {
      await page.waitForTimeout(1000);
    }
  }
}
