import {expect, test} from "@playwright/test"

test("Validate the Browser launch and Title",async({ page }) => {

await page.goto("https://playwright.dev/")

let title = await page.title();
console.log(title);

await expect (page).toHaveTitle(/Playwright/)

})