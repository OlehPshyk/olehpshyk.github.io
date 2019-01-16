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
eval("\n\n__webpack_require__(/*! ./modules/handle-captchas */ \"./src/js/modules/handle-captchas.js\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/handle-captchas.js":
/*!*******************************************!*\
  !*** ./src/js/modules/handle-captchas.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  // capcha initialize\n  var captchaImageCode = document.getElementById(\"CaptchaImageCode\"),\n      userCaptchaCode = document.getElementById(\"UserCaptchaCode\"),\n      wrongCaptchaError = document.getElementById(\"WrongCaptchaError\"),\n      successMessage = document.getElementById(\"SuccessMessage\"),\n      form = document.getElementById(\"form\"),\n      reloadBtn = document.getElementById(\"ReloadBtn\");\n  var cd;\n  CreateCaptcha();\n  form && form.addEventListener(\"submit\", checkForm);\n  reloadBtn && reloadBtn.addEventListener(\"click\", CreateCaptcha);\n\n  function checkForm(e) {\n    ValidateCaptcha() ? goodCapcha(e) : badCapcha(e);\n    return false;\n  }\n  function goodCapcha(e) {\n    //console.log(\"submit\");\n    //e.preventDefault();\n\n    if (userCaptchaCode) {\n      userCaptchaCode.value = \"\";\n      userCaptchaCode.setAttribute(\"placeholder\", \"Kodu giriniz\");\n    }\n\n    CreateCaptcha();\n    if (wrongCaptchaError) {\n      wrongCaptchaError.style.display = \"none\";\n    }\n    if (successMessage) {\n      successMessage.style.display = \"block\";\n    }\n    submitForm(e);\n  }\n  function submitForm(e) {\n\n    e.preventDefault();\n    e.stopPropagation();\n\n    var name = encodeURIComponent(document.getElementById('name').value);\n    var phone = encodeURIComponent(document.getElementById('phone').value);\n    var email = encodeURIComponent(document.getElementById('email').value);\n\n    var parameters = 'name=' + name + '&phone=' + phone + '&email=' + email;\n\n    var xhr = new XMLHttpRequest();\n\n    xhr.onreadystatechange = function (e) {\n      if (xhr.readyState === 4 && xhr.status === 200) {\n        form.innerHTML = xhr.responseText;\n      }\n    };\n\n    xhr.open(form.method, form.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    xhr.send(parameters);\n\n    //form && form.submit();\n  }\n  function badCapcha(e) {\n    e.preventDefault();\n    if (userCaptchaCode && userCaptchaCode.value == \"\" || userCaptchaCode.value == null || userCaptchaCode.value == \"undefined\") {\n      if (wrongCaptchaError) {\n        wrongCaptchaError.innerHTML = \"Please enter code given below in a picture.\";\n        wrongCaptchaError.style.display = 'block';\n      }\n      userCaptchaCode && userCaptchaCode.focus();\n    } else {\n      if (wrongCaptchaError) {\n        wrongCaptchaError.innerHTML = \"Invalid Captcha! Please try again.\";\n        wrongCaptchaError.style.display = 'block';\n      }\n      CreateCaptcha();\n      userCaptchaCode && userCaptchaCode.focus();\n    }\n  }\n  // Create Captcha\n  function CreateCaptcha() {\n    //var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');\n    //var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', '1', '2', '3', '4', '5', '6', '7', '8', '9');\n    var alpha = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9');\n    var i;\n    for (i = 0; i < 6; i++) {\n      var a = alpha[Math.floor(Math.random() * alpha.length)];\n      var b = alpha[Math.floor(Math.random() * alpha.length)];\n      var c = alpha[Math.floor(Math.random() * alpha.length)];\n      var d = alpha[Math.floor(Math.random() * alpha.length)];\n      var e = alpha[Math.floor(Math.random() * alpha.length)];\n      var f = alpha[Math.floor(Math.random() * alpha.length)];\n    }\n    cd = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f;\n    if (captchaImageCode) {\n      while (captchaImageCode.firstChild) {\n        captchaImageCode.removeChild(captchaImageCode.firstChild);\n      }\n    }\n    //.append('<canvas id=\"CapCode\" class=\"capcode\"></canvas>')\n    var canvas = document.createElement('canvas');\n    if (canvas) {\n      canvas.id = \"CapCode\";\n      canvas.setAttribute(\"class\", \"capcode\");\n      captchaImageCode && captchaImageCode.appendChild(canvas);\n      var c = document.getElementById(\"CapCode\");\n      if (c) {\n        var ctx = c.getContext(\"2d\"),\n            x = c.width / 2,\n            img = new Image();\n        img.src = \"./img/captcha-bg.jpg\";\n        img.onload = function () {\n          var pattern = ctx.createPattern(img, \"repeat\");\n          ctx.fillStyle = pattern;\n          ctx.fillRect(0, 0, c.width, c.height);\n          ctx.font = \"46px Titillium Web\";\n          ctx.fillStyle = '#ccc';\n          ctx.textAlign = 'center';\n          ctx.setTransform(1, -0.12, 0, 1, 0, 50);\n          ctx.fillText(cd, x, 55);\n        };\n      }\n    }\n  }\n  // Validate Captcha\n  function ValidateCaptcha() {\n    var string1 = removeSpaces(cd);\n    var string2 = removeSpaces(userCaptchaCode.value);\n    if (string1 == string2) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n  // Remove Spaces\n  function removeSpaces(string) {\n    return string.split(' ').join('');\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-captchas.js?");

/***/ })

/******/ });