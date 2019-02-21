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

/***/ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n/*! smooth-scroll v15.0.0 | (c) 2018 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */\nwindow.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {\n  var t,\n      n = (this.document || this.ownerDocument).querySelectorAll(e),\n      o = this;do {\n    for (t = n.length; --t >= 0 && n.item(t) !== o;) {}\n  } while (t < 0 && (o = o.parentElement));return o;\n}), function () {\n  function e(e, t) {\n    t = t || { bubbles: !1, cancelable: !1, detail: void 0 };var n = document.createEvent(\"CustomEvent\");return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;\n  }if (\"function\" == typeof window.CustomEvent) return !1;e.prototype = window.Event.prototype, window.CustomEvent = e;\n}(), function () {\n  for (var e = 0, t = [\"ms\", \"moz\", \"webkit\", \"o\"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) {\n    window.requestAnimationFrame = window[t[n] + \"RequestAnimationFrame\"], window.cancelAnimationFrame = window[t[n] + \"CancelAnimationFrame\"] || window[t[n] + \"CancelRequestAnimationFrame\"];\n  }window.requestAnimationFrame || (window.requestAnimationFrame = function (t, n) {\n    var o = new Date().getTime(),\n        i = Math.max(0, 16 - (o - e)),\n        r = window.setTimeout(function () {\n      t(o + i);\n    }, i);return e = o + i, r;\n  }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {\n    clearTimeout(e);\n  });\n}(), function (e, t) {\n   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n    return t(e);\n  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;\n}(\"undefined\" != typeof global ? global : \"undefined\" != typeof window ? window : undefined, function (e) {\n  \"use strict\";\n  var t = { ignore: \"[data-scroll-ignore]\", header: null, topOnEmptyHash: !0, speed: 500, speedAsDuration: !1, durationMax: null, durationMin: null, clip: !0, offset: 0, easing: \"easeInOutCubic\", customEasing: null, updateURL: !0, popstate: !0, emitEvents: !0 },\n      n = function n() {\n    return \"querySelector\" in document && \"addEventListener\" in e && \"requestAnimationFrame\" in e && \"closest\" in e.Element.prototype;\n  },\n      o = function o() {\n    var e = {};return Array.prototype.forEach.call(arguments, function (t) {\n      for (var n in t) {\n        if (!t.hasOwnProperty(n)) return;e[n] = t[n];\n      }\n    }), e;\n  },\n      i = function i(t) {\n    return !!(\"matchMedia\" in e && e.matchMedia(\"(prefers-reduced-motion)\").matches);\n  },\n      r = function r(t) {\n    return parseInt(e.getComputedStyle(t).height, 10);\n  },\n      a = function a(e) {\n    var t;try {\n      t = decodeURIComponent(e);\n    } catch (n) {\n      t = e;\n    }return t;\n  },\n      u = function u(e) {\n    \"#\" === e.charAt(0) && (e = e.substr(1));for (var t, n = String(e), o = n.length, i = -1, r = \"\", a = n.charCodeAt(0); ++i < o;) {\n      if (0 === (t = n.charCodeAt(i))) throw new InvalidCharacterError(\"Invalid character: the input contains U+0000.\");t >= 1 && t <= 31 || 127 == t || 0 === i && t >= 48 && t <= 57 || 1 === i && t >= 48 && t <= 57 && 45 === a ? r += \"\\\\\" + t.toString(16) + \" \" : r += t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? n.charAt(i) : \"\\\\\" + n.charAt(i);\n    }var u;try {\n      u = decodeURIComponent(\"#\" + r);\n    } catch (e) {\n      u = \"#\" + r;\n    }return u;\n  },\n      c = function c(e, t) {\n    var n;return \"easeInQuad\" === e.easing && (n = t * t), \"easeOutQuad\" === e.easing && (n = t * (2 - t)), \"easeInOutQuad\" === e.easing && (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), \"easeInCubic\" === e.easing && (n = t * t * t), \"easeOutCubic\" === e.easing && (n = --t * t * t + 1), \"easeInOutCubic\" === e.easing && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), \"easeInQuart\" === e.easing && (n = t * t * t * t), \"easeOutQuart\" === e.easing && (n = 1 - --t * t * t * t), \"easeInOutQuart\" === e.easing && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), \"easeInQuint\" === e.easing && (n = t * t * t * t * t), \"easeOutQuint\" === e.easing && (n = 1 + --t * t * t * t * t), \"easeInOutQuint\" === e.easing && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (n = e.customEasing(t)), n || t;\n  },\n      s = function s() {\n    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);\n  },\n      l = function l(t, n, o, i) {\n    var r = 0;if (t.offsetParent) do {\n      r += t.offsetTop, t = t.offsetParent;\n    } while (t);return r = Math.max(r - n - o, 0), i && (r = Math.min(r, s() - e.innerHeight)), r;\n  },\n      m = function m(e) {\n    return e ? r(e) + e.offsetTop : 0;\n  },\n      d = function d(e, t) {\n    var n = t.speedAsDuration ? t.speed : Math.abs(e / 1e3 * t.speed);return t.durationMax && n > t.durationMax ? t.durationMax : t.durationMin && n < t.durationMin ? t.durationMin : n;\n  },\n      f = function f(e, t, n) {\n    t || history.pushState && n.updateURL && history.pushState({ smoothScroll: JSON.stringify(n), anchor: e.id }, document.title, e === document.documentElement ? \"#top\" : \"#\" + e.id);\n  },\n      h = function h(t, n, o) {\n    0 === t && document.body.focus(), o || (t.focus(), document.activeElement !== t && (t.setAttribute(\"tabindex\", \"-1\"), t.focus(), t.style.outline = \"none\"), e.scrollTo(0, n));\n  },\n      p = function p(t, n, o, i) {\n    if (n.emitEvents && \"function\" == typeof e.CustomEvent) {\n      var r = new CustomEvent(t, { bubbles: !0, detail: { anchor: o, toggle: i } });document.dispatchEvent(r);\n    }\n  };return function (r, g) {\n    var v,\n        w,\n        y,\n        E,\n        b,\n        S,\n        A,\n        C = {};C.cancelScroll = function (e) {\n      cancelAnimationFrame(A), A = null, e || p(\"scrollCancel\", v);\n    }, C.animateScroll = function (n, i, r) {\n      var a = o(v || t, r || {}),\n          u = \"[object Number]\" === Object.prototype.toString.call(n),\n          g = u || !n.tagName ? null : n;if (u || g) {\n        var w = e.pageYOffset;a.header && !E && (E = document.querySelector(a.header)), b || (b = m(E));var y,\n            S,\n            O,\n            I = u ? n : l(g, b, parseInt(\"function\" == typeof a.offset ? a.offset(n, i) : a.offset, 10), a.clip),\n            q = I - w,\n            M = s(),\n            F = 0,\n            L = d(q, a),\n            x = function x(t, o) {\n          var r = e.pageYOffset;if (t == o || r == o || (w < o && e.innerHeight + r) >= M) return C.cancelScroll(!0), h(n, o, u), p(\"scrollStop\", a, n, i), y = null, A = null, !0;\n        },\n            H = function H(t) {\n          y || (y = t), F += t - y, S = F / parseInt(L, 10), S = S > 1 ? 1 : S, O = w + q * c(a, S), e.scrollTo(0, Math.floor(O)), x(O, I) || (A = e.requestAnimationFrame(H), y = t);\n        };0 === e.pageYOffset && e.scrollTo(0, 0), f(n, u, a), p(\"scrollStart\", a, n, i), C.cancelScroll(!0), e.requestAnimationFrame(H);\n      }\n    };var O = function O(t) {\n      if (!i() && 0 === t.button && !t.metaKey && !t.ctrlKey && \"closest\" in t.target && (y = t.target.closest(r)) && \"a\" === y.tagName.toLowerCase() && !t.target.closest(v.ignore) && y.hostname === e.location.hostname && y.pathname === e.location.pathname && /#/.test(y.href)) {\n        var n = u(a(y.hash)),\n            o = v.topOnEmptyHash && \"#\" === n ? document.documentElement : document.querySelector(n);o = o || \"#top\" !== n ? o : document.documentElement, o && (t.preventDefault(), C.animateScroll(o, y));\n      }\n    },\n        I = function I(e) {\n      if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(v) && history.state.anchor) {\n        var t = document.querySelector(u(a(history.state.anchor)));t && C.animateScroll(t, null, { updateURL: !1 });\n      }\n    },\n        q = function q(e) {\n      S || (S = setTimeout(function () {\n        S = null, b = m(E);\n      }, 66));\n    };return C.destroy = function () {\n      v && (document.removeEventListener(\"click\", O, !1), e.removeEventListener(\"resize\", q, !1), e.removeEventListener(\"popstate\", I, !1), C.cancelScroll(), v = null, w = null, y = null, E = null, b = null, S = null, A = null);\n    }, C.init = function (i) {\n      if (!n()) throw \"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.\";C.destroy(), v = o(t, i || {}), E = v.header ? document.querySelector(v.header) : null, b = m(E), document.addEventListener(\"click\", O, !1), E && e.addEventListener(\"resize\", q, !1), v.updateURL && v.popstate && e.addEventListener(\"popstate\", I, !1);\n    }, C.init(g), C;\n  };\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar g;\n\n// This works in non-strict mode\ng = function () {\n\treturn this;\n}();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif ((typeof window === \"undefined\" ? \"undefined\" : _typeof(window)) === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/dark-sections */ \"./src/js/modules/dark-sections.js\");\n\n__webpack_require__(/*! ./modules/smooth-scroll */ \"./src/js/modules/smooth-scroll.js\");\n\n__webpack_require__(/*! ./modules/handle-submitform */ \"./src/js/modules/handle-submitform.js\");\n\n__webpack_require__(/*! ./modules/handle-animationXL */ \"./src/js/modules/handle-animationXL.js\");\n\n__webpack_require__(/*! ./modules/handle-scrollify */ \"./src/js/modules/handle-scrollify.js\");\n\n//# sourceURL=webpack:///./src/js/app.js?");

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
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  if (window.DISABLE_SCROLLIFY === true) {\n    //console.log('Scrollify is disabled');\n    return;\n  }\n  var isInitScrollify = false;\n  window.addEventListener(\"resize\", function () {\n    if (window.innerWidth < 1200) {\n      if (!isInitScrollify) {\n        initScrollify();\n      }\n      $.scrollify.enable();\n    } else $.scrollify.disable();\n  });\n\n  if (window.innerWidth < 1200) {\n    initScrollify();\n  }\n\n  function initScrollify() {\n    isInitScrollify = true;\n    $.scrollify({\n      section: \".scrollify-section\",\n      sectionName: \"section-name\",\n      // interstitialSection : \".footer\",\n      easing: \"easeOutExpo\",\n      // scrollSpeed: 1200,\n      setHeights: false,\n      offset: 0, //-140,\n      // scrollbars: true,\n      // standardScrollElements: \"\",\n      // overflowScroll: true,\n      // updateHash: true,\n      // touchScroll:true,\n      // before:function() {},\n      // after:function() {},\n      // afterResize:function() {},\n      // afterRender:function() {}\n      // before:function(indexPosition,snapToElm){\n      // },\n      after: function after(i, panels) {\n        var ref = panels[i].attr(\"data-section-name\");\n        if (ref === \"graphik\") {\n          $(\".graphik-section\").addClass(\"animation\");\n        } else {\n          $(\".graphik-section\").removeClass(\"animation\");\n        }\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-scrollify.js?");

/***/ }),

/***/ "./src/js/modules/handle-submitform.js":
/*!*********************************************!*\
  !*** ./src/js/modules/handle-submitform.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var form = document.getElementById(\"form\");\n  form && form.addEventListener(\"submit\", checkForm);\n  function checkForm(e) {\n    submitForm(e);\n    return false;\n  }\n  function submitForm(e) {\n    e.preventDefault();\n    e.stopPropagation();\n    var name = encodeURIComponent(document.getElementById('name').value);\n    var phone = encodeURIComponent(document.getElementById('phone').value);\n    var email = encodeURIComponent(document.getElementById('email').value);\n    var parameters = 'name=' + name + '&phone=' + phone + '&email=' + email;\n    var xhr = new XMLHttpRequest();\n    xhr.onreadystatechange = function (e) {\n      if (xhr.readyState === 4 && xhr.status === 200) {\n        form.innerHTML = xhr.responseText;\n      }\n    };\n    xhr.open(form.method, form.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    xhr.send(parameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-submitform.js?");

/***/ }),

/***/ "./src/js/modules/smooth-scroll.js":
/*!*****************************************!*\
  !*** ./src/js/modules/smooth-scroll.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _smoothScroll = __webpack_require__(/*! smooth-scroll */ \"./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js\");\n\nvar _smoothScroll2 = _interopRequireDefault(_smoothScroll);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\tvar scroll = new _smoothScroll2.default('a[href*=\"#\"]', {\n\t\teasing: 'easeInQuad',\n\t\tspeed: 1000\n\t\t//speedAsDuration: true  //if true then speed is equivalent time to finish if `false` then speed is time for scroll 1000px\n\t});\n});\n\n//# sourceURL=webpack:///./src/js/modules/smooth-scroll.js?");

/***/ })

/******/ });