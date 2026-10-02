

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").ariaValueMax;
    Can_ride = (Height < 52)
        ? "You are too short"
        : "You are tall enought";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2010, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " +
        Erik.Vehicle_Color +
        "-colored" +
        Erik.Vehicle_Model +
        " manufactured in  " +
        Erik.Vehicle_Year;
}


class GraphNode {
    constructor(id, gid, name, abbreviation, definition, source, connections, reserv) {
        this.Id = id;
        this.Gid = gid;
        this.Name = name;
        this.Abreviation = abbreviation;
        this.Definition = definition;
        this.Source = source;
        this.Connections = connections;
        this.ReservedWord = reserv;
    }
}

var myNode1 = new GraphNode(
    1,
    1,
    "Artificial Intelligence",
    "AI",
    "A branch of computer science focused on making machines smart enough to perform tasks that usually need human thought.",
    "Google",
    "112,33,44",
    "If"
);


function displayReserved() {
    var myNode2 = new GraphNode(
        1,
        1,
        "Artificial Intelligence",
        "AI",
        "A branch of computer science focused on making machines smart enough to perform tasks that usually need human thought.",
        "Google",
        "112,33,44",
        "If"
    );
    // didn't realy say if the reserved word was to be quoted or not if it is not then you get a reference error
    document.getElementById("Reserved").innerHTML = `reserved word: ${myNode2.ReservedWord}`;
}

function toggleModal(modalId) {
    // get 
    const modalElement = document.getElementById(modalId);

    // 2. Define the nested function to handle UI updates
    function setDisplayState(cssValue) {
        // Because of lexical scoping, it can directly access 'modalElement'
        document.getElementById('Found').innerHTML = "You Found Me!!";
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