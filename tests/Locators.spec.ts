import {expect, Locator, test} from "@playwright/test"

test("Validate the Locators",async({ page }) => {

await page.goto("https://demo.playwright.dev/api-mocking/")

let title = await page.title();
console.log(title);

await expect (page).toHaveTitle(/Playwright/)

let text : Locator = page.getByText('Banana')
console.log(text);

})

test("validate the Locators getby placeholder",async({ page }) =>{

    await page.goto("https://demo.playwright.dev/todomvc/#/")
    await expect (page).toHaveTitle(/TodoMVC/)
    await page.getByPlaceholder("What needs to be done?").fill("Learn Playwright")
    
})