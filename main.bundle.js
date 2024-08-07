"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./BigFont.woff */ "./src/BigFont.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./BigFont.woff2 */ "./src/BigFont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --pink: #dd88aa;
    --blue: #55aadd;
    --red: #ff0066;
    --red-t: rgba(250,0,70, 0.3)
}

@font-face{
    font-family: "CustomFont";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff"),
        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2");
    font-weight: 600;
    font-style: normal;
}

body{
    height: 100vh;
    display: grid;
    grid-template-rows: 10vh 88vh;
    background-image: linear-gradient(to top left, var(--pink), var(--blue));
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 0;
}
header{
    background-color: black;
    margin-bottom: 10px; 
    display: flex;
    justify-content: center;
    align-items: center;
}

nav{
    display: flex;
    flex-shrink: 5;
    justify-content: space-between;
    gap: 6vw;
}

button{
    padding: 15px 30px;
    font-size: 2rem;
    font-weight: 700;
    border: solid 5px var(--blue);
    background-image: linear-gradient(to bottom right, var(--red), var(--pink));
    border-radius: 40px;
    font-family: "CustomFont"
}

button:hover{
    background-image: linear-gradient(to bottom right, white, var(--pink));
}

#header{
    max-height: 100px;
    font-family: "CustomFont";
    font-size: calc(4vw + 4vh);
    text-align: center;
    margin: 20px 30px 0px;
    grid-area: 1/1/1/3;
}

#content{
    padding: 10px;
    border: solid 12px black;
    border-radius: 60px;
    background-image: linear-gradient(to bottom, var(--pink), var(--blue));
    width: 90vw;
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    justify-self: center;
    justify-items: center;
}

#headline{
    display: flex;
    flex-shrink: 4;
    margin: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: white;
    text-align: center;
    font-size: calc(1vh + 1vw);
    font-weight: 700;
    grid-area: 3/ 1/ 3 /3;
}


#logo{
    grid-area: 2/1/2/3;
    max-width: 250px;
}

.menu-item{
    padding: 10px 15px;
    box-sizing: border-box;
    margin-top: 5px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    justify-items: center;
    width: 85%; 
    height: 90%;
    background-color: var(--red-t);
    border: solid 10px white;
    border-radius: 150px;
    align-self: center;
    box-shadow: 15px 15px 35px;
}


.item-header{
    margin: 0px;
    font-family: "CustomFont";
    font-size: calc(1vh + 1vw);
    text-align: center;
}

.item-description, .item-price{
    margin-top: 10px;
    font-weight: 700;
    color: black;
}

.about-header{
    grid-area: 1/1/1/4;
    font-family: "CustomFont";
    font-size: calc(4vw + 4vh);
}

.about-text{
    grid-area: 2/2/2/2;
}

.about-contact{
    grid-area: 3/2/3/3;
}

.about-text, .about-contact{
    font-size: calc(1vw + 1vh); 
    font-weight: 700;
    color: white;
}

.about-header, .about-text, .about-contact{
    align-self: center;
    text-align: center;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,eAAe;IACf,cAAc;IACd;AACJ;;AAEA;IACI,yBAAyB;IACzB;+DAC0C;IAC1C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,6BAA6B;IAC7B,wEAAwE;IACxE,4BAA4B;IAC5B,0BAA0B;IAC1B,SAAS;AACb;AACA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,8BAA8B;IAC9B,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,6BAA6B;IAC7B,2EAA2E;IAC3E,mBAAmB;IACnB;AACJ;;AAEA;IACI,sEAAsE;AAC1E;;AAEA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,0BAA0B;IAC1B,kBAAkB;IAClB,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,mBAAmB;IACnB,sEAAsE;IACtE,WAAW;IACX,aAAa;IACb,uDAAuD;IACvD,2DAA2D;IAC3D,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,YAAY;IACZ,mJAAmJ;IACnJ,YAAY;IACZ,kBAAkB;IAClB,0BAA0B;IAC1B,gBAAgB;IAChB,qBAAqB;AACzB;;;AAGA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,eAAe;IACf,aAAa;IACb,+BAA+B;IAC/B,2DAA2D;IAC3D,qBAAqB;IACrB,UAAU;IACV,WAAW;IACX,8BAA8B;IAC9B,wBAAwB;IACxB,oBAAoB;IACpB,kBAAkB;IAClB,0BAA0B;AAC9B;;;AAGA;IACI,WAAW;IACX,yBAAyB;IACzB,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;AACtB","sourcesContent":[":root{\n    --pink: #dd88aa;\n    --blue: #55aadd;\n    --red: #ff0066;\n    --red-t: rgba(250,0,70, 0.3)\n}\n\n@font-face{\n    font-family: \"CustomFont\";\n    src: url(\"./BigFont.woff\") format(\"woff\"),\n        url(\"./BigFont.woff2\") format(\"woff2\");\n    font-weight: 600;\n    font-style: normal;\n}\n\nbody{\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 10vh 88vh;\n    background-image: linear-gradient(to top left, var(--pink), var(--blue));\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    margin: 0;\n}\nheader{\n    background-color: black;\n    margin-bottom: 10px; \n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nnav{\n    display: flex;\n    flex-shrink: 5;\n    justify-content: space-between;\n    gap: 6vw;\n}\n\nbutton{\n    padding: 15px 30px;\n    font-size: 2rem;\n    font-weight: 700;\n    border: solid 5px var(--blue);\n    background-image: linear-gradient(to bottom right, var(--red), var(--pink));\n    border-radius: 40px;\n    font-family: \"CustomFont\"\n}\n\nbutton:hover{\n    background-image: linear-gradient(to bottom right, white, var(--pink));\n}\n\n#header{\n    max-height: 100px;\n    font-family: \"CustomFont\";\n    font-size: calc(4vw + 4vh);\n    text-align: center;\n    margin: 20px 30px 0px;\n    grid-area: 1/1/1/3;\n}\n\n#content{\n    padding: 10px;\n    border: solid 12px black;\n    border-radius: 60px;\n    background-image: linear-gradient(to bottom, var(--pink), var(--blue));\n    width: 90vw;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, minmax(50px, 1fr));\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\n    justify-self: center;\n    justify-items: center;\n}\n\n#headline{\n    display: flex;\n    flex-shrink: 4;\n    margin: 20px;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: white;\n    text-align: center;\n    font-size: calc(1vh + 1vw);\n    font-weight: 700;\n    grid-area: 3/ 1/ 3 /3;\n}\n\n\n#logo{\n    grid-area: 2/1/2/3;\n    max-width: 250px;\n}\n\n.menu-item{\n    padding: 10px 15px;\n    box-sizing: border-box;\n    margin-top: 5px;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));\n    justify-items: center;\n    width: 85%; \n    height: 90%;\n    background-color: var(--red-t);\n    border: solid 10px white;\n    border-radius: 150px;\n    align-self: center;\n    box-shadow: 15px 15px 35px;\n}\n\n\n.item-header{\n    margin: 0px;\n    font-family: \"CustomFont\";\n    font-size: calc(1vh + 1vw);\n    text-align: center;\n}\n\n.item-description, .item-price{\n    margin-top: 10px;\n    font-weight: 700;\n    color: black;\n}\n\n.about-header{\n    grid-area: 1/1/1/4;\n    font-family: \"CustomFont\";\n    font-size: calc(4vw + 4vh);\n}\n\n.about-text{\n    grid-area: 2/2/2/2;\n}\n\n.about-contact{\n    grid-area: 3/2/3/3;\n}\n\n.about-text, .about-contact{\n    font-size: calc(1vw + 1vh); \n    font-weight: 700;\n    color: white;\n}\n\n.about-header, .about-text, .about-contact{\n    align-self: center;\n    text-align: center;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/about-page.js":
/*!***************************!*\
  !*** ./src/about-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutPage: () => (/* binding */ aboutPage)
/* harmony export */ });
function aboutPage(){
    const div = document.querySelector("#content");    
    
    const aboutHeader = document.createElement("h2")
    const aboutUs = document.createElement("p")
    const aboutContact = document.createElement("p")

    aboutUs.classList.add("about-text")
    aboutUs.textContent = "At Meloons, it's not just about the food – it's about the experience. Our friendly staff, beach-themed décor, and upbeat atmosphere make Meloons the perfect spot for any occasion. Whether you're celebrating a special event, enjoying a casual meal with friends, or just looking for a place to kick back and relax, you'll feel right at home at Meloons."
    
    aboutHeader.classList.add("about-header")
    aboutHeader.textContent = "About Meloons"

    aboutContact.classList.add("about-contact")
    aboutContact.textContent = "Have questions or need more information? Feel free to reach out to us at realmail@fake.com. We'd love to hear from you!"

    div.textContent = "";

    div.appendChild(aboutHeader)
    div.appendChild(aboutUs)
    div.appendChild(aboutContact)
}




/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
class Component{
    constructor(type,attribute){
        this.type = type,
        this.attribute = attribute
    }

    generateElement(atrName, content){
        const element = document.createElement(this.type)
        element.setAttribute(this.attribute, atrName)
        element.textContent = content

        return element
    }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-page */ "./src/load-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page */ "./src/about-page.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(0,_load_page__WEBPACK_IMPORTED_MODULE_0__.landingPage)();

const menuButton = document.getElementById("menu");
const homeButton = document.getElementById("home");
const aboutButton = document.getElementById("about");

homeButton.addEventListener("click", _load_page__WEBPACK_IMPORTED_MODULE_0__.landingPage);
menuButton.addEventListener("click", _menu_page__WEBPACK_IMPORTED_MODULE_1__.menuPage);
aboutButton.addEventListener("click", _about_page__WEBPACK_IMPORTED_MODULE_2__.aboutPage);


/***/ }),

/***/ "./src/load-page.js":
/*!**************************!*\
  !*** ./src/load-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   landingPage: () => (/* binding */ landingPage)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/component.js");
/* harmony import */ var _meloon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meloon.png */ "./src/meloon.png");



const landingPage = function() {
    const header = new _component__WEBPACK_IMPORTED_MODULE_0__["default"]("h1", "id");
    const headerElement = header.generateElement("header", "Wellcome to Meloons!");
    const div = document.querySelector("#content");

    const headLine = new _component__WEBPACK_IMPORTED_MODULE_0__["default"]("p", "id")
    const headLineElement = headLine.generateElement(
        "headline",
        "Meloons stands out for its unique blend of delicious, hearty food, a fun and lively atmosphere, and friendly service. Our menu features a variety of mouth-watering dishes perfect for any appetite, and our vibrant, welcoming environment ensures every visit is a memorable experience. Whether you're here for the game, a meal with friends, or just to unwind, Meloons is the ultimate destination for great food and good times."
    )

    const logoImage = new Image()
    logoImage.src = _meloon_png__WEBPACK_IMPORTED_MODULE_1__
    logoImage.setAttribute("id", "logo")

    div.textContent = ""

    div.appendChild(headerElement);
    div.appendChild(logoImage);
    div.appendChild(headLineElement);
};




/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuPage: () => (/* binding */ menuPage)
/* harmony export */ });
function menuPage() {

    const div = document.querySelector("#content");
    div.textContent = ""

    const itemsNumber = 9
    for (let i = 1; i <= itemsNumber; i++) {
        const items = document.createElement("div")
        items.classList.add(`menu-item`)
        items.classList.add(`item-${i}`)

        const header = document.createElement("h3")
        header.classList.add("item-header")

        const description = document.createElement("p")
        description.classList.add("item-description")

        const price = document.createElement("p")
        price.classList.add(`item-price`)
        
        if(i === 1){
            header.textContent = `Meloons Mega Wings`
            description.textContent = `A generous portion of our signature jumbo chicken wings, perfectly crispy and tossed in your choice of sauce, from classic buffalo to honey barbecue. Served with celery sticks and blue cheese dressing.`
            price.textContent = `Price: 15.99$`
        }else if(i === 2){
            header.textContent = "Beach Babe Burgers" 
            description.textContent = "A half-pound beef patty grilled to perfection, topped with crispy bacon, melted cheddar cheese, lettuce, tomato, and our special Meloons sauce, all sandwiched between a toasted brioche bun. Served with a side of seasoned fries."
            price.textContent = "Price: 14.49$"
        }else if(i === 3){
            header.textContent = "Sizzlin' Shrimp Skewers" 
            description.textContent = "Marinated shrimp skewers grilled to a succulent finish, served with a side of garlic butter dipping sauce and a fresh garden salad."
            price.textContent = "Price: 16.99$"
        }else if(i === 4){
            header.textContent = "Sunset Quesadillas" 
            description.textContent = "Large flour tortillas filled with a blend of cheeses, grilled chicken or beef, sautéed peppers, and onions. Served with sour cream, guacamole, and salsa on the side."
            price.textContent = "Price: 12.99$"
        }else if(i === 5){
            header.textContent = "Seaside Caesar Salad" 
            description.textContent = "Crisp romaine lettuce, Parmesan cheese, and garlic croutons tossed in our creamy Caesar dressing. Add grilled chicken, shrimp, or salmon for an additional charge"
            price.textContent = "Price: 10.99$"
        }else if(i === 6){
            header.textContent = "Tropical Tacos" 
            description.textContent = "Soft corn tortillas filled with your choice of grilled fish, shrimp, or chicken, topped with a zesty slaw, avocado slices, and a drizzle of cilantro-lime sauce. Served with a side of black beans and rice."
            price.textContent = "Price: 13.99$"
        }else if(i === 7){
            header.textContent = "Island Nachos" 
            description.textContent = "A heaping plate of crispy tortilla chips loaded with melted cheese, jalapeños, black olives, tomatoes, green onions, and your choice of seasoned beef or chicken. Served with sour cream, guacamole, and salsa."
            price.textContent = "Price: 11.99$"
        }else if(i === 8){
            header.textContent = "Meloons Loaded Fries" 
            description.textContent = "A mountain of crispy fries smothered in melted cheese, bacon bits, green onions, and a drizzle of ranch dressing. Perfect for sharing!"
            price.textContent = "Price: 9.99$"
        }else if(i === 9){
            header.textContent = "Pineapple Paradise Cheesecake" 
            description.textContent = "A creamy New York-style cheesecake topped with a sweet pineapple glaze and whipped cream. A tropical twist on a classic dessert."
            price.textContent = "Price: 7.49$"
        }

        items.appendChild(header)
        items.appendChild(description)
        items.appendChild(price)

        div.appendChild(items)
    }
}




/***/ }),

/***/ "./src/BigFont.woff":
/*!**************************!*\
  !*** ./src/BigFont.woff ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0abcb1783b7b98ffb509.woff";

/***/ }),

/***/ "./src/BigFont.woff2":
/*!***************************!*\
  !*** ./src/BigFont.woff2 ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0cd379ec06129ef68f09.woff2";

/***/ }),

/***/ "./src/meloon.png":
/*!************************!*\
  !*** ./src/meloon.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc0b6def578f9759a74d.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFJQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2FkLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9CaWdGb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL0JpZ0ZvbnQud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdHtcbiAgICAtLXBpbms6ICNkZDg4YWE7XG4gICAgLS1ibHVlOiAjNTVhYWRkO1xuICAgIC0tcmVkOiAjZmYwMDY2O1xuICAgIC0tcmVkLXQ6IHJnYmEoMjUwLDAsNzAsIDAuMylcbn1cblxuQGZvbnQtZmFjZXtcbiAgICBmb250LWZhbWlseTogXCJDdXN0b21Gb250XCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwid29mZlwiKSxcbiAgICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5ib2R5e1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggODh2aDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wIGxlZnQsIHZhcigtLXBpbmspLCB2YXIoLS1ibHVlKSk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5oZWFkZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5uYXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXNocmluazogNTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiA2dnc7XG59XG5cbmJ1dHRvbntcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyOiBzb2xpZCA1cHggdmFyKC0tYmx1ZSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgdmFyKC0tcmVkKSwgdmFyKC0tcGluaykpO1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQ3VzdG9tRm9udFwiXG59XG5cbmJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCB3aGl0ZSwgdmFyKC0tcGluaykpO1xufVxuXG4jaGVhZGVye1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkN1c3RvbUZvbnRcIjtcbiAgICBmb250LXNpemU6IGNhbGMoNHZ3ICsgNHZoKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAyMHB4IDMwcHggMHB4O1xuICAgIGdyaWQtYXJlYTogMS8xLzEvMztcbn1cblxuI2NvbnRlbnR7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IHNvbGlkIDEycHggYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1waW5rKSwgdmFyKC0tYmx1ZSkpO1xuICAgIHdpZHRoOiA5MHZ3O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxZnIpKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNoZWFkbGluZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtc2hyaW5rOiA0O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IGNhbGMoMXZoICsgMXZ3KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGdyaWQtYXJlYTogMy8gMS8gMyAvMztcbn1cblxuXG4jbG9nb3tcbiAgICBncmlkLWFyZWE6IDIvMS8yLzM7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbn1cblxuLm1lbnUtaXRlbXtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMCUsIDFmcikpO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogODUlOyBcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtdCk7XG4gICAgYm9yZGVyOiBzb2xpZCAxMHB4IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAxNXB4IDE1cHggMzVweDtcbn1cblxuXG4uaXRlbS1oZWFkZXJ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQ3VzdG9tRm9udFwiO1xuICAgIGZvbnQtc2l6ZTogY2FsYygxdmggKyAxdncpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLml0ZW0tZGVzY3JpcHRpb24sIC5pdGVtLXByaWNle1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5hYm91dC1oZWFkZXJ7XG4gICAgZ3JpZC1hcmVhOiAxLzEvMS80O1xuICAgIGZvbnQtZmFtaWx5OiBcIkN1c3RvbUZvbnRcIjtcbiAgICBmb250LXNpemU6IGNhbGMoNHZ3ICsgNHZoKTtcbn1cblxuLmFib3V0LXRleHR7XG4gICAgZ3JpZC1hcmVhOiAyLzIvMi8yO1xufVxuXG4uYWJvdXQtY29udGFjdHtcbiAgICBncmlkLWFyZWE6IDMvMi8zLzM7XG59XG5cbi5hYm91dC10ZXh0LCAuYWJvdXQtY29udGFjdHtcbiAgICBmb250LXNpemU6IGNhbGMoMXZ3ICsgMXZoKTsgXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5hYm91dC1oZWFkZXIsIC5hYm91dC10ZXh0LCAuYWJvdXQtY29udGFjdHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixjQUFjO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QjsrREFDMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLHdFQUF3RTtJQUN4RSw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QiwyRUFBMkU7SUFDM0UsbUJBQW1CO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSSxzRUFBc0U7QUFDMUU7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHNFQUFzRTtJQUN0RSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVEQUF1RDtJQUN2RCwyREFBMkQ7SUFDM0Qsb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsWUFBWTtJQUNaLG1KQUFtSjtJQUNuSixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLDJEQUEyRDtJQUMzRCxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFdBQVc7SUFDWCw4QkFBOEI7SUFDOUIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsMEJBQTBCO0FBQzlCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1waW5rOiAjZGQ4OGFhO1xcbiAgICAtLWJsdWU6ICM1NWFhZGQ7XFxuICAgIC0tcmVkOiAjZmYwMDY2O1xcbiAgICAtLXJlZC10OiByZ2JhKDI1MCwwLDcwLCAwLjMpXFxufVxcblxcbkBmb250LWZhY2V7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ3VzdG9tRm9udFxcXCI7XFxuICAgIHNyYzogdXJsKFxcXCIuL0JpZ0ZvbnQud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLFxcbiAgICAgICAgdXJsKFxcXCIuL0JpZ0ZvbnQud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDg4dmg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgbGVmdCwgdmFyKC0tcGluayksIHZhcigtLWJsdWUpKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5uYXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtc2hyaW5rOiA1O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGdhcDogNnZ3O1xcbn1cXG5cXG5idXR0b257XFxuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBib3JkZXI6IHNvbGlkIDVweCB2YXIoLS1ibHVlKTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgdmFyKC0tcmVkKSwgdmFyKC0tcGluaykpO1xcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIkN1c3RvbUZvbnRcXFwiXFxufVxcblxcbmJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgd2hpdGUsIHZhcigtLXBpbmspKTtcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgbWF4LWhlaWdodDogMTAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiQ3VzdG9tRm9udFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg0dncgKyA0dmgpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMjBweCAzMHB4IDBweDtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMS8zO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAxMnB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoLS1waW5rKSwgdmFyKC0tYmx1ZSkpO1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MHB4LCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MDBweCwgMWZyKSk7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNoZWFkbGluZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1zaHJpbms6IDQ7XFxuICAgIG1hcmdpbjogMjBweDtcXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjYWxjKDF2aCArIDF2dyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGdyaWQtYXJlYTogMy8gMS8gMyAvMztcXG59XFxuXFxuXFxuI2xvZ297XFxuICAgIGdyaWQtYXJlYTogMi8xLzIvMztcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG59XFxuXFxuLm1lbnUtaXRlbXtcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEwMCUsIDFmcikpO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA4NSU7IFxcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLXQpO1xcbiAgICBib3JkZXI6IHNvbGlkIDEwcHggd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJveC1zaGFkb3c6IDE1cHggMTVweCAzNXB4O1xcbn1cXG5cXG5cXG4uaXRlbS1oZWFkZXJ7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIkN1c3RvbUZvbnRcXFwiO1xcbiAgICBmb250LXNpemU6IGNhbGMoMXZoICsgMXZ3KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaXRlbS1kZXNjcmlwdGlvbiwgLml0ZW0tcHJpY2V7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmFib3V0LWhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMS80O1xcbiAgICBmb250LWZhbWlseTogXFxcIkN1c3RvbUZvbnRcXFwiO1xcbiAgICBmb250LXNpemU6IGNhbGMoNHZ3ICsgNHZoKTtcXG59XFxuXFxuLmFib3V0LXRleHR7XFxuICAgIGdyaWQtYXJlYTogMi8yLzIvMjtcXG59XFxuXFxuLmFib3V0LWNvbnRhY3R7XFxuICAgIGdyaWQtYXJlYTogMy8yLzMvMztcXG59XFxuXFxuLmFib3V0LXRleHQsIC5hYm91dC1jb250YWN0e1xcbiAgICBmb250LXNpemU6IGNhbGMoMXZ3ICsgMXZoKTsgXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmFib3V0LWhlYWRlciwgLmFib3V0LXRleHQsIC5hYm91dC1jb250YWN0e1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gYWJvdXRQYWdlKCl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpOyAgICBcbiAgICBcbiAgICBjb25zdCBhYm91dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKVxuICAgIGNvbnN0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGNvbnN0IGFib3V0Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbiAgICBhYm91dFVzLmNsYXNzTGlzdC5hZGQoXCJhYm91dC10ZXh0XCIpXG4gICAgYWJvdXRVcy50ZXh0Q29udGVudCA9IFwiQXQgTWVsb29ucywgaXQncyBub3QganVzdCBhYm91dCB0aGUgZm9vZCDigJMgaXQncyBhYm91dCB0aGUgZXhwZXJpZW5jZS4gT3VyIGZyaWVuZGx5IHN0YWZmLCBiZWFjaC10aGVtZWQgZMOpY29yLCBhbmQgdXBiZWF0IGF0bW9zcGhlcmUgbWFrZSBNZWxvb25zIHRoZSBwZXJmZWN0IHNwb3QgZm9yIGFueSBvY2Nhc2lvbi4gV2hldGhlciB5b3UncmUgY2VsZWJyYXRpbmcgYSBzcGVjaWFsIGV2ZW50LCBlbmpveWluZyBhIGNhc3VhbCBtZWFsIHdpdGggZnJpZW5kcywgb3IganVzdCBsb29raW5nIGZvciBhIHBsYWNlIHRvIGtpY2sgYmFjayBhbmQgcmVsYXgsIHlvdSdsbCBmZWVsIHJpZ2h0IGF0IGhvbWUgYXQgTWVsb29ucy5cIlxuICAgIFxuICAgIGFib3V0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1oZWFkZXJcIilcbiAgICBhYm91dEhlYWRlci50ZXh0Q29udGVudCA9IFwiQWJvdXQgTWVsb29uc1wiXG5cbiAgICBhYm91dENvbnRhY3QuY2xhc3NMaXN0LmFkZChcImFib3V0LWNvbnRhY3RcIilcbiAgICBhYm91dENvbnRhY3QudGV4dENvbnRlbnQgPSBcIkhhdmUgcXVlc3Rpb25zIG9yIG5lZWQgbW9yZSBpbmZvcm1hdGlvbj8gRmVlbCBmcmVlIHRvIHJlYWNoIG91dCB0byB1cyBhdCByZWFsbWFpbEBmYWtlLmNvbS4gV2UnZCBsb3ZlIHRvIGhlYXIgZnJvbSB5b3UhXCJcblxuICAgIGRpdi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXIpXG4gICAgZGl2LmFwcGVuZENoaWxkKGFib3V0VXMpXG4gICAgZGl2LmFwcGVuZENoaWxkKGFib3V0Q29udGFjdClcbn1cblxuZXhwb3J0IHtcbiAgICBhYm91dFBhZ2Vcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLGF0dHJpYnV0ZSl7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGUsXG4gICAgICAgIHRoaXMuYXR0cmlidXRlID0gYXR0cmlidXRlXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVFbGVtZW50KGF0ck5hbWUsIGNvbnRlbnQpe1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnR5cGUpXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMuYXR0cmlidXRlLCBhdHJOYW1lKVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudFxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgbGFuZGluZ1BhZ2UgfSBmcm9tIFwiLi9sb2FkLXBhZ2VcIjtcbmltcG9ydCB7IG1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudS1wYWdlXCI7XG5pbXBvcnQgeyBhYm91dFBhZ2UgfSBmcm9tIFwiLi9hYm91dC1wYWdlXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5cbmxhbmRpbmdQYWdlKCk7XG5cbmNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFib3V0XCIpO1xuXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsYW5kaW5nUGFnZSk7XG5tZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtZW51UGFnZSk7XG5hYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWJvdXRQYWdlKTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5pbXBvcnQgTWVsb29ucyBmcm9tIFwiLi9tZWxvb24ucG5nXCI7XG5cbmNvbnN0IGxhbmRpbmdQYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgaGVhZGVyID0gbmV3IENvbXBvbmVudChcImgxXCIsIFwiaWRcIik7XG4gICAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGhlYWRlci5nZW5lcmF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwgXCJXZWxsY29tZSB0byBNZWxvb25zIVwiKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgICBjb25zdCBoZWFkTGluZSA9IG5ldyBDb21wb25lbnQoXCJwXCIsIFwiaWRcIilcbiAgICBjb25zdCBoZWFkTGluZUVsZW1lbnQgPSBoZWFkTGluZS5nZW5lcmF0ZUVsZW1lbnQoXG4gICAgICAgIFwiaGVhZGxpbmVcIixcbiAgICAgICAgXCJNZWxvb25zIHN0YW5kcyBvdXQgZm9yIGl0cyB1bmlxdWUgYmxlbmQgb2YgZGVsaWNpb3VzLCBoZWFydHkgZm9vZCwgYSBmdW4gYW5kIGxpdmVseSBhdG1vc3BoZXJlLCBhbmQgZnJpZW5kbHkgc2VydmljZS4gT3VyIG1lbnUgZmVhdHVyZXMgYSB2YXJpZXR5IG9mIG1vdXRoLXdhdGVyaW5nIGRpc2hlcyBwZXJmZWN0IGZvciBhbnkgYXBwZXRpdGUsIGFuZCBvdXIgdmlicmFudCwgd2VsY29taW5nIGVudmlyb25tZW50IGVuc3VyZXMgZXZlcnkgdmlzaXQgaXMgYSBtZW1vcmFibGUgZXhwZXJpZW5jZS4gV2hldGhlciB5b3UncmUgaGVyZSBmb3IgdGhlIGdhbWUsIGEgbWVhbCB3aXRoIGZyaWVuZHMsIG9yIGp1c3QgdG8gdW53aW5kLCBNZWxvb25zIGlzIHRoZSB1bHRpbWF0ZSBkZXN0aW5hdGlvbiBmb3IgZ3JlYXQgZm9vZCBhbmQgZ29vZCB0aW1lcy5cIlxuICAgIClcblxuICAgIGNvbnN0IGxvZ29JbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgbG9nb0ltYWdlLnNyYyA9IE1lbG9vbnNcbiAgICBsb2dvSW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dvXCIpXG5cbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIlwiXG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRWxlbWVudCk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGxvZ29JbWFnZSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRMaW5lRWxlbWVudCk7XG59O1xuXG5leHBvcnQge1xuICAgIGxhbmRpbmdQYWdlXG59XG4iLCJmdW5jdGlvbiBtZW51UGFnZSgpIHtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBkaXYudGV4dENvbnRlbnQgPSBcIlwiXG5cbiAgICBjb25zdCBpdGVtc051bWJlciA9IDlcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBpdGVtc051bWJlcjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBpdGVtcy5jbGFzc0xpc3QuYWRkKGBtZW51LWl0ZW1gKVxuICAgICAgICBpdGVtcy5jbGFzc0xpc3QuYWRkKGBpdGVtLSR7aX1gKVxuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcIml0ZW0taGVhZGVyXCIpXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiaXRlbS1kZXNjcmlwdGlvblwiKVxuXG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgICAgcHJpY2UuY2xhc3NMaXN0LmFkZChgaXRlbS1wcmljZWApXG4gICAgICAgIFxuICAgICAgICBpZihpID09PSAxKXtcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGBNZWxvb25zIE1lZ2EgV2luZ3NgXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGBBIGdlbmVyb3VzIHBvcnRpb24gb2Ygb3VyIHNpZ25hdHVyZSBqdW1ibyBjaGlja2VuIHdpbmdzLCBwZXJmZWN0bHkgY3Jpc3B5IGFuZCB0b3NzZWQgaW4geW91ciBjaG9pY2Ugb2Ygc2F1Y2UsIGZyb20gY2xhc3NpYyBidWZmYWxvIHRvIGhvbmV5IGJhcmJlY3VlLiBTZXJ2ZWQgd2l0aCBjZWxlcnkgc3RpY2tzIGFuZCBibHVlIGNoZWVzZSBkcmVzc2luZy5gXG4gICAgICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IGBQcmljZTogMTUuOTkkYFxuICAgICAgICB9ZWxzZSBpZihpID09PSAyKXtcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQmVhY2ggQmFiZSBCdXJnZXJzXCIgXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQSBoYWxmLXBvdW5kIGJlZWYgcGF0dHkgZ3JpbGxlZCB0byBwZXJmZWN0aW9uLCB0b3BwZWQgd2l0aCBjcmlzcHkgYmFjb24sIG1lbHRlZCBjaGVkZGFyIGNoZWVzZSwgbGV0dHVjZSwgdG9tYXRvLCBhbmQgb3VyIHNwZWNpYWwgTWVsb29ucyBzYXVjZSwgYWxsIHNhbmR3aWNoZWQgYmV0d2VlbiBhIHRvYXN0ZWQgYnJpb2NoZSBidW4uIFNlcnZlZCB3aXRoIGEgc2lkZSBvZiBzZWFzb25lZCBmcmllcy5cIlxuICAgICAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBcIlByaWNlOiAxNC40OSRcIlxuICAgICAgICB9ZWxzZSBpZihpID09PSAzKXtcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiU2l6emxpbicgU2hyaW1wIFNrZXdlcnNcIiBcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJNYXJpbmF0ZWQgc2hyaW1wIHNrZXdlcnMgZ3JpbGxlZCB0byBhIHN1Y2N1bGVudCBmaW5pc2gsIHNlcnZlZCB3aXRoIGEgc2lkZSBvZiBnYXJsaWMgYnV0dGVyIGRpcHBpbmcgc2F1Y2UgYW5kIGEgZnJlc2ggZ2FyZGVuIHNhbGFkLlwiXG4gICAgICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IFwiUHJpY2U6IDE2Ljk5JFwiXG4gICAgICAgIH1lbHNlIGlmKGkgPT09IDQpe1xuICAgICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJTdW5zZXQgUXVlc2FkaWxsYXNcIiBcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJMYXJnZSBmbG91ciB0b3J0aWxsYXMgZmlsbGVkIHdpdGggYSBibGVuZCBvZiBjaGVlc2VzLCBncmlsbGVkIGNoaWNrZW4gb3IgYmVlZiwgc2F1dMOpZWQgcGVwcGVycywgYW5kIG9uaW9ucy4gU2VydmVkIHdpdGggc291ciBjcmVhbSwgZ3VhY2Ftb2xlLCBhbmQgc2Fsc2Egb24gdGhlIHNpZGUuXCJcbiAgICAgICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gXCJQcmljZTogMTIuOTkkXCJcbiAgICAgICAgfWVsc2UgaWYoaSA9PT0gNSl7XG4gICAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlNlYXNpZGUgQ2Flc2FyIFNhbGFkXCIgXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQ3Jpc3Agcm9tYWluZSBsZXR0dWNlLCBQYXJtZXNhbiBjaGVlc2UsIGFuZCBnYXJsaWMgY3JvdXRvbnMgdG9zc2VkIGluIG91ciBjcmVhbXkgQ2Flc2FyIGRyZXNzaW5nLiBBZGQgZ3JpbGxlZCBjaGlja2VuLCBzaHJpbXAsIG9yIHNhbG1vbiBmb3IgYW4gYWRkaXRpb25hbCBjaGFyZ2VcIlxuICAgICAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBcIlByaWNlOiAxMC45OSRcIlxuICAgICAgICB9ZWxzZSBpZihpID09PSA2KXtcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiVHJvcGljYWwgVGFjb3NcIiBcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJTb2Z0IGNvcm4gdG9ydGlsbGFzIGZpbGxlZCB3aXRoIHlvdXIgY2hvaWNlIG9mIGdyaWxsZWQgZmlzaCwgc2hyaW1wLCBvciBjaGlja2VuLCB0b3BwZWQgd2l0aCBhIHplc3R5IHNsYXcsIGF2b2NhZG8gc2xpY2VzLCBhbmQgYSBkcml6emxlIG9mIGNpbGFudHJvLWxpbWUgc2F1Y2UuIFNlcnZlZCB3aXRoIGEgc2lkZSBvZiBibGFjayBiZWFucyBhbmQgcmljZS5cIlxuICAgICAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBcIlByaWNlOiAxMy45OSRcIlxuICAgICAgICB9ZWxzZSBpZihpID09PSA3KXtcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiSXNsYW5kIE5hY2hvc1wiIFxuICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkEgaGVhcGluZyBwbGF0ZSBvZiBjcmlzcHkgdG9ydGlsbGEgY2hpcHMgbG9hZGVkIHdpdGggbWVsdGVkIGNoZWVzZSwgamFsYXBlw7FvcywgYmxhY2sgb2xpdmVzLCB0b21hdG9lcywgZ3JlZW4gb25pb25zLCBhbmQgeW91ciBjaG9pY2Ugb2Ygc2Vhc29uZWQgYmVlZiBvciBjaGlja2VuLiBTZXJ2ZWQgd2l0aCBzb3VyIGNyZWFtLCBndWFjYW1vbGUsIGFuZCBzYWxzYS5cIlxuICAgICAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBcIlByaWNlOiAxMS45OSRcIlxuICAgICAgICB9ZWxzZSBpZihpID09PSA4KXtcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiTWVsb29ucyBMb2FkZWQgRnJpZXNcIiBcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBIG1vdW50YWluIG9mIGNyaXNweSBmcmllcyBzbW90aGVyZWQgaW4gbWVsdGVkIGNoZWVzZSwgYmFjb24gYml0cywgZ3JlZW4gb25pb25zLCBhbmQgYSBkcml6emxlIG9mIHJhbmNoIGRyZXNzaW5nLiBQZXJmZWN0IGZvciBzaGFyaW5nIVwiXG4gICAgICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IFwiUHJpY2U6IDkuOTkkXCJcbiAgICAgICAgfWVsc2UgaWYoaSA9PT0gOSl7XG4gICAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlBpbmVhcHBsZSBQYXJhZGlzZSBDaGVlc2VjYWtlXCIgXG4gICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQSBjcmVhbXkgTmV3IFlvcmstc3R5bGUgY2hlZXNlY2FrZSB0b3BwZWQgd2l0aCBhIHN3ZWV0IHBpbmVhcHBsZSBnbGF6ZSBhbmQgd2hpcHBlZCBjcmVhbS4gQSB0cm9waWNhbCB0d2lzdCBvbiBhIGNsYXNzaWMgZGVzc2VydC5cIlxuICAgICAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBcIlByaWNlOiA3LjQ5JFwiXG4gICAgICAgIH1cblxuICAgICAgICBpdGVtcy5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgICAgICBpdGVtcy5hcHBlbmRDaGlsZChwcmljZSlcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbXMpXG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIG1lbnVQYWdlXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=