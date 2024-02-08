var assert = require('assert');
const { Builder, By, Capabilities, until } = require("selenium-webdriver");

describe('flakey', async function() {
  var driver;

  this.beforeEach(function() {
    driver = new Builder().
    forBrowser('chrome').
    withCapabilities(Capabilities.chrome()).
    build();
  });

  it('BrowserStack page title', async function () {
    await driver.get('https://browserstack.com/');
    const title = await driver.getTitle();
    var num = await Math.floor(Math.random() * 2)
    assert.notEqual(1, num)
  });
  this.afterEach(async function() {
    await driver.quit();
  });
});
