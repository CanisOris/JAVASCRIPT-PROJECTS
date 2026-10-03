


function getCat(btnElement) {
    const outputDiv = btnElement.nextElementSibling;
    const p1 = "\"There once was a fat little cat, <br>";
    const p2 = "Who slept on a welcoming mat. <br>";
    const p3 = "He tried to stand up, <br>";
    const p4 = "To bat at a cup, <br>";
    const p5 = "And rolled right back down where he sat!\" <br>";

    var lymric = p1.concat(p2, p3, p4, p5);
    outputDiv.innerHTML = lymric;
}

// note starts at 1 not 0 well unless my manual count was off. :)
function getSliceNDice(btnElement) {
    const outputDiv = btnElement.nextElementSibling;
    const dice = "I tried to tell a joke about slicing bread, but it got a little crusty around the edges";
    const slice = dice.slice(29, 37);
    outputDiv.innerText = slice;
}


function getCaseOfIdentity(btnElement) {
    const outputDiv = btnElement.nextElementSibling;
    const searchStr = "slicing";
    const dice = "I tried to tell a joke about slicing bread, but it got a little crusty around the edges";
    var slice = "Not Found!";
    if (dice.includes(searchStr)) {
        var length = searchStr.length;
        var pos = dice.search(searchStr);
        slice = dice.slice(pos, (pos + length));
    }

    outputDiv.innerText = slice.toUpperCase();
}d

function getNumberFun(btnElement) {
    const outputDiv = btnElement.nextElementSibling;
    const x =  3.1415926535
    var numObj = new Number(33);

       
    outputDiv.innerHTML = `Number toString(): ${x.toString()}<br>` +
            `Number toPrecision(5): ${x.toPrecision(5)}<br>` +
            `Number toFixed(2): ${x.toFixed(2)}<br>` +
            `Number Object.ValueOf() : ${numObj.valueOf()}` ;
}



// ==============================================================================================
// Trying a code modal display
function toggleModal(modalId) {
    // get
    const modalElement = document.getElementById(modalId);

    // 2. Define the nested function to handle UI updates
    function setDisplayState(cssValue) {
        // Because of lexical scoping, it can directly access 'modalElement'
        modalElement.style.display = cssValue;
    }
    // toggle
    // if it is flex it is open
    if (modalElement.style.display === "flex") {
        // close it
        setDisplayState("none");
    } else {
        // open it
        setDisplayState("flex");
    }
}

