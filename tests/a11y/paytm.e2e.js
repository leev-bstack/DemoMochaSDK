var webdriver = require('selenium-webdriver');
const { Common } = require('./common');
var driver;

describe('TAP - Paytm full page scan', function() {

    beforeEach(async () => {
        driver = await new webdriver.Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();
        common = new Common(driver);
        await driver.get("https://paytm.com/");
    })

    afterEach(async () => {
        await driver.quit();
    })

    context('Paytm full page scan', function () {
        it('Full page scan', async () => {
          console.log('Single full page scan')
          await driver.get("https://paytm.com/");
          await driver.executeScript("window.scrollTo(0, 3000)");
          // let res = await driver.getAccessibilityResultsSummary();
          // console.log("Summary of Accessibility Result:", JSON.stringify(res));
          // let res2 = await driver.getAccessibilityResults();
          // console.log("Total issue count:",res2.length);
        });

        it('Paytm sign-up modal', async () => {
          console.log('Paytm sign-up modal');
          await driver.get("https://paytm.com/");
          await common.elementClick("(//div[@class='_1YPz_'])[1]");
          await driver.sleep(5000);
          await common.elementClick("//img[@alt='close Modal']");
          await driver.executeScript("window.scrollTo(0, 1600)");
          // let res = await driver.getAccessibilityResultsSummary();
          // console.log(res);
        });
    });
});
