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
eval("\n\n__webpack_require__(/*! ./modules/handle-submit-news */ \"./src/js/modules/handle-submit-news.js\");\n\n__webpack_require__(/*! ./modules/handle-dropdown */ \"./src/js/modules/handle-dropdown.js\");\n\n__webpack_require__(/*! ./modules/handle-hamb */ \"./src/js/modules/handle-hamb.js\");\n\n__webpack_require__(/*! ./modules/handle-mslider */ \"./src/js/modules/handle-mslider.js\");\n\n__webpack_require__(/*! ./modules/handle-modal */ \"./src/js/modules/handle-modal.js\");\n\n__webpack_require__(/*! ./modules/handle-login-form */ \"./src/js/modules/handle-login-form.js\");\n\n__webpack_require__(/*! ./modules/handle-sign-up-form */ \"./src/js/modules/handle-sign-up-form.js\");\n\n__webpack_require__(/*! ./modules/handle-datepicker.js */ \"./src/js/modules/handle-datepicker.js\");\n\n__webpack_require__(/*! ./modules/handle-sign-slider */ \"./src/js/modules/handle-sign-slider.js\");\n\n__webpack_require__(/*! ./modules/handle-submit-password */ \"./src/js/modules/handle-submit-password.js\");\n\n__webpack_require__(/*! ./modules/handle-collapsible */ \"./src/js/modules/handle-collapsible.js\");\n\n__webpack_require__(/*! ./modules/handle-rating */ \"./src/js/modules/handle-rating.js\");\n\n__webpack_require__(/*! ./modules/handle-replay-form */ \"./src/js/modules/handle-replay-form.js\");\n\n__webpack_require__(/*! ./modules/handle-record-tabs */ \"./src/js/modules/handle-record-tabs.js\");\n\n__webpack_require__(/*! ./modules/handle-selects */ \"./src/js/modules/handle-selects.js\");\n\n__webpack_require__(/*! ./modules/handle-submit-account-info */ \"./src/js/modules/handle-submit-account-info.js\");\n\n__webpack_require__(/*! ./modules/handle-purchases-list */ \"./src/js/modules/handle-purchases-list.js\");\n\n__webpack_require__(/*! ./modules/handle-promotions-list */ \"./src/js/modules/handle-promotions-list.js\");\n\n__webpack_require__(/*! ./modules/handle-checkbox-in-checkout */ \"./src/js/modules/handle-checkbox-in-checkout.js\");\n\n__webpack_require__(/*! ./modules/handle-checkout-form */ \"./src/js/modules/handle-checkout-form.js\");\n\n__webpack_require__(/*! ./modules/handle-phonenumber */ \"./src/js/modules/handle-phonenumber.js\");\n\n__webpack_require__(/*! ./modules/handle-mobil-form */ \"./src/js/modules/handle-mobil-form.js\");\n\n__webpack_require__(/*! ./modules/handle-checkout-select */ \"./src/js/modules/handle-checkout-select.js\");\n\n__webpack_require__(/*! ./modules/handle-cardnumber */ \"./src/js/modules/handle-cardnumber.js\");\n\n__webpack_require__(/*! ./modules/handle-card-form */ \"./src/js/modules/handle-card-form.js\");\n\n__webpack_require__(/*! ./modules/handle-tarot-card-record */ \"./src/js/modules/handle-tarot-card-record.js\");\n\n__webpack_require__(/*! ./modules/handle-katina-tabs */ \"./src/js/modules/handle-katina-tabs.js\");\n\n__webpack_require__(/*! ./modules/handle-katina-card-record */ \"./src/js/modules/handle-katina-card-record.js\");\n\n__webpack_require__(/*! ./modules/handle-account-tabs */ \"./src/js/modules/handle-account-tabs.js\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/handle-account-tabs.js":
/*!***********************************************!*\
  !*** ./src/js/modules/handle-account-tabs.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  function accountTabs(container) {\n    var accountTabs = container.querySelectorAll('.account-tab');\n    var accountPanes = container.querySelectorAll('.account-tab-pane');\n\n    each(accountTabs, function (i, tab) {\n      tab.addEventListener('click', function (e) {\n        activate(accountTabs, i);\n        activate(accountPanes, i);\n      });\n    });\n\n    function activate(tabs, index) {\n      each(tabs, function (i, tab) {\n        if (i != index) {\n          removeClass(tab, 'active');\n        } else {\n          addClass(tab, 'active');\n        }\n      });\n    }\n  }\n  function each(elements, fn) {\n    for (var i = elements.length - 1; i >= 0; i--) {\n      fn(i, elements[i]);\n    }\n  }\n  function hasClass(el, cls) {\n    return el.className.match(new RegExp('(\\\\s|^)' + cls + '(\\\\s|$)'));\n  }\n  function addClass(el, cls) {\n    if (!hasClass(el, cls)) {\n      el.className += \" \" + cls;\n    }\n  }\n  function removeClass(el, cls) {\n    if (hasClass(el, cls)) {\n      var reg = new RegExp('(\\\\s|^)' + cls + '(\\\\s|$)');\n      el.className = el.className.replace(reg, '');\n    }\n  }\n\n  var accountTabContainer = document.querySelector('.js-account-tab-container');\n  //console.log(tabContainer);\n  accountTabContainer && accountTabs(accountTabContainer);\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-account-tabs.js?");

/***/ }),

/***/ "./src/js/modules/handle-card-form.js":
/*!********************************************!*\
  !*** ./src/js/modules/handle-card-form.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var cardForm = document.getElementById(\"card-form\"),\n      cardFormMessage = document.getElementById(\"card-form-message\");\n  cardForm && cardForm.addEventListener(\"submit\", checkCardForm);\n  function checkCardForm(e) {\n    e.preventDefault();\n    submitCardForm(e);\n    return false;\n  }\n  function submitCardForm(e) {\n    var cardname = encodeURIComponent(document.getElementById('card-name').value);\n    var cardnumber = encodeURIComponent(document.getElementById('card-number').value);\n    var cardmoon = encodeURIComponent(document.getElementById('card-moon').value);\n    var cardyear = encodeURIComponent(document.getElementById('card-year').value);\n    var cardcvv = encodeURIComponent(document.getElementById('card-cvv').value);\n\n    var cardparameters = 'cardname=' + cardname + '&cardnumber=' + cardnumber + '&cardmoon=' + cardmoon + '&cardyear=' + cardyear + '&cardcvv=' + cardcvv;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     cardForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(cardForm.method, cardForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(cardparameters);\n    xhr.send(cardparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-card-form.js?");

/***/ }),

/***/ "./src/js/modules/handle-cardnumber.js":
/*!*********************************************!*\
  !*** ./src/js/modules/handle-cardnumber.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var cardNumber = document.getElementById('card-number');\n  if (cardNumber) {\n    var cardMask = new IMask(cardNumber, {\n      mask: '0000-0000-0000-0000',\n      lazy: false, // make placeholder always visible\n      placeholderChar: '_' // defaults to '_'\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-cardnumber.js?");

/***/ }),

/***/ "./src/js/modules/handle-checkbox-in-checkout.js":
/*!*******************************************************!*\
  !*** ./src/js/modules/handle-checkbox-in-checkout.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var checkoutCheckboxes = document.getElementsByClassName(\"ch1-checkbox\"),\n      addonInfo = document.getElementById(\"addonInfo\"),\n      addonText = document.getElementById(\"addonText\"),\n      addonPrice = document.getElementById(\"addonPrice\"),\n      priseM = document.getElementById(\"priseM\"),\n      priceTotal = document.getElementById(\"priceTotal\");\n  var priseMain = void 0;\n  priseMain = priseM && +priseM.textContent || 0;\n  priceTotal && priceTotal.appendChild(document.createTextNode(priseMain));\n  checkoutCheckboxes && [].concat(_toConsumableArray(checkoutCheckboxes)).map(function (item) {\n    return item.addEventListener(\"click\", function (e) {\n      var _this = this;\n\n      var clickedCheckboxBox = this.closest(\".js-ch1-checkbox-box\");\n\n      [].concat(_toConsumableArray(checkoutCheckboxes)).map(function (item) {\n        if (_this !== item) {\n          if (_this.checked) {\n            item.setAttribute(\"disabled\", \"\");\n            item.closest(\".js-ch1-checkbox-box\").classList.add(\"disabled\");\n          } else {\n            item.removeAttribute(\"disabled\");\n            item.closest(\".js-ch1-checkbox-box\").classList.remove(\"disabled\");\n          }\n        }\n      });\n      if (this.checked) {\n        var text = clickedCheckboxBox.dataset.text || \"\";\n        var price = +clickedCheckboxBox.dataset.price || 0;\n        var totalNewPrice = priseMain + price;\n        addonText && addonText.appendChild(document.createTextNode(text));\n        addonPrice && addonPrice.appendChild(document.createTextNode(price));\n        priceTotal.textContent = totalNewPrice;\n      } else {\n        addonText && addonText.removeChild(addonText.firstChild);\n        addonPrice && addonPrice.removeChild(addonPrice.firstChild);\n        priceTotal.textContent = priseMain;\n      }\n      clickedCheckboxBox.classList.toggle(\"ischecked\");\n      addonInfo.classList.toggle(\"is-selected\");\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-checkbox-in-checkout.js?");

/***/ }),

/***/ "./src/js/modules/handle-checkout-form.js":
/*!************************************************!*\
  !*** ./src/js/modules/handle-checkout-form.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var checkoutForm = document.getElementById(\"checkout-form\"),\n      checkoutFormMessage = document.getElementById(\"checkout-form-message\");\n  checkoutForm && checkoutForm.addEventListener(\"submit\", checkCheckoutForm);\n  function checkCheckoutForm(e) {\n    e.preventDefault();\n    submitCheckoutForm(e);\n    return false;\n  }\n  function submitCheckoutForm(e) {\n    //can change id names to any other(in html of course too) \n    var ch11checkbox = encodeURIComponent(document.getElementById('ch1-1-checkbox').checked);\n    var ch12checkbox = encodeURIComponent(document.getElementById('ch1-2-checkbox').checked);\n    //TODO not undarstand logic how work #checkbox-coupon-code button\n    var couponcode = encodeURIComponent(document.getElementById('checkbox-coupon-code').value);\n\n    var checkoutparameters = 'ch11checkbox=' + ch11checkbox + '&ch12checkbox=' + ch12checkbox + '&couponcode=' + couponcode;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     checkoutForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(checkoutForm.method, checkoutForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(checkoutparameters);\n    xhr.send(checkoutparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-checkout-form.js?");

/***/ }),

/***/ "./src/js/modules/handle-checkout-select.js":
/*!**************************************************!*\
  !*** ./src/js/modules/handle-checkout-select.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  var selectCard = document.getElementById(\"select-card\"),\n      selectMobil = document.getElementById(\"select-mobil\"),\n      mobilContainer = document.getElementById(\"mobil-container\"),\n      cardContainer = document.getElementById(\"card-container\"),\n      paymentSelect = document.getElementById(\"payment-select\");\n\n  selectMobil && selectMobil.addEventListener(\"click\", showMobilContainer);\n  selectCard && selectCard.addEventListener(\"click\", showCardContainer);\n\n  function showMobilContainer(e) {\n    e.preventDefault();\n    //console.log(\"show mobilform\");\n    paymentSelect.classList.add(\"ishide\");\n    mobilContainer.classList.add(\"isopen\");\n    return false;\n  }\n  function showCardContainer(e) {\n    e.preventDefault();\n    //console.log(\"show cardform\");\n    paymentSelect.classList.add(\"ishide\");\n    cardContainer.classList.add(\"isopen\");\n    return false;\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-checkout-select.js?");

/***/ }),

/***/ "./src/js/modules/handle-collapsible.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-collapsible.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  // var coll = document.getElementsByClassName(\"collapsible-btn\");\n  // let i;\n  // for (i = 0; i < coll.length; i++) {\n  //   coll[i].addEventListener(\"click\", function() {\n  //     this.parentNode.classList.toggle(\"iscollapsed\");\n  //     let content = this.nextElementSibling;\n  //     if (content.style.display === \"block\") {\n  //       content.style.display = \"none\";\n  //     } else {\n  //       content.style.display = \"block\";\n  //     }\n  //   });\n  // }\n\n  //ES6\n  var coll = document.getElementsByClassName(\"collapsible-btn\");\n  [].concat(_toConsumableArray(coll)).map(function (item) {\n    return item.addEventListener(\"click\", function () {\n      this.parentNode.classList.toggle(\"iscollapsed\");\n      var content = this.nextElementSibling;\n      if (content.style.display === \"block\") {\n        content.style.display = \"none\";\n      } else {\n        content.style.display = \"block\";\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-collapsible.js?");

/***/ }),

/***/ "./src/js/modules/handle-datepicker.js":
/*!*********************************************!*\
  !*** ./src/js/modules/handle-datepicker.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  flatpickr(\".flatpickr\", {\n    \"locale\": \"tr\", // locale for this instance only\n    wrap: true,\n    disableMobile: \"true\"\n    //defaultDate=\"\",\n    //onChange: function(selectedDates, dateStr, instance) {},\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-datepicker.js?");

/***/ }),

/***/ "./src/js/modules/handle-dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/modules/handle-dropdown.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var dropbtn = document.getElementsByClassName(\"js-dropbtn\");\n  var dropdowns = document.getElementsByClassName(\"js-dropdown\");\n\n  for (var dropbtni = 0; dropbtni < dropbtn.length; dropbtni++) {\n    dropbtn[dropbtni].addEventListener(\"click\", dropdownOpen);\n  }\n  function dropdownOpen(e) {\n    var target = e.target;\n    e.preventDefault();\n    e.stopPropagation();\n    while (!target.classList.contains('js-dropdown')) {\n      target = target.parentNode;\n    }\n    if (target.classList.contains(\"active-dropdown\")) {\n      target.classList.remove(\"active-dropdown\");\n    } else {\n      closeAllDropdown();\n      target.classList.add(\"active-dropdown\");\n    }\n  }\n  function closeAllDropdown() {\n    for (var dropi = 0; dropi < dropdowns.length; dropi++) {\n      if (dropdowns[dropi].classList.contains('active-dropdown')) {\n        dropdowns[dropi].classList.remove('active-dropdown');\n      }\n    }\n  }\n  // Close the dropdown menu if the user clicks outside of it\n  document.addEventListener(\"click\", closeAllDropdown);\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-dropdown.js?");

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
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var katinaCardList1 = document.getElementById(\"katina-card-list-1\"),\n      katinaCardList2 = document.getElementById(\"katina-card-list-2\"),\n      katinaCardList3 = document.getElementById(\"katina-card-list-3\"),\n      MAXQUANTITYKATINA1 = 10,\n      MAXQUANTITYKATINA2 = 7,\n      MAXQUANTITYKATINA3 = 7,\n      QKATINACARD = 61;\n  var qSKatinaCard1 = 0,\n      qSKatinaCard2 = 0,\n      qSKatinaCard3 = 0;\n  katinaCardList1 && katinaCardList1.addEventListener(\"click\", openKatinaCard1);\n  katinaCardList2 && katinaCardList2.addEventListener(\"click\", openKatinaCard2);\n  katinaCardList3 && katinaCardList3.addEventListener(\"click\", openKatinaCard3);\n  var arrayKatina = Array.from(Array(QKATINACARD), function (d, i) {\n    return i + 1;\n  });\n  var getShuffledArr = function getShuffledArr(arr) {\n    var newArr = arr.slice();\n    for (var i = newArr.length - 1; i > 0; i--) {\n      var rand = Math.floor(Math.random() * (i + 1));\n      var _ref = [newArr[rand], newArr[i]];\n      newArr[i] = _ref[0];\n      newArr[rand] = _ref[1];\n    }\n    return newArr;\n  };\n  var mixedArrayKatina1 = getShuffledArr(arrayKatina),\n      mixedArrayKatina2 = getShuffledArr(arrayKatina),\n      mixedArrayKatina3 = getShuffledArr(arrayKatina);\n  function openKatinaCard1(e) {\n    var target = e.target;\n    while (target != katinaCardList1) {\n      if (target.classList.contains(\"card\")) {\n        if (!target.classList.contains(\"isopen\")) {\n          openCard1(target);\n        }\n        return;\n      }\n      target = target.parentNode;\n    }\n  }\n  function openKatinaCard2(e) {\n    var target = e.target;\n    while (target != katinaCardList2) {\n      if (target.classList.contains(\"card\")) {\n        if (!target.classList.contains(\"isopen\")) {\n          openCard2(target);\n        }\n        return;\n      }\n      target = target.parentNode;\n    }\n  }\n  function openKatinaCard3(e) {\n    var target = e.target;\n    while (target != katinaCardList3) {\n      if (target.classList.contains(\"card\")) {\n        openCard3(target);\n        return;\n      }\n      target = target.parentNode;\n    }\n  }\n  function openCard1(e) {\n    e.classList.add(\"isopen\");\n    var selectedId = e.getAttribute(\"id\").slice(8);\n    e.querySelector(\".frontside\").style.backgroundImage = \"url(./img/katina/k_\" + mixedArrayKatina1[selectedId - 1] + \".png)\";\n    e.dataset.katinaId = mixedArrayKatina1[selectedId - 1];\n    qSKatinaCard1++;\n    checkQuantity1(qSKatinaCard1);\n  }\n  function openCard2(e) {\n    e.classList.add(\"isopen\");\n    var selectedId = e.getAttribute(\"id\").slice(8);\n    e.querySelector(\".frontside\").style.backgroundImage = \"url(./img/katina/k_\" + mixedArrayKatina2[selectedId - 1] + \".png)\";\n    e.dataset.katinaId = mixedArrayKatina2[selectedId - 1];\n    qSKatinaCard2++;\n    checkQuantity2(qSKatinaCard2);\n  }\n  function openCard3(e) {\n    e.classList.add(\"isopen\");\n    var selectedId = e.getAttribute(\"id\").slice(8);\n    e.querySelector(\".frontside\").style.backgroundImage = \"url(./img/katina/k_\" + mixedArrayKatina3[selectedId - 1] + \".png)\";\n    e.dataset.katinaId = mixedArrayKatina3[selectedId - 1];\n    qSKatinaCard3++;\n    checkQuantity3(qSKatinaCard3);\n  }\n  function checkQuantity1(quantitySelectedKatinaCard) {\n    if (quantitySelectedKatinaCard === MAXQUANTITYKATINA1) {\n      katinaCardList1.removeEventListener(\"click\", openKatinaCard1);\n      katinaCardList1.classList.add(\"max-selected\");\n      //console.log(\"selected maximum card\");      \n    }\n  }\n  function checkQuantity2(quantitySelectedKatinaCard) {\n    if (quantitySelectedKatinaCard === MAXQUANTITYKATINA2) {\n      katinaCardList2.removeEventListener(\"click\", openKatinaCard2);\n      katinaCardList2.classList.add(\"max-selected\");\n      //console.log(\"selected maximum card\");      \n    }\n  }\n  function checkQuantity3(quantitySelectedKatinaCard) {\n    if (quantitySelectedKatinaCard === MAXQUANTITYKATINA3) {\n      katinaCardList3.removeEventListener(\"click\", openKatinaCard3);\n      katinaCardList3.classList.add(\"max-selected\");\n      //console.log(\"selected maximum card\");      \n    }\n  }\n  var katinaRecordForm = document.getElementById(\"katina-record-form\"),\n      katinaRecordFormMessage = document.getElementById(\"record-form-message\");\n  katinaRecordForm && katinaRecordForm.addEventListener(\"submit\", checkKatinaRecordForm);\n  function checkKatinaRecordForm(e) {\n    e.preventDefault();\n    submitKatinaRecordForm(e);\n    return false;\n  }\n  function submitKatinaRecordForm(e) {\n    var katinaRFemail = encodeURIComponent(document.getElementById('katina-email').value);\n    var katinaRFemailrepeat = encodeURIComponent(document.getElementById('katina-repeat-email').value);\n    var katinaRFname = encodeURIComponent(document.getElementById('katina-name').value);\n    var katinaRFgender = encodeURIComponent(document.getElementById('katina-gender').value);\n    var katinaRFkatinaday = encodeURIComponent(document.getElementById('katina-day').value);\n    var katinaRFkatinamoon = encodeURIComponent(document.getElementById('katina-moon').value);\n    var katinaRFkatinayear = encodeURIComponent(document.getElementById('katina-year').value);\n    var katinaRFkatinarelationstatus = encodeURIComponent(document.getElementById('katina-relationstatus').value);\n    var katinaRFkatinaquestion = encodeURIComponent(document.getElementById('katina-question').value);\n    var katinaType = katinaRecordForm.querySelector(\".katina-tab-pane.active .card-grid\").getAttribute(\"id\").slice(17);\n    var selectedKatinaCards = katinaRecordForm.querySelectorAll(\".katina-tab-pane.active .card-grid .card.isopen\");\n    var katinaRFselectedKatinaCards = [].concat(_toConsumableArray(selectedKatinaCards)).map(function (item) {\n      return item.dataset.katinaId;\n    }).join('&');\n    var katinaRFparameters = 'katinaRFemail=' + katinaRFemail + '&katinaRFemailrepeat=' + katinaRFemailrepeat + '&katinaRFname=' + katinaRFname + '&katinaRFgender=' + katinaRFgender + '&katinaRFkatinaday=' + katinaRFkatinaday + '&katinaRFkatinamoon=' + katinaRFkatinamoon + '&katinaRFkatinayear=' + katinaRFkatinayear + '&katinaRFkatinarelationstatus=' + katinaRFkatinarelationstatus + '&katinaRFkatinaquestion=' + katinaRFkatinaquestion + '&katinaType=' + katinaType + '&katinaRFselectedKatinaCards=' + katinaRFselectedKatinaCards;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     katinaRecordFormMessage.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(katinaRecordForm.method, katinaRecordForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    console.log(katinaRFparameters);\n    xhr.send(katinaRFparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-katina-card-record.js?");

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

/***/ "./src/js/modules/handle-login-form.js":
/*!*********************************************!*\
  !*** ./src/js/modules/handle-login-form.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var loginForm = document.getElementById(\"login-form\"),\n      loginFormMessage = document.getElementById(\"login-form-message\");\n  loginForm && loginForm.addEventListener(\"submit\", checkLoginForm);\n  function checkLoginForm(e) {\n    e.preventDefault();\n    submitLoginForm(e);\n    return false;\n  }\n  function submitLoginForm(e) {\n    var loginemail = encodeURIComponent(document.getElementById('loginemail').value);\n    var loginpassword = encodeURIComponent(document.getElementById('loginpassword').value);\n\n    var loginparameters = 'loginemail=' + loginemail + '&loginpassword=' + loginpassword;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     loginForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(loginForm.method, loginForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(loginparameters);\n    xhr.send(loginparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-login-form.js?");

/***/ }),

/***/ "./src/js/modules/handle-mobil-form.js":
/*!*********************************************!*\
  !*** ./src/js/modules/handle-mobil-form.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var mobilForm = document.getElementById(\"mobil-form\"),\n      mobilFormMessage = document.getElementById(\"mobil-form-message\");\n  mobilForm && mobilForm.addEventListener(\"submit\", checkMobilForm);\n  function checkMobilForm(e) {\n    e.preventDefault();\n    submitMobilForm(e);\n    return false;\n  }\n  function submitMobilForm(e) {\n    var mobilphone = encodeURIComponent(document.getElementById('mobil-phone-input').value);\n\n    var mobilparameters = 'mobilphone=' + mobilphone;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     mobilForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(mobilForm.method, mobilForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(mobilparameters);\n    xhr.send(mobilparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-mobil-form.js?");

/***/ }),

/***/ "./src/js/modules/handle-modal.js":
/*!****************************************!*\
  !*** ./src/js/modules/handle-modal.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var presentmodals = document.getElementsByClassName(\"modal\");\n  if (presentmodals.length > 0) {\n    var vanillaModal = new VanillaModal.default({\n      modal: '.modal',\n      modalInner: '.modal-inner',\n      modalContent: '.modal-content',\n      open: '[data-modal-open]',\n      close: '[data-modal-close]',\n      page: 'body',\n      loadClass: 'vanilla-modal',\n      class: 'modal-visible',\n      clickOutside: true,\n      closeKeys: [27],\n      transitions: true,\n      onBeforeOpen: null,\n      onBeforeClose: null\n    });\n  }\n});\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var presentmodalsintscroll = document.getElementsByClassName(\"modalintscroll\");\n  if (presentmodalsintscroll.length > 0) {\n    var vanillaModalintscroll = new VanillaModal.default({\n      modal: '.modalintscroll',\n      modalInner: '.modalintscroll-inner',\n      modalContent: '.modalintscroll-content',\n      open: '[data-modalintscroll-open]',\n      close: '[data-modalintscroll-close]',\n      page: 'body',\n      loadClass: 'vanilla-modal',\n      class: 'modalintscroll-visible',\n      clickOutside: true,\n      closeKeys: [27],\n      transitions: true,\n      onBeforeOpen: null,\n      onBeforeClose: null\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-modal.js?");

/***/ }),

/***/ "./src/js/modules/handle-mslider.js":
/*!******************************************!*\
  !*** ./src/js/modules/handle-mslider.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.mslider').slick({\n    arrows: true,\n    autoplay: true,\n    autoplaySpeed: 3000,\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    //fade: true, \n    dots: true\n    // mobileFirst: true,   \n    // responsive: [\n    //   {\n    //     breakpoint: 767,\n    //     settings: {        \n    //       dots: true\n    //     }\n    //   }\n    // ]\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-mslider.js?");

/***/ }),

/***/ "./src/js/modules/handle-phonenumber.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-phonenumber.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var phoneElement = document.getElementById('mobil-phone-input');\n  if (phoneElement) {\n    var phoneMask = new IMask(phoneElement, {\n      mask: '{\\\\0}(000)-000-0000[000000000000000000000000000000]',\n      lazy: false, // make placeholder always visible\n      placeholderChar: '_' // defaults to '_'\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-phonenumber.js?");

/***/ }),

/***/ "./src/js/modules/handle-promotions-list.js":
/*!**************************************************!*\
  !*** ./src/js/modules/handle-promotions-list.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  var promotionsList = new List('promotions-list', {\n    page: 6,\n    pagination: {\n      name: \"promotions-pagination\",\n      paginationClass: \"promotions-pagination\",\n      innerWindow: 1,\n      outerWindow: 1\n      // left: 1,\n      // right: 1,\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-promotions-list.js?");

/***/ }),

/***/ "./src/js/modules/handle-purchases-list.js":
/*!*************************************************!*\
  !*** ./src/js/modules/handle-purchases-list.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  var purchasesList = new List('purchases-list', {\n    page: 4,\n    pagination: {\n      name: \"purchases-pagination\",\n      paginationClass: \"purchases-pagination\",\n      innerWindow: 1,\n      outerWindow: 1\n      // left: 1,\n      // right: 1,\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-purchases-list.js?");

/***/ }),

/***/ "./src/js/modules/handle-rating.js":
/*!*****************************************!*\
  !*** ./src/js/modules/handle-rating.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  $(\"#reply-rating\").starRating({\n    starSize: 29,\n    starShape: 'rounded',\n    totalStars: 5,\n    useFullStars: true,\n    emptyColor: \"#e8bbc5\",\n    hoverColor: \"#6d1028\",\n    activeColor: \"#6d1028\",\n    ratedColor: \"#6d1028\",\n    useGradient: false,\n    disableAfterRate: false,\n    //readOnly: true,\n    //initialRating: 0,\n    callback: function callback(currentRating, $el) {\n      $(\"#reply-rating\").attr('data-rating', currentRating);\n      // console.log(currentRating);\n      //or vanilla JS\n      //document.getElementById(\"reply-rating\").setAttribute('data-rating', currentRating);\n    }\n  });\n\n  $(\".comment-rating\").starRating({\n    starSize: 22,\n    starShape: 'rounded',\n    totalStars: 5,\n    useFullStars: true,\n    emptyColor: \"#e8bbc5\",\n    hoverColor: \"#6d1028\",\n    activeColor: \"#6d1028\",\n    ratedColor: \"#6d1028\",\n    useGradient: false,\n    readOnly: true\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-rating.js?");

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

/***/ "./src/js/modules/handle-replay-form.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-replay-form.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var replyForm = document.getElementById(\"replay-form\"),\n      replyFormMessage = document.getElementById(\"reply-form-message\");\n  replyForm && replyForm.addEventListener(\"submit\", checkReplyForm);\n  function checkReplyForm(e) {\n    e.preventDefault();\n    submitReplyForm(e);\n    return false;\n  }\n  function submitReplyForm(e) {\n    var replyrating = encodeURIComponent(document.getElementById('reply-rating').dataset.rating);\n    var replytextarea = encodeURIComponent(document.getElementById('reply-textarea').value);\n\n    var replyparameters = 'replyrating=' + replyrating + '&replytextarea=' + replytextarea;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     replyForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(replyForm.method, replyForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(replyparameters);\n    xhr.send(replyparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-replay-form.js?");

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

/***/ "./src/js/modules/handle-sign-slider.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-sign-slider.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  $('.sign-slider').slick({\n    arrows: true,\n    autoplay: true,\n    autoplaySpeed: 3000,\n    infinite: true,\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    dots: false,\n    mobileFirst: true,\n    responsive: [{\n      breakpoint: 767,\n      settings: {\n        slidesToShow: 2\n      }\n    }, {\n      breakpoint: 1199,\n      settings: {\n        slidesToShow: 3\n      }\n    }]\n  });\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-sign-slider.js?");

/***/ }),

/***/ "./src/js/modules/handle-sign-up-form.js":
/*!***********************************************!*\
  !*** ./src/js/modules/handle-sign-up-form.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var signupForm = document.getElementById(\"sign-up-form\"),\n      signUpFormMessage = document.getElementById(\"sign-up-form-message\");\n  signupForm && signupForm.addEventListener(\"submit\", checkSignupForm);\n  function checkSignupForm(e) {\n    e.preventDefault();\n    submitSignupForm(e);\n    return false;\n  }\n  function submitSignupForm(e) {\n    var signupname = encodeURIComponent(document.getElementById('signupname').value);\n    var signupemail = encodeURIComponent(document.getElementById('signupemail').value);\n    var signuppassword = encodeURIComponent(document.getElementById('signuppassword').value);\n\n    var signupparameters = 'signupname=' + signupname + '&signupemail=' + signupemail + '&signuppassword=' + signuppassword;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     signupForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(signupForm.method, signupForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(signupparameters);\n    xhr.send(signupparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-sign-up-form.js?");

/***/ }),

/***/ "./src/js/modules/handle-submit-account-info.js":
/*!******************************************************!*\
  !*** ./src/js/modules/handle-submit-account-info.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var accountForm = document.getElementById(\"account-form\"),\n      accountFormMessage = document.getElementById(\"account-form-message\");\n\n  accountForm && accountForm.addEventListener(\"submit\", checkAccountForm);\n\n  function checkAccountForm(e) {\n    e.preventDefault();\n    checkingAccountForm() ? goodAccountForm(e) : badAccountForm(e);\n    return false;\n  }\n  function checkingAccountForm() {\n    return true;\n  }\n  function goodAccountForm(e) {\n    submitAccountForm(e);\n  }\n  function badAccountForm(e) {}\n  function submitAccountForm(e) {\n    var accountname = encodeURIComponent(document.getElementById('account-name').value);\n    var accountemail = encodeURIComponent(document.getElementById('account-email').value);\n    var accountpassword = encodeURIComponent(document.getElementById('account-password').value);\n    var accountphone = encodeURIComponent(document.getElementById('account-phone').value);\n    var accountgender = encodeURIComponent(document.getElementById('account-gender').value);\n    var accountdatabirth = encodeURIComponent(document.getElementById('account-data-birth').value);\n    var accountmonthbirth = encodeURIComponent(document.getElementById('account-month-birth').value);\n    var accountyearbirth = encodeURIComponent(document.getElementById('account-year-birth').value);\n\n    var accountparameters = \"accountname=\" + accountname + \"&accountemail=\" + accountemail + \"&accountpassword=\" + accountpassword + \"&accountphone=\" + accountphone + \"&accountgender=\" + accountgender + \"&accountdatabirth=\" + accountdatabirth + \"&accountmonthbirth=\" + accountmonthbirth + \"&accountyearbirth=\" + accountyearbirth;\n\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     accountForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(accountForm.method, accountForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(accountparameters);\n    xhr.send(accountparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-submit-account-info.js?");

/***/ }),

/***/ "./src/js/modules/handle-submit-news.js":
/*!**********************************************!*\
  !*** ./src/js/modules/handle-submit-news.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var newsForm = document.getElementById(\"news-form\"),\n      newsFormMessage = document.getElementById(\"news-form-message\"); //not used        \n  newsForm && newsForm.addEventListener(\"submit\", checkNewsForm);\n  function checkNewsForm(e) {\n    e.preventDefault();\n    submitNewsForm(e);\n    return false;\n  }\n  function submitNewsForm(e) {\n    var email = encodeURIComponent(document.getElementById('news-email').value);\n    var newsparameters = 'email=' + email;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     newsForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(newsForm.method, newsForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(newsparameters);\n    xhr.send(newsparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-submit-news.js?");

/***/ }),

/***/ "./src/js/modules/handle-submit-password.js":
/*!**************************************************!*\
  !*** ./src/js/modules/handle-submit-password.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var passwordForm = document.getElementById(\"password-form\"),\n      passwordFormMessage = document.getElementById(\"password-form-message\");\n\n  passwordForm && passwordForm.addEventListener(\"submit\", checkPasswordForm);\n\n  function checkPasswordForm(e) {\n    e.preventDefault();\n    checkPassword() ? goodPassword(e) : badPassword(e);\n    return false;\n  }\n  function checkPassword() {\n    if (document.getElementById('password').value === document.getElementById('confirm-password').value) {\n      passwordFormMessage.innerHTML = \"\";\n      return true;\n    } else {\n      passwordFormMessage.innerHTML = \"No match. Please try again.\";\n      return false;\n    }\n  }\n  function goodPassword(e) {\n    submitPasswordForm(e);\n  }\n  function badPassword(e) {}\n  function submitPasswordForm(e) {\n    var password = encodeURIComponent(document.getElementById('password').value);\n    var passwordparameters = 'password=' + password;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     passwordForm.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(passwordForm.method, passwordForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(passwordparameters);\n    xhr.send(passwordparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-submit-password.js?");

/***/ }),

/***/ "./src/js/modules/handle-tarot-card-record.js":
/*!****************************************************!*\
  !*** ./src/js/modules/handle-tarot-card-record.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var tarotCardList = document.getElementById(\"tarot-card-list\"),\n      MAXQUANTITYTAROT = 6,\n      QTAROTCARD = 78;\n  var quantitySelectedTarotCard = 0;\n  tarotCardList && tarotCardList.addEventListener(\"click\", openTarotCard);\n\n  var arrayTarot = Array.from(Array(QTAROTCARD), function (d, i) {\n    return i + 1;\n  });\n  var getShuffledArr = function getShuffledArr(arr) {\n    var newArr = arr.slice();\n    for (var i = newArr.length - 1; i > 0; i--) {\n      var rand = Math.floor(Math.random() * (i + 1));\n      var _ref = [newArr[rand], newArr[i]];\n      newArr[i] = _ref[0];\n      newArr[rand] = _ref[1];\n    }\n    return newArr;\n  };\n  //let mixedArrayTarot = arrayTarot;  // notShuffled \n  var mixedArrayTarot = getShuffledArr(arrayTarot);\n  function openTarotCard(e) {\n    var target = e.target;\n    while (target != tarotCardList) {\n      if (target.classList.contains(\"card\")) {\n        if (!target.classList.contains(\"isopen\")) {\n          openCard(target);\n        }\n        return;\n      }\n      target = target.parentNode;\n    }\n  }\n  function openCard(e) {\n    e.classList.add(\"isopen\");\n    var selectedId = e.getAttribute(\"id\").slice(5);\n    //console.log(\"selectedNumber = \"+selectedId);\n\n    e.querySelector(\".frontside\").style.backgroundImage = \"url(./img/tarot/t_\" + mixedArrayTarot[selectedId - 1] + \".png)\";\n    e.dataset.tarotId = mixedArrayTarot[selectedId - 1];\n    quantitySelectedTarotCard++;\n    checkQuantity(quantitySelectedTarotCard);\n  }\n  function checkQuantity(quantitySelectedTarotCard) {\n    if (quantitySelectedTarotCard === MAXQUANTITYTAROT) {\n      tarotCardList.removeEventListener(\"click\", openTarotCard);\n      tarotCardList.classList.add(\"max-selected\");\n      //console.log(\"selected maximum card\");      \n    }\n  }\n\n  var tarotRecordForm = document.getElementById(\"tarot-record-form\"),\n      tarotRecordFormMessage = document.getElementById(\"record-form-message\");\n\n  tarotRecordForm && tarotRecordForm.addEventListener(\"submit\", checkTarotRecordForm);\n\n  function checkTarotRecordForm(e) {\n    e.preventDefault();\n    submitTarotRecordForm(e);\n    return false;\n  }\n\n  function submitTarotRecordForm(e) {\n    var tarotRFemail = encodeURIComponent(document.getElementById('tarot-email').value);\n    var tarotRFemailrepeat = encodeURIComponent(document.getElementById('tarot-repeat-email').value);\n    var tarotRFname = encodeURIComponent(document.getElementById('tarot-name').value);\n    var tarotRFgender = encodeURIComponent(document.getElementById('tarot-gender').value);\n    var tarotRFtarotday = encodeURIComponent(document.getElementById('tarot-day').value);\n    var tarotRFtarotmoon = encodeURIComponent(document.getElementById('tarot-moon').value);\n    var tarotRFtarotyear = encodeURIComponent(document.getElementById('tarot-year').value);\n    var tarotRFtarotrelationstatus = encodeURIComponent(document.getElementById('tarot-relationstatus').value);\n    var tarotRFtarotquestion = encodeURIComponent(document.getElementById('tarot-question').value);\n\n    var selectedTarotCards = tarotCardList.querySelectorAll(\".card.isopen\");\n    var tarotRFselectedTarotCards = [].concat(_toConsumableArray(selectedTarotCards)).map(function (item) {\n      return item.dataset.tarotId;\n    }).join('&');\n\n    var tarotRFparameters = 'tarotRFemail=' + tarotRFemail + '&tarotRFemailrepeat=' + tarotRFemailrepeat + '&tarotRFname=' + tarotRFname + '&tarotRFgender=' + tarotRFgender + '&tarotRFtarotday=' + tarotRFtarotday + '&tarotRFtarotmoon=' + tarotRFtarotmoon + '&tarotRFtarotyear=' + tarotRFtarotyear + '&tarotRFtarotrelationstatus=' + tarotRFtarotrelationstatus + '&tarotRFtarotquestion=' + tarotRFtarotquestion + '&tarotRFselectedTarotCards=' + tarotRFselectedTarotCards;\n\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     tarotRecordFormMessage.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(tarotRecordForm.method, tarotRecordForm.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(tarotRFparameters);\n    xhr.send(tarotRFparameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-tarot-card-record.js?");

/***/ })

/******/ });