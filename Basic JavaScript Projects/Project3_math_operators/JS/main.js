

function getPercentage(a, b) {
    var msgdiv = document.getElementById("msg1");
    msgdiv.innerHTML = a + " is " + calcPercentage(a, b) + " of " + b;
}

function doSubtraction(a, b) {
    var msgdiv = document.getElementById("msg2");
    msgdiv.innerHTML = a + " - " + b + " = " + calcSubtract(a, b);
}

function doMultiplication(a, b) {
    var msgdiv = document.getElementById("msg3");
    msgdiv.innerHTML = a + " * " + b + " = " + calcMultiplication(a, b);
}

function doDivision(a, b) {
    var msgdiv = document.getElementById("msg4");
    msgdiv.innerHTML = a + " / " + b + " = " + calcDivision(a, b);
}

function doMultipleOperators(a, b, c) {
    var msgdiv = document.getElementById("msg5");
    // Calculates: (a * b) - c
    var result = calcSubtract(calcMultiplication(a, b), c);
    msgdiv.innerHTML = `(${a} * ${b}) - ${c} = ${result}`;
}

function doModulus(a, b) {
    var msgdiv = document.getElementById("msg6");
    msgdiv.innerHTML = a + " % " + b + " remainder " + calcModulus(a, b);
}

function doUnaryMath(str, b, msgId) {
    var msgdiv = document.getElementById(msgId);
    msgdiv.innerHTML = "Unary Operator of " + str + " and number " + b + " results in " + executeUnaryMath(str, b);
}

function doRandom(a, b) {
    var msgdiv = document.getElementById("msg9");
    msgdiv.innerHTML = "Random number between " + b + " and " + a + " is " + calcRandom(a, b);
}


// MATH FUNCS
// using Math.floor(math object)
function calcRandom(a, b) {
    return Math.floor(Math.random() * a) + b;
}

// I would probably put try catches around all of them
// It looks like it will take a little to figure out how to bubble up the errors
function calcPercentage(a, b) {
    try {
        // no div by zero
        if (b === 0) return "0%";
        const percent = (a / b) * 100;
        // round 2 dec
        return percent.toFixed(0) + "%";
    } catch (error) {
        return error.message;
    }
}

function calcModulus(a, b) {
    // no div by zero
    if (b === 0) return "0";
    const remainder = (a % b);
    return remainder;
}

function calcSubtract(a, b) {
    return (a - b);
}

function calcMultiplication(a, b) {
    return (a * b);
}

function calcDivision(a, b) {
    // no div by zero
    if (b === 0) return "0";
    const percent = (a / b);
    // round 2 dec
    return percent.toFixed(4);
}

// I could probably do something like this for a bunch of the math
// I don't want to go to far down the rabbit hole ;)
function executeUnaryMath(str, number) {
    // case operators
    switch (str) {
        case '-': // Negation
            return -number;
        case '++': // Increment
            return ++number;
        case '--': // Decrement
            return --number;
        default:
            return number;
    }
}

