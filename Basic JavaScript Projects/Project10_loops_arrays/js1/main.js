

function For_wLoop() {
    var wl_heads = 0;
    var wl_tails = 0;
    let max_cnt = 100;
    let loop_cnt = 0;

    while(loop_cnt < max_cnt){ 
        // Call the global function directly
        var land = doFlip(); 
        
        if (land === 1 ){
            // heads
            ++wl_heads; // Fixed typo
        } else {
            // tails
            ++wl_tails; // Fixed typo
        }
        ++loop_cnt;
    }

    // Assign the values to the textContent property of the elements
    document.getElementById("wl_heads").textContent = wl_heads.toString(); 
    document.getElementById("wl_tails").textContent = wl_tails.toString(); 
}

function calReturn(btnElement) {
    const outputDiv = btnElement.nextElementSibling;
    // Call the global function directly
    outputDiv.innerText = doFlip(); 
}

function doFlip() {
    // head 1 / tails 0
    return Math.random() < 0.5 ? 1 : 0;
}

function constant_function() {
    // requirements are a little fuzzy on this
    // instructions seem over complicated 
    // eval = make a const try to set twice show work
    const out = document.getElementById("Constant");

    const pi = document.getElementById("Constant").innerText;
    out.innerHTML = `const set to ${pi} <br />`;
    out.innerHTML += `attempt to reset const to 1234<br />`;
    try {
        pi = 1234;
    } catch (error) {
        out.innerHTML += `Result = ${error.message} <br />`;
    }

    out.innerHTML += `const value = ${pi} <br />`;
}


function array_Function() {
    let out = document.getElementById("Array");
    let NodeName = [];
    NodeName[0] = "A";
    NodeName[1] = "B";
    NodeName[2] = "C";
    NodeName[3] = "D";
    out.innerText = NodeName[2];
}

// add ids too
function buildList(btnElement) {

    const outputDiv = btnElement.nextElementSibling;
    let itemCnt = btnElement.children.length;
    let result = "";
    // if (7 > itemCnt) { 
    for (let i = 0; i < 8; i++) {
        //result = result.concat(`, ${i}` );
        const newItem = document.createElement("li");
        newItem.id = (outputDiv.children.length + 1);
        newItem.textContent = `id=${i} length=${(outputDiv.children.length + 1)}`;
        outputDiv.append(newItem);
    }
    //  }
    //outputDiv.innerText = `Count: ${result.toString()}`;
}




function For_Loop(btnElement) {
    const outputDiv = btnElement.nextElementSibling;
    let result = "";
    for (let i = 0; i < 8; i++) {
        //result = result.concat(`, ${i}` );
        const newItem = document.createElement("li");
        newItem.textContent = `${i}`;
        outputDiv.append(newItem);
    }
    //outputDiv.innerText = `Count: ${result.toString()}`;
}

function Call_Loop(btnElement) {
    const outputDiv = btnElement.nextElementSibling;
    let result = "empty";
    outputDiv.innerText = `Length of (${result}) = ${result.length.toString()}`;
}


function Call_Object(btnElement) {
    const outputDiv = btnElement.nextElementSibling;
    let result = "empty";
    let myNode1 = new GraphNode();
    outputDiv.innerText = myNode1.getNameDef();
}



class GraphNode {

    constructor() {
        this.Id = 1;
        this.Gid = 1;
        this.Name = "Artificial Intelligence";
        this.Abreviation = "AI";
        this.Definition = "A branch of computer science focused on making machines smart enough to perform tasks that usually need human thought.";
        this.Source = "Google";
        this.Connections = "112,33,44";
    }

    getNameDef() {
        return `${this.Name}(${this.Abreviation}): ${this.Definition}`;
    }
}

function breakCont( container) {
    const max = 5;
    let cnt = 0;
     let nodeList = [];
    nodeList[0] = "A";
    nodeList[1] = "B";
    nodeList[2] = "";
    nodeList[3] = "D";
    nodeList[4] = "E";
    nodeList[5] = "F";

    for (let i = 0; i < nodeList.length; i++) {
        const node = nodeList[i];

        // skip if empty
        if (node === "") {
            continue; 
        }

        const item = document.createElement("li");
        item.textContent = `${node.toString()}`;
        container.append(item);
        cnt++;

        // dont exceed max
        if (cnt >= max) {
            break; 
        }
    }
}




