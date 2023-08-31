var assert = require('assert');
const { Builder, Capabilities } = require("selenium-webdriver");

describe('BStack Local Testing', async function() {
  var driver;

  this.beforeEach(function() {
    driver = new Builder().
    forBrowser('chrome').
    withCapabilities(Capabilities.chrome()).
    build();
  });

  it('check tunnel is working', async function () {
    await driver.manage().window().maximize();
    await driver.get('http://bs-local.com:45454/');
    let title = await driver.getTitle();
    assert(title.match(/BrowserStack Local/i) != null);
  });

  after(async function() {
    await driver.quit();
  });
});
