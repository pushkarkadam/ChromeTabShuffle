var date = new Date();
var hour = date.getHours()
var tabs_array = [];
var tabs_manifest = [];

// Loads config file
var config = chrome.extension.getBackgroundPage().config;

const START_TIME = config.start_time;
const END_TIME = config.end_time;

console.log("START: " + START_TIME.toString());

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
            // moves the tabs
            chrome.tabs.move(tabs_manifest[0].id, {index: 0});
            console.log(tabs_manifest[0].index);
            console.log(tabs_manifest[0].url);
        }
        else {
            chrome.tabs.move(tabs_manifest[1].id, {index: 0});
            console.log("Index: " + tabs_manifest[1].index.toString());
            console.log(tabs_manifest[1].url);
        }
    });
});
