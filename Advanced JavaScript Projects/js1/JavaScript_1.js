

//  switch case



function shakeIt(btnElement) {
    const outputDiv = btnElement.nextElementSibling;
    outputDiv.innerText = getMagic8BallResponse();
}

function getMagic8BallResponse() {
    const randomNumber = Math.floor(Math.random() * 8);
    let answer = "";

    switch (randomNumber) {
        case 0:
            answer = "It is certain";
            break;
        case 1:
            answer = "Without a doubt";
            break;
        case 2:
            answer = "Reply hazy, try again";
            break;
        case 3:
            answer = "Ask again later";
            break;
        case 4:
            answer = "Cannot predict now";
            break;
        case 5:
            answer = "Don't count on it";
            break;
        case 6:
            answer = "My sources say no";
            break;
        case 7:
            answer = "Outlook not so good";
            break;
        default:
            answer = "Error: Invalid roll";
            break;
    }

    return answer;
}


function play1() {
    let userChoice = null;
    document.getElementById("result-game1").innerHTML = "";
    const choices = document.getElementsByClassName("rps-choice");
    for (let i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            userChoice = choices[i].value;
            // looking for single choice so break
            break;
        }
    }

    if (!userChoice) {
        document.getElementById("result-game1").innerHTML = `I am not sure what kind of hand movements you are making but you have to select something to play :)`;
    } else {
        const options = ["Rock", "Paper", "Scissors"];
        const computerChoice = options[Math.floor(Math.random() * options.length)];

        document.getElementById("result-game1").innerHTML = `I selected ${computerChoice} and you selected ${userChoice}`;
    }
}


function sketch1() {

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let height = 300;
    let width = 300;
    // reminds me of the gdi lib from ibm

    ctx.strokeStyle = '#e11d48';
    ctx.lineWidth = 4;

    // border box
    ctx.strokeRect(.5, .5, height, width);

    const centerX = 95;
    const centerY = 50;
    const radius = 40;

    // Circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw 9 Dots Around the Perimeter
    const numDots = 16;
    const dotRadius = 4;

    for (let i = 0; i < numDots; i++) {


        // got match from outside source
        const angle = (i * 2 * Math.PI) / numDots - Math.PI / 2;
        // distance
        // Calculate (x, y) coordinates along the circle's outer edge
        const dotX = centerX + radius * Math.cos(angle);
        const dotY = centerY + radius * Math.sin(angle);

        // Render each dot
        ctx.beginPath();
        ctx.arc(dotX, dotY, dotRadius, 0, 2 * Math.PI);
        ctx.fillStyle = '#2563eb'; // Blue fill
        ctx.fill();
        ctx.strokeStyle = '#ffffff'; // White border ring
        ctx.lineWidth = 1;
        ctx.stroke();
    }

}

function GetGradient(){

    const canvas = document.getElementById("myCanvas2");
    const ctx = canvas.getContext("2d");

        // x, y start - x, y end
        const gradient = ctx.createLinearGradient(0, 0, 300, 0);

        gradient.addColorStop(0, "blue");
        gradient.addColorStop(1, "green");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 300, 300);
}
