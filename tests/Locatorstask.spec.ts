import {expect, Locator, test} from "@playwright/test"

//Task-1
test("Validate the getbyplaceholder and css selector",async({ page }) => {
await page.goto("https://demoqa.com/text-box")
await page.getByPlaceholder("Full Name").fill("Hariprasath")
await page.getByPlaceholder("name@example.com").fill("Hari@gamil.com")
await page.locator('[placeholder="Current Address"]').fill("Chennai")
})

//Task-2
test("Validate the getbyRole and css selector",async({ page }) => {
await page.goto("https://demoqa.com/buttons")
await page.getByRole('button',{name:'Click Me',exact:true}).click()
await page.locator("#rightClickBtn").click({button:"right"})
await page.locator("#doubleClickBtn").dblclick()

})

//Task-3
test("Validate the getbylabel & getbyrole & Css selector",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/login")
await page.getByLabel("Username").fill("Hariprasath")
await page.getByLabel("Password").fill("Hari@123")
await page.getByRole('button',{ name: /Login/i }).click();
await page.pause()

await page.locator("#username").fill("Hari")
await page.locator('[name=password]').fill("Hari@123")
await page.locator(".radius").click()
await page.pause()
})

//Task-4
test("Validate the checkbox by css selector",async({page})=>{
await page.goto("https://the-internet.herokuapp.com/checkboxes")
await page.locator('#checkboxes input:first-child').click()  //checkboxes
await page.locator('#checkboxes input').nth(1).click()
await page.pause()
})


//Task-7
test("Validate the getbytestid",async({page})=>{
await page.goto("https://www.saucedemo.com/")
await page.getByTestId("username").fill("Hari")
await page.getByTestId("password").fill("Hari@12345")
await page.getByTestId("login-button").click()
await page.pause()

})

//Task-8
test("Validate the getbyrole & getbytitle",async({page})=>{
await page.goto("https://www.google.com/")
await page.getByRole('combobox').fill("Playwright"); //combobox
await page.getByRole('button',{name:'Google Search'}).nth(0).click() //value=googlesearch
await page.pause()
await page.goBack()
let logo = await page.locator('[aria-label="Google"]').textContent() //textcontent
console.log(logo);
await page.locator(".gLFyf").fill("Hari")
await page.pause()
})

//Task-9
test("Validate the getbyrole & getbyplaceholder",async({page})=>{
await page.goto("https://www.youtube.com/")
await page.getByPlaceholder("Search").fill("Playwright")
await page.getByRole('button',{name:'Search',exact:true}).click()
await page.locator("a#logo").first().click() //using logo and getbyrole and getbytitle doubt
})

//Task-10
test("Validate the getbyplaceholder and getbyaltText",async({page})=>{
await page.goto("https://www.amazon.in")
await page.getByPlaceholder("Search Amazon.in").fill("Playwright book")
await page.locator('[type="submit"]').click()
await page.locator("#nav-logo-sprites").click()
await page.pause()
})

//Task-11
// test("Validate the flipkart page",async({page})=>{
// await page.goto("https://www.flipkart.com/")//flipkart alert is coming
// await page.locator("span[role='button']").filter({hasText : "✕"}).click()
// await page.getByPlaceholder("Search for Products, Brands and More").fill("iphone")
// await page.keyboard.press("Enter")
// await page.getByRole('link',{name:"Login"}).click()
// await page.pause()
// })
