// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.executeScript(tab.ib, {
//     file: "inject.js",
//   });
// });

chrome.webNavigation.onCompleted.addListener(function (tab) {
    chrome.tabs.executeScript(tab.ib, {
      file: "inject.js",
    });

});
