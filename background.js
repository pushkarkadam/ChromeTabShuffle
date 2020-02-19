var date = new Date();
var hour = date.getHours()
var START_TIME = 9;
var END_TIME = 16;
var tabs_array = [];

chrome.tabs.query({}, function(tabs) {
    for (var i = 0; i < tabs.length; i++) {
        tabs_array.push(tabs[i].id);
    }
    console.log(tabs_array);
});
