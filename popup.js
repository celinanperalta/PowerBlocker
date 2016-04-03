function toggle() {
    if (localStorage.currentState == 'stop') {
        localStorage.currentState = 'start';
        document.getElementById("1").textContent = "ON";
        document.getElementById("1").style = "color:blue";
        
    } else if (localStorage.currentState == 'start') {
        localStorage.currentState = 'stop';
        document.getElementById("1").textContent = "OFF";
        document.getElementById("1").style = "color:red";
        
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('1').addEventListener('click', toggle);
});