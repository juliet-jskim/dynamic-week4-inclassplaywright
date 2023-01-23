import { test, expect } from '@playwright/test' //importing all of our tests from playwright


var homePage = 'http://localhost:3000';
var aboutPage = 'http://localhost:3000/about';
var gradesPage = 'http://localhost:3000/grades';

//the yellow tags are all built-in tests

test.beforeAll(async () => {
    console.log('Before tests');

})

test.afterAll(async () => {
    console.log('After tests')
})


//these tests go in random order
//describe organizes and groups the tests all in one area, can have hundreds of tests
//async = waiting for some sort of result (waiting until something appears on the screen) then it will go to the page, whereever you want, and testing that page. 
//expecting the page to have a certain title, and it must match the contents of that title, or else it will not pass the test 
test.describe('Head tag area', () => {
    test('Contains the Head tag and its contents', async ({ page }) => {
        await page.goto(homePage);

        await expect(page).toHaveTitle("Example #1");

        const metaDescription = page.locator('meta[name="description"]');
        await expect(metaDescription).toHaveAttribute('content', 'Generated by create next app')

        const linkIcon = page.locator('link[rel="icon"]');
        await expect(linkIcon).toHaveAttribute('href', '/favicon.ico')
        })
})

test.describe("Main content tests", () => {

}