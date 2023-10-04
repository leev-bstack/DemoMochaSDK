var webdriver = require('selenium-webdriver');
var driver;

describe('TAP - Dropbox full page scan', function() {

    beforeEach(async () => {
        driver = await new webdriver.Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        await driver.get("https://www.dropbox.com/");
    })

    afterEach(async () => {
        await driver.quit();
    })

    context('Dropbox full page scan', function () {
        it('Full page scan', async () => {
            console.log('Single full page scan')
            await driver.get("https://www.dropbox.com/");
            await driver.executeScript("window.scrollTo(0, 1600)");
          });
        
        it('Multiple full page scan', async () => {
          console.log('Multiple full page scan');
          await driver.get("https://www.dropbox.com/desktop");
          await driver.executeScript("window.scrollTo(0, 1600)");
          await driver.get("https://www.dropbox.com/mobile");
          await driver.executeScript("window.scrollTo(0, 1600)");
          await driver.get("https://www.dropbox.com/plans");
          await driver.executeScript("window.scrollTo(0, 1600)");
          let res = await driver.getAccessibilityResults();
          console.log("Total issue count:",res.length);
        });
    }); 
});