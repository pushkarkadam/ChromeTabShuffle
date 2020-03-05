var date = new Date();
var hour = date.getHours()
var START_TIME = 9;
var END_TIME = 16;
var tabs_array = [];

chrome.tabs.query({}, function(tabs) {
    console.log(tabs);
    for (var i = 0; i < tabs.length; i++) {
        tabs_array.push(tabs[i].id);
    }
    // Display array of tabs
    console.log(tabs_array);
    console.log("Hour: " + hour.toString());

    // Check the hour of the day
    if (hour < START_TIME || hour > END_TIME) {
        chrome.tabs.query({"windowId": tabs[1].windowId, "active": true}, function(tab) {
            // chrome.tabs.highlight
            chrome.tabs.update(tabs_array[1], {"highlighted": true});
            console.log("executed tab ID " + tabs_array[1].toString());
        });
    }
    else {
        chrome.tabs.query({"windowId": tabs[0].windowId, "active": true}, function(tab) {
            chrome.tabs.reload(tab.id);
            console.log("executed tab ID " + tabs[0].id.toString());
        });
    }
});
