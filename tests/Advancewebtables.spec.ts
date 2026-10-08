import test, { Locator } from "@playwright/test";

//Task -10
test("Selecting rows and values of world meter",async({page})=>{

     await page.goto("https://www.worldometers.info/world-population/population-by-country/")

     const table = page.locator(".datatable")

     const rows = table.locator("tbody tr")

     console.log("Total number of rows are : ", await rows.count());
     
    for(let i = 0;i<5;i++){
        const Country = await rows.nth(i).locator("td").nth(1).innerText()
        const Population = await rows.nth(i).locator("td").nth(2).innerText()

        console.log(Country, "-", Population);
    }
})
//Task -11
test.only("Selecting rows and values of top NSE Gainers and losers",async({page})=>{

     await page.goto("https://www.nseindia.com/")
     await page.locator("#link_2").click()
     await page.getByText("Gainers/Losers",{exact : true}).click()
     await page.waitForTimeout(3000);
     const Table : Locator = page.locator("#topgainer-Table");
     const Rows : Locator = Table.locator("tbody tr");
     const Header : Locator = Table.locator("thead th")

      console.log("Headers :", await Header.allInnerTexts());
      console.log("Total number of rows are : ", await Rows.count());

      for(let i=0;i<5;i++){

        let Stockname = await Rows.nth(i).locator("td").nth(0).innerText()
        let Openprice = await Rows.nth(i).locator("td").nth(2).innerText()
        let LTP = await Rows.nth(i).locator("td").nth(5).innerText()
        let Changepercentage = await Rows.nth(i).locator("td").nth(6).innerText()

        console.log(Stockname, "-", Openprice,",",LTP,",",Changepercentage);
      }
})