import test, { expect } from "@playwright/test";

test.describe('Authentication', ()=> {

    test('Login', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle(/Swag Labs/);

    console.log('Login test executed');

});

 test('Logout', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle(/Swag Labs/);

    console.log('Logout test executed');
  });

});