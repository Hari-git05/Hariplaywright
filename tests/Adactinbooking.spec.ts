import { test, expect } from "@playwright/test";
import BookingData from "../Testdata/Bookingdata.json";

test.describe("Adactin Hotel Booking", () => {

    // Runs once before all tests
    test.beforeAll(async () => {
        console.log("========== Test Suite Started ==========");
    });


    // Runs before every test
    test.beforeEach(async ({ page }) => {

        await page.goto(
            "https://adactinhotelapp.com/HotelAppBuild2/",
            { waitUntil: "domcontentloaded" }
        );

        await expect(page.locator("#username")).toBeVisible();

        console.log("Login page opened");
    });

    // Test
    test("Complete hotel booking @smoke @regression", async ({ page }) => {

        // Login
        await page.locator("#username")
            .fill(BookingData.username);

        await page.locator("#password")
            .fill(BookingData.password);

        console.log(
            "Username entered:",
            await page.locator("#username").inputValue()
        );

        console.log(
            "Password length:",
            (await page.locator("#password").inputValue()).length
        );

        await page.locator("#login")
            .click();

        await page.waitForLoadState("domcontentloaded");

        console.log("After login URL:", page.url());

        await expect(page)
            .toHaveURL(/SearchHotel\.php/);


        // Search Hotel

        await page.locator("#location")
            .selectOption({
                label: BookingData.location
            });

        await page.locator("#hotels")
            .selectOption({
                label: BookingData.hotel
            });

        await page.locator("#room_type")
            .selectOption({
                label: BookingData.roomType
            });

        await page.locator("#room_nos")
            .selectOption({
                label: BookingData.numberOfRooms
            });

        await page.locator("#datepick_in")
            .fill(BookingData.checkInDate);

        await page.locator("#datepick_out")
            .fill(BookingData.checkOutDate);

        await page.locator("#adult_room")
            .selectOption({
                label: BookingData.adultsPerRoom
            });

        await page.locator("#child_room")
            .selectOption({
                label: BookingData.childrenPerRoom
            });

        await page.locator("#Submit")
            .click();


        // Select Hotel

        await page.locator('input[name="radiobutton"]')
            .first()
            .check();

        await page.locator("#continue")
            .click();


        // Booking Details

        await page.locator("#first_name")
            .fill(BookingData.firstName);

        await page.locator("#last_name")
            .fill(BookingData.lastName);

        await page.locator("#address")
            .fill(BookingData.billingAddress);


        // Payment

        await page.locator("#cc_num")
            .fill(BookingData.creditCardNumber);

        await page.locator("#cc_type")
            .selectOption({
                label: BookingData.creditCardType
            });

        await page.locator("#cc_exp_month")
            .selectOption({
                label: BookingData.expiryMonth
            });

        await page.locator("#cc_exp_year")
            .selectOption({
                label: BookingData.expiryYear
            });

        await page.locator("#cc_cvv")
            .fill(BookingData.cvv);


        // Book

        await page.locator("#book_now")
            .click();


        // Verify Booking Confirmation

        await expect(page)
            .toHaveURL(/BookingConfirm\.php/);

        const orderNumber =
            await page.locator("#order_no")
                .inputValue();

        console.log("Order Number:", orderNumber);

        expect(orderNumber).not.toBe("");
    });


    // Runs after every test
    test.afterEach(async ({ page }, testInfo) => {

        console.log(
            "Test Name:",
            testInfo.title
        );

        console.log(
            "Test Status:",
            testInfo.status
        );

        await page.screenshot({
            path: `screenshots/${testInfo.title.replace(/\s+/g, "_")}.png`,
            fullPage: true
        });
    });


    // Runs once after all tests
    test.afterAll(async () => {

        console.log("========== Test Suite Completed ==========");

    });

});