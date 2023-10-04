var webdriver  = require('selenium-webdriver');
const { By , until } = require('selenium-webdriver');

class Common {
  constructor(driver) {
    this.driver = driver;
  }

  async elementClick(locator) {
    const element = webdriver.By.xpath(locator);
    await this.driver.wait(until.elementLocated(element));
    await this.driver.findElement(element).click();
  }
}

module.exports = { Common };
