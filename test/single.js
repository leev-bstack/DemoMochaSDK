var assert = require('assert');
const { Builder, By, Key, Capabilities, until } = require("selenium-webdriver");

describe('Google Search', async function() {
  this.timeout(0);
  var driver;

  this.beforeEach(function() {
    driver = new Builder().
    forBrowser('chrome').
    withCapabilities(Capabilities.chrome()).
    build();
  });

  it('Search for Browserstack', async function () {
    //go to Google
    await driver.manage().window().maximize();
    await driver.get('https://google.com/');
    //search for browserstack
    await driver.findElement(By.name('q')).sendKeys("BrowserStack", Key.RETURN);
    //await driver.findElement(By.name('btnK')).click
    //click result
    await driver.wait(until.elementLocated(By.xpath("//*[@href='https://www.browserstack.com/']")));
    await driver.findElement(By.xpath("//*[@href='https://www.browserstack.com/']/div")).click();
    });
    //verify page title
    await driver.wait(until.titleIs('Most Reliable App & Cross Browser Testing Platform | BrowserStack'), 10000);
  this.afterEach(async function() {
    await driver.quit();
  });
});
