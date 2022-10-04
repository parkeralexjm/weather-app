export async function getWeather(lat, lon) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cac0e877a9ca61bfd7eed3dfbd0f5262&units=metric`, { mode: 'cors' });
  const weatherData = await response.json();
  // eslint-disable-next-line no-console
  console.log(weatherData);
  return weatherData;
}

export async function getForecast(lat, lon) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=cac0e877a9ca61bfd7eed3dfbd0f5262&units=metric`, { mode: 'cors' });
  const forecastData = await response.json();

  // eslint-disable-next-line no-console
  console.log(forecastData);
  return forecastData;
}

export async function getCoords(cityName) {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=cac0e877a9ca61bfd7eed3dfbd0f5262`);
  const coords = await response.json();

  // eslint-disable-next-line no-console
  console.log(coords[0].lat, coords[0].lon);

  return coords;
  // coords[0]. to access the access the data inside the request
}
