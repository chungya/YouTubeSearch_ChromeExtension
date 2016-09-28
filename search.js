chrome.contextMenus.onClicked.addListener(function(info, tab){
  var newURL = "https://www.youtube.com/results?search_query=" + info.selectionText;
  chrome.tabs.create({"url" : newURL});
  console.log("url: " + newURL);
});

chrome.contextMenus.create({"title": "YouTube 搜尋「%s」", "contexts":["selection"]});
