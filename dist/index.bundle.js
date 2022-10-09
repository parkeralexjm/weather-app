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
___CSS_LOADER_EXPORT___.push([module.id, "/* josefin-sans-regular - latin */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(''),\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n       url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n:root {\n  /* Colour variables */\n  font-family: 'Josefin Sans';\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.search-button .material-symbols-outlined,svg {\n  filter: brightness(0) invert(1);\n}\n\n.background {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 3fr 1fr 2fr;\n  color: white;\n}\n\n.weather-box {\n  grid-area: 1 / 1 / 3 / 2;\n  display: flex;\n  flex-direction: column;\n  padding: calc(12px + 1.8625vw);\n}\n\n.weather-temp, .weather-wind {\n  display: flex;\n  align-items: center;\n  padding-top: 20px;\n  font-size: 2rem;\n}\n\n.weather-temp > span, .weather-wind > span {\n  padding-right: 10px;\n}\n.weather-city, .atmosphere-cloud {\n  font-size: 2rem;\n}\n\n.search-box {\n  display: flex;\n  align-items: center;\n  padding-top: 10px;\n}\n\ninput {\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  border-bottom: 2px solid white;\n  background-color: rgba(0,0,0,0);\n  color: white\n}\n\ninput:focus {\n  outline: 0;\n}\n\n::placeholder {\n  color: white;\n  opacity: 1;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  background-color: rgba(0,0,0,0);\n}\n\n.temperature-change {\n  padding-top: 5px;\n  font-size: 0.8rem;\n}\n\n.atmosphere-box {\n  grid-area: 1 / 3 / 4 / 4;\n  display: flex;\n  flex-direction: column;\n  padding: calc(12px + 1.8625vw) calc(12px + 1.8625vw);\n  align-items: flex-end;\n}\n\n.atmosphere-humidity {\n  display: flex;\n  align-items: center;\n  padding-top: 20px;\n  font-size: 2rem;\n}\n\n.atmosphere-humidity > span {\n  padding-left: 10px;\n}\n\n.forecast-box {\n  grid-area: 4 / 1 / 6 / 4;\n  display: flex;\n  justify-content: space-evenly;\n  padding: 30px;  \n}\n\n.forecast-box > div {\n  height: 100px;\n  width: 100px;\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media (max-width:1000px) {\n  #forecast-10 {\n    display:none;\n  }\n}\n\n@media (max-width:900px) {\n  #forecast-9 {\n    display:none;\n  }\n}\n\n@media (max-width:800px) {\n  #forecast-8 {\n    display:none;\n  }\n}\n\n@media (max-width:700px) {\n  #forecast-7 {\n    display:none;\n  }\n}\n\n@media (max-width:600px) {\n  #forecast-6 {\n    display:none;\n  }\n}\n\n@media (max-width:500px) {\n  #forecast-5 {\n    display:none;\n  }\n}\n\n@media (max-width:400px) {\n  #forecast-4 {\n    display:none;\n  }\n}\n\n.forecast-box .material-symbols-outlined {\n  font-size: 60px;\n}\n\n.weather-temp .material-symbols-outlined, .weather-wind .material-symbols-outlined {\n  font-size: 40px;\n}\n\n.atmosphere-icon .material-symbols-outlined {\n  font-size: 75px;\n}\n\n.atmosphere-humidity .material-symbols-outlined {\n  font-size: 30px;\n}\n\n/* Footer */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,iCAAiC;AACjC;EACE,2BAA2B;EAC3B,kBAAkB;EAClB,gBAAgB;EAChB;;6DAEsE,EAAE,gDAAgD;AAC1H;;AAEA;EACE,qBAAqB;EACrB,2BAA2B;AAC7B;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,yDAAgD;EAChD,sBAAsB;EACtB,2BAA2B;EAC3B,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,+BAA+B;EAC/B,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,eAAe;EACf,8BAA8B;EAC9B,+BAA+B;EAC/B;AACF;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,SAAS;EACT,UAAU;EACV,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,oDAAoD;EACpD,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE;IACE,YAAY;EACd;AACF;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA,WAAW","sourcesContent":["/* josefin-sans-regular - latin */\n@font-face {\n  font-family: 'Josefin Sans';\n  font-style: normal;\n  font-weight: 400;\n  src: local(''),\n       url('./fonts/josefin-sans-v25-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */\n       url('./fonts/josefin-sans-v25-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\n}\n\n:root {\n  /* Colour variables */\n  font-family: 'Josefin Sans';\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.search-button .material-symbols-outlined,svg {\n  filter: brightness(0) invert(1);\n}\n\n.background {\n  background-image: url(\"./assets/background.png\");\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 3fr 1fr 2fr;\n  color: white;\n}\n\n.weather-box {\n  grid-area: 1 / 1 / 3 / 2;\n  display: flex;\n  flex-direction: column;\n  padding: calc(12px + 1.8625vw);\n}\n\n.weather-temp, .weather-wind {\n  display: flex;\n  align-items: center;\n  padding-top: 20px;\n  font-size: 2rem;\n}\n\n.weather-temp > span, .weather-wind > span {\n  padding-right: 10px;\n}\n.weather-city, .atmosphere-cloud {\n  font-size: 2rem;\n}\n\n.search-box {\n  display: flex;\n  align-items: center;\n  padding-top: 10px;\n}\n\ninput {\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  border-bottom: 2px solid white;\n  background-color: rgba(0,0,0,0);\n  color: white\n}\n\ninput:focus {\n  outline: 0;\n}\n\n::placeholder {\n  color: white;\n  opacity: 1;\n}\n\nbutton {\n  border: 0;\n  outline: 0;\n  background-color: rgba(0,0,0,0);\n}\n\n.temperature-change {\n  padding-top: 5px;\n  font-size: 0.8rem;\n}\n\n.atmosphere-box {\n  grid-area: 1 / 3 / 4 / 4;\n  display: flex;\n  flex-direction: column;\n  padding: calc(12px + 1.8625vw) calc(12px + 1.8625vw);\n  align-items: flex-end;\n}\n\n.atmosphere-humidity {\n  display: flex;\n  align-items: center;\n  padding-top: 20px;\n  font-size: 2rem;\n}\n\n.atmosphere-humidity > span {\n  padding-left: 10px;\n}\n\n.forecast-box {\n  grid-area: 4 / 1 / 6 / 4;\n  display: flex;\n  justify-content: space-evenly;\n  padding: 30px;  \n}\n\n.forecast-box > div {\n  height: 100px;\n  width: 100px;\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media (max-width:1000px) {\n  #forecast-10 {\n    display:none;\n  }\n}\n\n@media (max-width:900px) {\n  #forecast-9 {\n    display:none;\n  }\n}\n\n@media (max-width:800px) {\n  #forecast-8 {\n    display:none;\n  }\n}\n\n@media (max-width:700px) {\n  #forecast-7 {\n    display:none;\n  }\n}\n\n@media (max-width:600px) {\n  #forecast-6 {\n    display:none;\n  }\n}\n\n@media (max-width:500px) {\n  #forecast-5 {\n    display:none;\n  }\n}\n\n@media (max-width:400px) {\n  #forecast-4 {\n    display:none;\n  }\n}\n\n.forecast-box .material-symbols-outlined {\n  font-size: 60px;\n}\n\n.weather-temp .material-symbols-outlined, .weather-wind .material-symbols-outlined {\n  font-size: 40px;\n}\n\n.atmosphere-icon .material-symbols-outlined {\n  font-size: 75px;\n}\n\n.atmosphere-humidity .material-symbols-outlined {\n  font-size: 30px;\n}\n\n/* Footer */"],"sourceRoot":""}]);
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
const temperatureChange = document.querySelector('.temperature-change');
let lastCity = '';

async function getWeatherData(firstLoad = true, unit = 'metric') {
  let cityName;
  if (firstLoad) {
    cityName = 'London';
  } else {
    cityName = searchInput.value;
  }

  const coords = await (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getCoords)(cityName, unit);
  console.log(coords);
  const forecast = await (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getForecast)(coords.coord.lon, coords.coord.lat, unit);
  console.log(forecast.list);
  (0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_2__["default"])(coords, forecast, unit);
  lastCity = cityName;
}

searchButton.addEventListener('click', () => {
  getWeatherData(false);
  searchInput.value = '';
});

searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    getWeatherData(false);
    searchInput.value = '';
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsY0FBYyw2QkFBNkI7QUFDM0M7QUFDQTtBQUNBLFlBQVksbUJBQW1CO0FBQy9COztBQUVPO0FBQ1A7QUFDQSxjQUFjLGtCQUFrQjtBQUNoQztBQUNBLFlBQVksa0JBQWtCO0FBQzlCOztBQUVBLG9EQUFvRCxnQkFBZ0I7O0FBRTdEO0FBQ1A7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvdXRpbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9qb3NlZmluLXNhbnMtdjI1LWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2pvc2VmaW4tc2Fucy12MjUtbGF0aW4tcmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvYmFja2dyb3VuZC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIGpvc2VmaW4tc2Fucy1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IGxvY2FsKCcnKSxcXG4gICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIC8qIENocm9tZSAyNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSsgKi9cXG4gICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTsgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcbn1cXG5cXG46cm9vdCB7XFxuICAvKiBDb2xvdXIgdmFyaWFibGVzICovXFxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2Fucyc7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnNlYXJjaC1idXR0b24gLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQsc3ZnIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XFxufVxcblxcbi5iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmciAyZnI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi53ZWF0aGVyLWJveCB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IGNhbGMoMTJweCArIDEuODYyNXZ3KTtcXG59XFxuXFxuLndlYXRoZXItdGVtcCwgLndlYXRoZXItd2luZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ud2VhdGhlci10ZW1wID4gc3BhbiwgLndlYXRoZXItd2luZCA+IHNwYW4ge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLndlYXRoZXItY2l0eSwgLmF0bW9zcGhlcmUtY2xvdWQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXItdG9wOiAwO1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxuICBib3JkZXItcmlnaHQ6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcbiAgY29sb3I6IHdoaXRlXFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtY2hhbmdlIHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmF0bW9zcGhlcmUtYm94IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyA0IC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogY2FsYygxMnB4ICsgMS44NjI1dncpIGNhbGMoMTJweCArIDEuODYyNXZ3KTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmF0bW9zcGhlcmUtaHVtaWRpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmF0bW9zcGhlcmUtaHVtaWRpdHkgPiBzcGFuIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLmZvcmVjYXN0LWJveCB7XFxuICBncmlkLWFyZWE6IDQgLyAxIC8gNiAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAzMHB4OyAgXFxufVxcblxcbi5mb3JlY2FzdC1ib3ggPiBkaXYge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDoxMDAwcHgpIHtcXG4gICNmb3JlY2FzdC0xMCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6OTAwcHgpIHtcXG4gICNmb3JlY2FzdC05IHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo4MDBweCkge1xcbiAgI2ZvcmVjYXN0LTgge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KSB7XFxuICAjZm9yZWNhc3QtNyB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcXG4gICNmb3JlY2FzdC02IHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo1MDBweCkge1xcbiAgI2ZvcmVjYXN0LTUge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjQwMHB4KSB7XFxuICAjZm9yZWNhc3QtNCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gIH1cXG59XFxuXFxuLmZvcmVjYXN0LWJveCAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXNpemU6IDYwcHg7XFxufVxcblxcbi53ZWF0aGVyLXRlbXAgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQsIC53ZWF0aGVyLXdpbmQgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uYXRtb3NwaGVyZS1pY29uIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtc2l6ZTogNzVweDtcXG59XFxuXFxuLmF0bW9zcGhlcmUtaHVtaWRpdHkgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlDQUFpQztBQUNqQztFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCOzs2REFFc0UsRUFBRSxnREFBZ0Q7QUFDMUg7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHlEQUFnRDtFQUNoRCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0I7QUFDRjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvREFBb0Q7RUFDcEQscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsV0FBV1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBqb3NlZmluLXNhbnMtcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2Fucyc7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgc3JjOiBsb2NhbCgnJyksXFxuICAgICAgIHVybCgnLi9mb250cy9qb3NlZmluLXNhbnMtdjI1LWxhdGluLXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIC8qIENocm9tZSAyNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSsgKi9cXG4gICAgICAgdXJsKCcuL2ZvbnRzL2pvc2VmaW4tc2Fucy12MjUtbGF0aW4tcmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7IC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXG59XFxuXFxuOnJvb3Qge1xcbiAgLyogQ29sb3VyIHZhcmlhYmxlcyAqL1xcbiAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5zZWFyY2gtYnV0dG9uIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkLHN2ZyB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMCkgaW52ZXJ0KDEpO1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vYXNzZXRzL2JhY2tncm91bmQucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmciAyZnI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi53ZWF0aGVyLWJveCB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IGNhbGMoMTJweCArIDEuODYyNXZ3KTtcXG59XFxuXFxuLndlYXRoZXItdGVtcCwgLndlYXRoZXItd2luZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ud2VhdGhlci10ZW1wID4gc3BhbiwgLndlYXRoZXItd2luZCA+IHNwYW4ge1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLndlYXRoZXItY2l0eSwgLmF0bW9zcGhlcmUtY2xvdWQge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXItdG9wOiAwO1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxuICBib3JkZXItcmlnaHQ6IDA7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcbiAgY29sb3I6IHdoaXRlXFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtY2hhbmdlIHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG59XFxuXFxuLmF0bW9zcGhlcmUtYm94IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyA0IC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogY2FsYygxMnB4ICsgMS44NjI1dncpIGNhbGMoMTJweCArIDEuODYyNXZ3KTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmF0bW9zcGhlcmUtaHVtaWRpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmF0bW9zcGhlcmUtaHVtaWRpdHkgPiBzcGFuIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuLmZvcmVjYXN0LWJveCB7XFxuICBncmlkLWFyZWE6IDQgLyAxIC8gNiAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAzMHB4OyAgXFxufVxcblxcbi5mb3JlY2FzdC1ib3ggPiBkaXYge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDoxMDAwcHgpIHtcXG4gICNmb3JlY2FzdC0xMCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6OTAwcHgpIHtcXG4gICNmb3JlY2FzdC05IHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo4MDBweCkge1xcbiAgI2ZvcmVjYXN0LTgge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KSB7XFxuICAjZm9yZWNhc3QtNyB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcXG4gICNmb3JlY2FzdC02IHtcXG4gICAgZGlzcGxheTpub25lO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDo1MDBweCkge1xcbiAgI2ZvcmVjYXN0LTUge1xcbiAgICBkaXNwbGF5Om5vbmU7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOjQwMHB4KSB7XFxuICAjZm9yZWNhc3QtNCB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG4gIH1cXG59XFxuXFxuLmZvcmVjYXN0LWJveCAubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXNpemU6IDYwcHg7XFxufVxcblxcbi53ZWF0aGVyLXRlbXAgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQsIC53ZWF0aGVyLXdpbmQgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4uYXRtb3NwaGVyZS1pY29uIC5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtc2l6ZTogNzVweDtcXG59XFxuXFxuLmF0bW9zcGhlcmUtaHVtaWRpdHkgLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgYXNzaWduVGVtcFN5bWJvbCwgY29udmVydFdpbmQsIGZvcm1hdERhdGUsIGxvb2t1cEljb24sIGxvb2t1cENvdW50cnksIGdldERheSxcbn0gZnJvbSAnLi91dGlsaXR5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyV2VhdGhlcihkYXRhLCBmb3JlY2FzdCwgdW5pdCkge1xuICAvLyBHZXQgdGhlIGNpdHkgbmFtZVxuICBjb25zdCB7IG5hbWUgfSA9IGRhdGE7XG4gIGNvbnN0IHdlYXRoZXJDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2l0eScpO1xuICB3ZWF0aGVyQ2l0eS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIC8vIEdldCB0aGUgY291bnRyeVxuICBjb25zdCB7IGNvdW50cnkgfSA9IGRhdGEuc3lzO1xuICBjb25zdCB3ZWF0aGVyQ291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNvdW50cnknKTtcbiAgd2VhdGhlckNvdW50cnkudGV4dENvbnRlbnQgPSBsb29rdXBDb3VudHJ5KGNvdW50cnkpO1xuXG4gIC8vIEdldCB0aGUgdGVtcCBhbmQgYXBwbHkgdG8gdGhlIERPTVxuICBjb25zdCB7IHRlbXAgfSA9IGRhdGEubWFpbjtcbiAgY29uc3Qgd2VhdGhlclRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci10ZW1wJyk7XG4gIHdlYXRoZXJUZW1wLmlubmVySFRNTCA9IGA8c3Bhbj4ke2Fzc2lnblRlbXBTeW1ib2wodGVtcCwgdW5pdCl9PC9zcGFuPjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmRldmljZV90aGVybW9zdGF0PC9zcGFuPmA7XG4gIC8vIEdldCB0aGUgV2luZCBzcGVlZCBhbmQgYXBwbHkgdG8gdGhlIERPTVxuICBjb25zdCB3aW5kID0gY29udmVydFdpbmQoZGF0YS53aW5kLnNwZWVkLCB1bml0KTtcbiAgY29uc3Qgd2VhdGhlcldpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci13aW5kJyk7XG4gIHdlYXRoZXJXaW5kLmlubmVySFRNTCA9IGA8c3Bhbj4ke3dpbmR9PC9zcGFuPjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmFpcjwvc3Bhbj5gO1xuICAvLyBnZXQgdGhlIHdlYXRoZXJUeXBlIGFuZCBpY29uXG4gIGNvbnN0IHdlYXRoZXJUeXBlID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gbG9va3VwSWNvbihkYXRhLndlYXRoZXJbMF0uaWNvbik7XG4gIGNvbnN0IGF0bW9zcGhlcmVUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0bW9zcGhlcmUtY2xvdWQnKTtcbiAgY29uc3QgYXRtb3NwaGVyZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRtb3NwaGVyZS1pY29uJyk7XG4gIGF0bW9zcGhlcmVUeXBlLnRleHRDb250ZW50ID0gd2VhdGhlclR5cGU7XG4gIGF0bW9zcGhlcmVJY29uLmlubmVySFRNTCA9IHdlYXRoZXJJY29uO1xuICAvLyBnZXQgdGhlIGRlc2NyaXB0aW9uXG4gIGNvbnN0IGRlc2MgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGNvbnN0IGF0bW9zcGhlcmVEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0bW9zcGhlcmUtZGVzYycpO1xuICBhdG1vc3BoZXJlRGVzYy50ZXh0Q29udGVudCA9IGRlc2M7XG4gIC8vIGdldCB0aGUgSHVtaWRpdHlcbiAgY29uc3QgeyBodW1pZGl0eSB9ID0gZGF0YS5tYWluO1xuICBjb25zdCBhdG1vc3BoZXJlSHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRtb3NwaGVyZS1odW1pZGl0eScpO1xuICBhdG1vc3BoZXJlSHVtaWRpdHkuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmh1bWlkaXR5X2xvdzwvc3Bhbj48c3Bhbj4ke2h1bWlkaXR5fSU8L3NwYW4+YDtcbiAgLy8gY2hhbmdlIHRoZSB0ZW1wZXJhdHVyZSB1bml0c1xuICBjb25zdCB0ZW1wZXJhdHVyZUNoYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS1jaGFuZ2UnKTtcbiAgaWYgKHVuaXQgPT09ICdtZXRyaWMnKSB7XG4gICAgdGVtcGVyYXR1cmVDaGFuZ2UudGV4dENvbnRlbnQgPSAnQ2hhbmdlIHVuaXRzIHRvIEYnO1xuICB9IGVsc2Uge1xuICAgIHRlbXBlcmF0dXJlQ2hhbmdlLnRleHRDb250ZW50ID0gJ0NoYW5nZSB1bml0cyB0byBcXHUwMEIwQyc7XG4gIH1cbiAgLy8gZm9yIHRoZSBuZXh0IDYgMyBob3VyIGZvcmVjYXN0cyBnZXQgZWFjaCBhbmQgZGlzcGxheVxuICBjb25zdCBob3VybHkgPSBmb3JlY2FzdC5saXN0O1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpICs9IDEpIHtcbiAgICBjb25zdCB0aW1lID0gaG91cmx5W2ldLmR0ICsgZGF0YS50aW1lem9uZTtcbiAgICBjb25zdCB3ZWF0aGVyID0gbG9va3VwSWNvbihob3VybHlbaV0ud2VhdGhlclswXS5pY29uKTtcbiAgICBjb25zdCBob3VyVGVtcCA9IGhvdXJseVtpXS5tYWluLnRlbXA7XG4gICAgY29uc3QgaG91cmx5UmVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2ZvcmVjYXN0LSR7aSArIDF9YCk7XG4gICAgY29uc3QgZGF5ID0gZ2V0RGF5KGhvdXJseVtpXS5kdCk7XG4gICAgaG91cmx5UmVuZGVyLmlubmVySFRNTCA9IGA8c3Bhbj4ke2RheX08L3NwYW4+PHNwYW4+JHtmb3JtYXREYXRlKHRpbWUpfTwvc3Bhbj48c3Bhbj4ke3dlYXRoZXJ9PC9zcGFuPjxzcGFuPiR7YXNzaWduVGVtcFN5bWJvbChob3VyVGVtcCwgdW5pdCl9PC9zcGFuPmA7XG4gIH1cbn1cbiIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChsb24sIGxhdCwgdW5pdCkge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPWNhYzBlODc3YTljYTYxYmZkN2VlZDNkZmJkMGY1MjYyJnVuaXRzPSR7dW5pdH1gLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZm9yZWNhc3REYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRzKGNpdHlOYW1lLCB1bml0KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9Y2FjMGU4NzdhOWNhNjFiZmQ3ZWVkM2RmYmQwZjUyNjImdW5pdHM9JHt1bml0fWAsIHsgbW9kZTogJ2NvcnMnIH0pO1xuICBjb25zdCBjb29yZHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIHJldHVybiBjb29yZHM7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGdldEZvcmVjYXN0LCBnZXRDb29yZHMgfSBmcm9tICcuL2dldFdlYXRoZXInO1xuaW1wb3J0IHJlbmRlcldlYXRoZXIgZnJvbSAnLi9ET01mdW5jdGlvbnMnO1xuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ1dHRvbicpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0Jyk7XG5jb25zdCB0ZW1wZXJhdHVyZUNoYW5nZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZS1jaGFuZ2UnKTtcbmxldCBsYXN0Q2l0eSA9ICcnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShmaXJzdExvYWQgPSB0cnVlLCB1bml0ID0gJ21ldHJpYycpIHtcbiAgbGV0IGNpdHlOYW1lO1xuICBpZiAoZmlyc3RMb2FkKSB7XG4gICAgY2l0eU5hbWUgPSAnTG9uZG9uJztcbiAgfSBlbHNlIHtcbiAgICBjaXR5TmFtZSA9IHNlYXJjaElucHV0LnZhbHVlO1xuICB9XG5cbiAgY29uc3QgY29vcmRzID0gYXdhaXQgZ2V0Q29vcmRzKGNpdHlOYW1lLCB1bml0KTtcbiAgY29uc29sZS5sb2coY29vcmRzKTtcbiAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBnZXRGb3JlY2FzdChjb29yZHMuY29vcmQubG9uLCBjb29yZHMuY29vcmQubGF0LCB1bml0KTtcbiAgY29uc29sZS5sb2coZm9yZWNhc3QubGlzdCk7XG4gIHJlbmRlcldlYXRoZXIoY29vcmRzLCBmb3JlY2FzdCwgdW5pdCk7XG4gIGxhc3RDaXR5ID0gY2l0eU5hbWU7XG59XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZ2V0V2VhdGhlckRhdGEoZmFsc2UpO1xuICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xufSk7XG5cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBnZXRXZWF0aGVyRGF0YShmYWxzZSk7XG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbiAgfVxufSk7XG5cbmdldFdlYXRoZXJEYXRhKCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gbG9va3VwSWNvbihjb2RlKSB7XG4gIC8vIFVzZSB0aGUgaWNvbiBjb2RlIGZyb20gdGhlIEFQSSB0byBzZWxlY3QgdGhlIGNvcnJlY3Qgc3ltYm9sXG4gIGlmIChjb2RlID09PSAnMDFkJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+c3Vubnk8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMDFuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Y2xlYXJfbmlnaHQ8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMDJkJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+cGFydGx5X2Nsb3VkeV9kYXk8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMDJuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+bmlnaHRzX3N0YXk8L3NwYW4+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMDNkJ1xuICAgfHwgY29kZSA9PT0gJzAzbidcbiAgIHx8IGNvZGUgPT09ICcwNGQnXG4gICB8fCBjb2RlID09PSAnMDRuJykge1xuICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Y2xvdWR5PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzA5ZCdcbiAgfHwgY29kZSA9PT0gJzA5bidcbiAgfHwgY29kZSA9PT0gJzEwZCdcbiAgfHwgY29kZSA9PT0gJzEwbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPnJhaW55PC9zcGFuPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzExZCcgfHwgY29kZSA9PT0gJzExbicpIHtcbiAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPnRodW5kZXJzdG9ybTwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcxM2QnIHx8IGNvZGUgPT09ICcxM24nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5jbG91ZHlfc25vd2luZzwvc3Bhbj4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICc1MGQnIHx8IGNvZGUgPT09ICc1MG4nKSB7XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5mb2dneTwvc3Bhbj4nO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIC8vIENvbnZlcnQgZGF0ZSBmcm9tIHVuaXggdG8gaG91ciBhbS9wbSBhbmQgc2hvdyBpbiBsb2NhbCB0aW1lem9uZVxuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSAqIDEwMDApO1xuICBsZXQgc2hvcnREYXRlID0gcGFyc2VJbnQobmV3RGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKSwgMTApO1xuICBsZXQgdGltZU9mRGF5ID0gJyc7XG4gIGlmIChzaG9ydERhdGUgPiAxMikge1xuICAgIHRpbWVPZkRheSA9ICcgcG0nO1xuICAgIHNob3J0RGF0ZSAtPSAxMjtcbiAgfSBlbHNlIGlmIChzaG9ydERhdGUgPT09IDEyKSB7XG4gICAgdGltZU9mRGF5ID0gJyBwbSc7XG4gIH0gZWxzZSBpZiAoc2hvcnREYXRlID09PSAwKSB7XG4gICAgdGltZU9mRGF5ID0gJyBhbSc7XG4gICAgc2hvcnREYXRlID0gMTI7XG4gIH0gZWxzZSB7XG4gICAgdGltZU9mRGF5ID0gJyBhbSc7XG4gIH1cbiAgcmV0dXJuIHNob3J0RGF0ZSArIHRpbWVPZkRheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERheShkYXRlKSB7XG4gIGNvbnN0IGRheSA9IG5ldyBEYXRlKGRhdGUgKiAxMDAwKS5nZXREYXkoKTtcbiAgY29uc3QgZGF5QXJyYXkgPSBbJ3N1bmRheScsICdtb25kYXknLCAndHVlc2RheScsICd3ZWRuZXNkYXknLCAndGh1cnNkYXknLCAnZnJpZGF5JywgJ3NhdHVyZGF5J107XG4gIHJldHVybiBkYXlBcnJheVtkYXldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFdpbmQoc3BlZWQsIHVuaXQpIHtcbiAgLy8gQ29udmVydCB3aW5kIGZyb20gbS9zIHRvIGttaFxuICBpZiAodW5pdCA9PT0gJ21ldHJpYycpIHtcbiAgICByZXR1cm4gYCR7TWF0aC5yb3VuZChzcGVlZCAqIDIuMjM2OTQpfSBtcGhgO1xuICB9XG4gIC8vIElmIHRoZSB1bml0IGlzIGltcGVyaWFsIHRoZW4gdGhlIHNwZWVkIGFscmVhZHkgaW4gbXBoXG4gIHJldHVybiBgJHtNYXRoLnJvdW5kKHNwZWVkKX0gbXBoYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnblRlbXBTeW1ib2wodGVtcCwgdW5pdCkge1xuICBpZiAodW5pdCA9PT0gJ21ldHJpYycpIHtcbiAgICByZXR1cm4gYCR7TWF0aC5yb3VuZCh0ZW1wKX0gXFx1MDBCMENgO1xuICB9XG4gIHJldHVybiBgJHtNYXRoLnJvdW5kKHRlbXApfSBGYDtcbn1cblxuY29uc3QgcmVnaW9uTmFtZXMgPSBuZXcgSW50bC5EaXNwbGF5TmFtZXMoWydlbiddLCB7IHR5cGU6ICdyZWdpb24nIH0pO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9va3VwQ291bnRyeShjb3VudHJ5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHJlZ2lvbk5hbWVzLm9mKGNvdW50cnkpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==