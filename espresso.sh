#!/bin/bash

curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
-X POST "https://api-cloud.browserstack.com/app-automate/upload" \
-F "file=@./apps/android.apk" \
-F "custom_id=androidApp"

curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
-X POST "https://api-cloud.browserstack.com/app-automate/espresso/v2/test-suite" \
-F "file=@./apps/espresso.apk" \
-F "custom_id=espressoTest"

curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
-X POST "https://api-cloud.browserstack.com/app-automate/espresso/v2/build" \
-d '{"shards": {"numberOfShards": 4}, "deviceLogs": true, "devices": ["Google Pixel 6-12.0", "Samsung Galaxy S23-13.0"],
 "app": "androidApp", "testSuite": "espressoTest", "debugscreenshots": true}' \
-H "Content-Type: application/json"