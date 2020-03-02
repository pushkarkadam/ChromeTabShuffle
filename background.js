var date = new Date();
var hour = date.getHours()
var START_TIME = 9;
var END_TIME = 16;
var tabs_array = [];

chrome.tabs.query({}, function(tabs) {
    for (var i = 0; i < tabs.length; i++) {
        tabs_array.push(tabs[i].id);
    }
    // Display array of tabs
    console.log(tabs_array);

    // Check the hour of the day
    if (hour < START_TIME && hour > END_TIME) {
        chrome.tabs.query({active: true}, function(tabs) {
            chrome.tabs.reload(tabs_array[1]);
            console.log("executed tab 1");
        });
    }
    else {
        chrome.tabs.query({active: true}, function(tabs) {
            chrome.tabs.query({windowId: tabs_array[0]}, function(tabs) {
                chrome.tabs.reload(tabs_array[0]);
                console.log("executed tab 0");
            });
        });
    }

});
