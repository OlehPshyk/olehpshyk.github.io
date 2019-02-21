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
eval("\n\n__webpack_require__(/*! ./modules/handle-submitform */ \"./src/js/modules/handle-submitform.js\");\n\n__webpack_require__(/*! ./modules/handle-sticky-form */ \"./src/js/modules/handle-sticky-form.js\");\n\n__webpack_require__(/*! ./modules/handle-animationXL */ \"./src/js/modules/handle-animationXL.js\");\n\n__webpack_require__(/*! ./modules/handle-scrollify */ \"./src/js/modules/handle-scrollify.js\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/handle-animationXL.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-animationXL.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  var graphikSectionA = document.getElementById(\"graphik-section\");\n\n  document.addEventListener(\"scroll\", function () {\n    var startA = graphikSectionA.offsetTop;\n    if (window.innerWidth > 1200) {\n      if (window.pageYOffset >= startA) {\n        graphikSectionA.classList.add('animation');\n      }\n      if (window.pageYOffset === 0) {\n        graphikSectionA.classList.remove('animation');\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-animationXL.js?");

/***/ }),

/***/ "./src/js/modules/handle-scrollify.js":
/*!********************************************!*\
  !*** ./src/js/modules/handle-scrollify.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  if (window.DISABLE_SCROLLIFY === true) {\n    //console.log('Scrollify is disabled');\n    return;\n  }\n  var isInitScrollify = false;\n  window.addEventListener(\"resize\", function () {\n    if (window.innerWidth < 1200) {\n      if (!isInitScrollify) {\n        initScrollify();\n      }\n      $.scrollify.enable();\n    } else $.scrollify.disable();\n  });\n\n  if (window.innerWidth < 1200) {\n    initScrollify();\n  }\n\n  function initScrollify() {\n    isInitScrollify = true;\n    $.scrollify({\n      section: \".scrollify-section\",\n      sectionName: \"section-name\",\n      // interstitialSection : \".footer\",\n      // easing: \"easeOutExpo\",\n      // scrollSpeed: 1200,\n      setHeights: false,\n      offset: 0, //-140,\n      // scrollbars: true,\n      // standardScrollElements: \"\",\n      // overflowScroll: true,\n      // updateHash: true,\n      // touchScroll:true,\n      // before:function() {},\n      // after:function() {},\n      // afterResize:function() {},\n      // afterRender:function() {}\n      // before:function(indexPosition,snapToElm){\n      // },\n      after: function after(i, panels) {\n        var ref = panels[i].attr(\"data-section-name\");\n        console.log(ref);\n        if (ref === \"graphik\") {\n          $(\".graphik-section\").addClass(\"animation\");\n        } else {\n          $(\".graphik-section\").removeClass(\"animation\");\n        }\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-scrollify.js?");

/***/ }),

/***/ "./src/js/modules/handle-sticky-form.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-sticky-form.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  var formSection = document.getElementById(\"form-section\");\n  var graphikSection = document.getElementById(\"graphik-section\");\n  var sticky = formSection.offsetTop;\n\n  document.addEventListener(\"scroll\", function () {\n    if (window.innerWidth > 1200) {\n      stickyForm();\n    }\n  });\n\n  window.addEventListener(\"resize\", function () {\n    if (window.innerWidth < 1200) {\n      formSection.classList.remove(\"sticky\");\n      graphikSection.style.paddingTop = '';\n    }\n  });\n\n  function stickyForm() {\n    if (window.pageYOffset > sticky) {\n      formSection.classList.add(\"sticky\");\n      var formSectionHeight = formSection.offsetHeight;\n      graphikSection.style.paddingTop = formSectionHeight + \"px\";\n    } else {\n      formSection.classList.remove(\"sticky\");\n      graphikSection.style.paddingTop = '';\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-sticky-form.js?");

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