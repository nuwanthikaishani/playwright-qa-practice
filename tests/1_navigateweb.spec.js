 import { test, expect } from '@playwright/test';

 test('Navigate to Google and check title', async ({ page }) => {

    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle('Google');

 });