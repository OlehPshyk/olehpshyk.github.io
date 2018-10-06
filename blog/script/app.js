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
eval("\n\n__webpack_require__(/*! ./modules/sidebar-menu.js */ \"./src/js/modules/sidebar-menu.js\");\n\n__webpack_require__(/*! ./modules/service-button.js */ \"./src/js/modules/service-button.js\");\n\n__webpack_require__(/*! ./modules/top-bottom-link.js */ \"./src/js/modules/top-bottom-link.js\");\n\n__webpack_require__(/*! ./modules/swiper-slider.js */ \"./src/js/modules/swiper-slider.js\");\n\n__webpack_require__(/*! ./modules/custom-scroll.js */ \"./src/js/modules/custom-scroll.js\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/custom-scroll.js":
/*!*****************************************!*\
  !*** ./src/js/modules/custom-scroll.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.custom-scroll').niceScroll({\n    cursorwidth: 0,\n    //cursorwidth:3,\n    cursoropacitymin: 0.4,\n    cursorcolor: '#aaaaaa',\n    cursorborder: 'none',\n    cursorborderradius: 4,\n    autohidemode: 'leave'\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/custom-scroll.js?");

/***/ }),

/***/ "./src/js/modules/service-button.js":
/*!******************************************!*\
  !*** ./src/js/modules/service-button.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.service-button').on('click', function () {\n    $(this).parents('.services-img').find('.service-description').toggleClass('show-des');\n  });\n  $('.service-close').on('click', function () {\n    $(this).parents('.service-description').removeClass('show-des');\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/service-button.js?");

/***/ }),

/***/ "./src/js/modules/sidebar-menu.js":
/*!****************************************!*\
  !*** ./src/js/modules/sidebar-menu.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.menu-icon').on('click', function () {\n    $(this).toggleClass('active');\n    $('.sidebar-menu').toggleClass('active');\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/sidebar-menu.js?");

/***/ }),

/***/ "./src/js/modules/swiper-slider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/swiper-slider.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var swiper = new Swiper('.portfolio-sliders', {\n    //pagination: '.swiper-pagination',\n    slidesPerView: 'auto',\n    paginationClickable: true,\n    spaceBetween: 0,\n    freeMode: true,\n    nextButton: '.portfolio-swiper-button-next',\n    prevButton: '.portfolio-swiper-button-prev',\n    mousewheelControl: false,\n    loop: true\n  });\n  var swiper2 = new Swiper('.blog-slider', {\n    pagination: '.blog-swiper-pagination',\n    paginationClickable: true,\n    loopAdditionalSlides: 3,\n    loop: true\n  });\n  var swiper4 = new Swiper('.testimonials-img-slider', {\n    pagination: '.t-swiper-pagination',\n    paginationClickable: true,\n    nextButton: '.testimonials-swiper-button-next',\n    prevButton: '.testimonials-swiper-button-prev',\n    loop: true\n  });\n  var swiper5 = new Swiper('.testimonials-text-slider', {\n    pagination: '.t-swiper-pagination',\n    paginationClickable: true,\n    nextButton: '.testimonials-swiper-button-next',\n    prevButton: '.testimonials-swiper-button-prev',\n    loop: true\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/swiper-slider.js?");

/***/ }),

/***/ "./src/js/modules/top-bottom-link.js":
/*!*******************************************!*\
  !*** ./src/js/modules/top-bottom-link.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    $('body').scroll(function () {\n        var scroll = $('body').scrollTop();\n        if (scroll >= 100) {\n            $(\".top-bottom-link\").addClass(\"show-link\");\n        } else {\n            $(\".top-bottom-link\").removeClass(\"show-link\");\n        }\n    });\n    $('.top-bottom-link').on(\"click\", function () {\n        $('html, body').animate({ scrollTop: 0 }, 'slow');\n    });\n});\n\n//# sourceURL=webpack:///./src/js/modules/top-bottom-link.js?");

/***/ })

/******/ });