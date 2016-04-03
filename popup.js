var t = true;

function toggleRedirect() {


    if (PB.blockedSites) {
        PB.addBlockedSite();
    } else {
        PB.removeBlockedSite();
    }
};




document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggle').addEventListener('click', toggleRedirect);
});