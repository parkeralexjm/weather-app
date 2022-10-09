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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/background.png */ "./src/assets/background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* Colour variables */\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.background {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 3fr 1fr 2fr;\n  color: white;\n}\n\n.weather-box {\n  grid-area: 1 / 1 / 3 / 2;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  border: 2px solid white ;\n}\n\n.weather-box > div {\n\n}\n\n.search-box {\n  grid-area: 3 / 1 / 4 / 2;\n  display: flex;\n  align-items: center;\n  padding-left: 30px;\n}\n\n.atmosphere-box {\n  grid-area: 1 / 3 / 4 / 4;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  border: 2px solid white ;\n}\n\n.atmosphere-box > div {\n}\n\n.forecast-box {\n  grid-area: 4 / 1 / 6 / 4;\n  display: flex;\n  justify-content: space-evenly;\n  padding: 30px;\n  border: 2px solid white ;\n}\n\n.forecast-box > div {\n  height: 100px;\n  margin: 5px\n}\n\n.three-hour, .atmosphere-box > div, .weather-box > div {\n  border: 2px solid white ;\n}\n\n/* Footer */", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;AACvB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yDAAgD;EAChD,sBAAsB;EACtB,2BAA2B;EAC3B,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,+BAA+B;EAC/B,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,wBAAwB;AAC1B;;AAEA;;AAEA;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,wBAAwB;AAC1B;;AAEA;AACA;;AAEA;EACE,wBAAwB;EACxB,aAAa;EACb,6BAA6B;EAC7B,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb;AACF;;AAEA;EACE,wBAAwB;AAC1B;;AAEA,WAAW","sourcesContent":[":root {\n  /* Colour variables */\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.background {\n  background-image: url(\"./assets/background.png\");\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 3fr 1fr 2fr;\n  color: white;\n}\n\n.weather-box {\n  grid-area: 1 / 1 / 3 / 2;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  border: 2px solid white ;\n}\n\n.weather-box > div {\n\n}\n\n.search-box {\n  grid-area: 3 / 1 / 4 / 2;\n  display: flex;\n  align-items: center;\n  padding-left: 30px;\n}\n\n.atmosphere-box {\n  grid-area: 1 / 3 / 4 / 4;\n  display: flex;\n  flex-direction: column;\n  padding: 30px;\n  border: 2px solid white ;\n}\n\n.atmosphere-box > div {\n}\n\n.forecast-box {\n  grid-area: 4 / 1 / 6 / 4;\n  display: flex;\n  justify-content: space-evenly;\n  padding: 30px;\n  border: 2px solid white ;\n}\n\n.forecast-box > div {\n  height: 100px;\n  margin: 5px\n}\n\n.three-hour, .atmosphere-box > div, .weather-box > div {\n  border: 2px solid white ;\n}\n\n/* Footer */"],"sourceRoot":""}]);
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


function renderWeather(data, forecast) {
  // Get the city name
  const { name } = data;
  const weatherCity = document.querySelector('.weather-city');
  weatherCity.textContent = name;
  // Get the country
  const { country } = data.sys;
  const weatherCountry = document.querySelector('.weather-country');
  weatherCountry.textContent = country;

  // Get the temp and apply to the DOM
  const { temp } = data.main;
  const weatherTemp = document.querySelector('.weather-temp');
  weatherTemp.innerHTML = `${temp}<span class="material-symbols-outlined">device_thermostat</span>`;
  // Get the Wind speed and apply to the DOM
  const wind = data.wind.speed;
  const weatherWind = document.querySelector('.weather-wind');
  weatherWind.innerHTML = `${wind}<span class="material-symbols-outlined">air</span>`;
  // get the weatherType and icon
  const weatherType = data.weather[0].main;
  const weatherIcon = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])(data.weather[0].icon);
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
  atmosphereHumidity.innerHTML = `<span class="material-symbols-outlined">humidity_low</span>${humidity}`;
  // for the next 6 3 hour forecasts get each and display
  const hourly = forecast.list;
  for (let i = 0; i <= 5; i += 1) {
    const time = hourly[i].dt_txt;
    const weather = (0,_utility__WEBPACK_IMPORTED_MODULE_0__["default"])(hourly[i].weather[0].icon);
    const hourTemp = hourly[i].main.temp;
    const hourlyRender = document.querySelector(`#forecast-${i + 1}`);
    hourlyRender.innerHTML = time + hourTemp + weather;
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
async function getForecast(lon, lat) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=cac0e877a9ca61bfd7eed3dfbd0f5262&units=metric`, { mode: 'cors' });
  const forecastData = await response.json();
  return forecastData;
}

async function getCoords(cityName) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cac0e877a9ca61bfd7eed3dfbd0f5262&units=metric`, { mode: 'cors' });
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeather */ "./src/getWeather.js");
/* harmony import */ var _DOMfunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMfunctions */ "./src/DOMfunctions.js");




const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');

async function getWeatherData(firstLoad = true) {
  let cityName;
  if (firstLoad) {
    cityName = 'London';
  } else {
    cityName = searchInput.value;
  }
  const coords = await (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getCoords)(cityName);
  console.log(coords);
  const forecast = await (0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getForecast)(coords.coord.lon, coords.coord.lat);
  console.log(forecast.list);
  (0,_DOMfunctions__WEBPACK_IMPORTED_MODULE_2__["default"])(coords, forecast);
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
/* harmony export */   "default": () => (/* binding */ lookupIcon)
/* harmony export */ });
function lookupIcon(code) {
  if (code === '01d') {
    return '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.35 9.55v-7.8h3.3v7.8Zm13 5.4L33 12.65l5.55-5.55 2.3 2.3Zm3.1 10.7v-3.3h7.8v3.3ZM22.35 46.2v-7.8h3.3v7.8Zm-9.7-31.25-5.5-5.5L9.5 7.2l5.45 5.45Zm25.95 25.9-5.55-5.5 2.25-2.3 5.6 5.4ZM1.8 25.65v-3.3h7.8v3.3Zm7.7 15.2-2.35-2.3 5.5-5.5 1.15 1.15 1.2 1.15Zm14.5-5q-4.95 0-8.4-3.45T12.15 24q0-4.95 3.45-8.425Q19.05 12.1 24 12.1t8.425 3.475Q35.9 19.05 35.9 24q0 4.95-3.475 8.4T24 35.85Zm0-3.3q3.55 0 6.075-2.5Q32.6 27.55 32.6 24t-2.525-6.075Q27.55 15.4 24 15.4q-3.55 0-6.05 2.525T15.45 24q0 3.55 2.5 6.05t6.05 2.5ZM24 24Z"/></svg>';
  }

  if (code === '01n') {
    return '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M26.2 46.1q-4.2 0-7.9-1.6t-6.45-4.35Q9.1 37.4 7.5 33.7 5.9 30 5.9 25.8q0-7.35 4.7-12.95t11.9-7q-.8 4.9.65 9.65 1.45 4.75 5 8.35 3.55 3.55 8.3 4.975 4.75 1.425 9.7.675-1.35 7.25-6.95 11.925-5.6 4.675-13 4.675Zm0-3.3q4.9 0 8.9-2.75t6.5-7q-4.45-.45-8.55-2.125-4.1-1.675-7.25-4.825-3.15-3.1-4.8-7.175-1.65-4.075-2.05-8.425-4.25 2.4-7 6.4T9.2 25.8q0 7.15 4.925 12.075Q19.05 42.8 26.2 42.8Zm-.4-16.7Z"/></svg>';
  }

  if (code === '02d') {
    return '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.35 9.55v-7.8h3.3v7.8Zm13 5.4-2.3-2.35 5.5-5.5 2.3 2.35Zm3.1 10.7v-3.3h7.8v3.3Zm.15 15.2-5.5-5.5L35.45 33l5.5 5.5Zm-25.95-25.9-5.5-5.5 2.3-2.25 5.5 5.45ZM12 38.85h9q1.6 0 2.7-1.125T24.8 35q0-1.6-1.075-2.775-1.075-1.175-2.675-1.175h-2.3l-.9-2.1q-.75-1.75-2.35-2.775T12 25.15q-2.85 0-4.85 2-2 2-2 4.85 0 2.85 2 4.85 2 2 4.85 2Zm0 3.3q-4.2 0-7.175-2.975Q1.85 36.2 1.85 32q0-4.25 3.025-7.2t7.275-2.95q2.85 0 5.2 1.65t3.55 4.3q3 0 5.05 2.15T28 35.1q-.2 2.95-2.175 5Q23.85 42.15 21 42.15Zm16-7q-.15-.85-.375-1.625T27.2 31.95q2.45-.95 3.925-3.125Q32.6 26.65 32.6 24q0-3.55-2.525-6.075Q27.55 15.4 24 15.4q-3.2 0-5.6 2.05-2.4 2.05-2.8 5.15-.9-.2-1.75-.35-.85-.15-1.7-.4.7-4.25 4.1-7 3.4-2.75 7.75-2.75 4.95 0 8.425 3.475Q35.9 19.05 35.9 24.05q0 3.75-2.175 6.775Q31.55 33.85 28 35.15ZM24.05 24Z"/></svg>';
  }

  if (code === '02n') {
    return '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M25.8 26.1Zm.4 20h-6.15l.45-.5q.45-.5 1.025-1.1.575-.6 1.05-1.125l.475-.525h2.7q4.85.15 9.125-2.725T41.6 33.05q-4.45-.45-8.55-2.125-4.1-1.675-7.25-4.825-3.15-3.1-4.8-7.175-1.65-4.075-2.05-8.425-4.25 2.4-6.975 6.35Q9.25 20.8 9.2 25.6v.65q0 .35.05.65l-.525.175-1.125.375q-.6.2-1.075.375L6.05 28q-.1-.65-.125-1.175Q5.9 26.3 5.9 25.8q0-7.35 4.675-12.95t11.925-7q-.8 4.9.65 9.65 1.45 4.75 5 8.35 3.55 3.55 8.3 4.975 4.75 1.425 9.7.675-1.35 7.25-6.975 11.925Q33.55 46.1 26.2 46.1ZM12 42.8h9q1.6 0 2.725-1.1T24.85 39q0-1.6-1.075-2.75T21.1 35.1h-2.05l-.75-1.85q-.85-1.9-2.525-3.025Q14.1 29.1 12.05 29.1q-2.8 0-4.85 2.025T5.15 35.95q0 2.9 2 4.875T12 42.8Zm0 3.3q-4.2 0-7.175-2.975Q1.85 40.15 1.85 35.95q0-4.2 2.975-7.175Q7.8 25.8 12 25.8q3.05 0 5.525 1.625Q20 29.05 21.25 31.8q2.85.15 4.875 2.225T28.15 39q0 2.95-2.1 5.025T21 46.1Z"/></svg>';
  }

  if (code === '03d'
   || code === '03n'
   || code === '04d'
   || code === '04n') {
    return '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M12.65 40.05q-4.45 0-7.575-3.1T1.95 29.4q0-3.85 2.5-6.875t6.4-3.625q.95-4.8 4.675-7.875Q19.25 7.95 24.1 7.95q5.55 0 9.4 4.05 3.85 4.05 3.95 9.65v1.3q3.6-.05 6.1 2.425 2.5 2.475 2.5 6.125 0 3.55-2.55 6.05t-6.05 2.5Zm0-3.25h24.8q2.15 0 3.725-1.575Q42.75 33.65 42.75 31.5q0-2.2-1.575-3.775Q39.6 26.15 37.45 26.15H34.2V21.9q0-4.45-3-7.55-3-3.1-7.3-3.1-4.35 0-7.35 3.15t-3 7.65H12.5q-3.05 0-5.15 2.1-2.1 2.1-2.1 5.25 0 3.1 2.15 5.25t5.25 2.15ZM24 24Z"/></svg>';
  }

  if (code === '09d'
  || code === '09n'
  || code === '10d'
  || code === '10n') {
    return '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M27.95 44.35q-.6.25-1.275.05-.675-.2-.975-.85l-3.45-6.9q-.3-.6-.1-1.275.2-.675.85-.975.6-.3 1.275-.075.675.225.975.875l3.45 6.9q.3.6.1 1.275-.2.675-.85.975Zm12-.05q-.6.25-1.275.05-.675-.2-.975-.85l-3.45-6.9q-.3-.6-.1-1.275.2-.675.85-.975.6-.3 1.275-.075.675.225.975.875l3.45 6.9q.3.6.1 1.275-.2.675-.85.975Zm-24 0q-.6.25-1.275.075Q14 44.2 13.7 43.55l-3.45-6.9q-.3-.6-.075-1.275.225-.675.875-.975.6-.3 1.275-.1.675.2.975.85l3.45 6.95q.3.6.075 1.25-.225.65-.875.95ZM14.5 31q-4.4 0-7.525-3.125T3.85 20.35q0-3.95 2.85-7.1 2.85-3.15 7.05-3.45 1.65-2.8 4.3-4.45Q20.7 3.7 24 3.7q4.55 0 7.65 2.875 3.1 2.875 3.85 7.175 4 .2 6.325 2.725t2.325 5.875q0 3.6-2.525 6.125T35.5 31Zm0-3.3h21q2.25 0 3.8-1.575 1.55-1.575 1.55-3.775t-1.55-3.775Q37.75 17 35.5 17h-3.15v-1.65q0-3.45-2.425-5.9T24 7q-2.5 0-4.6 1.35Q17.3 9.7 16.35 12l-.45 1h-1.5q-3.05.1-5.15 2.225-2.1 2.125-2.1 5.125 0 3.05 2.15 5.2 2.15 2.15 5.2 2.15ZM24 17.35Z"/></svg>';
  }

  if (code === '11d' || code === '11n') {
    return '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m23.9 47.9 4.8-5.35-4-2.05 5.6-6.45h4.2l-4.75 5.4 4 2.05-5.65 6.4Zm-12.4 0 4.75-5.35-4-2.05 5.65-6.45h4.2l-4.8 5.4 4 2.05-5.6 6.4Zm3-16.9q-4.4 0-7.525-3.125T3.85 20.35q0-3.95 2.85-7.1 2.85-3.15 7.05-3.45 1.65-2.8 4.3-4.45Q20.7 3.7 24 3.7q4.55 0 7.65 2.875 3.1 2.875 3.9 7.175 3.95.2 6.275 2.725t2.325 5.875q0 3.6-2.525 6.125T35.5 31Zm0-3.3h21q2.25 0 3.8-1.575 1.55-1.575 1.55-3.775t-1.55-3.775Q37.75 17 35.5 17h-3.15v-1.65q0-3.45-2.425-5.9T24 7q-2.55 0-4.625 1.35T16.35 12l-.45 1h-1.5q-3.05.1-5.15 2.225-2.1 2.125-2.1 5.125 0 3.05 2.15 5.2 2.15 2.15 5.2 2.15ZM24 17.35Z"/></svg>';
  }

  if (code === '13d' || code === '13n') {
    return '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M12 38.35q-.8 0-1.35-.55t-.55-1.35q0-.75.55-1.325T12 34.55q.8 0 1.35.55t.55 1.35q0 .8-.55 1.35t-1.35.55Zm24 0q-.8 0-1.35-.55t-.55-1.35q0-.75.55-1.325T36 34.55q.8 0 1.35.55t.55 1.35q0 .8-.55 1.35t-1.35.55Zm-18 7.9q-.8 0-1.35-.525T16.1 44.4q0-.8.55-1.35T18 42.5q.8 0 1.35.55t.55 1.35q0 .75-.55 1.3t-1.35.55Zm6-7.9q-.8 0-1.35-.55t-.55-1.35q0-.75.55-1.325T24 34.55q.8 0 1.35.55t.55 1.35q0 .8-.55 1.35t-1.35.55Zm6 7.9q-.8 0-1.35-.525T28.1 44.4q0-.8.55-1.35T30 42.5q.8 0 1.35.55t.55 1.35q0 .75-.55 1.3t-1.35.55ZM14.5 31q-4.4 0-7.525-3.125T3.85 20.35q0-3.95 2.85-7.1 2.85-3.15 7.05-3.45 1.65-2.8 4.3-4.45 2.65-1.65 6-1.65 4.5 0 7.6 2.875 3.1 2.875 3.9 7.175 3.95.2 6.275 2.725t2.325 5.875q0 3.6-2.525 6.125T35.5 31Zm0-3.3h21q2.25 0 3.8-1.575 1.55-1.575 1.55-3.775t-1.55-3.775Q37.75 17 35.5 17h-3.15v-1.65q0-3.45-2.425-5.9T24 7q-2.5 0-4.6 1.35Q17.3 9.7 16.35 12l-.45 1h-1.5q-3.05.1-5.15 2.225-2.1 2.125-2.1 5.125 0 3.05 2.15 5.2 2.15 2.15 5.2 2.15ZM24 17.35Z"/></svg>';
  }

  if (code === '50d' || code === '50n') {
    return '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M36 37.75q-.7 0-1.225-.525Q34.25 36.7 34.25 36q0-.7.525-1.225.525-.525 1.225-.525.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225-.525.525-1.225.525ZM14 44q-.7 0-1.225-.525-.525-.525-.525-1.225 0-.7.525-1.225Q13.3 40.5 14 40.5q.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225Q14.7 44 14 44Zm-2-6.25q-.7 0-1.225-.525Q10.25 36.7 10.25 36q0-.7.525-1.225.525-.525 1.225-.525h18q.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225-.525.525-1.225.525ZM20 44q-.7 0-1.225-.525-.525-.525-.525-1.225 0-.7.525-1.225Q19.3 40.5 20 40.5h14q.7 0 1.225.525.525.525.525 1.225 0 .7-.525 1.225Q34.7 44 34 44Zm-5.5-13q-4.35 0-7.425-3.075T4 20.5q0-3.95 2.825-7.05 2.825-3.1 7.025-3.4 1.6-2.8 4.225-4.425Q20.7 4 24 4q4.55 0 7.625 2.875T35.4 14q3.95.2 6.275 2.675Q44 19.15 44 22.5q0 3.5-2.475 6T35.5 31Zm0-3h21q2.3 0 3.9-1.625T41 22.45q0-2.25-1.6-3.85T35.5 17h-3v-1.5q0-3.55-2.475-6.025Q27.55 7 24 7q-2.55 0-4.675 1.375T16.2 12.1l-.4.9h-1.4q-3.1.1-5.25 2.275T7 20.5q0 3.1 2.2 5.3 2.2 2.2 5.3 2.2ZM24 17.5Z"/></svg>';
  }
}


/***/ }),

/***/ "./src/assets/background.png":
/*!***********************************!*\
  !*** ./src/assets/background.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e96825c8b004f0966971.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9ET01mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2V0V2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91dGlsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC8qIENvbG91ciB2YXJpYWJsZXMgKi9cXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnIgMmZyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ud2VhdGhlci1ib3gge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGUgO1xcbn1cXG5cXG4ud2VhdGhlci1ib3ggPiBkaXYge1xcblxcbn1cXG5cXG4uc2VhcmNoLWJveCB7XFxuICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuXFxuLmF0bW9zcGhlcmUtYm94IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyA0IC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlIDtcXG59XFxuXFxuLmF0bW9zcGhlcmUtYm94ID4gZGl2IHtcXG59XFxuXFxuLmZvcmVjYXN0LWJveCB7XFxuICBncmlkLWFyZWE6IDQgLyAxIC8gNiAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGUgO1xcbn1cXG5cXG4uZm9yZWNhc3QtYm94ID4gZGl2IHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDVweFxcbn1cXG5cXG4udGhyZWUtaG91ciwgLmF0bW9zcGhlcmUtYm94ID4gZGl2LCAud2VhdGhlci1ib3ggPiBkaXYge1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGUgO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlEQUFnRDtFQUNoRCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUEsV0FBV1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKiBDb2xvdXIgdmFyaWFibGVzICovXFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnIgMmZyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ud2VhdGhlci1ib3gge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGUgO1xcbn1cXG5cXG4ud2VhdGhlci1ib3ggPiBkaXYge1xcblxcbn1cXG5cXG4uc2VhcmNoLWJveCB7XFxuICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuXFxuLmF0bW9zcGhlcmUtYm94IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyA0IC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlIDtcXG59XFxuXFxuLmF0bW9zcGhlcmUtYm94ID4gZGl2IHtcXG59XFxuXFxuLmZvcmVjYXN0LWJveCB7XFxuICBncmlkLWFyZWE6IDQgLyAxIC8gNiAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGUgO1xcbn1cXG5cXG4uZm9yZWNhc3QtYm94ID4gZGl2IHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBtYXJnaW46IDVweFxcbn1cXG5cXG4udGhyZWUtaG91ciwgLmF0bW9zcGhlcmUtYm94ID4gZGl2LCAud2VhdGhlci1ib3ggPiBkaXYge1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGUgO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGxvb2t1cEljb24gZnJvbSAnLi91dGlsaXR5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyV2VhdGhlcihkYXRhLCBmb3JlY2FzdCkge1xuICAvLyBHZXQgdGhlIGNpdHkgbmFtZVxuICBjb25zdCB7IG5hbWUgfSA9IGRhdGE7XG4gIGNvbnN0IHdlYXRoZXJDaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItY2l0eScpO1xuICB3ZWF0aGVyQ2l0eS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIC8vIEdldCB0aGUgY291bnRyeVxuICBjb25zdCB7IGNvdW50cnkgfSA9IGRhdGEuc3lzO1xuICBjb25zdCB3ZWF0aGVyQ291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWNvdW50cnknKTtcbiAgd2VhdGhlckNvdW50cnkudGV4dENvbnRlbnQgPSBjb3VudHJ5O1xuXG4gIC8vIEdldCB0aGUgdGVtcCBhbmQgYXBwbHkgdG8gdGhlIERPTVxuICBjb25zdCB7IHRlbXAgfSA9IGRhdGEubWFpbjtcbiAgY29uc3Qgd2VhdGhlclRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci10ZW1wJyk7XG4gIHdlYXRoZXJUZW1wLmlubmVySFRNTCA9IGAke3RlbXB9PHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+ZGV2aWNlX3RoZXJtb3N0YXQ8L3NwYW4+YDtcbiAgLy8gR2V0IHRoZSBXaW5kIHNwZWVkIGFuZCBhcHBseSB0byB0aGUgRE9NXG4gIGNvbnN0IHdpbmQgPSBkYXRhLndpbmQuc3BlZWQ7XG4gIGNvbnN0IHdlYXRoZXJXaW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItd2luZCcpO1xuICB3ZWF0aGVyV2luZC5pbm5lckhUTUwgPSBgJHt3aW5kfTxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmFpcjwvc3Bhbj5gO1xuICAvLyBnZXQgdGhlIHdlYXRoZXJUeXBlIGFuZCBpY29uXG4gIGNvbnN0IHdlYXRoZXJUeXBlID0gZGF0YS53ZWF0aGVyWzBdLm1haW47XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gbG9va3VwSWNvbihkYXRhLndlYXRoZXJbMF0uaWNvbik7XG4gIGNvbnN0IGF0bW9zcGhlcmVUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0bW9zcGhlcmUtY2xvdWQnKTtcbiAgY29uc3QgYXRtb3NwaGVyZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRtb3NwaGVyZS1pY29uJyk7XG4gIGF0bW9zcGhlcmVUeXBlLnRleHRDb250ZW50ID0gd2VhdGhlclR5cGU7XG4gIGF0bW9zcGhlcmVJY29uLmlubmVySFRNTCA9IHdlYXRoZXJJY29uO1xuICAvLyBnZXQgdGhlIGRlc2NyaXB0aW9uXG4gIGNvbnN0IGRlc2MgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gIGNvbnN0IGF0bW9zcGhlcmVEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF0bW9zcGhlcmUtZGVzYycpO1xuICBhdG1vc3BoZXJlRGVzYy50ZXh0Q29udGVudCA9IGRlc2M7XG4gIC8vIGdldCB0aGUgSHVtaWRpdHlcbiAgY29uc3QgeyBodW1pZGl0eSB9ID0gZGF0YS5tYWluO1xuICBjb25zdCBhdG1vc3BoZXJlSHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXRtb3NwaGVyZS1odW1pZGl0eScpO1xuICBhdG1vc3BoZXJlSHVtaWRpdHkuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmh1bWlkaXR5X2xvdzwvc3Bhbj4ke2h1bWlkaXR5fWA7XG4gIC8vIGZvciB0aGUgbmV4dCA2IDMgaG91ciBmb3JlY2FzdHMgZ2V0IGVhY2ggYW5kIGRpc3BsYXlcbiAgY29uc3QgaG91cmx5ID0gZm9yZWNhc3QubGlzdDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNTsgaSArPSAxKSB7XG4gICAgY29uc3QgdGltZSA9IGhvdXJseVtpXS5kdF90eHQ7XG4gICAgY29uc3Qgd2VhdGhlciA9IGxvb2t1cEljb24oaG91cmx5W2ldLndlYXRoZXJbMF0uaWNvbik7XG4gICAgY29uc3QgaG91clRlbXAgPSBob3VybHlbaV0ubWFpbi50ZW1wO1xuICAgIGNvbnN0IGhvdXJseVJlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNmb3JlY2FzdC0ke2kgKyAxfWApO1xuICAgIGhvdXJseVJlbmRlci5pbm5lckhUTUwgPSB0aW1lICsgaG91clRlbXAgKyB3ZWF0aGVyO1xuICB9XG59XG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QobG9uLCBsYXQpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD1jYWMwZTg3N2E5Y2E2MWJmZDdlZWQzZGZiZDBmNTI2MiZ1bml0cz1tZXRyaWNgLCB7IG1vZGU6ICdjb3JzJyB9KTtcbiAgY29uc3QgZm9yZWNhc3REYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gZm9yZWNhc3REYXRhO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRzKGNpdHlOYW1lKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9Y2FjMGU4NzdhOWNhNjFiZmQ3ZWVkM2RmYmQwZjUyNjImdW5pdHM9bWV0cmljYCwgeyBtb2RlOiAnY29ycycgfSk7XG4gIGNvbnN0IGNvb3JkcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGNvb3Jkcztcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2V0Rm9yZWNhc3QsIGdldENvb3JkcyB9IGZyb20gJy4vZ2V0V2VhdGhlcic7XG5pbXBvcnQgcmVuZGVyV2VhdGhlciBmcm9tICcuL0RPTWZ1bmN0aW9ucyc7XG5cbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnV0dG9uJyk7XG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQnKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoZmlyc3RMb2FkID0gdHJ1ZSkge1xuICBsZXQgY2l0eU5hbWU7XG4gIGlmIChmaXJzdExvYWQpIHtcbiAgICBjaXR5TmFtZSA9ICdMb25kb24nO1xuICB9IGVsc2Uge1xuICAgIGNpdHlOYW1lID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gIH1cbiAgY29uc3QgY29vcmRzID0gYXdhaXQgZ2V0Q29vcmRzKGNpdHlOYW1lKTtcbiAgY29uc29sZS5sb2coY29vcmRzKTtcbiAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBnZXRGb3JlY2FzdChjb29yZHMuY29vcmQubG9uLCBjb29yZHMuY29vcmQubGF0KTtcbiAgY29uc29sZS5sb2coZm9yZWNhc3QubGlzdCk7XG4gIHJlbmRlcldlYXRoZXIoY29vcmRzLCBmb3JlY2FzdCk7XG59XG5cbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZ2V0V2VhdGhlckRhdGEoZmFsc2UpO1xuICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xufSk7XG5cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBnZXRXZWF0aGVyRGF0YShmYWxzZSk7XG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbiAgfVxufSk7XG5cbmdldFdlYXRoZXJEYXRhKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb29rdXBJY29uKGNvZGUpIHtcbiAgaWYgKGNvZGUgPT09ICcwMWQnKSB7XG4gICAgcmV0dXJuICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0OFwiIHdpZHRoPVwiNDhcIj48cGF0aCBkPVwiTTIyLjM1IDkuNTV2LTcuOGgzLjN2Ny44Wm0xMyA1LjRMMzMgMTIuNjVsNS41NS01LjU1IDIuMyAyLjNabTMuMSAxMC43di0zLjNoNy44djMuM1pNMjIuMzUgNDYuMnYtNy44aDMuM3Y3LjhabS05LjctMzEuMjUtNS41LTUuNUw5LjUgNy4ybDUuNDUgNS40NVptMjUuOTUgMjUuOS01LjU1LTUuNSAyLjI1LTIuMyA1LjYgNS40Wk0xLjggMjUuNjV2LTMuM2g3Ljh2My4zWm03LjcgMTUuMi0yLjM1LTIuMyA1LjUtNS41IDEuMTUgMS4xNSAxLjIgMS4xNVptMTQuNS01cS00Ljk1IDAtOC40LTMuNDVUMTIuMTUgMjRxMC00Ljk1IDMuNDUtOC40MjVRMTkuMDUgMTIuMSAyNCAxMi4xdDguNDI1IDMuNDc1UTM1LjkgMTkuMDUgMzUuOSAyNHEwIDQuOTUtMy40NzUgOC40VDI0IDM1Ljg1Wm0wLTMuM3EzLjU1IDAgNi4wNzUtMi41UTMyLjYgMjcuNTUgMzIuNiAyNHQtMi41MjUtNi4wNzVRMjcuNTUgMTUuNCAyNCAxNS40cS0zLjU1IDAtNi4wNSAyLjUyNVQxNS40NSAyNHEwIDMuNTUgMi41IDYuMDV0Ni4wNSAyLjVaTTI0IDI0WlwiLz48L3N2Zz4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwMW4nKSB7XG4gICAgcmV0dXJuICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0OFwiIHdpZHRoPVwiNDhcIj48cGF0aCBkPVwiTTI2LjIgNDYuMXEtNC4yIDAtNy45LTEuNnQtNi40NS00LjM1UTkuMSAzNy40IDcuNSAzMy43IDUuOSAzMCA1LjkgMjUuOHEwLTcuMzUgNC43LTEyLjk1dDExLjktN3EtLjggNC45LjY1IDkuNjUgMS40NSA0Ljc1IDUgOC4zNSAzLjU1IDMuNTUgOC4zIDQuOTc1IDQuNzUgMS40MjUgOS43LjY3NS0xLjM1IDcuMjUtNi45NSAxMS45MjUtNS42IDQuNjc1LTEzIDQuNjc1Wm0wLTMuM3E0LjkgMCA4LjktMi43NXQ2LjUtN3EtNC40NS0uNDUtOC41NS0yLjEyNS00LjEtMS42NzUtNy4yNS00LjgyNS0zLjE1LTMuMS00LjgtNy4xNzUtMS42NS00LjA3NS0yLjA1LTguNDI1LTQuMjUgMi40LTcgNi40VDkuMiAyNS44cTAgNy4xNSA0LjkyNSAxMi4wNzVRMTkuMDUgNDIuOCAyNi4yIDQyLjhabS0uNC0xNi43WlwiLz48L3N2Zz4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwMmQnKSB7XG4gICAgcmV0dXJuICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0OFwiIHdpZHRoPVwiNDhcIj48cGF0aCBkPVwiTTIyLjM1IDkuNTV2LTcuOGgzLjN2Ny44Wm0xMyA1LjQtMi4zLTIuMzUgNS41LTUuNSAyLjMgMi4zNVptMy4xIDEwLjd2LTMuM2g3Ljh2My4zWm0uMTUgMTUuMi01LjUtNS41TDM1LjQ1IDMzbDUuNSA1LjVabS0yNS45NS0yNS45LTUuNS01LjUgMi4zLTIuMjUgNS41IDUuNDVaTTEyIDM4Ljg1aDlxMS42IDAgMi43LTEuMTI1VDI0LjggMzVxMC0xLjYtMS4wNzUtMi43NzUtMS4wNzUtMS4xNzUtMi42NzUtMS4xNzVoLTIuM2wtLjktMi4xcS0uNzUtMS43NS0yLjM1LTIuNzc1VDEyIDI1LjE1cS0yLjg1IDAtNC44NSAyLTIgMi0yIDQuODUgMCAyLjg1IDIgNC44NSAyIDIgNC44NSAyWm0wIDMuM3EtNC4yIDAtNy4xNzUtMi45NzVRMS44NSAzNi4yIDEuODUgMzJxMC00LjI1IDMuMDI1LTcuMnQ3LjI3NS0yLjk1cTIuODUgMCA1LjIgMS42NXQzLjU1IDQuM3EzIDAgNS4wNSAyLjE1VDI4IDM1LjFxLS4yIDIuOTUtMi4xNzUgNVEyMy44NSA0Mi4xNSAyMSA0Mi4xNVptMTYtN3EtLjE1LS44NS0uMzc1LTEuNjI1VDI3LjIgMzEuOTVxMi40NS0uOTUgMy45MjUtMy4xMjVRMzIuNiAyNi42NSAzMi42IDI0cTAtMy41NS0yLjUyNS02LjA3NVEyNy41NSAxNS40IDI0IDE1LjRxLTMuMiAwLTUuNiAyLjA1LTIuNCAyLjA1LTIuOCA1LjE1LS45LS4yLTEuNzUtLjM1LS44NS0uMTUtMS43LS40LjctNC4yNSA0LjEtNyAzLjQtMi43NSA3Ljc1LTIuNzUgNC45NSAwIDguNDI1IDMuNDc1UTM1LjkgMTkuMDUgMzUuOSAyNC4wNXEwIDMuNzUtMi4xNzUgNi43NzVRMzEuNTUgMzMuODUgMjggMzUuMTVaTTI0LjA1IDI0WlwiLz48L3N2Zz4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcwMm4nKSB7XG4gICAgcmV0dXJuICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0OFwiIHdpZHRoPVwiNDhcIj48cGF0aCBkPVwiTTI1LjggMjYuMVptLjQgMjBoLTYuMTVsLjQ1LS41cS40NS0uNSAxLjAyNS0xLjEuNTc1LS42IDEuMDUtMS4xMjVsLjQ3NS0uNTI1aDIuN3E0Ljg1LjE1IDkuMTI1LTIuNzI1VDQxLjYgMzMuMDVxLTQuNDUtLjQ1LTguNTUtMi4xMjUtNC4xLTEuNjc1LTcuMjUtNC44MjUtMy4xNS0zLjEtNC44LTcuMTc1LTEuNjUtNC4wNzUtMi4wNS04LjQyNS00LjI1IDIuNC02Ljk3NSA2LjM1UTkuMjUgMjAuOCA5LjIgMjUuNnYuNjVxMCAuMzUuMDUuNjVsLS41MjUuMTc1LTEuMTI1LjM3NXEtLjYuMi0xLjA3NS4zNzVMNi4wNSAyOHEtLjEtLjY1LS4xMjUtMS4xNzVRNS45IDI2LjMgNS45IDI1LjhxMC03LjM1IDQuNjc1LTEyLjk1dDExLjkyNS03cS0uOCA0LjkuNjUgOS42NSAxLjQ1IDQuNzUgNSA4LjM1IDMuNTUgMy41NSA4LjMgNC45NzUgNC43NSAxLjQyNSA5LjcuNjc1LTEuMzUgNy4yNS02Ljk3NSAxMS45MjVRMzMuNTUgNDYuMSAyNi4yIDQ2LjFaTTEyIDQyLjhoOXExLjYgMCAyLjcyNS0xLjFUMjQuODUgMzlxMC0xLjYtMS4wNzUtMi43NVQyMS4xIDM1LjFoLTIuMDVsLS43NS0xLjg1cS0uODUtMS45LTIuNTI1LTMuMDI1UTE0LjEgMjkuMSAxMi4wNSAyOS4xcS0yLjggMC00Ljg1IDIuMDI1VDUuMTUgMzUuOTVxMCAyLjkgMiA0Ljg3NVQxMiA0Mi44Wm0wIDMuM3EtNC4yIDAtNy4xNzUtMi45NzVRMS44NSA0MC4xNSAxLjg1IDM1Ljk1cTAtNC4yIDIuOTc1LTcuMTc1UTcuOCAyNS44IDEyIDI1LjhxMy4wNSAwIDUuNTI1IDEuNjI1UTIwIDI5LjA1IDIxLjI1IDMxLjhxMi44NS4xNSA0Ljg3NSAyLjIyNVQyOC4xNSAzOXEwIDIuOTUtMi4xIDUuMDI1VDIxIDQ2LjFaXCIvPjwvc3ZnPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzAzZCdcbiAgIHx8IGNvZGUgPT09ICcwM24nXG4gICB8fCBjb2RlID09PSAnMDRkJ1xuICAgfHwgY29kZSA9PT0gJzA0bicpIHtcbiAgICByZXR1cm4gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjQ4XCIgd2lkdGg9XCI0OFwiPjxwYXRoIGQ9XCJNMTIuNjUgNDAuMDVxLTQuNDUgMC03LjU3NS0zLjFUMS45NSAyOS40cTAtMy44NSAyLjUtNi44NzV0Ni40LTMuNjI1cS45NS00LjggNC42NzUtNy44NzVRMTkuMjUgNy45NSAyNC4xIDcuOTVxNS41NSAwIDkuNCA0LjA1IDMuODUgNC4wNSAzLjk1IDkuNjV2MS4zcTMuNi0uMDUgNi4xIDIuNDI1IDIuNSAyLjQ3NSAyLjUgNi4xMjUgMCAzLjU1LTIuNTUgNi4wNXQtNi4wNSAyLjVabTAtMy4yNWgyNC44cTIuMTUgMCAzLjcyNS0xLjU3NVE0Mi43NSAzMy42NSA0Mi43NSAzMS41cTAtMi4yLTEuNTc1LTMuNzc1UTM5LjYgMjYuMTUgMzcuNDUgMjYuMTVIMzQuMlYyMS45cTAtNC40NS0zLTcuNTUtMy0zLjEtNy4zLTMuMS00LjM1IDAtNy4zNSAzLjE1dC0zIDcuNjVIMTIuNXEtMy4wNSAwLTUuMTUgMi4xLTIuMSAyLjEtMi4xIDUuMjUgMCAzLjEgMi4xNSA1LjI1dDUuMjUgMi4xNVpNMjQgMjRaXCIvPjwvc3ZnPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzA5ZCdcbiAgfHwgY29kZSA9PT0gJzA5bidcbiAgfHwgY29kZSA9PT0gJzEwZCdcbiAgfHwgY29kZSA9PT0gJzEwbicpIHtcbiAgICByZXR1cm4gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjQ4XCIgd2lkdGg9XCI0OFwiPjxwYXRoIGQ9XCJNMjcuOTUgNDQuMzVxLS42LjI1LTEuMjc1LjA1LS42NzUtLjItLjk3NS0uODVsLTMuNDUtNi45cS0uMy0uNi0uMS0xLjI3NS4yLS42NzUuODUtLjk3NS42LS4zIDEuMjc1LS4wNzUuNjc1LjIyNS45NzUuODc1bDMuNDUgNi45cS4zLjYuMSAxLjI3NS0uMi42NzUtLjg1Ljk3NVptMTItLjA1cS0uNi4yNS0xLjI3NS4wNS0uNjc1LS4yLS45NzUtLjg1bC0zLjQ1LTYuOXEtLjMtLjYtLjEtMS4yNzUuMi0uNjc1Ljg1LS45NzUuNi0uMyAxLjI3NS0uMDc1LjY3NS4yMjUuOTc1Ljg3NWwzLjQ1IDYuOXEuMy42LjEgMS4yNzUtLjIuNjc1LS44NS45NzVabS0yNCAwcS0uNi4yNS0xLjI3NS4wNzVRMTQgNDQuMiAxMy43IDQzLjU1bC0zLjQ1LTYuOXEtLjMtLjYtLjA3NS0xLjI3NS4yMjUtLjY3NS44NzUtLjk3NS42LS4zIDEuMjc1LS4xLjY3NS4yLjk3NS44NWwzLjQ1IDYuOTVxLjMuNi4wNzUgMS4yNS0uMjI1LjY1LS44NzUuOTVaTTE0LjUgMzFxLTQuNCAwLTcuNTI1LTMuMTI1VDMuODUgMjAuMzVxMC0zLjk1IDIuODUtNy4xIDIuODUtMy4xNSA3LjA1LTMuNDUgMS42NS0yLjggNC4zLTQuNDVRMjAuNyAzLjcgMjQgMy43cTQuNTUgMCA3LjY1IDIuODc1IDMuMSAyLjg3NSAzLjg1IDcuMTc1IDQgLjIgNi4zMjUgMi43MjV0Mi4zMjUgNS44NzVxMCAzLjYtMi41MjUgNi4xMjVUMzUuNSAzMVptMC0zLjNoMjFxMi4yNSAwIDMuOC0xLjU3NSAxLjU1LTEuNTc1IDEuNTUtMy43NzV0LTEuNTUtMy43NzVRMzcuNzUgMTcgMzUuNSAxN2gtMy4xNXYtMS42NXEwLTMuNDUtMi40MjUtNS45VDI0IDdxLTIuNSAwLTQuNiAxLjM1UTE3LjMgOS43IDE2LjM1IDEybC0uNDUgMWgtMS41cS0zLjA1LjEtNS4xNSAyLjIyNS0yLjEgMi4xMjUtMi4xIDUuMTI1IDAgMy4wNSAyLjE1IDUuMiAyLjE1IDIuMTUgNS4yIDIuMTVaTTI0IDE3LjM1WlwiLz48L3N2Zz4nO1xuICB9XG5cbiAgaWYgKGNvZGUgPT09ICcxMWQnIHx8IGNvZGUgPT09ICcxMW4nKSB7XG4gICAgcmV0dXJuICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCI0OFwiIHdpZHRoPVwiNDhcIj48cGF0aCBkPVwibTIzLjkgNDcuOSA0LjgtNS4zNS00LTIuMDUgNS42LTYuNDVoNC4ybC00Ljc1IDUuNCA0IDIuMDUtNS42NSA2LjRabS0xMi40IDAgNC43NS01LjM1LTQtMi4wNSA1LjY1LTYuNDVoNC4ybC00LjggNS40IDQgMi4wNS01LjYgNi40Wm0zLTE2LjlxLTQuNCAwLTcuNTI1LTMuMTI1VDMuODUgMjAuMzVxMC0zLjk1IDIuODUtNy4xIDIuODUtMy4xNSA3LjA1LTMuNDUgMS42NS0yLjggNC4zLTQuNDVRMjAuNyAzLjcgMjQgMy43cTQuNTUgMCA3LjY1IDIuODc1IDMuMSAyLjg3NSAzLjkgNy4xNzUgMy45NS4yIDYuMjc1IDIuNzI1dDIuMzI1IDUuODc1cTAgMy42LTIuNTI1IDYuMTI1VDM1LjUgMzFabTAtMy4zaDIxcTIuMjUgMCAzLjgtMS41NzUgMS41NS0xLjU3NSAxLjU1LTMuNzc1dC0xLjU1LTMuNzc1UTM3Ljc1IDE3IDM1LjUgMTdoLTMuMTV2LTEuNjVxMC0zLjQ1LTIuNDI1LTUuOVQyNCA3cS0yLjU1IDAtNC42MjUgMS4zNVQxNi4zNSAxMmwtLjQ1IDFoLTEuNXEtMy4wNS4xLTUuMTUgMi4yMjUtMi4xIDIuMTI1LTIuMSA1LjEyNSAwIDMuMDUgMi4xNSA1LjIgMi4xNSAyLjE1IDUuMiAyLjE1Wk0yNCAxNy4zNVpcIi8+PC9zdmc+JztcbiAgfVxuXG4gIGlmIChjb2RlID09PSAnMTNkJyB8fCBjb2RlID09PSAnMTNuJykge1xuICAgIHJldHVybiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNDhcIiB3aWR0aD1cIjQ4XCI+PHBhdGggZD1cIk0xMiAzOC4zNXEtLjggMC0xLjM1LS41NXQtLjU1LTEuMzVxMC0uNzUuNTUtMS4zMjVUMTIgMzQuNTVxLjggMCAxLjM1LjU1dC41NSAxLjM1cTAgLjgtLjU1IDEuMzV0LTEuMzUuNTVabTI0IDBxLS44IDAtMS4zNS0uNTV0LS41NS0xLjM1cTAtLjc1LjU1LTEuMzI1VDM2IDM0LjU1cS44IDAgMS4zNS41NXQuNTUgMS4zNXEwIC44LS41NSAxLjM1dC0xLjM1LjU1Wm0tMTggNy45cS0uOCAwLTEuMzUtLjUyNVQxNi4xIDQ0LjRxMC0uOC41NS0xLjM1VDE4IDQyLjVxLjggMCAxLjM1LjU1dC41NSAxLjM1cTAgLjc1LS41NSAxLjN0LTEuMzUuNTVabTYtNy45cS0uOCAwLTEuMzUtLjU1dC0uNTUtMS4zNXEwLS43NS41NS0xLjMyNVQyNCAzNC41NXEuOCAwIDEuMzUuNTV0LjU1IDEuMzVxMCAuOC0uNTUgMS4zNXQtMS4zNS41NVptNiA3LjlxLS44IDAtMS4zNS0uNTI1VDI4LjEgNDQuNHEwLS44LjU1LTEuMzVUMzAgNDIuNXEuOCAwIDEuMzUuNTV0LjU1IDEuMzVxMCAuNzUtLjU1IDEuM3QtMS4zNS41NVpNMTQuNSAzMXEtNC40IDAtNy41MjUtMy4xMjVUMy44NSAyMC4zNXEwLTMuOTUgMi44NS03LjEgMi44NS0zLjE1IDcuMDUtMy40NSAxLjY1LTIuOCA0LjMtNC40NSAyLjY1LTEuNjUgNi0xLjY1IDQuNSAwIDcuNiAyLjg3NSAzLjEgMi44NzUgMy45IDcuMTc1IDMuOTUuMiA2LjI3NSAyLjcyNXQyLjMyNSA1Ljg3NXEwIDMuNi0yLjUyNSA2LjEyNVQzNS41IDMxWm0wLTMuM2gyMXEyLjI1IDAgMy44LTEuNTc1IDEuNTUtMS41NzUgMS41NS0zLjc3NXQtMS41NS0zLjc3NVEzNy43NSAxNyAzNS41IDE3aC0zLjE1di0xLjY1cTAtMy40NS0yLjQyNS01LjlUMjQgN3EtMi41IDAtNC42IDEuMzVRMTcuMyA5LjcgMTYuMzUgMTJsLS40NSAxaC0xLjVxLTMuMDUuMS01LjE1IDIuMjI1LTIuMSAyLjEyNS0yLjEgNS4xMjUgMCAzLjA1IDIuMTUgNS4yIDIuMTUgMi4xNSA1LjIgMi4xNVpNMjQgMTcuMzVaXCIvPjwvc3ZnPic7XG4gIH1cblxuICBpZiAoY29kZSA9PT0gJzUwZCcgfHwgY29kZSA9PT0gJzUwbicpIHtcbiAgICByZXR1cm4gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjQ4XCIgd2lkdGg9XCI0OFwiPjxwYXRoIGQ9XCJNMzYgMzcuNzVxLS43IDAtMS4yMjUtLjUyNVEzNC4yNSAzNi43IDM0LjI1IDM2cTAtLjcuNTI1LTEuMjI1LjUyNS0uNTI1IDEuMjI1LS41MjUuNyAwIDEuMjI1LjUyNS41MjUuNTI1LjUyNSAxLjIyNSAwIC43LS41MjUgMS4yMjUtLjUyNS41MjUtMS4yMjUuNTI1Wk0xNCA0NHEtLjcgMC0xLjIyNS0uNTI1LS41MjUtLjUyNS0uNTI1LTEuMjI1IDAtLjcuNTI1LTEuMjI1UTEzLjMgNDAuNSAxNCA0MC41cS43IDAgMS4yMjUuNTI1LjUyNS41MjUuNTI1IDEuMjI1IDAgLjctLjUyNSAxLjIyNVExNC43IDQ0IDE0IDQ0Wm0tMi02LjI1cS0uNyAwLTEuMjI1LS41MjVRMTAuMjUgMzYuNyAxMC4yNSAzNnEwLS43LjUyNS0xLjIyNS41MjUtLjUyNSAxLjIyNS0uNTI1aDE4cS43IDAgMS4yMjUuNTI1LjUyNS41MjUuNTI1IDEuMjI1IDAgLjctLjUyNSAxLjIyNS0uNTI1LjUyNS0xLjIyNS41MjVaTTIwIDQ0cS0uNyAwLTEuMjI1LS41MjUtLjUyNS0uNTI1LS41MjUtMS4yMjUgMC0uNy41MjUtMS4yMjVRMTkuMyA0MC41IDIwIDQwLjVoMTRxLjcgMCAxLjIyNS41MjUuNTI1LjUyNS41MjUgMS4yMjUgMCAuNy0uNTI1IDEuMjI1UTM0LjcgNDQgMzQgNDRabS01LjUtMTNxLTQuMzUgMC03LjQyNS0zLjA3NVQ0IDIwLjVxMC0zLjk1IDIuODI1LTcuMDUgMi44MjUtMy4xIDcuMDI1LTMuNCAxLjYtMi44IDQuMjI1LTQuNDI1UTIwLjcgNCAyNCA0cTQuNTUgMCA3LjYyNSAyLjg3NVQzNS40IDE0cTMuOTUuMiA2LjI3NSAyLjY3NVE0NCAxOS4xNSA0NCAyMi41cTAgMy41LTIuNDc1IDZUMzUuNSAzMVptMC0zaDIxcTIuMyAwIDMuOS0xLjYyNVQ0MSAyMi40NXEwLTIuMjUtMS42LTMuODVUMzUuNSAxN2gtM3YtMS41cTAtMy41NS0yLjQ3NS02LjAyNVEyNy41NSA3IDI0IDdxLTIuNTUgMC00LjY3NSAxLjM3NVQxNi4yIDEyLjFsLS40LjloLTEuNHEtMy4xLjEtNS4yNSAyLjI3NVQ3IDIwLjVxMCAzLjEgMi4yIDUuMyAyLjIgMi4yIDUuMyAyLjJaTTI0IDE3LjVaXCIvPjwvc3ZnPic7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==