
function getAreaCircle(btnElement) {
    const outputDiv = btnElement.nextElementSibling;
    const radius = width / 2;
    outputDiv.innerText = Math.PI * (radius ** 2); // ** squared or ^
}


function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds -1;
        timer.innerText = seconds;
        var time = setTimeout(tick,1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerText = "";
        }
    }
    tick();
}