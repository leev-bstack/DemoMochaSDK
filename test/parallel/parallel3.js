var assert = require('assert');
const { Builder, By, Capabilities, until } = require("selenium-webdriver");

var buildDriver = function() {
  return new Builder().
    forBrowser('chrome').
    withCapabilities(Capabilities.chrome()).
    build();
};

describe('Test 3', async function() {
  this.timeout(0);
  var driver;

  this.beforeEach(function() {
    driver = buildDriver();
  });

  it('BrowserStack page title', async function () {
    await driver.get('https://browserstack.com/');
    const title = await driver.getTitle();
    assert.equal(title, title)
  });
  this.afterEach(async function() {
    await driver.quit();
  });
});
