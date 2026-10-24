function getGetQuote() {
    const ajaxRequest = new XMLHttpRequest();

    // 1. Define what happens if there is a network-level error (e.g., CORS, offline)
    ajaxRequest.onerror = function () {
        console.error("Unable to load the response. Open the page through a local web server.");
    };

    // 2. Define what happens when the request completes
    ajaxRequest.onload = function () {
        // Check if the server returned a successful HTTP status code
        if (ajaxRequest.status >= 200 && ajaxRequest.status < 300) {
            // Parse the downloaded HTML so we can select its list items.
            const quoteDocument = new DOMParser().parseFromString(
                ajaxRequest.responseText,
                'text/html'
            );
            const quotes = quoteDocument.querySelectorAll('li');

            if (quotes.length === 0) {
                console.error("No quotes found in quote.html.");
                return;
            }

            // Pick a random quote and display its text.
            const rando = Math.floor(Math.random() * quotes.length);
            document.getElementById('quoteOut').textContent =
                quotes[rando].textContent;
        } else {
            console.error("Server returned an error:", ajaxRequest.status);
        }
    };

    // 3. Initialize the request configuration
    ajaxRequest.open('GET', 'quote.html', true);

    // 4. Fire the network call
    ajaxRequest.send();
}
function getMsg2() {
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


// Construct the URL to get the current weather
// https://api.open-meteo.com/v1/forecast?latitude=45.5946&longitude=121.1787&current_weather=true

const DEFAULT_LAT = 45.5946;
    const DEFAULT_LON = -121.1787; // at first i missed the minus and was looking at mongolia.

    // 1. Check permissions and route accordingly
    function initWeather() {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchWeather(position.coords.latitude, position.coords.longitude);
          },
          (error) => {
            console.warn("Geolocation failed/denied. Using defaults.", error.message);
            fetchWeather(DEFAULT_LAT, DEFAULT_LON);
          },
          { timeout: 5000 } // Don't hang forever if location is stuck
        );
      } else {
        console.warn("Geolocation not supported. Using defaults.");
        fetchWeather(DEFAULT_LAT, DEFAULT_LON);
      }
    }

    // 2. Fetch the data
    function fetchWeather(lat, lon) {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit`;

      fetch(url)
        .then(response => {
          if (!response.ok) throw new Error("Network response was not ok");
          return response.json();
        })
        .then(data => {
          renderWeatherOutput(data.current_weather, lat, lon);
        })
        .catch(error => {
          document.getElementById("weather-display").innerHTML = `<p>Error loading weather data.</p>`;
          console.error("Error fetching the weather:", error);
        });
    }

    // 3. Organize and display the output
    function renderWeatherOutput(weather, lat, lon) {
      const display = document.getElementById("weather-display");
      
      const html = `
        <div style='color: whitesmoke;'>
        <h2 >Current Weather</h2>
        <p><strong>Coordinates:</strong> ${lat.toFixed(4)}, ${lon.toFixed(4)}</p>
        <p><strong>Temperature:</strong> ${weather.temperature}°F</p>
        <p><strong>Wind Speed:</strong> ${weather.windspeed} km/h</p>
        </div>
      `;
      
      display.innerHTML = html;
    }

// Start the weather request on pages that contain the weather display.
if (document.getElementById("weather-display")) {
    initWeather();
}

