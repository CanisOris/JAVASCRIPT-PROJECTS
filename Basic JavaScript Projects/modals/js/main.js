


function toggleModal(modalId) {
    // get 
    const modalElement = document.getElementById(modalId);

    // 2. Define the nested function to handle UI updates
    function setDisplayState(cssValue) {
        // Because of lexical scoping, it can directly access 'modalElement'
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