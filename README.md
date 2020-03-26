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

## Move

The following function enables the tabs to move.

`chrome.tabs.move(integer or array of integer tabIds, object moveProperties, function callback)`

The function in the `background.js` is as follows:

`chrome.tabs.move(tabs_manifest[i].id, {index: 0});`

## Highlight

The following function enables the tabs to appear (highlight):

`chrome.tabs.highlight(object highlightInfo, function callback)`

The function in the `background.js` is as follows:

`chrome.tabs.highlight({tabs: tabs_manifest[0].index});`

## Config File

All the time variables and the url load from a file named `config.js`

Create a `config.js` file.

Create a key value pair.

```
var config = {
    "key1": "value1",
    "key2": "value2"
}
```

Example in the `config.js` file in this project:

```
var config = {
    "start_time": 5,
    "end_time": 20,
    "feedback_link": "https://example1.com/",
    "google_form": "https://example2.com/"
}
```

*NOTE: The above lines of code provides sample values. Actual information is stored in* `config.js` *file*.

Use `var config = chrome.extension.getBackgroundPage().config;` to load the file.

In `manifest.json`, make sure to add `config.js` in background script array before `background.js`

```
"background": {
    "scripts": ["config.js","background.js"]
}
```
