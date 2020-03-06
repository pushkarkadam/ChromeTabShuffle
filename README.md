# Chrome Tab Shuffle

A chrome extension app that shuffles between two tabs depending upon the time of the day.

## Testing

Download the [chromium canary](https://www.google.com/intl/en/chrome/canary/).

## Tab property

`chrome.tabs.query(object queryInfo, function callback);`

`console.log()` provides the following output.

**Note:**

`windowId: 1` gives the id of the window that is opened.

`index: 0` gives the position of the tab.

`id: 16` gives the id of the tab.

Tab ID is useful in `chrome.tabs.update(integer tabId, object updateProperties, function callback)`


```
active: false
audible: false
autoDiscardable: true
discarded: false
favIconUrl: "https://www.google.com/favicon.ico"
height: 720
highlighted: false
id: 16
incognito: false
index: 0
mutedInfo: {muted: false}
pinned: false
selected: false
status: "complete"
title: "cars - Google Search"
url: "https://www.google.com/search?q=cars&rlz=1C1GCEU_en&oq=cars&aqs=chrome..69i57j0l7.830j0j7&sourceid=chrome&ie=UTF-8"
width: 1038
windowId: 1
```

## Trigger page

Introducing the `popup.html` file to use a button.
There is a shuffle button within this page that should trigger the event to shuffle.
