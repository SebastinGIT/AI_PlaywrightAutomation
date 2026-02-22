import { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

export async function executeSteps(page: Page, steps: any[]) {
  const login = new LoginPage(page);

  const actions: { keys: string[]; action: () => Promise<void> }[] = [
    {
      keys: ['open', 'goto', 'navigate'],
      action: async () => await page.goto('https://practicetestautomation.com/practice-test-login')
      //       const base = page.context()._options.baseURL;
      //       action: async () => await page.goto(new URL('/practice-test-login', base).toString())
      //       action: async () => await page.goto('/practice-test-login', { waitUntil: 'domcontentloaded' })
    },
    {
      keys: ['username'],
      action: async () => await page.fill('#username', 'testuser')
    },
    {
      keys: ['password'],
      action: async () => await page.fill('#password', 'password123')
    },
    {
      keys: ['login', 'click', 'submit'],
      action: async () => await page.click('#submit')
    },
  ];

  for (const raw of steps) {
    // 🔥 handle ALL possible AI outputs
    let step: string;

    if (Array.isArray(raw)) {
      step = raw.join(' ').toLowerCase(); // ["input","username"] → "input username"
    } else {
      step = String(raw).toLowerCase();
    }

    console.log('STEP →', step);

    for (const item of actions) {
      if (item.keys.some((k) => step.includes(k))) {
        await item.action();
        break;
      }
    }
  }
}