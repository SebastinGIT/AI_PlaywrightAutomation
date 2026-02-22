import { test } from '@playwright/test';
import { generateSteps } from '../ai/agent';
import { executeSteps } from '../ai/executor';

test('AI Login Test', async ({ page }) => {
  const steps = await generateSteps('goto login page and login with a valid user');
  await executeSteps(page, steps);
});