#!/bin/bash

curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
-X POST "https://api-cloud.browserstack.com/app-automate/xcuitest/v2/app" \
-F "file=@./apps/ios.ipa" \
-F "custom_id=iosApp"

curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
-X POST "https://api-cloud.browserstack.com/app-automate/xcuitest/v2/test-suite" \
-F "file=@./apps/xcui.zip" \
-F "custom_id=xcuiTest"

curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
-X POST "https://api-cloud.browserstack.com/app-automate/xcuitest/v2/build" \
-d '{"devices": ["iPhone 13-15", "iPhone 14-16"], "app": "iosApp", "testSuite": "xcuiTest"}' \
-H "Content-Type: application/json"