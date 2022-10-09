import './style.css';
import { getForecast, getCoords } from './getWeather';
import renderWeather from './DOMfunctions';

const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const temperatureC = document.querySelector('.temperature-change-c');
const temperatureF = document.querySelector('.temperature-change-f');
let lastCity = '';
let currentUnit = '';
export default async function getWeatherData(firstLoad = true, unit = 'imperial') {
  let cityName = '';
  if (firstLoad) {
    cityName = 'London';
  } else if (searchInput.value) {
    cityName = searchInput.value;
  } else {
    cityName = lastCity;
  }
  if (unit === 'imperial') {
    temperatureF.classList.add('not-visible');
    temperatureC.classList.remove('not-visible');
  } else {
    temperatureF.classList.remove('not-visible');
    temperatureC.classList.add('not-visible');
  }
  try {
    const coords = await getCoords(cityName, unit);
    const forecast = await getForecast(coords.coord.lon, coords.coord.lat, unit);
    renderWeather(coords, forecast, unit);
    lastCity = cityName;
    currentUnit = unit;
    document.querySelector('.error-display').innerHTML = '';
  } catch (err) {
    document.querySelector('.error-display').innerHTML = 'Location cannot be found';
  }
}

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

temperatureF.addEventListener('click', () => {
  getWeatherData(false, 'imperial');
});

temperatureC.addEventListener('click', () => {
  getWeatherData(false, 'metric');
});

getWeatherData();
