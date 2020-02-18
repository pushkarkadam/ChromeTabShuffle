var date = new Date();
var hour = date.getHours()
var START_TIME = 9;
var END_TIME = 16;
var tabs = {};

chrome.runtime.onInstalled.addListener(() => {
    if (hour < START_TIME && hour > END_TIME) {
        // TODO: Go to tab #2
        chrome.tabs.goForward(chrome.tabs.query({"windowId": windowId}), function(tab) {
            chrome.tabs.reload(chrome.tabs.query({"windowId": windowId}));
        });
    }
    else {
        // TODO: Go to tab #1
        chrome.tabs.goBack(chrome.tabs.query({"windowId": windowId - 1}), function(tab) {
            chrome.tabs.reload(chrome.tabs.query({"windowId": windowId - 1}));
        });
    }
});
