var assert = require('assert');
const { Builder, By, Key, Capabilities, until} = require('selenium-webdriver');

describe('Wikipedia App', async function() {
    this.timeout(0);
    var driver;
    this.beforeEach(function() {
      driver = new Builder()
        .usingServer('http://127.0.0.1:4723/wd/hub')
        .build();
    });
  
    it('search for BrowserStack', async function () {
    await driver.wait(
      until.elementLocated(
        By.xpath(
          '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.view.ViewGroup/android.support.v4.view.ViewPager/android.view.ViewGroup/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.TextView'
        )
      ), 30000
    ).click();

    var insertTextSelector = await driver.wait(
      until.elementLocated(
        By.xpath(
          '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.LinearLayout/android.support.v7.widget.LinearLayoutCompat/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.AutoCompleteTextView'
        ), 30000
      )
    );
    await insertTextSelector.sendKeys('BrowserStack');
    await driver.sleep(5000);

    var allProductsName = await driver.findElements(
      By.xpath(
        '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout[1]/android.widget.FrameLayout[2]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ListView/android.widget.LinearLayout'
      )
    );

    assert(allProductsName.length > 0);
});
this.afterEach(async function() {
  await driver.quit();
});
});