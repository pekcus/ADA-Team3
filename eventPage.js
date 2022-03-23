// creating new page opening on icon click
chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({url: chrome.extension.getURL('DressUp_Sample_Website.html')});
});

// creating right click context menu
var contextMenuItem = {
    "id": "addToCloset",
    "title": "Add item to closet!",
    "contexts": ["image"]
};
chrome.contextMenus.create(contextMenuItem);
