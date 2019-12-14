import { WebDriver, Builder, until } from "selenium-webdriver";
let wb  = require("selenium-webdriver");
let chrome = require('selenium-webdriver/chrome');
let firefox = require('selenium-webdriver/firefox');
let driver:WebDriver;

async function funon(applicationurl:string){
    let corsOption = new chrome.Options();
    corsOption.addArguments("--window-size=1400,1000");
     driver = new Builder().forBrowser("chrome")
        .setChromeOptions(corsOption)
        .build();
    await driver.manage().window().maximize();
    console.log("launchBrowser Chrome Browser launched");

    await driver.get(applicationurl);

    console.log(await driver.getTitle());

    await driver.close();
}
async function test(){
await funon("https://www.google.com");
}
test();

