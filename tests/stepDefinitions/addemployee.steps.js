const { Given, When, Then } = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test")

When('User clicks on PIM Menu', async function () {

  await page.locator('//a[@href="/web/index.php/pim/viewPimModule"]').click()
});


When('User clicks on Add Employee SubMenu', async function () {

  await page.locator("//a[text()='Add Employee']").click()
});


When('User Enter firstname as {string} and Lastname as {string}', async function (firstname, lastname) {

  await page.locator('//input[@name="firstName"]').fill(firstname)

  await page.locator('//input[@name="lastName"]').fill(lastname)

});

When('User clicks Save button', async function () {

  await page.locator('//button[@type="submit"]').click()

});

Then('User Employee should be created', async function () {

  await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible()
});

Then('User get Error Message for Mandatory Fields', async function () {

  await expect(page.locator('(//span[text()="Required"])[1]')).toBeVisible()
  await expect(page.locator('(//span[text()="Required"])[2]')).toBeVisible()
});