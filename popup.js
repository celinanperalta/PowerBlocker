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
    if (document.getElementById("1").value == "OFF") {
        document.getElementById("1").value = "ON";
        document.getElementById("1").style = "color:blue";
    } else if (document.getElementById("1").value == "ON") {
        document.getElementById("1").value = "OFF";
        document.getElementById("1").style = "color:red";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('1').addEventListener('click', toggle);
});