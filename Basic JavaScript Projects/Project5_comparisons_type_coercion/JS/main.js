



function getType(outId, value) {
    var result = typeof (value);
    document.getElementById(outId).innerHTML = result;
}


function getCoercion(outId, value) {
    var result = `Hello, ${value}!`;
    document.getElementById(outId).innerHTML = result;
}


function getNaN(outId, a, b) {
    var result = (a / b);
    document.getElementById(outId).innerHTML = result;
}

function getTestNaN(outId, a, b) {
    var result = isNaN(a / b);
    document.getElementById(outId).innerHTML = result;
}

function getToInfi(outId, a) {
    var result = (Number.MAX_VALUE * a);
    document.getElementById(outId).innerHTML = result;
}

function getBool(outId, a, b) {
    var result = (a < b);
    document.getElementById(outId).innerHTML = result;
    console.log(result)
}

function getConsoleSTDOUT(outId, a, b) {
    var result = (a * b);
    document.getElementById(outId).innerHTML = "out to console " + result;
    console.log(result)
}

function getBoolCompare(outId, a, b) {
    var result = (a == b);
    document.getElementById(outId).innerHTML = result;
    console.log(result)
}

function getbooTCompare(outId, a, b) {
    var result = (a === b);
    document.getElementById(outId).innerHTML = result;
}

function getOperatorAnd(outId, a, b) {
    var result = (a === b && a == b);
    document.getElementById(outId).innerHTML = result;
}
// ohhhh I like this type of ref better
function getOperatorOr(btnElement, a, b) {
    // use dom to get next 
    const outputDiv = btnElement.nextElementSibling;
    const result = (a == b || a == (b + 1));
    // write it to the div
    outputDiv.innerText = result;
}

function getOperatorAnd(btnElement, a, b) {
    // use dom to get next 
    const outputDiv = btnElement.nextElementSibling;
    const result = (a == b && a < (b + 1));
    // write it to the div
    outputDiv.innerText = result;
}

function getNot(btnElement, a, b) {
    // use dom to get next 
    const outputDiv = btnElement.nextElementSibling;
    const result = (a != b);
    // write it to the div
    outputDiv.innerText = result;
}