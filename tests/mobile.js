var assert = require('assert');
const { Builder, By, Capabilities, until } = require("selenium-webdriver");

describe('BrowserStack', async function() {
  var driver;

  this.beforeEach(function() {
    driver = new Builder().
    forBrowser('chrome').
    withCapabilities(Capabilities.chrome()).
    build();
  });

  it('Page title should match', async function () {
    await driver.get('https://browserstack.com/');
    const title = await driver.getTitle();
    assert.equal(title, title)
  });
  this.afterEach(async function() {
    await driver.quit();
  });
});
