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
eval("\n\n__webpack_require__(/*! ./modules/handle-hamb */ \"./src/js/modules/handle-hamb.js\");\n\n__webpack_require__(/*! ./modules/handle-mslider */ \"./src/js/modules/handle-mslider.js\");\n\n__webpack_require__(/*! ./modules/handle-testilider */ \"./src/js/modules/handle-testilider.js\");\n\n__webpack_require__(/*! ./modules/handle-datepicker.js */ \"./src/js/modules/handle-datepicker.js\");\n\n__webpack_require__(/*! ./modules/handle-rating */ \"./src/js/modules/handle-rating.js\");\n\n__webpack_require__(/*! ./modules/handle-selects */ \"./src/js/modules/handle-selects.js\");\n\n__webpack_require__(/*! ./modules/handle-custom-scroll */ \"./src/js/modules/handle-custom-scroll.js\");\n\n__webpack_require__(/*! ./modules/handle-answercomment-form */ \"./src/js/modules/handle-answercomment-form.js\");\n\n__webpack_require__(/*! ./modules/handle-support-form */ \"./src/js/modules/handle-support-form.js\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/handle-answercomment-form.js":
/*!*****************************************************!*\
  !*** ./src/js/modules/handle-answercomment-form.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var answercommentForm = document.getElementById(\"answercomment-form\"),\n      answercommentFormMessage = document.getElementById(\"answercomment-form-message\");\n  answercommentForm && answercommentForm.addEventListener(\"submit\", checkanswercommentForm);\n  function checkanswercommentForm(e) {\n    e.preventDefault();\n    submitanswercommentForm(e);\n    return false;\n  }\n  function submitanswercommentForm(e) {\n    var answercommentrating = encodeURIComponent(document.getElementById('answercomment-rating').dataset.rating);\n    var answercommenttextarea = encodeURIComponent(document.getElementById('answercomment-textarea').value);\n\n    var answercommentparameters = 'answercommentrating=' + answercommentrating + '&answercommenttextarea=' + answercommenttextarea;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     answercommentForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(answercommentForm.method, answercommentForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    // console.log(answercommentparameters);\n    xhr.send(answercommentparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-answercomment-form.js?");

/***/ }),

/***/ "./src/js/modules/handle-custom-scroll.js":
/*!************************************************!*\
  !*** ./src/js/modules/handle-custom-scroll.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.js-custom-scroll').niceScroll({\n    cursorcolor: \"#d10085\",\n    cursoropacitymin: 0,\n    cursoropacitymax: 1,\n    cursormaxheight: \"50px\",\n    cursorwidth: \"20px\",\n    cursorborder: \"none\",\n    emulatetouch: true,\n    cursorminheight: 32,\n    cursordragontouch: true,\n    background: \"#ebebeb\",\n    cursorborderradius: \"10px\",\n    autohidemode: \"true\",\n    zindex: \"200\"\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-custom-scroll.js?");

/***/ }),

/***/ "./src/js/modules/handle-datepicker.js":
/*!*********************************************!*\
  !*** ./src/js/modules/handle-datepicker.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var today = new Date();\n  var dd = String(today.getDate()).padStart(2, '0');\n  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!\n  var yyyy = today.getFullYear();\n\n  today = dd + '.' + mm + '.' + yyyy;\n\n  $('.js-dhoroscope-data').text(today);\n\n  flatpickr(\".flatpickr\", {\n    \"locale\": \"tr\", // locale for this instance only\n    wrap: true,\n    dateFormat: \"d.m.Y\",\n    //defaultDate=\"\",\n    onChange: function onChange(selectedDates, dateStr, instance) {\n      // console.log(dateStr);\n      $('.js-dhoroscope-data').text(dateStr);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-datepicker.js?");

/***/ }),

/***/ "./src/js/modules/handle-hamb.js":
/*!***************************************!*\
  !*** ./src/js/modules/handle-hamb.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var hambButton = document.querySelector('.hamb-btn'),\n      xsNav = document.querySelector('.xs-nav');\n  var handleHambClick = function handleHambClick(e) {\n    hambButton.classList.toggle('open');\n    xsNav.classList.toggle('open');\n  };\n  var handleXsNavClick = function handleXsNavClick(e) {\n    if (e.target.classList.contains('nav-link') || e.target.parentNode.classList.contains('nav-link') || e.target.classList.contains('account-btn-login') || e.target.parentNode.classList.contains('account-btn-login') || e.target.classList.contains('account-btn-logined') || e.target.parentNode.classList.contains('account-btn-logined')) {\n      hambButton.classList.remove('open');\n      xsNav.classList.remove('open');\n    }\n  };\n  hambButton && hambButton.addEventListener(\"click\", handleHambClick);\n  xsNav && xsNav.addEventListener(\"click\", handleXsNavClick);\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-hamb.js?");

/***/ }),

/***/ "./src/js/modules/handle-mslider.js":
/*!******************************************!*\
  !*** ./src/js/modules/handle-mslider.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.mslider').slick({\n    arrows: false,\n    autoplay: true,\n    autoplaySpeed: 3000,\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    //fade: true, \n    dots: false,\n    mobileFirst: true,\n    responsive: [{\n      breakpoint: 767,\n      settings: {\n        dots: true\n      }\n    }]\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-mslider.js?");

/***/ }),

/***/ "./src/js/modules/handle-rating.js":
/*!*****************************************!*\
  !*** ./src/js/modules/handle-rating.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  // $(\"#reply-rating\").starRating({\n  //   starSize: 29,\n  //   starShape: 'rounded',      \n  //   totalStars: 5,\n  //   useFullStars: true,\n  //   emptyColor: \"#e8bbc5\",\n  //   hoverColor: \"#6d1028\",\n  //   activeColor: \"#6d1028\",\n  //   ratedColor: \"#6d1028\",\n  //   useGradient: false,\n  //   disableAfterRate: false,      \n  //   //readOnly: true,\n  //   //initialRating: 0,\n  //   callback: function(currentRating, $el){                \n  //     $(\"#reply-rating\").attr('data-rating', currentRating);\n  //     // console.log(currentRating);\n  //     //or vanilla JS\n  //     //document.getElementById(\"reply-rating\").setAttribute('data-rating', currentRating);\n  //   }\n  // });\n\n  $(\".testi-rating\").starRating({\n    starSize: 27,\n    totalStars: 5,\n    useFullStars: true,\n    emptyColor: \"#c3c3c3\",\n    hoverColor: \"#FD81E2\",\n    activeColor: \"#FD81E2\",\n    ratedColor: \"#FD81E2\",\n    strokeColor: '#ffffff',\n    useGradient: false,\n    readOnly: true\n  });\n  $(\".modal-rating\").starRating({\n    starSize: 27,\n    totalStars: 5,\n    useFullStars: true,\n    emptyColor: \"#c3c3c3\",\n    hoverColor: \"#FD81E2\",\n    activeColor: \"#FD81E2\",\n    ratedColor: \"#FD81E2\",\n    strokeColor: '#ffffff',\n    useGradient: false,\n    readOnly: false,\n    disableAfterRate: false,\n    initialRating: 0,\n    callback: function callback(currentRating, $el) {\n      $(\"#modal-rating\").attr('data-rating', currentRating);\n      // console.log(currentRating);\n      //or vanilla JS\n      //document.getElementById(\"modal-rating\").setAttribute('data-rating', currentRating);\n    }\n  });\n  $(\".herocomm-rating\").starRating({\n    starSize: 27,\n    totalStars: 5,\n    useFullStars: true,\n    emptyColor: \"#c3c3c3\",\n    hoverColor: \"#FD81E2\",\n    activeColor: \"#FD81E2\",\n    ratedColor: \"#FD81E2\",\n    strokeColor: '#ffffff',\n    useGradient: false,\n    readOnly: true\n  });\n  $(\".answercomment-rating\").starRating({\n    starSize: 27,\n    totalStars: 5,\n    useFullStars: true,\n    emptyColor: \"#c3c3c3\",\n    hoverColor: \"#FD81E2\",\n    activeColor: \"#FD81E2\",\n    ratedColor: \"#FD81E2\",\n    strokeColor: '#ffffff',\n    useGradient: false,\n    readOnly: false,\n    disableAfterRate: false,\n    initialRating: 5,\n    callback: function callback(currentRating, $el) {\n      $(\"#answercomment-rating\").attr('data-rating', currentRating);\n      // console.log(currentRating);\n      //or vanilla JS\n      //document.getElementById(\"comment-rating\").setAttribute('data-rating', currentRating);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-rating.js?");

/***/ }),

/***/ "./src/js/modules/handle-selects.js":
/*!******************************************!*\
  !*** ./src/js/modules/handle-selects.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.js-select2').select2({\n    minimumResultsForSearch: Infinity,\n    // dropdownAutoWidth : true,\n    width: '100%'\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-selects.js?");

/***/ }),

/***/ "./src/js/modules/handle-support-form.js":
/*!***********************************************!*\
  !*** ./src/js/modules/handle-support-form.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var supportForm = document.getElementById(\"support-form\"),\n      supportFormMessage = document.getElementById(\"support-form-message\");\n  supportForm && supportForm.addEventListener(\"submit\", checkSupportForm);\n  function checkSupportForm(e) {\n    e.preventDefault();\n    submitSupportForm(e);\n    return false;\n  }\n  function submitSupportForm(e) {\n    var supportname = encodeURIComponent(document.getElementById('supportname').value);\n    var supportemail = encodeURIComponent(document.getElementById('supportemail').value);\n    var supporttextarea = encodeURIComponent(document.getElementById('supporttextarea').value);\n\n    var supportparameters = 'supportname=' + supportname + '&supportemail=' + supportemail + '&supporttextarea=' + supporttextarea;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     supportForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(supportForm.method, supportForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    // console.log(supportparameters);\n    xhr.send(supportparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-support-form.js?");

/***/ }),

/***/ "./src/js/modules/handle-testilider.js":
/*!*********************************************!*\
  !*** ./src/js/modules/handle-testilider.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.testislider').slick({\n    arrows: false,\n    // autoplay: true, \n    // autoplaySpeed: 3000,   \n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    //fade: true, \n    dots: false,\n    mobileFirst: true,\n    responsive: [{\n      breakpoint: 1199,\n      settings: {\n        arrows: true\n      }\n    }]\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-testilider.js?");

/***/ })

/******/ });