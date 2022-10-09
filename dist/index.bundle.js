"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/josefin-sans-v25-latin-regular.woff2 */ "./src/fonts/josefin-sans-v25-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/josefin-sans-v25-latin-regular.woff */ "./src/fonts/josefin-sans-v25-latin-regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/background.png */ "./src/assets/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* josefin-sans-regular - latin */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(''),\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n:root {\n  /* Colour variables */\n  font-family: 'Josefin Sans';\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.search-button .material-symbols-outlined,svg {\n  filter: brightness(0) invert(1);\n}\n\n.background {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 3fr 1fr 2fr;\n  color: white;\n}\n\n.weather-box {\n  grid-area: 1 / 1 / 3 / 2;\n  display: flex;\n  flex-direction: column;\n  padding: calc(12px + 1.8625vw);\n}\n\n.weather-temp, .weather-wind {\n  display: flex;\n  align-items: center;\n  padding-top: 20px;\n  font-size: 2em;\n}\n\n.weather-temp > span, .weather-wind > span {\n  padding-right: 10px;\n}\n.weather-city, .atmosphere-cloud {\n  font-size: 2em;\n}\n\n.search-box {\n  display: flex;\n  align-items: center;\n  padding-top: 10px;\n}\n\ninput {\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  border-bottom: 2px solid white;\n  background-color: rgba(0,0,0,0);\n  color: white\n}\n\ninput:focus {\n  outline: 0;\n}\n\n::placeholder {\n  color: white;\n  opacity: 1;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  background-color: rgba(0,0,0,0);\n}\n\n.temperature-change-c, .temperature-change-f {\n  padding-top: 5px;\n  font-size: 0.75em;\n}\n\n.temperature-change-f {\n  position: relative;\n}\n\n.error-display {\n  color: white;\n  padding-top: 5px;\n}\n\n.atmosphere-box {\n  grid-area: 1 / 3 / 4 / 4;\n  display: flex;\n  flex-direction: column;\n  padding: calc(12px + 1.8625vw) calc(12px + 1.8625vw);\n  align-items: flex-end;\n}\n\n.atmosphere-humidity {\n  display: flex;\n  align-items: center;\n  padding-top: 20px;\n  font-size: 2em;\n}\n\n.atmosphere-humidity > span {\n  padding-left: 10px;\n}\n\n.forecast-box {\n  grid-area: 4 / 1 / 6 / 4;\n  display: flex;\n  justify-content: space-evenly;\n  padding: calc(12px + 1.8625vw);  \n}\n\n.forecast-box > div {\n  height: 100px;\n  width: 100px;\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media screen and (max-width:1000px) {\n  #forecast-10 {\n    display:none;\n  }\n}\n\n@media screen and (max-width:900px) {\n  #forecast-9 {\n    display:none;\n  }\n}\n\n@media screen and (max-width:800px) {\n  #forecast-8 {\n    display:none;\n  }\n}\n\n@media screen and (max-width:700px) {\n  #forecast-7 {\n    display:none;\n  }\n}\n\n@media screen and (max-width:600px) {\n  #forecast-6 {\n    display:none;\n  }\n}\n\n@media screen and (max-width:500px) {\n  #forecast-5 {\n    display:none;\n  }\n}\n\n@media screen and (max-width:400px) {\n  #forecast-4, .atmosphere-box {\n    display:none;\n  }\n}\n\n.forecast-box .material-symbols-outlined {\n  font-size: 60px;\n}\n\n.weather-temp .material-symbols-outlined, .weather-wind .material-symbols-outlined {\n  font-size: 40px;\n}\n\n.atmosphere-icon .material-symbols-outlined {\n  font-size: 75px;\n}\n\n.atmosphere-humidity .material-symbols-outlined {\n  font-size: 30px;\n}\n\n.not-visible {\n  visibility: hidden;\n}\n\n/* Footer */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,iCAAiC;AACjC;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB;;6DAEsE,EAAE,gDAAgD;AAC1H;;AAEA;EACE,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,yDAAgD;EAChD,sBAAsB;EACtB,2BAA2B;EAC3B,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,+BAA+B;EAC/B,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,eAAe;EACf,8BAA8B;EAC9B,+BAA+B;EAC/B;AACF;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,oDAAoD;EACpD,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,6BAA6B;EAC7B,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,WAAW","sourcesContent":["/* josefin-sans-regular - latin */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(''),\n       url('./fonts/josefin-sans-v25-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n       url('./fonts/josefin-sans-v25-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n:root {\n  /* Colour variables */\n  font-family: 'Josefin Sans';\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.search-button .material-symbols-outlined,svg {\n  filter: brightness(0) invert(1);\n}\n\n.background {\n  background-image: url(\"./assets/background.png\");\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 3fr 1fr 2fr;\n  color: white;\n}\n\n.weather-box {\n  grid-area: 1 / 1 / 3 / 2;\n  display: flex;\n  flex-direction: column;\n  padding: calc(12px + 1.8625vw);\n}\n\n.weather-temp, .weather-wind {\n  display: flex;\n  align-items: center;\n  padding-top: 20px;\n  font-size: 2em;\n}\n\n.weather-temp > span, .weather-wind > span {\n  padding-right: 10px;\n}\n.weather-city, .atmosphere-cloud {\n  font-size: 2em;\n}\n\n.search-box {\n  display: flex;\n  align-items: center;\n  padding-top: 10px;\n}\n\ninput {\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  border-bottom: 2px solid white;\n  background-color: rgba(0,0,0,0);\n  color: white\n}\n\ninput:focus {\n  outline: 0;\n}\n\n::placeholder {\n  color: white;\n  opacity: 1;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  background-color: rgba(0,0,0,0);\n}\n\n.temperature-change-c, .temperature-change-f {\n  padding-top: 5px;\n  font-size: 0.75em;\n}\n\n.temperature-change-f {\n  position: relative;\n}\n\n.error-display {\n  color: white;\n  padding-top: 5px;\n}\n\n.atmosphere-box {\n  grid-area: 1 / 3 / 4 / 4;\n  display: flex;\n  flex-direction: column;\n  padding: calc(12px + 1.8625vw) calc(12px + 1.8625vw);\n  align-items: flex-end;\n}\n\n.atmosphere-humidity {\n  display: flex;\n  align-items: center;\n  padding-top: 20px;\n  font-size: 2em;\n}\n\n.atmosphere-humidity > span {\n  padding-left: 10px;\n}\n\n.forecast-box {\n  grid-area: 4 / 1 / 6 / 4;\n  display: flex;\n  justify-content: space-evenly;\n  padding: calc(12px + 1.8625vw);  \n}\n\n.forecast-box > div {\n  height: 100px;\n  width: 100px;\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media screen and (max-width:1000px) {\n  #forecast-10 {\n    display:none;\n  }\n}\n\n@media screen and (max-width:900px) {\n  #forecast-9 {\n    display:none;\n  }\n}\n\n@media screen and (max-width:800px) {\n  #forecast-8 {\n    display:none;\n  }\n}\n\n@media screen and (max-width:700px) {\n  #forecast-7 {\n    display:none;\n  }\n}\n\n@media screen and (max-width:600px) {\n  #forecast-6 {\n    display:none;\n  }\n}\n\n@media screen and (max-width:500px) {\n  #forecast-5 {\n    display:none;\n  }\n}\n\n@media screen and (max-width:400px) {\n  #forecast-4, .atmosphere-box {\n    display:none;\n  }\n}\n\n.forecast-box .material-symbols-outlined {\n  font-size: 60px;\n}\n\n.weather-temp .material-symbols-outlined, .weather-wind .material-symbols-outlined {\n  font-size: 40px;\n}\n\n.atmosphere-icon .material-symbols-outlined {\n  font-size: 75px;\n}\n\n.atmosphere-humidity .material-symbols-outlined {\n  font-size: 30px;\n}\n\n.not-visible {\n  visibility: hidden;\n}\n\n/* Footer */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherData)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeather */ "./src/getWeather.js");
/* harmony import */ var _DOMfunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMfunctions */ "./src/DOMfunctions.js");




const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const temperatureC = document.querySelector('.temperature-change-c');
const temperatureF = document.querySelector('.temperature-change-f');
let lastCity = '';
let currentUnit = '';
async function getWeatherData(firstLoad = true, unit = 'imperial') {
  let cityName = '';
  if (firstLoad) {
    cityName = 'London';
  } else if (searchInput.value) {
    cityName = searchInput.value;
  } else {
    cityName = lastCity;
  }
  if (unit === 'imperial') {
    temperatureF.classList.add('not-visible');
    temperatureC.classList.remove('not-visible');
  } else {
    temperatureF.classList.remove('not-visible');
    temperatureC.classList.add('not-visible');
  }
  try {
    const coords = await (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getCoords)(cityName, unit);
    const forecast = await (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getForecast)(coords.coord.lon, coords.coord.lat, unit);
    (0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_2__["default"])(coords, forecast, unit);
    lastCity = cityName;
    currentUnit = unit;
    document.querySelector('.error-display').innerHTML = '';
  } catch (err) {
    document.querySelector('.error-display').innerHTML = 'Location cannot be found';
  }
}

searchButton.addEventListener('click', () => {
  getWeatherData(false, currentUnit);
  searchInput.value = '';
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    getWeatherData(false, currentUnit);
    searchInput.value = '';
  }
});

temperatureF.addEventListener('click', () => {
  getWeatherData(false, 'imperial');
});

temperatureC.addEventListener('click', () => {
  getWeatherData(false, 'metric');
});

getWeatherData();


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


/***/ }),

/***/ "./src/assets/background.png":
/*!***********************************!*\
  !*** ./src/assets/background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e96825c8b004f0966971.png";

/***/ }),

/***/ "./src/fonts/josefin-sans-v25-latin-regular.woff":
/*!*******************************************************!*\
  !*** ./src/fonts/josefin-sans-v25-latin-regular.woff ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "733949cf2f84c4928550.woff";

/***/ }),

/***/ "./src/fonts/josefin-sans-v25-latin-regular.woff2":
/*!********************************************************!*\
  !*** ./src/fonts/josefin-sans-v25-latin-regular.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a881812c0fff75f6cf26.woff2";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET01mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2V0V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2pvc2VmaW4tc2Fucy12MjUtbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvam9zZWZpbi1zYW5zLXYyNS1sYXRpbi1yZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogam9zZWZpbi1zYW5zLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSwgLyogQ2hyb21lIDI2KywgT3BlcmEgMjMrLCBGaXJlZm94IDM5KyAqL1xcbiAgICAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgnd29mZicpOyAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcbjpyb290IHtcXG4gIC8qIENvbG91ciB2YXJpYWJsZXMgKi9cXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCxzdmcge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyIDJmcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLndlYXRoZXItYm94IHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogY2FsYygxMnB4ICsgMS44NjI1dncpO1xcbn1cXG5cXG4ud2VhdGhlci10ZW1wLCAud2VhdGhlci13aW5kIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLndlYXRoZXItdGVtcCA+IHNwYW4sIC53ZWF0aGVyLXdpbmQgPiBzcGFuIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcbi53ZWF0aGVyLWNpdHksIC5hdG1vc3BoZXJlLWNsb3VkIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXItdG9wOiAwO1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxuICBib3JkZXItcmlnaHQ6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcbiAgY29sb3I6IHdoaXRlXFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtY2hhbmdlLWMsIC50ZW1wZXJhdHVyZS1jaGFuZ2UtZiB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbiAgZm9udC1zaXplOiAwLjc1ZW07XFxufVxcblxcbi50ZW1wZXJhdHVyZS1jaGFuZ2UtZiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5lcnJvci1kaXNwbGF5IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxufVxcblxcbi5hdG1vc3BoZXJlLWJveCB7XFxuICBncmlkLWFyZWE6IDEgLyAzIC8gNCAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IGNhbGMoMTJweCArIDEuODYyNXZ3KSBjYWxjKDEycHggKyAxLjg2MjV2dyk7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5hdG1vc3BoZXJlLWh1bWlkaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLmF0bW9zcGhlcmUtaHVtaWRpdHkgPiBzcGFuIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLmZvcmVjYXN0LWJveCB7XFxuICBncmlkLWFyZWE6IDQgLyAxIC8gNiAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiBjYWxjKDEycHggKyAxLjg2MjV2dyk7ICBcXG59XFxuXFxuLmZvcmVjYXN0LWJveCA+IGRpdiB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KSB7XFxuICAjZm9yZWNhc3QtMTAge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTAwcHgpIHtcXG4gICNmb3JlY2FzdC05IHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgwMHB4KSB7XFxuICAjZm9yZWNhc3QtOCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo3MDBweCkge1xcbiAgI2ZvcmVjYXN0LTcge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcXG4gICNmb3JlY2FzdC02IHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUwMHB4KSB7XFxuICAjZm9yZWNhc3QtNSB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo0MDBweCkge1xcbiAgI2ZvcmVjYXN0LTQsIC5hdG1vc3BoZXJlLWJveCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gIH1cXG59XFxuXFxuLmZvcmVjYXN0LWJveCAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXNpemU6IDYwcHg7XFxufVxcblxcbi53ZWF0aGVyLXRlbXAgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQsIC53ZWF0aGVyLXdpbmQgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uYXRtb3NwaGVyZS1pY29uIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtc2l6ZTogNzVweDtcXG59XFxuXFxuLmF0bW9zcGhlcmUtaHVtaWRpdHkgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4ubm90LXZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlDQUFpQztBQUNqQztFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCOzs2REFFc0UsRUFBRSxnREFBZ0Q7QUFDMUg7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlEQUFnRDtFQUNoRCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0I7QUFDRjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0RBQW9EO0VBQ3BELHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogam9zZWZpbi1zYW5zLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogbG9jYWwoJycpLFxcbiAgICAgICB1cmwoJy4vZm9udHMvam9zZWZpbi1zYW5zLXYyNS1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCAvKiBDaHJvbWUgMjYrLCBPcGVyYSAyMyssIEZpcmVmb3ggMzkrICovXFxuICAgICAgIHVybCgnLi9mb250cy9qb3NlZmluLXNhbnMtdjI1LWxhdGluLXJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpOyAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxufVxcblxcbjpyb290IHtcXG4gIC8qIENvbG91ciB2YXJpYWJsZXMgKi9cXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCxzdmcge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnIgMmZyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ud2VhdGhlci1ib3gge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiBjYWxjKDEycHggKyAxLjg2MjV2dyk7XFxufVxcblxcbi53ZWF0aGVyLXRlbXAsIC53ZWF0aGVyLXdpbmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4ud2VhdGhlci10ZW1wID4gc3BhbiwgLndlYXRoZXItd2luZCA+IHNwYW4ge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLndlYXRoZXItY2l0eSwgLmF0bW9zcGhlcmUtY2xvdWQge1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlci10b3A6IDA7XFxuICBib3JkZXItbGVmdDogMDtcXG4gIGJvcmRlci1yaWdodDogMDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxuICBjb2xvcjogd2hpdGVcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxufVxcblxcbi50ZW1wZXJhdHVyZS1jaGFuZ2UtYywgLnRlbXBlcmF0dXJlLWNoYW5nZS1mIHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBmb250LXNpemU6IDAuNzVlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLWNoYW5nZS1mIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmVycm9yLWRpc3BsYXkge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy10b3A6IDVweDtcXG59XFxuXFxuLmF0bW9zcGhlcmUtYm94IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyA0IC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogY2FsYygxMnB4ICsgMS44NjI1dncpIGNhbGMoMTJweCArIDEuODYyNXZ3KTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmF0bW9zcGhlcmUtaHVtaWRpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4uYXRtb3NwaGVyZS1odW1pZGl0eSA+IHNwYW4ge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3QtYm94IHtcXG4gIGdyaWQtYXJlYTogNCAvIDEgLyA2IC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIHBhZGRpbmc6IGNhbGMoMTJweCArIDEuODYyNXZ3KTsgIFxcbn1cXG5cXG4uZm9yZWNhc3QtYm94ID4gZGl2IHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBtYXJnaW46IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDAwcHgpIHtcXG4gICNmb3JlY2FzdC0xMCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo5MDBweCkge1xcbiAgI2ZvcmVjYXN0LTkge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODAwcHgpIHtcXG4gICNmb3JlY2FzdC04IHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcwMHB4KSB7XFxuICAjZm9yZWNhc3QtNyB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xcbiAgI2ZvcmVjYXN0LTYge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTAwcHgpIHtcXG4gICNmb3JlY2FzdC01IHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQwMHB4KSB7XFxuICAjZm9yZWNhc3QtNCwgLmF0bW9zcGhlcmUtYm94IHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgfVxcbn1cXG5cXG4uZm9yZWNhc3QtYm94IC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG59XFxuXFxuLndlYXRoZXItdGVtcCAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCwgLndlYXRoZXItd2luZCAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXNpemU6IDQwcHg7XFxufVxcblxcbi5hdG1vc3BoZXJlLWljb24gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC1zaXplOiA3NXB4O1xcbn1cXG5cXG4uYXRtb3NwaGVyZS1odW1pZGl0eSAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcbi5ub3QtdmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi8qIEZvb3RlciAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge1xuICBhc3NpZ25UZW1wU3ltYm9sLCBjb252ZXJ0V2luZCwgZm9ybWF0RGF0ZSwgbG9va3VwSWNvbiwgbG9va3VwQ291bnRyeSwgZ2V0RGF5LFxufSBmcm9tICcuL3V0aWxpdHknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJXZWF0aGVyKGRhdGEsIGZvcmVjYXN0LCB1bml0KSB7XG4gIC8vIEdldCB0aGUgY2l0eSBuYW1lXG4gIGNvbnN0IHsgbmFtZSB9ID0gZGF0YTtcbiAgY29uc3Qgd2VhdGhlckNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1jaXR5Jyk7XG4gIHdlYXRoZXJDaXR5LnRleHRDb250ZW50ID0gbmFtZTtcbiAgLy8gR2V0IHRoZSBjb3VudHJ5XG4gIGNvbnN0IHsgY291bnRyeSB9ID0gZGF0YS5zeXM7XG4gIGNvbnN0IHdlYXRoZXJDb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY291bnRyeScpO1xuICB3ZWF0aGVyQ291bnRyeS50ZXh0Q29udGVudCA9IGxvb2t1cENvdW50cnkoY291bnRyeSk7XG5cbiAgLy8gR2V0IHRoZSB0ZW1wIGFuZCBhcHBseSB0byB0aGUgRE9NXG4gIGNvbnN0IHsgdGVtcCB9ID0gZGF0YS5tYWluO1xuICBjb25zdCB3ZWF0aGVyVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXRlbXAnKTtcbiAgd2VhdGhlclRlbXAuaW5uZXJIVE1MID0gYDxzcGFuPiR7YXNzaWduVGVtcFN5bWJvbCh0ZW1wLCB1bml0KX08L3NwYW4+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZGV2aWNlX3RoZXJtb3N0YXQ8L3NwYW4+YDtcbiAgLy8gR2V0IHRoZSBXaW5kIHNwZWVkIGFuZCBhcHBseSB0byB0aGUgRE9NXG4gIGNvbnN0IHdpbmQgPSBjb252ZXJ0V2luZChkYXRhLndpbmQuc3BlZWQsIHVuaXQpO1xuICBjb25zdCB3ZWF0aGVyV2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLXdpbmQnKTtcbiAgd2VhdGhlcldpbmQuaW5uZXJIVE1MID0gYDxzcGFuPiR7d2luZH08L3NwYW4+PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+YWlyPC9zcGFuPmA7XG4gIC8vIGdldCB0aGUgd2VhdGhlclR5cGUgYW5kIGljb25cbiAgY29uc3Qgd2VhdGhlclR5cGUgPSBkYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgY29uc3Qgd2VhdGhlckljb24gPSBsb29rdXBJY29uKGRhdGEud2VhdGhlclswXS5pY29uKTtcbiAgY29uc3QgYXRtb3NwaGVyZVR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRtb3NwaGVyZS1jbG91ZCcpO1xuICBjb25zdCBhdG1vc3BoZXJlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdG1vc3BoZXJlLWljb24nKTtcbiAgYXRtb3NwaGVyZVR5cGUudGV4dENvbnRlbnQgPSB3ZWF0aGVyVHlwZTtcbiAgYXRtb3NwaGVyZUljb24uaW5uZXJIVE1MID0gd2VhdGhlckljb247XG4gIC8vIGdldCB0aGUgZGVzY3JpcHRpb25cbiAgY29uc3QgZGVzYyA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgYXRtb3NwaGVyZURlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRtb3NwaGVyZS1kZXNjJyk7XG4gIGF0bW9zcGhlcmVEZXNjLnRleHRDb250ZW50ID0gZGVzYztcbiAgLy8gZ2V0IHRoZSBIdW1pZGl0eVxuICBjb25zdCB7IGh1bWlkaXR5IH0gPSBkYXRhLm1haW47XG4gIGNvbnN0IGF0bW9zcGhlcmVIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdG1vc3BoZXJlLWh1bWlkaXR5Jyk7XG4gIGF0bW9zcGhlcmVIdW1pZGl0eS5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+aHVtaWRpdHlfbG93PC9zcGFuPjxzcGFuPiR7aHVtaWRpdHl9JTwvc3Bhbj5gO1xuICAvLyBmb3IgdGhlIG5leHQgNiAzIGhvdXIgZm9yZWNhc3RzIGdldCBlYWNoIGFuZCBkaXNwbGF5XG4gIGNvbnN0IGhvdXJseSA9IGZvcmVjYXN0Lmxpc3Q7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkgKz0gMSkge1xuICAgIGNvbnN0IHRpbWUgPSBob3VybHlbaV0uZHQgKyBkYXRhLnRpbWV6b25lO1xuICAgIGNvbnN0IHdlYXRoZXIgPSBsb29rdXBJY29uKGhvdXJseVtpXS53ZWF0aGVyWzBdLmljb24pO1xuICAgIGNvbnN0IGhvdXJUZW1wID0gaG91cmx5W2ldLm1haW4udGVtcDtcbiAgICBjb25zdCBob3VybHlSZW5kZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZm9yZWNhc3QtJHtpICsgMX1gKTtcbiAgICBjb25zdCBkYXkgPSBnZXREYXkoaG91cmx5W2ldLmR0KTtcbiAgICBob3VybHlSZW5kZXIuaW5uZXJIVE1MID0gYDxzcGFuPiR7ZGF5fTwvc3Bhbj48c3Bhbj4ke2Zvcm1hdERhdGUodGltZSl9PC9zcGFuPjxzcGFuPiR7d2VhdGhlcn08L3NwYW4+PHNwYW4+JHthc3NpZ25UZW1wU3ltYm9sKGhvdXJUZW1wLCB1bml0KX08L3NwYW4+YDtcbiAgfVxufVxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxvbiwgbGF0LCB1bml0KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9Y2FjMGU4NzdhOWNhNjFiZmQ3ZWVkM2RmYmQwZjUyNjImdW5pdHM9JHt1bml0fWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBmb3JlY2FzdERhdGE7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb29yZHMoY2l0eU5hbWUsIHVuaXQpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHlOYW1lfSZhcHBpZD1jYWMwZTg3N2E5Y2E2MWJmZDdlZWQzZGZiZDBmNTI2MiZ1bml0cz0ke3VuaXR9YCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGNvb3JkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGNvb3Jkcztcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2V0Rm9yZWNhc3QsIGdldENvb3JkcyB9IGZyb20gJy4vZ2V0V2VhdGhlcic7XG5pbXBvcnQgcmVuZGVyV2VhdGhlciBmcm9tICcuL0RPTWZ1bmN0aW9ucyc7XG5cbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnV0dG9uJyk7XG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcbmNvbnN0IHRlbXBlcmF0dXJlQyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS1jaGFuZ2UtYycpO1xuY29uc3QgdGVtcGVyYXR1cmVGID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlLWNoYW5nZS1mJyk7XG5sZXQgbGFzdENpdHkgPSAnJztcbmxldCBjdXJyZW50VW5pdCA9ICcnO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoZmlyc3RMb2FkID0gdHJ1ZSwgdW5pdCA9ICdpbXBlcmlhbCcpIHtcbiAgbGV0IGNpdHlOYW1lID0gJyc7XG4gIGlmIChmaXJzdExvYWQpIHtcbiAgICBjaXR5TmFtZSA9ICdMb25kb24nO1xuICB9IGVsc2UgaWYgKHNlYXJjaElucHV0LnZhbHVlKSB7XG4gICAgY2l0eU5hbWUgPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBjaXR5TmFtZSA9IGxhc3RDaXR5O1xuICB9XG4gIGlmICh1bml0ID09PSAnaW1wZXJpYWwnKSB7XG4gICAgdGVtcGVyYXR1cmVGLmNsYXNzTGlzdC5hZGQoJ25vdC12aXNpYmxlJyk7XG4gICAgdGVtcGVyYXR1cmVDLmNsYXNzTGlzdC5yZW1vdmUoJ25vdC12aXNpYmxlJyk7XG4gIH0gZWxzZSB7XG4gICAgdGVtcGVyYXR1cmVGLmNsYXNzTGlzdC5yZW1vdmUoJ25vdC12aXNpYmxlJyk7XG4gICAgdGVtcGVyYXR1cmVDLmNsYXNzTGlzdC5hZGQoJ25vdC12aXNpYmxlJyk7XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBjb29yZHMgPSBhd2FpdCBnZXRDb29yZHMoY2l0eU5hbWUsIHVuaXQpO1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgZ2V0Rm9yZWNhc3QoY29vcmRzLmNvb3JkLmxvbiwgY29vcmRzLmNvb3JkLmxhdCwgdW5pdCk7XG4gICAgcmVuZGVyV2VhdGhlcihjb29yZHMsIGZvcmVjYXN0LCB1bml0KTtcbiAgICBsYXN0Q2l0eSA9IGNpdHlOYW1lO1xuICAgIGN1cnJlbnRVbml0ID0gdW5pdDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItZGlzcGxheScpLmlubmVySFRNTCA9ICcnO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItZGlzcGxheScpLmlubmVySFRNTCA9ICdMb2NhdGlvbiBjYW5ub3QgYmUgZm91bmQnO1xuICB9XG59XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZ2V0V2VhdGhlckRhdGEoZmFsc2UsIGN1cnJlbnRVbml0KTtcbiAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbn0pO1xuXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgZ2V0V2VhdGhlckRhdGEoZmFsc2UsIGN1cnJlbnRVbml0KTtcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xuICB9XG59KTtcblxudGVtcGVyYXR1cmVGLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBnZXRXZWF0aGVyRGF0YShmYWxzZSwgJ2ltcGVyaWFsJyk7XG59KTtcblxudGVtcGVyYXR1cmVDLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBnZXRXZWF0aGVyRGF0YShmYWxzZSwgJ21ldHJpYycpO1xufSk7XG5cbmdldFdlYXRoZXJEYXRhKCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9va3VwSWNvbihjb2RlKSB7XG4gIC8vIFVzZSB0aGUgaWNvbiBjb2RlIGZyb20gdGhlIEFQSSB0byBzZWxlY3QgdGhlIGNvcnJlY3Qgc3ltYm9sXG4gIGlmIChjb2RlID09PSAnMDFkJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+c3Vubnk8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMDFuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Y2xlYXJfbmlnaHQ8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMDJkJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+cGFydGx5X2Nsb3VkeV9kYXk8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMDJuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+bmlnaHRzX3N0YXk8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMDNkJ1xuICAgfHwgY29kZSA9PT0gJzAzbidcbiAgIHx8IGNvZGUgPT09ICcwNGQnXG4gICB8fCBjb2RlID09PSAnMDRuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Y2xvdWR5PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzA5ZCdcbiAgfHwgY29kZSA9PT0gJzA5bidcbiAgfHwgY29kZSA9PT0gJzEwZCdcbiAgfHwgY29kZSA9PT0gJzEwbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPnJhaW55PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzExZCcgfHwgY29kZSA9PT0gJzExbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPnRodW5kZXJzdG9ybTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcxM2QnIHx8IGNvZGUgPT09ICcxM24nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5jbG91ZHlfc25vd2luZzwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICc1MGQnIHx8IGNvZGUgPT09ICc1MG4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5mb2dneTwvc3Bhbj4nO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIC8vIENvbnZlcnQgZGF0ZSBmcm9tIHVuaXggdG8gaG91ciBhbS9wbSBhbmQgc2hvdyBpbiBsb2NhbCB0aW1lem9uZVxuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSAqIDEwMDApO1xuICBsZXQgc2hvcnREYXRlID0gcGFyc2VJbnQobmV3RGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKSwgMTApO1xuICBsZXQgdGltZU9mRGF5ID0gJyc7XG4gIGlmIChzaG9ydERhdGUgPiAxMikge1xuICAgIHRpbWVPZkRheSA9ICcgcG0nO1xuICAgIHNob3J0RGF0ZSAtPSAxMjtcbiAgfSBlbHNlIGlmIChzaG9ydERhdGUgPT09IDEyKSB7XG4gICAgdGltZU9mRGF5ID0gJyBwbSc7XG4gIH0gZWxzZSBpZiAoc2hvcnREYXRlID09PSAwKSB7XG4gICAgdGltZU9mRGF5ID0gJyBhbSc7XG4gICAgc2hvcnREYXRlID0gMTI7XG4gIH0gZWxzZSB7XG4gICAgdGltZU9mRGF5ID0gJyBhbSc7XG4gIH1cbiAgcmV0dXJuIHNob3J0RGF0ZSArIHRpbWVPZkRheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheShkYXRlKSB7XG4gIGNvbnN0IGRheSA9IG5ldyBEYXRlKGRhdGUgKiAxMDAwKS5nZXREYXkoKTtcbiAgY29uc3QgZGF5QXJyYXkgPSBbJ3N1bmRheScsICdtb25kYXknLCAndHVlc2RheScsICd3ZWRuZXNkYXknLCAndGh1cnNkYXknLCAnZnJpZGF5JywgJ3NhdHVyZGF5J107XG4gIHJldHVybiBkYXlBcnJheVtkYXldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFdpbmQoc3BlZWQsIHVuaXQpIHtcbiAgLy8gQ29udmVydCB3aW5kIGZyb20gbS9zIHRvIGttaFxuICBpZiAodW5pdCA9PT0gJ21ldHJpYycpIHtcbiAgICByZXR1cm4gYCR7TWF0aC5yb3VuZChzcGVlZCAqIDIuMjM2OTQpfSBtcGhgO1xuICB9XG4gIC8vIElmIHRoZSB1bml0IGlzIGltcGVyaWFsIHRoZW4gdGhlIHNwZWVkIGFscmVhZHkgaW4gbXBoXG4gIHJldHVybiBgJHtNYXRoLnJvdW5kKHNwZWVkKX0gbXBoYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblRlbXBTeW1ib2wodGVtcCwgdW5pdCkge1xuICBpZiAodW5pdCA9PT0gJ21ldHJpYycpIHtcbiAgICByZXR1cm4gYCR7TWF0aC5yb3VuZCh0ZW1wKX0gXFx1MDBCMENgO1xuICB9XG4gIHJldHVybiBgJHtNYXRoLnJvdW5kKHRlbXApfSBGYDtcbn1cblxuY29uc3QgcmVnaW9uTmFtZXMgPSBuZXcgSW50bC5EaXNwbGF5TmFtZXMoWydlbiddLCB7IHR5cGU6ICdyZWdpb24nIH0pO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9va3VwQ291bnRyeShjb3VudHJ5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHJlZ2lvbk5hbWVzLm9mKGNvdW50cnkpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==