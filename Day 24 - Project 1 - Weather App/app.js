// Activity 2: Fetching Weather Data
//              Task 3: Use the fetch API to get current weather data.
//                       Create an app.js file.
//                       Use the Fetch API to get weather data from the OpenWeatherMap API
//              Task 4: Parse the weather data and display it on the web page.
//                       Parse the data and update the DOM

// Activity 3: Adding Search Functionality
//              Task 5: Add an input field and a search button.
//              Task 6: Write a function to fetch and display weather data for a searched city.
//                       Add a function to handle the search

// Activity 4: Displaying a 5-Day Forecast
//              Task 7: Fetch the 5-day weather forecast.
//                       Modify the URL to fetch 5-day forecast data:
//              Task 8: Parse and display the 5-day forecast.
//                       Parse and display the forecast data

// Activity 5: Enhancing the UI
//              Task 9: Add icons to represent weather conditions.
//                       Use weather icons based on the weather data:

const apiKey = 'YOUR_API_KEY_FROM_OPENWEATHERMAP';

// Function to fetch current weather data
function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const temp = data.main.temp;
            const weather = data.weather[0].description;
            const cityName = data.name;
            const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

            document.getElementById('weather-info').innerHTML = `
                <p>City: ${cityName}</p>
                <p>Temperature: ${temp}°C</p>
                <p>Condition: ${weather} <img src="${weatherIcon}" alt="Weather icon"></p>
            `;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

// Function to fetch 5-day weather forecast
function fetchForecast(city) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(forecastUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const forecastList = data.list.slice(0, 5);
            let forecastHtml = '';

            forecastList.forEach(forecast => {
                forecastHtml += `
                    <p>${forecast.dt_txt}: ${forecast.main.temp}°C, ${forecast.weather[0].description}</p>
                `;
            });

            document.getElementById('forecast-info').innerHTML = forecastHtml;
        })
        .catch(error => console.error('Error fetching forecast data:', error));
}

// Event listener for the search button
document.getElementById('search-btn').addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        fetchWeather(city);
        fetchForecast(city);
    } else {
        alert('Please enter a city name.');
    }
});

// Initial data fetch for a default city (e.g., Mumbai,ind)
fetchWeather('Mumbai,ind');
fetchForecast('Mumbai,ind');