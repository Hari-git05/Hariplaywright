import {expect, Locator, test} from "@playwright/test"

//Task -1
test("Validate action single click",async({page})=>{
await page.goto("https://demoqa.com/buttons")
await page.getByRole('button',{name:"Click Me",exact:true}).click()
await page.pause()
})

test("Validate action right click",async({page})=>{
    await page.goto("https://demoqa.com/buttons")
    await page.locator("#rightClickBtn").click({button:"right"})
    await page.pause()
})

test("Validate action double click",async({page})=>{
    await page.goto("https://demoqa.com/buttons")
    await page.getByRole('button',{name:"Double Click Me",exact:true}).dblclick()
    await page.pause()
})

//Task-2
test("Validate action to fill details",async({page})=>{
    await page.goto("https://demoqa.com/text-box")
    await page.locator("#userName").fill("Hariprasath")
    await page.locator("#userEmail").fill("Hari@gmail.com")
    await page.locator("#currentAddress").fill("Chennai")
    await page.locator("#permanentAddress").fill("Vellore")
    await page.locator("#submit").click()
    await page.waitForTimeout(5000)
})




