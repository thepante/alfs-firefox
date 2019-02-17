// Initialize the page action
function accepted(tab){
  browser.pageAction.show(tab.id);
  browser.pageAction.setIcon({tabId: tab.id, path: 'icon-pip.svg?start='+tab.url+'?end'});
  console.log(tab.url + " → PIP avalaible");
}
function initializePageAction(tab) {
  if (tab.url.includes("youtube.com/watch")) { // if its youtube, show pageaction
    accepted(tab);
  }
  else if (/(https?:\/\/)vimeo\.com/.test(tab.url)) { // if its vimeo, show pageaction
    accepted(tab);
  }
  else {console.log(tab.url + " → no-pip");}
}

// When first loaded, initialize the page action for all tabs
var gettingAllTabs = browser.tabs.query({});
gettingAllTabs.then((tabs) => {
  for (let tab of tabs) {
    initializePageAction(tab);
  }
});

// If the tab changes, recheck
browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  if (changeInfo.url) {
    initializePageAction(tab);
  }
});
