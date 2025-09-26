
const { Given, When, Then } = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")

Given('User launch the Application', async function () {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
});

When('User Enter username as {string} and Password As {string}', async function (username, Password) {

    await page.locator('//input[@name="username"]').fill(username)
    await page.locator('//input[@name="password"]').fill(Password)
});

When('User clicks on Login Button', async function () {

    await page.locator('//button[@type="submit"]').click()
});

Then('User should be Navigated to Dashbaord Page', async function () {

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

});

Then('User Should login error Message', async function () {

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
});