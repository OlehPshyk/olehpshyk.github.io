"use strict";

/*=============================================================================*/
//					CONTACT FORM SUBMIT WITH JS VALIDATION
/*=============================================================================*/
var contactSubmit = document.querySelector(".submit-send"),
    contactSuccess = document.querySelector(".contact-success"),
    contactForm = document.querySelector("#contact-form"),
    contactName = document.querySelector("#contact-name"),
    contactEmail = document.querySelector("#contact-email"),
    contactText = document.querySelector("#contact-text");
if (contactSubmit !== null) {
	contactSubmit.addEventListener("click", handlerSubmitContactForm);
	contactName.addEventListener("keydown", handlerEnter);
	contactEmail.addEventListener("keydown", handlerEnter);
}
function handlerSubmitContactForm(e) {
	e.preventDefault();
	checkSubmitContactForm();
}
//keydown Enter key in input form 
function handlerEnter(e) {
	e = e || window.event;
	if (e.keyCode === 13) {
		//console.log("Enter key pressed.");
		e.preventDefault();
		checkSubmitContactForm();
	}
}
function checkSubmitContactForm() {
	var check = true,
	    focus = true;
	if (!isValidText(contactName.value)) {
		contactName.classList.add("invalid");
		check = false;
		if (focus) {
			contactName.focus();
			focus = false;
		}
	} else resetContactInvalidName();

	if (!isValidEmailAddress(contactEmail.value)) {
		contactEmail.classList.add("invalid");
		check = false;
		if (focus) {
			contactEmail.focus();
			focus = false;
		}
	} else resetContactInvalidEmail();

	if (!isValidText(contactText.value)) {
		contactText.classList.add("invalid");
		check = false;
		if (focus) {
			contactText.focus();
			focus = false;
		}
	} else resetContactInvalidText();

	if (check) submitSuccess();
}
function resetContactInvalidName() {
	if (contactName.classList.contains("invalid")) contactName.classList.remove("invalid");
}
function resetContactInvalidEmail() {
	if (contactEmail.classList.contains("invalid")) contactEmail.classList.remove("invalid");
}
function resetContactInvalidText() {
	if (contactText.classList.contains("invalid")) contactText.classList.remove("invalid");
}
function isValidEmailAddress(email) {
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(email);
}
function isValidText(e) {
	var testE = e.replace(/[\s]+/g, ''); // not enter any letter or enter only whitespace			
	return testE == "" ? false : true;
}
contactName.oninput = function () {
	if (contactName.classList.contains("invalid")) {
		contactName.classList.remove("invalid");
	}
	if (!isValidText(contactName.value)) {
		contactName.classList.add("invalid");
	}
};
contactEmail.oninput = function () {
	if (contactEmail.classList.contains("invalid")) {
		contactEmail.classList.remove("invalid");
	}
	if (!isValidEmailAddress(contactEmail.value)) {
		contactEmail.classList.add("invalid");
	}
};
contactText.oninput = function () {
	if (contactText.classList.contains("invalid")) {
		contactText.classList.remove("invalid");
	}
	if (!isValidText(contactText.value)) {
		contactText.classList.add("invalid");
	}
};
function submitSuccess() {
	//contactForm.submit();	   //???  With reloading the page or XMLHttpRequest  ???
	//передача даних з форми, уточнити як саме(на чому стоятиме цей лендінг?)
	if (contactSuccess !== null && !contactSuccess.classList.contains("ok")) {
		contactSuccess.classList.add("ok");
		contactSubmit.removeEventListener("click", handlerSubmitContactForm);
		contactName.removeEventListener("keydown", handlerEnter);
		contactEmail.removeEventListener("keydown", handlerEnter);
	}
}

/*=============================================================================*/
//					OPEN MODAL(SMALL) CONTACT FORM
/*=============================================================================*/
var getNotified = document.querySelectorAll(".notified-btn"),
    getNotifiedModal1 = document.querySelector(".getNotifiedModal1"),
    cancelModal1Button = document.querySelector(".cancel-modal1-button"),
    submitNotified = document.querySelector(".submit-notified"),
    getNotifiedModal2 = document.querySelector(".getNotifiedModal2"),
    formModal = document.querySelector("#form-modal"),
    notifiedName = document.querySelector("#notified-name"),
    notifiedEmail = document.querySelector("#notified-email");

if (getNotified.lenght !== 0) {
	getNotified.forEach(function (el) {
		return el.addEventListener("click", openNotifiedModal1);
	});
}
function openNotifiedModal1() {
	//changed animation to use requestAnimationFrame
	// if( (getNotifiedModal1 !== null) && (!getNotifiedModal1.classList.contains("on")) ){
	// 	getNotifiedModal1.classList.add("on");
	if (getNotifiedModal1 !== null) {
		fadeIn(getNotifiedModal1, "flex");
		submitNotified.focus();
		cancelModal1Button.addEventListener("click", handlerCloseNotifiedModal1);
		getNotifiedModal1.addEventListener("click", handlerClickOutModal1);
		notifiedName.addEventListener("keydown", handlerEnterModal);
		notifiedEmail.addEventListener("keydown", handlerEnterModal);
		document.addEventListener("keydown", handlerEscModal1);
	}
}
/*=============================================================================*/
//					CANCEL MODAL(SMALL) CONTACT FORM
/*=============================================================================*/
function handlerCloseNotifiedModal1(e) {
	e.preventDefault();
	getNotifiedModal1.removeEventListener("keydown", handlerEscModal1);
	closeNotifiedModal1();
}
function closeNotifiedModal1() {
	//changed animation to use requestAnimationFrame
	//if( (getNotifiedModal1 !== null) && (getNotifiedModal1.classList.contains("on")) ){
	if (getNotifiedModal1 !== null && getNotifiedModal1.style.opacity >= 1) {
		document.removeEventListener("keydown", handlerEscModal1);
		getNotifiedModal1.removeEventListener("click", handlerClickOutModal1);
		notifiedName.removeEventListener("keydown", handlerEnterModal);
		notifiedEmail.removeEventListener("keydown", handlerEnterModal);
		//getNotifiedModal1.classList.remove("on");	
		fadeOut(getNotifiedModal1);
		resetNotifiedInvalid();
	}
}
// key  ESC in getNotifiedModal1 pressed
function handlerEscModal1(e) {
	e = e || window.event;
	if (e.keyCode == 27) {
		//console.log("Esc key pressed.");
		e.preventDefault();
		closeNotifiedModal1();
	}
}
/*=============================================================================*/
//					MODAL(SMALL) CONTACT FORM SUBMIT WITH JS VALIDATION
/*=============================================================================*/

if (submitNotified !== null) {
	submitNotified.addEventListener("click", handlerCheckSubmitFormModal);
}
//keydown Enter key in input form 
function handlerEnterModal(e) {
	e = e || window.event;
	if (e.keyCode === 13) {
		//console.log("Enter key pressed.");
		e.preventDefault();
		checkSubmitFormModal();
	}
}
function handlerCheckSubmitFormModal(e) {
	e.preventDefault();
	checkSubmitFormModal();
}
function checkSubmitFormModal() {
	var checkM = true,
	    focusM = true;
	if (!isValidText(notifiedName.value)) {
		notifiedName.classList.add("invalid");
		checkM = false;
		if (focusM) {
			notifiedName.focus();
			focusM = false;
		}
	} else resetNotifiedInvalidName();

	if (!isValidEmailAddress(notifiedEmail.value)) {
		notifiedEmail.classList.add("invalid");
		checkM = false;
		if (focusM) {
			notifiedEmail.focus();
			focusM = false;
		}
	} else resetNotifiedInvalidEmail();

	if (checkM) {
		//formModal.submit();	   // With reloading the page or XMLHttpRequest
		//передача даних з форми, уточнити як саме(на чому стоятиме цей лендінг?)
		openNotifiedModal2();
	}
}
notifiedName.oninput = function () {
	resetNotifiedInvalidName();
	if (!isValidText(notifiedName.value)) {
		notifiedName.classList.add("invalid");
	}
};
notifiedEmail.oninput = function () {
	resetNotifiedInvalidEmail();
	if (!isValidEmailAddress(notifiedEmail.value)) {
		notifiedEmail.classList.add("invalid");
	}
};
function resetNotifiedInvalid() {
	resetNotifiedInvalidName();
	resetNotifiedInvalidEmail();
}
function resetNotifiedInvalidName() {
	if (notifiedName.classList.contains("invalid")) notifiedName.classList.remove("invalid");
}
function resetNotifiedInvalidEmail() {
	if (notifiedEmail.classList.contains("invalid")) notifiedEmail.classList.remove("invalid");
}
function openNotifiedModal2() {
	// if( (getNotifiedModal2 !== null) && (!getNotifiedModal2.classList.contains("on")) ){		
	// 	getNotifiedModal2.classList.add("on");
	if (getNotifiedModal2 !== null) {
		fadeIn(getNotifiedModal2, "flex");
		closeNotifiedModal1();
		getNotifiedModal2.addEventListener("click", handlerClickOutModal2);
		document.addEventListener("keydown", handlerEscModal2);
	}
}
function closeNotifiedModal2() {
	//if( (getNotifiedModal2 !== null) && (getNotifiedModal2.classList.contains("on")) ){
	if (getNotifiedModal2 !== null && getNotifiedModal2.style.opacity >= 1) {
		getNotifiedModal2.removeEventListener("click", handlerClickOutModal2);
		document.removeEventListener("keydown", handlerEscModal2);
		//getNotifiedModal2.classList.remove("on");
		fadeOut(getNotifiedModal2);
	}
}
// key  ESC in getNotifiedModal2 pressed
function handlerEscModal2(e) {
	e = e || window.event;
	if (e.keyCode == 27) {
		//console.log("Esc key pressed.");
		e.preventDefault();
		resetValue();
		closeNotifiedModal2();
	}
}
// click OUT of getNotifiedModal1 / getNotifiedModal2 
function handlerClickOutModal1(e) {
	var target = findClosest(e.target, function (el) {
		//console.log("click IN!!!");
		return el.id == "getNotified1";
	});
	if (!target) {
		//console.log("click OUT!!!");
		resetValue();
		closeNotifiedModal1();
	}
}
function handlerClickOutModal2(e) {
	var target = findClosest(e.target, function (el) {
		//console.log("click IN!!!");
		return el.id == "getNotified2";
	});
	if (!target) {
		//console.log("click OUT!!!");
		resetValue();
		closeNotifiedModal2();
	}
}
function findClosest(element, fn) {
	if (!element) return undefined;
	return fn(element) ? element : findClosest(element.parentElement, fn);
}
function resetValue() {
	notifiedName.value = "";
	notifiedEmail.value = "";
}

/*=============================================================================*/
//					SCROLL TO ELEMENT (linear,
//										easeInQuad, easeOutQuad, easeInOutQuad,
//										easeInCubic, easeOutCubic, easeInOutCubic,
//										easeInQuart, easeOutQuart, easeInOutQuart,
//										easeInQuint, easeOutQuint, easeInOutQuint)
/*=============================================================================*/
function scrollIt(destination) {
	var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
	var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'linear';
	var callback = arguments[3];


	var easings = {
		linear: function linear(t) {
			return t;
		},
		easeInQuad: function easeInQuad(t) {
			return t * t;
		},
		easeOutQuad: function easeOutQuad(t) {
			return t * (2 - t);
		},
		easeInOutQuad: function easeInOutQuad(t) {
			return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
		},
		easeInCubic: function easeInCubic(t) {
			return t * t * t;
		},
		easeOutCubic: function easeOutCubic(t) {
			return --t * t * t + 1;
		},
		easeInOutCubic: function easeInOutCubic(t) {
			return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
		},
		easeInQuart: function easeInQuart(t) {
			return t * t * t * t;
		},
		easeOutQuart: function easeOutQuart(t) {
			return 1 - --t * t * t * t;
		},
		easeInOutQuart: function easeInOutQuart(t) {
			return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
		},
		easeInQuint: function easeInQuint(t) {
			return t * t * t * t * t;
		},
		easeOutQuint: function easeOutQuint(t) {
			return 1 + --t * t * t * t * t;
		},
		easeInOutQuint: function easeInOutQuint(t) {
			return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
		}
	};
	var start = window.pageYOffset;
	var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
	var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
	var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
	var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
	var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
	//const destinationOffsetToScroll = documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset;


	if ('requestAnimationFrame' in window === false) {
		window.scroll(0, destinationOffsetToScroll);
		if (callback) {
			callback();
		}
		return;
	}

	function scroll() {
		var now = 'now' in window.performance ? performance.now() : new Date().getTime();
		var time = Math.min(1, (now - startTime) / duration);
		var timeFunction = easings[easing](time);
		window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

		if (window.pageYOffset === destinationOffsetToScroll) {
			if (callback) {
				callback();
			}
			return;
		}

		requestAnimationFrame(scroll);
	}

	scroll();
}

/*=============================================================================*/
//					SCROLL TO “Why SmartFest?”
/*=============================================================================*/
document.querySelector(".link-learn").addEventListener("click", function (e) {
	e.preventDefault();
	scrollIt(document.querySelector("#whySmartFest"), 1000, "easeOutQuad"
	//"linear"		
	//,() => console.log(`Finished scrolling to ${window.pageYOffset}px`)
	);
});

/*=============================================================================*/
//					FADE OUT
/*=============================================================================*/
function fadeOut(el) {
	el.style.opacity = 1;
	(function fade() {
		if ((el.style.opacity -= .04) < 0) {
			// .01 --  .1
			el.style.display = "none";
			el.style.opacity = 0; //for situation -0.001
		} else {
			requestAnimationFrame(fade);
		}
	})();
}

/*=============================================================================*/
//					FADE IN
/*=============================================================================*/
function fadeIn(el, display) {
	el.style.opacity = 0;
	el.style.display = display || "block";
	(function fade() {
		var val = parseFloat(el.style.opacity);
		if (!((val += .04) > 1)) {
			// .01 --  .1
			el.style.opacity = val;
			requestAnimationFrame(fade);
		} else {
			el.style.opacity = 1; //for situation 0.999
		}
	})();
}