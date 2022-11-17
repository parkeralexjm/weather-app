"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["domFunctions"],{

/***/ "./src/DOMfunctions.js":
/*!*****************************!*\
  !*** ./src/DOMfunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderWeather)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility */ "./src/utility.js");


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
  weatherCountry.textContent = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.lookupCountry)(country);
}

function getTemperature(data, unit) {
  // Get the temp and apply to the DOM
  const { temp } = data.main;
  const weatherTemp = document.querySelector('.weather-temp');
  weatherTemp.innerHTML = `<span>${(0,_utility__WEBPACK_IMPORTED_MODULE_0__.assignTempSymbol)(temp, unit)}</span><span class="material-symbols-outlined">device_thermostat</span>`;
}

function getWind(data, unit) {
  // Get the Wind speed and apply to the DOM
  const wind = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.convertWind)(data.wind.speed, unit);
  const weatherWind = document.querySelector('.weather-wind');
  weatherWind.innerHTML = `<span>${wind}</span><span class="material-symbols-outlined">air</span>`;
}

function getWeather(data) {
  // get the weatherType and icon
  const weatherType = data.weather[0].main;
  const weatherIcon = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.lookupIcon)(data.weather[0].icon);
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
  const forecastBox = document.querySelector('.forecast-box');
  forecastBox.innerHTML = '';
  for (let i = 0; i <= 9; i += 1) {
    const time = hourly[i].dt + data.timezone;
    const weather = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.lookupIcon)(hourly[i].weather[0].icon);
    const hourTemp = hourly[i].main.temp;
    const hourlyRender = document.createElement('div');
    const day = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.getDay)(hourly[i].dt);
    hourlyRender.innerHTML = `<span>${day}</span><span>${(0,_utility__WEBPACK_IMPORTED_MODULE_0__.formatDate)(time)}</span><span>${weather}</span><span>${(0,_utility__WEBPACK_IMPORTED_MODULE_0__.assignTempSymbol)(hourTemp, unit)}</span>`;
    hourlyRender.classList.add('three-hour');
    hourlyRender.id = `forecast-${i + 1}`;
    forecastBox.append(hourlyRender);
  }
}
function renderWeather(data, forecast, unit) {
  getCity(data);
  getCountry(data);
  getTemperature(data, unit);
  getWind(data, unit);
  getWeather(data);
  getDescription(data);
  getHumidity(data);
  getHourly(data, forecast, unit);
}


/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignTempSymbol": () => (/* binding */ assignTempSymbol),
/* harmony export */   "convertWind": () => (/* binding */ convertWind),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "getDay": () => (/* binding */ getDay),
/* harmony export */   "lookupCountry": () => (/* binding */ lookupCountry),
/* harmony export */   "lookupIcon": () => (/* binding */ lookupIcon)
/* harmony export */ });
function lookupIcon(code) {
  // Use the icon code from the API to select the correct symbol
  if (code === '01d') {
    return '<span class="material-symbols-outlined">sunny</span>';
  }

  if (code === '01n') {
    return '<span class="material-symbols-outlined">clear_night</span>';
  }

  if (code === '02d') {
    return '<span class="material-symbols-outlined">partly_cloudy_day</span>';
  }

  if (code === '02n') {
    return '<span class="material-symbols-outlined">nights_stay</span>';
  }

  if (code === '03d'
   || code === '03n'
   || code === '04d'
   || code === '04n') {
    return '<span class="material-symbols-outlined">cloudy</span>';
  }

  if (code === '09d'
  || code === '09n'
  || code === '10d'
  || code === '10n') {
    return '<span class="material-symbols-outlined">rainy</span>';
  }

  if (code === '11d' || code === '11n') {
    return '<span class="material-symbols-outlined">thunderstorm</span>';
  }

  if (code === '13d' || code === '13n') {
    return '<span class="material-symbols-outlined">cloudy_snowing</span>';
  }

  if (code === '50d' || code === '50n') {
    return '<span class="material-symbols-outlined">foggy</span>';
  }

  return false;
}

function formatDate(date) {
  // Convert date from unix to hour am/pm and show in local timezone
  const newDate = new Date(date * 1000);
  let shortDate = parseInt(newDate.toLocaleTimeString(), 10);
  let timeOfDay = '';
  if (shortDate > 12) {
    timeOfDay = ' pm';
    shortDate -= 12;
  } else if (shortDate === 12) {
    timeOfDay = ' pm';
  } else if (shortDate === 0) {
    timeOfDay = ' am';
    shortDate = 12;
  } else {
    timeOfDay = ' am';
  }
  return shortDate + timeOfDay;
}

// Get the day from the unix timecode
function getDay(date) {
  const day = new Date(date * 1000).getDay();
  const dayArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  return dayArray[day];
}

function convertWind(speed, unit) {
  // Convert wind from m/s to kmh
  if (unit === 'metric') {
    return `${Math.round(speed * 2.23694)} mph`;
  }
  // If the unit is imperial then the speed already in mph
  return `${Math.round(speed)} mph`;
}

// Attach the correct symbol to the temperature
function assignTempSymbol(temp, unit) {
  if (unit === 'metric') {
    return `${Math.round(temp)} \u00B0C`;
  }
  return `${Math.round(temp)} F`;
}

// Convert the country code to the full name
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

function lookupCountry(country) {
  try {
    return regionNames.of(country);
  } catch (err) {
    return '';
  }
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/DOMfunctions.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tRnVuY3Rpb25zLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVtQjs7QUFFbkI7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQjtBQUNBLCtCQUErQix1REFBYTtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0EsbUNBQW1DLDBEQUFnQixhQUFhO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQSxlQUFlLHFEQUFXO0FBQzFCO0FBQ0EsbUNBQW1DLEtBQUs7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9EQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQSxxR0FBcUcsU0FBUztBQUM5Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQSxvQkFBb0Isb0RBQVU7QUFDOUI7QUFDQTtBQUNBLGdCQUFnQixnREFBTTtBQUN0QixzQ0FBc0MsSUFBSSxlQUFlLG9EQUFVLE9BQU8sZUFBZSxRQUFRLGVBQWUsMERBQWdCLGlCQUFpQjtBQUNqSjtBQUNBLGtDQUFrQyxNQUFNO0FBQ3hDO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkJBQTZCO0FBQzNDO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtCQUFrQjtBQUNoQztBQUNBLFlBQVksa0JBQWtCO0FBQzlCOztBQUVBO0FBQ0Esb0RBQW9ELGdCQUFnQjs7QUFFcEU7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFzc2lnblRlbXBTeW1ib2wsIGNvbnZlcnRXaW5kLCBmb3JtYXREYXRlLCBsb29rdXBJY29uLCBsb29rdXBDb3VudHJ5LCBnZXREYXksXG59IGZyb20gJy4vdXRpbGl0eSc7XG5cbmZ1bmN0aW9uIGdldENpdHkoZGF0YSkge1xuICAvLyBHZXQgdGhlIGNpdHkgbmFtZVxuICBjb25zdCB7IG5hbWUgfSA9IGRhdGE7XG4gIGNvbnN0IHdlYXRoZXJDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2l0eScpO1xuICB3ZWF0aGVyQ2l0eS50ZXh0Q29udGVudCA9IG5hbWU7XG59XG5cbmZ1bmN0aW9uIGdldENvdW50cnkoZGF0YSkge1xuICAvLyBHZXQgdGhlIGNvdW50cnlcbiAgY29uc3QgeyBjb3VudHJ5IH0gPSBkYXRhLnN5cztcbiAgY29uc3Qgd2VhdGhlckNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jb3VudHJ5Jyk7XG4gIHdlYXRoZXJDb3VudHJ5LnRleHRDb250ZW50ID0gbG9va3VwQ291bnRyeShjb3VudHJ5KTtcbn1cblxuZnVuY3Rpb24gZ2V0VGVtcGVyYXR1cmUoZGF0YSwgdW5pdCkge1xuICAvLyBHZXQgdGhlIHRlbXAgYW5kIGFwcGx5IHRvIHRoZSBET01cbiAgY29uc3QgeyB0ZW1wIH0gPSBkYXRhLm1haW47XG4gIGNvbnN0IHdlYXRoZXJUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItdGVtcCcpO1xuICB3ZWF0aGVyVGVtcC5pbm5lckhUTUwgPSBgPHNwYW4+JHthc3NpZ25UZW1wU3ltYm9sKHRlbXAsIHVuaXQpfTwvc3Bhbj48c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5kZXZpY2VfdGhlcm1vc3RhdDwvc3Bhbj5gO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kKGRhdGEsIHVuaXQpIHtcbiAgLy8gR2V0IHRoZSBXaW5kIHNwZWVkIGFuZCBhcHBseSB0byB0aGUgRE9NXG4gIGNvbnN0IHdpbmQgPSBjb252ZXJ0V2luZChkYXRhLndpbmQuc3BlZWQsIHVuaXQpO1xuICBjb25zdCB3ZWF0aGVyV2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXdpbmQnKTtcbiAgd2VhdGhlcldpbmQuaW5uZXJIVE1MID0gYDxzcGFuPiR7d2luZH08L3NwYW4+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+YWlyPC9zcGFuPmA7XG59XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXIoZGF0YSkge1xuICAvLyBnZXQgdGhlIHdlYXRoZXJUeXBlIGFuZCBpY29uXG4gIGNvbnN0IHdlYXRoZXJUeXBlID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gbG9va3VwSWNvbihkYXRhLndlYXRoZXJbMF0uaWNvbik7XG4gIGNvbnN0IGF0bW9zcGhlcmVUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0bW9zcGhlcmUtY2xvdWQnKTtcbiAgY29uc3QgYXRtb3NwaGVyZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRtb3NwaGVyZS1pY29uJyk7XG4gIGF0bW9zcGhlcmVUeXBlLnRleHRDb250ZW50ID0gd2VhdGhlclR5cGU7XG4gIGF0bW9zcGhlcmVJY29uLmlubmVySFRNTCA9IHdlYXRoZXJJY29uO1xufVxuXG5mdW5jdGlvbiBnZXREZXNjcmlwdGlvbihkYXRhKSB7XG4gIC8vIGdldCB0aGUgZGVzY3JpcHRpb25cbiAgY29uc3QgZGVzYyA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgYXRtb3NwaGVyZURlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRtb3NwaGVyZS1kZXNjJyk7XG4gIGF0bW9zcGhlcmVEZXNjLnRleHRDb250ZW50ID0gZGVzYztcbn1cblxuZnVuY3Rpb24gZ2V0SHVtaWRpdHkoZGF0YSkge1xuICAvLyBnZXQgdGhlIEh1bWlkaXR5XG4gIGNvbnN0IHsgaHVtaWRpdHkgfSA9IGRhdGEubWFpbjtcbiAgY29uc3QgYXRtb3NwaGVyZUh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0bW9zcGhlcmUtaHVtaWRpdHknKTtcbiAgYXRtb3NwaGVyZUh1bWlkaXR5LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5odW1pZGl0eV9sb3c8L3NwYW4+PHNwYW4+JHtodW1pZGl0eX0lPC9zcGFuPmA7XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJseShkYXRhLCBmb3JlY2FzdCwgdW5pdCkge1xuICAvLyBmb3IgdGhlIG5leHQgMTAgMyBob3VyIGZvcmVjYXN0cyBnZXQgZWFjaCBhbmQgZGlzcGxheVxuICBjb25zdCBob3VybHkgPSBmb3JlY2FzdC5saXN0O1xuICBjb25zdCBmb3JlY2FzdEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1ib3gnKTtcbiAgZm9yZWNhc3RCb3guaW5uZXJIVE1MID0gJyc7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkgKz0gMSkge1xuICAgIGNvbnN0IHRpbWUgPSBob3VybHlbaV0uZHQgKyBkYXRhLnRpbWV6b25lO1xuICAgIGNvbnN0IHdlYXRoZXIgPSBsb29rdXBJY29uKGhvdXJseVtpXS53ZWF0aGVyWzBdLmljb24pO1xuICAgIGNvbnN0IGhvdXJUZW1wID0gaG91cmx5W2ldLm1haW4udGVtcDtcbiAgICBjb25zdCBob3VybHlSZW5kZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkYXkgPSBnZXREYXkoaG91cmx5W2ldLmR0KTtcbiAgICBob3VybHlSZW5kZXIuaW5uZXJIVE1MID0gYDxzcGFuPiR7ZGF5fTwvc3Bhbj48c3Bhbj4ke2Zvcm1hdERhdGUodGltZSl9PC9zcGFuPjxzcGFuPiR7d2VhdGhlcn08L3NwYW4+PHNwYW4+JHthc3NpZ25UZW1wU3ltYm9sKGhvdXJUZW1wLCB1bml0KX08L3NwYW4+YDtcbiAgICBob3VybHlSZW5kZXIuY2xhc3NMaXN0LmFkZCgndGhyZWUtaG91cicpO1xuICAgIGhvdXJseVJlbmRlci5pZCA9IGBmb3JlY2FzdC0ke2kgKyAxfWA7XG4gICAgZm9yZWNhc3RCb3guYXBwZW5kKGhvdXJseVJlbmRlcik7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcldlYXRoZXIoZGF0YSwgZm9yZWNhc3QsIHVuaXQpIHtcbiAgZ2V0Q2l0eShkYXRhKTtcbiAgZ2V0Q291bnRyeShkYXRhKTtcbiAgZ2V0VGVtcGVyYXR1cmUoZGF0YSwgdW5pdCk7XG4gIGdldFdpbmQoZGF0YSwgdW5pdCk7XG4gIGdldFdlYXRoZXIoZGF0YSk7XG4gIGdldERlc2NyaXB0aW9uKGRhdGEpO1xuICBnZXRIdW1pZGl0eShkYXRhKTtcbiAgZ2V0SG91cmx5KGRhdGEsIGZvcmVjYXN0LCB1bml0KTtcbn1cbiIsImZ1bmN0aW9uIGxvb2t1cEljb24oY29kZSkge1xuICAvLyBVc2UgdGhlIGljb24gY29kZSBmcm9tIHRoZSBBUEkgdG8gc2VsZWN0IHRoZSBjb3JyZWN0IHN5bWJvbFxuICBpZiAoY29kZSA9PT0gJzAxZCcpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPnN1bm55PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzAxbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmNsZWFyX25pZ2h0PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzAyZCcpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPnBhcnRseV9jbG91ZHlfZGF5PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzAybicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPm5pZ2h0c19zdGF5PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzAzZCdcbiAgIHx8IGNvZGUgPT09ICcwM24nXG4gICB8fCBjb2RlID09PSAnMDRkJ1xuICAgfHwgY29kZSA9PT0gJzA0bicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmNsb3VkeTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwOWQnXG4gIHx8IGNvZGUgPT09ICcwOW4nXG4gIHx8IGNvZGUgPT09ICcxMGQnXG4gIHx8IGNvZGUgPT09ICcxMG4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5yYWlueTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcxMWQnIHx8IGNvZGUgPT09ICcxMW4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj50aHVuZGVyc3Rvcm08L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMTNkJyB8fCBjb2RlID09PSAnMTNuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Y2xvdWR5X3Nub3dpbmc8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnNTBkJyB8fCBjb2RlID09PSAnNTBuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Zm9nZ3k8L3NwYW4+JztcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIC8vIENvbnZlcnQgZGF0ZSBmcm9tIHVuaXggdG8gaG91ciBhbS9wbSBhbmQgc2hvdyBpbiBsb2NhbCB0aW1lem9uZVxuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSAqIDEwMDApO1xuICBsZXQgc2hvcnREYXRlID0gcGFyc2VJbnQobmV3RGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKSwgMTApO1xuICBsZXQgdGltZU9mRGF5ID0gJyc7XG4gIGlmIChzaG9ydERhdGUgPiAxMikge1xuICAgIHRpbWVPZkRheSA9ICcgcG0nO1xuICAgIHNob3J0RGF0ZSAtPSAxMjtcbiAgfSBlbHNlIGlmIChzaG9ydERhdGUgPT09IDEyKSB7XG4gICAgdGltZU9mRGF5ID0gJyBwbSc7XG4gIH0gZWxzZSBpZiAoc2hvcnREYXRlID09PSAwKSB7XG4gICAgdGltZU9mRGF5ID0gJyBhbSc7XG4gICAgc2hvcnREYXRlID0gMTI7XG4gIH0gZWxzZSB7XG4gICAgdGltZU9mRGF5ID0gJyBhbSc7XG4gIH1cbiAgcmV0dXJuIHNob3J0RGF0ZSArIHRpbWVPZkRheTtcbn1cblxuLy8gR2V0IHRoZSBkYXkgZnJvbSB0aGUgdW5peCB0aW1lY29kZVxuZnVuY3Rpb24gZ2V0RGF5KGRhdGUpIHtcbiAgY29uc3QgZGF5ID0gbmV3IERhdGUoZGF0ZSAqIDEwMDApLmdldERheSgpO1xuICBjb25zdCBkYXlBcnJheSA9IFsnc3VuZGF5JywgJ21vbmRheScsICd0dWVzZGF5JywgJ3dlZG5lc2RheScsICd0aHVyc2RheScsICdmcmlkYXknLCAnc2F0dXJkYXknXTtcbiAgcmV0dXJuIGRheUFycmF5W2RheV07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRXaW5kKHNwZWVkLCB1bml0KSB7XG4gIC8vIENvbnZlcnQgd2luZCBmcm9tIG0vcyB0byBrbWhcbiAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgcmV0dXJuIGAke01hdGgucm91bmQoc3BlZWQgKiAyLjIzNjk0KX0gbXBoYDtcbiAgfVxuICAvLyBJZiB0aGUgdW5pdCBpcyBpbXBlcmlhbCB0aGVuIHRoZSBzcGVlZCBhbHJlYWR5IGluIG1waFxuICByZXR1cm4gYCR7TWF0aC5yb3VuZChzcGVlZCl9IG1waGA7XG59XG5cbi8vIEF0dGFjaCB0aGUgY29ycmVjdCBzeW1ib2wgdG8gdGhlIHRlbXBlcmF0dXJlXG5mdW5jdGlvbiBhc3NpZ25UZW1wU3ltYm9sKHRlbXAsIHVuaXQpIHtcbiAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgcmV0dXJuIGAke01hdGgucm91bmQodGVtcCl9IFxcdTAwQjBDYDtcbiAgfVxuICByZXR1cm4gYCR7TWF0aC5yb3VuZCh0ZW1wKX0gRmA7XG59XG5cbi8vIENvbnZlcnQgdGhlIGNvdW50cnkgY29kZSB0byB0aGUgZnVsbCBuYW1lXG5jb25zdCByZWdpb25OYW1lcyA9IG5ldyBJbnRsLkRpc3BsYXlOYW1lcyhbJ2VuJ10sIHsgdHlwZTogJ3JlZ2lvbicgfSk7XG5cbmZ1bmN0aW9uIGxvb2t1cENvdW50cnkoY291bnRyeSkge1xuICB0cnkge1xuICAgIHJldHVybiByZWdpb25OYW1lcy5vZihjb3VudHJ5KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGxvb2t1cENvdW50cnksIGFzc2lnblRlbXBTeW1ib2wsIGNvbnZlcnRXaW5kLCBnZXREYXksIGxvb2t1cEljb24sIGZvcm1hdERhdGUsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9