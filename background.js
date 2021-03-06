setInterval(function() {
    chrome.runtime.reload();
}, 1000 * 60);

chrome.runtime.onInstalled.addListener(function() {
    var date = new Date();
    var hour = date.getHours();
    var tabs_manifest = [];

    // Loads config file
    var config = chrome.extension.getBackgroundPage().config;

    const START_TIME = config.start_time;
    const END_TIME = config.end_time;

    chrome.tabs.query({}, function(tabs) {
        for (var i = 0; i < tabs.length; i++) {
            tabs_manifest.push(tabs[i]);
        }

        // Check the hour of the day
        if (hour >= START_TIME && hour <= END_TIME) {
            // go through the tabs_manifest to find the feedback_link
            for (var i = 0; i < tabs_manifest.length; i++) {
                if (tabs_manifest[i].url == config.feedback_link) {
                    chrome.tabs.highlight({tabs: tabs_manifest[i].index});
                }
            }
        }
        else {
            // go through the tabs_manifest to find the google_form
            for (var i = 0; i < tabs_manifest.length; i++) {
                if (tabs_manifest[i].url == config.google_form) {
                    chrome.tabs.highlight({tabs: tabs_manifest[i].index});
                }
            }
        }
    });
});
