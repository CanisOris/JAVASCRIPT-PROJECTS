function getMsg() {
    // Read the name before the response replaces the form.
    let inputVal = document.getElementById('fullName').value;
    let ajaxRequest = new XMLHttpRequest();

    ajaxRequest.onload = function () {
        if (this.status === 200) {
            // Insert the response before updating the message it contains.
            document.getElementById('content').innerHTML = this.responseText;
            document.getElementById('tkuMsg').textContent =
                "Thank you " + inputVal + " for signing up!";
        } else {
            console.error("Request failed:", this.status);
        }
    };

    ajaxRequest.onerror = function () {
        console.error("Unable to load the response. Open the page through a local web server.");
    };

    ajaxRequest.open('GET', 'response.html', true);
    ajaxRequest.send();
}
