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
  // change the temperature units
  const temperatureChange = document.querySelector('.temperature-change');
  if (unit === 'metric') {
    temperatureChange.textContent = 'Change units to F';
  } else {
    temperatureChange.textContent = 'Change units to \u00B0C';
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tRnVuY3Rpb25zLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVtQjs7QUFFSjtBQUNmO0FBQ0EsVUFBVSxPQUFPO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQjtBQUNBLCtCQUErQix1REFBYTs7QUFFNUM7QUFDQSxVQUFVLE9BQU87QUFDakI7QUFDQSxtQ0FBbUMsMERBQWdCLGFBQWE7QUFDaEU7QUFDQSxlQUFlLHFEQUFXO0FBQzFCO0FBQ0EsbUNBQW1DLEtBQUs7QUFDeEM7QUFDQTtBQUNBLHNCQUFzQixvREFBVTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFdBQVc7QUFDckI7QUFDQSxxR0FBcUcsU0FBUztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0Esb0JBQW9CLG9EQUFVO0FBQzlCO0FBQ0EsNkRBQTZELE1BQU07QUFDbkUsZ0JBQWdCLGdEQUFNO0FBQ3RCLHNDQUFzQyxJQUFJLGVBQWUsb0RBQVUsT0FBTyxlQUFlLFFBQVEsZUFBZSwwREFBZ0IsaUJBQWlCO0FBQ2pKO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLGNBQWMsNkJBQTZCO0FBQzNDO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjs7QUFFTztBQUNQO0FBQ0EsY0FBYyxrQkFBa0I7QUFDaEM7QUFDQSxZQUFZLGtCQUFrQjtBQUM5Qjs7QUFFQSxvREFBb0QsZ0JBQWdCOztBQUU3RDtBQUNQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3V0aWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYXNzaWduVGVtcFN5bWJvbCwgY29udmVydFdpbmQsIGZvcm1hdERhdGUsIGxvb2t1cEljb24sIGxvb2t1cENvdW50cnksIGdldERheSxcbn0gZnJvbSAnLi91dGlsaXR5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyV2VhdGhlcihkYXRhLCBmb3JlY2FzdCwgdW5pdCkge1xuICAvLyBHZXQgdGhlIGNpdHkgbmFtZVxuICBjb25zdCB7IG5hbWUgfSA9IGRhdGE7XG4gIGNvbnN0IHdlYXRoZXJDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2l0eScpO1xuICB3ZWF0aGVyQ2l0eS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIC8vIEdldCB0aGUgY291bnRyeVxuICBjb25zdCB7IGNvdW50cnkgfSA9IGRhdGEuc3lzO1xuICBjb25zdCB3ZWF0aGVyQ291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNvdW50cnknKTtcbiAgd2VhdGhlckNvdW50cnkudGV4dENvbnRlbnQgPSBsb29rdXBDb3VudHJ5KGNvdW50cnkpO1xuXG4gIC8vIEdldCB0aGUgdGVtcCBhbmQgYXBwbHkgdG8gdGhlIERPTVxuICBjb25zdCB7IHRlbXAgfSA9IGRhdGEubWFpbjtcbiAgY29uc3Qgd2VhdGhlclRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci10ZW1wJyk7XG4gIHdlYXRoZXJUZW1wLmlubmVySFRNTCA9IGA8c3Bhbj4ke2Fzc2lnblRlbXBTeW1ib2wodGVtcCwgdW5pdCl9PC9zcGFuPjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmRldmljZV90aGVybW9zdGF0PC9zcGFuPmA7XG4gIC8vIEdldCB0aGUgV2luZCBzcGVlZCBhbmQgYXBwbHkgdG8gdGhlIERPTVxuICBjb25zdCB3aW5kID0gY29udmVydFdpbmQoZGF0YS53aW5kLnNwZWVkLCB1bml0KTtcbiAgY29uc3Qgd2VhdGhlcldpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci13aW5kJyk7XG4gIHdlYXRoZXJXaW5kLmlubmVySFRNTCA9IGA8c3Bhbj4ke3dpbmR9PC9zcGFuPjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmFpcjwvc3Bhbj5gO1xuICAvLyBnZXQgdGhlIHdlYXRoZXJUeXBlIGFuZCBpY29uXG4gIGNvbnN0IHdlYXRoZXJUeXBlID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gbG9va3VwSWNvbihkYXRhLndlYXRoZXJbMF0uaWNvbik7XG4gIGNvbnN0IGF0bW9zcGhlcmVUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0bW9zcGhlcmUtY2xvdWQnKTtcbiAgY29uc3QgYXRtb3NwaGVyZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRtb3NwaGVyZS1pY29uJyk7XG4gIGF0bW9zcGhlcmVUeXBlLnRleHRDb250ZW50ID0gd2VhdGhlclR5cGU7XG4gIGF0bW9zcGhlcmVJY29uLmlubmVySFRNTCA9IHdlYXRoZXJJY29uO1xuICAvLyBnZXQgdGhlIGRlc2NyaXB0aW9uXG4gIGNvbnN0IGRlc2MgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGNvbnN0IGF0bW9zcGhlcmVEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0bW9zcGhlcmUtZGVzYycpO1xuICBhdG1vc3BoZXJlRGVzYy50ZXh0Q29udGVudCA9IGRlc2M7XG4gIC8vIGdldCB0aGUgSHVtaWRpdHlcbiAgY29uc3QgeyBodW1pZGl0eSB9ID0gZGF0YS5tYWluO1xuICBjb25zdCBhdG1vc3BoZXJlSHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRtb3NwaGVyZS1odW1pZGl0eScpO1xuICBhdG1vc3BoZXJlSHVtaWRpdHkuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmh1bWlkaXR5X2xvdzwvc3Bhbj48c3Bhbj4ke2h1bWlkaXR5fSU8L3NwYW4+YDtcbiAgLy8gY2hhbmdlIHRoZSB0ZW1wZXJhdHVyZSB1bml0c1xuICBjb25zdCB0ZW1wZXJhdHVyZUNoYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS1jaGFuZ2UnKTtcbiAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgdGVtcGVyYXR1cmVDaGFuZ2UudGV4dENvbnRlbnQgPSAnQ2hhbmdlIHVuaXRzIHRvIEYnO1xuICB9IGVsc2Uge1xuICAgIHRlbXBlcmF0dXJlQ2hhbmdlLnRleHRDb250ZW50ID0gJ0NoYW5nZSB1bml0cyB0byBcXHUwMEIwQyc7XG4gIH1cbiAgLy8gZm9yIHRoZSBuZXh0IDYgMyBob3VyIGZvcmVjYXN0cyBnZXQgZWFjaCBhbmQgZGlzcGxheVxuICBjb25zdCBob3VybHkgPSBmb3JlY2FzdC5saXN0O1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpICs9IDEpIHtcbiAgICBjb25zdCB0aW1lID0gaG91cmx5W2ldLmR0ICsgZGF0YS50aW1lem9uZTtcbiAgICBjb25zdCB3ZWF0aGVyID0gbG9va3VwSWNvbihob3VybHlbaV0ud2VhdGhlclswXS5pY29uKTtcbiAgICBjb25zdCBob3VyVGVtcCA9IGhvdXJseVtpXS5tYWluLnRlbXA7XG4gICAgY29uc3QgaG91cmx5UmVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ZvcmVjYXN0LSR7aSArIDF9YCk7XG4gICAgY29uc3QgZGF5ID0gZ2V0RGF5KGhvdXJseVtpXS5kdCk7XG4gICAgaG91cmx5UmVuZGVyLmlubmVySFRNTCA9IGA8c3Bhbj4ke2RheX08L3NwYW4+PHNwYW4+JHtmb3JtYXREYXRlKHRpbWUpfTwvc3Bhbj48c3Bhbj4ke3dlYXRoZXJ9PC9zcGFuPjxzcGFuPiR7YXNzaWduVGVtcFN5bWJvbChob3VyVGVtcCwgdW5pdCl9PC9zcGFuPmA7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBsb29rdXBJY29uKGNvZGUpIHtcbiAgLy8gVXNlIHRoZSBpY29uIGNvZGUgZnJvbSB0aGUgQVBJIHRvIHNlbGVjdCB0aGUgY29ycmVjdCBzeW1ib2xcbiAgaWYgKGNvZGUgPT09ICcwMWQnKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5zdW5ueTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwMW4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5jbGVhcl9uaWdodDwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwMmQnKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5wYXJ0bHlfY2xvdWR5X2RheTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwMm4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5uaWdodHNfc3RheTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwM2QnXG4gICB8fCBjb2RlID09PSAnMDNuJ1xuICAgfHwgY29kZSA9PT0gJzA0ZCdcbiAgIHx8IGNvZGUgPT09ICcwNG4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5jbG91ZHk8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMDlkJ1xuICB8fCBjb2RlID09PSAnMDluJ1xuICB8fCBjb2RlID09PSAnMTBkJ1xuICB8fCBjb2RlID09PSAnMTBuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+cmFpbnk8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMTFkJyB8fCBjb2RlID09PSAnMTFuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+dGh1bmRlcnN0b3JtPC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzEzZCcgfHwgY29kZSA9PT0gJzEzbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmNsb3VkeV9zbm93aW5nPC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzUwZCcgfHwgY29kZSA9PT0gJzUwbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmZvZ2d5PC9zcGFuPic7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgLy8gQ29udmVydCBkYXRlIGZyb20gdW5peCB0byBob3VyIGFtL3BtIGFuZCBzaG93IGluIGxvY2FsIHRpbWV6b25lXG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlICogMTAwMCk7XG4gIGxldCBzaG9ydERhdGUgPSBwYXJzZUludChuZXdEYXRlLnRvTG9jYWxlVGltZVN0cmluZygpLCAxMCk7XG4gIGxldCB0aW1lT2ZEYXkgPSAnJztcbiAgaWYgKHNob3J0RGF0ZSA+IDEyKSB7XG4gICAgdGltZU9mRGF5ID0gJyBwbSc7XG4gICAgc2hvcnREYXRlIC09IDEyO1xuICB9IGVsc2UgaWYgKHNob3J0RGF0ZSA9PT0gMTIpIHtcbiAgICB0aW1lT2ZEYXkgPSAnIHBtJztcbiAgfSBlbHNlIGlmIChzaG9ydERhdGUgPT09IDApIHtcbiAgICB0aW1lT2ZEYXkgPSAnIGFtJztcbiAgICBzaG9ydERhdGUgPSAxMjtcbiAgfSBlbHNlIHtcbiAgICB0aW1lT2ZEYXkgPSAnIGFtJztcbiAgfVxuICByZXR1cm4gc2hvcnREYXRlICsgdGltZU9mRGF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5KGRhdGUpIHtcbiAgY29uc3QgZGF5ID0gbmV3IERhdGUoZGF0ZSAqIDEwMDApLmdldERheSgpO1xuICBjb25zdCBkYXlBcnJheSA9IFsnc3VuZGF5JywgJ21vbmRheScsICd0dWVzZGF5JywgJ3dlZG5lc2RheScsICd0aHVyc2RheScsICdmcmlkYXknLCAnc2F0dXJkYXknXTtcbiAgcmV0dXJuIGRheUFycmF5W2RheV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0V2luZChzcGVlZCwgdW5pdCkge1xuICAvLyBDb252ZXJ0IHdpbmQgZnJvbSBtL3MgdG8ga21oXG4gIGlmICh1bml0ID09PSAnbWV0cmljJykge1xuICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKHNwZWVkICogMi4yMzY5NCl9IG1waGA7XG4gIH1cbiAgLy8gSWYgdGhlIHVuaXQgaXMgaW1wZXJpYWwgdGhlbiB0aGUgc3BlZWQgYWxyZWFkeSBpbiBtcGhcbiAgcmV0dXJuIGAke01hdGgucm91bmQoc3BlZWQpfSBtcGhgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduVGVtcFN5bWJvbCh0ZW1wLCB1bml0KSB7XG4gIGlmICh1bml0ID09PSAnbWV0cmljJykge1xuICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKHRlbXApfSBcXHUwMEIwQ2A7XG4gIH1cbiAgcmV0dXJuIGAke01hdGgucm91bmQodGVtcCl9IEZgO1xufVxuXG5jb25zdCByZWdpb25OYW1lcyA9IG5ldyBJbnRsLkRpc3BsYXlOYW1lcyhbJ2VuJ10sIHsgdHlwZTogJ3JlZ2lvbicgfSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rdXBDb3VudHJ5KGNvdW50cnkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcmVnaW9uTmFtZXMub2YoY291bnRyeSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnJztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9