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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/utility.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0eS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsY0FBYyw2QkFBNkI7QUFDM0M7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9COztBQUVPO0FBQ1A7QUFDQSxjQUFjLGtCQUFrQjtBQUNoQztBQUNBLFlBQVksa0JBQWtCO0FBQzlCOztBQUVBLG9EQUFvRCxnQkFBZ0I7O0FBRTdEO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBsb29rdXBJY29uKGNvZGUpIHtcbiAgLy8gVXNlIHRoZSBpY29uIGNvZGUgZnJvbSB0aGUgQVBJIHRvIHNlbGVjdCB0aGUgY29ycmVjdCBzeW1ib2xcbiAgaWYgKGNvZGUgPT09ICcwMWQnKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5zdW5ueTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwMW4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5jbGVhcl9uaWdodDwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwMmQnKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5wYXJ0bHlfY2xvdWR5X2RheTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwMm4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5uaWdodHNfc3RheTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwM2QnXG4gICB8fCBjb2RlID09PSAnMDNuJ1xuICAgfHwgY29kZSA9PT0gJzA0ZCdcbiAgIHx8IGNvZGUgPT09ICcwNG4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5jbG91ZHk8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMDlkJ1xuICB8fCBjb2RlID09PSAnMDluJ1xuICB8fCBjb2RlID09PSAnMTBkJ1xuICB8fCBjb2RlID09PSAnMTBuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+cmFpbnk8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMTFkJyB8fCBjb2RlID09PSAnMTFuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+dGh1bmRlcnN0b3JtPC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzEzZCcgfHwgY29kZSA9PT0gJzEzbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmNsb3VkeV9zbm93aW5nPC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzUwZCcgfHwgY29kZSA9PT0gJzUwbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmZvZ2d5PC9zcGFuPic7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgLy8gQ29udmVydCBkYXRlIGZyb20gdW5peCB0byBob3VyIGFtL3BtIGFuZCBzaG93IGluIGxvY2FsIHRpbWV6b25lXG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlICogMTAwMCk7XG4gIGxldCBzaG9ydERhdGUgPSBwYXJzZUludChuZXdEYXRlLnRvTG9jYWxlVGltZVN0cmluZygpLCAxMCk7XG4gIGxldCB0aW1lT2ZEYXkgPSAnJztcbiAgaWYgKHNob3J0RGF0ZSA+IDEyKSB7XG4gICAgdGltZU9mRGF5ID0gJyBwbSc7XG4gICAgc2hvcnREYXRlIC09IDEyO1xuICB9IGVsc2UgaWYgKHNob3J0RGF0ZSA9PT0gMTIpIHtcbiAgICB0aW1lT2ZEYXkgPSAnIHBtJztcbiAgfSBlbHNlIGlmIChzaG9ydERhdGUgPT09IDApIHtcbiAgICB0aW1lT2ZEYXkgPSAnIGFtJztcbiAgICBzaG9ydERhdGUgPSAxMjtcbiAgfSBlbHNlIHtcbiAgICB0aW1lT2ZEYXkgPSAnIGFtJztcbiAgfVxuICByZXR1cm4gc2hvcnREYXRlICsgdGltZU9mRGF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5KGRhdGUpIHtcbiAgY29uc3QgZGF5ID0gbmV3IERhdGUoZGF0ZSAqIDEwMDApLmdldERheSgpO1xuICBjb25zdCBkYXlBcnJheSA9IFsnc3VuZGF5JywgJ21vbmRheScsICd0dWVzZGF5JywgJ3dlZG5lc2RheScsICd0aHVyc2RheScsICdmcmlkYXknLCAnc2F0dXJkYXknXTtcbiAgcmV0dXJuIGRheUFycmF5W2RheV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0V2luZChzcGVlZCwgdW5pdCkge1xuICAvLyBDb252ZXJ0IHdpbmQgZnJvbSBtL3MgdG8ga21oXG4gIGlmICh1bml0ID09PSAnbWV0cmljJykge1xuICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKHNwZWVkICogMi4yMzY5NCl9IG1waGA7XG4gIH1cbiAgLy8gSWYgdGhlIHVuaXQgaXMgaW1wZXJpYWwgdGhlbiB0aGUgc3BlZWQgYWxyZWFkeSBpbiBtcGhcbiAgcmV0dXJuIGAke01hdGgucm91bmQoc3BlZWQpfSBtcGhgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduVGVtcFN5bWJvbCh0ZW1wLCB1bml0KSB7XG4gIGlmICh1bml0ID09PSAnbWV0cmljJykge1xuICAgIHJldHVybiBgJHtNYXRoLnJvdW5kKHRlbXApfSBcXHUwMEIwQ2A7XG4gIH1cbiAgcmV0dXJuIGAke01hdGgucm91bmQodGVtcCl9IEZgO1xufVxuXG5jb25zdCByZWdpb25OYW1lcyA9IG5ldyBJbnRsLkRpc3BsYXlOYW1lcyhbJ2VuJ10sIHsgdHlwZTogJ3JlZ2lvbicgfSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb29rdXBDb3VudHJ5KGNvdW50cnkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gcmVnaW9uTmFtZXMub2YoY291bnRyeSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnJztcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9