"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["utility"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/utility.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZCQUE2QjtBQUMzQztBQUNBO0FBQ0EsWUFBWSxtQkFBbUI7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrQkFBa0I7QUFDaEM7QUFDQSxZQUFZLGtCQUFrQjtBQUM5Qjs7QUFFQTtBQUNBLG9EQUFvRCxnQkFBZ0I7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBSUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGxvb2t1cEljb24oY29kZSkge1xuICAvLyBVc2UgdGhlIGljb24gY29kZSBmcm9tIHRoZSBBUEkgdG8gc2VsZWN0IHRoZSBjb3JyZWN0IHN5bWJvbFxuICBpZiAoY29kZSA9PT0gJzAxZCcpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPnN1bm55PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzAxbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmNsZWFyX25pZ2h0PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzAyZCcpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPnBhcnRseV9jbG91ZHlfZGF5PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzAybicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPm5pZ2h0c19zdGF5PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzAzZCdcbiAgIHx8IGNvZGUgPT09ICcwM24nXG4gICB8fCBjb2RlID09PSAnMDRkJ1xuICAgfHwgY29kZSA9PT0gJzA0bicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmNsb3VkeTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwOWQnXG4gIHx8IGNvZGUgPT09ICcwOW4nXG4gIHx8IGNvZGUgPT09ICcxMGQnXG4gIHx8IGNvZGUgPT09ICcxMG4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5yYWlueTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcxMWQnIHx8IGNvZGUgPT09ICcxMW4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj50aHVuZGVyc3Rvcm08L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMTNkJyB8fCBjb2RlID09PSAnMTNuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Y2xvdWR5X3Nub3dpbmc8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnNTBkJyB8fCBjb2RlID09PSAnNTBuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Zm9nZ3k8L3NwYW4+JztcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIC8vIENvbnZlcnQgZGF0ZSBmcm9tIHVuaXggdG8gaG91ciBhbS9wbSBhbmQgc2hvdyBpbiBsb2NhbCB0aW1lem9uZVxuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSAqIDEwMDApO1xuICBsZXQgc2hvcnREYXRlID0gcGFyc2VJbnQobmV3RGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKSwgMTApO1xuICBsZXQgdGltZU9mRGF5ID0gJyc7XG4gIGlmIChzaG9ydERhdGUgPiAxMikge1xuICAgIHRpbWVPZkRheSA9ICcgcG0nO1xuICAgIHNob3J0RGF0ZSAtPSAxMjtcbiAgfSBlbHNlIGlmIChzaG9ydERhdGUgPT09IDEyKSB7XG4gICAgdGltZU9mRGF5ID0gJyBwbSc7XG4gIH0gZWxzZSBpZiAoc2hvcnREYXRlID09PSAwKSB7XG4gICAgdGltZU9mRGF5ID0gJyBhbSc7XG4gICAgc2hvcnREYXRlID0gMTI7XG4gIH0gZWxzZSB7XG4gICAgdGltZU9mRGF5ID0gJyBhbSc7XG4gIH1cbiAgcmV0dXJuIHNob3J0RGF0ZSArIHRpbWVPZkRheTtcbn1cblxuLy8gR2V0IHRoZSBkYXkgZnJvbSB0aGUgdW5peCB0aW1lY29kZVxuZnVuY3Rpb24gZ2V0RGF5KGRhdGUpIHtcbiAgY29uc3QgZGF5ID0gbmV3IERhdGUoZGF0ZSAqIDEwMDApLmdldERheSgpO1xuICBjb25zdCBkYXlBcnJheSA9IFsnc3VuZGF5JywgJ21vbmRheScsICd0dWVzZGF5JywgJ3dlZG5lc2RheScsICd0aHVyc2RheScsICdmcmlkYXknLCAnc2F0dXJkYXknXTtcbiAgcmV0dXJuIGRheUFycmF5W2RheV07XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRXaW5kKHNwZWVkLCB1bml0KSB7XG4gIC8vIENvbnZlcnQgd2luZCBmcm9tIG0vcyB0byBrbWhcbiAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgcmV0dXJuIGAke01hdGgucm91bmQoc3BlZWQgKiAyLjIzNjk0KX0gbXBoYDtcbiAgfVxuICAvLyBJZiB0aGUgdW5pdCBpcyBpbXBlcmlhbCB0aGVuIHRoZSBzcGVlZCBhbHJlYWR5IGluIG1waFxuICByZXR1cm4gYCR7TWF0aC5yb3VuZChzcGVlZCl9IG1waGA7XG59XG5cbi8vIEF0dGFjaCB0aGUgY29ycmVjdCBzeW1ib2wgdG8gdGhlIHRlbXBlcmF0dXJlXG5mdW5jdGlvbiBhc3NpZ25UZW1wU3ltYm9sKHRlbXAsIHVuaXQpIHtcbiAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgcmV0dXJuIGAke01hdGgucm91bmQodGVtcCl9IFxcdTAwQjBDYDtcbiAgfVxuICByZXR1cm4gYCR7TWF0aC5yb3VuZCh0ZW1wKX0gRmA7XG59XG5cbi8vIENvbnZlcnQgdGhlIGNvdW50cnkgY29kZSB0byB0aGUgZnVsbCBuYW1lXG5jb25zdCByZWdpb25OYW1lcyA9IG5ldyBJbnRsLkRpc3BsYXlOYW1lcyhbJ2VuJ10sIHsgdHlwZTogJ3JlZ2lvbicgfSk7XG5cbmZ1bmN0aW9uIGxvb2t1cENvdW50cnkoY291bnRyeSkge1xuICB0cnkge1xuICAgIHJldHVybiByZWdpb25OYW1lcy5vZihjb3VudHJ5KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGxvb2t1cENvdW50cnksIGFzc2lnblRlbXBTeW1ib2wsIGNvbnZlcnRXaW5kLCBnZXREYXksIGxvb2t1cEljb24sIGZvcm1hdERhdGUsXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9