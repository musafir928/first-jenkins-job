import { test } from '@playwright/test';

test.describe('Test Group', () => {
    //create beforeEach
      test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
        await page.waitForTimeout(2000);
      });
     

    
  test('Test A', async ({ page }) => {
    console.log("Test A is expected! This is the first test case in the Test Group. Test A is executed after all other test cases in the Test Group.");
    
  });

  test('Test B', async ({ page }) => {
    console.log("Test B is expected! This is the second test case in the Test Group. Test B is executed after Test A.");
    
  });

  test('Test C', async ({ page }) => {
   
    console.log("object A is expected! This is the third test case in the Test Group.");
  });
});