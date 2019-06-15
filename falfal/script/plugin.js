/* flatpickr v4.5.7,, @license MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).flatpickr=t()}(this,function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},t=["onChange","onClose","onDayCreate","onDestroy","onKeyDown","onMonthChange","onOpen","onParseConfig","onReady","onValueUpdate","onYearChange","onPreCalendarPosition"],n={_disable:[],_enable:[],allowInput:!1,altFormat:"F j, Y",altInput:!1,altInputClass:"form-control input",animate:"object"==typeof window&&-1===window.navigator.userAgent.indexOf("MSIE"),ariaDateFormat:"F j, Y",clickOpens:!0,closeOnSelect:!0,conjunction:", ",dateFormat:"Y-m-d",defaultHour:12,defaultMinute:0,defaultSeconds:0,disable:[],disableMobile:!1,enable:[],enableSeconds:!1,enableTime:!1,errorHandler:function(e){return"undefined"!=typeof console&&console.warn(e)},getWeek:function(e){var t=new Date(e.getTime());t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7);var n=new Date(t.getFullYear(),0,4);return 1+Math.round(((t.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7)},hourIncrement:1,ignoredFocusElements:[],inline:!1,locale:"default",minuteIncrement:5,mode:"single",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",noCalendar:!1,now:new Date,onChange:[],onClose:[],onDayCreate:[],onDestroy:[],onKeyDown:[],onMonthChange:[],onOpen:[],onParseConfig:[],onReady:[],onValueUpdate:[],onYearChange:[],onPreCalendarPosition:[],plugins:[],position:"auto",positionElement:void 0,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",shorthandCurrentMonth:!1,showMonths:1,static:!1,time_24hr:!1,weekNumbers:!1,wrap:!1},a={weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var t=e%100;if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle",amPM:["AM","PM"],yearAriaLabel:"Year"},i=function(e){return("0"+e).slice(-2)},o=function(e){return!0===e?1:0};function r(e,t,n){var a;return void 0===n&&(n=!1),function(){var i=this,o=arguments;null!==a&&clearTimeout(a),a=window.setTimeout(function(){a=null,n||e.apply(i,o)},t),n&&!a&&e.apply(i,o)}}var l=function(e){return e instanceof Array?e:[e]};function c(e,t,n){if(!0===n)return e.classList.add(t);e.classList.remove(t)}function d(e,t,n){var a=window.document.createElement(e);return t=t||"",n=n||"",a.className=t,void 0!==n&&(a.textContent=n),a}function s(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function u(e,t){var n=d("div","numInputWrapper"),a=d("input","numInput "+e),i=d("span","arrowUp"),o=d("span","arrowDown");if(-1===navigator.userAgent.indexOf("MSIE 9.0")?a.type="number":(a.type="text",a.pattern="\\d*"),void 0!==t)for(var r in t)a.setAttribute(r,t[r]);return n.appendChild(a),n.appendChild(i),n.appendChild(o),n}var f=function(){},m=function(e,t,n){return n.months[t?"shorthand":"longhand"][e]},g={D:f,F:function(e,t,n){e.setMonth(n.months.longhand.indexOf(t))},G:function(e,t){e.setHours(parseFloat(t))},H:function(e,t){e.setHours(parseFloat(t))},J:function(e,t){e.setDate(parseFloat(t))},K:function(e,t,n){e.setHours(e.getHours()%12+12*o(new RegExp(n.amPM[1],"i").test(t)))},M:function(e,t,n){e.setMonth(n.months.shorthand.indexOf(t))},S:function(e,t){e.setSeconds(parseFloat(t))},U:function(e,t){return new Date(1e3*parseFloat(t))},W:function(e,t){var n=parseInt(t);return new Date(e.getFullYear(),0,2+7*(n-1),0,0,0,0)},Y:function(e,t){e.setFullYear(parseFloat(t))},Z:function(e,t){return new Date(t)},d:function(e,t){e.setDate(parseFloat(t))},h:function(e,t){e.setHours(parseFloat(t))},i:function(e,t){e.setMinutes(parseFloat(t))},j:function(e,t){e.setDate(parseFloat(t))},l:f,m:function(e,t){e.setMonth(parseFloat(t)-1)},n:function(e,t){e.setMonth(parseFloat(t)-1)},s:function(e,t){e.setSeconds(parseFloat(t))},u:function(e,t){return new Date(parseFloat(t))},w:f,y:function(e,t){e.setFullYear(2e3+parseFloat(t))}},p={D:"(\\w+)",F:"(\\w+)",G:"(\\d\\d|\\d)",H:"(\\d\\d|\\d)",J:"(\\d\\d|\\d)\\w+",K:"",M:"(\\w+)",S:"(\\d\\d|\\d)",U:"(.+)",W:"(\\d\\d|\\d)",Y:"(\\d{4})",Z:"(.+)",d:"(\\d\\d|\\d)",h:"(\\d\\d|\\d)",i:"(\\d\\d|\\d)",j:"(\\d\\d|\\d)",l:"(\\w+)",m:"(\\d\\d|\\d)",n:"(\\d\\d|\\d)",s:"(\\d\\d|\\d)",u:"(.+)",w:"(\\d\\d|\\d)",y:"(\\d{2})"},h={Z:function(e){return e.toISOString()},D:function(e,t,n){return t.weekdays.shorthand[h.w(e,t,n)]},F:function(e,t,n){return m(h.n(e,t,n)-1,!1,t)},G:function(e,t,n){return i(h.h(e,t,n))},H:function(e){return i(e.getHours())},J:function(e,t){return void 0!==t.ordinal?e.getDate()+t.ordinal(e.getDate()):e.getDate()},K:function(e,t){return t.amPM[o(e.getHours()>11)]},M:function(e,t){return m(e.getMonth(),!0,t)},S:function(e){return i(e.getSeconds())},U:function(e){return e.getTime()/1e3},W:function(e,t,n){return n.getWeek(e)},Y:function(e){return e.getFullYear()},d:function(e){return i(e.getDate())},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return i(e.getMinutes())},j:function(e){return e.getDate()},l:function(e,t){return t.weekdays.longhand[e.getDay()]},m:function(e){return i(e.getMonth()+1)},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},u:function(e){return e.getTime()},w:function(e){return e.getDay()},y:function(e){return String(e.getFullYear()).substring(2)}},v=function(e){var t=e.config,i=void 0===t?n:t,o=e.l10n,r=void 0===o?a:o;return function(e,t,n){var a=n||r;return void 0!==i.formatDate?i.formatDate(e,t,a):t.split("").map(function(t,n,o){return h[t]&&"\\"!==o[n-1]?h[t](e,a,i):"\\"!==t?t:""}).join("")}},D=function(e){var t=e.config,i=void 0===t?n:t,o=e.l10n,r=void 0===o?a:o;return function(e,t,a,o){if(0===e||e){var l,c=o||r,d=e;if(e instanceof Date)l=new Date(e.getTime());else if("string"!=typeof e&&void 0!==e.toFixed)l=new Date(e);else if("string"==typeof e){var s=t||(i||n).dateFormat,u=String(e).trim();if("today"===u)l=new Date,a=!0;else if(/Z$/.test(u)||/GMT$/.test(u))l=new Date(e);else if(i&&i.parseDate)l=i.parseDate(e,s);else{l=i&&i.noCalendar?new Date((new Date).setHours(0,0,0,0)):new Date((new Date).getFullYear(),0,1,0,0,0,0);for(var f=void 0,m=[],h=0,v=0,D="";h<s.length;h++){var w=s[h],b="\\"===w,y="\\"===s[h-1]||b;if(p[w]&&!y){D+=p[w];var C=new RegExp(D).exec(e);C&&(f=!0)&&m["Y"!==w?"push":"unshift"]({fn:g[w],val:C[++v]})}else b||(D+=".");m.forEach(function(e){var t=e.fn,n=e.val;return l=t(l,n,c)||l})}l=f?l:void 0}}if(l instanceof Date&&!isNaN(l.getTime()))return!0===a&&l.setHours(0,0,0,0),l;i.errorHandler(new Error("Invalid date provided: "+d))}}};function w(e,t,n){return void 0===n&&(n=!0),!1!==n?new Date(e.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0):e.getTime()-t.getTime()}var b=function(e,t,n){return e>Math.min(t,n)&&e<Math.max(t,n)},y={DAY:864e5};"function"!=typeof Object.assign&&(Object.assign=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(!e)throw TypeError("Cannot convert undefined or null to object");for(var a=function(t){t&&Object.keys(t).forEach(function(n){return e[n]=t[n]})},i=0,o=t;i<o.length;i++){a(o[i])}return e});var C=300;function M(n,f){var g={config:e({},E.defaultConfig),l10n:a};function h(e){return e.bind(g)}function M(){var e=g.config;!1===e.weekNumbers&&1===e.showMonths||!0!==e.noCalendar&&window.requestAnimationFrame(function(){if(void 0!==g.calendarContainer&&(g.calendarContainer.style.visibility="hidden",g.calendarContainer.style.display="block"),void 0!==g.daysContainer){var t=(g.days.offsetWidth+1)*e.showMonths;g.daysContainer.style.width=t+"px",g.calendarContainer.style.width=t+(void 0!==g.weekWrapper?g.weekWrapper.offsetWidth:0)+"px",g.calendarContainer.style.removeProperty("visibility"),g.calendarContainer.style.removeProperty("display")}})}function x(e){0===g.selectedDates.length&&ne(),void 0!==e&&"blur"!==e.type&&function(e){e.preventDefault();var t="keydown"===e.type,n=e.target;void 0!==g.amPM&&e.target===g.amPM&&(g.amPM.textContent=g.l10n.amPM[o(g.amPM.textContent===g.l10n.amPM[0])]);var a=parseFloat(n.getAttribute("min")),r=parseFloat(n.getAttribute("max")),l=parseFloat(n.getAttribute("step")),c=parseInt(n.value,10),d=e.delta||(t?38===e.which?1:-1:0),s=c+l*d;if(void 0!==n.value&&2===n.value.length){var u=n===g.hourElement,f=n===g.minuteElement;s<a?(s=r+s+o(!u)+(o(u)&&o(!g.amPM)),f&&Y(void 0,-1,g.hourElement)):s>r&&(s=n===g.hourElement?s-r-o(!g.amPM):a,f&&Y(void 0,1,g.hourElement)),g.amPM&&u&&(1===l?s+c===23:Math.abs(s-c)>l)&&(g.amPM.textContent=g.l10n.amPM[o(g.amPM.textContent===g.l10n.amPM[0])]),n.value=i(s)}}(e);var t=g._input.value;T(),ve(),g._input.value!==t&&g._debouncedChange()}function T(){if(void 0!==g.hourElement&&void 0!==g.minuteElement){var e,t,n=(parseInt(g.hourElement.value.slice(-2),10)||0)%24,a=(parseInt(g.minuteElement.value,10)||0)%60,i=void 0!==g.secondElement?(parseInt(g.secondElement.value,10)||0)%60:0;void 0!==g.amPM&&(e=n,t=g.amPM.textContent,n=e%12+12*o(t===g.l10n.amPM[1]));var r=void 0!==g.config.minTime||g.config.minDate&&g.minDateHasTime&&g.latestSelectedDateObj&&0===w(g.latestSelectedDateObj,g.config.minDate,!0);if(void 0!==g.config.maxTime||g.config.maxDate&&g.maxDateHasTime&&g.latestSelectedDateObj&&0===w(g.latestSelectedDateObj,g.config.maxDate,!0)){var l=void 0!==g.config.maxTime?g.config.maxTime:g.config.maxDate;(n=Math.min(n,l.getHours()))===l.getHours()&&(a=Math.min(a,l.getMinutes())),a===l.getMinutes()&&(i=Math.min(i,l.getSeconds()))}if(r){var c=void 0!==g.config.minTime?g.config.minTime:g.config.minDate;(n=Math.max(n,c.getHours()))===c.getHours()&&(a=Math.max(a,c.getMinutes())),a===c.getMinutes()&&(i=Math.max(i,c.getSeconds()))}O(n,a,i)}}function k(e){var t=e||g.latestSelectedDateObj;t&&O(t.getHours(),t.getMinutes(),t.getSeconds())}function I(){var e=g.config.defaultHour,t=g.config.defaultMinute,n=g.config.defaultSeconds;if(void 0!==g.config.minDate){var a=g.config.minDate.getHours(),i=g.config.minDate.getMinutes();(e=Math.max(e,a))===a&&(t=Math.max(i,t)),e===a&&t===i&&(n=g.config.minDate.getSeconds())}if(void 0!==g.config.maxDate){var o=g.config.maxDate.getHours(),r=g.config.maxDate.getMinutes();(e=Math.min(e,o))===o&&(t=Math.min(r,t)),e===o&&t===r&&(n=g.config.maxDate.getSeconds())}O(e,t,n)}function O(e,t,n){void 0!==g.latestSelectedDateObj&&g.latestSelectedDateObj.setHours(e%24,t,n||0,0),g.hourElement&&g.minuteElement&&!g.isMobile&&(g.hourElement.value=i(g.config.time_24hr?e:(12+e)%12+12*o(e%12==0)),g.minuteElement.value=i(t),void 0!==g.amPM&&(g.amPM.textContent=g.l10n.amPM[o(e>=12)]),void 0!==g.secondElement&&(g.secondElement.value=i(n)))}function S(e){var t=parseInt(e.target.value)+(e.delta||0);(t/1e3>1||"Enter"===e.key&&!/[^\d]/.test(t.toString()))&&V(t)}function _(e,t,n,a){return t instanceof Array?t.forEach(function(t){return _(e,t,n,a)}):e instanceof Array?e.forEach(function(e){return _(e,t,n,a)}):(e.addEventListener(t,n,a),void g._handlers.push({element:e,event:t,handler:n,options:a}))}function N(e){return function(t){1===t.which&&e(t)}}function F(){fe("onChange")}function P(e){var t=void 0!==e?g.parseDate(e):g.latestSelectedDateObj||(g.config.minDate&&g.config.minDate>g.now?g.config.minDate:g.config.maxDate&&g.config.maxDate<g.now?g.config.maxDate:g.now);try{void 0!==t&&(g.currentYear=t.getFullYear(),g.currentMonth=t.getMonth())}catch(e){e.message="Invalid date supplied: "+t,g.config.errorHandler(e)}g.redraw()}function A(e){~e.target.className.indexOf("arrow")&&Y(e,e.target.classList.contains("arrowUp")?1:-1)}function Y(e,t,n){var a=e&&e.target,i=n||a&&a.parentNode&&a.parentNode.firstChild,o=me("increment");o.delta=t,i&&i.dispatchEvent(o)}function j(e,t,n,a){var i=Z(t,!0),o=d("span","flatpickr-day "+e,t.getDate().toString());return o.dateObj=t,o.$i=a,o.setAttribute("aria-label",g.formatDate(t,g.config.ariaDateFormat)),-1===e.indexOf("hidden")&&0===w(t,g.now)&&(g.todayDateElem=o,o.classList.add("today"),o.setAttribute("aria-current","date")),i?(o.tabIndex=-1,ge(t)&&(o.classList.add("selected"),g.selectedDateElem=o,"range"===g.config.mode&&(c(o,"startRange",g.selectedDates[0]&&0===w(t,g.selectedDates[0],!0)),c(o,"endRange",g.selectedDates[1]&&0===w(t,g.selectedDates[1],!0)),"nextMonthDay"===e&&o.classList.add("inRange")))):o.classList.add("disabled"),"range"===g.config.mode&&function(e){return!("range"!==g.config.mode||g.selectedDates.length<2)&&w(e,g.selectedDates[0])>=0&&w(e,g.selectedDates[1])<=0}(t)&&!ge(t)&&o.classList.add("inRange"),g.weekNumbers&&1===g.config.showMonths&&"prevMonthDay"!==e&&n%7==1&&g.weekNumbers.insertAdjacentHTML("beforeend","<span class='flatpickr-day'>"+g.config.getWeek(t)+"</span>"),fe("onDayCreate",o),o}function H(e){e.focus(),"range"===g.config.mode&&ee(e)}function L(e){for(var t=e>0?0:g.config.showMonths-1,n=e>0?g.config.showMonths:-1,a=t;a!=n;a+=e)for(var i=g.daysContainer.children[a],o=e>0?0:i.children.length-1,r=e>0?i.children.length:-1,l=o;l!=r;l+=e){var c=i.children[l];if(-1===c.className.indexOf("hidden")&&Z(c.dateObj))return c}}function W(e,t){var n=Q(document.activeElement||document.body),a=void 0!==e?e:n?document.activeElement:void 0!==g.selectedDateElem&&Q(g.selectedDateElem)?g.selectedDateElem:void 0!==g.todayDateElem&&Q(g.todayDateElem)?g.todayDateElem:L(t>0?1:-1);return void 0===a?g._input.focus():n?void function(e,t){for(var n=-1===e.className.indexOf("Month")?e.dateObj.getMonth():g.currentMonth,a=t>0?g.config.showMonths:-1,i=t>0?1:-1,o=n-g.currentMonth;o!=a;o+=i)for(var r=g.daysContainer.children[o],l=n-g.currentMonth===o?e.$i+t:t<0?r.children.length-1:0,c=r.children.length,d=l;d>=0&&d<c&&d!=(t>0?c:-1);d+=i){var s=r.children[d];if(-1===s.className.indexOf("hidden")&&Z(s.dateObj)&&Math.abs(e.$i-d)>=Math.abs(t))return H(s)}g.changeMonth(i),W(L(i),0)}(a,t):H(a)}function R(e,t){for(var n=(new Date(e,t,1).getDay()-g.l10n.firstDayOfWeek+7)%7,a=g.utils.getDaysInMonth((t-1+12)%12),i=g.utils.getDaysInMonth(t),o=window.document.createDocumentFragment(),r=g.config.showMonths>1,l=r?"prevMonthDay hidden":"prevMonthDay",c=r?"nextMonthDay hidden":"nextMonthDay",s=a+1-n,u=0;s<=a;s++,u++)o.appendChild(j(l,new Date(e,t-1,s),s,u));for(s=1;s<=i;s++,u++)o.appendChild(j("",new Date(e,t,s),s,u));for(var f=i+1;f<=42-n&&(1===g.config.showMonths||u%7!=0);f++,u++)o.appendChild(j(c,new Date(e,t+1,f%i),f,u));var m=d("div","dayContainer");return m.appendChild(o),m}function B(){if(void 0!==g.daysContainer){s(g.daysContainer),g.weekNumbers&&s(g.weekNumbers);for(var e=document.createDocumentFragment(),t=0;t<g.config.showMonths;t++){var n=new Date(g.currentYear,g.currentMonth,1);n.setMonth(g.currentMonth+t),e.appendChild(R(n.getFullYear(),n.getMonth()))}g.daysContainer.appendChild(e),g.days=g.daysContainer.firstChild,"range"===g.config.mode&&1===g.selectedDates.length&&ee()}}function K(){var e=d("div","flatpickr-month"),t=window.document.createDocumentFragment(),n=d("span","cur-month"),a=u("cur-year",{tabindex:"-1"}),i=a.getElementsByTagName("input")[0];i.setAttribute("aria-label",g.l10n.yearAriaLabel),g.config.minDate&&i.setAttribute("min",g.config.minDate.getFullYear().toString()),g.config.maxDate&&(i.setAttribute("max",g.config.maxDate.getFullYear().toString()),i.disabled=!!g.config.minDate&&g.config.minDate.getFullYear()===g.config.maxDate.getFullYear());var o=d("div","flatpickr-current-month");return o.appendChild(n),o.appendChild(a),t.appendChild(o),e.appendChild(t),{container:e,yearElement:i,monthElement:n}}function J(){s(g.monthNav),g.monthNav.appendChild(g.prevMonthNav),g.config.showMonths&&(g.yearElements=[],g.monthElements=[]);for(var e=g.config.showMonths;e--;){var t=K();g.yearElements.push(t.yearElement),g.monthElements.push(t.monthElement),g.monthNav.appendChild(t.container)}g.monthNav.appendChild(g.nextMonthNav)}function U(){g.weekdayContainer?s(g.weekdayContainer):g.weekdayContainer=d("div","flatpickr-weekdays");for(var e=g.config.showMonths;e--;){var t=d("div","flatpickr-weekdaycontainer");g.weekdayContainer.appendChild(t)}return q(),g.weekdayContainer}function q(){var e=g.l10n.firstDayOfWeek,t=g.l10n.weekdays.shorthand.slice();e>0&&e<t.length&&(t=t.splice(e,t.length).concat(t.splice(0,e)));for(var n=g.config.showMonths;n--;)g.weekdayContainer.children[n].innerHTML="\n      <span class='flatpickr-weekday'>\n        "+t.join("</span><span class='flatpickr-weekday'>")+"\n      </span>\n      "}function $(e,t){void 0===t&&(t=!0);var n=t?e:e-g.currentMonth;n<0&&!0===g._hidePrevMonthArrow||n>0&&!0===g._hideNextMonthArrow||(g.currentMonth+=n,(g.currentMonth<0||g.currentMonth>11)&&(g.currentYear+=g.currentMonth>11?1:-1,g.currentMonth=(g.currentMonth+12)%12,fe("onYearChange")),B(),fe("onMonthChange"),pe())}function z(e){return!(!g.config.appendTo||!g.config.appendTo.contains(e))||g.calendarContainer.contains(e)}function G(e){if(g.isOpen&&!g.config.inline){var t="function"==typeof(r=e).composedPath?r.composedPath()[0]:r.target,n=z(t),a=t===g.input||t===g.altInput||g.element.contains(t)||e.path&&e.path.indexOf&&(~e.path.indexOf(g.input)||~e.path.indexOf(g.altInput)),i="blur"===e.type?a&&e.relatedTarget&&!z(e.relatedTarget):!a&&!n&&!z(e.relatedTarget),o=!g.config.ignoredFocusElements.some(function(e){return e.contains(t)});i&&o&&(g.close(),"range"===g.config.mode&&1===g.selectedDates.length&&(g.clear(!1),g.redraw()))}var r}function V(e){if(!(!e||g.config.minDate&&e<g.config.minDate.getFullYear()||g.config.maxDate&&e>g.config.maxDate.getFullYear())){var t=e,n=g.currentYear!==t;g.currentYear=t||g.currentYear,g.config.maxDate&&g.currentYear===g.config.maxDate.getFullYear()?g.currentMonth=Math.min(g.config.maxDate.getMonth(),g.currentMonth):g.config.minDate&&g.currentYear===g.config.minDate.getFullYear()&&(g.currentMonth=Math.max(g.config.minDate.getMonth(),g.currentMonth)),n&&(g.redraw(),fe("onYearChange"))}}function Z(e,t){void 0===t&&(t=!0);var n=g.parseDate(e,void 0,t);if(g.config.minDate&&n&&w(n,g.config.minDate,void 0!==t?t:!g.minDateHasTime)<0||g.config.maxDate&&n&&w(n,g.config.maxDate,void 0!==t?t:!g.maxDateHasTime)>0)return!1;if(0===g.config.enable.length&&0===g.config.disable.length)return!0;if(void 0===n)return!1;for(var a=g.config.enable.length>0,i=a?g.config.enable:g.config.disable,o=0,r=void 0;o<i.length;o++){if("function"==typeof(r=i[o])&&r(n))return a;if(r instanceof Date&&void 0!==n&&r.getTime()===n.getTime())return a;if("string"==typeof r&&void 0!==n){var l=g.parseDate(r,void 0,!0);return l&&l.getTime()===n.getTime()?a:!a}if("object"==typeof r&&void 0!==n&&r.from&&r.to&&n.getTime()>=r.from.getTime()&&n.getTime()<=r.to.getTime())return a}return!a}function Q(e){return void 0!==g.daysContainer&&(-1===e.className.indexOf("hidden")&&g.daysContainer.contains(e))}function X(e){var t=e.target===g._input,n=g.config.allowInput,a=g.isOpen&&(!n||!t),i=g.config.inline&&t&&!n;if(13===e.keyCode&&t){if(n)return g.setDate(g._input.value,!0,e.target===g.altInput?g.config.altFormat:g.config.dateFormat),e.target.blur();g.open()}else if(z(e.target)||a||i){var o=!!g.timeContainer&&g.timeContainer.contains(e.target);switch(e.keyCode){case 13:o?(x(),le()):ce(e);break;case 27:e.preventDefault(),le();break;case 8:case 46:t&&!g.config.allowInput&&(e.preventDefault(),g.clear());break;case 37:case 39:if(o)g.hourElement&&g.hourElement.focus();else if(e.preventDefault(),void 0!==g.daysContainer&&(!1===n||document.activeElement&&Q(document.activeElement))){var r=39===e.keyCode?1:-1;e.ctrlKey?(e.stopPropagation(),$(r),W(L(1),0)):W(void 0,r)}break;case 38:case 40:e.preventDefault();var l=40===e.keyCode?1:-1;g.daysContainer&&void 0!==e.target.$i||e.target===g.input?e.ctrlKey?(e.stopPropagation(),V(g.currentYear-l),W(L(1),0)):o||W(void 0,7*l):g.config.enableTime&&(!o&&g.hourElement&&g.hourElement.focus(),x(e),g._debouncedChange());break;case 9:if(o){var c=[g.hourElement,g.minuteElement,g.secondElement,g.amPM].filter(function(e){return e}),d=c.indexOf(e.target);if(-1!==d){var s=c[d+(e.shiftKey?-1:1)];void 0!==s?(e.preventDefault(),s.focus()):e.shiftKey&&(e.preventDefault(),g._input.focus())}}}}if(void 0!==g.amPM&&e.target===g.amPM)switch(e.key){case g.l10n.amPM[0].charAt(0):case g.l10n.amPM[0].charAt(0).toLowerCase():g.amPM.textContent=g.l10n.amPM[0],T(),ve();break;case g.l10n.amPM[1].charAt(0):case g.l10n.amPM[1].charAt(0).toLowerCase():g.amPM.textContent=g.l10n.amPM[1],T(),ve()}fe("onKeyDown",e)}function ee(e){if(1===g.selectedDates.length&&(!e||e.classList.contains("flatpickr-day")&&!e.classList.contains("disabled"))){for(var t=e?e.dateObj.getTime():g.days.firstElementChild.dateObj.getTime(),n=g.parseDate(g.selectedDates[0],void 0,!0).getTime(),a=Math.min(t,g.selectedDates[0].getTime()),i=Math.max(t,g.selectedDates[0].getTime()),o=g.daysContainer.lastChild.lastChild.dateObj.getTime(),r=!1,l=0,c=0,d=a;d<o;d+=y.DAY)Z(new Date(d),!0)||(r=r||d>a&&d<i,d<n&&(!l||d>l)?l=d:d>n&&(!c||d<c)&&(c=d));for(var s=0;s<g.config.showMonths;s++)for(var u=g.daysContainer.children[s],f=g.daysContainer.children[s-1],m=function(a,i){var o=u.children[a],d=o.dateObj.getTime(),m=l>0&&d<l||c>0&&d>c;return m?(o.classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(e){o.classList.remove(e)}),"continue"):r&&!m?"continue":(["startRange","inRange","endRange","notAllowed"].forEach(function(e){o.classList.remove(e)}),void(void 0!==e&&(e.classList.add(t<g.selectedDates[0].getTime()?"startRange":"endRange"),!u.contains(e)&&s>0&&f&&f.lastChild.dateObj.getTime()>=d||(n<t&&d===n?o.classList.add("startRange"):n>t&&d===n&&o.classList.add("endRange"),d>=l&&(0===c||d<=c)&&b(d,n,t)&&o.classList.add("inRange")))))},p=0,h=u.children.length;p<h;p++)m(p)}}function te(){!g.isOpen||g.config.static||g.config.inline||oe()}function ne(){g.setDate(void 0!==g.config.minDate?new Date(g.config.minDate.getTime()):new Date,!1),I(),ve()}function ae(e){return function(t){var n=g.config["_"+e+"Date"]=g.parseDate(t,g.config.dateFormat),a=g.config["_"+("min"===e?"max":"min")+"Date"];void 0!==n&&(g["min"===e?"minDateHasTime":"maxDateHasTime"]=n.getHours()>0||n.getMinutes()>0||n.getSeconds()>0),g.selectedDates&&(g.selectedDates=g.selectedDates.filter(function(e){return Z(e)}),g.selectedDates.length||"min"!==e||k(n),ve()),g.daysContainer&&(re(),void 0!==n?g.currentYearElement[e]=n.getFullYear().toString():g.currentYearElement.removeAttribute(e),g.currentYearElement.disabled=!!a&&void 0!==n&&a.getFullYear()===n.getFullYear())}}function ie(){"object"!=typeof g.config.locale&&void 0===E.l10ns[g.config.locale]&&g.config.errorHandler(new Error("flatpickr: invalid locale "+g.config.locale)),g.l10n=e({},E.l10ns.default,"object"==typeof g.config.locale?g.config.locale:"default"!==g.config.locale?E.l10ns[g.config.locale]:void 0),p.K="("+g.l10n.amPM[0]+"|"+g.l10n.amPM[1]+"|"+g.l10n.amPM[0].toLowerCase()+"|"+g.l10n.amPM[1].toLowerCase()+")",g.formatDate=v(g),g.parseDate=D({config:g.config,l10n:g.l10n})}function oe(e){if(void 0!==g.calendarContainer){fe("onPreCalendarPosition");var t=e||g._positionElement,n=Array.prototype.reduce.call(g.calendarContainer.children,function(e,t){return e+t.offsetHeight},0),a=g.calendarContainer.offsetWidth,i=g.config.position.split(" "),o=i[0],r=i.length>1?i[1]:null,l=t.getBoundingClientRect(),d=window.innerHeight-l.bottom,s="above"===o||"below"!==o&&d<n&&l.top>n,u=window.pageYOffset+l.top+(s?-n-2:t.offsetHeight+2);if(c(g.calendarContainer,"arrowTop",!s),c(g.calendarContainer,"arrowBottom",s),!g.config.inline){var f=window.pageXOffset+l.left-(null!=r&&"center"===r?(a-l.width)/2:0),m=window.document.body.offsetWidth-l.right,p=f+a>window.document.body.offsetWidth,h=m+a>window.document.body.offsetWidth;if(c(g.calendarContainer,"rightMost",p),!g.config.static)if(g.calendarContainer.style.top=u+"px",p)if(h){var v=document.styleSheets[0];if(void 0===v)return;var D=window.document.body.offsetWidth,w=Math.max(0,D/2-a/2),b=v.cssRules.length,y="{left:"+l.left+"px;right:auto;}";c(g.calendarContainer,"rightMost",!1),c(g.calendarContainer,"centerMost",!0),v.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after"+y,b),g.calendarContainer.style.left=w+"px",g.calendarContainer.style.right="auto"}else g.calendarContainer.style.left="auto",g.calendarContainer.style.right=m+"px";else g.calendarContainer.style.left=f+"px",g.calendarContainer.style.right="auto"}}}function re(){g.config.noCalendar||g.isMobile||(pe(),B())}function le(){g._input.focus(),-1!==window.navigator.userAgent.indexOf("MSIE")||void 0!==navigator.msMaxTouchPoints?setTimeout(g.close,0):g.close()}function ce(e){e.preventDefault(),e.stopPropagation();var t=function e(t,n){return n(t)?t:t.parentNode?e(t.parentNode,n):void 0}(e.target,function(e){return e.classList&&e.classList.contains("flatpickr-day")&&!e.classList.contains("disabled")&&!e.classList.contains("notAllowed")});if(void 0!==t){var n=t,a=g.latestSelectedDateObj=new Date(n.dateObj.getTime()),i=(a.getMonth()<g.currentMonth||a.getMonth()>g.currentMonth+g.config.showMonths-1)&&"range"!==g.config.mode;if(g.selectedDateElem=n,"single"===g.config.mode)g.selectedDates=[a];else if("multiple"===g.config.mode){var o=ge(a);o?g.selectedDates.splice(parseInt(o),1):g.selectedDates.push(a)}else"range"===g.config.mode&&(2===g.selectedDates.length&&g.clear(!1,!1),g.latestSelectedDateObj=a,g.selectedDates.push(a),0!==w(a,g.selectedDates[0],!0)&&g.selectedDates.sort(function(e,t){return e.getTime()-t.getTime()}));if(T(),i){var r=g.currentYear!==a.getFullYear();g.currentYear=a.getFullYear(),g.currentMonth=a.getMonth(),r&&fe("onYearChange"),fe("onMonthChange")}if(pe(),B(),ve(),g.config.enableTime&&setTimeout(function(){return g.showTimeInput=!0},50),i||"range"===g.config.mode||1!==g.config.showMonths?void 0!==g.selectedDateElem&&void 0===g.hourElement&&g.selectedDateElem&&g.selectedDateElem.focus():H(n),void 0!==g.hourElement&&void 0!==g.hourElement&&g.hourElement.focus(),g.config.closeOnSelect){var l="single"===g.config.mode&&!g.config.enableTime,c="range"===g.config.mode&&2===g.selectedDates.length&&!g.config.enableTime;(l||c)&&le()}F()}}g.parseDate=D({config:g.config,l10n:g.l10n}),g._handlers=[],g._bind=_,g._setHoursFromDate=k,g._positionCalendar=oe,g.changeMonth=$,g.changeYear=V,g.clear=function(e,t){void 0===e&&(e=!0);void 0===t&&(t=!0);g.input.value="",void 0!==g.altInput&&(g.altInput.value="");void 0!==g.mobileInput&&(g.mobileInput.value="");g.selectedDates=[],g.latestSelectedDateObj=void 0,!0===t&&(g.currentYear=g._initialDate.getFullYear(),g.currentMonth=g._initialDate.getMonth());g.showTimeInput=!1,!0===g.config.enableTime&&I();g.redraw(),e&&fe("onChange")},g.close=function(){g.isOpen=!1,g.isMobile||(void 0!==g.calendarContainer&&g.calendarContainer.classList.remove("open"),void 0!==g._input&&g._input.classList.remove("active"));fe("onClose")},g._createElement=d,g.destroy=function(){void 0!==g.config&&fe("onDestroy");for(var e=g._handlers.length;e--;){var t=g._handlers[e];t.element.removeEventListener(t.event,t.handler,t.options)}if(g._handlers=[],g.mobileInput)g.mobileInput.parentNode&&g.mobileInput.parentNode.removeChild(g.mobileInput),g.mobileInput=void 0;else if(g.calendarContainer&&g.calendarContainer.parentNode)if(g.config.static&&g.calendarContainer.parentNode){var n=g.calendarContainer.parentNode;if(n.lastChild&&n.removeChild(n.lastChild),n.parentNode){for(;n.firstChild;)n.parentNode.insertBefore(n.firstChild,n);n.parentNode.removeChild(n)}}else g.calendarContainer.parentNode.removeChild(g.calendarContainer);g.altInput&&(g.input.type="text",g.altInput.parentNode&&g.altInput.parentNode.removeChild(g.altInput),delete g.altInput);g.input&&(g.input.type=g.input._type,g.input.classList.remove("flatpickr-input"),g.input.removeAttribute("readonly"),g.input.value="");["_showTimeInput","latestSelectedDateObj","_hideNextMonthArrow","_hidePrevMonthArrow","__hideNextMonthArrow","__hidePrevMonthArrow","isMobile","isOpen","selectedDateElem","minDateHasTime","maxDateHasTime","days","daysContainer","_input","_positionElement","innerContainer","rContainer","monthNav","todayDateElem","calendarContainer","weekdayContainer","prevMonthNav","nextMonthNav","currentMonthElement","currentYearElement","navigationCurrentMonth","selectedDateElem","config"].forEach(function(e){try{delete g[e]}catch(e){}})},g.isEnabled=Z,g.jumpToDate=P,g.open=function(e,t){void 0===t&&(t=g._positionElement);if(!0===g.isMobile)return e&&(e.preventDefault(),e.target&&e.target.blur()),void 0!==g.mobileInput&&(g.mobileInput.focus(),g.mobileInput.click()),void fe("onOpen");if(g._input.disabled||g.config.inline)return;var n=g.isOpen;g.isOpen=!0,n||(g.calendarContainer.classList.add("open"),g._input.classList.add("active"),fe("onOpen"),oe(t));!0===g.config.enableTime&&!0===g.config.noCalendar&&(0===g.selectedDates.length&&ne(),!1!==g.config.allowInput||void 0!==e&&g.timeContainer.contains(e.relatedTarget)||setTimeout(function(){return g.hourElement.select()},50))},g.redraw=re,g.set=function(e,n){null!==e&&"object"==typeof e?Object.assign(g.config,e):(g.config[e]=n,void 0!==de[e]?de[e].forEach(function(e){return e()}):t.indexOf(e)>-1&&(g.config[e]=l(n)));g.redraw(),ve(!1)},g.setDate=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=g.config.dateFormat);if(0!==e&&!e||e instanceof Array&&0===e.length)return g.clear(t);se(e,n),g.showTimeInput=g.selectedDates.length>0,g.latestSelectedDateObj=g.selectedDates[0],g.redraw(),P(),k(),ve(t),t&&fe("onChange")},g.toggle=function(e){if(!0===g.isOpen)return g.close();g.open(e)};var de={locale:[ie,q],showMonths:[J,M,U]};function se(e,t){var n=[];if(e instanceof Array)n=e.map(function(e){return g.parseDate(e,t)});else if(e instanceof Date||"number"==typeof e)n=[g.parseDate(e,t)];else if("string"==typeof e)switch(g.config.mode){case"single":case"time":n=[g.parseDate(e,t)];break;case"multiple":n=e.split(g.config.conjunction).map(function(e){return g.parseDate(e,t)});break;case"range":n=e.split(g.l10n.rangeSeparator).map(function(e){return g.parseDate(e,t)})}else g.config.errorHandler(new Error("Invalid date supplied: "+JSON.stringify(e)));g.selectedDates=n.filter(function(e){return e instanceof Date&&Z(e,!1)}),"range"===g.config.mode&&g.selectedDates.sort(function(e,t){return e.getTime()-t.getTime()})}function ue(e){return e.slice().map(function(e){return"string"==typeof e||"number"==typeof e||e instanceof Date?g.parseDate(e,void 0,!0):e&&"object"==typeof e&&e.from&&e.to?{from:g.parseDate(e.from,void 0),to:g.parseDate(e.to,void 0)}:e}).filter(function(e){return e})}function fe(e,t){if(void 0!==g.config){var n=g.config[e];if(void 0!==n&&n.length>0)for(var a=0;n[a]&&a<n.length;a++)n[a](g.selectedDates,g.input.value,g,t);"onChange"===e&&(g.input.dispatchEvent(me("change")),g.input.dispatchEvent(me("input")))}}function me(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}function ge(e){for(var t=0;t<g.selectedDates.length;t++)if(0===w(g.selectedDates[t],e))return""+t;return!1}function pe(){g.config.noCalendar||g.isMobile||!g.monthNav||(g.yearElements.forEach(function(e,t){var n=new Date(g.currentYear,g.currentMonth,1);n.setMonth(g.currentMonth+t),g.monthElements[t].textContent=m(n.getMonth(),g.config.shorthandCurrentMonth,g.l10n)+" ",e.value=n.getFullYear().toString()}),g._hidePrevMonthArrow=void 0!==g.config.minDate&&(g.currentYear===g.config.minDate.getFullYear()?g.currentMonth<=g.config.minDate.getMonth():g.currentYear<g.config.minDate.getFullYear()),g._hideNextMonthArrow=void 0!==g.config.maxDate&&(g.currentYear===g.config.maxDate.getFullYear()?g.currentMonth+1>g.config.maxDate.getMonth():g.currentYear>g.config.maxDate.getFullYear()))}function he(e){return g.selectedDates.map(function(t){return g.formatDate(t,e)}).filter(function(e,t,n){return"range"!==g.config.mode||g.config.enableTime||n.indexOf(e)===t}).join("range"!==g.config.mode?g.config.conjunction:g.l10n.rangeSeparator)}function ve(e){if(void 0===e&&(e=!0),0===g.selectedDates.length)return g.clear(e);void 0!==g.mobileInput&&g.mobileFormatStr&&(g.mobileInput.value=void 0!==g.latestSelectedDateObj?g.formatDate(g.latestSelectedDateObj,g.mobileFormatStr):""),g.input.value=he(g.config.dateFormat),void 0!==g.altInput&&(g.altInput.value=he(g.config.altFormat)),!1!==e&&fe("onValueUpdate")}function De(e){e.preventDefault();var t=g.prevMonthNav.contains(e.target),n=g.nextMonthNav.contains(e.target);t||n?$(t?-1:1):g.yearElements.indexOf(e.target)>=0?e.target.select():e.target.classList.contains("arrowUp")?g.changeYear(g.currentYear+1):e.target.classList.contains("arrowDown")&&g.changeYear(g.currentYear-1)}return function(){g.element=g.input=n,g.isOpen=!1,function(){var a=["wrap","weekNumbers","allowInput","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],i=e({},f,JSON.parse(JSON.stringify(n.dataset||{}))),o={};g.config.parseDate=i.parseDate,g.config.formatDate=i.formatDate,Object.defineProperty(g.config,"enable",{get:function(){return g.config._enable},set:function(e){g.config._enable=ue(e)}}),Object.defineProperty(g.config,"disable",{get:function(){return g.config._disable},set:function(e){g.config._disable=ue(e)}});var r="time"===i.mode;i.dateFormat||!i.enableTime&&!r||(o.dateFormat=i.noCalendar||r?"H:i"+(i.enableSeconds?":S":""):E.defaultConfig.dateFormat+" H:i"+(i.enableSeconds?":S":"")),i.altInput&&(i.enableTime||r)&&!i.altFormat&&(o.altFormat=i.noCalendar||r?"h:i"+(i.enableSeconds?":S K":" K"):E.defaultConfig.altFormat+" h:i"+(i.enableSeconds?":S":"")+" K"),Object.defineProperty(g.config,"minDate",{get:function(){return g.config._minDate},set:ae("min")}),Object.defineProperty(g.config,"maxDate",{get:function(){return g.config._maxDate},set:ae("max")});var c=function(e){return function(t){g.config["min"===e?"_minTime":"_maxTime"]=g.parseDate(t,"H:i")}};Object.defineProperty(g.config,"minTime",{get:function(){return g.config._minTime},set:c("min")}),Object.defineProperty(g.config,"maxTime",{get:function(){return g.config._maxTime},set:c("max")}),"time"===i.mode&&(g.config.noCalendar=!0,g.config.enableTime=!0),Object.assign(g.config,o,i);for(var d=0;d<a.length;d++)g.config[a[d]]=!0===g.config[a[d]]||"true"===g.config[a[d]];t.filter(function(e){return void 0!==g.config[e]}).forEach(function(e){g.config[e]=l(g.config[e]||[]).map(h)}),g.isMobile=!g.config.disableMobile&&!g.config.inline&&"single"===g.config.mode&&!g.config.disable.length&&!g.config.enable.length&&!g.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);for(var d=0;d<g.config.plugins.length;d++){var s=g.config.plugins[d](g)||{};for(var u in s)t.indexOf(u)>-1?g.config[u]=l(s[u]).map(h).concat(g.config[u]):void 0===i[u]&&(g.config[u]=s[u])}fe("onParseConfig")}(),ie(),g.input=g.config.wrap?n.querySelector("[data-input]"):n,g.input?(g.input._type=g.input.type,g.input.type="text",g.input.classList.add("flatpickr-input"),g._input=g.input,g.config.altInput&&(g.altInput=d(g.input.nodeName,g.input.className+" "+g.config.altInputClass),g._input=g.altInput,g.altInput.placeholder=g.input.placeholder,g.altInput.disabled=g.input.disabled,g.altInput.required=g.input.required,g.altInput.tabIndex=g.input.tabIndex,g.altInput.type="text",g.input.setAttribute("type","hidden"),!g.config.static&&g.input.parentNode&&g.input.parentNode.insertBefore(g.altInput,g.input.nextSibling)),g.config.allowInput||g._input.setAttribute("readonly","readonly"),g._positionElement=g.config.positionElement||g._input):g.config.errorHandler(new Error("Invalid input element specified")),function(){g.selectedDates=[],g.now=g.parseDate(g.config.now)||new Date;var e=g.config.defaultDate||("INPUT"!==g.input.nodeName&&"TEXTAREA"!==g.input.nodeName||!g.input.placeholder||g.input.value!==g.input.placeholder?g.input.value:null);e&&se(e,g.config.dateFormat),g._initialDate=g.selectedDates.length>0?g.selectedDates[0]:g.config.minDate&&g.config.minDate.getTime()>g.now.getTime()?g.config.minDate:g.config.maxDate&&g.config.maxDate.getTime()<g.now.getTime()?g.config.maxDate:g.now,g.currentYear=g._initialDate.getFullYear(),g.currentMonth=g._initialDate.getMonth(),g.selectedDates.length>0&&(g.latestSelectedDateObj=g.selectedDates[0]),void 0!==g.config.minTime&&(g.config.minTime=g.parseDate(g.config.minTime,"H:i")),void 0!==g.config.maxTime&&(g.config.maxTime=g.parseDate(g.config.maxTime,"H:i")),g.minDateHasTime=!!g.config.minDate&&(g.config.minDate.getHours()>0||g.config.minDate.getMinutes()>0||g.config.minDate.getSeconds()>0),g.maxDateHasTime=!!g.config.maxDate&&(g.config.maxDate.getHours()>0||g.config.maxDate.getMinutes()>0||g.config.maxDate.getSeconds()>0),Object.defineProperty(g,"showTimeInput",{get:function(){return g._showTimeInput},set:function(e){g._showTimeInput=e,g.calendarContainer&&c(g.calendarContainer,"showTimeInput",e),g.isOpen&&oe()}})}(),g.utils={getDaysInMonth:function(e,t){return void 0===e&&(e=g.currentMonth),void 0===t&&(t=g.currentYear),1===e&&(t%4==0&&t%100!=0||t%400==0)?29:g.l10n.daysInMonth[e]}},g.isMobile||function(){var e=window.document.createDocumentFragment();if(g.calendarContainer=d("div","flatpickr-calendar"),g.calendarContainer.tabIndex=-1,!g.config.noCalendar){if(e.appendChild((g.monthNav=d("div","flatpickr-months"),g.yearElements=[],g.monthElements=[],g.prevMonthNav=d("span","flatpickr-prev-month"),g.prevMonthNav.innerHTML=g.config.prevArrow,g.nextMonthNav=d("span","flatpickr-next-month"),g.nextMonthNav.innerHTML=g.config.nextArrow,J(),Object.defineProperty(g,"_hidePrevMonthArrow",{get:function(){return g.__hidePrevMonthArrow},set:function(e){g.__hidePrevMonthArrow!==e&&(c(g.prevMonthNav,"disabled",e),g.__hidePrevMonthArrow=e)}}),Object.defineProperty(g,"_hideNextMonthArrow",{get:function(){return g.__hideNextMonthArrow},set:function(e){g.__hideNextMonthArrow!==e&&(c(g.nextMonthNav,"disabled",e),g.__hideNextMonthArrow=e)}}),g.currentYearElement=g.yearElements[0],pe(),g.monthNav)),g.innerContainer=d("div","flatpickr-innerContainer"),g.config.weekNumbers){var t=function(){g.calendarContainer.classList.add("hasWeeks");var e=d("div","flatpickr-weekwrapper");e.appendChild(d("span","flatpickr-weekday",g.l10n.weekAbbreviation));var t=d("div","flatpickr-weeks");return e.appendChild(t),{weekWrapper:e,weekNumbers:t}}(),n=t.weekWrapper,a=t.weekNumbers;g.innerContainer.appendChild(n),g.weekNumbers=a,g.weekWrapper=n}g.rContainer=d("div","flatpickr-rContainer"),g.rContainer.appendChild(U()),g.daysContainer||(g.daysContainer=d("div","flatpickr-days"),g.daysContainer.tabIndex=-1),B(),g.rContainer.appendChild(g.daysContainer),g.innerContainer.appendChild(g.rContainer),e.appendChild(g.innerContainer)}g.config.enableTime&&e.appendChild(function(){g.calendarContainer.classList.add("hasTime"),g.config.noCalendar&&g.calendarContainer.classList.add("noCalendar"),g.timeContainer=d("div","flatpickr-time"),g.timeContainer.tabIndex=-1;var e=d("span","flatpickr-time-separator",":"),t=u("flatpickr-hour");g.hourElement=t.getElementsByTagName("input")[0];var n=u("flatpickr-minute");if(g.minuteElement=n.getElementsByTagName("input")[0],g.hourElement.tabIndex=g.minuteElement.tabIndex=-1,g.hourElement.value=i(g.latestSelectedDateObj?g.latestSelectedDateObj.getHours():g.config.time_24hr?g.config.defaultHour:function(e){switch(e%24){case 0:case 12:return 12;default:return e%12}}(g.config.defaultHour)),g.minuteElement.value=i(g.latestSelectedDateObj?g.latestSelectedDateObj.getMinutes():g.config.defaultMinute),g.hourElement.setAttribute("step",g.config.hourIncrement.toString()),g.minuteElement.setAttribute("step",g.config.minuteIncrement.toString()),g.hourElement.setAttribute("min",g.config.time_24hr?"0":"1"),g.hourElement.setAttribute("max",g.config.time_24hr?"23":"12"),g.minuteElement.setAttribute("min","0"),g.minuteElement.setAttribute("max","59"),g.timeContainer.appendChild(t),g.timeContainer.appendChild(e),g.timeContainer.appendChild(n),g.config.time_24hr&&g.timeContainer.classList.add("time24hr"),g.config.enableSeconds){g.timeContainer.classList.add("hasSeconds");var a=u("flatpickr-second");g.secondElement=a.getElementsByTagName("input")[0],g.secondElement.value=i(g.latestSelectedDateObj?g.latestSelectedDateObj.getSeconds():g.config.defaultSeconds),g.secondElement.setAttribute("step",g.minuteElement.getAttribute("step")),g.secondElement.setAttribute("min","0"),g.secondElement.setAttribute("max","59"),g.timeContainer.appendChild(d("span","flatpickr-time-separator",":")),g.timeContainer.appendChild(a)}return g.config.time_24hr||(g.amPM=d("span","flatpickr-am-pm",g.l10n.amPM[o((g.latestSelectedDateObj?g.hourElement.value:g.config.defaultHour)>11)]),g.amPM.title=g.l10n.toggleTitle,g.amPM.tabIndex=-1,g.timeContainer.appendChild(g.amPM)),g.timeContainer}()),c(g.calendarContainer,"rangeMode","range"===g.config.mode),c(g.calendarContainer,"animate",!0===g.config.animate),c(g.calendarContainer,"multiMonth",g.config.showMonths>1),g.calendarContainer.appendChild(e);var r=void 0!==g.config.appendTo&&void 0!==g.config.appendTo.nodeType;if((g.config.inline||g.config.static)&&(g.calendarContainer.classList.add(g.config.inline?"inline":"static"),g.config.inline&&(!r&&g.element.parentNode?g.element.parentNode.insertBefore(g.calendarContainer,g._input.nextSibling):void 0!==g.config.appendTo&&g.config.appendTo.appendChild(g.calendarContainer)),g.config.static)){var l=d("div","flatpickr-wrapper");g.element.parentNode&&g.element.parentNode.insertBefore(l,g.element),l.appendChild(g.element),g.altInput&&l.appendChild(g.altInput),l.appendChild(g.calendarContainer)}g.config.static||g.config.inline||(void 0!==g.config.appendTo?g.config.appendTo:window.document.body).appendChild(g.calendarContainer)}(),function(){if(g.config.wrap&&["open","close","toggle","clear"].forEach(function(e){Array.prototype.forEach.call(g.element.querySelectorAll("[data-"+e+"]"),function(t){return _(t,"click",g[e])})}),g.isMobile)!function(){var e=g.config.enableTime?g.config.noCalendar?"time":"datetime-local":"date";g.mobileInput=d("input",g.input.className+" flatpickr-mobile"),g.mobileInput.step=g.input.getAttribute("step")||"any",g.mobileInput.tabIndex=1,g.mobileInput.type=e,g.mobileInput.disabled=g.input.disabled,g.mobileInput.required=g.input.required,g.mobileInput.placeholder=g.input.placeholder,g.mobileFormatStr="datetime-local"===e?"Y-m-d\\TH:i:S":"date"===e?"Y-m-d":"H:i:S",g.selectedDates.length>0&&(g.mobileInput.defaultValue=g.mobileInput.value=g.formatDate(g.selectedDates[0],g.mobileFormatStr)),g.config.minDate&&(g.mobileInput.min=g.formatDate(g.config.minDate,"Y-m-d")),g.config.maxDate&&(g.mobileInput.max=g.formatDate(g.config.maxDate,"Y-m-d")),g.input.type="hidden",void 0!==g.altInput&&(g.altInput.type="hidden");try{g.input.parentNode&&g.input.parentNode.insertBefore(g.mobileInput,g.input.nextSibling)}catch(e){}_(g.mobileInput,"change",function(e){g.setDate(e.target.value,!1,g.mobileFormatStr),fe("onChange"),fe("onClose")})}();else{var e=r(te,50);g._debouncedChange=r(F,C),g.daysContainer&&!/iPhone|iPad|iPod/i.test(navigator.userAgent)&&_(g.daysContainer,"mouseover",function(e){"range"===g.config.mode&&ee(e.target)}),_(window.document.body,"keydown",X),g.config.static||_(g._input,"keydown",X),g.config.inline||g.config.static||_(window,"resize",e),void 0!==window.ontouchstart?_(window.document,"click",G):_(window.document,"mousedown",N(G)),_(window.document,"focus",G,{capture:!0}),!0===g.config.clickOpens&&(_(g._input,"focus",g.open),_(g._input,"mousedown",N(g.open))),void 0!==g.daysContainer&&(_(g.monthNav,"mousedown",N(De)),_(g.monthNav,["keyup","increment"],S),_(g.daysContainer,"mousedown",N(ce))),void 0!==g.timeContainer&&void 0!==g.minuteElement&&void 0!==g.hourElement&&(_(g.timeContainer,["increment"],x),_(g.timeContainer,"blur",x,{capture:!0}),_(g.timeContainer,"mousedown",N(A)),_([g.hourElement,g.minuteElement],["focus","click"],function(e){return e.target.select()}),void 0!==g.secondElement&&_(g.secondElement,"focus",function(){return g.secondElement&&g.secondElement.select()}),void 0!==g.amPM&&_(g.amPM,"mousedown",N(function(e){x(e),F()})))}}(),(g.selectedDates.length||g.config.noCalendar)&&(g.config.enableTime&&k(g.config.noCalendar?g.latestSelectedDateObj||g.config.minDate:void 0),ve(!1)),M(),g.showTimeInput=g.selectedDates.length>0||g.config.noCalendar;var a=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);!g.isMobile&&a&&oe(),fe("onReady")}(),g}function x(e,t){for(var n=Array.prototype.slice.call(e).filter(function(e){return e instanceof HTMLElement}),a=[],i=0;i<n.length;i++){var o=n[i];try{if(null!==o.getAttribute("data-fp-omit"))continue;void 0!==o._flatpickr&&(o._flatpickr.destroy(),o._flatpickr=void 0),o._flatpickr=M(o,t||{}),a.push(o._flatpickr)}catch(e){console.error(e)}}return 1===a.length?a[0]:a}"undefined"!=typeof HTMLElement&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return x(this,e)},HTMLElement.prototype.flatpickr=function(e){return x([this],e)});var E=function(e,t){return"string"==typeof e?x(window.document.querySelectorAll(e),t):e instanceof Node?x([e],t):x(e,t)};return E.defaultConfig=n,E.l10ns={en:e({},a),default:e({},a)},E.localize=function(t){E.l10ns.default=e({},E.l10ns.default,t)},E.setDefaults=function(t){E.defaultConfig=e({},E.defaultConfig,t)},E.parseDate=D({}),E.formatDate=v({}),E.compareDates=w,"undefined"!=typeof jQuery&&(jQuery.fn.flatpickr=function(e){return x(this,e)}),Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+("string"==typeof e?parseInt(e,10):e))},"undefined"!=typeof window&&(window.flatpickr=E),E});
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.IMask = factory());
}(this, (function () { 'use strict';

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});
  var _shared = function (key) {
    return store[key] || (store[key] = {});
  };

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var shared = _shared('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.5.5' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');
  var TO_STRING = 'toString';
  var $toString = Function[TO_STRING];
  var TPL = ('' + $toString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return $toString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === _global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      _hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      _hide(O, key, val);
    }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });
  });

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // extend global
      if (target) _redefine(target, key, out, type & $export.U);
      // export
      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  _global.core = _core;
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  // most Object methods by ES6 should accept primitives



  var _objectSap = function (KEY, exec) {
    var fn = (_core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
  };

  // 19.1.2.14 Object.keys(O)



  _objectSap('keys', function () {
    return function keys(it) {
      return _objectKeys(_toObject(it));
    };
  });

  var keys = _core.Object.keys;

  var _stringRepeat = function repeat(count) {
    var str = String(_defined(this));
    var res = '';
    var n = _toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
    for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
    return res;
  };

  _export(_export.P, 'String', {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: _stringRepeat
  });

  var repeat = _core.String.repeat;

  // https://github.com/tc39/proposal-string-pad-start-end




  var _stringPad = function (that, maxLength, fillString, left) {
    var S = String(_defined(that));
    var stringLength = S.length;
    var fillStr = fillString === undefined ? ' ' : String(fillString);
    var intMaxLength = _toLength(maxLength);
    if (intMaxLength <= stringLength || fillStr == '') return S;
    var fillLen = intMaxLength - stringLength;
    var stringFiller = _stringRepeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
  };

  var navigator = _global.navigator;

  var _userAgent = navigator && navigator.userAgent || '';

  // https://github.com/tc39/proposal-string-pad-start-end




  // https://github.com/zloirock/core-js/issues/280
  _export(_export.P + _export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(_userAgent), 'String', {
    padStart: function padStart(maxLength /* , fillString = ' ' */) {
      return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }
  });

  var padStart = _core.String.padStart;

  // https://github.com/tc39/proposal-string-pad-start-end




  // https://github.com/zloirock/core-js/issues/280
  _export(_export.P + _export.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(_userAgent), 'String', {
    padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
      return _stringPad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
  });

  var padEnd = _core.String.padEnd;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set(target, property, value, receiver) {
        var base = _superPropBase(target, property);

        var desc;

        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.set) {
            desc.set.call(receiver, value);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }

        desc = Object.getOwnPropertyDescriptor(receiver, property);

        if (desc) {
          if (!desc.writable) {
            return false;
          }

          desc.value = value;
          Object.defineProperty(receiver, property, desc);
        } else {
          _defineProperty(receiver, property, value);
        }

        return true;
      };
    }

    return set(target, property, value, receiver);
  }

  function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);

    if (!s && isStrict) {
      throw new Error('failed to set property');
    }

    return value;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  /** Checks if value is string */
  function isString(str) {
    return typeof str === 'string' || str instanceof String;
  }
  /**
    Direction
    @prop {string} NONE
    @prop {string} LEFT
    @prop {string} FORCE_LEFT
    @prop {string} RIGHT
    @prop {string} FORCE_RIGHT
  */

  var DIRECTION = {
    NONE: 'NONE',
    LEFT: 'LEFT',
    FORCE_LEFT: 'FORCE_LEFT',
    RIGHT: 'RIGHT',
    FORCE_RIGHT: 'FORCE_RIGHT'
    /**
      Direction
      @enum {string}
    */

  };

  /** Returns next char index in direction */
  function indexInDirection(pos, direction) {
    if (direction === DIRECTION.LEFT) --pos;
    return pos;
  }
  /** Returns next char position in direction */

  function posInDirection(pos, direction) {
    switch (direction) {
      case DIRECTION.LEFT:
      case DIRECTION.FORCE_LEFT:
        return --pos;

      case DIRECTION.RIGHT:
      case DIRECTION.FORCE_RIGHT:
        return ++pos;

      default:
        return pos;
    }
  }
  /** */

  function forceDirection(direction) {
    switch (direction) {
      case DIRECTION.LEFT:
        return DIRECTION.FORCE_LEFT;

      case DIRECTION.RIGHT:
        return DIRECTION.FORCE_RIGHT;

      default:
        return direction;
    }
  }
  /** Escapes regular expression control chars */

  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
  } // cloned from https://github.com/epoberezkin/fast-deep-equal with small changes

  function objectIncludes(b, a) {
    if (a === b) return true;
    var arrA = Array.isArray(a),
        arrB = Array.isArray(b),
        i;

    if (arrA && arrB) {
      if (a.length != b.length) return false;

      for (i = 0; i < a.length; i++) {
        if (!objectIncludes(a[i], b[i])) return false;
      }

      return true;
    }

    if (arrA != arrB) return false;

    if (a && b && _typeof(a) === 'object' && _typeof(b) === 'object') {
      var dateA = a instanceof Date,
          dateB = b instanceof Date;
      if (dateA && dateB) return a.getTime() == b.getTime();
      if (dateA != dateB) return false;
      var regexpA = a instanceof RegExp,
          regexpB = b instanceof RegExp;
      if (regexpA && regexpB) return a.toString() == b.toString();
      if (regexpA != regexpB) return false;
      var keys = Object.keys(a); // if (keys.length !== Object.keys(b).length) return false;

      for (i = 0; i < keys.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      }

      for (i = 0; i < keys.length; i++) {
        if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
      }

      return true;
    }

    return false;
  }
  /* eslint-disable no-undef */

  var g = typeof window !== 'undefined' && window || typeof global !== 'undefined' && global.global === global && global || typeof self !== 'undefined' && self.self === self && self || {};
  /* eslint-enable no-undef */

  /** Selection range */

  /** Provides details of changing input */

  var ActionDetails =
  /*#__PURE__*/
  function () {
    /** Current input value */

    /** Current cursor position */

    /** Old input value */

    /** Old selection */
    function ActionDetails(value, cursorPos, oldValue, oldSelection) {
      _classCallCheck(this, ActionDetails);

      this.value = value;
      this.cursorPos = cursorPos;
      this.oldValue = oldValue;
      this.oldSelection = oldSelection; // double check if left part was changed (autofilling, other non-standard input triggers)

      while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
        --this.oldSelection.start;
      }
    }
    /**
      Start changing position
      @readonly
    */


    _createClass(ActionDetails, [{
      key: "startChangePos",
      get: function get() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }
      /**
        Inserted symbols count
        @readonly
      */

    }, {
      key: "insertedCount",
      get: function get() {
        return this.cursorPos - this.startChangePos;
      }
      /**
        Inserted symbols
        @readonly
      */

    }, {
      key: "inserted",
      get: function get() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }
      /**
        Removed symbols count
        @readonly
      */

    }, {
      key: "removedCount",
      get: function get() {
        // Math.max for opposite operation
        return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
        this.oldValue.length - this.value.length, 0);
      }
      /**
        Removed symbols
        @readonly
      */

    }, {
      key: "removed",
      get: function get() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }
      /**
        Unchanged head symbols
        @readonly
      */

    }, {
      key: "head",
      get: function get() {
        return this.value.substring(0, this.startChangePos);
      }
      /**
        Unchanged tail symbols
        @readonly
      */

    }, {
      key: "tail",
      get: function get() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }
      /**
        Remove direction
        @readonly
      */

    }, {
      key: "removeDirection",
      get: function get() {
        if (!this.removedCount || this.insertedCount) return DIRECTION.NONE; // align right if delete at right or if range removed (event with backspace)

        return this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos ? DIRECTION.RIGHT : DIRECTION.LEFT;
      }
    }]);

    return ActionDetails;
  }();

  /**
    Provides details of changing model value
    @param {Object} [details]
    @param {string} [details.inserted] - Inserted symbols
    @param {boolean} [details.skip] - Can skip chars
    @param {number} [details.removeCount] - Removed symbols count
    @param {number} [details.tailShift] - Additional offset if any changes occurred before tail
  */
  var ChangeDetails =
  /*#__PURE__*/
  function () {
    /** Inserted symbols */

    /** Can skip chars */

    /** Additional offset if any changes occurred before tail */

    /** Raw inserted is used by dynamic mask */
    function ChangeDetails(details) {
      _classCallCheck(this, ChangeDetails);

      _extends(this, {
        inserted: '',
        rawInserted: '',
        skip: false,
        tailShift: 0
      }, details);
    }
    /**
      Aggregate changes
      @returns {ChangeDetails} `this`
    */


    _createClass(ChangeDetails, [{
      key: "aggregate",
      value: function aggregate(details) {
        this.rawInserted += details.rawInserted;
        this.skip = this.skip || details.skip;
        this.inserted += details.inserted;
        this.tailShift += details.tailShift;
        return this;
      }
      /** Total offset considering all changes */

    }, {
      key: "offset",
      get: function get() {
        return this.tailShift + this.inserted.length;
      }
    }]);

    return ChangeDetails;
  }();

  /** Provides common masking stuff */
  var Masked =
  /*#__PURE__*/
  function () {
    // $Shape<MaskedOptions>; TODO after fix https://github.com/facebook/flow/issues/4773

    /** @type {Mask} */

    /** */
    // $FlowFixMe TODO no ideas

    /** Transforms value before mask processing */

    /** Validates if value is acceptable */

    /** Does additional processing in the end of editing */

    /** */
    function Masked(opts) {
      _classCallCheck(this, Masked);

      this._value = '';

      this._update(opts);

      this.isInitialized = true;
    }
    /** Sets and applies new options */


    _createClass(Masked, [{
      key: "updateOptions",
      value: function updateOptions(opts) {
        if (!Object.keys(opts).length) return;
        this.withValueRefresh(this._update.bind(this, opts));
      }
      /**
        Sets new options
        @protected
      */

    }, {
      key: "_update",
      value: function _update(opts) {
        _extends(this, opts);
      }
      /** Mask state */

    }, {
      key: "reset",

      /** Resets value */
      value: function reset() {
        this._value = '';
      }
      /** */

    }, {
      key: "resolve",

      /** Resolve new value */
      value: function resolve(value) {
        this.reset();
        this.append(value, {
          input: true
        }, {
          value: ''
        });
        this.doCommit();
        return this.value;
      }
      /** */

    }, {
      key: "nearestInputPos",

      /** Finds nearest input position in direction */
      value: function nearestInputPos(cursorPos, direction) {
        return cursorPos;
      }
      /** Extracts value in range considering flags */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return this.value.slice(fromPos, toPos);
      }
      /** Extracts tail in range */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return {
          value: this.extractInput(fromPos, toPos)
        };
      }
      /** Stores state before tail */

    }, {
      key: "_storeBeforeTailState",
      value: function _storeBeforeTailState() {
        this._beforeTailState = this.state;
      }
      /** Restores state before tail */

    }, {
      key: "_restoreBeforeTailState",
      value: function _restoreBeforeTailState() {
        this.state = this._beforeTailState;
      }
      /** Resets state before tail */

    }, {
      key: "_resetBeforeTailState",
      value: function _resetBeforeTailState() {
        this._beforeTailState = null;
      }
      /** Appends tail */

    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        return this.append(tail ? tail.value : '', {
          tail: true
        });
      }
      /** Appends char */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        this._value += ch;
        return new ChangeDetails({
          inserted: ch,
          rawInserted: ch
        });
      }
      /** Appends char */

    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var checkTail = arguments.length > 2 ? arguments[2] : undefined;
        ch = this.doPrepare(ch, flags);
        if (!ch) return new ChangeDetails();
        var consistentState = this.state;

        var details = this._appendCharRaw(ch, flags);

        if (details.inserted) {
          var appended = this.doValidate(flags) !== false;

          if (appended && checkTail != null) {
            // validation ok, check tail
            this._storeBeforeTailState();

            var tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted === checkTail.value; // if ok, rollback state after tail

            if (appended && tailDetails.inserted) this._restoreBeforeTailState();
          } // revert all if something went wrong


          if (!appended) {
            details.rawInserted = details.inserted = '';
            this.state = consistentState;
          }
        }

        return details;
      }
      /** Appends symbols considering flags */

    }, {
      key: "append",
      value: function append(str, flags, tail) {
        var oldValueLength = this.value.length;
        var details = new ChangeDetails();

        for (var ci = 0; ci < str.length; ++ci) {
          details.aggregate(this._appendChar(str[ci], flags, tail));
        } // append tail but aggregate only tailShift


        if (tail != null) {
          this._storeBeforeTailState();

          details.tailShift += this.appendTail(tail).tailShift; // TODO it's a good idea to clear state after appending ends
          // but it causes bugs when one append calls another (when dynamic dispatch set rawInputValue)
          // this._resetBeforeTailState();
        }

        return details;
      }
      /** */

    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
        return new ChangeDetails();
      }
      /** Calls function and reapplies current value */

    }, {
      key: "withValueRefresh",
      value: function withValueRefresh(fn) {
        if (this._refreshing || !this.isInitialized) return fn();
        this._refreshing = true;
        var unmasked = this.unmaskedValue;
        var value = this.value;
        var ret = fn(); // try to update with raw value first to keep fixed chars

        if (this.resolve(value) !== value) {
          // or fallback to unmasked
          this.unmaskedValue = unmasked;
        }

        delete this._refreshing;
        return ret;
      }
      /**
        Prepares string before mask processing
        @protected
      */

    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.prepare ? this.prepare(str, this, flags) : str;
      }
      /**
        Validates if value is acceptable
        @protected
      */

    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
      }
      /**
        Does additional processing in the end of editing
        @protected
      */

    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.commit) this.commit(this.value, this);
      }
      /** */

    }, {
      key: "splice",
      value: function splice(start, deleteCount, inserted, removeDirection) {
        var tailPos = start + deleteCount;
        var tail = this.extractTail(tailPos);
        var startChangePos = this.nearestInputPos(start, removeDirection);
        var changeDetails = new ChangeDetails({
          tailShift: startChangePos - start // adjust tailShift if start was aligned

        }).aggregate(this.remove(startChangePos)).aggregate(this.append(inserted, {
          input: true
        }, tail));
        return changeDetails;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this.value
        };
      },
      set: function set(state) {
        this._value = state._value;
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(value) {
        this.resolve(value);
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.reset();
        this.append(value, {}, {
          value: ''
        });
        this.doCommit();
      }
      /** */

    }, {
      key: "typedValue",
      get: function get() {
        return this.unmaskedValue;
      },
      set: function set(value) {
        this.unmaskedValue = value;
      }
      /** Value that includes raw user input */

    }, {
      key: "rawInputValue",
      get: function get() {
        return this.extractInput(0, this.value.length, {
          raw: true
        });
      },
      set: function set(value) {
        this.reset();
        this.append(value, {
          raw: true
        }, {
          value: ''
        });
        this.doCommit();
      }
      /** */

    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }
    }]);

    return Masked;
  }();

  /** Get Masked class by mask type */
  function maskedClass(mask) {
    if (mask == null) {
      throw new Error('mask property should be defined');
    }

    if (mask instanceof RegExp) return g.IMask.MaskedRegExp;
    if (isString(mask)) return g.IMask.MaskedPattern;
    if (mask instanceof Date || mask === Date) return g.IMask.MaskedDate;
    if (mask instanceof Number || typeof mask === 'number' || mask === Number) return g.IMask.MaskedNumber;
    if (Array.isArray(mask) || mask === Array) return g.IMask.MaskedDynamic; // $FlowFixMe

    if (mask.prototype instanceof g.IMask.Masked) return mask; // $FlowFixMe

    if (mask instanceof Function) return g.IMask.MaskedFunction;
    console.warn('Mask not found for mask', mask); // eslint-disable-line no-console

    return g.IMask.Masked;
  }
  /** Creates new {@link Masked} depending on mask type */

  function createMask(opts) {
    opts = _objectSpread({}, opts);
    var mask = opts.mask;
    if (mask instanceof g.IMask.Masked) return mask;
    var MaskedClass = maskedClass(mask);
    return new MaskedClass(opts);
  }

  var DEFAULT_INPUT_DEFINITIONS = {
    '0': /\d/,
    'a': /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // http://stackoverflow.com/a/22075070
    '*': /./
  };
  /** */

  var PatternInputDefinition =
  /*#__PURE__*/
  function () {
    /** */

    /** */

    /** */

    /** */

    /** */

    /** */
    function PatternInputDefinition(opts) {
      _classCallCheck(this, PatternInputDefinition);

      var mask = opts.mask,
          blockOpts = _objectWithoutProperties(opts, ["mask"]);

      this.masked = createMask({
        mask: mask
      });

      _extends(this, blockOpts);
    }

    _createClass(PatternInputDefinition, [{
      key: "reset",
      value: function reset() {
        this._isFilled = false;
        this.masked.reset();
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        if (fromPos === 0 && toPos >= 1) {
          this._isFilled = false;
          return this.masked.remove(fromPos, toPos);
        }

        return new ChangeDetails();
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(str) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (this._isFilled) return new ChangeDetails();
        var state = this.masked.state; // simulate input

        var details = this.masked._appendChar(str, flags);

        if (details.inserted && this.doValidate(flags) === false) {
          details.inserted = details.rawInserted = '';
          this.masked.state = state;
        }

        if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
          details.inserted = this.placeholderChar;
        }

        details.skip = !details.inserted && !this.isOptional;
        this._isFilled = Boolean(details.inserted);
        return details;
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this._isFilled || this.isOptional) return details;
        this._isFilled = true;
        details.inserted = this.placeholderChar;
        return details;
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$masked;

        return (_this$masked = this.masked).extractTail.apply(_this$masked, arguments);
      }
    }, {
      key: "appendTail",
      value: function appendTail() {
        var _this$masked2;

        return (_this$masked2 = this.masked).appendTail.apply(_this$masked2, arguments);
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 ? arguments[2] : undefined;
        return this.masked.extractInput(fromPos, toPos, flags);
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this.value.length;
        var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);

        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return this.isComplete ? boundPos : minPos;

          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            return this.isComplete ? boundPos : maxPos;

          case DIRECTION.NONE:
          default:
            return boundPos;
        }
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this$masked3, _this$parent;

        return (_this$masked3 = this.masked).doValidate.apply(_this$masked3, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        this.masked.doCommit();
      }
    }, {
      key: "value",
      get: function get() {
        return this.masked.value || (this._isFilled && !this.isOptional ? this.placeholderChar : '');
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.masked.unmaskedValue;
      }
    }, {
      key: "isComplete",
      get: function get() {
        return Boolean(this.masked.value) || this.isOptional;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          masked: this.masked.state,
          _isFilled: this._isFilled
        };
      },
      set: function set(state) {
        this.masked.state = state.masked;
        this._isFilled = state._isFilled;
      }
    }]);

    return PatternInputDefinition;
  }();

  var PatternFixedDefinition =
  /*#__PURE__*/
  function () {
    /** */

    /** */

    /** */

    /** */
    function PatternFixedDefinition(opts) {
      _classCallCheck(this, PatternFixedDefinition);

      _extends(this, opts);

      this._value = '';
    }

    _createClass(PatternFixedDefinition, [{
      key: "reset",
      value: function reset() {
        this._isRawInput = false;
        this._value = '';
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
        if (!this._value) this._isRawInput = false;
        return new ChangeDetails();
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this._value.length;

        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return minPos;

          case DIRECTION.NONE:
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
          default:
            return maxPos;
        }
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._value.length;
        var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || '';
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(str, flags) {
        var details = new ChangeDetails();
        if (this._value) return details;
        var appended = this.char === str[0];
        var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !flags.tail;
        if (isResolved) details.rawInserted = this.char;
        this._value = details.inserted = this.char;
        this._isRawInput = isResolved && (flags.raw || flags.input);
        return details;
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this._value) return details;
        this._value = details.inserted = this.char;
        return details;
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return {
          value: ''
        };
      }
    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        return this._appendChar(tail ? tail.value : '', {
          tail: true
        });
      }
    }, {
      key: "doCommit",
      value: function doCommit() {}
    }, {
      key: "value",
      get: function get() {
        return this._value;
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.isUnmasking ? this.value : '';
      }
    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this._value,
          _isRawInput: this._isRawInput
        };
      },
      set: function set(state) {
        _extends(this, state);
      }
    }]);

    return PatternFixedDefinition;
  }();

  var ChunksTailDetails =
  /*#__PURE__*/
  function () {
    function ChunksTailDetails(chunks) {
      _classCallCheck(this, ChunksTailDetails);

      this.chunks = chunks;
    }

    _createClass(ChunksTailDetails, [{
      key: "value",
      get: function get() {
        return this.chunks.map(function (c) {
          return c.value;
        }).join('');
      }
    }]);

    return ChunksTailDetails;
  }();

  /**
    Pattern mask
    @param {Object} opts
    @param {Object} opts.blocks
    @param {Object} opts.definitions
    @param {string} opts.placeholderChar
    @param {boolean} opts.lazy
  */
  var MaskedPattern =
  /*#__PURE__*/
  function (_Masked) {
    _inherits(MaskedPattern, _Masked);

    /** */

    /** */

    /** Single char for empty input */

    /** Show placeholder only when needed */
    function MaskedPattern() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, MaskedPattern);

      // TODO type $Shape<MaskedPatternOptions>={} does not work
      opts.definitions = _extends({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedPattern).call(this, _objectSpread({}, MaskedPattern.DEFAULTS, opts)));
    }
    /**
      @override
      @param {Object} opts
    */


    _createClass(MaskedPattern, [{
      key: "_update",
      value: function _update() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        opts.definitions = _extends({}, this.definitions, opts.definitions);

        _get(_getPrototypeOf(MaskedPattern.prototype), "_update", this).call(this, opts);

        this._rebuildMask();
      }
      /** */

    }, {
      key: "_rebuildMask",
      value: function _rebuildMask() {
        var _this = this;

        var defs = this.definitions;
        this._blocks = [];
        this._stops = [];
        this._maskedBlocks = {};
        var pattern = this.mask;
        if (!pattern || !defs) return;
        var unmaskingBlock = false;
        var optionalBlock = false;

        for (var i = 0; i < pattern.length; ++i) {
          if (this.blocks) {
            var _ret = function () {
              var p = pattern.slice(i);
              var bNames = Object.keys(_this.blocks).filter(function (bName) {
                return p.indexOf(bName) === 0;
              }); // order by key length

              bNames.sort(function (a, b) {
                return b.length - a.length;
              }); // use block name with max length

              var bName = bNames[0];

              if (bName) {
                var maskedBlock = createMask(_objectSpread({
                  parent: _this,
                  lazy: _this.lazy,
                  placeholderChar: _this.placeholderChar
                }, _this.blocks[bName]));

                if (maskedBlock) {
                  _this._blocks.push(maskedBlock); // store block index


                  if (!_this._maskedBlocks[bName]) _this._maskedBlocks[bName] = [];

                  _this._maskedBlocks[bName].push(_this._blocks.length - 1);
                }

                i += bName.length - 1;
                return "continue";
              }
            }();

            if (_ret === "continue") continue;
          }

          var char = pattern[i];

          var _isInput = char in defs;

          if (char === MaskedPattern.STOP_CHAR) {
            this._stops.push(this._blocks.length);

            continue;
          }

          if (char === '{' || char === '}') {
            unmaskingBlock = !unmaskingBlock;
            continue;
          }

          if (char === '[' || char === ']') {
            optionalBlock = !optionalBlock;
            continue;
          }

          if (char === MaskedPattern.ESCAPE_CHAR) {
            ++i;
            char = pattern[i];
            if (!char) break;
            _isInput = false;
          }

          var def = void 0;

          if (_isInput) {
            def = new PatternInputDefinition({
              parent: this,
              lazy: this.lazy,
              placeholderChar: this.placeholderChar,
              mask: defs[char],
              isOptional: optionalBlock
            });
          } else {
            def = new PatternFixedDefinition({
              char: char,
              isUnmasking: unmaskingBlock
            });
          }

          this._blocks.push(def);
        }
      }
      /**
        @override
      */

    }, {
      key: "_storeBeforeTailState",

      /**
        @override
      */
      value: function _storeBeforeTailState() {
        this._blocks.forEach(function (b) {
          // $FlowFixMe _storeBeforeTailState is not exist in PatternBlock
          if (typeof b._storeBeforeTailState === 'function') {
            b._storeBeforeTailState();
          }
        });

        _get(_getPrototypeOf(MaskedPattern.prototype), "_storeBeforeTailState", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "_restoreBeforeTailState",
      value: function _restoreBeforeTailState() {
        this._blocks.forEach(function (b) {
          // $FlowFixMe _restoreBeforeTailState is not exist in PatternBlock
          if (typeof b._restoreBeforeTailState === 'function') {
            b._restoreBeforeTailState();
          }
        });

        _get(_getPrototypeOf(MaskedPattern.prototype), "_restoreBeforeTailState", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "_resetBeforeTailState",
      value: function _resetBeforeTailState() {
        this._blocks.forEach(function (b) {
          // $FlowFixMe _resetBeforeTailState is not exist in PatternBlock
          if (typeof b._resetBeforeTailState === 'function') {
            b._resetBeforeTailState();
          }
        });

        _get(_getPrototypeOf(MaskedPattern.prototype), "_resetBeforeTailState", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "reset",
      value: function reset() {
        _get(_getPrototypeOf(MaskedPattern.prototype), "reset", this).call(this);

        this._blocks.forEach(function (b) {
          return b.reset();
        });
      }
      /**
        @override
      */

    }, {
      key: "doCommit",

      /**
        @override
      */
      value: function doCommit() {
        this._blocks.forEach(function (b) {
          return b.doCommit();
        });

        _get(_getPrototypeOf(MaskedPattern.prototype), "doCommit", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "appendTail",

      /**
        @override
      */
      value: function appendTail(tail) {
        var details = new ChangeDetails();

        if (tail) {
          details.aggregate(tail instanceof ChunksTailDetails ? this._appendTailChunks(tail.chunks) : _get(_getPrototypeOf(MaskedPattern.prototype), "appendTail", this).call(this, tail));
        }

        return details.aggregate(this._appendPlaceholder());
      }
      /**
        @override
      */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var blockData = this._mapPosToBlock(this.value.length);

        var details = new ChangeDetails();
        if (!blockData) return details;

        for (var bi = blockData.index;; ++bi) {
          var _block = this._blocks[bi];
          if (!_block) break;

          var blockDetails = _block._appendChar(ch, flags);

          var skip = blockDetails.skip;
          details.aggregate(blockDetails);
          if (skip || blockDetails.rawInserted) break; // go next char
        }

        return details;
      }
      /** Appends chunks splitted by stop chars */

    }, {
      key: "_appendTailChunks",
      value: function _appendTailChunks(chunks) {
        var details = new ChangeDetails();

        for (var ci = 0; ci < chunks.length && !details.skip; ++ci) {
          var chunk = chunks[ci];

          var lastBlock = this._mapPosToBlock(this.value.length);

          var chunkBlock = chunk instanceof ChunksTailDetails && chunk.index != null && (!lastBlock || lastBlock.index <= chunk.index) && this._blocks[chunk.index];

          if (chunkBlock) {
            // $FlowFixMe we already check index above
            details.aggregate(this._appendPlaceholder(chunk.index));
            var tailDetails = chunkBlock.appendTail(chunk);
            tailDetails.skip = false; // always ignore skip, it will be set on last

            details.aggregate(tailDetails);
            this._value += tailDetails.inserted; // get not inserted chars

            var remainChars = chunk.value.slice(tailDetails.rawInserted.length);
            if (remainChars) details.aggregate(this.append(remainChars, {
              tail: true
            }));
          } else {
            var _ref = chunk,
                stop = _ref.stop,
                value = _ref.value;
            if (stop != null && this._stops.indexOf(stop) >= 0) details.aggregate(this._appendPlaceholder(stop));
            details.aggregate(this.append(value, {
              tail: true
            }));
          }
        }
        return details;
      }
      /**
        @override
      */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        return new ChunksTailDetails(this._extractTailChunks(fromPos, toPos));
      }
      /**
        @override
      */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (fromPos === toPos) return '';
        var input = '';

        this._forEachBlocksInRange(fromPos, toPos, function (b, _, fromPos, toPos) {
          input += b.extractInput(fromPos, toPos, flags);
        });

        return input;
      }
      /** Extracts chunks from input splitted by stop chars */

    }, {
      key: "_extractTailChunks",
      value: function _extractTailChunks() {
        var _this2 = this;

        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        if (fromPos === toPos) return [];
        var chunks = [];
        var lastChunk;

        this._forEachBlocksInRange(fromPos, toPos, function (b, bi, fromPos, toPos) {
          var blockChunk = b.extractTail(fromPos, toPos);
          var nearestStop;

          for (var si = 0; si < _this2._stops.length; ++si) {
            var stop = _this2._stops[si];
            if (stop <= bi) nearestStop = stop;else break;
          }

          if (blockChunk instanceof ChunksTailDetails) {
            // TODO append to lastChunk with same index
            if (nearestStop == null) {
              // try append floating chunks to existed lastChunk
              var headFloatChunksCount = blockChunk.chunks.length;

              for (var ci = 0; ci < blockChunk.chunks.length; ++ci) {
                if (blockChunk.chunks[ci].stop != null) {
                  headFloatChunksCount = ci;
                  break;
                }
              }

              var headFloatChunks = blockChunk.chunks.splice(0, headFloatChunksCount);
              headFloatChunks.filter(function (chunk) {
                return chunk.value;
              }).forEach(function (chunk) {
                if (lastChunk) lastChunk.value += chunk.value; // will flat nested chunks
                else lastChunk = {
                    value: chunk.value
                  };
              });
            } // if block chunk has stops


            if (blockChunk.chunks.length) {
              if (lastChunk) chunks.push(lastChunk);
              blockChunk.index = nearestStop;
              chunks.push(blockChunk); // we cant append to ChunksTailDetails, so just reset lastChunk to force adding new

              lastChunk = null;
            }
          } else {
            if (nearestStop != null) {
              // on middle chunks consider stop flag and do not consider value
              // add block even if it is empty
              if (lastChunk) chunks.push(lastChunk);
              blockChunk.stop = nearestStop;
            } else if (lastChunk) {
              lastChunk.value += blockChunk.value;
              return;
            }

            lastChunk = blockChunk;
          }
        });

        if (lastChunk && lastChunk.value) chunks.push(lastChunk);
        return chunks;
      }
      /** Appends placeholder depending on laziness */

    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder(toBlockIndex) {
        var _this3 = this;

        var details = new ChangeDetails();
        if (this.lazy && toBlockIndex == null) return details;

        var startBlockData = this._mapPosToBlock(this.value.length);

        if (!startBlockData) return details;
        var startBlockIndex = startBlockData.index;
        var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;

        this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function (b) {
          if (typeof b._appendPlaceholder === 'function') {
            // $FlowFixMe `_blocks` may not be present
            var args = b._blocks != null ? [b._blocks.length] : [];

            var bDetails = b._appendPlaceholder.apply(b, args);

            _this3._value += bDetails.inserted;
            details.aggregate(bDetails);
          }
        });

        return details;
      }
      /** Finds block in pos */

    }, {
      key: "_mapPosToBlock",
      value: function _mapPosToBlock(pos) {
        var accVal = '';

        for (var bi = 0; bi < this._blocks.length; ++bi) {
          var _block2 = this._blocks[bi];
          var blockStartPos = accVal.length;
          accVal += _block2.value;

          if (pos <= accVal.length) {
            return {
              index: bi,
              offset: pos - blockStartPos
            };
          }
        }
      }
      /** */

    }, {
      key: "_blockStartPos",
      value: function _blockStartPos(blockIndex) {
        return this._blocks.slice(0, blockIndex).reduce(function (pos, b) {
          return pos += b.value.length;
        }, 0);
      }
      /** */

    }, {
      key: "_forEachBlocksInRange",
      value: function _forEachBlocksInRange(fromPos) {
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var fn = arguments.length > 2 ? arguments[2] : undefined;

        var fromBlock = this._mapPosToBlock(fromPos);

        if (fromBlock) {
          var toBlock = this._mapPosToBlock(toPos); // process first block


          var isSameBlock = toBlock && fromBlock.index === toBlock.index;
          var fromBlockRemoveBegin = fromBlock.offset;
          var fromBlockRemoveEnd = toBlock && isSameBlock ? toBlock.offset : undefined;
          fn(this._blocks[fromBlock.index], fromBlock.index, fromBlockRemoveBegin, fromBlockRemoveEnd);

          if (toBlock && !isSameBlock) {
            // process intermediate blocks
            for (var bi = fromBlock.index + 1; bi < toBlock.index; ++bi) {
              fn(this._blocks[bi], bi);
            } // process last block


            fn(this._blocks[toBlock.index], toBlock.index, 0, toBlock.offset);
          }
        }
      }
      /**
        @override
      */

    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        var removeDetails = _get(_getPrototypeOf(MaskedPattern.prototype), "remove", this).call(this, fromPos, toPos);

        this._forEachBlocksInRange(fromPos, toPos, function (b, _, bFromPos, bToPos) {
          removeDetails.aggregate(b.remove(bFromPos, bToPos));
        });

        return removeDetails;
      }
      /**
        @override
      */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DIRECTION.NONE;
        // TODO refactor - extract alignblock
        var beginBlockData = this._mapPosToBlock(cursorPos) || {
          index: 0,
          offset: 0
        };
        var beginBlockOffset = beginBlockData.offset,
            beginBlockIndex = beginBlockData.index;
        var beginBlock = this._blocks[beginBlockIndex];
        if (!beginBlock) return cursorPos;
        var beginBlockCursorPos = beginBlockOffset; // if position inside block - try to adjust it

        if (beginBlockCursorPos !== 0 && beginBlockCursorPos < beginBlock.value.length) {
          beginBlockCursorPos = beginBlock.nearestInputPos(beginBlockOffset, forceDirection(direction));
        }

        var cursorAtRight = beginBlockCursorPos === beginBlock.value.length;
        var cursorAtLeft = beginBlockCursorPos === 0; //  cursor is INSIDE first block (not at bounds)

        if (!cursorAtLeft && !cursorAtRight) return this._blockStartPos(beginBlockIndex) + beginBlockCursorPos;
        var searchBlockIndex = cursorAtRight ? beginBlockIndex + 1 : beginBlockIndex;

        if (direction === DIRECTION.NONE) {
          // NONE direction used to calculate start input position if no chars were removed
          // FOR NONE:
          // -
          // input|any
          // ->
          //  any|input
          // <-
          //  filled-input|any
          // check if first block at left is input
          if (searchBlockIndex > 0) {
            var blockIndexAtLeft = searchBlockIndex - 1;
            var blockAtLeft = this._blocks[blockIndexAtLeft];
            var blockInputPos = blockAtLeft.nearestInputPos(0, DIRECTION.NONE); // is input

            if (!blockAtLeft.value.length || blockInputPos !== blockAtLeft.value.length) {
              return this._blockStartPos(searchBlockIndex);
            }
          } // ->


          var firstInputAtRight = searchBlockIndex;

          for (var bi = firstInputAtRight; bi < this._blocks.length; ++bi) {
            var _block3 = this._blocks[bi];

            var _blockInputPos = _block3.nearestInputPos(0, DIRECTION.NONE);

            if (_blockInputPos !== _block3.value.length) {
              return this._blockStartPos(bi) + _blockInputPos;
            }
          }

          return this.value.length;
        }

        if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
          // -
          //  any|filled-input
          // <-
          //  any|first not empty is not-len-aligned
          //  not-0-aligned|any
          // ->
          //  any|not-len-aligned or end
          // check if first block at right is filled input
          var firstFilledBlockIndexAtRight;

          for (var _bi = searchBlockIndex; _bi < this._blocks.length; ++_bi) {
            if (this._blocks[_bi].value) {
              firstFilledBlockIndexAtRight = _bi;
              break;
            }
          }

          if (firstFilledBlockIndexAtRight != null) {
            var filledBlock = this._blocks[firstFilledBlockIndexAtRight];

            var _blockInputPos2 = filledBlock.nearestInputPos(0, DIRECTION.RIGHT);

            if (_blockInputPos2 === 0 && filledBlock.unmaskedValue.length) {
              // filled block is input
              return this._blockStartPos(firstFilledBlockIndexAtRight) + _blockInputPos2;
            }
          } // <-
          // find this vars


          var firstFilledInputBlockIndex = -1;
          var firstEmptyInputBlockIndex; // TODO consider nested empty inputs

          for (var _bi2 = searchBlockIndex - 1; _bi2 >= 0; --_bi2) {
            var _block4 = this._blocks[_bi2];

            var _blockInputPos3 = _block4.nearestInputPos(_block4.value.length, DIRECTION.FORCE_LEFT);

            if (firstEmptyInputBlockIndex == null && (!_block4.value || _blockInputPos3 !== 0)) {
              firstEmptyInputBlockIndex = _bi2;
            }

            if (_blockInputPos3 !== 0) {
              if (_blockInputPos3 !== _block4.value.length) {
                // aligned inside block - return immediately
                return this._blockStartPos(_bi2) + _blockInputPos3;
              } else {
                // found filled
                firstFilledInputBlockIndex = _bi2;
                break;
              }
            }
          }

          if (direction === DIRECTION.LEFT) {
            // try find first empty input before start searching position only when not forced
            for (var _bi3 = firstFilledInputBlockIndex + 1; _bi3 <= Math.min(searchBlockIndex, this._blocks.length - 1); ++_bi3) {
              var _block5 = this._blocks[_bi3];

              var _blockInputPos4 = _block5.nearestInputPos(0, DIRECTION.NONE);

              var blockAlignedPos = this._blockStartPos(_bi3) + _blockInputPos4; // if block is empty and last or not lazy input


              if ((!_block5.value.length && blockAlignedPos === this.value.length || _blockInputPos4 !== _block5.value.length) && blockAlignedPos <= cursorPos) {
                return blockAlignedPos;
              }
            }
          } // process overflow


          if (firstFilledInputBlockIndex >= 0) {
            return this._blockStartPos(firstFilledInputBlockIndex) + this._blocks[firstFilledInputBlockIndex].value.length;
          } // for lazy if has aligned left inside fixed and has came to the start - use start position


          if (direction === DIRECTION.FORCE_LEFT || this.lazy && !this.extractInput() && !isInput(this._blocks[searchBlockIndex])) {
            return 0;
          }

          if (firstEmptyInputBlockIndex != null) {
            return this._blockStartPos(firstEmptyInputBlockIndex);
          } // find first input


          for (var _bi4 = searchBlockIndex; _bi4 < this._blocks.length; ++_bi4) {
            var _block6 = this._blocks[_bi4];

            var _blockInputPos5 = _block6.nearestInputPos(0, DIRECTION.NONE); // is input


            if (!_block6.value.length || _blockInputPos5 !== _block6.value.length) {
              return this._blockStartPos(_bi4) + _blockInputPos5;
            }
          }

          return 0;
        }

        if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
          // ->
          //  any|not-len-aligned and filled
          //  any|not-len-aligned
          // <-
          var firstInputBlockAlignedIndex;
          var firstInputBlockAlignedPos;

          for (var _bi5 = searchBlockIndex; _bi5 < this._blocks.length; ++_bi5) {
            var _block7 = this._blocks[_bi5];

            var _blockInputPos6 = _block7.nearestInputPos(0, DIRECTION.NONE);

            if (_blockInputPos6 !== _block7.value.length) {
              firstInputBlockAlignedPos = this._blockStartPos(_bi5) + _blockInputPos6;
              firstInputBlockAlignedIndex = _bi5;
              break;
            }
          }

          if (firstInputBlockAlignedIndex != null && firstInputBlockAlignedPos != null) {
            for (var _bi6 = firstInputBlockAlignedIndex; _bi6 < this._blocks.length; ++_bi6) {
              var _block8 = this._blocks[_bi6];

              var _blockInputPos7 = _block8.nearestInputPos(0, DIRECTION.FORCE_RIGHT);

              if (_blockInputPos7 !== _block8.value.length) {
                return this._blockStartPos(_bi6) + _blockInputPos7;
              }
            }

            return direction === DIRECTION.FORCE_RIGHT ? this.value.length : firstInputBlockAlignedPos;
          }

          for (var _bi7 = Math.min(searchBlockIndex, this._blocks.length - 1); _bi7 >= 0; --_bi7) {
            var _block9 = this._blocks[_bi7];

            var _blockInputPos8 = _block9.nearestInputPos(_block9.value.length, DIRECTION.LEFT);

            if (_blockInputPos8 !== 0) {
              var alignedPos = this._blockStartPos(_bi7) + _blockInputPos8;

              if (alignedPos >= cursorPos) return alignedPos;
              break;
            }
          }
        }

        return cursorPos;
      }
      /** Get block by name */

    }, {
      key: "maskedBlock",
      value: function maskedBlock(name) {
        return this.maskedBlocks(name)[0];
      }
      /** Get all blocks by name */

    }, {
      key: "maskedBlocks",
      value: function maskedBlocks(name) {
        var _this4 = this;

        var indices = this._maskedBlocks[name];
        if (!indices) return [];
        return indices.map(function (gi) {
          return _this4._blocks[gi];
        });
      }
    }, {
      key: "state",
      get: function get$$1() {
        return _objectSpread({}, _get(_getPrototypeOf(MaskedPattern.prototype), "state", this), {
          _blocks: this._blocks.map(function (b) {
            return b.state;
          })
        });
      },
      set: function set$$1(state) {
        var _blocks = state._blocks,
            maskedState = _objectWithoutProperties(state, ["_blocks"]);

        this._blocks.forEach(function (b, bi) {
          return b.state = _blocks[bi];
        });

        _set(_getPrototypeOf(MaskedPattern.prototype), "state", maskedState, this, true);
      }
    }, {
      key: "isComplete",
      get: function get$$1() {
        return this._blocks.every(function (b) {
          return b.isComplete;
        });
      }
    }, {
      key: "unmaskedValue",
      get: function get$$1() {
        return this._blocks.reduce(function (str, b) {
          return str += b.unmaskedValue;
        }, '');
      },
      set: function set$$1(unmaskedValue) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "unmaskedValue", unmaskedValue, this, true);
      }
      /**
        @override
      */

    }, {
      key: "value",
      get: function get$$1() {
        // TODO return _value when not in change?
        return this._blocks.reduce(function (str, b) {
          return str += b.value;
        }, '');
      },
      set: function set$$1(value) {
        _set(_getPrototypeOf(MaskedPattern.prototype), "value", value, this, true);
      }
    }]);

    return MaskedPattern;
  }(Masked);
  MaskedPattern.DEFAULTS = {
    lazy: true,
    placeholderChar: '_'
  };
  MaskedPattern.STOP_CHAR = '`';
  MaskedPattern.ESCAPE_CHAR = '\\';
  MaskedPattern.InputDefinition = PatternInputDefinition;
  MaskedPattern.FixedDefinition = PatternFixedDefinition;

  function isInput(block) {
    if (!block) return false;
    var value = block.value;
    return !value || block.nearestInputPos(0, DIRECTION.NONE) !== value.length;
  }

  /** Pattern which accepts ranges */

  var MaskedRange =
  /*#__PURE__*/
  function (_MaskedPattern) {
    _inherits(MaskedRange, _MaskedPattern);

    function MaskedRange() {
      _classCallCheck(this, MaskedRange);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedRange).apply(this, arguments));
    }

    _createClass(MaskedRange, [{
      key: "_update",

      /**
        @override
      */
      value: function _update(opts) {
        // TODO type
        opts = _objectSpread({
          to: this.to || 0,
          from: this.from || 0
        }, opts);
        var maxLength = String(opts.to).length;
        if (opts.maxLength != null) maxLength = Math.max(maxLength, opts.maxLength);
        opts.maxLength = maxLength;
        var toStr = String(opts.to).padStart(maxLength, '0');
        var fromStr = String(opts.from).padStart(maxLength, '0');
        var sameCharsCount = 0;

        while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
          ++sameCharsCount;
        }

        opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, '\\0') + '0'.repeat(maxLength - sameCharsCount);

        _get(_getPrototypeOf(MaskedRange.prototype), "_update", this).call(this, opts);
      }
      /**
        @override
      */

    }, {
      key: "doValidate",

      /**
        @override
      */
      value: function doValidate() {
        var _get2;

        var str = this.value;
        var minstr = '';
        var maxstr = '';

        var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [],
            _ref2 = _slicedToArray(_ref, 3),
            placeholder = _ref2[1],
            num = _ref2[2];

        if (num) {
          minstr = '0'.repeat(placeholder.length) + num;
          maxstr = '9'.repeat(placeholder.length) + num;
        }

        var firstNonZero = str.search(/[^0]/);
        if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
        minstr = minstr.padEnd(this.maxLength, '0');
        maxstr = maxstr.padEnd(this.maxLength, '9');

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
      }
    }, {
      key: "_matchFrom",

      /**
        Optionally sets max length of pattern.
        Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
      */

      /** Min bound */

      /** Max bound */
      get: function get$$1() {
        return this.maxLength - String(this.from).length;
      }
    }, {
      key: "isComplete",
      get: function get$$1() {
        return _get(_getPrototypeOf(MaskedRange.prototype), "isComplete", this) && Boolean(this.value);
      }
    }]);

    return MaskedRange;
  }(MaskedPattern);

  /** Date mask */

  var MaskedDate =
  /*#__PURE__*/
  function (_MaskedPattern) {
    _inherits(MaskedDate, _MaskedPattern);

    /** Parse string to Date */

    /** Format Date to string */

    /** Pattern mask for date according to {@link MaskedDate#format} */

    /** Start date */

    /** End date */

    /**
      @param {Object} opts
    */
    function MaskedDate(opts) {
      _classCallCheck(this, MaskedDate);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedDate).call(this, _objectSpread({}, MaskedDate.DEFAULTS, opts)));
    }
    /**
      @override
    */


    _createClass(MaskedDate, [{
      key: "_update",
      value: function _update(opts) {
        if (opts.mask === Date) delete opts.mask;

        if (opts.pattern) {
          opts.mask = opts.pattern;
          delete opts.pattern;
        }

        var blocks = opts.blocks;
        opts.blocks = _extends({}, MaskedDate.GET_DEFAULT_BLOCKS()); // adjust year block

        if (opts.min) opts.blocks.Y.from = opts.min.getFullYear();
        if (opts.max) opts.blocks.Y.to = opts.max.getFullYear();

        if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
          opts.blocks.m.from = opts.min.getMonth() + 1;
          opts.blocks.m.to = opts.max.getMonth() + 1;

          if (opts.blocks.m.from === opts.blocks.m.to) {
            opts.blocks.d.from = opts.min.getDate();
            opts.blocks.d.to = opts.max.getDate();
          }
        }

        _extends(opts.blocks, blocks);

        _get(_getPrototypeOf(MaskedDate.prototype), "_update", this).call(this, opts);
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2;

        var date = this.date;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_get2 = _get(_getPrototypeOf(MaskedDate.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
      }
      /** Checks if date is exists */

    }, {
      key: "isDateExist",
      value: function isDateExist(str) {
        return this.format(this.parse(str)) === str;
      }
      /** Parsed Date */

    }, {
      key: "date",
      get: function get$$1() {
        return this.isComplete ? this.parse(this.value) : null;
      },
      set: function set(date) {
        this.value = this.format(date);
      }
      /**
        @override
      */

    }, {
      key: "typedValue",
      get: function get$$1() {
        return this.date;
      },
      set: function set(value) {
        this.date = value;
      }
    }]);

    return MaskedDate;
  }(MaskedPattern);
  MaskedDate.DEFAULTS = {
    pattern: 'd{.}`m{.}`Y',
    format: function format(date) {
      var day = String(date.getDate()).padStart(2, '0');
      var month = String(date.getMonth() + 1).padStart(2, '0');
      var year = date.getFullYear();
      return [day, month, year].join('.');
    },
    parse: function parse(str) {
      var _str$split = str.split('.'),
          _str$split2 = _slicedToArray(_str$split, 3),
          day = _str$split2[0],
          month = _str$split2[1],
          year = _str$split2[2];

      return new Date(year, month - 1, day);
    }
  };

  MaskedDate.GET_DEFAULT_BLOCKS = function () {
    return {
      d: {
        mask: MaskedRange,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: MaskedRange,
        from: 1900,
        to: 9999
      }
    };
  };

  /**
    Generic element API to use with mask
    @interface
  */
  var MaskElement =
  /*#__PURE__*/
  function () {
    function MaskElement() {
      _classCallCheck(this, MaskElement);
    }

    _createClass(MaskElement, [{
      key: "select",

      /** Safely sets element selection */
      value: function select(start, end) {
        if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;

        try {
          this._unsafeSelect(start, end);
        } catch (e) {}
      }
      /** Should be overriden in subclasses */

    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {}
      /** Should be overriden in subclasses */

    }, {
      key: "bindEvents",

      /** Should be overriden in subclasses */
      value: function bindEvents(handlers) {}
      /** Should be overriden in subclasses */

    }, {
      key: "unbindEvents",
      value: function unbindEvents() {}
    }, {
      key: "selectionStart",

      /** */

      /** */

      /** */

      /** Safely returns selection start */
      get: function get() {
        var start;

        try {
          start = this._unsafeSelectionStart;
        } catch (e) {}

        return start != null ? start : this.value.length;
      }
      /** Safely returns selection end */

    }, {
      key: "selectionEnd",
      get: function get() {
        var end;

        try {
          end = this._unsafeSelectionEnd;
        } catch (e) {}

        return end != null ? end : this.value.length;
      }
    }, {
      key: "isActive",
      get: function get() {
        return false;
      }
    }]);

    return MaskElement;
  }();

  /** Bridge between HTMLElement and {@link Masked} */

  var HTMLMaskElement =
  /*#__PURE__*/
  function (_MaskElement) {
    _inherits(HTMLMaskElement, _MaskElement);

    /** Mapping between HTMLElement events and mask internal events */

    /** HTMLElement to use mask on */

    /**
      @param {HTMLInputElement|HTMLTextAreaElement} input
    */
    function HTMLMaskElement(input) {
      var _this;

      _classCallCheck(this, HTMLMaskElement);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(HTMLMaskElement).call(this));
      _this.input = input;
      _this._handlers = {};
      return _this;
    }
    /**
      Is element in focus
      @readonly
    */


    _createClass(HTMLMaskElement, [{
      key: "_unsafeSelect",

      /**
        Sets HTMLElement selection
        @override
      */
      value: function _unsafeSelect(start, end) {
        this.input.setSelectionRange(start, end);
      }
      /**
        HTMLElement value
        @override
      */

    }, {
      key: "bindEvents",

      /**
        Binds HTMLElement events to mask internal events
        @override
      */
      value: function bindEvents(handlers) {
        var _this2 = this;

        Object.keys(handlers).forEach(function (event) {
          return _this2._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]);
        });
      }
      /**
        Unbinds HTMLElement events to mask internal events
        @override
      */

    }, {
      key: "unbindEvents",
      value: function unbindEvents() {
        var _this3 = this;

        Object.keys(this._handlers).forEach(function (event) {
          return _this3._toggleEventHandler(event);
        });
      }
      /** */

    }, {
      key: "_toggleEventHandler",
      value: function _toggleEventHandler(event, handler) {
        if (this._handlers[event]) {
          this.input.removeEventListener(event, this._handlers[event]);
          delete this._handlers[event];
        }

        if (handler) {
          this.input.addEventListener(event, handler);
          this._handlers[event] = handler;
        }
      }
    }, {
      key: "isActive",
      get: function get() {
        return this.input === document.activeElement;
      }
      /**
        Returns HTMLElement selection start
        @override
      */

    }, {
      key: "_unsafeSelectionStart",
      get: function get() {
        return this.input.selectionStart;
      }
      /**
        Returns HTMLElement selection end
        @override
      */

    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        return this.input.selectionEnd;
      }
    }, {
      key: "value",
      get: function get() {
        return this.input.value;
      },
      set: function set(value) {
        this.input.value = value;
      }
    }]);

    return HTMLMaskElement;
  }(MaskElement);
  HTMLMaskElement.EVENTS_MAP = {
    selectionChange: 'keydown',
    input: 'input',
    drop: 'drop',
    click: 'click',
    focus: 'focus',
    commit: 'change'
  };

  /** Listens to element events and controls changes between element and {@link Masked} */

  var InputMask =
  /*#__PURE__*/
  function () {
    /**
      View element
      @readonly
    */

    /**
      Internal {@link Masked} model
      @readonly
    */

    /**
      @param {MaskElement|HTMLInputElement|HTMLTextAreaElement} el
      @param {Object} opts
    */
    function InputMask(el, opts) {
      _classCallCheck(this, InputMask);

      this.el = el instanceof MaskElement ? el : new HTMLMaskElement(el);
      this.masked = createMask(opts);
      this._listeners = {};
      this._value = '';
      this._unmaskedValue = '';
      this._saveSelection = this._saveSelection.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onChange = this._onChange.bind(this);
      this._onDrop = this._onDrop.bind(this);
      this.alignCursor = this.alignCursor.bind(this);
      this.alignCursorFriendly = this.alignCursorFriendly.bind(this);

      this._bindEvents(); // refresh


      this.updateValue();

      this._onChange();
    }
    /** Read or update mask */


    _createClass(InputMask, [{
      key: "_bindEvents",

      /**
        Starts listening to element events
        @protected
      */
      value: function _bindEvents() {
        this.el.bindEvents({
          selectionChange: this._saveSelection,
          input: this._onInput,
          drop: this._onDrop,
          click: this.alignCursorFriendly,
          focus: this.alignCursorFriendly,
          commit: this._onChange
        });
      }
      /**
        Stops listening to element events
        @protected
       */

    }, {
      key: "_unbindEvents",
      value: function _unbindEvents() {
        this.el.unbindEvents();
      }
      /**
        Fires custom event
        @protected
       */

    }, {
      key: "_fireEvent",
      value: function _fireEvent(ev) {
        var listeners = this._listeners[ev];
        if (!listeners) return;
        listeners.forEach(function (l) {
          return l();
        });
      }
      /**
        Current selection start
        @readonly
      */

    }, {
      key: "_saveSelection",

      /**
        Stores current selection
        @protected
      */
      value: function _saveSelection()
      /* ev */
      {
        if (this.value !== this.el.value) {
          console.warn('Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.'); // eslint-disable-line no-console
        }

        this._selection = {
          start: this.selectionStart,
          end: this.cursorPos
        };
      }
      /** Syncronizes model value from view */

    }, {
      key: "updateValue",
      value: function updateValue() {
        this.masked.value = this.el.value;
        this._value = this.masked.value;
      }
      /** Syncronizes view from model value, fires change events */

    }, {
      key: "updateControl",
      value: function updateControl() {
        var newUnmaskedValue = this.masked.unmaskedValue;
        var newValue = this.masked.value;
        var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
        this._unmaskedValue = newUnmaskedValue;
        this._value = newValue;
        if (this.el.value !== newValue) this.el.value = newValue;
        if (isChanged) this._fireChangeEvents();
      }
      /** Updates options with deep equal check, recreates @{link Masked} model if mask type changes */

    }, {
      key: "updateOptions",
      value: function updateOptions(opts) {
        if (objectIncludes(this.masked, opts)) return;

        var mask = opts.mask,
            restOpts = _objectWithoutProperties(opts, ["mask"]);

        this.mask = mask;
        this.masked.updateOptions(restOpts);
        this.updateControl();
      }
      /** Updates cursor */

    }, {
      key: "updateCursor",
      value: function updateCursor(cursorPos) {
        if (cursorPos == null) return;
        this.cursorPos = cursorPos; // also queue change cursor for mobile browsers

        this._delayUpdateCursor(cursorPos);
      }
      /**
        Delays cursor update to support mobile browsers
        @private
      */

    }, {
      key: "_delayUpdateCursor",
      value: function _delayUpdateCursor(cursorPos) {
        var _this = this;

        this._abortUpdateCursor();

        this._changingCursorPos = cursorPos;
        this._cursorChanging = setTimeout(function () {
          if (!_this.el) return; // if was destroyed

          _this.cursorPos = _this._changingCursorPos;

          _this._abortUpdateCursor();
        }, 10);
      }
      /**
        Fires custom events
        @protected
      */

    }, {
      key: "_fireChangeEvents",
      value: function _fireChangeEvents() {
        this._fireEvent('accept');

        if (this.masked.isComplete) this._fireEvent('complete');
      }
      /**
        Aborts delayed cursor update
        @private
      */

    }, {
      key: "_abortUpdateCursor",
      value: function _abortUpdateCursor() {
        if (this._cursorChanging) {
          clearTimeout(this._cursorChanging);
          delete this._cursorChanging;
        }
      }
      /** Aligns cursor to nearest available position */

    }, {
      key: "alignCursor",
      value: function alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT);
      }
      /** Aligns cursor only if selection is empty */

    }, {
      key: "alignCursorFriendly",
      value: function alignCursorFriendly() {
        if (this.selectionStart !== this.cursorPos) return;
        this.alignCursor();
      }
      /** Adds listener on custom event */

    }, {
      key: "on",
      value: function on(ev, handler) {
        if (!this._listeners[ev]) this._listeners[ev] = [];

        this._listeners[ev].push(handler);

        return this;
      }
      /** Removes custom event listener */

    }, {
      key: "off",
      value: function off(ev, handler) {
        if (!this._listeners[ev]) return;

        if (!handler) {
          delete this._listeners[ev];
          return;
        }

        var hIndex = this._listeners[ev].indexOf(handler);

        if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
        return this;
      }
      /** Handles view input event */

    }, {
      key: "_onInput",
      value: function _onInput() {
        this._abortUpdateCursor(); // fix strange IE behavior


        if (!this._selection) return this.updateValue();
        var details = new ActionDetails( // new state
        this.el.value, this.cursorPos, // old state
        this.value, this._selection);
        var oldRawValue = this.masked.rawInputValue;
        var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset; // force align in remove direction only if no input chars were removed
        // otherwise we still need to align with NONE (to get out from fixed symbols for instance)

        var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
        var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
        this.updateControl();
        this.updateCursor(cursorPos);
      }
      /** Handles view change event and commits model value */

    }, {
      key: "_onChange",
      value: function _onChange() {
        if (this.value !== this.el.value) {
          this.updateValue();
        }

        this.masked.doCommit();
        this.updateControl();
      }
      /** Handles view drop event, prevents by default */

    }, {
      key: "_onDrop",
      value: function _onDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      /** Unbind view events and removes element reference */

    }, {
      key: "destroy",
      value: function destroy() {
        this._unbindEvents(); // $FlowFixMe why not do so?


        this._listeners.length = 0;
        delete this.el;
      }
    }, {
      key: "mask",
      get: function get() {
        return this.masked.mask;
      },
      set: function set(mask) {
        if (mask == null || mask === this.masked.mask || mask === Date && this.masked instanceof MaskedDate) return;

        if (this.masked.constructor === maskedClass(mask)) {
          this.masked.updateOptions({
            mask: mask
          });
          return;
        }

        var masked = createMask({
          mask: mask
        });
        masked.unmaskedValue = this.masked.unmaskedValue;
        this.masked = masked;
      }
      /** Raw value */

    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set(str) {
        this.masked.value = str;
        this.updateControl();
        this.alignCursor();
      }
      /** Unmasked value */

    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._unmaskedValue;
      },
      set: function set(str) {
        this.masked.unmaskedValue = str;
        this.updateControl();
        this.alignCursor();
      }
      /** Typed unmasked value */

    }, {
      key: "typedValue",
      get: function get() {
        return this.masked.typedValue;
      },
      set: function set(val) {
        this.masked.typedValue = val;
        this.updateControl();
        this.alignCursor();
      }
    }, {
      key: "selectionStart",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
      }
      /** Current cursor position */

    }, {
      key: "cursorPos",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
      },
      set: function set(pos) {
        if (!this.el.isActive) return;
        this.el.select(pos, pos);

        this._saveSelection();
      }
    }]);

    return InputMask;
  }();

  /** Pattern which validates enum values */

  var MaskedEnum =
  /*#__PURE__*/
  function (_MaskedPattern) {
    _inherits(MaskedEnum, _MaskedPattern);

    function MaskedEnum() {
      _classCallCheck(this, MaskedEnum);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedEnum).apply(this, arguments));
    }

    _createClass(MaskedEnum, [{
      key: "_update",

      /**
        @override
        @param {Object} opts
      */
      value: function _update(opts) {
        // TODO type
        if (opts.enum) opts.mask = '*'.repeat(opts.enum[0].length);

        _get(_getPrototypeOf(MaskedEnum.prototype), "_update", this).call(this, opts);
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this = this,
            _get2;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return this.enum.some(function (e) {
          return e.indexOf(_this.unmaskedValue) >= 0;
        }) && (_get2 = _get(_getPrototypeOf(MaskedEnum.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
      }
    }]);

    return MaskedEnum;
  }(MaskedPattern);

  /**
    Number mask
    @param {Object} opts
    @param {string} opts.radix - Single char
    @param {string} opts.thousandsSeparator - Single char
    @param {Array<string>} opts.mapToRadix - Array of single chars
    @param {number} opts.min
    @param {number} opts.max
    @param {number} opts.scale - Digits after point
    @param {boolean} opts.signed - Allow negative
    @param {boolean} opts.normalizeZeros - Flag to remove leading and trailing zeros in the end of editing
    @param {boolean} opts.padFractionalZeros - Flag to pad trailing zeros after point in the end of editing
  */
  var MaskedNumber =
  /*#__PURE__*/
  function (_Masked) {
    _inherits(MaskedNumber, _Masked);

    /** Single char */

    /** Single char */

    /** Array of single chars */

    /** */

    /** */

    /** Digits after point */

    /** */

    /** Flag to remove leading and trailing zeros in the end of editing */

    /** Flag to pad trailing zeros after point in the end of editing */
    function MaskedNumber(opts) {
      _classCallCheck(this, MaskedNumber);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedNumber).call(this, _objectSpread({}, MaskedNumber.DEFAULTS, opts)));
    }
    /**
      @override
    */


    _createClass(MaskedNumber, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedNumber.prototype), "_update", this).call(this, opts);

        this._updateRegExps();
      }
      /** */

    }, {
      key: "_updateRegExps",
      value: function _updateRegExps() {
        // use different regexp to process user input (more strict, input suffix) and tail shifting
        var start = '^';
        var midInput = '';
        var mid = '';

        if (this.allowNegative) {
          midInput += '([+|\\-]?|([+|\\-]?(0|([1-9]+\\d*))))';
          mid += '[+|\\-]?';
        } else {
          midInput += '(0|([1-9]+\\d*))';
        }

        mid += '\\d*';
        var end = (this.scale ? '(' + escapeRegExp(this.radix) + '\\d{0,' + this.scale + '})?' : '') + '$';
        this._numberRegExpInput = new RegExp(start + midInput + end);
        this._numberRegExp = new RegExp(start + mid + end);
        this._mapToRadixRegExp = new RegExp('[' + this.mapToRadix.map(escapeRegExp).join('') + ']', 'g');
        this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), 'g');
      }
      /**
        @override
      */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;

        var tail = _get(_getPrototypeOf(MaskedNumber.prototype), "extractTail", this).call(this, fromPos, toPos); // $FlowFixMe no ideas


        return _objectSpread({}, tail, {
          value: this._removeThousandsSeparators(tail.value)
        });
      }
      /** */

    }, {
      key: "_removeThousandsSeparators",
      value: function _removeThousandsSeparators(value) {
        return value.replace(this._thousandsSeparatorRegExp, '');
      }
      /** */

    }, {
      key: "_insertThousandsSeparators",
      value: function _insertThousandsSeparators(value) {
        // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        var parts = value.split(this.radix);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return parts.join(this.radix);
      }
      /**
        @override
      */

    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var _get2;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return (_get2 = _get(_getPrototypeOf(MaskedNumber.prototype), "doPrepare", this)).call.apply(_get2, [this, this._removeThousandsSeparators(str.replace(this._mapToRadixRegExp, this.radix))].concat(args));
      }
      /** */

    }, {
      key: "_separatorsCount",
      value: function _separatorsCount() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._value;

        var rawValueLength = this._removeThousandsSeparators(value).length;

        var valueWithSeparatorsLength = rawValueLength;

        for (var pos = 0; pos <= valueWithSeparatorsLength; ++pos) {
          if (this._value[pos] === this.thousandsSeparator) ++valueWithSeparatorsLength;
        }

        return valueWithSeparatorsLength - rawValueLength;
      }
      /**
        @override
      */

    }, {
      key: "extractInput",
      value: function extractInput() {
        var _get3;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return this._removeThousandsSeparators((_get3 = _get(_getPrototypeOf(MaskedNumber.prototype), "extractInput", this)).call.apply(_get3, [this].concat(args)));
      }
      /**
        @override
      */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!this.thousandsSeparator) return _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

        var previousBeforeTailSeparatorsCount = this._separatorsCount(flags.tail && this._beforeTailState ? this._beforeTailState._value : this._value);

        this._value = this._removeThousandsSeparators(this.value);

        var appendDetails = _get(_getPrototypeOf(MaskedNumber.prototype), "_appendCharRaw", this).call(this, ch, flags);

        this._value = this._insertThousandsSeparators(this._value);

        var beforeTailSeparatorsCount = this._separatorsCount(flags.tail && this._beforeTailState ? this._beforeTailState._value : this._value);

        appendDetails.tailShift += beforeTailSeparatorsCount - previousBeforeTailSeparatorsCount;
        return appendDetails;
      }
      /**
        @override
      */

    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.value.length;
        var valueBeforePos = this.value.slice(0, fromPos);
        var valueAfterPos = this.value.slice(toPos);

        var previousBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos);

        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));

        var beforeTailSeparatorsCount = this._separatorsCount(valueBeforePos);

        return new ChangeDetails({
          tailShift: beforeTailSeparatorsCount - previousBeforeTailSeparatorsCount
        });
      }
      /**
        @override
      */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos, direction) {
        if (!direction || direction === DIRECTION.LEFT) return cursorPos;
        var nextPos = indexInDirection(cursorPos, direction);
        if (this.value[nextPos] === this.thousandsSeparator) cursorPos = posInDirection(cursorPos, direction);
        return cursorPos;
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp; // validate as string

        var valid = regexp.test(this._removeThousandsSeparators(this.value));

        if (valid) {
          // validate as number
          var number = this.number;
          valid = valid && !isNaN(number) && ( // check min bound for negative values
          this.min == null || this.min >= 0 || this.min <= this.number) && ( // check max bound for positive values
          this.max == null || this.max <= 0 || this.number <= this.max);
        }

        return valid && _get(_getPrototypeOf(MaskedNumber.prototype), "doValidate", this).call(this, flags);
      }
      /**
        @override
      */

    }, {
      key: "doCommit",
      value: function doCommit() {
        var number = this.number;
        var validnum = number; // check bounds

        if (this.min != null) validnum = Math.max(validnum, this.min);
        if (this.max != null) validnum = Math.min(validnum, this.max);
        if (validnum !== number) this.unmaskedValue = String(validnum);
        var formatted = this.value;
        if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
        if (this.padFractionalZeros) formatted = this._padFractionalZeros(formatted);
        this._value = this._insertThousandsSeparators(formatted);

        _get(_getPrototypeOf(MaskedNumber.prototype), "doCommit", this).call(this);
      }
      /** */

    }, {
      key: "_normalizeZeros",
      value: function _normalizeZeros(value) {
        var parts = this._removeThousandsSeparators(value).split(this.radix); // remove leading zeros


        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function (match, sign, zeros, num) {
          return sign + num;
        }); // add leading zero

        if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + '0';

        if (parts.length > 1) {
          parts[1] = parts[1].replace(/0*$/, ''); // remove trailing zeros

          if (!parts[1].length) parts.length = 1; // remove fractional
        }

        return this._insertThousandsSeparators(parts.join(this.radix));
      }
      /** */

    }, {
      key: "_padFractionalZeros",
      value: function _padFractionalZeros(value) {
        if (!value) return value;
        var parts = value.split(this.radix);
        if (parts.length < 2) parts.push('');
        parts[1] = parts[1].padEnd(this.scale, '0');
        return parts.join(this.radix);
      }
      /**
        @override
      */

    }, {
      key: "unmaskedValue",
      get: function get$$1() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, '.');
      },
      set: function set$$1(unmaskedValue) {
        _set(_getPrototypeOf(MaskedNumber.prototype), "unmaskedValue", unmaskedValue.replace('.', this.radix), this, true);
      }
      /** Parsed Number */

    }, {
      key: "number",
      get: function get$$1() {
        return Number(this.unmaskedValue);
      },
      set: function set$$1(number) {
        this.unmaskedValue = String(number);
      }
      /**
        @override
      */

    }, {
      key: "typedValue",
      get: function get$$1() {
        return this.number;
      },
      set: function set$$1(value) {
        this.number = value;
      }
      /**
        Is negative allowed
        @readonly
      */

    }, {
      key: "allowNegative",
      get: function get$$1() {
        return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
      }
    }]);

    return MaskedNumber;
  }(Masked);
  MaskedNumber.DEFAULTS = {
    radix: ',',
    thousandsSeparator: '',
    mapToRadix: ['.'],
    scale: 2,
    signed: false,
    normalizeZeros: true,
    padFractionalZeros: false
  };

  /** Masking by RegExp */

  var MaskedRegExp =
  /*#__PURE__*/
  function (_Masked) {
    _inherits(MaskedRegExp, _Masked);

    function MaskedRegExp() {
      _classCallCheck(this, MaskedRegExp);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedRegExp).apply(this, arguments));
    }

    _createClass(MaskedRegExp, [{
      key: "_update",

      /**
        @override
        @param {Object} opts
      */
      value: function _update(opts) {
        if (opts.mask) opts.validate = function (value) {
          return value.search(opts.mask) >= 0;
        };

        _get(_getPrototypeOf(MaskedRegExp.prototype), "_update", this).call(this, opts);
      }
    }]);

    return MaskedRegExp;
  }(Masked);

  /** Masking by custom Function */

  var MaskedFunction =
  /*#__PURE__*/
  function (_Masked) {
    _inherits(MaskedFunction, _Masked);

    function MaskedFunction() {
      _classCallCheck(this, MaskedFunction);

      return _possibleConstructorReturn(this, _getPrototypeOf(MaskedFunction).apply(this, arguments));
    }

    _createClass(MaskedFunction, [{
      key: "_update",

      /**
        @override
        @param {Object} opts
      */
      value: function _update(opts) {
        if (opts.mask) opts.validate = opts.mask;

        _get(_getPrototypeOf(MaskedFunction.prototype), "_update", this).call(this, opts);
      }
    }]);

    return MaskedFunction;
  }(Masked);

  /** Dynamic mask for choosing apropriate mask in run-time */
  var MaskedDynamic =
  /*#__PURE__*/
  function (_Masked) {
    _inherits(MaskedDynamic, _Masked);

    /** Currently chosen mask */

    /** Compliled {@link Masked} options */

    /** Chooses {@link Masked} depending on input value */

    /**
      @param {Object} opts
    */
    function MaskedDynamic(opts) {
      var _this;

      _classCallCheck(this, MaskedDynamic);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MaskedDynamic).call(this, _objectSpread({}, MaskedDynamic.DEFAULTS, opts)));
      _this.currentMask = null;
      return _this;
    }
    /**
      @override
    */


    _createClass(MaskedDynamic, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedDynamic.prototype), "_update", this).call(this, opts);

        if ('mask' in opts) {
          // mask could be totally dynamic with only `dispatch` option
          this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function (m) {
            return createMask(m);
          }) : [];
        }
      }
      /**
        @override
      */

    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw() {
        var details = this._applyDispatch.apply(this, arguments);

        if (this.currentMask) {
          var _this$currentMask;

          details.aggregate((_this$currentMask = this.currentMask)._appendChar.apply(_this$currentMask, arguments));
        }

        return details;
      }
    }, {
      key: "_applyDispatch",
      value: function _applyDispatch() {
        var appended = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var prevValueBeforeTail = flags.tail && this._beforeTailState ? this._beforeTailState._value : this.value;
        var inputValue = this.rawInputValue;
        var insertValue = flags.tail && this._beforeTailState ? // $FlowFixMe - tired to fight with type system
        this._beforeTailState._rawInputValue : inputValue;
        var tailValue = inputValue.slice(insertValue.length);
        var prevMask = this.currentMask;
        var details = new ChangeDetails();
        var prevMaskState = prevMask && prevMask.state;
        var prevMaskBeforeTailState = prevMask && prevMask._beforeTailState;
        this.currentMask = this.doDispatch(appended, flags); // restore state after dispatch

        if (this.currentMask) {
          if (this.currentMask !== prevMask) {
            // if mask changed reapply input
            this.currentMask.reset(); // $FlowFixMe - it's ok, we don't change current mask above

            var d = this.currentMask.append(insertValue, {
              raw: true
            });
            details.tailShift = d.inserted.length - prevValueBeforeTail.length;

            if (tailValue) {
              // $FlowFixMe - it's ok, we don't change current mask above
              details.tailShift += this.currentMask.append(tailValue, {
                raw: true,
                tail: true
              }).tailShift;
            }
          } else {
            // Dispatch can do something bad with state, so
            // restore prev mask state
            this.currentMask.state = prevMaskState;
            this.currentMask._beforeTailState = prevMaskBeforeTailState;
          }
        }

        return details;
      }
      /**
        @override
      */

    }, {
      key: "doDispatch",
      value: function doDispatch(appended) {
        var flags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.dispatch(appended, this, flags);
      }
      /**
        @override
      */

    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2, _this$currentMask2;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (_get2 = _get(_getPrototypeOf(MaskedDynamic.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask2 = this.currentMask).doValidate.apply(_this$currentMask2, args));
      }
      /**
        @override
      */

    }, {
      key: "reset",
      value: function reset() {
        if (this.currentMask) this.currentMask.reset();
        this.compiledMasks.forEach(function (m) {
          return m.reset();
        });
      }
      /**
        @override
      */

    }, {
      key: "remove",

      /**
        @override
      */
      value: function remove() {
        var details = new ChangeDetails();

        if (this.currentMask) {
          var _this$currentMask3;

          details.aggregate((_this$currentMask3 = this.currentMask).remove.apply(_this$currentMask3, arguments)) // update with dispatch
          .aggregate(this._applyDispatch());
        }

        return details;
      }
      /**
        @override
      */

    }, {
      key: "extractInput",

      /**
        @override
      */
      value: function extractInput() {
        var _this$currentMask4;

        return this.currentMask ? (_this$currentMask4 = this.currentMask).extractInput.apply(_this$currentMask4, arguments) : '';
      }
      /**
        @override
      */

    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$currentMask5, _get3;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return this.currentMask ? (_this$currentMask5 = this.currentMask).extractTail.apply(_this$currentMask5, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
      }
      /**
        @override
      */

    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.currentMask) this.currentMask.doCommit();

        _get(_getPrototypeOf(MaskedDynamic.prototype), "doCommit", this).call(this);
      }
      /**
        @override
      */

    }, {
      key: "nearestInputPos",
      value: function nearestInputPos() {
        var _this$currentMask6, _get4;

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return this.currentMask ? (_this$currentMask6 = this.currentMask).nearestInputPos.apply(_this$currentMask6, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
      }
    }, {
      key: "value",
      get: function get$$1() {
        return this.currentMask ? this.currentMask.value : '';
      },
      set: function set$$1(value) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "value", value, this, true);
      }
      /**
        @override
      */

    }, {
      key: "unmaskedValue",
      get: function get$$1() {
        return this.currentMask ? this.currentMask.unmaskedValue : '';
      },
      set: function set$$1(unmaskedValue) {
        _set(_getPrototypeOf(MaskedDynamic.prototype), "unmaskedValue", unmaskedValue, this, true);
      }
      /**
        @override
      */

    }, {
      key: "typedValue",
      get: function get$$1() {
        return this.currentMask ? this.currentMask.typedValue : '';
      } // probably typedValue should not be used with dynamic
      ,
      set: function set$$1(value) {
        var unmaskedValue = String(value); // double check it

        if (this.currentMask) {
          this.currentMask.typedValue = value;
          unmaskedValue = this.currentMask.unmaskedValue;
        }

        this.unmaskedValue = unmaskedValue;
      }
      /**
        @override
      */

    }, {
      key: "isComplete",
      get: function get$$1() {
        return !!this.currentMask && this.currentMask.isComplete;
      }
    }, {
      key: "state",
      get: function get$$1() {
        return _objectSpread({}, _get(_getPrototypeOf(MaskedDynamic.prototype), "state", this), {
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map(function (m) {
            return m.state;
          }),
          currentMaskRef: this.currentMask,
          currentMask: this.currentMask && this.currentMask.state
        });
      },
      set: function set$$1(state) {
        var compiledMasks = state.compiledMasks,
            currentMaskRef = state.currentMaskRef,
            currentMask = state.currentMask,
            maskedState = _objectWithoutProperties(state, ["compiledMasks", "currentMaskRef", "currentMask"]);

        this.compiledMasks.forEach(function (m, mi) {
          return m.state = compiledMasks[mi];
        });

        if (currentMaskRef != null) {
          this.currentMask = currentMaskRef;
          this.currentMask.state = currentMask;
        }

        _set(_getPrototypeOf(MaskedDynamic.prototype), "state", maskedState, this, true);
      }
    }]);

    return MaskedDynamic;
  }(Masked);
  MaskedDynamic.DEFAULTS = {
    dispatch: function dispatch(appended, masked, flags) {
      if (!masked.compiledMasks.length) return;
      var inputValue = masked.rawInputValue; // simulate input

      var inputs = masked.compiledMasks.map(function (m, index) {
        m.rawInputValue = inputValue;
        m.append(appended, flags);
        var weight = m.rawInputValue.length;
        return {
          weight: weight,
          index: index
        };
      }); // pop masks with longer values first

      inputs.sort(function (i1, i2) {
        return i2.weight - i1.weight;
      });
      return masked.compiledMasks[inputs[0].index];
    }
  };

  /**
   * Applies mask on element.
   * @constructor
   * @param {HTMLInputElement|HTMLTextAreaElement|MaskElement} el - Element to apply mask
   * @param {Object} opts - Custom mask options
   * @return {InputMask}
   */

  function IMask(el) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    // currently available only for input-like elements
    return new InputMask(el, opts);
  }
  /** {@link InputMask} */

  IMask.InputMask = InputMask;
  /** {@link Masked} */

  IMask.Masked = Masked;
  /** {@link MaskedPattern} */

  IMask.MaskedPattern = MaskedPattern;
  /** {@link MaskedEnum} */

  IMask.MaskedEnum = MaskedEnum;
  /** {@link MaskedRange} */

  IMask.MaskedRange = MaskedRange;
  /** {@link MaskedNumber} */

  IMask.MaskedNumber = MaskedNumber;
  /** {@link MaskedDate} */

  IMask.MaskedDate = MaskedDate;
  /** {@link MaskedRegExp} */

  IMask.MaskedRegExp = MaskedRegExp;
  /** {@link MaskedFunction} */

  IMask.MaskedFunction = MaskedFunction;
  /** {@link MaskedDynamic} */

  IMask.MaskedDynamic = MaskedDynamic;
  /** {@link createMask} */

  IMask.createMask = createMask;
  /** {@link MaskElement} */

  IMask.MaskElement = MaskElement;
  /** {@link HTMLMaskElement} */

  IMask.HTMLMaskElement = HTMLMaskElement;
  g.IMask = IMask;

  return IMask;

})));
//# sourceMappingURL=imask.js.map

/*
 *  jQuery StarRatingSvg v1.2.0
 *
 *  http://github.com/nashio/star-rating-svg
 *  Author: Ignacio Chavez
 *  hello@ignaciochavez.com
 *  Licensed under MIT
 */

;(function ( $, window, document, undefined ) {

  'use strict';

  // Create the defaults once
  var pluginName = 'starRating';
  var noop = function(){};
  var defaults = {
    totalStars: 5,
    useFullStars: false,
    starShape: 'straight',
    emptyColor: 'lightgray',
    hoverColor: 'orange',
    activeColor: 'gold',
    ratedColor: 'crimson',
    useGradient: true,
    readOnly: false,
    disableAfterRate: true,
    baseUrl: false,
    starGradient: {
      start: '#FEF7CD',
      end: '#FF9511'
    },
    strokeWidth: 4,
    strokeColor: 'black',
    initialRating: 0,
    starSize: 40,
    callback: noop,
    onHover: noop,
    onLeave: noop
  };

	// The actual plugin constructor
  var Plugin = function( element, options ) {
    var _rating;
    var newRating;
    var roundFn;

    this.element = element;
    this.$el = $(element);
    this.settings = $.extend( {}, defaults, options );

    // grab rating if defined on the element
    _rating = this.$el.data('rating') || this.settings.initialRating;

    // round to the nearest half
    roundFn = this.settings.forceRoundUp ? Math.ceil : Math.round;
    newRating = (roundFn( _rating * 2 ) / 2).toFixed(1);
    this._state = {
      rating: newRating
    };

    // create unique id for stars
    this._uid = Math.floor( Math.random() * 999 );

    // override gradient if not used
    if( !options.starGradient && !this.settings.useGradient ){
      this.settings.starGradient.start = this.settings.starGradient.end = this.settings.activeColor;
    }

    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  };

  var methods = {
    init: function () {
      this.renderMarkup();
      this.addListeners();
      this.initRating();
    },

    addListeners: function(){
      if( this.settings.readOnly ){ return; }
      this.$stars.on('mouseover', this.hoverRating.bind(this));
      this.$stars.on('mouseout', this.restoreState.bind(this));
      this.$stars.on('click', this.handleRating.bind(this));
    },

    // apply styles to hovered stars
    hoverRating: function(e){
      var index = this.getIndex(e);
      this.paintStars(index, 'hovered');
      this.settings.onHover(index + 1, this._state.rating, this.$el);
    },

    // clicked on a rate, apply style and state
    handleRating: function(e){
      var index = this.getIndex(e);
      var rating = index + 1;

      this.applyRating(rating, this.$el);
      this.executeCallback( rating, this.$el );

      if(this.settings.disableAfterRate){
        this.$stars.off();
      }
    },

    applyRating: function(rating){
      var index = rating - 1;
      // paint selected and remove hovered color
      this.paintStars(index, 'rated');
      this._state.rating = index + 1;
      this._state.rated = true;
    },

    restoreState: function(e){
      var index = this.getIndex(e);
      var rating = this._state.rating || -1;
      // determine star color depending on manually rated
      var colorType = this._state.rated ? 'rated' : 'active';
      this.paintStars(rating - 1, colorType);
      this.settings.onLeave(index + 1, this._state.rating, this.$el);
    },

    getIndex: function(e){
      var $target = $(e.currentTarget);
      var width = $target.width();
      var side = $(e.target).attr('data-side');
      var minRating = this.settings.minRating;

      // hovered outside the star, calculate by pixel instead
      side = (!side) ? this.getOffsetByPixel(e, $target, width) : side;
      side = (this.settings.useFullStars) ? 'right' : side ;

      // get index for half or whole star
      var index = $target.index() - ((side === 'left') ? 0.5 : 0);

      // pointer is way to the left, rating should be none
      index = ( index < 0.5 && (e.offsetX < width / 4) ) ? -1 : index;

      // force minimum rating
      index = ( minRating && minRating <= this.settings.totalStars && index < minRating ) ? minRating - 1 : index;
      return index;
    },

    getOffsetByPixel: function(e, $target, width){
      var leftX = e.pageX - $target.offset().left;
      return ( leftX <= (width / 2) && !this.settings.useFullStars) ? 'left' : 'right';
    },

    initRating: function(){
      this.paintStars(this._state.rating - 1, 'active');
    },

    paintStars: function(endIndex, stateClass){
      var $polygonLeft;
      var $polygonRight;
      var leftClass;
      var rightClass;

      $.each(this.$stars, function(index, star){
        $polygonLeft = $(star).find('[data-side="left"]');
        $polygonRight = $(star).find('[data-side="right"]');
        leftClass = rightClass = (index <= endIndex) ? stateClass : 'empty';

        // has another half rating, add half star
        leftClass = ( index - endIndex === 0.5 ) ? stateClass : leftClass;

        $polygonLeft.attr('class', 'svg-'  + leftClass + '-' + this._uid);
        $polygonRight.attr('class', 'svg-'  + rightClass + '-' + this._uid);

      }.bind(this));
    },

    renderMarkup: function () {
      var s = this.settings;
      var baseUrl = s.baseUrl ? location.href.split('#')[0] : '';

      // inject an svg manually to have control over attributes
      var star = '<div class="jq-star" style="width:' + s.starSize+ 'px;  height:' + s.starSize + 'px;"><svg version="1.0" class="jq-star-svg" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" ' + this.getSvgDimensions(s.starShape) +  ' stroke-width:' + s.strokeWidth + 'px;" xml:space="preserve"><style type="text/css">.svg-empty-' + this._uid + '{fill:url(' + baseUrl + '#' + this._uid + '_SVGID_1_);}.svg-hovered-' + this._uid + '{fill:url(' + baseUrl + '#' + this._uid + '_SVGID_2_);}.svg-active-' + this._uid + '{fill:url(' + baseUrl + '#' + this._uid + '_SVGID_3_);}.svg-rated-' + this._uid + '{fill:' + s.ratedColor + ';}</style>' +

      this.getLinearGradient(this._uid + '_SVGID_1_', s.emptyColor, s.emptyColor, s.starShape) +
      this.getLinearGradient(this._uid + '_SVGID_2_', s.hoverColor, s.hoverColor, s.starShape) +
      this.getLinearGradient(this._uid + '_SVGID_3_', s.starGradient.start, s.starGradient.end, s.starShape) +
      this.getVectorPath(this._uid, {
        starShape: s.starShape,
        strokeWidth: s.strokeWidth,
        strokeColor: s.strokeColor
      } ) +
      '</svg></div>';

      // inject svg markup
      var starsMarkup = '';
      for( var i = 0; i < s.totalStars; i++){
        starsMarkup += star;
      }
      this.$el.append(starsMarkup);
      this.$stars = this.$el.find('.jq-star');
    },

    getVectorPath: function(id, attrs){
      return (attrs.starShape === 'rounded') ?
        this.getRoundedVectorPath(id, attrs) : this.getSpikeVectorPath(id, attrs);
    },

    getSpikeVectorPath: function(id, attrs){
      return '<polygon data-side="center" class="svg-empty-' + id + '" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 " style="fill: transparent; stroke: ' + attrs.strokeColor + ';" />' +
        '<polygon data-side="left" class="svg-empty-' + id + '" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 " style="stroke-opacity: 0;" />' +
          '<polygon data-side="right" class="svg-empty-' + id + '" points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 " style="stroke-opacity: 0;" />';
    },

    getRoundedVectorPath: function(id, attrs){
      var fullPoints = 'M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7 c-5.5-11.2-16.8-18.2-29.3-18.2c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370 l102,99.4l-24,140.3c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2 c4.8,2.6,10,3.8,15.2,3.8c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4 C521.6,361.3,524.8,348.3,520.9,336.5z';

      return '<path data-side="center" class="svg-empty-' + id + '" d="' + fullPoints + '" style="stroke: ' + attrs.strokeColor + '; fill: transparent; " /><path data-side="right" class="svg-empty-' + id + '" d="' + fullPoints + '" style="stroke-opacity: 0;" /><path data-side="left" class="svg-empty-' + id + '" d="M121,648c-7.3,0-14.1-2.2-19.8-6.4c-10.4-7.6-15.6-20.3-13.4-33l24-139.9l-101.6-99 c-9.1-8.9-12.4-22.4-8.6-34.5c3.9-12.1,14.6-21.1,27.2-23l140.4-20.4L232,164.6c5.7-11.6,17.3-18.8,30.2-16.8c0.6,0,1,0.4,1,1 v430.1c0,0.4-0.2,0.7-0.5,0.9l-126,66.3C132,646.6,126.6,648,121,648z" style="stroke: ' + attrs.strokeColor + '; stroke-opacity: 0;" />';
    },

    getSvgDimensions: function(starShape){
      return (starShape === 'rounded') ? 'width="550px" height="500.2px" viewBox="0 146.8 550 500.2" style="enable-background:new 0 0 550 500.2;' : 'x="0px" y="0px" width="305px" height="305px" viewBox="60 -62 309 309" style="enable-background:new 64 -59 305 305;';
    },

    getLinearGradient: function(id, startColor, endColor, starShape){
      var height = (starShape === 'rounded') ? 500 : 250;
      return '<linearGradient id="' + id + '" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="' + height + '"><stop  offset="0" style="stop-color:' + startColor + '"/><stop  offset="1" style="stop-color:' + endColor + '"/> </linearGradient>';
    },

    executeCallback: function(rating, $el){
      var callback = this.settings.callback;
      callback(rating, $el);
    }

  };

  var publicMethods = {

    unload: function() {
      var _name = 'plugin_' + pluginName;
      var $el = $(this);
      var $starSet = $el.data(_name).$stars;
      $starSet.off();
      $el.removeData(_name).remove();
    },

    setRating: function(rating, round) {
      var _name = 'plugin_' + pluginName;
      var $el = $(this);
      var $plugin = $el.data(_name);
      if( rating > $plugin.settings.totalStars || rating < 0 ) { return; }
      if( round ){
        rating = Math.round(rating);
      }
      $plugin.applyRating(rating);
    },

    getRating: function() {
      var _name = 'plugin_' + pluginName;
      var $el = $(this);
      var $starSet = $el.data(_name);
      return $starSet._state.rating;
    },

    resize: function(newSize) {
      var _name = 'plugin_' + pluginName;
      var $el = $(this);
      var $starSet = $el.data(_name);
      var $stars = $starSet.$stars;

      if(newSize <= 1 || newSize > 200) {
        console.log('star size out of bounds');
        return;
      }

      $stars = Array.prototype.slice.call($stars);
      $stars.forEach(function(star){
        $(star).css({
          'width': newSize + 'px',
          'height': newSize + 'px'
        });
      });
    },

    setReadOnly: function(flag) {
      var _name = 'plugin_' + pluginName;
      var $el = $(this);
      var $plugin = $el.data(_name);
      if(flag === true){
        $plugin.$stars.off('mouseover mouseout click');
      } else {
        $plugin.settings.readOnly = false;
        $plugin.addListeners();
      }
    }

  };


  // Avoid Plugin.prototype conflicts
  $.extend(Plugin.prototype, methods);

  $.fn[ pluginName ] = function ( options ) {

    // if options is a public method
    if( !$.isPlainObject(options) ){
      if( publicMethods.hasOwnProperty(options) ){
        return publicMethods[options].apply(this, Array.prototype.slice.call(arguments, 1));
      } else {
        $.error('Method '+ options +' does not exist on ' + pluginName + '.js');
      }
    }

    return this.each(function() {
      // preventing against multiple instantiations
      if ( !$.data( this, 'plugin_' + pluginName ) ) {
        $.data( this, 'plugin_' + pluginName, new Plugin( this, options ) );
      }
    });
  };

})( jQuery, window, document );



/*! List.js v1.5.0 (http://listjs.com) by Jonny Strömberg (http://javve.com) */
var List=function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=11)}([function(t,e,r){function n(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}var i=r(4),s=/\s+/;Object.prototype.toString;t.exports=function(t){return new n(t)},n.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array(),r=i(e,t);return~r||e.push(t),this.el.className=e.join(" "),this},n.prototype.remove=function(t){if(this.list)return this.list.remove(t),this;var e=this.array(),r=i(e,t);return~r&&e.splice(r,1),this.el.className=e.join(" "),this},n.prototype.toggle=function(t,e){return this.list?("undefined"!=typeof e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):("undefined"!=typeof e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},n.prototype.array=function(){var t=this.el.getAttribute("class")||"",e=t.replace(/^\s+|\s+$/g,""),r=e.split(s);return""===r[0]&&r.shift(),r},n.prototype.has=n.prototype.contains=function(t){return this.list?this.list.contains(t):!!~i(this.array(),t)}},function(t,e,r){var n=window.addEventListener?"addEventListener":"attachEvent",i=window.removeEventListener?"removeEventListener":"detachEvent",s="addEventListener"!==n?"on":"",a=r(5);e.bind=function(t,e,r,i){t=a(t);for(var o=0;o<t.length;o++)t[o][n](s+e,r,i||!1)},e.unbind=function(t,e,r,n){t=a(t);for(var o=0;o<t.length;o++)t[o][i](s+e,r,n||!1)}},function(t,e){t.exports=function(t){return function(e,r,n){var i=this;this._values={},this.found=!1,this.filtered=!1;var s=function(e,r,n){if(void 0===r)n?i.values(e,n):i.values(e);else{i.elm=r;var s=t.templater.get(i,e);i.values(s)}};this.values=function(e,r){if(void 0===e)return i._values;for(var n in e)i._values[n]=e[n];r!==!0&&t.templater.set(i,i.values())},this.show=function(){t.templater.show(i)},this.hide=function(){t.templater.hide(i)},this.matching=function(){return t.filtered&&t.searched&&i.found&&i.filtered||t.filtered&&!t.searched&&i.filtered||!t.filtered&&t.searched&&i.found||!t.filtered&&!t.searched},this.visible=function(){return!(!i.elm||i.elm.parentNode!=t.list)},s(e,r,n)}}},function(t,e){var r=function(t,e,r){return r?t.getElementsByClassName(e)[0]:t.getElementsByClassName(e)},n=function(t,e,r){return e="."+e,r?t.querySelector(e):t.querySelectorAll(e)},i=function(t,e,r){for(var n=[],i="*",s=t.getElementsByTagName(i),a=s.length,o=new RegExp("(^|\\s)"+e+"(\\s|$)"),l=0,u=0;l<a;l++)if(o.test(s[l].className)){if(r)return s[l];n[u]=s[l],u++}return n};t.exports=function(){return function(t,e,s,a){return a=a||{},a.test&&a.getElementsByClassName||!a.test&&document.getElementsByClassName?r(t,e,s):a.test&&a.querySelector||!a.test&&document.querySelector?n(t,e,s):i(t,e,s)}}()},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e){function r(t){return"[object Array]"===Object.prototype.toString.call(t)}t.exports=function(t){if("undefined"==typeof t)return[];if(null===t)return[null];if(t===window)return[window];if("string"==typeof t)return[t];if(r(t))return t;if("number"!=typeof t.length)return[t];if("function"==typeof t&&t instanceof Function)return[t];for(var e=[],n=0;n<t.length;n++)(Object.prototype.hasOwnProperty.call(t,n)||n in t)&&e.push(t[n]);return e.length?e:[]}},function(t,e){t.exports=function(t){return t=void 0===t?"":t,t=null===t?"":t,t=t.toString()}},function(t,e){t.exports=function(t){for(var e,r=Array.prototype.slice.call(arguments,1),n=0;e=r[n];n++)if(e)for(var i in e)t[i]=e[i];return t}},function(t,e){t.exports=function(t){var e=function(r,n,i){var s=r.splice(0,50);i=i||[],i=i.concat(t.add(s)),r.length>0?setTimeout(function(){e(r,n,i)},1):(t.update(),n(i))};return e}},function(t,e){t.exports=function(t){return t.handlers.filterStart=t.handlers.filterStart||[],t.handlers.filterComplete=t.handlers.filterComplete||[],function(e){if(t.trigger("filterStart"),t.i=1,t.reset.filter(),void 0===e)t.filtered=!1;else{t.filtered=!0;for(var r=t.items,n=0,i=r.length;n<i;n++){var s=r[n];e(s)?s.filtered=!0:s.filtered=!1}}return t.update(),t.trigger("filterComplete"),t.visibleItems}}},function(t,e,r){var n=(r(0),r(1)),i=r(7),s=r(6),a=r(3),o=r(19);t.exports=function(t,e){e=e||{},e=i({location:0,distance:100,threshold:.4,multiSearch:!0,searchClass:"fuzzy-search"},e);var r={search:function(n,i){for(var s=e.multiSearch?n.replace(/ +$/,"").split(/ +/):[n],a=0,o=t.items.length;a<o;a++)r.item(t.items[a],i,s)},item:function(t,e,n){for(var i=!0,s=0;s<n.length;s++){for(var a=!1,o=0,l=e.length;o<l;o++)r.values(t.values(),e[o],n[s])&&(a=!0);a||(i=!1)}t.found=i},values:function(t,r,n){if(t.hasOwnProperty(r)){var i=s(t[r]).toLowerCase();if(o(i,n,e))return!0}return!1}};return n.bind(a(t.listContainer,e.searchClass),"keyup",function(e){var n=e.target||e.srcElement;t.search(n.value,r.search)}),function(e,n){t.search(e,n,r.search)}}},function(t,e,r){var n=r(18),i=r(3),s=r(7),a=r(4),o=r(1),l=r(6),u=r(0),c=r(17),f=r(5);t.exports=function(t,e,h){var d,v=this,m=r(2)(v),g=r(8)(v),p=r(12)(v);d={start:function(){v.listClass="list",v.searchClass="search",v.sortClass="sort",v.page=1e4,v.i=1,v.items=[],v.visibleItems=[],v.matchingItems=[],v.searched=!1,v.filtered=!1,v.searchColumns=void 0,v.handlers={updated:[]},v.valueNames=[],v.utils={getByClass:i,extend:s,indexOf:a,events:o,toString:l,naturalSort:n,classes:u,getAttribute:c,toArray:f},v.utils.extend(v,e),v.listContainer="string"==typeof t?document.getElementById(t):t,v.listContainer&&(v.list=i(v.listContainer,v.listClass,!0),v.parse=r(13)(v),v.templater=r(16)(v),v.search=r(14)(v),v.filter=r(9)(v),v.sort=r(15)(v),v.fuzzySearch=r(10)(v,e.fuzzySearch),this.handlers(),this.items(),this.pagination(),v.update())},handlers:function(){for(var t in v.handlers)v[t]&&v.on(t,v[t])},items:function(){v.parse(v.list),void 0!==h&&v.add(h)},pagination:function(){if(void 0!==e.pagination){e.pagination===!0&&(e.pagination=[{}]),void 0===e.pagination[0]&&(e.pagination=[e.pagination]);for(var t=0,r=e.pagination.length;t<r;t++)p(e.pagination[t])}}},this.reIndex=function(){v.items=[],v.visibleItems=[],v.matchingItems=[],v.searched=!1,v.filtered=!1,v.parse(v.list)},this.toJSON=function(){for(var t=[],e=0,r=v.items.length;e<r;e++)t.push(v.items[e].values());return t},this.add=function(t,e){if(0!==t.length){if(e)return void g(t,e);var r=[],n=!1;void 0===t[0]&&(t=[t]);for(var i=0,s=t.length;i<s;i++){var a=null;n=v.items.length>v.page,a=new m(t[i],void 0,n),v.items.push(a),r.push(a)}return v.update(),r}},this.show=function(t,e){return this.i=t,this.page=e,v.update(),v},this.remove=function(t,e,r){for(var n=0,i=0,s=v.items.length;i<s;i++)v.items[i].values()[t]==e&&(v.templater.remove(v.items[i],r),v.items.splice(i,1),s--,i--,n++);return v.update(),n},this.get=function(t,e){for(var r=[],n=0,i=v.items.length;n<i;n++){var s=v.items[n];s.values()[t]==e&&r.push(s)}return r},this.size=function(){return v.items.length},this.clear=function(){return v.templater.clear(),v.items=[],v},this.on=function(t,e){return v.handlers[t].push(e),v},this.off=function(t,e){var r=v.handlers[t],n=a(r,e);return n>-1&&r.splice(n,1),v},this.trigger=function(t){for(var e=v.handlers[t].length;e--;)v.handlers[t][e](v);return v},this.reset={filter:function(){for(var t=v.items,e=t.length;e--;)t[e].filtered=!1;return v},search:function(){for(var t=v.items,e=t.length;e--;)t[e].found=!1;return v}},this.update=function(){var t=v.items,e=t.length;v.visibleItems=[],v.matchingItems=[],v.templater.clear();for(var r=0;r<e;r++)t[r].matching()&&v.matchingItems.length+1>=v.i&&v.visibleItems.length<v.page?(t[r].show(),v.visibleItems.push(t[r]),v.matchingItems.push(t[r])):t[r].matching()?(v.matchingItems.push(t[r]),t[r].hide()):t[r].hide();return v.trigger("updated"),v},d.start()}},function(t,e,r){var n=r(0),i=r(1),s=r(11);t.exports=function(t){var e=function(e,i){var s,o=t.matchingItems.length,l=t.i,u=t.page,c=Math.ceil(o/u),f=Math.ceil(l/u),h=i.innerWindow||2,d=i.left||i.outerWindow||0,v=i.right||i.outerWindow||0;v=c-v,e.clear();for(var m=1;m<=c;m++){var g=f===m?"active":"";r.number(m,d,v,f,h)?(s=e.add({page:m,dotted:!1})[0],g&&n(s.elm).add(g),a(s.elm,m,u)):r.dotted(e,m,d,v,f,h,e.size())&&(s=e.add({page:"...",dotted:!0})[0],n(s.elm).add("disabled"))}},r={number:function(t,e,r,n,i){return this.left(t,e)||this.right(t,r)||this.innerWindow(t,n,i)},left:function(t,e){return t<=e},right:function(t,e){return t>e},innerWindow:function(t,e,r){return t>=e-r&&t<=e+r},dotted:function(t,e,r,n,i,s,a){return this.dottedLeft(t,e,r,n,i,s)||this.dottedRight(t,e,r,n,i,s,a)},dottedLeft:function(t,e,r,n,i,s){return e==r+1&&!this.innerWindow(e,i,s)&&!this.right(e,n)},dottedRight:function(t,e,r,n,i,s,a){return!t.items[a-1].values().dotted&&(e==n&&!this.innerWindow(e,i,s)&&!this.right(e,n))}},a=function(e,r,n){i.bind(e,"click",function(){t.show((r-1)*n+1,n)})};return function(r){var n=new s(t.listContainer.id,{listClass:r.paginationClass||"pagination",item:"<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",valueNames:["page","dotted"],searchClass:"pagination-search-that-is-not-supposed-to-exist",sortClass:"pagination-sort-that-is-not-supposed-to-exist"});t.on("updated",function(){e(n,r)}),e(n,r)}}},function(t,e,r){t.exports=function(t){var e=r(2)(t),n=function(t){for(var e=t.childNodes,r=[],n=0,i=e.length;n<i;n++)void 0===e[n].data&&r.push(e[n]);return r},i=function(r,n){for(var i=0,s=r.length;i<s;i++)t.items.push(new e(n,r[i]))},s=function(e,r){var n=e.splice(0,50);i(n,r),e.length>0?setTimeout(function(){s(e,r)},1):(t.update(),t.trigger("parseComplete"))};return t.handlers.parseComplete=t.handlers.parseComplete||[],function(){var e=n(t.list),r=t.valueNames;t.indexAsync?s(e,r):i(e,r)}}},function(t,e){t.exports=function(t){var e,r,n,i,s={resetList:function(){t.i=1,t.templater.clear(),i=void 0},setOptions:function(t){2==t.length&&t[1]instanceof Array?r=t[1]:2==t.length&&"function"==typeof t[1]?(r=void 0,i=t[1]):3==t.length?(r=t[1],i=t[2]):r=void 0},setColumns:function(){0!==t.items.length&&void 0===r&&(r=void 0===t.searchColumns?s.toArray(t.items[0].values()):t.searchColumns)},setSearchString:function(e){e=t.utils.toString(e).toLowerCase(),e=e.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),n=e},toArray:function(t){var e=[];for(var r in t)e.push(r);return e}},a={list:function(){for(var e=0,r=t.items.length;e<r;e++)a.item(t.items[e])},item:function(t){t.found=!1;for(var e=0,n=r.length;e<n;e++)if(a.values(t.values(),r[e]))return void(t.found=!0)},values:function(r,i){return!!(r.hasOwnProperty(i)&&(e=t.utils.toString(r[i]).toLowerCase(),""!==n&&e.search(n)>-1))},reset:function(){t.reset.search(),t.searched=!1}},o=function(e){return t.trigger("searchStart"),s.resetList(),s.setSearchString(e),s.setOptions(arguments),s.setColumns(),""===n?a.reset():(t.searched=!0,i?i(n,r):a.list()),t.update(),t.trigger("searchComplete"),t.visibleItems};return t.handlers.searchStart=t.handlers.searchStart||[],t.handlers.searchComplete=t.handlers.searchComplete||[],t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"keyup",function(e){var r=e.target||e.srcElement,n=""===r.value&&!t.searched;n||o(r.value)}),t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"input",function(t){var e=t.target||t.srcElement;""===e.value&&o("")}),o}},function(t,e){t.exports=function(t){var e={els:void 0,clear:function(){for(var r=0,n=e.els.length;r<n;r++)t.utils.classes(e.els[r]).remove("asc"),t.utils.classes(e.els[r]).remove("desc")},getOrder:function(e){var r=t.utils.getAttribute(e,"data-order");return"asc"==r||"desc"==r?r:t.utils.classes(e).has("desc")?"asc":t.utils.classes(e).has("asc")?"desc":"asc"},getInSensitive:function(e,r){var n=t.utils.getAttribute(e,"data-insensitive");"false"===n?r.insensitive=!1:r.insensitive=!0},setOrder:function(r){for(var n=0,i=e.els.length;n<i;n++){var s=e.els[n];if(t.utils.getAttribute(s,"data-sort")===r.valueName){var a=t.utils.getAttribute(s,"data-order");"asc"==a||"desc"==a?a==r.order&&t.utils.classes(s).add(r.order):t.utils.classes(s).add(r.order)}}}},r=function(){t.trigger("sortStart");var r={},n=arguments[0].currentTarget||arguments[0].srcElement||void 0;n?(r.valueName=t.utils.getAttribute(n,"data-sort"),e.getInSensitive(n,r),r.order=e.getOrder(n)):(r=arguments[1]||r,r.valueName=arguments[0],r.order=r.order||"asc",r.insensitive="undefined"==typeof r.insensitive||r.insensitive),e.clear(),e.setOrder(r);var i,s=r.sortFunction||t.sortFunction||null,a="desc"===r.order?-1:1;i=s?function(t,e){return s(t,e,r)*a}:function(e,n){var i=t.utils.naturalSort;return i.alphabet=t.alphabet||r.alphabet||void 0,!i.alphabet&&r.insensitive&&(i=t.utils.naturalSort.caseInsensitive),i(e.values()[r.valueName],n.values()[r.valueName])*a},t.items.sort(i),t.update(),t.trigger("sortComplete")};return t.handlers.sortStart=t.handlers.sortStart||[],t.handlers.sortComplete=t.handlers.sortComplete||[],e.els=t.utils.getByClass(t.listContainer,t.sortClass),t.utils.events.bind(e.els,"click",r),t.on("searchStart",e.clear),t.on("filterStart",e.clear),r}},function(t,e){var r=function(t){var e,r=this,n=function(){e=r.getItemSource(t.item),e&&(e=r.clearSourceItem(e,t.valueNames))};this.clearSourceItem=function(e,r){for(var n=0,i=r.length;n<i;n++){var s;if(r[n].data)for(var a=0,o=r[n].data.length;a<o;a++)e.setAttribute("data-"+r[n].data[a],"");else r[n].attr&&r[n].name?(s=t.utils.getByClass(e,r[n].name,!0),s&&s.setAttribute(r[n].attr,"")):(s=t.utils.getByClass(e,r[n],!0),s&&(s.innerHTML=""));s=void 0}return e},this.getItemSource=function(e){if(void 0===e){for(var r=t.list.childNodes,n=0,i=r.length;n<i;n++)if(void 0===r[n].data)return r[n].cloneNode(!0)}else{if(/<tr[\s>]/g.exec(e)){var s=document.createElement("tbody");return s.innerHTML=e,s.firstChild}if(e.indexOf("<")!==-1){var a=document.createElement("div");return a.innerHTML=e,a.firstChild}var o=document.getElementById(t.item);if(o)return o}},this.get=function(e,n){r.create(e);for(var i={},s=0,a=n.length;s<a;s++){var o;if(n[s].data)for(var l=0,u=n[s].data.length;l<u;l++)i[n[s].data[l]]=t.utils.getAttribute(e.elm,"data-"+n[s].data[l]);else n[s].attr&&n[s].name?(o=t.utils.getByClass(e.elm,n[s].name,!0),i[n[s].name]=o?t.utils.getAttribute(o,n[s].attr):""):(o=t.utils.getByClass(e.elm,n[s],!0),i[n[s]]=o?o.innerHTML:"");o=void 0}return i},this.set=function(e,n){var i=function(e){for(var r=0,n=t.valueNames.length;r<n;r++)if(t.valueNames[r].data){for(var i=t.valueNames[r].data,s=0,a=i.length;s<a;s++)if(i[s]===e)return{data:e}}else{if(t.valueNames[r].attr&&t.valueNames[r].name&&t.valueNames[r].name==e)return t.valueNames[r];if(t.valueNames[r]===e)return e}},s=function(r,n){var s,a=i(r);a&&(a.data?e.elm.setAttribute("data-"+a.data,n):a.attr&&a.name?(s=t.utils.getByClass(e.elm,a.name,!0),s&&s.setAttribute(a.attr,n)):(s=t.utils.getByClass(e.elm,a,!0),s&&(s.innerHTML=n)),s=void 0)};if(!r.create(e))for(var a in n)n.hasOwnProperty(a)&&s(a,n[a])},this.create=function(t){if(void 0!==t.elm)return!1;if(void 0===e)throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");var n=e.cloneNode(!0);return n.removeAttribute("id"),t.elm=n,r.set(t,t.values()),!0},this.remove=function(e){e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.show=function(e){r.create(e),t.list.appendChild(e.elm)},this.hide=function(e){void 0!==e.elm&&e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.clear=function(){if(t.list.hasChildNodes())for(;t.list.childNodes.length>=1;)t.list.removeChild(t.list.firstChild)},n()};t.exports=function(t){return new r(t)}},function(t,e){t.exports=function(t,e){var r=t.getAttribute&&t.getAttribute(e)||null;if(!r)for(var n=t.attributes,i=n.length,s=0;s<i;s++)void 0!==e[s]&&e[s].nodeName===e&&(r=e[s].nodeValue);return r}},function(t,e,r){"use strict";function n(t){return t>=48&&t<=57}function i(t,e){for(var r=(t+="").length,i=(e+="").length,s=0,l=0;s<r&&l<i;){var u=t.charCodeAt(s),c=e.charCodeAt(l);if(n(u)){if(!n(c))return u-c;for(var f=s,h=l;48===u&&++f<r;)u=t.charCodeAt(f);for(;48===c&&++h<i;)c=e.charCodeAt(h);for(var d=f,v=h;d<r&&n(t.charCodeAt(d));)++d;for(;v<i&&n(e.charCodeAt(v));)++v;var m=d-f-v+h;if(m)return m;for(;f<d;)if(m=t.charCodeAt(f++)-e.charCodeAt(h++))return m;s=d,l=v}else{if(u!==c)return u<o&&c<o&&a[u]!==-1&&a[c]!==-1?a[u]-a[c]:u-c;++s,++l}}return r-i}var s,a,o=0;i.caseInsensitive=i.i=function(t,e){return i((""+t).toLowerCase(),(""+e).toLowerCase())},Object.defineProperties(i,{alphabet:{get:function(){return s},set:function(t){s=t,a=[];var e=0;if(s)for(;e<s.length;e++)a[s.charCodeAt(e)]=e;for(o=a.length,e=0;e<o;e++)void 0===a[e]&&(a[e]=-1)}}}),t.exports=i},function(t,e){t.exports=function(t,e,r){function n(t,r){var n=t/e.length,i=Math.abs(o-r);return s?n+i/s:i?1:n}var i=r.location||0,s=r.distance||100,a=r.threshold||.4;if(e===t)return!0;if(e.length>32)return!1;var o=i,l=function(){var t,r={};for(t=0;t<e.length;t++)r[e.charAt(t)]=0;for(t=0;t<e.length;t++)r[e.charAt(t)]|=1<<e.length-t-1;return r}(),u=a,c=t.indexOf(e,o);c!=-1&&(u=Math.min(n(0,c),u),c=t.lastIndexOf(e,o+e.length),c!=-1&&(u=Math.min(n(0,c),u)));var f=1<<e.length-1;c=-1;for(var h,d,v,m=e.length+t.length,g=0;g<e.length;g++){for(h=0,d=m;h<d;)n(g,o+d)<=u?h=d:m=d,d=Math.floor((m-h)/2+h);m=d;var p=Math.max(1,o-d+1),C=Math.min(o+d,t.length)+e.length,y=Array(C+2);y[C+1]=(1<<g)-1;for(var b=C;b>=p;b--){var w=l[t.charAt(b-1)];if(0===g?y[b]=(y[b+1]<<1|1)&w:y[b]=(y[b+1]<<1|1)&w|((v[b+1]|v[b])<<1|1)|v[b+1],y[b]&f){var x=n(g,b-1);if(x<=u){if(u=x,c=b-1,!(c>o))break;p=Math.max(1,2*o-c)}}}if(n(g+1,o)>u)break;v=y}return!(c<0)}}]);
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
(function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)})(function(i){"use strict";var e=window.Slick||{};e=function(){function e(e,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(e),appendDots:i(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(e),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(e).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,"undefined"!=typeof document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=t++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}var t=0;return e}(),e.prototype.activateADA=function(){var i=this;i.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):o===!0?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),s.options.rtl===!0&&s.options.vertical===!1&&(e=-e),s.transformsEnabled===!1?s.options.vertical===!1?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):s.cssTransitions===!1?(s.options.rtl===!0&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),s.options.vertical===!1?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),s.options.vertical===!1?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this,o=t.getNavTarget();null!==o&&"object"==typeof o&&o.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};e.options.fade===!1?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(i.options.infinite===!1&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1===0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;e.options.arrows===!0&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),e.options.infinite!==!0&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(o.options.dots===!0&&o.slideCount>o.options.slidesToShow){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),e.options.centerMode!==!0&&e.options.swipeToSlide!==!0||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.options.draggable===!0&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>0){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(r.originalSettings.mobileFirst===!1?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,e===!0&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||l===!1||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!==0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t,o=this;if(e=o.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var s in e){if(i<e[s]){i=t;break}t=e[s]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),e.options.accessibility===!0&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),e.options.accessibility===!0&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),e.options.accessibility===!0&&e.$list.off("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>0&&(i=e.$slides.children().children(),i.removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){var e=this;e.shouldClick===!1&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;t.cssTransitions===!1?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;e.cssTransitions===!1?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick","*",function(t){var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&o.is(":focus")&&(e.focussed=!0,e.autoPlay())},0)}).on("blur.slick","*",function(t){i(this);e.options.pauseOnFocus&&(e.focussed=!1,e.autoPlay())})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){var i=this;return i.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(i.options.infinite===!0)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(i.options.centerMode===!0)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),n.options.infinite===!0?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,n.options.vertical===!0&&n.options.centerMode===!0&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!==0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),n.options.centerMode===!0&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:n.options.centerMode===!0&&n.options.infinite===!0?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:n.options.centerMode===!0&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=n.options.vertical===!1?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,n.options.variableWidth===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,n.options.centerMode===!0&&(o=n.slideCount<=n.options.slidesToShow||n.options.infinite===!1?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=n.options.rtl===!0?o[0]?(n.$slideTrack.width()-o[0].offsetLeft-o.width())*-1:0:o[0]?o[0].offsetLeft*-1:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){var e=this;return e.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(e.options.infinite===!1?i=e.slideCount:(t=e.options.slidesToScroll*-1,o=e.options.slidesToScroll*-1,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o,s,n=this;return s=n.options.centerMode===!0?Math.floor(n.$list.width()/2):0,o=n.swipeLeft*-1+s,n.options.swipeToSlide===!0?(n.$slideTrack.find(".slick-slide").each(function(e,s){var r,l,d;if(r=i(s).outerWidth(),l=s.offsetLeft,n.options.centerMode!==!0&&(l+=r/2),d=l+r,o<d)return t=s,!1}),e=Math.abs(i(t).attr("data-slick-index")-n.currentSlide)||1):n.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){var t=this;t.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),t.options.accessibility===!0&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);if(i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),s!==-1){var n="slick-slide-control"+e.instanceUid+s;i("#"+n).length&&i(this).attr({"aria-describedby":n})}}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.options.focusOnChange?e.$slides.eq(s).attr({tabindex:"0"}):e.$slides.eq(s).removeAttr("tabindex");e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),i.options.accessibility===!0&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;e.options.dots===!0&&e.slideCount>e.options.slidesToShow&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),e.options.accessibility===!0&&e.$dots.on("keydown.slick",e.keyHandler)),e.options.dots===!0&&e.options.pauseOnDotsHover===!0&&e.slideCount>e.options.slidesToShow&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),e.options.accessibility===!0&&e.$list.on("keydown.slick",e.keyHandler),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:e.options.rtl===!0?"next":"previous"}}):39===i.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:e.options.rtl===!0?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||r.$slider.attr("data-sizes"),n=document.createElement("img");n.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,e,t])})},n.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,t])},n.src=t})}var t,o,s,n,r=this;if(r.options.centerMode===!0?r.options.infinite===!0?(s=r.currentSlide+(r.options.slidesToShow/2+1),n=s+r.options.slidesToShow+2):(s=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),n=2+(r.options.slidesToShow/2+1)+r.currentSlide):(s=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,n=Math.ceil(s+r.options.slidesToShow),r.options.fade===!0&&(s>0&&s--,n<=r.slideCount&&n++)),t=r.$slider.find(".slick-slide").slice(s,n),"anticipated"===r.options.lazyLoad)for(var l=s-1,d=n,a=r.$slider.find(".slick-slide"),c=0;c<r.options.slidesToScroll;c++)l<0&&(l=r.slideCount-1),t=t.add(a.eq(l)),t=t.add(a.eq(d)),l--,d++;e(t),r.slideCount<=r.options.slidesToShow?(o=r.$slider.find(".slick-slide"),e(o)):r.currentSlide>=r.slideCount-r.options.slidesToShow?(o=r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow),e(o)):0===r.currentSlide&&(o=r.$slider.find(".slick-cloned").slice(r.options.slidesToShow*-1),e(o))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){var i=this;i.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;if(!t.unslicked&&(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),t.options.accessibility===!0&&(t.initADA(),t.options.focusOnChange))){var o=i(t.$slides.get(t.currentSlide));o.attr("tabindex",0).focus()}},e.prototype.prev=e.prototype.slickPrev=function(){var i=this;i.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),r=document.createElement("img"),r.onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),l.options.adaptiveHeight===!0&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),e.options.focusOnSelect===!0&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;return"boolean"==typeof i?(e=i,i=e===!0?0:o.slideCount-1):i=e===!0?--i:i,!(o.slideCount<1||i<0||i>o.slideCount-1)&&(o.unload(),t===!0?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,void o.reinit())},e.prototype.setCSS=function(i){var e,t,o=this,s={};o.options.rtl===!0&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,o.transformsEnabled===!1?o.$slideTrack.css(s):(s={},o.cssTransitions===!1?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;i.options.vertical===!1?i.options.centerMode===!0&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),i.options.centerMode===!0&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),i.options.vertical===!1&&i.options.variableWidth===!1?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):i.options.variableWidth===!0?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();i.options.variableWidth===!1&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,t.options.rtl===!0?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&i.options.adaptiveHeight===!0&&i.options.vertical===!1){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":"undefined"!=typeof arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),i.options.fade===!1?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=i.options.vertical===!0?"top":"left",
"top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||i.options.useCSS===!0&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&i.animType!==!1&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&i.animType!==!1},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),n.options.centerMode===!0){var r=n.options.slidesToShow%2===0?1:0;e=Math.floor(n.options.slidesToShow/2),n.options.infinite===!0&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=n.options.infinite===!0?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(s.options.fade===!0&&(s.options.centerMode=!1),s.options.infinite===!0&&s.options.fade===!1&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=s.options.centerMode===!0?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));return s||(s=0),t.slideCount<=t.options.slidesToShow?void t.slideHandler(s,!1,!0):void t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(a.animating===!0&&a.options.waitForAnimate===!0||a.options.fade===!0&&a.currentSlide===i))return e===!1&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,a.options.infinite===!1&&a.options.centerMode===!1&&(i<0||i>a.getDotCount()*a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):a.options.infinite===!1&&a.options.centerMode===!0&&(i<0||i>a.slideCount-a.options.slidesToScroll)?void(a.options.fade===!1&&(o=a.currentSlide,t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o))):(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!==0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!==0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=a.getNavTarget(),l=l.slick("getSlick"),l.slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide)),a.updateDots(),a.updateArrows(),a.options.fade===!0?(t!==!0?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight()):void(t!==!0&&a.slideCount>a.options.slidesToShow?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)))},e.prototype.startLoad=function(){var i=this;i.options.arrows===!0&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),i.options.dots===!0&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),o=Math.round(180*t/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0?s.options.rtl===!1?"left":"right":o<=360&&o>=315?s.options.rtl===!1?"left":"right":o>=135&&o<=225?s.options.rtl===!1?"right":"left":s.options.verticalSwiping===!0?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(o.touchObject.edgeHit===!0&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(e.options.swipe===!1||"ontouchend"in document&&e.options.swipe===!1||e.options.draggable===!1&&i.type.indexOf("mouse")!==-1))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,e.options.verticalSwiping===!0&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(l.options.verticalSwiping===!0&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(l.options.rtl===!1?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),l.options.verticalSwiping===!0&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,l.options.infinite===!1&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),l.options.vertical===!1?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,l.options.verticalSwiping===!0&&(l.swipeLeft=e+o*s),l.options.fade!==!0&&l.options.touchMove!==!1&&(l.animating===!0?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;return t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow?(t.touchObject={},!1):(void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,void(t.dragging=!0))},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i,e=this;i=Math.floor(e.options.slidesToShow/2),e.options.arrows===!0&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-e.options.slidesToShow&&e.options.centerMode===!1?(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):e.currentSlide>=e.slideCount-1&&e.options.centerMode===!0&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||"undefined"==typeof s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),"undefined"!=typeof t)return t;return o}});
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.tr = {}));
}(this, function (exports) { 'use strict';

  var fp = typeof window !== "undefined" && window.flatpickr !== undefined
      ? window.flatpickr
      : {
          l10ns: {}
      };
  var Turkish = {
      weekdays: {
          shorthand: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
          longhand: [
              "Pazar",
              "Pazartesi",
              "Salı",
              "Çarşamba",
              "Perşembe",
              "Cuma",
              "Cumartesi",
          ]
      },
      months: {
          shorthand: [
              "Oca",
              "Şub",
              "Mar",
              "Nis",
              "May",
              "Haz",
              "Tem",
              "Ağu",
              "Eyl",
              "Eki",
              "Kas",
              "Ara",
          ],
          longhand: [
              "Ocak",
              "Şubat",
              "Mart",
              "Nisan",
              "Mayıs",
              "Haziran",
              "Temmuz",
              "Ağustos",
              "Eylül",
              "Ekim",
              "Kasım",
              "Aralık",
          ]
      },
      firstDayOfWeek: 1,
      ordinal: function () {
          return ".";
      },
      rangeSeparator: " - ",
      weekAbbreviation: "Hf",
      scrollTitle: "Artırmak için kaydırın",
      toggleTitle: "Aç/Kapa",
      amPM: ["ÖÖ", "ÖS"]
  };
  fp.l10ns.tr = Turkish;
  var tr = fp.l10ns;

  exports.Turkish = Turkish;
  exports.default = tr;

  Object.defineProperty(exports, '__esModule', { value: true });

}));

!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var n={exports:{}};t(n.exports),e.VanillaModal=n.exports}}(this,function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e){console.error("VanillaModal: "+e)}function i(e,t){return function(n){var i=e.filter(t);return i[0]?i[0][n]:void 0}}function o(){var e=document.createElement("div");return i([{key:"transition",value:"transitionend"},{key:"OTransition",value:"otransitionend"},{key:"MozTransition",value:"transitionend"},{key:"WebkitTransition",value:"webkitTransitionEnd"}],function(t){var n=t.key;return void 0!==e.style[n]})("value")}function s(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.length}function l(e,t){var i=(t||document).querySelector(e);return i||n(e+" not found in document."),i}function a(e,t){e instanceof HTMLElement||n("Not a valid HTML element."),e.setAttribute("class",e.className.split(" ").filter(function(e){return e!==t}).concat(t).join(" "))}function r(e,t){e instanceof HTMLElement||n("Not a valid HTML element."),e.setAttribute("class",e.className.split(" ").filter(function(e){return e!==t}).join(" "))}function d(e){return e&&"string"==typeof e.hash?document.querySelector(e.hash):"string"==typeof e?document.querySelector(e):(n("No selector supplied to open()"),null)}function c(e){return f({},v,e,{transitionEnd:o()})}function u(e,t){for(var n=(e.target.document||e.target.ownerDocument).querySelectorAll(t),i=0;i<n.length;i+=1)for(var o=e.target;o&&o!==document.body;){if(o===n[i])return o;o=o.parentNode}return null}Object.defineProperty(e,"__esModule",{value:!0});var h=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},v={modal:".modal",modalInner:".modal-inner",modalContent:".modal-content",open:"[data-modal-open]",close:"[data-modal-close]",page:"body",class:"modal-visible",loadClass:"vanilla-modal",clickOutside:!0,closeKeys:[27],transitions:!0,transitionEnd:null,onBeforeOpen:null,onBeforeClose:null,onOpen:null,onClose:null},p=function(){function e(n){t(this,e),this.isOpen=!1,this.current=null,this.isListening=!1,this.settings=c(n),this.dom=this.getDomNodes(),this.open=this.open.bind(this),this.close=this.close.bind(this),this.closeKeyHandler=this.closeKeyHandler.bind(this),this.outsideClickHandler=this.outsideClickHandler.bind(this),this.delegateOpen=this.delegateOpen.bind(this),this.delegateClose=this.delegateClose.bind(this),this.listen=this.listen.bind(this),this.destroy=this.destroy.bind(this),this.addLoadedCssClass(),this.listen()}return h(e,[{key:"getDomNodes",value:function(){var e=this.settings,t=e.modal,n=e.page,i=e.modalInner,o=e.modalContent;return{modal:l(t),page:l(n),modalInner:l(i,l(t)),modalContent:l(o,l(t))}}},{key:"addLoadedCssClass",value:function(){a(this.dom.page,this.settings.loadClass)}},{key:"setOpenId",value:function(e){this.dom.page.setAttribute("data-current-modal",e||"anonymous")}},{key:"removeOpenId",value:function(){this.dom.page.removeAttribute("data-current-modal")}},{key:"open",value:function(e,t){var i=this.dom.page,o=this.settings,s=o.onBeforeOpen,l=o.onOpen;this.closeModal(t),this.current instanceof HTMLElement==!1?(this.releaseNode(this.current),this.current=d(e),"function"==typeof s&&s.call(this,t),this.captureNode(this.current),a(i,this.settings.class),this.setOpenId(this.current.id),this.isOpen=!0,"function"==typeof l&&l.call(this,t)):n("VanillaModal target must exist on page.")}},{key:"detectTransition",value:function(){var e=this.dom.modal,t=window.getComputedStyle(e,null);return Boolean(["transitionDuration","oTransitionDuration","MozTransitionDuration","webkitTransitionDuration"].filter(function(e){return"string"==typeof t[e]&&parseFloat(t[e])>0}).length)}},{key:"close",value:function(e){var t=this.settings,n=t.transitions,i=t.transitionEnd,o=t.onBeforeClose,s=this.detectTransition();this.isOpen&&(this.isOpen=!1,"function"==typeof o&&o.call(this,e),r(this.dom.page,this.settings.class),n&&i&&s?this.closeModalWithTransition(e):this.closeModal(e))}},{key:"closeModal",value:function(e){var t=this.settings.onClose;this.removeOpenId(this.dom.page),this.releaseNode(this.current),this.isOpen=!1,this.current=null,"function"==typeof t&&t.call(this,e)}},{key:"closeModalWithTransition",value:function(e){var t=this,n=this.dom.modal,i=this.settings.transitionEnd;n.addEventListener(i,function o(){n.removeEventListener(i,o),t.closeModal(e)})}},{key:"captureNode",value:function(e){for(var t=this.dom.modalContent;e.childNodes.length;)t.appendChild(e.childNodes[0])}},{key:"releaseNode",value:function(e){for(var t=this.dom.modalContent;t.childNodes.length;)e.appendChild(t.childNodes[0])}},{key:"closeKeyHandler",value:function(e){var t=this.settings.closeKeys;s(t)&&t.indexOf(e.which)>-1&&!0===this.isOpen&&(e.preventDefault(),this.close(e))}},{key:"outsideClickHandler",value:function(e){var t=this.settings.clickOutside,n=this.dom.modalInner;if(t){for(var i=e.target;i&&i!==document.body;){if(i===n)return;i=i.parentNode}this.close(e)}}},{key:"delegateOpen",value:function(e){var t=u(e,this.settings.open);t&&(e.preventDefault(),this.open(t,e))}},{key:"delegateClose",value:function(e){u(e,this.settings.close)&&(e.preventDefault(),this.close(e))}},{key:"listen",value:function(){var e=this.dom.modal;this.isListening?n("Event listeners already applied."):(e.addEventListener("click",this.outsideClickHandler,!1),document.addEventListener("keydown",this.closeKeyHandler,!1),document.addEventListener("click",this.delegateOpen,!1),document.addEventListener("click",this.delegateClose,!1),this.isListening=!0)}},{key:"destroy",value:function(){var e=this.dom.modal;this.isListening?(this.close(),e.removeEventListener("click",this.outsideClickHandler),document.removeEventListener("keydown",this.closeKeyHandler),document.removeEventListener("click",this.delegateOpen),document.removeEventListener("click",this.delegateClose),this.isListening=!1):n("Event listeners already removed.")}}]),e}();e.default=p});