



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