(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ 2:
/*!*****************************************************************************************************!*\
  !*** multi ./src/styles.css ./src/assets/football/css/reset.css ./src/assets/football/css/main.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/santhosh/Videos/angular_code/Free-Kicks/src/styles.css */"OmL/");
__webpack_require__(/*! /home/santhosh/Videos/angular_code/Free-Kicks/src/assets/football/css/reset.css */"RGh+");
module.exports = __webpack_require__(/*! /home/santhosh/Videos/angular_code/Free-Kicks/src/assets/football/css/main.css */"Pt3N");


/***/ }),

/***/ "6vIU":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/assets/football/css/reset.css ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "a, abbr, acronym, address, applet, article, aside, audio,\nb, blockquote, big, body,\ncenter, canvas, caption, cite, code, command,\ndatalist, dd, del, details, dfn, dl, div, dt,\nem, embed,\nfieldset, figcaption, figure, font, footer, form,\nh1, h2, h3, h4, h5, h6, header, hgroup, html,\ni, iframe, img, ins,\nkbd,\nkeygen,\nlabel, legend, li,\nmeter,\nnav,\nobject, ol, output,\np, pre, progress,\nq,\ns, samp, section, small, span, source, strike, strong, sub, sup,\ntable, tbody, tfoot, thead, th, tr, tdvideo, tt,\nu, ul,\nvar{\n    background: transparent;\n    border: 0 none;\n    font-size: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\toutline: 0;\n    vertical-align: top; }\n\nol, ul {\n\tlist-style: none;\n}\n\nblockquote, q {\n\tquotes: none;\n}\n\ntable, table td {\n\tpadding:0;\n\tborder:none;\n\tborder-collapse:collapse;\n}\n\nimg {\n\tvertical-align:top;\n}\n\nembed {\n\tvertical-align:top;\n}", "",{"version":3,"sources":["webpack://src/assets/football/css/reset.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;IAoBI,uBAAuB;IACvB,cAAc;IACd,eAAe;CAClB,SAAS;CACT,UAAU;CACV,SAAS;CACT,UAAU;IACP,mBAAmB,EAAE;;AAEzB;CACC,gBAAgB;AACjB;;AACA;CACC,YAAY;AACb;;AACA;CACC,SAAS;CACT,WAAW;CACX,wBAAwB;AACzB;;AACA;CACC,kBAAkB;AACnB;;AACA;CACC,kBAAkB;AACnB","sourcesContent":["a, abbr, acronym, address, applet, article, aside, audio,\nb, blockquote, big, body,\ncenter, canvas, caption, cite, code, command,\ndatalist, dd, del, details, dfn, dl, div, dt,\nem, embed,\nfieldset, figcaption, figure, font, footer, form,\nh1, h2, h3, h4, h5, h6, header, hgroup, html,\ni, iframe, img, ins,\nkbd,\nkeygen,\nlabel, legend, li,\nmeter,\nnav,\nobject, ol, output,\np, pre, progress,\nq,\ns, samp, section, small, span, source, strike, strong, sub, sup,\ntable, tbody, tfoot, thead, th, tr, tdvideo, tt,\nu, ul,\nvar{\n    background: transparent;\n    border: 0 none;\n    font-size: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\toutline: 0;\n    vertical-align: top; }\n\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\ntable, table td {\n\tpadding:0;\n\tborder:none;\n\tborder-collapse:collapse;\n}\nimg {\n\tvertical-align:top;\n}\nembed {\n\tvertical-align:top;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "OmL/":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "W9N5");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "Pt3N":
/*!******************************************!*\
  !*** ./src/assets/football/css/main.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--12-1!../../../../node_modules/postcss-loader/src??embedded!./main.css */ "puCi");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "RGh+":
/*!*******************************************!*\
  !*** ./src/assets/football/css/reset.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--12-1!../../../../node_modules/postcss-loader/src??embedded!./reset.css */ "6vIU");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "W9N5":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\n", "",{"version":3,"sources":["webpack://src/styles.css"],"names":[],"mappings":"AAAA,8EAA8E","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "puCi":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/assets/football/css/main.css ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "root { \n  display: block;\n}\n\nbody{\n  background-color: #b7b7b7;\n  background-repeat: repeat-x;\n  background-position: top;\n  background-image: url('bg_tile.jpg');  \n  /* min-width: 760px; */\n}\n\n*, *:before, *:after {\n  -webkit-user-select: none;\n  user-select: none;\n}\n\ninput, input:before, input:after {\n  -webkit-user-select: initial;\n  user-select: initial;\n}\n\n::selection { background: transparent;color:inherit; }\n\n::-moz-selection { background: transparent;color:inherit; }\n\n#canvas{\n  position: fixed;\n}\n\ncanvas {\n  image-rendering: optimizeSpeed;\n  image-rendering:-o-crisp-edges;\n  image-rendering:-webkit-optimize-contrast;\n  -ms-interpolation-mode: nearest-neighbor;\n-ms-touch-action: none;\n}\n\n.ani_hack{\n  -webkit-perspective: 1000;\n  -webkit-backface-visibility: hidden;\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  outline: none;\n  -webkit-tap-highlight-color: transparent; /* mobile webkit */\n}\n\n/***************FONTS*******************/\n\n@font-face {\n  font-family: 'blackplotanregular';\n  src: url('blackplotan-webfont.eot');\n  src: url('blackplotan-webfont.eot?#iefix') format('embedded-opentype'),\n       url('blackplotan-webfont.woff2') format('woff2'),\n       url('blackplotan-webfont.woff') format('woff'),\n       url('blackplotan-webfont.ttf') format('truetype'),\n       url('blackplotan-webfont.svg#blackplotanregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n\n}\n\n.Wrap {\n  width: 40vw;\n  height: 25vh;\n  left: 32%;\n  bottom: 0vw;\n  position: absolute;\n  background: #F4F4F4;\n  border-radius: 25px 25px 0px 0px;\n}\n\n.betAmount {\n  width: 100%;\n  height: 47px;\n  display: flex;\n  text-align: center;\n  padding-top: 10px;\n}\n\n.btn-bet {\n  width: 30%;\n  height: 10%;\n  height: 35px;\n  position: relative;\n  top: 5px;\n  left: 8px;\n  background-image: url('inactive-btn.svg');\n  background-size: cover;\n  color: white;\n  text-align: center;\n  padding-top: 2%;\n}\n\n.btn-bet.active {\n  background-image: url('active-btn.svg');\n}\n\n.tab .tablinks {\n  width: 14vw;\n  height: 34px;\n  background: center center no-repeat;\n  background-size: contain;\n  display: inline-block;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-family: \"Microsoft Yahei\", Helvetica, Arial, sans-serif;\n  font-weight: bold;\n  font-size: 0.7em;\n  color: green;\n  cursor: pointer;\n}\n\n.levels {\n  display: inline-flex;\n  color: #262626;\n  font-size: 12px;\n  padding-left: 10px;\n  font-weight: bold;\n  min-width: 42%;\n  border-radius: 15px;\n  background-color: #AAA9A9;\n  position: relative;\n  margin-left: 5px;\n}\n\n.soccer-ball-icon {\n  position: inherit;\n  float: right;\n  right: -10px;\n  width: 41%;\n}\n\n.cashOut {\n  position: absolute;\n  bottom: 9%;\n  right: 10px;\n  width: 9%;\n}\n\n#stakeAmount {\n  margin: 0;\n  border-radius: 34px;\n  height: 1.4em;\n  padding: .4em;\n  outline: 0;\n  color: #333;\n  border-color: silver !important;\n  text-align: center;\n  left: 6%;\n  position: relative;\n  width: 18vw !important;\n}\n\ninput:focus{\n  box-shadow: 0 0 12px #38c;\n}\n\n.stake-cont {\n  font-size: 16px;\n  color: black;\n  top: 15%;\n  left: 4%;\n  position: relative;\n  margin-right: 20px;\n}\n\n/* demo code */\n\n.tab1 {\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  /* padding: 0 10px; */\n  width: 72%;\n  /* height: 31px; */\n  margin-top: -7%;\n  /* background: linear-gradient( \n45deg\n, #747474, #3A3A3A); */\n  border-bottom: 35px solid  #747474;\n  border-left: 25px solid transparent;\n  border-right: 25px solid transparent;\n}\n\n.ui-page-theme-a .ui-body-inherit, html .ui-bar-a .ui-body-inherit, html .ui-body-a .ui-body-inherit, html body .ui-group-theme-a .ui-body-inherit, html .ui-panel-page-container-a {\n  background-color: #fff;\n  border-color: #ddd;\n  color: #333;\n  border-radius: 25px;\n  text-shadow: 0 1px 0 #f3f3f3;\n}\n\n.icon{\n  position: relative;\n  bottom: 94%;\n  width: 112px;\n  height: 99px;\n}\n\n* {\n  font-style: Arial white 20px;\n}\n\n.field {\n  position: absolute;\n  margin: 0 auto;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n}\n\n.controls{\n  z-index: 999999;\n  position: relative;\n\n}\n\n.volume\n{\n  left: 83%;\n  top: 5%;\n  position: absolute;\n}\n\n.volume-icon{\n  position: relative;\n  left:30px; \n  top:5px;\n}\n\n.unmute\n{\n  position: relative;\n  left:30px;\n  background-image: url('volume-mute-icon.svg');\n}\n\n.closeicon\n{\n  position: relative;\n  left: 32px;\n  top:5px;\n\n}\n\n.timer\n{\n  position: absolute;\n  right: 0% !important;\n  top: 20%;\n  background-image: url('timer-bg.svg');\n  background-repeat: no-repeat;\n  width: 100px;\n  height: 100px;\n  z-index: 22;\n  display: none;\n}\n\n@media only screen and (max-width: 800px) {\n  .timer {\n    right: -2%;\n    top: 15%;\n\n  }\n}\n\n#time{\n  position: relative;\n  top: 15px;\n  left: 26px;\n  color: #fff;\n  font-size: 30px;\n  font-weight: bold;\n}\n\n#seconds{\n  position: relative;\n  top: 12px;\n  left: 15px;\n  color: #fff;\n}\n\n.attempt {\n  position: relative;\n  display: inline-flex;\n  border: 8px solid rgba(111, 100, 100, 0.6);\n  background: rgba(100, 100, 119, 0.6);\n  border-radius: 100%;\n  height: 70%;\n  width: 70%;\n}\n\n.goal_post\n{\n  display: flex;\n  justify-content: center;\n  position: relative;\n  /* top: 26px;\n  left: 31%;\n  height: 275px; */\n  height: 43%;\n  max-width: 799px;\n}\n\n#goal_post{\n  height: 179px;\n  margin-top: 13px;\n}\n\n.goal {\n      background: rgba(0, 255, 0, 0.9);\n}\n\n.missed {\n  background: rgba(255, 0, 0, 0.9);\n}\n\n#audio {\n  background: red;\n}\n\n#ball{\n  position: absolute;\n  bottom:0%;\n  /* padding: 50% 20% 0 60%; */\n}\n\n.ballLeftL0,.ballLeftL1,.ballLeftL2,.ballLeftL3,.ballLeftR0,.ballLeftR1,.ballLeftR2,.ballLeftR3, .ballOut, .ballCatched {\n  transition: all 0.8s;\n  opacity: 60%;\n}\n\n.ballLeft {\n  transform: scale(.3) translate(-550px, -848px)!important;\n  /*transition: all 0.8s;\n  opacity: 60%;*/\n}\n\n.ballCatched {\n  transform: scale(.4) translate(70px, -261px)!important;\n  /*transition: all 0.8s;\n  opacity: 60%;*/\n}\n\n.ballOut {\n  transform: scale(.2) translate(-20px, -204px)!important;\n  /*transition: all 0.8s;\n  opacity: 60%;*/\n}\n\n.ballLeftL0 {\n  transform: scale(.3) translate(-50px, -430px)!important;\n}\n\n.ballLeftL1 {\n  transform: scale(.3) translate(-706px, -430px)!important;\n}\n\n.ballLeftL2 {\n  transform: scale(.3) translate(-1068px, -230px)!important;\n}\n\n.ballLeftL3 {\n  transform: scale(.3) translate(-650px, -148px)!important;\n}\n\n.ballLeftR0 {\n  transform: scale(.3) translate(-20px, -460px)!important;\n}\n\n.ballLeftR1 {\n  transform: scale(.3) translate(-1068px, -430px)!important;\n}\n\n.ballLeftR2 {\n  transform: scale(.3) translate(-20px, -191px)!important;\n}\n\n.ballLeftR3 {\n  transform: scale(.3) translate(-20px, -148px)!important;\n}\n\n#keepDiv{\n  position: absolute;\n  bottom: 14%;\n  width: 100%;\n}\n\n#keeper_center_down{\n  position: absolute;\n  bottom: 14%;\n  width: 100%;\n  left: 53%;\n}\n\n#keeper_center_up{\n  position: absolute;\n  bottom: 24%;\n  width: 100%;\n  left: 34%;\n}\n\n#keeper_save_left{\n  position: absolute;\n  bottom: 14%;\n  width: 100%;\n  left: 34%;\n}\n\n#keeper_save_right{\n  position: absolute;\n  bottom: 14%;\n  width: 100%;\n  left: 34%;\n}\n\n#keeper_save_down_left{\n  position: absolute;\n  bottom: 14%;\n  width: 100%;\n  left: 34%;\n}\n\n#keeper_save_down_right{\n  position: absolute;\n  bottom: 14%;\n  width: 100%;\n  left: 34%;\n}\n\n.logo_icon\n{\n  position: absolute;\n  top: 20px;\n  width: 14%;\n  left: 20px;\n}\n\n#ballDiv{\n  position:relative;\n  bottom: 33%;\n  left: 29%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n#info-icon{\n\n  bottom: 32%;\n  left: 671px;\n\n}\n\n.infoimg\n{\n  top: 253px;\n    position: absolute;\n    right: 3%;\n}\n\n.showOdd\n{\n  top: 200px;\n    position: absolute;\n    right: 3%;\n}\n\n.popup\n{\n  position: absolute;\n    top: 6%;\n    background: white;\n    width: 60%;\n    left: 23%;\n    height: 59%;\n    border-radius: 25px;\n}\n\n.popup2{\n    position: relative;\n    top: -107%;\n    background: white;\n    width: 50%;\n    left: 31%;\n    height: 44%;\n    border-radius: 25px;\n}\n\n.popup_text\n{\n  top: 16px;\n  position: relative;\n  margin:12%;\n  font-size: 12px;\n text-align: justify;\n  color: #333;\n}\n\n.popup_text2\n{\n  margin: 3%;\n  position: relative;\n  list-style-type: none;\n  height: 60%;\n  overflow: scroll;\n  top:3px;\n  text-align: justify;\n  width: 73%;\n  font-size: 12px;\n  text-align: inherit;\n  color: #333;\n}\n\n#hide-div\n{\n  position: relative;\n  left: 63%;\n  top: 10%;\n}\n\n.btn_left\n{\n  background-size: cover;\n  color: white;\n  text-align: center;\n  padding-top: 7px;\n  width: 27%;\n  height: 35px;\n  background-repeat: no-repeat;\n  position: relative;\n    left: 5%;\n    top: 6%;\n    float: left;\n    background-image: url('instruction-btn-inactive.svg');\n}\n\n.btn_right {\n  background-size: cover;\n  height: 35px;\n  width: 27%;\n  background-repeat: no-repeat;\n  left: -39%;\n  color:white;\n  text-align: center;\n  padding-top: 7px;\n  position: relative;\n  top: 6%;\n  float: right;\n  background-image: url('instruction-btn-inactive.svg');\n}\n\n.activetab\n{\n  width: 27%;\n  height: 35px;\n  background-image: url('game-info-btn-active.svg'); \n  padding-top: 7px;\n}\n\n.active .inactive\n{\n  display: flex;\n}\n\n#goalkeeper {\n  margin: 0px auto;\n  display: block;\n  width: 123px;\n}\n\n#keeper {\n  margin: 0px auto;\n  display: block;\n  width: 123px;\n}\n\n#keeper_up\n{\n  margin: 0px auto;\n  display: block;\n  width: 123px;\n}\n\n#keeper_down_left\n{\n  margin: 0px auto;\n  display: block;\n  width: 346px;\n}\n\n#keeper_up\n{\n  margin: 0px auto;\n  display: block;\n  width: 123px;\n}\n\n#keeper_up\n{\n  margin: 0px auto;\n  display: block;\n  width: 123px;\n}\n\n#keeper_up\n{\n  margin: 0px auto;\n  display: block;\n  width: 123px;\n}\n\n.bg-block {\n  position:absolute;\n  top: -311px;\n  left: 53px;\n  bottom: 0;\n  right: 0;\n  width: 127px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n}\n\n.bg-block.active {\n      filter: alpha(opacity=100);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity:1;\n}\n\n.bg-block-keeper{\n  position:absolute;\n  top: -311px;\n  left: 53px;\n  bottom: 0;\n  right: 0;\n  width: 127px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n}\n\n.bg-block-keeper.active {\n      filter: alpha(opacity=100);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity:1;\n}\n\n.bg-block-keeper-up {\n  position:absolute;\n  top: -311px;\n  left: 53px;\n  bottom: 0;\n  right: 0;\n  width: 127px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n}\n\n.bg-block-keeper-up.active {\n      filter: alpha(opacity=100);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity:1;\n}\n\n.bg-block-keeper_down_left {\n  position:absolute;\n  top: -311px;\n  left: 53px;\n  bottom: 0;\n  right: 0;\n  width: 127px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n}\n\n.bg-block-keeper_down_left.active {\n      filter: alpha(opacity=100);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity:1;\n}\n\n.inputName {\n  background-color: white;\n}\n\n.keeperMissed {\n\n  filter: alpha(opacity=100);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity:1;\n  transition: all 0.8s;\n  opacity: 60%;\n }\n\n.keeperCatched {\n\n  filter: alpha(opacity=100);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity:1;\n\n  transition: all 0.8s;\n  opacity: 60%;\n\n}\n\n.hide {\n  opacity: 0;\n  top: -60%;\n  position: absolute;\n  left: 28px;\n}\n\n.pop {\n  position: relative;\n  font: caption;\n  color: yellow;\n  opacity: 100;\n  height: 20px;\n  width: 230px;\n  background-color: rgba(0, 0, 0, 0.2);\n  border: yellow 1px solid;\n  border-radius: 5px;\n  left: 2%;\n  bottom: 16%;\n  text-align: center;\n  padding-top: 1px;\n}\n\n#notGoal.pop {\n  color: rgba(255, 0, 0, 1);\n  border: 1px rgba(255, 0, 0, 1) solid;\n  bottom: 20%;\n}\n\n#goal.pop {\n  color: rgba(0, 255, 0, 1);\n  border: 1px rgba(0, 255, 0, 1) solid;\n  bottom: 18%;\n}\n\n#mydiv{\n\n  color: #fff;\n  width: 799px;\n  height: 100%;\n  margin: 0px auto;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: contain;\n\n}\n\n#ball{\n      user-select: none;\n-moz-user-select: none;\n-webkit-user-drag: none;\n-webkit-user-select: none;\n-ms-user-select: none;\n}\n\n.panel {\n  width: 100%;\n  background-color: white;\n  top: 86%;\n  position: absolute;\n}\n\n.minus, .plus{\n  position: relative;\n  width: 10%;\n  height: 58%;\n  top: 3px;\n  /* left: 70px; */\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n}\n\n.minus\n{\nleft: 17%;\nz-index: 1;\n}\n\n.plus\n{\n  left: -5%;\n}\n\n.tab {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 10px;\n  top: 23px;\n  width: 98%;\n  height: 15vh;\n  background: linear-gradient(45deg, #c7c7c7, #BFBFBF);\n}\n\n.play{\n  border: 1px solid green;\n  text-align: center;\n  border-radius: 5px;\n  background: linear-gradient( \n45deg\n, #2AD931, #257402);\n  width: 15%;\n  height: 33%;\n  position: absolute;\n  left: 50%;\n  color: white;\n  top: -266%;\n  padding-top: 1%;\n}\n\n#level\n{\n  color: black;\n  font-size: 1.2em;\n  font-weight: bold;\n  width: 40%;\n  margin: 0;\n  display: inline;\n}\n\n.bg_play\n{\n  position: absolute;\n    background-color: black;\n    opacity: 50%;\n    width: 100%;\n    height: 165%;\n    left: -29%;\n    top: -27%;\n}\n\n.Wallet\n{\n  top: 25px;\n  position: relative;\n  color: #FFFFFF;\n  font-family: Avenir Next;\n  font-size: 16px;     \n}\n\n.game-play\n{\n  position: absolute;\n  bottom: 40%;\n  left: 50%;\n  width: 10%;\n  display: flex;\n  justify-content: center; \n}\n\n@keyframes sprite {\n  from{background-position-x:0px;}\n      to{background-position-x:-2388px;}\n}\n\n@keyframes gk-ani-save_center_up{\n  from{background-position-x:0px;}\n  to{background-position-x:-2847px;}\n}\n\n@keyframes gk-ani-save_center_down{\n  from{background-position-x:0px;}\n  to{background-position-x:-5694px;}\n}\n\n@keyframes gk-ani-save_down_left{\n  from{background-position-y:0px;}\n  to{background-position-y:-3995px;}\n}\n\n@keyframes ball-roll{\n  from{background-position-x:0px;}\n  to{background-position-x:-1040px;}\n}\n\n.gk-idle {\n  height: 230px;\n  width: 200px;\n  background: url('gk-ani-idle.png');\n  animation: sprite 1.5s steps(12) infinite;\n  position:absolute;\n  /* transform: translate(-25%, -25%) scale(0.5); */\n}\n\n.gk-ani-save_center_up{\n  height: 340px;\n  width: 219px;\n  background: url('gk-ani-save_center_up.png');\n  animation: gk-ani-save_center_up 0.8s steps(13);\n  position:absolute;\n  top: -70px;\n}\n\n.gk-ani-save_center_down{\n  height: 270px;\n  width: 219px;\n  background: url('gk-ani-save_center_down.png');\n  animation: gk-ani-save_center_down 1.5s steps(26);\n  position:absolute;\n}\n\n.gk-ani-save_down_left{\n  height: 235px;\n  width: 535px;\n  background: url('gk-ani-save_down_left.png');\n  animation: gk-ani-save_down_left 1.5s steps(17);\n  position:absolute;\n  left: 0;\n}\n\n.gk-ani-save_down_right{\n  height: 235px;\n  width: 514px;\n  background: url('gk-ani-save_down_right.png');\n  animation: gk-ani-save_down_left 1.5s steps(17);\n  position:absolute;\n  right: 0;\n}\n\n.ball-roll{\n  height: 150px;\n  width: 148.5px;\n  background: url('ball-ani-roll.png');\n  animation: ball-roll 0.3s steps(7) infinite;\n  position:absolute;\n  transform: scale(0.5);\n}\n\n.goal_post div, .goal_post.kicked .gk-idle{\n  display: none;\n}\n\n.goal_post .gk-idle{\n  display: block;\n}\n\n.goal_post.right .gk-ani-save_down_right,\n.goal_post.left .gk-ani-save_down_left,\n.goal_post.up .gk-ani-save_center_up,\n.goal_post.down .gk-ani-save_center_down{\n  display: block;\n}\n\n.gk-ani-save_down_right.paused{\n  animation-duration: 0s;\n  background-position-y: -3481px;\n}\n\n.ball-roll{\n  display: block !important;\n}\n\n.goal_post.kicked #ball{\n  transform: scale(0.8);\n}\n\n.bottom-container{\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n    z-index: 99999999;\n    /* display: none; */\n}\n\n.betvalue p{\n  margin: 0;\n  color: black !important;\n  top: -10px !important;\n  cursor: pointer;\n}\n\n.winBet{\n  color: #8e8a8a;\n  font-size: 9px;\n  font-weight: 900;\n  width: 100%;\n}\n\n.gameWallet{\n  left: -19%;\n  top: 12%;\n  position: relative;\n}\n\n.dg {\n  display: none !important;\n}\n\n.gameBalance, .winningAmount {\n  font-weight: bold;\n  font-size: 1.5em;\n}\n\n.stake-label {\n  font-size: 16px;\n  color: black;\n  top: 15%;\n  left: 13%;\n  position: relative;\n}\n\n.betvalue {\n  display: flex;\n  position: relative;\n  left: 3%;\n  margin-top: 10px;\n}\n\n.show-odds{\n  width: 15vw;\n  position: absolute;\n  top: 19vh;\n  left: 20px;\n  display: none;\n}\n\n.show-odd-cont {\n  /* top: 90%; */\n  /* width: 21%; */\n  position: relative;\n}\n\n.show-odd-cont span {\n  position: absolute;\n  color: #fff;\n  right: 15%;\n  top: 30%;\n  font-size: 3vw;\n  font-weight: bold;\n}\n\n.show-odd-cont img {\n  width: 100%;\n  margin: 5px 0;\n}\n\nspan.odd-gk {\n  width: 20px;\n  left: 13%;\n  font-size: 2vw;\n  top: 15%;\n}\n\n.info-icon {\n  position: absolute;\n  right: 5%;\n  bottom: 30%;\n  z-index: 3;\n}\n\n.orientation{\n  position: fixed;\n  background-color: transparent;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index:99999999;\n  display:none;\n}\n\n.orientation img{\n  width: 100%;\n  height: 100%;\n}\n\n.showScore {\n  position: absolute;\n  color: #fff;\n  right: 17%;\n  bottom: 18vh;\n  font-size: 2.5rem;\n  font-weight: bold;\n  display: none;\n}\n\n.no-pointer{\n  pointer-events: none;\n}\n\n.popup-cont {\n  position: relative;\n  background-color: #fff;\n  width: 50vw;\n  height: 55vh;\n  margin: 0 auto;\n  top: 11vh;\n  z-index: 9;\n  border-radius: 25px;\n}\n\n.header-cont {\n  padding: 30px;\n}\n\n.header-cont button{\n  height: 35px;\n  width: 130px;\n  border: none;\n  cursor: pointer;\n}\n\n.header-cont button.active{\n  background-image: url('active-btn.svg');\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n.body-cont {\n  padding: 5px 30px;\n}\n\n.instruction-content ol {\n  list-style: decimal;\n}\n\n.close-popup {\n  float: right;\n}\n\n.level-cont{\n  position: relative;\n  width: 90px;\n  margin-top: 5px;\n  height: 20px;\n  line-height: 20px;\n}\n\n.alert-red {\n  color: red !important;\n}\n\n.Wallet.left{\n  left:7%;\n}\n\n.Wallet.right{\n  right: 6%;\n}\n\n@media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }\n\n@media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }\n\n@media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }\n\n@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }\n\n@media (min-width:1281px) { /* hi-res laptops and desktops */\n  .icon {\n    position: relative;\n    bottom: 74%;\n    width: 130px;\n    height: 108px;\n    left: 2%;\n}\n.Wrap {\n  height: 18vh;\n} \n.tab {\n  height: 11vh;\n}\n.plus {\n  left: -3%;\n}\n.minus {\n  left: 15%;\n}\n}\n\n@media only screen and (max-width: 850px) {\n  .show-odds {\n   width: 12vw;\n\n  }\n  .stake-label {\n    font-size: 15px;\n  }\n  .icon {\n    width: 14%;\n    height: 145%;\n    top: -73%;\n    left: -1%;\n  }\n  .gameBalance, .winningAmount{\n    font-size: 1.2em;\n  }\n\n.gameWallet{\n  left: -27%;\n}\n\n.Wallet.left{\n  left:3%;\n} \n.Wallet.right{\n  right: 3%;\n}\n.showScore {\n  right: 17%;\n  bottom: 25vh;\n  font-size: 1.5rem;\n  font-weight: bold;\n  display: none;\n}\n.timer {\n  top: 16%;\n}\n.cashOut {\n  bottom: 20%;\n  width: 7%;\n}\nspan.odd-gk {\n  font-size: 1.8vw;\n}\n}", "",{"version":3,"sources":["webpack://src/assets/football/css/main.css"],"names":[],"mappings":"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,2BAA2B;EAC3B,wBAAwB;EACxB,oCAA6C;EAC7C,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EAIzB,iBAAiB;AACnB;;AAEA;EACE,4BAA4B;EAI5B,oBAAoB;AACtB;;AAEA,cAAc,uBAAuB,CAAC,aAAa,EAAE;;AACrD,mBAAmB,uBAAuB,CAAC,aAAa,EAAE;;AAE1D;EACE,eAAe;AACjB;;AAEA;EACE,8BAA8B;EAC9B,8BAA8B;EAC9B,yCAAyC;EACzC,wCAAwC;AAC1C,sBAAsB;AACtB;;AAEA;EACE,yBAAyB;EACzB,mCAAmC;;EAEnC,2BAA2B;EAC3B,yBAAyB;EAIzB,iBAAiB;EACjB,aAAa;EACb,wCAAwC,EAAE,kBAAkB;AAC9D;;AAEA,wCAAwC;;AACxC;EACE,iCAAiC;EACjC,mCAAmC;EACnC;;;;sEAIoE;EACpE,mBAAmB;EACnB,kBAAkB;;AAEpB;;AAIA;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,gCAAgC;AAClC;;AACA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,yCAAgD;EAChD,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AACA;EACE,uCAA8C;AAChD;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mCAAmC;EACnC,wBAAwB;EACxB,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,WAAW;EACX,4DAA4D;EAC5D,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,eAAe;AACjB;;AACA;EACE,oBAAoB;EACpB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,cAAc;EACd,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,gBAAgB;AAClB;;AACA;EACE,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,UAAU;AACZ;;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,SAAS;AACX;;AACA;EACE,SAAS;EACT,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,UAAU;EACV,WAAW;EACX,+BAA+B;EAC/B,kBAAkB;EAClB,QAAQ;EACR,kBAAkB;EAClB,sBAAsB;AACxB;;AACA;EACE,yBAAyB;AAC3B;;AACA;EACE,eAAe;EACf,YAAY;EACZ,QAAQ;EACR,QAAQ;EACR,kBAAkB;EAClB,kBAAkB;AACpB;;AAGA,cAAc;;AACd;EACE,cAAc;EACd,aAAa;EACb,8BAA8B;EAC9B,qBAAqB;EACrB,UAAU;EACV,kBAAkB;EAClB,eAAe;EACf;;sBAEoB;EACpB,kCAAkC;EAClC,mCAAmC;EACnC,oCAAoC;AACtC;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,kBAAkB;EAClB,cAAc;EACd,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,kCAAkC;EAClC,4BAA4B;EAC5B,4BAA4B;EAC5B,sBAAsB;AACxB;;AACA;EACE,eAAe;EACf,kBAAkB;;AAEpB;;AACA;;EAEE,SAAS;EACT,OAAO;EACP,kBAAkB;AACpB;;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;AACT;;AACA;;EAEE,kBAAkB;EAClB,SAAS;EACT,6CAAsD;AACxD;;AACA;;EAEE,kBAAkB;EAClB,UAAU;EACV,OAAO;;AAET;;AACA;;EAEE,kBAAkB;EAClB,oBAAoB;EACpB,QAAQ;EACR,qCAA4C;EAC5C,4BAA4B;EAC5B,YAAY;EACZ,aAAa;EACb,WAAW;EACX,aAAa;AACf;;AACA;EACE;IACE,UAAU;IACV,QAAQ;;EAEV;AACF;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,WAAW;EACX,eAAe;EACf,iBAAiB;AACnB;;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,0CAA0C;EAC1C,oCAAoC;EACpC,mBAAmB;EACnB,WAAW;EACX,UAAU;AACZ;;AACA;;EAEE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB;;kBAEgB;EAChB,WAAW;EACX,gBAAgB;AAClB;;AACA;EACE,aAAa;EACb,gBAAgB;AAClB;;AACA;MACM,gCAAgC;AACtC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,4BAA4B;AAC9B;;AACA;EACE,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,wDAAwD;EACxD;gBACc;AAChB;;AACA;EACE,sDAAsD;EACtD;gBACc;AAChB;;AACA;EACE,uDAAuD;EACvD;gBACc;AAChB;;AAEA;EACE,uDAAuD;AACzD;;AAEA;EACE,wDAAwD;AAC1D;;AAEA;EACE,yDAAyD;AAC3D;;AAEA;EACE,wDAAwD;AAC1D;;AACA;EACE,uDAAuD;AACzD;;AAEA;EACE,yDAAyD;AAC3D;;AAEA;EACE,uDAAuD;AACzD;;AAEA;EACE,uDAAuD;AACzD;;AAGA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;AACb;;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,SAAS;AACX;;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,SAAS;AACX;;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,SAAS;AACX;;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,SAAS;AACX;;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,SAAS;AACX;;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,SAAS;AACX;;AACA;;EAEE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,SAAS;EACT,WAAW;EACX,aAAa;EACb,uBAAuB;AACzB;;AACA;;E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CA;EACE,WAAW;EACX,aAAa;AACf;;AACA;EACE,WAAW;EACX,SAAS;EACT,cAAc;EACd,QAAQ;AACV;;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,UAAU;AACZ;;AACA;EACE,eAAe;EACf,6BAA6B;EAC7B,QAAQ;EACR,SAAS;EACT,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,YAAY;AACd;;AACA;EACE,WAAW;EACX,YAAY;AACd;;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;AACf;;AACA;EACE,oBAAoB;AACtB;;AACA;EACE,kBAAkB;EAClB,sBAAsB;EACtB,WAAW;EACX,YAAY;EACZ,cAAc;EACd,SAAS;EACT,UAAU;EACV,mBAAmB;AACrB;;AACA;EACE,aAAa;AACf;;AACA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;;AACA;EACE,uCAA8C;EAC9C,sBAAsB;EACtB,4BAA4B;AAC9B;;AACA;EACE,iBAAiB;AACnB;;AACA;EACE,mBAAmB;AACrB;;AACA;EACE,YAAY;AACd;;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,eAAe;EACf,YAAY;EACZ,iBAAiB;AACnB;;AACA;EACE,qBAAqB;AACvB;;AACA;EACE,OAAO;AACT;;AACA;EACE,SAAS;AACX;;AACA,4BAA4B,2EAA2E,EAAE;;AACzG,4BAA4B,8FAA8F,EAAE;;AAC5H,4BAA4B,yDAAyD,EAAE;;AACvF,4BAA4B,iDAAiD,EAAE;;AAC/E,4BAA4B,gCAAgC;EAC1D;IACE,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,aAAa;IACb,QAAQ;AACZ;AACA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,SAAS;AACX;AACA;EACE,SAAS;AACX;AACA;;AACA;EACE;GACC,WAAW;;EAEZ;EACA;IACE,eAAe;EACjB;EACA;IACE,UAAU;IACV,YAAY;IACZ,SAAS;IACT,SAAS;EACX;EACA;IACE,gBAAgB;EAClB;;AAEF;EACE,UAAU;AACZ;;AAEA;EACE,OAAO;AACT;AACA;EACE,SAAS;AACX;AACA;EACE,UAAU;EACV,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,aAAa;AACf;AACA;EACE,QAAQ;AACV;AACA;EACE,WAAW;EACX,SAAS;AACX;AACA;EACE,gBAAgB;AAClB;AACA","sourcesContent":["root { \n  display: block;\n}\n\nbody{\n  background-color: #b7b7b7;\n  background-repeat: repeat-x;\n  background-position: top;\n  background-image: url(../sprites/bg_tile.jpg);  \n  /* min-width: 760px; */\n}\n\n*, *:before, *:after {\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n   \ninput, input:before, input:after {\n  -webkit-user-select: initial;\n  -khtml-user-select: initial;\n  -moz-user-select: initial;\n  -ms-user-select: initial;\n  user-select: initial;\n}\n\n::selection { background: transparent;color:inherit; }\n::-moz-selection { background: transparent;color:inherit; }\n\n#canvas{\n  position: fixed;\n}\n\ncanvas {\n  image-rendering: optimizeSpeed;\n  image-rendering:-o-crisp-edges;\n  image-rendering:-webkit-optimize-contrast;\n  -ms-interpolation-mode: nearest-neighbor;\n-ms-touch-action: none;\n}\n\n.ani_hack{\n  -webkit-perspective: 1000;\n  -webkit-backface-visibility: hidden;\n\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  outline: none;\n  -webkit-tap-highlight-color: transparent; /* mobile webkit */\n}\n\n/***************FONTS*******************/\n@font-face {\n  font-family: 'blackplotanregular';\n  src: url('blackplotan-webfont.eot');\n  src: url('blackplotan-webfont.eot?#iefix') format('embedded-opentype'),\n       url('blackplotan-webfont.woff2') format('woff2'),\n       url('blackplotan-webfont.woff') format('woff'),\n       url('blackplotan-webfont.ttf') format('truetype'),\n       url('blackplotan-webfont.svg#blackplotanregular') format('svg');\n  font-weight: normal;\n  font-style: normal;\n\n}\n\n\n\n.Wrap {\n  width: 40vw;\n  height: 25vh;\n  left: 32%;\n  bottom: 0vw;\n  position: absolute;\n  background: #F4F4F4;\n  border-radius: 25px 25px 0px 0px;\n}\n.betAmount {\n  width: 100%;\n  height: 47px;\n  display: flex;\n  text-align: center;\n  padding-top: 10px;\n}\n\n.btn-bet {\n  width: 30%;\n  height: 10%;\n  height: 35px;\n  position: relative;\n  top: 5px;\n  left: 8px;\n  background-image: url(../image/inactive-btn.svg);\n  background-size: cover;\n  color: white;\n  text-align: center;\n  padding-top: 2%;\n}\n.btn-bet.active {\n  background-image: url(../image/active-btn.svg);\n}\n\n.tab .tablinks {\n  width: 14vw;\n  height: 34px;\n  background: center center no-repeat;\n  background-size: contain;\n  display: inline-block;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-family: \"Microsoft Yahei\", Helvetica, Arial, sans-serif;\n  font-weight: bold;\n  font-size: 0.7em;\n  color: green;\n  cursor: pointer;\n}\n.levels {\n  display: inline-flex;\n  color: #262626;\n  font-size: 12px;\n  padding-left: 10px;\n  font-weight: bold;\n  min-width: 42%;\n  border-radius: 15px;\n  background-color: #AAA9A9;\n  position: relative;\n  margin-left: 5px;\n}\n.soccer-ball-icon {\n  position: inherit;\n  float: right;\n  right: -10px;\n  width: 41%;\n}\n.cashOut {\n  position: absolute;\n  bottom: 9%;\n  right: 10px;\n  width: 9%;\n}\n#stakeAmount {\n  margin: 0;\n  border-radius: 34px;\n  height: 1.4em;\n  padding: .4em;\n  outline: 0;\n  color: #333;\n  border-color: silver !important;\n  text-align: center;\n  left: 6%;\n  position: relative;\n  width: 18vw !important;\n}\ninput:focus{\n  box-shadow: 0 0 12px #38c;\n}\n.stake-cont {\n  font-size: 16px;\n  color: black;\n  top: 15%;\n  left: 4%;\n  position: relative;\n  margin-right: 20px;\n}\n\n\n/* demo code */\n.tab1 {\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  /* padding: 0 10px; */\n  width: 72%;\n  /* height: 31px; */\n  margin-top: -7%;\n  /* background: linear-gradient( \n45deg\n, #747474, #3A3A3A); */\n  border-bottom: 35px solid  #747474;\n  border-left: 25px solid transparent;\n  border-right: 25px solid transparent;\n}\n\n.ui-page-theme-a .ui-body-inherit, html .ui-bar-a .ui-body-inherit, html .ui-body-a .ui-body-inherit, html body .ui-group-theme-a .ui-body-inherit, html .ui-panel-page-container-a {\n  background-color: #fff;\n  border-color: #ddd;\n  color: #333;\n  border-radius: 25px;\n  text-shadow: 0 1px 0 #f3f3f3;\n}\n\n.icon{\n  position: relative;\n  bottom: 94%;\n  width: 112px;\n  height: 99px;\n}\n\n* {\n  font-style: Arial white 20px;\n}\n\n.field {\n  position: absolute;\n  margin: 0 auto;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover;\n}\n.controls{\n  z-index: 999999;\n  position: relative;\n\n}\n.volume\n{\n  left: 83%;\n  top: 5%;\n  position: absolute;\n}\n.volume-icon{\n  position: relative;\n  left:30px; \n  top:5px;\n}\n.unmute\n{\n  position: relative;\n  left:30px;\n  background-image: url('../image/volume-mute-icon.svg');\n}\n.closeicon\n{\n  position: relative;\n  left: 32px;\n  top:5px;\n\n}\n.timer\n{\n  position: absolute;\n  right: 0% !important;\n  top: 20%;\n  background-image: url(../image/timer-bg.svg);\n  background-repeat: no-repeat;\n  width: 100px;\n  height: 100px;\n  z-index: 22;\n  display: none;\n}\n@media only screen and (max-width: 800px) {\n  .timer {\n    right: -2%;\n    top: 15%;\n\n  }\n}\n\n#time{\n  position: relative;\n  top: 15px;\n  left: 26px;\n  color: #fff;\n  font-size: 30px;\n  font-weight: bold;\n}\n#seconds{\n  position: relative;\n  top: 12px;\n  left: 15px;\n  color: #fff;\n}\n\n.attempt {\n  position: relative;\n  display: inline-flex;\n  border: 8px solid rgba(111, 100, 100, 0.6);\n  background: rgba(100, 100, 119, 0.6);\n  border-radius: 100%;\n  height: 70%;\n  width: 70%;\n}\n.goal_post\n{\n  display: flex;\n  justify-content: center;\n  position: relative;\n  /* top: 26px;\n  left: 31%;\n  height: 275px; */\n  height: 43%;\n  max-width: 799px;\n}\n#goal_post{\n  height: 179px;\n  margin-top: 13px;\n}\n.goal {\n      background: rgba(0, 255, 0, 0.9);\n}\n\n.missed {\n  background: rgba(255, 0, 0, 0.9);\n}\n\n#audio {\n  background: red;\n}\n\n#ball{\n  position: absolute;\n  bottom:0%;\n  /* padding: 50% 20% 0 60%; */\n}\n.ballLeftL0,.ballLeftL1,.ballLeftL2,.ballLeftL3,.ballLeftR0,.ballLeftR1,.ballLeftR2,.ballLeftR3, .ballOut, .ballCatched {\n  transition: all 0.8s;\n  opacity: 60%;\n}\n\n.ballLeft {\n  transform: scale(.3) translate(-550px, -848px)!important;\n  /*transition: all 0.8s;\n  opacity: 60%;*/\n}\n.ballCatched {\n  transform: scale(.4) translate(70px, -261px)!important;\n  /*transition: all 0.8s;\n  opacity: 60%;*/\n}\n.ballOut {\n  transform: scale(.2) translate(-20px, -204px)!important;\n  /*transition: all 0.8s;\n  opacity: 60%;*/\n}\n\n.ballLeftL0 {\n  transform: scale(.3) translate(-50px, -430px)!important;\n}\n\n.ballLeftL1 {\n  transform: scale(.3) translate(-706px, -430px)!important;\n}\n\n.ballLeftL2 {\n  transform: scale(.3) translate(-1068px, -230px)!important;\n}\n\n.ballLeftL3 {\n  transform: scale(.3) translate(-650px, -148px)!important;\n}\n.ballLeftR0 {\n  transform: scale(.3) translate(-20px, -460px)!important;\n}\n\n.ballLeftR1 {\n  transform: scale(.3) translate(-1068px, -430px)!important;\n}\n\n.ballLeftR2 {\n  transform: scale(.3) translate(-20px, -191px)!important;\n}\n\n.ballLeftR3 {\n  transform: scale(.3) translate(-20px, -148px)!important;\n}\n\n\n#keepDiv{\n  position: absolute;\n  bottom: 14%;\n  width: 100%;\n}\n#keeper_center_down{\n  position: absolute;\n  bottom: 14%;\n  width: 100%;\n  left: 53%;\n}\n#keeper_center_up{\n  position: absolute;\n  bottom: 24%;\n  width: 100%;\n  left: 34%;\n}\n#keeper_save_left{\n  position: absolute;\n  bottom: 14%;\n  width: 100%;\n  left: 34%;\n}\n#keeper_save_right{\n  position: absolute;\n  bottom: 14%;\n  width: 100%;\n  left: 34%;\n}\n#keeper_save_down_left{\n  position: absolute;\n  bottom: 14%;\n  width: 100%;\n  left: 34%;\n}\n#keeper_save_down_right{\n  position: absolute;\n  bottom: 14%;\n  width: 100%;\n  left: 34%;\n}\n.logo_icon\n{\n  position: absolute;\n  top: 20px;\n  width: 14%;\n  left: 20px;\n}\n\n#ballDiv{\n  position:relative;\n  bottom: 33%;\n  left: 29%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n#info-icon{\n\n  bottom: 32%;\n  left: 671px;\n\n}\n.infoimg\n{\n  top: 253px;\n    position: absolute;\n    right: 3%;\n}\n.showOdd\n{\n  top: 200px;\n    position: absolute;\n    right: 3%;\n}\n.popup\n{\n  position: absolute;\n    top: 6%;\n    background: white;\n    width: 60%;\n    left: 23%;\n    height: 59%;\n    border-radius: 25px;\n}\n.popup2{\n    position: relative;\n    top: -107%;\n    background: white;\n    width: 50%;\n    left: 31%;\n    height: 44%;\n    border-radius: 25px;\n}\n\n.popup_text\n{\n  top: 16px;\n  position: relative;\n  margin:12%;\n  font-size: 12px;\n text-align: justify;\n  color: #333;\n}\n.popup_text2\n{\n  margin: 3%;\n  position: relative;\n  list-style-type: none;\n  height: 60%;\n  overflow: scroll;\n  top:3px;\n  text-align: justify;\n  width: 73%;\n  font-size: 12px;\n  text-align: inherit;\n  color: #333;\n}\n#hide-div\n{\n  position: relative;\n  left: 63%;\n  top: 10%;\n}\n.btn_left\n{\n  background-size: cover;\n  color: white;\n  text-align: center;\n  padding-top: 7px;\n  width: 27%;\n  height: 35px;\n  background-repeat: no-repeat;\n  position: relative;\n    left: 5%;\n    top: 6%;\n    float: left;\n    background-image: url('../image/instruction-btn-inactive.svg');\n}\n\n.btn_right {\n  background-size: cover;\n  height: 35px;\n  width: 27%;\n  background-repeat: no-repeat;\n  left: -39%;\n  color:white;\n  text-align: center;\n  padding-top: 7px;\n  position: relative;\n  top: 6%;\n  float: right;\n  background-image: url(../image/instruction-btn-inactive.svg);\n}\n.activetab\n{\n  width: 27%;\n  height: 35px;\n  background-image: url(../image/game-info-btn-active.svg); \n  padding-top: 7px;\n}\n.active .inactive\n{\n  display: flex;\n}\n\n\n#goalkeeper {\n  margin: 0px auto;\n  display: block;\n  width: 123px;\n}\n\n#keeper {\n  margin: 0px auto;\n  display: block;\n  width: 123px;\n}\n#keeper_up\n{\n  margin: 0px auto;\n  display: block;\n  width: 123px;\n}\n#keeper_down_left\n{\n  margin: 0px auto;\n  display: block;\n  width: 346px;\n}\n\n#keeper_up\n{\n  margin: 0px auto;\n  display: block;\n  width: 123px;\n}\n#keeper_up\n{\n  margin: 0px auto;\n  display: block;\n  width: 123px;\n}\n#keeper_up\n{\n  margin: 0px auto;\n  display: block;\n  width: 123px;\n}\n.bg-block {\n  position:absolute;\n  top: -311px;\n  left: 53px;\n  bottom: 0;\n  right: 0;\n  width: 127px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n}\n.bg-block.active {\n      filter: alpha(opacity=100);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity:1;\n}\n.bg-block-keeper{\n  position:absolute;\n  top: -311px;\n  left: 53px;\n  bottom: 0;\n  right: 0;\n  width: 127px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n}\n.bg-block-keeper.active {\n      filter: alpha(opacity=100);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity:1;\n}\n.bg-block-keeper-up {\n  position:absolute;\n  top: -311px;\n  left: 53px;\n  bottom: 0;\n  right: 0;\n  width: 127px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n}\n.bg-block-keeper-up.active {\n      filter: alpha(opacity=100);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity:1;\n}\n.bg-block-keeper_down_left {\n  position:absolute;\n  top: -311px;\n  left: 53px;\n  bottom: 0;\n  right: 0;\n  width: 127px;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);\n}\n.bg-block-keeper_down_left.active {\n      filter: alpha(opacity=100);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity:1;\n}\n.inputName {\n  background-color: white;\n}\n.keeperMissed {\n\n  filter: alpha(opacity=100);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity:1;\n  transition: all 0.8s;\n  opacity: 60%;\n }\n\n .keeperCatched {\n\n  filter: alpha(opacity=100);\n  -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity:1;\n\n  transition: all 0.8s;\n  opacity: 60%;\n\n}\n.hide {\n  opacity: 0;\n  top: -60%;\n  position: absolute;\n  left: 28px;\n}\n.pop {\n  position: relative;\n  font: caption;\n  color: yellow;\n  opacity: 100;\n  height: 20px;\n  width: 230px;\n  background-color: rgba(0, 0, 0, 0.2);\n  border: yellow 1px solid;\n  border-radius: 5px;\n  left: 2%;\n  bottom: 16%;\n  text-align: center;\n  padding-top: 1px;\n}\n#notGoal.pop {\n  color: rgba(255, 0, 0, 1);\n  border: 1px rgba(255, 0, 0, 1) solid;\n  bottom: 20%;\n}\n#goal.pop {\n  color: rgba(0, 255, 0, 1);\n  border: 1px rgba(0, 255, 0, 1) solid;\n  bottom: 18%;\n}\n\n#mydiv{\n\n  color: #fff;\n  width: 799px;\n  height: 100%;\n  margin: 0px auto;\n  position: relative;\n  background-repeat: no-repeat;\n  background-size: contain;\n\n}\n#ball{\n      user-select: none;\n-moz-user-select: none;\n-webkit-user-drag: none;\n-webkit-user-select: none;\n-ms-user-select: none;\n}\n.panel {\n  width: 100%;\n  background-color: white;\n  top: 86%;\n  position: absolute;\n}\n.minus, .plus{\n  position: relative;\n  width: 10%;\n  height: 58%;\n  top: 3px;\n  /* left: 70px; */\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  cursor: pointer;\n}\n.minus\n{\nleft: 17%;\nz-index: 1;\n}\n.plus\n{\n  left: -5%;\n}\n.tab {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 10px;\n  top: 23px;\n  width: 98%;\n  height: 15vh;\n  background: linear-gradient(45deg, #c7c7c7, #BFBFBF);\n}\n.play{\n  border: 1px solid green;\n  text-align: center;\n  border-radius: 5px;\n  background: linear-gradient( \n45deg\n, #2AD931, #257402);\n  width: 15%;\n  height: 33%;\n  position: absolute;\n  left: 50%;\n  color: white;\n  top: -266%;\n  padding-top: 1%;\n}\n#level\n{\n  color: black;\n  font-size: 1.2em;\n  font-weight: bold;\n  width: 40%;\n  margin: 0;\n  display: inline;\n}\n\n.bg_play\n{\n  position: absolute;\n    background-color: black;\n    opacity: 50%;\n    width: 100%;\n    height: 165%;\n    left: -29%;\n    top: -27%;\n}\n\n.Wallet\n{\n  top: 25px;\n  position: relative;\n  color: #FFFFFF;\n  font-family: Avenir Next;\n  font-size: 16px;     \n}\n\n\n.game-play\n{\n  position: absolute;\n  bottom: 40%;\n  left: 50%;\n  width: 10%;\n  display: flex;\n  justify-content: center; \n}\n\n@keyframes sprite {\n  from{background-position-x:0px;}\n      to{background-position-x:-2388px;}\n}\n\n@keyframes gk-ani-save_center_up{\n  from{background-position-x:0px;}\n  to{background-position-x:-2847px;}\n}\n@keyframes gk-ani-save_center_down{\n  from{background-position-x:0px;}\n  to{background-position-x:-5694px;}\n}\n@keyframes gk-ani-save_down_left{\n  from{background-position-y:0px;}\n  to{background-position-y:-3995px;}\n}\n@keyframes ball-roll{\n  from{background-position-x:0px;}\n  to{background-position-x:-1040px;}\n}\n.gk-idle {\n  height: 230px;\n  width: 200px;\n  background: url(\"../image/level2/gk-ani-idle.png\");\n  animation: sprite 1.5s steps(12) infinite;\n  position:absolute;\n  /* transform: translate(-25%, -25%) scale(0.5); */\n}\n.gk-ani-save_center_up{\n  height: 340px;\n  width: 219px;\n  background: url(\"../image/level2/gk-ani-save_center_up.png\");\n  animation: gk-ani-save_center_up 0.8s steps(13);\n  position:absolute;\n  top: -70px;\n}\n.gk-ani-save_center_down{\n  height: 270px;\n  width: 219px;\n  background: url(\"../image/level2/gk-ani-save_center_down.png\");\n  animation: gk-ani-save_center_down 1.5s steps(26);\n  position:absolute;\n}\n.gk-ani-save_down_left{\n  height: 235px;\n  width: 535px;\n  background: url(\"../image/level2/gk-ani-save_down_left.png\");\n  animation: gk-ani-save_down_left 1.5s steps(17);\n  position:absolute;\n  left: 0;\n}\n.gk-ani-save_down_right{\n  height: 235px;\n  width: 514px;\n  background: url(\"../image/level2/gk-ani-save_down_right.png\");\n  animation: gk-ani-save_down_left 1.5s steps(17);\n  position:absolute;\n  right: 0;\n}\n.ball-roll{\n  height: 150px;\n  width: 148.5px;\n  background: url(\"../image/level2/ball-ani-roll.png\");\n  animation: ball-roll 0.3s steps(7) infinite;\n  position:absolute;\n  transform: scale(0.5);\n}\n.goal_post div, .goal_post.kicked .gk-idle{\n  display: none;\n}\n.goal_post .gk-idle{\n  display: block;\n}\n.goal_post.right .gk-ani-save_down_right,\n.goal_post.left .gk-ani-save_down_left,\n.goal_post.up .gk-ani-save_center_up,\n.goal_post.down .gk-ani-save_center_down{\n  display: block;\n}\n.gk-ani-save_down_right.paused{\n  animation-duration: 0s;\n  background-position-y: -3481px;\n}\n.ball-roll{\n  display: block !important;\n}\n.goal_post.kicked #ball{\n  transform: scale(0.8);\n}\n.bottom-container{\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n    z-index: 99999999;\n    /* display: none; */\n}\n.betvalue p{\n  margin: 0;\n  color: black !important;\n  top: -10px !important;\n  cursor: pointer;\n}\n.winBet{\n  color: #8e8a8a;\n  font-size: 9px;\n  font-weight: 900;\n  width: 100%;\n}\n.gameWallet{\n  left: -19%;\n  top: 12%;\n  position: relative;\n}\n.dg {\n  display: none !important;\n}\n.gameBalance, .winningAmount {\n  font-weight: bold;\n  font-size: 1.5em;\n}\n.stake-label {\n  font-size: 16px;\n  color: black;\n  top: 15%;\n  left: 13%;\n  position: relative;\n}\n.betvalue {\n  display: flex;\n  position: relative;\n  left: 3%;\n  margin-top: 10px;\n}\n.show-odds{\n  width: 15vw;\n  position: absolute;\n  top: 19vh;\n  left: 20px;\n  display: none;\n}\n\n.show-odd-cont {\n  /* top: 90%; */\n  /* width: 21%; */\n  position: relative;\n}\n.show-odd-cont span {\n  position: absolute;\n  color: #fff;\n  right: 15%;\n  top: 30%;\n  font-size: 3vw;\n  font-weight: bold;\n}\n.show-odd-cont img {\n  width: 100%;\n  margin: 5px 0;\n}\nspan.odd-gk {\n  width: 20px;\n  left: 13%;\n  font-size: 2vw;\n  top: 15%;\n}\n.info-icon {\n  position: absolute;\n  right: 5%;\n  bottom: 30%;\n  z-index: 3;\n}\n.orientation{\n  position: fixed;\n  background-color: transparent;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index:99999999;\n  display:none;\n}\n.orientation img{\n  width: 100%;\n  height: 100%;\n}\n.showScore {\n  position: absolute;\n  color: #fff;\n  right: 17%;\n  bottom: 18vh;\n  font-size: 2.5rem;\n  font-weight: bold;\n  display: none;\n}\n.no-pointer{\n  pointer-events: none;\n}\n.popup-cont {\n  position: relative;\n  background-color: #fff;\n  width: 50vw;\n  height: 55vh;\n  margin: 0 auto;\n  top: 11vh;\n  z-index: 9;\n  border-radius: 25px;\n}\n.header-cont {\n  padding: 30px;\n}\n.header-cont button{\n  height: 35px;\n  width: 130px;\n  border: none;\n  cursor: pointer;\n}\n.header-cont button.active{\n  background-image: url(../image/active-btn.svg);\n  background-size: cover;\n  background-attachment: fixed;\n}\n.body-cont {\n  padding: 5px 30px;\n}\n.instruction-content ol {\n  list-style: decimal;\n}\n.close-popup {\n  float: right;\n}\n.level-cont{\n  position: relative;\n  width: 90px;\n  margin-top: 5px;\n  height: 20px;\n  line-height: 20px;\n}\n.alert-red {\n  color: red !important;\n}\n.Wallet.left{\n  left:7%;\n} \n.Wallet.right{\n  right: 6%;\n}\n@media (min-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ }\n@media (min-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ }\n@media (min-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ }\n@media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }\n@media (min-width:1281px) { /* hi-res laptops and desktops */\n  .icon {\n    position: relative;\n    bottom: 74%;\n    width: 130px;\n    height: 108px;\n    left: 2%;\n}\n.Wrap {\n  height: 18vh;\n} \n.tab {\n  height: 11vh;\n}\n.plus {\n  left: -3%;\n}\n.minus {\n  left: 15%;\n}\n}\n@media only screen and (max-width: 850px) {\n  .show-odds {\n   width: 12vw;\n\n  }\n  .stake-label {\n    font-size: 15px;\n  }\n  .icon {\n    width: 14%;\n    height: 145%;\n    top: -73%;\n    left: -1%;\n  }\n  .gameBalance, .winningAmount{\n    font-size: 1.2em;\n  }\n\n.gameWallet{\n  left: -27%;\n}\n\n.Wallet.left{\n  left:3%;\n} \n.Wallet.right{\n  right: 3%;\n}\n.showScore {\n  right: 17%;\n  bottom: 25vh;\n  font-size: 1.5rem;\n  font-weight: bold;\n  display: none;\n}\n.timer {\n  top: 16%;\n}\n.cashOut {\n  bottom: 20%;\n  width: 7%;\n}\nspan.odd-gk {\n  font-size: 1.8vw;\n}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map