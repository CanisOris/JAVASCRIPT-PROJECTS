

// ======================================================================

// Stringify
// object
const user = {
    name: "Alex",
    age: 30,
    isActive: true,
    skills: ["JavaScript", "CSS", "HTML"]
};




window.onload = function () {
    // convert objec to string
    const jsonString = JSON.stringify(user);

    document.getElementById('strout').innerText = JSON.stringify(user, null, 2);

    const userObject = JSON.parse(jsonString);

    document.getElementById('objout').innerText = userObject.name;
}