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

  it('page title is wrong', async function () {
    //go to browserstack
    await driver.manage().window().maximize();
    await driver.get('https://browserstack.com/');
    
    const title = await driver.getTitle();
    await assert.equal(title, "Wrong Title");
  });
  this.afterEach(async function() {
    await driver.quit();
  });
});
