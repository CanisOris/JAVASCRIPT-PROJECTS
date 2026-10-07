

//  switch case


class Card {

    constructor() {
        this.name = "";
        this.house = doFlip("Blue", "Green");
        this.slot1 = getRandomInt(1 - 20);
        this.slot2 = getRandomInt(1 - 20);
        this.slot3 = getRandomInt(1 - 100);
    }

    getFace() {
        return `Name: ${this.name} House: ${this.house} ${this.order.toString()}x${this.group.toString()}`;
    }
}

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



function buildDeck() {
    var max_cards = 9;
    var cnt = 1;
    while (cnt < max_cards) {

        var card_select = new Card();
        // var payout = readCard(card_select);
    }
}





function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomTerm(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

function doFlip(n1, n2) {
    // head 1 / tails 0
    return Math.random() < 0.5 ? n1 : n2;
}


class Deck {

    constructor() {
        this.houseX_cnt = 0;
        this.house1Y_cnt = 0;

    }



    getNameDef() {
        return `${this.Name}(${this.Abreviation}): ${this.Definition}`;
    }
}
