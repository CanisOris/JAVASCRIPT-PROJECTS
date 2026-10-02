
// document.write() depresiated
// https://developer.mozilla.org/en-US/docs/Web/API/Document/write
// cross-site scripting issues

var PantherExpress = 12 + 4;
var stuff = "\"stuffing\"" + " a turkey" + PantherExpress;
var letterToSanta = "New super computer";
// document.write(stuff);
window.alert(stuff);


const container = document.getElementById('postOffice');
container.innerHTML = letterToSanta;

