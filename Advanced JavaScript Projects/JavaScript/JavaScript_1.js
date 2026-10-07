

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



