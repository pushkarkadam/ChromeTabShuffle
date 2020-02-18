var date = new Date();
var hour = date.getHours()
var START_TIME = 9;
var END_TIME = 16;

chrome.runtime.onInstalled.addListener(() => {
        if (hour < START_TIME && hour > END_TIME) {
            // TODO: Go to tab #2
        }
        else {
            // TODO: Go to tab #1
        }
    });
});
