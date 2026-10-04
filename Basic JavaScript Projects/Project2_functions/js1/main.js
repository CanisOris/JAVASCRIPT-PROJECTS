

function launchFunc(msg = 'Unknown') {
    var msgdiv = document.getElementById("msg");
    var errorLaunch = "Rocket not Launched";
    
    // template literal
    var timestamp = `[${new Date().toLocaleTimeString()}]`;
   
    if (msg === 'Rocket1') {
        msgdiv.innerHTML += msg + " Launched " + timestamp + "<br>";
    } else {
        msgdiv.innerHTML += errorLaunch + " " + timestamp + "<br>";
    }
}

// using incertAdjacentHTML also
function launchFunc2(msg = 'Unknown') {
    var msgdiv = document.getElementById("msg");
    var errorLaunch = "Rocket not Launched";
    
    // FIXED: Added backticks around the string
    var timestamp = `[${new Date().toLocaleTimeString()}]`;
   
    if (msg === 'Rocket1') {
        msgdiv.insertAdjacentHTML('beforeend', `<div>${msg} ${timestamp}</div>`);
    } else {
        msgdiv.insertAdjacentHTML('beforeend', `<div>${errorLaunch} ${timestamp}</div>`);
    }
}