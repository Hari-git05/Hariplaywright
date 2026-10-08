import {expect, Locator, test} from "@playwright/test"

//Task-22
test("Validate the Dynamic dropdown",async({page})=>{
    //By Text
    await page.goto("https://www.irctc.co.in/nget/train-search")

    await page.getByText("English").click()
    const from = await page.getByRole("searchbox").nth(0)
    await from.fill("Chennai")

    //let fromoptions : Locator = page.locator('[role="listbox"][role="option"]')
    let fromoptions : Locator = page.locator('[role="option"]')

    await page.waitForTimeout(5000);
    await expect(fromoptions.first()).toBeVisible()
    console.log("Count of listed fromoption dynamic dropdown is : ", await fromoptions.count())

    // const fromall : string[] = await fromoptions.allInnerTexts()
    // console.log(fromall);
    
    // for (const element of fromall) {
    //     console.log(element);
    // }

    await fromoptions.nth(7).click()
    await page.pause()


    const to = await page.getByRole("searchbox").nth(1)
    await to.fill("Coimbatore")

    //let fromoptions : Locator = page.locator('[role="listbox"][role="option"]')
    let tooptions : Locator = page.locator('[role="option"]')

    await page.waitForTimeout(5000);
    await expect(tooptions.first()).toBeVisible()
    console.log("Count of listed tooption dynamic dropdown is : ", await tooptions.count())

    const toall : string[] = await tooptions.allInnerTexts()
    console.log(toall);
    
    for (const element of toall) {
        console.log(element);
    }

    await to.nth(0).click()
    await page.pause()

    await page.getByRole("button",{name:" Search Trains "}).click()
    await page.pause()

})