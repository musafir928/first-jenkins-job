//to import a function: 
// const {test} =require("@playwright/test")
//or another way: 
import {test} from "@playwright/test";

test("Simple Google Search Test @google01", async({page}) => {
await page.goto("https://www.google.com/")

let searchBox= page.locator("//textarea[@class='gLFyf']")//button[2];
let button = page.locator("//button[2]")
await button.click()

await page.waitForTimeout(3000);
//await searchBox.type("Playwright Automation");
await searchBox.fill("Playwright Automation");
await page.waitForTimeout(3000);
await searchBox.press("Enter");
await page.waitForTimeout(3000);


});

test("Simple Youtube Search Test @youtube", async({page}) => {
await page.goto ("https://www.youtube.com/")


})
