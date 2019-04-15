/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/handle-hamb */ \"./src/js/modules/handle-hamb.js\");\n\n__webpack_require__(/*! ./modules/handle-headroom */ \"./src/js/modules/handle-headroom.js\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/handle-hamb.js":
/*!***************************************!*\
  !*** ./src/js/modules/handle-hamb.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var hambButton = document.querySelector('.hamb-btn'),\n      xsNav = document.querySelector('.xs-nav'),\n      header = document.querySelector('.header');\n  var handleHambClick = function handleHambClick(e) {\n    hambButton.classList.toggle('open');\n    xsNav.classList.toggle('open');\n    header.classList.toggle('xs-nav-open');\n    // document.body.classList.toggle('overflow-hidden');\n  };\n  // const handleXsNavClick = (e)=> {    \n  //   if ( e.target.classList.contains('nav-link') || e.target.parentNode.classList.contains('nav-link') ) {\n  //     hambButton.classList.remove('open');\n  //     xsNav.classList.remove('open');\n  //     header.classList.remove('xs-nav-open');           \n  //   }\n  // }\n  hambButton && hambButton.addEventListener(\"click\", handleHambClick);\n  // xsNav&&xsNav.addEventListener(\"click\", handleXsNavClick);\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-hamb.js?");

/***/ }),

/***/ "./src/js/modules/handle-headroom.js":
/*!*******************************************!*\
  !*** ./src/js/modules/handle-headroom.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var myElement = document.querySelector(\"header\");\n  var headroom = new Headroom(myElement, {\n    // vertical offset in px before element is first unpinned\n    //offset : 96,\n    // scroll tolerance in px before state changes\n    // tolerance : 0,\n    // or scroll tolerance per direction\n    tolerance: {\n      down: 0,\n      up: 10\n    },\n    // element which is source of scroll events. Defaults to window\n    //scroller : element,\n    // css classes to apply\n    classes: {\n      // when element is initialised\n      initial: \"headroom\",\n      // when scrolling up\n      pinned: \"headroom--pinned\",\n      // when scrolling down\n      unpinned: \"headroom--unpinned\",\n      // when above offset\n      top: \"headroom--top\",\n      // when below offset\n      notTop: \"headroom--not-top\",\n      // when at bottom of scoll area\n      bottom: \"headroom--bottom\",\n      // when not at bottom of scroll area\n      notBottom: \"headroom--not-bottom\"\n    }\n    // onUnpin: function() {\n    //   if ( (window.innerWidth < 1200) && isXsNavOpen(myElement) ) {\n    //     this.elem.classList.remove(this.classes.unpinned);\n    //     this.elem.classList.add(this.classes.pinned);\n    //   }\n    //   // else {\n    //   //   this.elem.classList.add(this.classes.unpinned);\n    //   //   this.elem.classList.remove(this.classes.pinned);\n    //   // }                       \n    // },\n    // // callback when pinned, `this` is headroom object\n    // onPin : function() {},\n    // // callback when unpinned, `this` is headroom object\n    // onUnpin : function() {},\n    // // callback when above offset, `this` is headroom object\n    // onTop : function() {},\n    // // callback when below offset, `this` is headroom object\n    // onNotTop : function() {}\n    // // callback at bottom of page, `this` is headroom object\n    // onBottom : function() {},\n    // // callback when moving away from bottom of page, `this` is headroom object\n    // onNotBottom : function() {}\n  });\n  headroom.init();\n  function isXsNavOpen(el) {\n    return el.classList.contains('xs-nav-open');\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-headroom.js?");

/***/ })

/******/ });