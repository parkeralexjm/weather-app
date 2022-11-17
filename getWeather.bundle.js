"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["getWeather"],{

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCoords": () => (/* binding */ getCoords),
/* harmony export */   "getForecast": () => (/* binding */ getForecast)
/* harmony export */ });
async function getForecast(lon, lat, unit) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=cac0e877a9ca61bfd7eed3dfbd0f5262&units=${unit}`, { mode: 'cors' });
  const forecastData = await response.json();
  return forecastData;
}

async function getCoords(cityName, unit) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cac0e877a9ca61bfd7eed3dfbd0f5262&units=${unit}`, { mode: 'cors' });
  const coords = await response.json();
  return coords;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/getWeather.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0V2VhdGhlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQLHVGQUF1RixJQUFJLE9BQU8sSUFBSSxnREFBZ0QsS0FBSyxLQUFLLGNBQWM7QUFDOUs7QUFDQTtBQUNBOztBQUVPO0FBQ1Asb0ZBQW9GLFNBQVMsZ0RBQWdELEtBQUssS0FBSyxjQUFjO0FBQ3JLO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldFdlYXRoZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxvbiwgbGF0LCB1bml0KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9Y2FjMGU4NzdhOWNhNjFiZmQ3ZWVkM2RmYmQwZjUyNjImdW5pdHM9JHt1bml0fWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBmb3JlY2FzdERhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb29yZHMoY2l0eU5hbWUsIHVuaXQpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD1jYWMwZTg3N2E5Y2E2MWJmZDdlZWQzZGZiZDBmNTI2MiZ1bml0cz0ke3VuaXR9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGNvb3JkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGNvb3Jkcztcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==