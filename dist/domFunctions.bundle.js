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


function renderWeather(data, forecast, unit) {
  // Get the city name
  const { name } = data;
  const weatherCity = document.querySelector('.weather-city');
  weatherCity.textContent = name;
  // Get the country
  const { country } = data.sys;
  const weatherCountry = document.querySelector('.weather-country');
  weatherCountry.textContent = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.lookupCountry)(country);

  // Get the temp and apply to the DOM
  const { temp } = data.main;
  const weatherTemp = document.querySelector('.weather-temp');
  weatherTemp.innerHTML = `<span>${(0,_utility__WEBPACK_IMPORTED_MODULE_0__.assignTempSymbol)(temp, unit)}</span><span class="material-symbols-outlined">device_thermostat</span>`;
  // Get the Wind speed and apply to the DOM
  const wind = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.convertWind)(data.wind.speed, unit);
  const weatherWind = document.querySelector('.weather-wind');
  weatherWind.innerHTML = `<span>${wind}</span><span class="material-symbols-outlined">air</span>`;
  // get the weatherType and icon
  const weatherType = data.weather[0].main;
  const weatherIcon = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.lookupIcon)(data.weather[0].icon);
  const atmosphereType = document.querySelector('.atmosphere-cloud');
  const atmosphereIcon = document.querySelector('.atmosphere-icon');
  atmosphereType.textContent = weatherType;
  atmosphereIcon.innerHTML = weatherIcon;
  // get the description
  const desc = data.weather[0].description;
  const atmosphereDesc = document.querySelector('.atmosphere-desc');
  atmosphereDesc.textContent = desc;
  // get the Humidity
  const { humidity } = data.main;
  const atmosphereHumidity = document.querySelector('.atmosphere-humidity');
  atmosphereHumidity.innerHTML = `<span class="material-symbols-outlined">humidity_low</span><span>${humidity}%</span>`;
  // for the next 6 3 hour forecasts get each and display
  const hourly = forecast.list;
  for (let i = 0; i <= 9; i += 1) {
    const time = hourly[i].dt + data.timezone;
    const weather = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.lookupIcon)(hourly[i].weather[0].icon);
    const hourTemp = hourly[i].main.temp;
    const hourlyRender = document.querySelector(`#forecast-${i + 1}`);
    const day = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.getDay)(hourly[i].dt);
    hourlyRender.innerHTML = `<span>${day}</span><span>${(0,_utility__WEBPACK_IMPORTED_MODULE_0__.formatDate)(time)}</span><span>${weather}</span><span>${(0,_utility__WEBPACK_IMPORTED_MODULE_0__.assignTempSymbol)(hourTemp, unit)}</span>`;
  }
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

function assignTempSymbol(temp, unit) {
  if (unit === 'metric') {
    return `${Math.round(temp)} \u00B0C`;
  }
  return `${Math.round(temp)} F`;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tRnVuY3Rpb25zLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVtQjs7QUFFSjtBQUNmO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQjtBQUNBLCtCQUErQix1REFBYTs7QUFFNUM7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDQSxtQ0FBbUMsMERBQWdCLGFBQWE7QUFDaEU7QUFDQSxlQUFlLHFEQUFXO0FBQzFCO0FBQ0EsbUNBQW1DLEtBQUs7QUFDeEM7QUFDQTtBQUNBLHNCQUFzQixvREFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQSxxR0FBcUcsU0FBUztBQUM5RztBQUNBO0FBQ0Esa0JBQWtCLFFBQVE7QUFDMUI7QUFDQSxvQkFBb0Isb0RBQVU7QUFDOUI7QUFDQSw2REFBNkQsTUFBTTtBQUNuRSxnQkFBZ0IsZ0RBQU07QUFDdEIsc0NBQXNDLElBQUksZUFBZSxvREFBVSxPQUFPLGVBQWUsUUFBUSxlQUFlLDBEQUFnQixpQkFBaUI7QUFDako7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsY0FBYyw2QkFBNkI7QUFDM0M7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9COztBQUVPO0FBQ1A7QUFDQSxjQUFjLGtCQUFrQjtBQUNoQztBQUNBLFlBQVksa0JBQWtCO0FBQzlCOztBQUVBLG9EQUFvRCxnQkFBZ0I7O0FBRTdEO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET01mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdXRpbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhc3NpZ25UZW1wU3ltYm9sLCBjb252ZXJ0V2luZCwgZm9ybWF0RGF0ZSwgbG9va3VwSWNvbiwgbG9va3VwQ291bnRyeSwgZ2V0RGF5LFxufSBmcm9tICcuL3V0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJXZWF0aGVyKGRhdGEsIGZvcmVjYXN0LCB1bml0KSB7XG4gIC8vIEdldCB0aGUgY2l0eSBuYW1lXG4gIGNvbnN0IHsgbmFtZSB9ID0gZGF0YTtcbiAgY29uc3Qgd2VhdGhlckNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jaXR5Jyk7XG4gIHdlYXRoZXJDaXR5LnRleHRDb250ZW50ID0gbmFtZTtcbiAgLy8gR2V0IHRoZSBjb3VudHJ5XG4gIGNvbnN0IHsgY291bnRyeSB9ID0gZGF0YS5zeXM7XG4gIGNvbnN0IHdlYXRoZXJDb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY291bnRyeScpO1xuICB3ZWF0aGVyQ291bnRyeS50ZXh0Q29udGVudCA9IGxvb2t1cENvdW50cnkoY291bnRyeSk7XG5cbiAgLy8gR2V0IHRoZSB0ZW1wIGFuZCBhcHBseSB0byB0aGUgRE9NXG4gIGNvbnN0IHsgdGVtcCB9ID0gZGF0YS5tYWluO1xuICBjb25zdCB3ZWF0aGVyVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXRlbXAnKTtcbiAgd2VhdGhlclRlbXAuaW5uZXJIVE1MID0gYDxzcGFuPiR7YXNzaWduVGVtcFN5bWJvbCh0ZW1wLCB1bml0KX08L3NwYW4+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZGV2aWNlX3RoZXJtb3N0YXQ8L3NwYW4+YDtcbiAgLy8gR2V0IHRoZSBXaW5kIHNwZWVkIGFuZCBhcHBseSB0byB0aGUgRE9NXG4gIGNvbnN0IHdpbmQgPSBjb252ZXJ0V2luZChkYXRhLndpbmQuc3BlZWQsIHVuaXQpO1xuICBjb25zdCB3ZWF0aGVyV2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXdpbmQnKTtcbiAgd2VhdGhlcldpbmQuaW5uZXJIVE1MID0gYDxzcGFuPiR7d2luZH08L3NwYW4+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+YWlyPC9zcGFuPmA7XG4gIC8vIGdldCB0aGUgd2VhdGhlclR5cGUgYW5kIGljb25cbiAgY29uc3Qgd2VhdGhlclR5cGUgPSBkYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgY29uc3Qgd2VhdGhlckljb24gPSBsb29rdXBJY29uKGRhdGEud2VhdGhlclswXS5pY29uKTtcbiAgY29uc3QgYXRtb3NwaGVyZVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRtb3NwaGVyZS1jbG91ZCcpO1xuICBjb25zdCBhdG1vc3BoZXJlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdG1vc3BoZXJlLWljb24nKTtcbiAgYXRtb3NwaGVyZVR5cGUudGV4dENvbnRlbnQgPSB3ZWF0aGVyVHlwZTtcbiAgYXRtb3NwaGVyZUljb24uaW5uZXJIVE1MID0gd2VhdGhlckljb247XG4gIC8vIGdldCB0aGUgZGVzY3JpcHRpb25cbiAgY29uc3QgZGVzYyA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgYXRtb3NwaGVyZURlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRtb3NwaGVyZS1kZXNjJyk7XG4gIGF0bW9zcGhlcmVEZXNjLnRleHRDb250ZW50ID0gZGVzYztcbiAgLy8gZ2V0IHRoZSBIdW1pZGl0eVxuICBjb25zdCB7IGh1bWlkaXR5IH0gPSBkYXRhLm1haW47XG4gIGNvbnN0IGF0bW9zcGhlcmVIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdG1vc3BoZXJlLWh1bWlkaXR5Jyk7XG4gIGF0bW9zcGhlcmVIdW1pZGl0eS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+aHVtaWRpdHlfbG93PC9zcGFuPjxzcGFuPiR7aHVtaWRpdHl9JTwvc3Bhbj5gO1xuICAvLyBmb3IgdGhlIG5leHQgNiAzIGhvdXIgZm9yZWNhc3RzIGdldCBlYWNoIGFuZCBkaXNwbGF5XG4gIGNvbnN0IGhvdXJseSA9IGZvcmVjYXN0Lmxpc3Q7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkgKz0gMSkge1xuICAgIGNvbnN0IHRpbWUgPSBob3VybHlbaV0uZHQgKyBkYXRhLnRpbWV6b25lO1xuICAgIGNvbnN0IHdlYXRoZXIgPSBsb29rdXBJY29uKGhvdXJseVtpXS53ZWF0aGVyWzBdLmljb24pO1xuICAgIGNvbnN0IGhvdXJUZW1wID0gaG91cmx5W2ldLm1haW4udGVtcDtcbiAgICBjb25zdCBob3VybHlSZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZm9yZWNhc3QtJHtpICsgMX1gKTtcbiAgICBjb25zdCBkYXkgPSBnZXREYXkoaG91cmx5W2ldLmR0KTtcbiAgICBob3VybHlSZW5kZXIuaW5uZXJIVE1MID0gYDxzcGFuPiR7ZGF5fTwvc3Bhbj48c3Bhbj4ke2Zvcm1hdERhdGUodGltZSl9PC9zcGFuPjxzcGFuPiR7d2VhdGhlcn08L3NwYW4+PHNwYW4+JHthc3NpZ25UZW1wU3ltYm9sKGhvdXJUZW1wLCB1bml0KX08L3NwYW4+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGxvb2t1cEljb24oY29kZSkge1xuICAvLyBVc2UgdGhlIGljb24gY29kZSBmcm9tIHRoZSBBUEkgdG8gc2VsZWN0IHRoZSBjb3JyZWN0IHN5bWJvbFxuICBpZiAoY29kZSA9PT0gJzAxZCcpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPnN1bm55PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzAxbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmNsZWFyX25pZ2h0PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzAyZCcpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPnBhcnRseV9jbG91ZHlfZGF5PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzAybicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPm5pZ2h0c19zdGF5PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzAzZCdcbiAgIHx8IGNvZGUgPT09ICcwM24nXG4gICB8fCBjb2RlID09PSAnMDRkJ1xuICAgfHwgY29kZSA9PT0gJzA0bicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmNsb3VkeTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwOWQnXG4gIHx8IGNvZGUgPT09ICcwOW4nXG4gIHx8IGNvZGUgPT09ICcxMGQnXG4gIHx8IGNvZGUgPT09ICcxMG4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5yYWlueTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcxMWQnIHx8IGNvZGUgPT09ICcxMW4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj50aHVuZGVyc3Rvcm08L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMTNkJyB8fCBjb2RlID09PSAnMTNuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Y2xvdWR5X3Nub3dpbmc8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnNTBkJyB8fCBjb2RlID09PSAnNTBuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Zm9nZ3k8L3NwYW4+JztcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAvLyBDb252ZXJ0IGRhdGUgZnJvbSB1bml4IHRvIGhvdXIgYW0vcG0gYW5kIHNob3cgaW4gbG9jYWwgdGltZXpvbmVcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUgKiAxMDAwKTtcbiAgbGV0IHNob3J0RGF0ZSA9IHBhcnNlSW50KG5ld0RhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCksIDEwKTtcbiAgbGV0IHRpbWVPZkRheSA9ICcnO1xuICBpZiAoc2hvcnREYXRlID4gMTIpIHtcbiAgICB0aW1lT2ZEYXkgPSAnIHBtJztcbiAgICBzaG9ydERhdGUgLT0gMTI7XG4gIH0gZWxzZSBpZiAoc2hvcnREYXRlID09PSAxMikge1xuICAgIHRpbWVPZkRheSA9ICcgcG0nO1xuICB9IGVsc2UgaWYgKHNob3J0RGF0ZSA9PT0gMCkge1xuICAgIHRpbWVPZkRheSA9ICcgYW0nO1xuICAgIHNob3J0RGF0ZSA9IDEyO1xuICB9IGVsc2Uge1xuICAgIHRpbWVPZkRheSA9ICcgYW0nO1xuICB9XG4gIHJldHVybiBzaG9ydERhdGUgKyB0aW1lT2ZEYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXkoZGF0ZSkge1xuICBjb25zdCBkYXkgPSBuZXcgRGF0ZShkYXRlICogMTAwMCkuZ2V0RGF5KCk7XG4gIGNvbnN0IGRheUFycmF5ID0gWydzdW5kYXknLCAnbW9uZGF5JywgJ3R1ZXNkYXknLCAnd2VkbmVzZGF5JywgJ3RodXJzZGF5JywgJ2ZyaWRheScsICdzYXR1cmRheSddO1xuICByZXR1cm4gZGF5QXJyYXlbZGF5XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRXaW5kKHNwZWVkLCB1bml0KSB7XG4gIC8vIENvbnZlcnQgd2luZCBmcm9tIG0vcyB0byBrbWhcbiAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgcmV0dXJuIGAke01hdGgucm91bmQoc3BlZWQgKiAyLjIzNjk0KX0gbXBoYDtcbiAgfVxuICAvLyBJZiB0aGUgdW5pdCBpcyBpbXBlcmlhbCB0aGVuIHRoZSBzcGVlZCBhbHJlYWR5IGluIG1waFxuICByZXR1cm4gYCR7TWF0aC5yb3VuZChzcGVlZCl9IG1waGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25UZW1wU3ltYm9sKHRlbXAsIHVuaXQpIHtcbiAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgcmV0dXJuIGAke01hdGgucm91bmQodGVtcCl9IFxcdTAwQjBDYDtcbiAgfVxuICByZXR1cm4gYCR7TWF0aC5yb3VuZCh0ZW1wKX0gRmA7XG59XG5cbmNvbnN0IHJlZ2lvbk5hbWVzID0gbmV3IEludGwuRGlzcGxheU5hbWVzKFsnZW4nXSwgeyB0eXBlOiAncmVnaW9uJyB9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2t1cENvdW50cnkoY291bnRyeSkge1xuICB0cnkge1xuICAgIHJldHVybiByZWdpb25OYW1lcy5vZihjb3VudHJ5KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=