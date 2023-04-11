var assert = require('assert');
const { Builder, By, Key, Capabilities, until } = require("selenium-webdriver");

describe('BrowserStack Search', async function() {
  var driver;

  this.beforeEach(function() {
    driver = new Builder().
    forBrowser('chrome').
    withCapabilities(Capabilities.chrome()).
    build();
  });

  it('data centers title is correct', async function () {
    //go to browserstack
    await driver.manage().window().maximize();
    await driver.get('https://browserstack.com/');
    //search for data centers
    await driver.findElement(By.xpath("//li[@class='hide-sm hide-xs']")).click();
    await driver.findElement(By.name('query')).sendKeys("Data Centers", Key.ENTER);
    //click result
    await driver.wait(until.elementLocated(By.xpath("//*[@href='https://www.browserstack.com/data-centers']")));
    await driver.findElement(By.xpath("//*[@href='https://www.browserstack.com/data-centers']")).click();
    //switch window
    const windows = await driver.getAllWindowHandles();
    await driver.switchTo().window(windows[1]);
    //verify page title
    await driver.wait(until.titleIs('Global Data Centers | BrowserStack'), 10000);
  });
  this.afterEach(async function() {
    await driver.quit();
  });
});
