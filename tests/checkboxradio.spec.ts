import {expect, Locator, test} from "@playwright/test"

//Task-3
test("Validate the selecting particular checkbox",async({page})=>{
    await page.goto("https://demo.testautomationtv.com/checkboxes-radios")
   let javacheckbox = page.locator("#skill-java")
   await javacheckbox.check()
    await page.locator("#skill-typescript").check()
    await page.pause()
})


test("Validate the selecting all checkbox",async({page})=>{
    await page.goto("https://demo.testautomationtv.com/checkboxes-radios")

   const language : string[] = ["Java","TypeScript","Python","c#"]

       //let checkbox = language.map((value)=>page.getByLabel(value))

       for (const opt of language) {
        await page.getByLabel(opt).check()
        await page.pause()
       }
})

//Task-4

test("Validate the radio button",async({page})=>{
    await page.goto("https://demoqa.com/radio-button")
    const radio = page.locator("#yesRadio")
    await radio.check()
    await page.pause()
    await expect(radio).toBeChecked()
})