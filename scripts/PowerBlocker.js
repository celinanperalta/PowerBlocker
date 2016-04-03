/*fetch gpa and grade data from powerschool
along with courses*/
/*regularly refresh until criteria (grade) met*/


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


        "ps01.bergen.org/*/*" : "Powerschool"


    }

    if (!SM.get("blocklist")) {

        SM.put("blocklist", JSON.stringify(my.blockTheseSites));
    }

     my.getBlockedSites = function () {
        return JSON.parse(SM.get("blocklist"));
    }

    my.addBlockedSite = function (site) {
        my.blockedSites = JSON.parse(SM.get("blocklist"));
        my.blockedSites[site] = "Custom Add";
        SM.put("blocklist", JSON.stringify(my.blockedSites));
    }

    my.removeBlockedSite = function (site) {
        my.blockedSites = JSON.parse(SM.get("blocklist"));
        delete my.blockedSites[site];
        SM.put("blocklist", JSON.stringify(my.blockedSites));
    }

    my.checkReached = function(){

        my.blockedSites = JSON.parse(SM.get("blocklist"));
        if()

    }


    return my;

    
}(SM)));