var assert = require('assert');
const { Builder, By, Key, Capabilities, until } = require("selenium-webdriver");

var buildDriver = function() {
  return new Builder().
    forBrowser('chrome').
    withCapabilities(Capabilities.chrome()).
    build();
};

describe('BrowserStack Search', async function() {
  this.timeout(0);
  var driver;

  this.beforeEach(function() {
    driver = buildDriver();
  });

  it('page title is wrong', async function () {
    //go to browserstack
    await driver.manage().window().maximize();
    await driver.get('https://browserstack.com/');

    await driver.wait(until.titleIs('Wrong Title'), 5000);
  });
  this.afterEach(async function() {
    await driver.quit();
  });
});
