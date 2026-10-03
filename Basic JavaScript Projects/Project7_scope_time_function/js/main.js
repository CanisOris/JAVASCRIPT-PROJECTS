const width = 100;




function getAreaSquare(btnElement) {
    const outputDiv = btnElement.nextElementSibling;
    const width2 = 200;
    outputDiv.innerText = width * width2;
    // Uncaught ReferenceErro
    console.log(result)
}

function getAreaCircle(btnElement) {
    const outputDiv = btnElement.nextElementSibling;
    const radius = width / 2;
    outputDiv.innerText = Math.PI * (radius ** 2); // ** squared or ^
}


function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function getAlarmTest(btnElement) {
    const outputDiv = btnElement.nextElementSibling;
    if (new Date().getHours() > 12) {
        outputDiv.innerText = "The day is already half over!";
    } else {
        outputDiv.innerText = "Still time to do stuff!";
    }

}


function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to voite!";
    } else {
        Vote = "You are not old enought to Vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}


function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
