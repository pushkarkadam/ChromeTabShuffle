var date = new Date();
var hour = date.getHours()

if (hour < 9 && hour > 17) {
    // TODO: Go to Tab #2
    chrome.tabs.goForward(2);
}

else {
    // TODO: Go to Tab #1
    chrome.tabs.goBack(1);
}
