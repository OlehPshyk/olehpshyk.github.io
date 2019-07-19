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
eval("\n\n__webpack_require__(/*! ./modules/dark-sections */ \"./src/js/modules/dark-sections.js\");\n\n__webpack_require__(/*! ./modules/handle-submitform */ \"./src/js/modules/handle-submitform.js\");\n\n__webpack_require__(/*! ./modules/handle-phoneNumber */ \"./src/js/modules/handle-phoneNumber.js\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/dark-sections.js":
/*!*****************************************!*\
  !*** ./src/js/modules/dark-sections.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var toFormBtn1 = document.getElementById('to-form-btn1'),\n      toFormBtn2 = document.getElementById('to-form-btn2'),\n      mainSection = document.getElementById('main'),\n      formSection = document.getElementById(\"form-section\");\n\n  toFormBtn1.addEventListener(\"click\", darkenSections);\n  toFormBtn2.addEventListener(\"click\", darkenSections);\n\n  function darkenSections(e) {\n    e.preventDefault();\n    mainSection.classList.add('is-darken');\n    setTimeout(function () {\n      mainSection.addEventListener(\"click\", undarkenSections);\n    }, 1000); // do not used e.stopPropagation becouse smothScroll not work\n  }\n\n  function undarkenSections(e) {\n    if (!formSection.contains(e.target)) {\n      mainSection.classList.remove('is-darken');\n      mainSection.removeEventListener(\"click\", undarkenSections);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/dark-sections.js?");

/***/ }),

/***/ "./src/js/modules/handle-phoneNumber.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-phoneNumber.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var phoneElement = document.getElementById('phone');\n  var phoneMask = new IMask(phoneElement, {\n    mask: '{\\\\0} (000) 000 00 00 [000000000000000000000000000000]',\n    lazy: false, // make placeholder always visible\n    placeholderChar: '_' // defaults to '_'\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-phoneNumber.js?");

/***/ }),

/***/ "./src/js/modules/handle-submitform.js":
/*!*********************************************!*\
  !*** ./src/js/modules/handle-submitform.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var form = document.getElementById(\"form\");\n  form && form.addEventListener(\"submit\", checkForm);\n  function checkForm(e) {\n    submitForm(e);\n    return false;\n  }\n  function submitForm(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    var name = encodeURIComponent(document.getElementById('name').value);\n    var phone = encodeURIComponent(document.getElementById('phone').value);\n    var email = encodeURIComponent(document.getElementById('email').value);\n    var parameters = 'name=' + name + '&phone=' + phone + '&email=' + email;\n    var xhr = new XMLHttpRequest();\n    xhr.onreadystatechange = function (e) {\n      if (xhr.readyState === 4 && xhr.status === 200) {\n        form.innerHTML = xhr.responseText;\n      }\n    };\n    xhr.open(form.method, form.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    xhr.send(parameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-submitform.js?");

/***/ })

/******/ });