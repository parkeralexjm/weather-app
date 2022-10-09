import './style.css';
import { getForecast, getCoords } from './getWeather';
import renderWeather from './DOMfunctions';

const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const temperatureChange = document.querySelector('.temperature-change');
let lastCity = '';

export default async function getWeatherData(firstLoad = true, unit = 'metric') {
  let cityName;
  if (firstLoad) {
    cityName = 'London';
  } else {
    cityName = searchInput.value;
  }

  const coords = await getCoords(cityName, unit);
  console.log(coords);
  const forecast = await getForecast(coords.coord.lon, coords.coord.lat, unit);
  console.log(forecast.list);
  renderWeather(coords, forecast, unit);
  lastCity = cityName;
}

searchButton.addEventListener('click', () => {
  getWeatherData(false);
  searchInput.value = '';
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    getWeatherData(false);
    searchInput.value = '';
  }
});

getWeatherData();
