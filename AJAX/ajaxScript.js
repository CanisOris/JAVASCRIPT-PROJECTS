function getMsg() {
    // get input value of name to display to user after
    // request has been made
    let inputVal = document.getElementById('fullName').value;

    // ** step1 setup the xml http request object
    //let ajaxRequest = new XMLHttpRequest();
    // ########################### [ ajaxRequest  ]
    let ajaxRequest = new XMLHttpRequest();

    // **snip
    // Call back event
    // readyState values
    // 0 = not initialized
    // 1 = connection established
    // 2 = recieved
    // 3 = processing
    // 4 = done = ready
    // status = server status codes
    // onload runs after the request is done, so no readyState check is needed here.

    // ** step 3 defines the agjax response callback method that establishes
    // whether the response was successeful and where the data shouls be displayed
    ajaxRequest.onload = function () {
        if (this.status === 200) {
            // Insert the response before updating the message it contains.
            document.getElementById('content').innerHTML = this.responseText;

            // function to display user input value once request
            // has been recieved
            document.getElementById('tkuMsg').textContent =
                "Thank you " + inputVal + " for signing up!";
        } else {
            console.error("Request failed:", this.status);
        }
    };

    ajaxRequest.onerror = function () {
        console.error("Unable to load the response. Open the page through a local web server.");
    };

    // ** step 2 prepare the type of reques and what to reqst from the server
    // type, url, async
    ajaxRequest.open('GET', 'response.html', true);

    // ** step 4 send the trequest
    ajaxRequest.send();
}
