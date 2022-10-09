export async function getForecast(lon, lat, unit) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=cac0e877a9ca61bfd7eed3dfbd0f5262&units=${unit}`, { mode: 'cors' });
  const forecastData = await response.json();
  return forecastData;
}

export async function getCoords(cityName, unit) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cac0e877a9ca61bfd7eed3dfbd0f5262&units=${unit}`, { mode: 'cors' });
  const coords = await response.json();
  return coords;
}
