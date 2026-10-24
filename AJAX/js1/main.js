


// function Call_Loop(btnElement) {
//     const outputDiv = btnElement.nextElementSibling;
//     let result = "empty";
//     outputDiv.innerText = `${result}`;
//     let ajaxRequest = new XMLHttpRequest();

// }

// function getMsg() {
//     // get input value of name to display to user after
//     // request has been made
//     let inputVal = document.getElementById('fullName').value;



//     // **snip
//     // Call back event
//     // readyState values
//     // 0 = not initialized
//     // 1 = connection established
//     // 2 = recieved
//     // 3 = processing
//     // 4 = done = ready
//     // status = server status codes
//     // onload runs after the request is done, so no readyState check is needed here.

//     // ** step 3 defines the agjax response callback method that establishes
//     // whether the response was successeful and where the data shouls be displayed

//     //let ajaxRequest = new XMLHttpRequest();
//     // ########################### [ ajaxRequest  ]
//     // ** step1 setup the xml http request object
//     let ajaxRequest = new XMLHttpRequest();
//     ajaxRequest.onload = function () {
//         if (this.status === 200) {
//             // Insert the response before updating the message it contains.
//             document.getElementById('content').innerHTML = this.responseText;

//             // function to display user input value once request
//             // has been recieved
//             document.getElementById('tkuMsg').textContent =
//                 "Thank you " + inputVal + " for signing up!";
//         } else {
//             console.error("Request failed:", this.status);
//         }
//     };

//     ajaxRequest.onerror = function () {
//         console.error("Unable to load the response. Open the page through a local web server.");
//     };

//     // ** step 2 prepare the type of reques and what to reqst from the server
//     // type, url, async
//     ajaxRequest.open('GET', 'response.html', true);

//     // ** step 4 send the trequest
//     ajaxRequest.send();
// }

// const DEFAULT_LAT = 45.5925;
// const DEFAULT_LON = -121.1732;

// function initWeather() {
//     // check if geolocation is on and permitted
//     // if not use my location default
//     if ("geolocation" in navigator) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 fetchWeather(position.coords.latitude, position.coords.longitude);
//             },
//             (error) => {
//                 console.warn("Geolocation failed/denied. Using defaults.", error.message);
//                 fetchWeather(DEFAULT_LAT, DEFAULT_LON);
//             },
//             { timeout: 5000 }
//         );
//     } else {
//         console.warn("Geolocation not supported. Using defaults.");
//         fetchWeather(DEFAULT_LAT, DEFAULT_LON);
//     }
// }

// function fetchWeather(lat, lon) {
//     const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&temperature_unit=fahrenheit`;

//     fetch(url)
//         .then(response => {
//             if (!response.ok) throw new Error("Network response was not ok");
//             return response.json();
//         })
//         .then(data => {
//             renderWeatherOutput(data.current_weather, lat, lon);
//         })
//         .catch(error => {
//             document.getElementById("weather-display").innerHTML = `<p>Error loading weather data.</p>`;
//             console.error("Error fetching the weather:", error);
//         });
// }

// function renderWeatherOutput(weather, lat, lon) {
//     const display = document.getElementById("weather-display");

//     const html = `
//     <h2>Current Weather</h2>
//     <p><strong>Coordinates:</strong> ${lat.toFixed(4)}, ${lon.toFixed(4)}</p>
//     <p><strong>Temperature:</strong> ${weather.temperature}°F</p>
//     <p><strong>Wind Speed:</strong> ${weather.windspeed} km/h</p>
//   `;

//     display.innerHTML = html;
// }

// initWeather();



