const webdriver = require('selenium-webdriver');

async function runTestWithCaps (capabilities) {

    let buildDriver = new webdriver.Builder();

    buildDriver.usingServer('http://sumanthclassroom_7DyqPS:d4kD9C3gxx8FiaFyrJXy@hub-cloud.browserstack.com/wd/hub');

    buildDriver.withCapabilities({
      ...capabilities,
      ...capabilities['browser'] && { browserName: capabilities['browser']}  // Because NodeJS language binding requires browserName to be defined
    });

    let driver = buildDriver.build();

    await driver.get("https://www.orangehrm.com/");

    console.log(await driver.getTitle());

    await driver.wait(webdriver.until.elementLocated(webdriver.By.id("linkadd")), 50000);

    await driver.findElement(webdriver.By.id("linkadd")).click();

    console.log(await driver.getTitle());

    await driver.quit();

}

const capabilities1 = {
    'bstack:options' : {
        "os": "Windows",
        "osVersion": "10",
        "buildName" : "browserstack-build-1",
        "sessionName" : "Parallel test 1",
    },
    "browserName": "chrome",
    "browserVersion": "102.0",
    }

runTestWithCaps(capabilities1)