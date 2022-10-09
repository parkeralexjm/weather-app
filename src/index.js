import './style.css';
import { getForecast, getCoords } from './getWeather';
import renderWeather from './DOMfunctions';

// Get the elements from the document
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const temperatureC = document.querySelector('.temperature-change-c');
const temperatureF = document.querySelector('.temperature-change-f');
// Initialise variables that are required across multiple functions
let lastCity = '';
let currentUnit = '';
// Main function to control loading of the page
export default async function getWeatherData(firstLoad = true, unit = 'metric') {
  let cityName = '';
  // Check for first load
  if (firstLoad) {
    cityName = 'London';
  } else if (searchInput.value) {
    cityName = searchInput.value;
  } else {
    cityName = lastCity;
  }
  // Set visibility for the temperature units changing
  if (unit === 'imperial') {
    temperatureF.classList.add('not-visible');
    temperatureC.classList.remove('not-visible');
  } else {
    temperatureF.classList.remove('not-visible');
    temperatureC.classList.add('not-visible');
  }
  try {
    // Collect coordinate and forecast data from the API using promises
    const coords = await getCoords(cityName, unit);
    const forecast = await getForecast(coords.coord.lon, coords.coord.lat, unit);
    // Send the data to be displayed on the DOM
    renderWeather(coords, forecast, unit);
    // Store variables to be used by user input functions
    lastCity = cityName;
    currentUnit = unit;
    // Reset the error display
    document.querySelector('.error-display').innerHTML = '';
  } catch (err) {
    // If there is an error at any point, display this to the user
    document.querySelector('.error-display').innerHTML = 'Location cannot be found';
  }
}

// Allow search bar to be used by 'Enter' or clicking the icon
searchButton.addEventListener('click', () => {
  getWeatherData(false, currentUnit);
  searchInput.value = '';
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    getWeatherData(false, currentUnit);
    searchInput.value = '';
  }
});

// Allow temperature units to be switched between C and F
temperatureF.addEventListener('click', () => {
  getWeatherData(false, 'imperial');
});

temperatureC.addEventListener('click', () => {
  getWeatherData(false, 'metric');
});

getWeatherData();
