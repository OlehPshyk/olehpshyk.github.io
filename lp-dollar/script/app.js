!function(r){var t={};function o(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return r[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=r,o.c=t,o.d=function(e,n,r){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)o.d(r,t,function(e){return n[e]}.bind(null,t));return r},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s="./src/js/app.js")}({"./src/js/app.js":function(module,exports,__webpack_require__){"use strict";eval('\n\n__webpack_require__(/*! ./modules/handle-sliders */ "./src/js/modules/handle-sliders.js");\n\n__webpack_require__(/*! ./modules/handle-submitform */ "./src/js/modules/handle-submitform.js");\n\n//# sourceURL=webpack:///./src/js/app.js?')},"./src/js/modules/handle-sliders.js":function(module,exports,__webpack_require__){"use strict";eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n\n  //Testimonials Slider\n  $(\".testimonials-slider\").slick({\n    // normal options...\n    infinite: true,\n    //autoplay: true,\n    autoplaySpeed: 3000, //interval\n    pauseOnHover: true,\n    speed: 300 //slider-speed    \n  });\n  //End Testimonials Slider  \n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-sliders.js?")},"./src/js/modules/handle-submitform.js":function(module,exports,__webpack_require__){"use strict";eval("\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var form = document.getElementById(\"form\");\n  form && form.addEventListener(\"submit\", checkForm);\n  function checkForm(e) {\n    e.preventDefault();\n    submitForm(e);\n    return false;\n  }\n  function submitForm(e) {\n    var name = encodeURIComponent(document.getElementById('name').value);\n    var phone = encodeURIComponent(document.getElementById('phone').value);\n    var email = encodeURIComponent(document.getElementById('email').value);\n    var parameters = 'name=' + name + '&phone=' + phone + '&email=' + email;\n    var xhr = new XMLHttpRequest();\n    // xhr.onreadystatechange = function (e) {\n    //   if (xhr.readyState === 4 && xhr.status === 200) {\n    //     form.innerHTML = xhr.responseText;\n    //   }\n    // }\n    xhr.open(form.method, form.action);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    //console.log(parameters);\n    xhr.send(parameters);\n  }\n});\n\n//# sourceURL=webpack:///./src/js/modules/handle-submitform.js?")}});