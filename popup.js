var t = true;

function toggleRedirect() {

    /*
        if () {
            PB.addBlockedSite();
        } else {
            PB.removeBlockedSite();
        }
        */
};

function toggle(button) {
    
    var currentState = localStorage.currentState || "start";
    
    if (currentState == "stop") {
        document.getElementById("1").value = "ON";
        document.getElementById("1").style = "color:blue";
        window.addEventListener("load", initialize);
        localStorage.currentState = 'start';
    } else if (currentState == "start") {
        document.getElementById("1").value = "OFF";
        document.getElementById("1").style = "color:red";
        localStorage.currentState = 'stop';
    }
}



document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('#toggle-btn').addEventListener('click', tog);
});