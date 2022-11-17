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
  for (let i = 0; i <= 9; i += 1) {
    const time = hourly[i].dt + data.timezone;
    const weather = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.lookupIcon)(hourly[i].weather[0].icon);
    const hourTemp = hourly[i].main.temp;
    const hourlyRender = document.createElement('div');
    const day = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.getDay)(hourly[i].dt);
    hourlyRender.innerHTML = `<span>${day}</span><span>${(0,_utility__WEBPACK_IMPORTED_MODULE_0__.formatDate)(time)}</span><span>${weather}</span><span>${(0,_utility__WEBPACK_IMPORTED_MODULE_0__.assignTempSymbol)(hourTemp, unit)}</span>`;
    hourlyRender.classList.add('three-hour');
    hourlyRender.id = `forecast-${i + 1}`;
    const forecastBox = document.querySelector('.forecast-box');
    forecastBox.innerHTML = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tRnVuY3Rpb25zLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVtQjs7QUFFbkI7QUFDQTtBQUNBLFVBQVUsT0FBTztBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQjtBQUNBLCtCQUErQix1REFBYTtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0EsbUNBQW1DLDBEQUFnQixhQUFhO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQSxlQUFlLHFEQUFXO0FBQzFCO0FBQ0EsbUNBQW1DLEtBQUs7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9EQUFVO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQSxxR0FBcUcsU0FBUztBQUM5Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBLG9CQUFvQixvREFBVTtBQUM5QjtBQUNBO0FBQ0EsZ0JBQWdCLGdEQUFNO0FBQ3RCLHNDQUFzQyxJQUFJLGVBQWUsb0RBQVUsT0FBTyxlQUFlLFFBQVEsZUFBZSwwREFBZ0IsaUJBQWlCO0FBQ2pKO0FBQ0Esa0NBQWtDLE1BQU07QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkJBQTZCO0FBQzNDO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtCQUFrQjtBQUNoQztBQUNBLFlBQVksa0JBQWtCO0FBQzlCOztBQUVBO0FBQ0Esb0RBQW9ELGdCQUFnQjs7QUFFcEU7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFJRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL0RPTWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGFzc2lnblRlbXBTeW1ib2wsIGNvbnZlcnRXaW5kLCBmb3JtYXREYXRlLCBsb29rdXBJY29uLCBsb29rdXBDb3VudHJ5LCBnZXREYXksXG59IGZyb20gJy4vdXRpbGl0eSc7XG5cbmZ1bmN0aW9uIGdldENpdHkoZGF0YSkge1xuICAvLyBHZXQgdGhlIGNpdHkgbmFtZVxuICBjb25zdCB7IG5hbWUgfSA9IGRhdGE7XG4gIGNvbnN0IHdlYXRoZXJDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2l0eScpO1xuICB3ZWF0aGVyQ2l0eS50ZXh0Q29udGVudCA9IG5hbWU7XG59XG5cbmZ1bmN0aW9uIGdldENvdW50cnkoZGF0YSkge1xuICAvLyBHZXQgdGhlIGNvdW50cnlcbiAgY29uc3QgeyBjb3VudHJ5IH0gPSBkYXRhLnN5cztcbiAgY29uc3Qgd2VhdGhlckNvdW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jb3VudHJ5Jyk7XG4gIHdlYXRoZXJDb3VudHJ5LnRleHRDb250ZW50ID0gbG9va3VwQ291bnRyeShjb3VudHJ5KTtcbn1cblxuZnVuY3Rpb24gZ2V0VGVtcGVyYXR1cmUoZGF0YSwgdW5pdCkge1xuICAvLyBHZXQgdGhlIHRlbXAgYW5kIGFwcGx5IHRvIHRoZSBET01cbiAgY29uc3QgeyB0ZW1wIH0gPSBkYXRhLm1haW47XG4gIGNvbnN0IHdlYXRoZXJUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItdGVtcCcpO1xuICB3ZWF0aGVyVGVtcC5pbm5lckhUTUwgPSBgPHNwYW4+JHthc3NpZ25UZW1wU3ltYm9sKHRlbXAsIHVuaXQpfTwvc3Bhbj48c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5kZXZpY2VfdGhlcm1vc3RhdDwvc3Bhbj5gO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kKGRhdGEsIHVuaXQpIHtcbiAgLy8gR2V0IHRoZSBXaW5kIHNwZWVkIGFuZCBhcHBseSB0byB0aGUgRE9NXG4gIGNvbnN0IHdpbmQgPSBjb252ZXJ0V2luZChkYXRhLndpbmQuc3BlZWQsIHVuaXQpO1xuICBjb25zdCB3ZWF0aGVyV2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXdpbmQnKTtcbiAgd2VhdGhlcldpbmQuaW5uZXJIVE1MID0gYDxzcGFuPiR7d2luZH08L3NwYW4+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+YWlyPC9zcGFuPmA7XG59XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXIoZGF0YSkge1xuICAvLyBnZXQgdGhlIHdlYXRoZXJUeXBlIGFuZCBpY29uXG4gIGNvbnN0IHdlYXRoZXJUeXBlID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gbG9va3VwSWNvbihkYXRhLndlYXRoZXJbMF0uaWNvbik7XG4gIGNvbnN0IGF0bW9zcGhlcmVUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0bW9zcGhlcmUtY2xvdWQnKTtcbiAgY29uc3QgYXRtb3NwaGVyZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRtb3NwaGVyZS1pY29uJyk7XG4gIGF0bW9zcGhlcmVUeXBlLnRleHRDb250ZW50ID0gd2VhdGhlclR5cGU7XG4gIGF0bW9zcGhlcmVJY29uLmlubmVySFRNTCA9IHdlYXRoZXJJY29uO1xufVxuXG5mdW5jdGlvbiBnZXREZXNjcmlwdGlvbihkYXRhKSB7XG4gIC8vIGdldCB0aGUgZGVzY3JpcHRpb25cbiAgY29uc3QgZGVzYyA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgYXRtb3NwaGVyZURlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRtb3NwaGVyZS1kZXNjJyk7XG4gIGF0bW9zcGhlcmVEZXNjLnRleHRDb250ZW50ID0gZGVzYztcbn1cblxuZnVuY3Rpb24gZ2V0SHVtaWRpdHkoZGF0YSkge1xuICAvLyBnZXQgdGhlIEh1bWlkaXR5XG4gIGNvbnN0IHsgaHVtaWRpdHkgfSA9IGRhdGEubWFpbjtcbiAgY29uc3QgYXRtb3NwaGVyZUh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0bW9zcGhlcmUtaHVtaWRpdHknKTtcbiAgYXRtb3NwaGVyZUh1bWlkaXR5LmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5odW1pZGl0eV9sb3c8L3NwYW4+PHNwYW4+JHtodW1pZGl0eX0lPC9zcGFuPmA7XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJseShkYXRhLCBmb3JlY2FzdCwgdW5pdCkge1xuICAvLyBmb3IgdGhlIG5leHQgMTAgMyBob3VyIGZvcmVjYXN0cyBnZXQgZWFjaCBhbmQgZGlzcGxheVxuICBjb25zdCBob3VybHkgPSBmb3JlY2FzdC5saXN0O1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpICs9IDEpIHtcbiAgICBjb25zdCB0aW1lID0gaG91cmx5W2ldLmR0ICsgZGF0YS50aW1lem9uZTtcbiAgICBjb25zdCB3ZWF0aGVyID0gbG9va3VwSWNvbihob3VybHlbaV0ud2VhdGhlclswXS5pY29uKTtcbiAgICBjb25zdCBob3VyVGVtcCA9IGhvdXJseVtpXS5tYWluLnRlbXA7XG4gICAgY29uc3QgaG91cmx5UmVuZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGF5ID0gZ2V0RGF5KGhvdXJseVtpXS5kdCk7XG4gICAgaG91cmx5UmVuZGVyLmlubmVySFRNTCA9IGA8c3Bhbj4ke2RheX08L3NwYW4+PHNwYW4+JHtmb3JtYXREYXRlKHRpbWUpfTwvc3Bhbj48c3Bhbj4ke3dlYXRoZXJ9PC9zcGFuPjxzcGFuPiR7YXNzaWduVGVtcFN5bWJvbChob3VyVGVtcCwgdW5pdCl9PC9zcGFuPmA7XG4gICAgaG91cmx5UmVuZGVyLmNsYXNzTGlzdC5hZGQoJ3RocmVlLWhvdXInKTtcbiAgICBob3VybHlSZW5kZXIuaWQgPSBgZm9yZWNhc3QtJHtpICsgMX1gO1xuICAgIGNvbnN0IGZvcmVjYXN0Qm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVjYXN0LWJveCcpO1xuICAgIGZvcmVjYXN0Qm94LmlubmVySFRNTCA9ICcnO1xuICAgIGZvcmVjYXN0Qm94LmFwcGVuZChob3VybHlSZW5kZXIpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJXZWF0aGVyKGRhdGEsIGZvcmVjYXN0LCB1bml0KSB7XG4gIGdldENpdHkoZGF0YSk7XG4gIGdldENvdW50cnkoZGF0YSk7XG4gIGdldFRlbXBlcmF0dXJlKGRhdGEsIHVuaXQpO1xuICBnZXRXaW5kKGRhdGEsIHVuaXQpO1xuICBnZXRXZWF0aGVyKGRhdGEpO1xuICBnZXREZXNjcmlwdGlvbihkYXRhKTtcbiAgZ2V0SHVtaWRpdHkoZGF0YSk7XG4gIGdldEhvdXJseShkYXRhLCBmb3JlY2FzdCwgdW5pdCk7XG59XG4iLCJmdW5jdGlvbiBsb29rdXBJY29uKGNvZGUpIHtcbiAgLy8gVXNlIHRoZSBpY29uIGNvZGUgZnJvbSB0aGUgQVBJIHRvIHNlbGVjdCB0aGUgY29ycmVjdCBzeW1ib2xcbiAgaWYgKGNvZGUgPT09ICcwMWQnKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5zdW5ueTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwMW4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5jbGVhcl9uaWdodDwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwMmQnKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5wYXJ0bHlfY2xvdWR5X2RheTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwMm4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5uaWdodHNfc3RheTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwM2QnXG4gICB8fCBjb2RlID09PSAnMDNuJ1xuICAgfHwgY29kZSA9PT0gJzA0ZCdcbiAgIHx8IGNvZGUgPT09ICcwNG4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5jbG91ZHk8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMDlkJ1xuICB8fCBjb2RlID09PSAnMDluJ1xuICB8fCBjb2RlID09PSAnMTBkJ1xuICB8fCBjb2RlID09PSAnMTBuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+cmFpbnk8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMTFkJyB8fCBjb2RlID09PSAnMTFuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+dGh1bmRlcnN0b3JtPC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzEzZCcgfHwgY29kZSA9PT0gJzEzbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmNsb3VkeV9zbm93aW5nPC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzUwZCcgfHwgY29kZSA9PT0gJzUwbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmZvZ2d5PC9zcGFuPic7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAvLyBDb252ZXJ0IGRhdGUgZnJvbSB1bml4IHRvIGhvdXIgYW0vcG0gYW5kIHNob3cgaW4gbG9jYWwgdGltZXpvbmVcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUgKiAxMDAwKTtcbiAgbGV0IHNob3J0RGF0ZSA9IHBhcnNlSW50KG5ld0RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCksIDEwKTtcbiAgbGV0IHRpbWVPZkRheSA9ICcnO1xuICBpZiAoc2hvcnREYXRlID4gMTIpIHtcbiAgICB0aW1lT2ZEYXkgPSAnIHBtJztcbiAgICBzaG9ydERhdGUgLT0gMTI7XG4gIH0gZWxzZSBpZiAoc2hvcnREYXRlID09PSAxMikge1xuICAgIHRpbWVPZkRheSA9ICcgcG0nO1xuICB9IGVsc2UgaWYgKHNob3J0RGF0ZSA9PT0gMCkge1xuICAgIHRpbWVPZkRheSA9ICcgYW0nO1xuICAgIHNob3J0RGF0ZSA9IDEyO1xuICB9IGVsc2Uge1xuICAgIHRpbWVPZkRheSA9ICcgYW0nO1xuICB9XG4gIHJldHVybiBzaG9ydERhdGUgKyB0aW1lT2ZEYXk7XG59XG5cbi8vIEdldCB0aGUgZGF5IGZyb20gdGhlIHVuaXggdGltZWNvZGVcbmZ1bmN0aW9uIGdldERheShkYXRlKSB7XG4gIGNvbnN0IGRheSA9IG5ldyBEYXRlKGRhdGUgKiAxMDAwKS5nZXREYXkoKTtcbiAgY29uc3QgZGF5QXJyYXkgPSBbJ3N1bmRheScsICdtb25kYXknLCAndHVlc2RheScsICd3ZWRuZXNkYXknLCAndGh1cnNkYXknLCAnZnJpZGF5JywgJ3NhdHVyZGF5J107XG4gIHJldHVybiBkYXlBcnJheVtkYXldO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0V2luZChzcGVlZCwgdW5pdCkge1xuICAvLyBDb252ZXJ0IHdpbmQgZnJvbSBtL3MgdG8ga21oXG4gIGlmICh1bml0ID09PSAnbWV0cmljJykge1xuICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKHNwZWVkICogMi4yMzY5NCl9IG1waGA7XG4gIH1cbiAgLy8gSWYgdGhlIHVuaXQgaXMgaW1wZXJpYWwgdGhlbiB0aGUgc3BlZWQgYWxyZWFkeSBpbiBtcGhcbiAgcmV0dXJuIGAke01hdGgucm91bmQoc3BlZWQpfSBtcGhgO1xufVxuXG4vLyBBdHRhY2ggdGhlIGNvcnJlY3Qgc3ltYm9sIHRvIHRoZSB0ZW1wZXJhdHVyZVxuZnVuY3Rpb24gYXNzaWduVGVtcFN5bWJvbCh0ZW1wLCB1bml0KSB7XG4gIGlmICh1bml0ID09PSAnbWV0cmljJykge1xuICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKHRlbXApfSBcXHUwMEIwQ2A7XG4gIH1cbiAgcmV0dXJuIGAke01hdGgucm91bmQodGVtcCl9IEZgO1xufVxuXG4vLyBDb252ZXJ0IHRoZSBjb3VudHJ5IGNvZGUgdG8gdGhlIGZ1bGwgbmFtZVxuY29uc3QgcmVnaW9uTmFtZXMgPSBuZXcgSW50bC5EaXNwbGF5TmFtZXMoWydlbiddLCB7IHR5cGU6ICdyZWdpb24nIH0pO1xuXG5mdW5jdGlvbiBsb29rdXBDb3VudHJ5KGNvdW50cnkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcmVnaW9uTmFtZXMub2YoY291bnRyeSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5leHBvcnQge1xuICBsb29rdXBDb3VudHJ5LCBhc3NpZ25UZW1wU3ltYm9sLCBjb252ZXJ0V2luZCwgZ2V0RGF5LCBsb29rdXBJY29uLCBmb3JtYXREYXRlLFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==