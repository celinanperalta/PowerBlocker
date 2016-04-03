var SM = (function () {

    var my = {};

    my.get = function (key) {
        return localStorage.getItem(key);
    }
    my.put = function (key, value) {
        return localStorage.setItem(key, value);
    }
    my.delete = function (key) {
        return localStorage.removeItem(key);
    }
    
    return my;

}());

var PB = (function (SM){
    
    var my = {};
    
    my.blockTheseSites = {


        "https://ps01.bergen.org/public/*" : "Powerschool",
        "niceme.me" : "Nice Meme"


    }

    if (!SM.get("blocklist")) {

        SM.put("blocklist", JSON.stringify(my.blockTheseSites));
    }
    
    my.setWatchThisInstead = function (value) {
        return 'redirect.html';
    }

    my.getWatchThisInstead = function () {
        return 'redirect.html';        
    }

     my.getBlockedSites = function () {
        return JSON.parse(SM.get("blocklist"));
    }


    return my;

    
}(SM));

function initialize(){

chrome.tabs.onUpdated.addListener(function (tabId, changedInfo, tab) {
           
    var site;
           
    for (site in PB.getBlockedSites()) {
        if (tab.url.match(site)) {
            chrome.tabs.update(tabId, {"url" : PB.getWatchThisInstead()}, function () {});
        }
    }
});

chrome.tabs.onCreated.addListener(function (tab) {
    var site;
    for (site in PB.getBlockedSites()) {
        if (tab.url.match(site)) {
            chrome.tabs.update(tab.id, {"url" : PB.getWatchThisInstead()}, function () {});
        }
    }
});
}
window.addEventListener("load", initialize);