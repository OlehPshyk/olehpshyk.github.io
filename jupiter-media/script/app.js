!function(o){var t={};function a(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return o[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=o,a.c=t,a.d=function(e,n,o){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)a.d(o,t,function(e){return n[e]}.bind(null,t));return o},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="",a(a.s="./src/js/app.js")}({"./src/js/app.js":function(module,exports,__webpack_require__){"use strict";eval('\n\n__webpack_require__(/*! ./modules/handle-hamb */ "./src/js/modules/handle-hamb.js");\n\n__webpack_require__(/*! ./modules/handle-headroom */ "./src/js/modules/handle-headroom.js");\n\n//# sourceURL=webpack:///./src/js/app.js?')},"./src/js/modules/handle-hamb.js":function(module,exports,__webpack_require__){"use strict";eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var hambButton = document.querySelector('.hamb-btn'),\n      xsNav = document.querySelector('.xs-nav'),\n      body = document.querySelector('body');\n  var handleHambClick = function handleHambClick(e) {\n    hambButton.classList.toggle('open');\n    xsNav.classList.toggle('open');\n    body.classList.toggle('xs-nav-open');\n  };\n  var handleXsNavClick = function handleXsNavClick(e) {\n    if (e.target.classList.contains('nav-link') || e.target.parentNode.classList.contains('nav-link')) {\n      // hambButton.classList.remove('open');\n      // xsNav.classList.remove('open');\n      // body.classList.remove('xs-nav-open');\n    }\n  };\n  hambButton && hambButton.addEventListener(\"click\", handleHambClick);\n  xsNav && xsNav.addEventListener(\"click\", handleXsNavClick);\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-hamb.js?")},"./src/js/modules/handle-headroom.js":function(module,exports,__webpack_require__){"use strict";eval('\n\ndocument.addEventListener(\'DOMContentLoaded\', function () {\n  var myElement = document.querySelector("header");\n  var headroom = new Headroom(myElement, {\n    // vertical offset in px before element is first unpinned\n    //offset : 96,\n    // scroll tolerance in px before state changes\n    // tolerance : 0,\n    // or scroll tolerance per direction\n    // tolerance : {\n    //     down : 0,\n    //     up : 0\n    // },\n    // element which is source of scroll events. Defaults to window\n    //scroller : element,\n    // css classes to apply\n    classes: {\n      // when element is initialised\n      initial: "headroom",\n      // when scrolling up\n      pinned: "headroom--pinned",\n      // when scrolling down\n      unpinned: "headroom--unpinned",\n      // when above offset\n      top: "headroom--top",\n      // when below offset\n      notTop: "headroom--not-top",\n      // when at bottom of scoll area\n      bottom: "headroom--bottom",\n      // when not at bottom of scroll area\n      notBottom: "headroom--not-bottom"\n    }\n    // // callback when pinned, `this` is headroom object\n    // onPin : function() {},\n    // // callback when unpinned, `this` is headroom object\n    //onUnpin : function() {},\n    // // callback when above offset, `this` is headroom object\n    // onTop : function() {},\n    // // callback when below offset, `this` is headroom object\n    // onNotTop : function() {}\n    // // callback at bottom of page, `this` is headroom object\n    // onBottom : function() {},\n    // // callback when moving away from bottom of page, `this` is headroom object\n    // onNotBottom : function() {}\n  });\n  headroom.init();\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-headroom.js?')}});