# BrowserStack MochaJS CE demo

BrowserStack CE demo repo using [browserstack-node-sdk](https://www.npmjs.com/package/browserstack-node-sdk).

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780)

## Install repo

---
- Clone the repo
- Install dependencies `npm install`
- Set your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings). Preferably, you should set BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY as environmental variables.  Alternatively, you can also set them in all of the browserstack.yml files and the shell scipts for xcui and espresso.
- This repo was designed to work with an account with 25 parallels.  The parallel example will run 30 parallels to intentionally overload them in order to demonstrate the queue.

## You can run any of the following scenerios

---

### Before running any tests, Please run the following to ensure the latest ChromeDriver and SDK are installed!!!
```
npm run prep
```
1. Run a test (single.js) on a local chromedriver to demonstrate the test before integration
```
npm run chrome
```
2. Run single.js on BrowserStack with the sdk using 5 different browsers
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
5. Run a test that will fail. This will demonstrate the automatic marking of failed tests
```
npm run fail
```
6. Run tests for observability. This includes tests that always fail and flakey tests.  This will be under the Observability Demo project, and you will want to run this several times in a row before your first demo for the flakey tests to show in the dashboard.
```
npm run observability
```
8. Run tests on App Automate on Android using wikipedia.apk
```
npm run appium
```
9. Run tests on App Automate with XCUITest
```
npm run xcui
```
10. Run tests on App Automate with Espresso
```
npm run espresso
```
11. Run tests with Accessibility Automate
```
npm run a11y
```

## Notes

---
- The SDK will automatically create links in the console logs to view your test results on BrowserStack
  
