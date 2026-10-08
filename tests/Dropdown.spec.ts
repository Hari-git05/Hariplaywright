import {expect, Locator, test} from "@playwright/test"

//Task-5
test("Validate the single dropdown select",async({page})=>{
    //By Text
    await page.goto("https://testautomationpractice.blogspot.com/")
    const countrydrop : Locator = page.locator("#country")
    await countrydrop.scrollIntoViewIfNeeded();
    await  countrydrop.selectOption("United Kingdom")
    await page.waitForTimeout(3000);
    await expect(countrydrop).toHaveValue("uk")

    //By Value
    await countrydrop.selectOption({value:"china"})
    await expect(countrydrop).toHaveValue("china")
    await page.waitForTimeout(3000)

    //By index
    await countrydrop.selectOption({index:4})
    await page.waitForTimeout(3000)
    await expect(countrydrop).toHaveValue("france")
})

//Task-6
test("Validate the multiple dropdown select",async({page})=>{
    //By Text
    await page.goto("https://testautomationpractice.blogspot.com/")
    const colorsdrop : Locator = page.locator("#colors")
    await colorsdrop.scrollIntoViewIfNeeded();
    await colorsdrop.selectOption(["Red","Blue","Green"])
    await page.waitForTimeout(3000);
    await expect(colorsdrop).toHaveValues(["red","blue","green"])
    
})

