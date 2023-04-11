var assert = require('assert');
const { Builder, By, Key, Capabilities, until } = require("selenium-webdriver");

var buildDriver = function() {
  return new Builder().
    forBrowser('chrome').
    withCapabilities(Capabilities.chrome()).
    build();
};

describe('Test 1', async function() {
  this.timeout(0);
  var driver;

  this.beforeEach(function() {
    driver = buildDriver();
  });

  it('Google', async function () {
    await driver.get('https://www.google.com');
    await driver.wait(until.elementLocated(By.name("q")));
    await driver.findElement(By.name('q')).sendKeys("BrowserStack", Key.ENTER);
    const title = await driver.getTitle();
    assert.equal(title, title); 
  });
  this.afterEach(async function() {
    await driver.quit();
  });
});
