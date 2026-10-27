import { test, expect } from '@playwright/test';

test('Login  saucedemo Website', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory.html/);

    await page.locator('#add-to-cart-sauce-labs-backpack').click();

    await page.locator('.shopping_cart_badge').click();

    await expect(page).toHaveURL(/cart.html/);

    await page.locator('#checkout').click();

     await expect(page).toHaveURL(/checkout-step-one.html/);

     await page.getByPlaceholder('First Name').fill('John');
     await page.getByPlaceholder('Last Name').fill('Doe');
     await page.getByPlaceholder('Zip/Postal Code').fill('12345');

     await page.locator('#continue').click();

     await expect(page).toHaveURL(/checkout-step-two.html/);

     await page.locator('#finish').click();

     await expect(page).toHaveURL(/checkout-complete.html/);



});