



// Save data: localStorage.setItem('keyName', 'yourData');
// Retrieve data: localStorage.getItem('keyName');
// Delete data: localStorage.removeItem('keyName');

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('userInput');
    const display = document.getElementById('displayArea');

    // 1. Retrieve and display data when the page loads
    const savedData = localStorage.getItem('mySavedInfo');
    if (savedData !== null) {
        display.textContent = `Retrieved: ${savedData}`;
    }

    // 2. Save new data when the button is clicked
    document.getElementById('saveBtn').addEventListener('click', () => {
        const valueToSave = input.value;
        localStorage.setItem('mySavedInfo', valueToSave);
        display.textContent = `Saved: ${valueToSave}`;
    });
});



function getRandomJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => document.getElementById('jokeDisplay').textContent = `${data.setup} - ${data.punchline}`)
        .catch(err => {
            document.getElementById('jokeDisplay').textContent = 'Error Fetching Joke';
        });
}


function getRandomCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => document.getElementById('catKb').textContent = data.fact)
        .catch(err => {
            document.getElementById('catKb').textContent = 'Error Fetching Cat Fact';
        });
}
