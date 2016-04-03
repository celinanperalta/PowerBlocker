function toggle() {
    
    if (localStorage.currentState == 'stop') {
        localStorage.setItem('currentState', 'start');
        document.getElementById("1").textContent = "ON";
        document.getElementById("1").style = "color:blue";
        
    } else if (localStorage.currentState == 'start') {
        localStorage.setItem('currentState', 'stop');
        document.getElementById("1").textContent = "OFF";
        document.getElementById("1").style = "color:red";
    
    }
}

function increment(){
    localStorage.visits += 1;
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('1').addEventListener('click', increment);
});