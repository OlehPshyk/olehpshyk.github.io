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
eval("\n\n__webpack_require__(/*! ./modules/handle-loading */ \"./src/js/modules/handle-loading.js\");\n\n__webpack_require__(/*! ./modules/mobile-menu.js */ \"./src/js/modules/mobile-menu.js\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/handle-loading.js":
/*!******************************************!*\
  !*** ./src/js/modules/handle-loading.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$('.main').imagesLoaded().done(function () {\n  //console.log('loaded')\n  window.setTimeout(function () {\n    $(\".loading-wrapper\").fadeOut();\n  }, 1000);\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-loading.js?");

/***/ }),

/***/ "./src/js/modules/mobile-menu.js":
/*!***************************************!*\
  !*** ./src/js/modules/mobile-menu.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  //OPEN-CLOSE MOBILE MENU\n  var openMobileMenu = function openMobileMenu() {\n    mobileMenuContainer && mobileMenuContainer.classList.add(\"open\");\n  };\n  var closeMobileMenu = function closeMobileMenu() {\n    mobileMenuContainer && mobileMenuContainer.classList.contains(\"open\") && mobileMenuContainer.classList.remove(\"open\");\n  };\n\n  var hamburger = document.getElementById('hamburger'),\n      mobileMenuContainer = document.getElementById('mobile-menu-container'),\n      closeMobileMenuContainer = document.getElementById('close-mobile-menu-container');\n\n  hamburger && hamburger.addEventListener('click', function () {\n    return openMobileMenu();\n  });\n  closeMobileMenuContainer && closeMobileMenuContainer.addEventListener('click', function () {\n    return closeMobileMenu();\n  });\n\n  //DROPDOWN\n  var dropdown = document.getElementsByClassName(\"drop-btn\");\n\n  for (var i = 0; i < dropdown.length; i++) {\n    dropdown[i].addEventListener(\"click\", function () {\n      this.classList.toggle(\"open\");\n      var dropdownContent = this.nextElementSibling;\n      if (dropdownContent.style.display === \"block\") {\n        dropdownContent.style.display = \"none\";\n      } else {\n        dropdownContent.style.display = \"block\";\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/mobile-menu.js?");

/***/ })

/******/ });