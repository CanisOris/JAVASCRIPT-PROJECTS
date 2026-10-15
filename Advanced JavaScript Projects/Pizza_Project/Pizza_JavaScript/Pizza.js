
// There are 2 functions 
// getReceipt()
// getTopping(runningTotal, text1)

function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    // Loop and get selected topping
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }


    // I like the switch case, it seems easier to read.
    // Set the Pizza size!
    switch (selectedSize) {
        case "Personal Pizza":
            sizeTotal = 6;
            break;
        case "Small Pizza":
            sizeTotal = 8;
            break;
        case "Medium Pizza":
            sizeTotal = 10;
            break;
        case "Large Pizza":
            sizeTotal = 14;
            break;
        case "Extra Large Pizza":
            sizeTotal = 16;
            break;
        default:
            sizeTotal = 0;
    }

    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //these variables will get passed on to each function
    getTopping(runningTotal, text1);
};


function getTopping(runningTotal, text1) {

    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    // nested the ingredients
    // Start UL ********************************************************
    text1 += "<ul>";
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = `<li> ${text1}  ${toppingArray[j].value} </li>`;
        }
    }
    // End UL ********************************************************
    text1 += "</ul>";

    // Get topping count
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }

    runningTotal = (runningTotal + toppingTotal);
    // Write the recipe to console
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +
        runningTotal + ".00" + "</strong></h3>";
};