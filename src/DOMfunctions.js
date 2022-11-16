import {
  assignTempSymbol, convertWind, formatDate, lookupIcon, lookupCountry, getDay,
} from './utility';

function getCity(data) {
  // Get the city name
  const { name } = data;
  const weatherCity = document.querySelector('.weather-city');
  weatherCity.textContent = name;
}

function getCountry(data) {
  // Get the country
  const { country } = data.sys;
  const weatherCountry = document.querySelector('.weather-country');
  weatherCountry.textContent = lookupCountry(country);
}

function getTemperature(data, unit) {
  // Get the temp and apply to the DOM
  const { temp } = data.main;
  const weatherTemp = document.querySelector('.weather-temp');
  weatherTemp.innerHTML = `<span>${assignTempSymbol(temp, unit)}</span><span class="material-symbols-outlined">device_thermostat</span>`;
}

function getWind(data, unit) {
  // Get the Wind speed and apply to the DOM
  const wind = convertWind(data.wind.speed, unit);
  const weatherWind = document.querySelector('.weather-wind');
  weatherWind.innerHTML = `<span>${wind}</span><span class="material-symbols-outlined">air</span>`;
}

function getWeather(data) {
  // get the weatherType and icon
  const weatherType = data.weather[0].main;
  const weatherIcon = lookupIcon(data.weather[0].icon);
  const atmosphereType = document.querySelector('.atmosphere-cloud');
  const atmosphereIcon = document.querySelector('.atmosphere-icon');
  atmosphereType.textContent = weatherType;
  atmosphereIcon.innerHTML = weatherIcon;
}

function getDescription(data) {
  // get the description
  const desc = data.weather[0].description;
  const atmosphereDesc = document.querySelector('.atmosphere-desc');
  atmosphereDesc.textContent = desc;
}

function getHumidity(data) {
  // get the Humidity
  const { humidity } = data.main;
  const atmosphereHumidity = document.querySelector('.atmosphere-humidity');
  atmosphereHumidity.innerHTML = `<span class="material-symbols-outlined">humidity_low</span><span>${humidity}%</span>`;
}

function getHourly(data, forecast, unit) {
  // for the next 10 3 hour forecasts get each and display
  const hourly = forecast.list;
  for (let i = 0; i <= 9; i += 1) {
    const time = hourly[i].dt + data.timezone;
    const weather = lookupIcon(hourly[i].weather[0].icon);
    const hourTemp = hourly[i].main.temp;
    const hourlyRender = document.createElement('div');
    const day = getDay(hourly[i].dt);
    hourlyRender.innerHTML = `<span>${day}</span><span>${formatDate(time)}</span><span>${weather}</span><span>${assignTempSymbol(hourTemp, unit)}</span>`;
    hourlyRender.classList.add('three-hour');
    hourlyRender.id = `forecast-${i + 1}`;
    const forecastBox = document.querySelector('.forecast-box');
    forecastBox.innerHTML = '';
    forecastBox.append(hourlyRender);
  }
}
export default function renderWeather(data, forecast, unit) {
  getCity(data);
  getCountry(data);
  getTemperature(data, unit);
  getWind(data, unit);
  getWeather(data);
  getDescription(data);
  getHumidity(data);
  getHourly(data, forecast, unit);
}
