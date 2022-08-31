let webdriver = require('selenium-webdriver');
let capabilites = require('./config').capabilities;
let utils = require('./utils');
let driver;


async function setUp(cap)
{
    driver = await new webdriver.Builder()
        .usingServer('http://sumanthclassroom_7DyqPS:d4kD9C3gxx8FiaFyrJXy@hub-cloud.browserstack.com/wd/hub')
        .withCapabilities({
            ...cap,
            ...cap['browser'] && {browserName : cap['browser']}
        })
        .build();
    utils.driver = driver;
}

describe("CrossBrowserTesting Suite 1", async function(){

    beforeEach(async function(){
        console.log("Beafore each method of "+ this.currentTest.title)
    })

    afterEach(async function(){
        if(this.currentTest.state == 'failed'){
            await utils.LogFailure("Test Case: "+ this.currentTest.title + " Failed");
        }else  if(this.currentTest.state == 'passed'){
            await utils.LogSuccess("Test Case: "+ this.currentTest.title + " Passed");
        }
        await driver.quit(); 
    });
    capabilites.forEach(function(capability){

        it("Google Test 1", async function(){
            capability['name'] = this.test.title;
            await setUp(capability);
            await driver.get("https://google.com");
            console.log("Title of the Website is:" + await driver.getTitle());
        })
    
        it("Orange HRM Test 1", async function(){
            capability['name'] = this.test.title;
            await setUp(capability);
            await driver.get("https://orangehrm.com");
            console.log("Title of the Website is:" + await driver.getTitle());
        })
    
        it("Amazon Test 1", async function(){
            capability['name'] = this.test.title;
            await setUp(capability);
            await driver.get("https://amazon.com");
            console.log("Title of the Website is:" + await driver.getTitle());
        })
    })
    

})

