Skip to content
This repository
Search
Pull requests
Issues
Gist
 @CelinaPeralta
 Unwatch 4
  Star 0
  Fork 0 CelinaPeralta/PowerBlocker
 Code  Issues 0  Pull requests 0  Wiki  Pulse  Graphs  Settings
Branch: master Find file Copy pathPowerBlocker/PowerBlocker.js
283fc4e  32 minutes ago
@CelinaPeralta CelinaPeralta FRIGGIN COUNTER
1 contributor
RawBlameHistory     112 lines (77 sloc)  2.38 KB
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
    var visits = 0;

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
    
     if (!SM.get("visits")) {
        visits = 1;
        SM.put("visits", visits);

        //console.log("By the way, this is your first time here.");

    } else {

        visits += 1;
        SM.put("visits", visits);

        //console.log("I note, you have been here " + visits + " times.");
    }

    return my;
    return visits;
        
}(SM));

//figure out how to store this w/ cookies


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
Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Contact Help