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

var PB = (function (SM) {

    var my = {};

    my.blockTheseSites = {


        "https://ps01.bergen.org/public/*": "Powerschool"


    }

    if (!SM.get("blocklist")) {

        SM.put("blocklist", JSON.stringify(my.blockTheseSites));
    }

    my.setWatchThisInstead = function (value) {
        return 'stressrelief.html';
    }

    my.getWatchThisInstead = function () {
        return 'stressrelief.html';
    }

    my.getBlockedSites = function () {
        return JSON.parse(SM.get("blocklist"));
    }
    
    my.addBlockedSite = function (site) {
        my.blockedSites = JSON.parse(SM.get("blocklist"));
        my.blockedSites[site] = "Powerschool";
        SM.put("blocklist", JSON.stringify(my.blockedSites));
    }

    my.removeBlockedSite = function (site) {
        my.blockedSites = JSON.parse(SM.get("blocklist"));
        delete my.blockedSites[site];
        SM.put("blocklist", JSON.stringify(my.blockedSites));
    }
    return my;
        
}(SM));

//figure out how to store this w/ cookies
function VisitCounter() {

    var visits = GetCookie("counter");

    if (!visits) {
        visits = 1;

        document.write("By the way, this is your first time here.");

    } else {

        visits = parseInt(visits) + 1;

        document.write("I note, you have been here " + visits + " times.");
    }

    setCookie("counter", visits, expdate);
}

function initialize() {

    chrome.tabs.onUpdated.addListener(function (tabId, changedInfo, tab) {

        var site;

        for (site in PB.getBlockedSites()) {
            if (tab.url.match(site)) {
                chrome.tabs.update(tabId, {
                    "url": PB.getWatchThisInstead()
                }, function () {});
            }
        }
    });

    chrome.tabs.onCreated.addListener(function (tab) {
        var site;
        for (site in PB.getBlockedSites()) {
            if (tab.url.match(site)) {
                chrome.tabs.update(tab.id, {
                    "url": PB.getWatchThisInstead()
                }, function () {});
            }
        }
    });
}


window.addEventListener("load", initialize);
