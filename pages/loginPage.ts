import { Page } from '@playwright/test';
import { clickWithHeal } from '../ai/selfHeal';

export class LoginPage {

  constructor(private page: Page) {}

  async login(user: string, pass: string) {

    await this.page.fill('#username', user);
    await this.page.fill('#password', pass);

    await clickWithHeal(this.page, '#loginBtn', 'text=Login');
  }
}
