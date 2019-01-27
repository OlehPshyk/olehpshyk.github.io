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
eval("\n\n__webpack_require__(/*! ./modules/handle-sliders */ \"./src/js/modules/handle-sliders.js\");\n\n__webpack_require__(/*! ./modules/handle-blog-tab */ \"./src/js/modules/handle-blog-tab.js\");\n\n__webpack_require__(/*! ./modules/handle-describe */ \"./src/js/modules/handle-describe.js\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/handle-blog-tab.js":
/*!*******************************************!*\
  !*** ./src/js/modules/handle-blog-tab.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\tvar tabList = document.getElementById('blog-tab-list');\n\tif (tabList) {\n\t\tvar handleBlogTab = function handleBlogTab(e) {\n\t\t\te.preventDefault();\n\t\t\tif (!e.target.classList.contains('active')) {\n\t\t\t\t//tabList.querySelectorAll('.js-tab-link.active')[0].classList.remove('active');\n\t\t\t\tblogTabs.map(function (tab) {\n\t\t\t\t\ttab.classList.remove('active');\n\t\t\t\t});\n\t\t\t\te.target.classList.add('active');\n\t\t\t}\n\t\t};\n\n\t\tvar blogTabs = [].concat(_toConsumableArray(tabList.querySelectorAll('.js-tab-link')));\n\t\t//const blogTabs1 = document.getElementsByClassName('js-tab-link');\t\t\n\t\tblogTabs && blogTabs.map(function (tab) {\n\t\t\ttab.addEventListener(\"click\", handleBlogTab);\n\t\t});\n\t}\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-blog-tab.js?");

/***/ }),

/***/ "./src/js/modules/handle-describe.js":
/*!*******************************************!*\
  !*** ./src/js/modules/handle-describe.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  var describeForm = document.getElementById(\"describe-form\"),\n      message = document.getElementById(\"message\");\n\n  describeForm && describeForm.addEventListener(\"submit\", checkForm);\n\n  function checkForm(e) {\n    submitForm(e);\n    return false;\n  }\n\n  function submitForm(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    // var firstName = encodeURIComponent(document.getElementById('firstName').value);\n    // var lastName = encodeURIComponent(document.getElementById('lastName').value);\n    // var email = encodeURIComponent(document.getElementById('email').value);\n    // var company = encodeURIComponent(document.getElementById('company').value);\n    // var describeText = encodeURIComponent(document.getElementById('describeText').value);    \n    // var describeFull = 'firstName='+firstName+'&lastName='+lastName+'&email='+email+'&company='+company+'&describeText='+describeText;\n\n    var password = encodeURIComponent(document.getElementById('firstName').value);\n    var parameters = 'password=' + password;\n    var xhr = new XMLHttpRequest();\n    xhr.onreadystatechange = function (e) {\n      if (xhr.readyState === 4 && xhr.status === 200) {\n        describeForm.innerHTML = xhr.responseText;\n      }\n    };\n    xhr.open(describeForm.method, describeForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    xhr.send(parameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-describe.js?");

/***/ }),

/***/ "./src/js/modules/handle-sliders.js":
/*!******************************************!*\
  !*** ./src/js/modules/handle-sliders.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  //Testimonials Slider\n  $(\".testimonials-slider\").slick({\n    infinite: true,\n    slidesToShow: 3,\n    slidesToScroll: 1,\n    autoplay: true,\n    autoplaySpeed: 3000,\n    pauseOnHover: true,\n    speed: 300,\n    responsive: [{\n      breakpoint: 1200,\n      settings: {\n        slidesToShow: 2\n      }\n    }, {\n      breakpoint: 700,\n      settings: {\n        slidesToShow: 1\n      }\n    }]\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-sliders.js?");

/***/ })

/******/ });