import { test, expect } from '@playwright/test';

test.describe('Authentication - Tasks 1 to 5', () => {

  // TASK 2 - beforeAll()
  test.beforeAll(async () => {
    console.log('========== beforeAll ==========');
    console.log('Test suite started');
    console.log('Application setup executed once');
  });

  // TASK 3 - beforeEach()
  test.beforeEach(async ({ page }) => {
    console.log('========== beforeEach ==========');
    console.log('Opening SauceDemo login page');

    await page.goto('https://www.saucedemo.com/');
  });

  // TASK 4 - afterEach()
  test.afterEach(async ({ page }, testInfo) => {
    console.log('========== afterEach ==========');
    console.log(`Test completed: ${testInfo.title}`);

    await page.screenshot({
      path: `screenshots/${testInfo.title.replace(/\s+/g, '_')}.png`,
      fullPage: true
    });

    console.log('Screenshot captured');
  });

  // TASK 1 - test.describe()
  test('Login Test', async ({ page }) => {

    console.log('Executing Login Test');

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();

    await expect(page).toHaveURL(
      'https://www.saucedemo.com/inventory.html'
    );

    console.log('Login successful');
  });

  test('Logout Test', async ({ page }) => {

    console.log('Executing Logout Test');

    // Login first
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');

    await page.locator('#login-button').click();

    await expect(page).toHaveURL(
      'https://www.saucedemo.com/inventory.html'
    );

    // Logout
    await page.locator('#react-burger-menu-btn').click();

    await page.locator('#logout_sidebar_link').click();

    await expect(page).toHaveURL(
      'https://www.saucedemo.com/'
    );

    console.log('Logout successful');
  });

  // TASK 5 - afterAll()
  test.afterAll(async () => {
    console.log('========== afterAll ==========');
    console.log('All tests completed');
    console.log('Suite-level cleanup executed once');
  });

});