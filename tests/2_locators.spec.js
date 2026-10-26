import { test, expect } from '@playwright/test';

test( 'Locate elements on the page using Placeholders locators', async ({ page}) =>{
  //  await page.goto('https://www.saucedemo.com/');

   // await page.getByPlaceholder('Username').fill('standard_user');
    //await page.getByPlaceholder('Password').fill('secret_sauce');
    //await page.getByRole('button', {name : 'login-button'}).click();
    //role basesd locator --> 
     await page.goto('https://www.saucedemo.com/');

    // Enter username
    await page.getByPlaceholder('Username').fill('standard_user');

    // Enter password
    await page.getByPlaceholder('Password').fill('secret_sauce');

    // Click Login button
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify successful login
    await expect(page).toHaveURL(/inventory.html/);
});

