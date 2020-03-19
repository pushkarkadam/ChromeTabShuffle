var date = new Date();
var hour = date.getHours()
var tabs_array = [];
var tabs_manifest = [];

// Loads config file
var config = chrome.extension.getBackgroundPage().config;

const START_TIME = config.start_time;
const END_TIME = config.end_time;

chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.query({}, function(tabs) {
        console.log(tabs);
        for (var i = 0; i < tabs.length; i++) {
            tabs_array.push(tabs[i].index);
            tabs_manifest.push(tabs[i]);
        }
        // Display array of tabs
        console.log(tabs_array);
        console.log(tabs_manifest);
        console.log("Hour: " + hour.toString());

        // Check the hour of the day
        if (hour > START_TIME && hour < END_TIME) {
            // go through the tabs_manifest to find the form link
            for (var i = 0; i < tabs_manifest.length; i++) {
                if (tabs_manifest[i].url == config.feedback_link) {
                    chrome.tabs.move(tabs_manifest[i].id, {index: 0});
                    console.log(tabs_manifest[i].url);
                }
            }
        }
        else {
            // go through the tabs_manifest to find the feedback_link
            for (var i = 0; i < tabs_manifest.lenght; i++) {
                if (tabs_manifest[i].url == config.google_form) {
                    chrome.tabs.move(tabs_manifest[i].id, {index: 0});
                }
            }
        }
    });
});
