import test, { expect } from "@playwright/test"

//Task-1 - Simple Alerts
test("Simple Alerts",async({page})=>{

     await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

     page.on("dialog",async (dialog)=>{

        let alertType = dialog.type();
        console.log(alertType);
        expect(alertType).toContain("alert");

        console.log("Alert message : ", dialog.message());
        expect(dialog.message()).toBe("I am a JS Alert")
        await dialog.accept();
     })

     await page.locator("button[onclick='jsAlert()']").click()
     
     const result = await page.locator("#result").innerText()
     expect(result).toContain("You successfully clicked an alert");
})

//Task-2 Confirmation Alert accept
test("Confirmation Alerts accept",async({page})=>{

     await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

     page.on("dialog",async (dialog)=>{
        let alertType = dialog.type();
        console.log(alertType);
        expect(alertType).toContain("confirm");

        console.log("Alert message : ", dialog.message());
        expect(dialog.message()).toBe("I am a JS Confirm")
        await dialog.accept();
     })

     await page.locator("button[onclick='jsConfirm()']").click()
     
     const result = await page.locator("#result").innerText()
     expect(result).toContain("You clicked: Ok");
})

//Task-3 Confirmation Alert dismiss
test("Confirmation Alerts dismiss",async({page})=>{

     await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

     page.on("dialog",async (dialog)=>{

        console.log("Alert message : ", dialog.message());
        expect(dialog.message()).toBe("I am a JS Confirm")
        await dialog.dismiss();
     })

     await page.locator("button[onclick='jsConfirm()']").click()
     
     const result = await page.locator("#result").innerText()
     expect(result).toContain("You clicked: Cancel");
})

//Task-4 Prompt Alert
test("Prompt Alert",async({page})=>{

     await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

     page.on("dialog",async (dialog)=>{

        let alertType = dialog.type();
        console.log(alertType);
        expect(alertType).toContain("prompt");

        console.log("Prompt message : ", dialog.message());
        expect(dialog.message()).toBe("I am a JS prompt")
        await dialog.accept(inputText);
     })

     const inputText = "Hello Playwright"
     await page.locator("button[onclick='jsPrompt()']").click()
     
     const result = await page.locator("#result").innerText()
     expect(result).toContain("Hello Playwright");
})


//Task-6
test("Simple Alert",async({page})=>{

     await page.goto("https://demoqa.com/alerts")

     page.on("dialog",async (dialog)=>{

        expect(dialog.type()).toBe("alert");
        expect(dialog.message()).toBe("You clicked a button")

        await dialog.accept();
     })
     await page.locator("#alertButton").click();

})

//Task-7
test("Delayed Alert",async({page})=>{

     await page.goto("https://demoqa.com/alerts")

     page.on("dialog",async (dialog)=>{
        
        console.log("Dialog type : ", dialog.type());
        console.log("Dialog message is : ", dialog.message());
        
        expect(dialog.type()).toBe("alert");
        await dialog.accept();
     })
     await page.locator("#timerAlertButton").click();

})


//Task-8
test("Confirmation Alert",async({page})=>{

     await page.goto("https://demoqa.com/alerts")

     page.on("dialog",async (dialog)=>{

        expect(dialog.type()).toBe("confirm");
        expect(dialog.message()).toBe("Do you confirm action?")
        
        await dialog.accept();
     })
     await page.locator("#confirmButton").click();
     await expect(page.locator("#confirmResult")).toHaveText("You selected Ok")

})

//Task-9
test("Confirmation Alert Dismiss",async({page})=>{

     await page.goto("https://demoqa.com/alerts")

     page.on("dialog",async (dialog)=>{

        expect(dialog.type()).toBe("confirm");
        expect(dialog.message()).toBe("Do you confirm action?")
        
        await dialog.dismiss();
     })
     await page.locator("#confirmButton").click();
     await expect(page.locator("#confirmResult")).toHaveText("You selected Cancel")

})