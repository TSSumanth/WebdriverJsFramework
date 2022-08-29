const webdriver = require('selenium-webdriver')
let utils = require('./utils')
let driver;

describe("Browser stack integration tests 11", async function () {

    let capabilities = {
        'bstack:options': {
            "os": "Windows",
            "osVersion": "10"
        },
        "browserName": "chrome",
        "browserVersion": "102.0",
        "project": "Amazon Payment V2",
        "build" : "staging_build_0.0.1",
        'name' : "MyTestName"
    };

    beforeEach(async function () {
        capabilities['name'] = this.currentTest.title;
        driver = new webdriver.Builder()
            .usingServer('http://sumanthclassroom_7DyqPS:d4kD9C3gxx8FiaFyrJXy@hub-cloud.browserstack.com/wd/hub')
            .withCapabilities({
                ...capabilities,
                ...capabilities['browser'] && {browserName : capabilities['browser']}
            })
            .build();
        utils.driver = driver;
    })
    
    it("Google Test 11", async function () {
        await driver.get("https://google.com");
        console.log("The title for Google Home Page is: "+await driver.getTitle());
        // await utils.LogSuccess("Titile is retrived from google website");
    })

    it("Orange HRM Test 11", async function () {
        await driver.get("https://orangehrm.com");
        console.log(await driver.getTitle());
        // await utils.LogSuccess("Titile is retrived from Orange HRM website");
    })

    it("Amazon Test 11", async function () {
        await driver.get("https://amazon.in");
        console.log(await driver.getTitle());
        
        // await utils.LogFailure("Titile is not retrived from Amazon website");
    })

    afterEach(async function(){
        if(this.currentTest.state == 'failed'){
            await utils.LogFailure("Test Case: "+ this.currentTest.title + " Failed");
        }else  if(this.currentTest.state == 'passed'){
            await utils.LogSuccess("Test Case: "+ this.currentTest.title + " Passed");
        }
        await driver.quit();
    })


})