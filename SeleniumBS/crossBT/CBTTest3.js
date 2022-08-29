let webdriver = require('selenium-webdriver');
let utils = require('./utils')
let driver;
let capability;
let capabilities = [{
    'bstack:options': {
        "os": "Windows",
        "osVersion": "10"
    },
    "browserName": "chrome",
    "browserVersion": "102.0",
    "project": "Amazon Payment V2",
    "build": "staging_build_0.0.2",
    'name': "MyTestName"
},
{
    'bstack:options': {
        "os": "Windows",
        "osVersion": "10"
    },
    "browserName": "firefox",
    "browserVersion": "102.0",
    "project": "Amazon Payment V2",
    "build": "staging_build_0.0.2",
    'name': "MyTestName"
}];
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
describe("CBT Test Suite", async function () {

    beforeEach(async function () {
        console.log("Before Each for " + this.currentTest.title);
    })

    afterEach(async function () {
        console.log("After Each for " + this.currentTest.title);
        if(this.currentTest.state == 'failed'){
            await utils.LogFailure("Test Case: "+ this.currentTest.title + " Failed");
        }else  if(this.currentTest.state == 'passed'){
            await utils.LogSuccess("Test Case: "+ this.currentTest.title + " Passed");
        }
        await driver.quit();
    });

    capabilities.forEach(function (value) 
    {
        it('Test 1', async function () {
            value['name'] = this.test.title;
            await setUp(value);
            await driver.get("https://google.com");
            console.log("The title for Google Home Page is: "+await driver.getTitle());
        })

        it('Test 2', async function () {
            value['name'] = this.test.title;
            await setUp(value);
            await driver.get("https://amazon.in");
            console.log(await driver.getTitle());
        })
    })
})