import {expect, Locator, test} from "@playwright/test"

//Task-1 and 2 - Count the number of rows and columns
test("Validate the Webtable with row and cols count and search one record",async({page})=>{
    //By Text
    await page.goto("https://demoqa.com/webtables")

    //const table = page.locator("table.-striped -highlight table table-striped table-bordered table-hover")

    //const table = page.locator("table.table-stripped.table-hover")

    const fulltable = page.locator("table")
    await expect(fulltable).toBeVisible();

    const fullrows = fulltable.locator("tr")
    console.log("Total number of rows are : ", await fullrows.count());

    const fullcols = fulltable.locator("th")
    console.log("Total number of columns are : ", await fullcols.count());
    
    //Task-2 Search the record of one employee 

    await page.locator("#searchBox").fill("Kierra")
    await page.waitForTimeout(5000);
 
    const allrow : Locator[] = await fullrows.all()
    //console.log(allrow);

   for (const allrowtext of allrow.slice(1)) {
    console.log(await allrowtext.innerText());
    const name = await allrowtext.locator("td").nth(0).innerText()
    console.log("Employee name is : ", name);
    expect(name).toBe("Kierra")
   }

})

//Task - 3 Edit and update the record
test("Validate the Webtable with edit and update the record",async({page})=>{

    await page.goto("https://demoqa.com/webtables")

    const fulltable = page.locator("table")
    await expect(fulltable).toBeVisible();

    const fullrows = fulltable.locator("tr")
    console.log("Total number of rows are : ", await fullrows.count());

    const fullcols = fulltable.locator("th")
    console.log("Total number of columns are : ", await fullcols.count());

    await page.locator("#searchBox").fill("Kierra")
    await page.waitForTimeout(5000);
 
    const allrow : Locator[] = await fullrows.all()
    //console.log(allrow);

   for (const allrowtext of allrow.slice(1)) {
    console.log(await allrowtext.innerText());
    const name = await allrowtext.locator("td").nth(0).innerText()
    if(name === "Kierra"){
        console.log("Kierra row found");   
        await page.locator("#edit-record-3").click()
        break;
    }
   }

   let Oldsalary = await page.locator("#salary").getAttribute("value")
    console.log("Old salary before changing is : ", Oldsalary);
    
    await page.locator("#salary").fill("10000")
    await page.locator("#submit").click()

    await page.waitForTimeout(5000);

    const Newsalary = await page.locator("table tr").filter({hasText : "Kierra"}).locator("td").nth(4).innerText()

    console.log("New salary of kierra is : ", Newsalary);
    
     expect(Oldsalary).toBe("2000")
     expect(Newsalary).toBe("10000")
})


//Task - 4 Delete the record
test("Delete the record",async({page})=>{

    await page.goto("https://demoqa.com/webtables")

    const rows = await page.locator("table tr").all()
    
    for (const rowvalue of rows.slice(1)) {
      const row = await rowvalue.locator("td").nth(0).innerText()
       console.log("Before deleting the row : ",row);
    if(row.includes("Alden")){
        await rowvalue.locator("#delete-record-2").click()
        break;
    }
    }

    await page.waitForTimeout(5000)
    let afterdelete = await page.locator("table tr").filter({hasText : "Alden"})
    expect(afterdelete).toHaveCount(0)

})

//Task - 5 Take all rows and counts of example 1
test("Take all rows and count of example 1",async({page})=>{

    await page.goto("https://the-internet.herokuapp.com/tables")

    const rows = await page.locator("#table1 tbody tr").all()

    for (const row of rows) {
        let cols = await row.locator("td").allInnerTexts()
        console.log(cols);
    }

})

//Task - 6 Sorting table coloumns
// test.only("Sorting Table columns",async({page})=>{

//     await page.goto("https://the-internet.herokuapp.com/tables")

//     await page.locator("#table1 th").nth(0).click()

//     for (const row of rows) {
//         let cols = await row.locator("td").allInnerTexts()
//         console.log(cols);
//     }

// })



//Task - 7 Selecting checkbox inside row
test("Selecting checkbox inside row",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const rows = await page.locator("#productTable tbody tr").all()

    for (const row of rows) {
       let cols = await row.locator("td").allInnerTexts()
       console.log(cols);
       if(cols.includes("Laptop")){
        const checkbox = row.locator("input[type='checkbox']")
        await checkbox.scrollIntoViewIfNeeded()
        checkbox.check()
        expect(checkbox).toBeChecked();
       }
    }
    await page.waitForTimeout(3000);

})