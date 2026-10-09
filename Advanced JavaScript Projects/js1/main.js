



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const target = urlParams.get('target');

function targetList(str){
  isAlpha(str)
}


// alphabetical text only
function isAlpha(str) {
    return /^[a-zA-Z]+$/.test(str);
}

function getInLi() {
    // Get all list items
    const listItems = document.querySelectorAll('li');

    for (const li of listItems) {
        // Find the first span inside this specific li
        const span = li.querySelector('span');

        if (span) {
            // set value
            span.style.color = 'red';
            break;
        }
    }
}
