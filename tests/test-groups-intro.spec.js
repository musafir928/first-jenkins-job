import {test} from "@playwright/test"

test.describe("User Story01 @user01", async() => {

    //create beforeall()
        test.beforeAll(async () => {
            console.log("beforeAll  function is executed");
        })
//create afterAll()
        test.afterAll(async () => {
            console.log("afterAll function is executed");
        });

        //create beforeEach()
         test.beforeEach(async () => {
            console.log("beforeEach function is executed");
        });

        //create afterEach()
         test.afterEach(async () => {
            console.log("afterEach function is executed");
        });
    
    test("Test Case01", async({page}) => {
console.log("Test case 1 is expected!");



});

test("Test Case02", async({page}) => {
    console.log("Test case 2 is expected!");
});

test("Test Case03", async({page}) => {
    console.log("Test case 3 is expected!");
})
}) ;