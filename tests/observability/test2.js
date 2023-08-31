var assert = require('assert');
const { Builder, By, Capabilities, until } = require("selenium-webdriver");

describe('Test 2', async function() {
  var driver;

  this.beforeEach(function() {
    driver = new Builder().
    forBrowser('chrome').
    withCapabilities(Capabilities.chrome()).
    build();
  });

  it('Demo App', async function () {
    await driver.get('https://bstackdemo.com/');
    await driver.wait(until.titleMatches(/StackDemo/i), 10000);
    // locating product on webpage and getting name of the product
    await driver.wait(until.elementLocated(By.xpath('//*[@id="1"]/p'), 10000));
    let productText = await driver.findElement(By.xpath('//*[@id="1"]/p')).getText();
    // clicking the 'Add to cart' button
    await driver.wait(until.elementLocated(By.xpath('//*[@id="1"]/div[4]'), 10000));
    await driver.findElement(By.xpath('//*[@id="1"]/div[4]')).click();
    // waiting until the Cart pane has been displayed on the webpage
    await driver.wait(until.elementLocated(By.className("float-cart__content"), 10000));
    await driver.findElement(By.className('float-cart__content'))
    // locating product in cart and getting name of the product in cart
    await driver.wait(until.elementLocated(By.xpath('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]'), 10000));
    let productCartText = await driver.findElement(By.xpath('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]')).getText();
    // checking whether product has been added to cart by comparing product name
    assert(productText === productCartText);
  });
  this.afterEach(async function() {
    await driver.quit();
  });
});
