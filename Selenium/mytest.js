const Chrome = require('selenium-webdriver/chrome');
const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");
const options = new Chrome.Options();
const {suite} = require('selenium-webdriver/testing');


suite(function (env) {
    describe('Should be able to Test Command line arguments', function () {
      it('headless', async function () {
    let driver;
    
    driver = await new Builder()
            .setChromeOptions()
            .forBrowser('chrome').build();
    await driver.get('https://www.saucedemo.com/');
    await driver.manage().setTimeouts({implicit: 500});
    await driver.findElement(By.id('user-name')).sendKeys('standard_user');
    await driver.findElement(By.id('password')).sendKeys('secret_sauce');
    await driver.findElement(By.id('login-button')).click();
    var textLogo = await driver.findElement(By.className('app_logo')).getText();
    assert.equal('Swag Labs', textLogo);
    await driver.quit();
});
});
});