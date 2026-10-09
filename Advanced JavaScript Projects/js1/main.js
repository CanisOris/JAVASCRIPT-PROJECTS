



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const target = urlParams.get('target');

function targetList(str){
  isAlpha(str);
}


// alphabetical text only
function isAlpha(str) {
    return /^[a-zA-Z]+$/.test(str);
}

function getInLi() {
    if (!target) return; // No target in the URL

    const listItems = document.querySelectorAll('li');

    for (const li of listItems) {
        const span = li.querySelector('span');

        if (
            span &&
            span.textContent.trim().toLowerCase() ===
                target.trim().toLowerCase()
        ) {
            span.style.color = 'red';
            break;
        }
    }
}

getInLi();
