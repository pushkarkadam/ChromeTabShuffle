var date = new Date();
var hour = date.getHours()
var START_TIME = 9;
var END_TIME = 16;
var tabs = {};

chrome.tabs.query({}, function(tabs) {
    for (var i = 0; i < tabs.length; i++) {
        console.log(tabs[i].id);
    }
});
