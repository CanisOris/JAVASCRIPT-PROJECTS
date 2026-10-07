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

class Deck {

    constructor() {
        this.houseX_cnt = 0;
        this.house1Y_cnt = 0;

    }


}


// search list of objects
const aiNode = nodeList.find(node => node.abbr === "AI");

// Output from obj list to <li>
function renderNodeList(nodes, containerElement) {
  nodes.forEach(node => {
    const li = document.createElement("li");
    li.textContent = `${node.name} (${node.abbr})`;
    containerElement.append(li);
  });
}



function buildObjList() {
    var max_cards = 9;
    var cnt = 1;
    while (cnt < max_cards) {

        var card_select = new Card();
        // var payout = readCard(card_select);
    }
}


function objLoop(listObjs) {
    listObjs.forEach(node => {
        let out = `Node #${node.id}: ${node.name}`;
    });
}
