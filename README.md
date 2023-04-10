# BrowserStack MochaJS CE demo

BrowserStack CE demo repo using [browserstack-node-sdk](https://www.npmjs.com/package/browserstack-node-sdk).

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

<img src ="https://camo.githubusercontent.com/af4bf83ab2ca125346740f9961345a24ec43b3a9" height = "100">

## Install repo

---
- Clone the repo
- Install dependencies `npm install`
- Set your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings) in the browserstack.yml files or set BROWSERSTACK_USERNAME and
BROWSERSTACK_ACCESS_KEY as env variables

## You can run any of the following scenerios

---
1. Run a test on a local chromedriver to demonstrate the test before integration.  This will automatically update the Chromedriver to the latest version.
```
npm run chrome
```
2. Run a single test on BrowserStack with the sdk
```
npm run single
```
3.  Run tests in parallel.  This will run 3 tests with 10 browsers for a total of 30 parallels
```
npm run parallel
```
4. Run a test using Local.  This will verify the page title of the Local Console
```
npm run local
```
5. Run a test that will fail. This will demonstrate the test automatic marking of failed tests
```
npm run fail
```


## Notes

---
- You can view your test results on the [BrowserStack automate dashboard](https://automate.browserstack.com)
- This automatically integrates with [Test Observability](https://observability.browserstack.com/)
  