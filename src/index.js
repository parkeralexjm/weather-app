import { getForecast, getWeather, getCoords } from './getWeather';
import './style.css';

async function getWeatherData() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello webpack';
  element.classList.add('hello');
  const coords = await getCoords('London');
  const weather = await getWeather(coords[0].lon, coords[0].lat);
  const forecast = await getForecast(coords[0].lon, coords[0].lat);
  console.log(weather.main.temp);
  console.log(forecast.list[0].main.temp);
  document.body.append(element);
  return element;
}

getWeatherData();
