import test, { expect, Frame, FrameLocator, Locator } from "@playwright/test";

//Task-1
test("Validate the frame counts",async({page})=>{
    await page.goto("https://demoqa.com/frames")

    const framecount = await page.locator("iframe").count()
    console.log("Iframe count is : ",framecount);

    let frames = page.frames();
    console.log("Total frames : ", frames.length);

    // for (const frm of frames) {
    //     console.log(frm.url());
    // }
    
})

//Task-2
test("Read the text from frame",async({page})=>{
    await page.goto("https://demoqa.com/frames")

    const singleframe : FrameLocator = page.frameLocator("#frame1")

    const text = await singleframe.locator("#sampleHeading").innerText()
    console.log(text);

    expect(text).toBe("This is a sample page")
    
})

//Task-3
test("Read the text from two frames",async({page})=>{
    await page.goto("https://demoqa.com/frames")

    const Largeframe : string = await page.frameLocator("#frame1").locator("#sampleHeading").innerText();
    const Smallframe : string = await page.frameLocator("#frame2").locator("#sampleHeading").innerText();
    
    console.log("Large frame text is : ", Largeframe);
    console.log("Small frame text is : ", Smallframe);
    
    //console.log("Compare : ", Largeframe === Smallframe);
    if(Largeframe===Smallframe){
        console.log(true);
    }else{
        console.log(false);
        
    }
    
})

//Task-4
test("Validate the nested frame",async({page})=>{
    await page.goto("https://demoqa.com/nestedframes")

    // const framecount = await page.locator("iframe").count()
    // console.log("Iframe count is : ",framecount);

    //await page.waitForTimeout(3000);
    let frames : Frame[] = page.frames();
    console.log("Total frames : ", frames.length);

    for (const fr of frames) {
        console.log(fr.url());
    }
    
})

//Task-6
test("Validate the nested frames",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/nested_frames")

    let frames : Frame[] = page.frames();
    console.log("Total frames : ", frames.length);

    for (const fr of frames) {
        console.log(fr.url());
    }

    let leftframe = await page.frame({name : 'frame-left'})
    let lefttext = await leftframe?.locator('body').innerText();
    console.log(lefttext);

    let middleframe = await page.frame({name : 'frame-middle'})
    let middletext = await middleframe?.locator('body').innerText();
    console.log(middletext);

    let rightframe = await page.frame({name : 'frame-right'})
    let righttext = await leftframe?.locator('body').innerText();
    console.log(righttext);

    let bottomframe = await page.frame({name : 'frame-bottom'})
    let bottomtext = await bottomframe?.locator('body').innerText();
    console.log(bottomtext);

})

//Task-7
test("Validate the frames inside frame",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frame1 = page.frameLocator('frame[src="frame_1.html"]');
    const input = frame1.locator('input[name="mytext1"]');
    await input.fill("Hari")
    await page.waitForTimeout(5000)
    await expect(input).toHaveValue("Hari")

})

//Task-8
test("Validate the frames inside nested frame",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    const framecount = page.frames();
    console.log("Total frames is : ",framecount.length);

    for (const frm of framecount) {
     console.log(frm.url());
        
    }
    
    const frame1 = page.frameLocator('frame[src="frame_1.html"]');
    const input = frame1.locator('input[name="mytext1"]');
    await input.fill("Hari")
    await page.waitForTimeout(5000)
    await expect(input).toHaveValue("Hari")

    const frame2 = page.frameLocator('frame[src="frame_2.html"]');
    const input2 = frame2.locator('input[name="mytext2"]');
    await input2.fill("Prasath")
    await page.waitForTimeout(5000)
    await expect(input2).toHaveValue("Prasath")

    const frame3 = page.frameLocator('frame[src="frame_3.html"]');
    const input3 = frame3.locator('input[name="mytext3"]');
    await input3.fill("car")
    await page.waitForTimeout(5000)
    await expect(input3).toHaveValue("car")

    const frame4 = page.frameLocator('frame[src="frame_4.html"]');
    const input4 = frame4.locator('input[name="mytext4"]');
    await input4.fill("love")
    await page.waitForTimeout(5000)
    await expect(input4).toHaveValue("love")

})