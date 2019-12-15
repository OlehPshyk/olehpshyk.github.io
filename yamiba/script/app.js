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
eval("\n\n__webpack_require__(/*! ./modules/handle-hamb */ \"./src/js/modules/handle-hamb.js\");\n\n__webpack_require__(/*! ./modules/handle-mslider */ \"./src/js/modules/handle-mslider.js\");\n\n__webpack_require__(/*! ./modules/handle-testilider */ \"./src/js/modules/handle-testilider.js\");\n\n__webpack_require__(/*! ./modules/handle-datepicker.js */ \"./src/js/modules/handle-datepicker.js\");\n\n__webpack_require__(/*! ./modules/handle-rating */ \"./src/js/modules/handle-rating.js\");\n\n__webpack_require__(/*! ./modules/handle-record-tabs */ \"./src/js/modules/handle-record-tabs.js\");\n\n__webpack_require__(/*! ./modules/handle-selects */ \"./src/js/modules/handle-selects.js\");\n\n__webpack_require__(/*! ./modules/handle-account-list */ \"./src/js/modules/handle-account-list.js\");\n\n__webpack_require__(/*! ./modules/handle-tarot-card-record */ \"./src/js/modules/handle-tarot-card-record.js\");\n\n__webpack_require__(/*! ./modules/handle-katina-tabs */ \"./src/js/modules/handle-katina-tabs.js\");\n\n__webpack_require__(/*! ./modules/handle-katina-card-record */ \"./src/js/modules/handle-katina-card-record.js\");\n\n__webpack_require__(/*! ./modules/handle-custom-scroll */ \"./src/js/modules/handle-custom-scroll.js\");\n\n__webpack_require__(/*! ./modules/handle-answercomment-form */ \"./src/js/modules/handle-answercomment-form.js\");\n\n__webpack_require__(/*! ./modules/handle-support-form */ \"./src/js/modules/handle-support-form.js\");\n\n__webpack_require__(/*! ./modules/handle-profil-form */ \"./src/js/modules/handle-profil-form.js\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/handle-account-list.js":
/*!***********************************************!*\
  !*** ./src/js/modules/handle-account-list.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  var accountList = new List('account-list1', {\n    page: 10,\n    pagination: {\n      name: \"account-pagination\",\n      paginationClass: \"account-pagination\",\n      innerWindow: 1,\n      outerWindow: 1\n      // left: 1,\n      // right: 1,\n    }\n  });\n\n  var accountList = new List('account-list2', {\n    page: 10,\n    pagination: {\n      name: \"account-pagination\",\n      paginationClass: \"account-pagination\",\n      innerWindow: 1,\n      outerWindow: 1\n      // left: 1,\n      // right: 1,\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-account-list.js?");

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
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var today = new Date();\n  var dd = String(today.getDate()).padStart(2, '0');\n  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!\n  var yyyy = today.getFullYear();\n\n  today = dd + '.' + mm + '.' + yyyy;\n\n  $('.js-dhoroscope-data').text(today);\n\n  flatpickr(\".flatpickr\", {\n    \"locale\": \"tr\", // locale for this instance only\n    wrap: true,\n    disableMobile: \"true\",\n    dateFormat: \"d.m.Y\",\n    //defaultDate=\"\",\n    onChange: function onChange(selectedDates, dateStr, instance) {\n      // console.log(dateStr);\n      $('.js-dhoroscope-data').text(dateStr);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-datepicker.js?");

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

/***/ "./src/js/modules/handle-katina-card-record.js":
/*!*****************************************************!*\
  !*** ./src/js/modules/handle-katina-card-record.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var katinaCardList1 = document.getElementById(\"katina-card-list-1\"),\n      katinaCardList2 = document.getElementById(\"katina-card-list-2\"),\n      katinaCardList3 = document.getElementById(\"katina-card-list-3\"),\n      MAXQUANTITYKATINA1 = 10,\n      MAXQUANTITYKATINA2 = 7,\n      MAXQUANTITYKATINA3 = 7,\n      QKATINACARD = 61;\n  var qSKatinaCard1 = 0,\n      qSKatinaCard2 = 0,\n      qSKatinaCard3 = 0;\n\n  var qKatina1SelectedCard = document.getElementById(\"katina1-q-sel\"),\n      qKatina2SelectedCard = document.getElementById(\"katina2-q-sel\"),\n      qKatina3SelectedCard = document.getElementById(\"katina3-q-sel\");\n  if (qKatina1SelectedCard) {\n    qKatina1SelectedCard.innerHTML = qSKatinaCard1;\n  };\n  if (qKatina2SelectedCard) {\n    qKatina2SelectedCard.innerHTML = qSKatinaCard2;\n  };\n  if (qKatina3SelectedCard) {\n    qKatina3SelectedCard.innerHTML = qSKatinaCard3;\n  };\n\n  katinaCardList1 && katinaCardList1.addEventListener(\"click\", openKatinaCard1);\n  katinaCardList2 && katinaCardList2.addEventListener(\"click\", openKatinaCard2);\n  katinaCardList3 && katinaCardList3.addEventListener(\"click\", openKatinaCard3);\n  var arrayKatina = Array.from(Array(QKATINACARD), function (d, i) {\n    return i + 1;\n  });\n  var getShuffledArr = function getShuffledArr(arr) {\n    var newArr = arr.slice();\n    for (var i = newArr.length - 1; i > 0; i--) {\n      var rand = Math.floor(Math.random() * (i + 1));\n      var _ref = [newArr[rand], newArr[i]];\n      newArr[i] = _ref[0];\n      newArr[rand] = _ref[1];\n    }\n    return newArr;\n  };\n  var mixedArrayKatina1 = getShuffledArr(arrayKatina),\n      mixedArrayKatina2 = getShuffledArr(arrayKatina),\n      mixedArrayKatina3 = getShuffledArr(arrayKatina);\n  function openKatinaCard1(e) {\n    var target = e.target;\n    while (target != katinaCardList1) {\n      if (target.classList.contains(\"card\")) {\n        if (!target.classList.contains(\"isopen\")) {\n          openCard1(target);\n        }\n        return;\n      }\n      target = target.parentNode;\n    }\n  }\n  function openKatinaCard2(e) {\n    var target = e.target;\n    while (target != katinaCardList2) {\n      if (target.classList.contains(\"card\")) {\n        if (!target.classList.contains(\"isopen\")) {\n          openCard2(target);\n        }\n        return;\n      }\n      target = target.parentNode;\n    }\n  }\n  function openKatinaCard3(e) {\n    var target = e.target;\n    while (target != katinaCardList3) {\n      if (target.classList.contains(\"card\")) {\n        openCard3(target);\n        return;\n      }\n      target = target.parentNode;\n    }\n  }\n  function openCard1(e) {\n    e.classList.add(\"isopen\");\n    var selectedId = e.getAttribute(\"id\").slice(8);\n    e.querySelector(\".frontside\").style.backgroundImage = \"url(./img/katina/k_\" + mixedArrayKatina1[selectedId - 1] + \".png)\";\n    e.dataset.katinaId = mixedArrayKatina1[selectedId - 1];\n    qSKatinaCard1++;\n    qKatina1SelectedCard.innerHTML = qSKatinaCard1;\n    checkQuantity1(qSKatinaCard1);\n  }\n  function openCard2(e) {\n    e.classList.add(\"isopen\");\n    var selectedId = e.getAttribute(\"id\").slice(8);\n    e.querySelector(\".frontside\").style.backgroundImage = \"url(./img/katina/k_\" + mixedArrayKatina2[selectedId - 1] + \".png)\";\n    e.dataset.katinaId = mixedArrayKatina2[selectedId - 1];\n    qSKatinaCard2++;\n    qKatina2SelectedCard.innerHTML = qSKatinaCard2;\n    checkQuantity2(qSKatinaCard2);\n  }\n  function openCard3(e) {\n    e.classList.add(\"isopen\");\n    var selectedId = e.getAttribute(\"id\").slice(8);\n    e.querySelector(\".frontside\").style.backgroundImage = \"url(./img/katina/k_\" + mixedArrayKatina3[selectedId - 1] + \".png)\";\n    e.dataset.katinaId = mixedArrayKatina3[selectedId - 1];\n    qSKatinaCard3++;\n    qKatina3SelectedCard.innerHTML = qSKatinaCard3;\n    checkQuantity3(qSKatinaCard3);\n  }\n  function checkQuantity1(quantitySelectedKatinaCard) {\n    if (quantitySelectedKatinaCard === MAXQUANTITYKATINA1) {\n      katinaCardList1.removeEventListener(\"click\", openKatinaCard1);\n      katinaCardList1.classList.add(\"max-selected\");\n      //console.log(\"selected maximum card\");      \n    }\n  }\n  function checkQuantity2(quantitySelectedKatinaCard) {\n    if (quantitySelectedKatinaCard === MAXQUANTITYKATINA2) {\n      katinaCardList2.removeEventListener(\"click\", openKatinaCard2);\n      katinaCardList2.classList.add(\"max-selected\");\n      //console.log(\"selected maximum card\");      \n    }\n  }\n  function checkQuantity3(quantitySelectedKatinaCard) {\n    if (quantitySelectedKatinaCard === MAXQUANTITYKATINA3) {\n      katinaCardList3.removeEventListener(\"click\", openKatinaCard3);\n      katinaCardList3.classList.add(\"max-selected\");\n      //console.log(\"selected maximum card\");      \n    }\n  }\n  var katinaRecordForm = document.getElementById(\"katina-record-form\"),\n      katinaRecordFormMessage = document.getElementById(\"record-form-message\");\n  katinaRecordForm && katinaRecordForm.addEventListener(\"submit\", checkKatinaRecordForm);\n  function checkKatinaRecordForm(e) {\n    e.preventDefault();\n    submitKatinaRecordForm(e);\n    return false;\n  }\n  function submitKatinaRecordForm(e) {\n    var katinaRFemail = encodeURIComponent(document.getElementById('katina-email').value);\n    var katinaRFemailrepeat = encodeURIComponent(document.getElementById('katina-repeat-email').value);\n    var katinaRFname = encodeURIComponent(document.getElementById('katina-name').value);\n    var katinaRFgender = encodeURIComponent(document.getElementById('katina-gender').value);\n    var katinaRFkatinaday = encodeURIComponent(document.getElementById('katina-day').value);\n    var katinaRFkatinamoon = encodeURIComponent(document.getElementById('katina-moon').value);\n    var katinaRFkatinayear = encodeURIComponent(document.getElementById('katina-year').value);\n    var katinaRFkatinarelationstatus = encodeURIComponent(document.getElementById('katina-relationstatus').value);\n    var katinaRFkatinaquestion = encodeURIComponent(document.getElementById('katina-question').value);\n    var katinaType = katinaRecordForm.querySelector(\".katina-tab-pane.active .card-grid\").getAttribute(\"id\").slice(17);\n    var selectedKatinaCards = katinaRecordForm.querySelectorAll(\".katina-tab-pane.active .card-grid .card.isopen\");\n    var katinaRFselectedKatinaCards = [].concat(_toConsumableArray(selectedKatinaCards)).map(function (item) {\n      return item.dataset.katinaId;\n    }).join('&');\n    var katinaRFparameters = 'katinaRFemail=' + katinaRFemail + '&katinaRFemailrepeat=' + katinaRFemailrepeat + '&katinaRFname=' + katinaRFname + '&katinaRFgender=' + katinaRFgender + '&katinaRFkatinaday=' + katinaRFkatinaday + '&katinaRFkatinamoon=' + katinaRFkatinamoon + '&katinaRFkatinayear=' + katinaRFkatinayear + '&katinaRFkatinarelationstatus=' + katinaRFkatinarelationstatus + '&katinaRFkatinaquestion=' + katinaRFkatinaquestion + '&katinaType=' + katinaType + '&katinaRFselectedKatinaCards=' + katinaRFselectedKatinaCards;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     katinaRecordFormMessage.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(katinaRecordForm.method, katinaRecordForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    console.log(katinaRFparameters);\n    xhr.send(katinaRFparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-katina-card-record.js?");

/***/ }),

/***/ "./src/js/modules/handle-katina-tabs.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-katina-tabs.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  function katinaTabs(container) {\n    var katinaTabs = container.querySelectorAll('.katina-tab');\n    var katinaPanes = container.querySelectorAll('.katina-tab-pane');\n    each(katinaTabs, function (i, tab) {\n      tab.addEventListener('click', function (e) {\n        activate(katinaTabs, i);\n        activate(katinaPanes, i);\n      });\n    });\n    function activate(tabs, index) {\n      each(tabs, function (i, tab) {\n        if (i != index) {\n          removeClass(tab, 'active');\n        } else {\n          addClass(tab, 'active');\n        }\n      });\n    }\n  }\n  function each(elements, fn) {\n    for (var i = elements.length - 1; i >= 0; i--) {\n      fn(i, elements[i]);\n    }\n  }\n  function hasClass(el, cls) {\n    return el.className.match(new RegExp('(\\\\s|^)' + cls + '(\\\\s|$)'));\n  }\n  function addClass(el, cls) {\n    if (!hasClass(el, cls)) {\n      el.className += \" \" + cls;\n    }\n  }\n  function removeClass(el, cls) {\n    if (hasClass(el, cls)) {\n      var reg = new RegExp('(\\\\s|^)' + cls + '(\\\\s|$)');\n      el.className = el.className.replace(reg, '');\n    }\n  }\n  var katinaTabContainer = document.querySelector('.js-katina-tab-container');\n  //console.log(recordTabContainer);\n  katinaTabContainer && katinaTabs(katinaTabContainer);\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-katina-tabs.js?");

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

/***/ "./src/js/modules/handle-profil-form.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-profil-form.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var profilForm = document.getElementById(\"profil-form\"),\n      profilFormMessage = document.getElementById(\"profil-form-message\");\n\n  profilForm && profilForm.addEventListener(\"submit\", checkProfilForm);\n\n  function checkProfilForm(e) {\n    e.preventDefault();\n    checkingProfilForm() ? goodProfilForm(e) : badProfilForm(e);\n    return false;\n  }\n  function checkingProfilForm() {\n    return true;\n  }\n  function goodProfilForm(e) {\n    submitProfilForm(e);\n  }\n  function badProfilForm(e) {}\n  function submitProfilForm(e) {\n    var profilname = encodeURIComponent(document.getElementById('profilname').value);\n    var profilemail = encodeURIComponent(document.getElementById('profilemail').value);\n    var profilpassword = encodeURIComponent(document.getElementById('profilpassword').value);\n    var profilgender = encodeURIComponent(document.getElementById('profilgender').value);\n    var profildurumunu = encodeURIComponent(document.getElementById('profildurumunu').value);\n\n    var profilplaceborn = encodeURIComponent(document.getElementById('profilplaceborn').value);\n    var profilday = encodeURIComponent(document.getElementById('profilday').value);\n    var profilmoon = encodeURIComponent(document.getElementById('profilmoon').value);\n    var profilyear = encodeURIComponent(document.getElementById('profilyear').value);\n    var profilnumber1 = encodeURIComponent(document.getElementById('profilnumber1').value);\n    var profilnumber2 = encodeURIComponent(document.getElementById('profilnumber2').value);\n\n    var profilparameters = \"profilname=\" + profilname + \"&profilemail=\" + profilemail + \"&profilpassword=\" + profilpassword + \"&profilgender=\" + profilgender + \"&profildurumunu=\" + profildurumunu + \"&profilplaceborn=\" + profilplaceborn + \"&profilday=\" + profilday + \"&profilmoon=\" + profilmoon + \"&profilyear=\" + profilyear + \"&profilnumber1=\" + profilnumber1 + \"&profilnumber2=\" + profilnumber2;\n\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     profilForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(profilForm.method, profilForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    // console.log(profilparameters);\n    xhr.send(profilparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-profil-form.js?");

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

/***/ "./src/js/modules/handle-record-tabs.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-record-tabs.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  function recordTabs(container) {\n    var recordTabs = container.querySelectorAll('.record-tab');\n    var recordPanes = container.querySelectorAll('.record-tab-pane');\n    each(recordTabs, function (i, tab) {\n      tab.addEventListener('click', function (e) {\n        activate(recordTabs, i);\n        activate(recordPanes, i);\n      });\n    });\n    function activate(tabs, index) {\n      each(tabs, function (i, tab) {\n        if (i != index) {\n          removeClass(tab, 'active');\n        } else {\n          addClass(tab, 'active');\n        }\n      });\n    }\n  }\n  function each(elements, fn) {\n    for (var i = elements.length - 1; i >= 0; i--) {\n      fn(i, elements[i]);\n    }\n  }\n  function hasClass(el, cls) {\n    return el.className.match(new RegExp('(\\\\s|^)' + cls + '(\\\\s|$)'));\n  }\n  function addClass(el, cls) {\n    if (!hasClass(el, cls)) {\n      el.className += \" \" + cls;\n    }\n  }\n  function removeClass(el, cls) {\n    if (hasClass(el, cls)) {\n      var reg = new RegExp('(\\\\s|^)' + cls + '(\\\\s|$)');\n      el.className = el.className.replace(reg, '');\n    }\n  }\n  var recordTabContainer = document.querySelector('.js-record-tab-container');\n  //console.log(recordTabContainer);\n  recordTabContainer && recordTabs(recordTabContainer);\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-record-tabs.js?");

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

/***/ "./src/js/modules/handle-tarot-card-record.js":
/*!****************************************************!*\
  !*** ./src/js/modules/handle-tarot-card-record.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var tarotCardList = document.getElementById(\"tarot-card-list\"),\n      MAXQUANTITYTAROT = 6,\n      QTAROTCARD = 78;\n  var quantitySelectedTarotCard = 0;\n  tarotCardList && tarotCardList.addEventListener(\"click\", openTarotCard);\n\n  var qTarotSelectedCard = document.getElementById(\"tarot-q-sel\");\n  if (qTarotSelectedCard) {\n    qTarotSelectedCard.innerHTML = quantitySelectedTarotCard;\n  };\n\n  var arrayTarot = Array.from(Array(QTAROTCARD), function (d, i) {\n    return i + 1;\n  });\n  var getShuffledArr = function getShuffledArr(arr) {\n    var newArr = arr.slice();\n    for (var i = newArr.length - 1; i > 0; i--) {\n      var rand = Math.floor(Math.random() * (i + 1));\n      var _ref = [newArr[rand], newArr[i]];\n      newArr[i] = _ref[0];\n      newArr[rand] = _ref[1];\n    }\n    return newArr;\n  };\n  //let mixedArrayTarot = arrayTarot;  // notShuffled \n  var mixedArrayTarot = getShuffledArr(arrayTarot);\n  function openTarotCard(e) {\n    var target = e.target;\n    while (target != tarotCardList) {\n      if (target.classList.contains(\"card\")) {\n        if (!target.classList.contains(\"isopen\")) {\n          openCard(target);\n        }\n        return;\n      }\n      target = target.parentNode;\n    }\n  }\n  function openCard(e) {\n    e.classList.add(\"isopen\");\n    var selectedId = e.getAttribute(\"id\").slice(5);\n    //console.log(\"selectedNumber = \"+selectedId);\n\n    e.querySelector(\".frontside\").style.backgroundImage = \"url(./img/tarot/t_\" + mixedArrayTarot[selectedId - 1] + \".png)\";\n    e.dataset.tarotId = mixedArrayTarot[selectedId - 1];\n    quantitySelectedTarotCard++;\n    qTarotSelectedCard.innerHTML = quantitySelectedTarotCard;\n    checkQuantity(quantitySelectedTarotCard);\n  }\n  function checkQuantity(quantitySelectedTarotCard) {\n    if (quantitySelectedTarotCard === MAXQUANTITYTAROT) {\n      tarotCardList.removeEventListener(\"click\", openTarotCard);\n      tarotCardList.classList.add(\"max-selected\");\n      //console.log(\"selected maximum card\");      \n    }\n  }\n\n  var tarotRecordForm = document.getElementById(\"tarot-record-form\"),\n      tarotRecordFormMessage = document.getElementById(\"record-form-message\");\n\n  tarotRecordForm && tarotRecordForm.addEventListener(\"submit\", checkTarotRecordForm);\n\n  function checkTarotRecordForm(e) {\n    e.preventDefault();\n    submitTarotRecordForm(e);\n    return false;\n  }\n\n  function submitTarotRecordForm(e) {\n    var tarotRFemail = encodeURIComponent(document.getElementById('tarot-email').value);\n    var tarotRFemailrepeat = encodeURIComponent(document.getElementById('tarot-repeat-email').value);\n    var tarotRFname = encodeURIComponent(document.getElementById('tarot-name').value);\n    var tarotRFgender = encodeURIComponent(document.getElementById('tarot-gender').value);\n    var tarotRFtarotday = encodeURIComponent(document.getElementById('tarot-day').value);\n    var tarotRFtarotmoon = encodeURIComponent(document.getElementById('tarot-moon').value);\n    var tarotRFtarotyear = encodeURIComponent(document.getElementById('tarot-year').value);\n    var tarotRFtarotrelationstatus = encodeURIComponent(document.getElementById('tarot-relationstatus').value);\n    var tarotRFtarotquestion = encodeURIComponent(document.getElementById('tarot-question').value);\n\n    var selectedTarotCards = tarotCardList.querySelectorAll(\".card.isopen\");\n    var tarotRFselectedTarotCards = [].concat(_toConsumableArray(selectedTarotCards)).map(function (item) {\n      return item.dataset.tarotId;\n    }).join('&');\n\n    var tarotRFparameters = 'tarotRFemail=' + tarotRFemail + '&tarotRFemailrepeat=' + tarotRFemailrepeat + '&tarotRFname=' + tarotRFname + '&tarotRFgender=' + tarotRFgender + '&tarotRFtarotday=' + tarotRFtarotday + '&tarotRFtarotmoon=' + tarotRFtarotmoon + '&tarotRFtarotyear=' + tarotRFtarotyear + '&tarotRFtarotrelationstatus=' + tarotRFtarotrelationstatus + '&tarotRFtarotquestion=' + tarotRFtarotquestion + '&tarotRFselectedTarotCards=' + tarotRFselectedTarotCards;\n\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     tarotRecordFormMessage.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(tarotRecordForm.method, tarotRecordForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(tarotRFparameters);\n    xhr.send(tarotRFparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-tarot-card-record.js?");

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