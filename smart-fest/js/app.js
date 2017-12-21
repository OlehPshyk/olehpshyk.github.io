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
	contactSubmit.addEventListener("click", { handleEvent: checkSubmitContactForm });
}
function checkSubmitContactForm(e) {
	e.preventDefault();
	var check = true,
	    focus = true;

	if (contactName.value == "") {
		contactName.classList.add("invalid");
		check = false;
		if (focus) {
			contactName.focus();
			focus = false;
		}
	} else if (contactName.classList.contains("invalid")) contactName.classList.remove("invalid");

	if (!isValidEmailAddress(contactEmail.value)) {
		contactEmail.classList.add("invalid");
		check = false;
		if (focus) {
			contactEmail.focus();
			focus = false;
		}
	} else if (contactEmail.classList.contains("invalid")) contactEmail.classList.remove("invalid");

	if (contactText.value == "") {
		contactText.classList.add("invalid");
		check = false;
		if (focus) {
			contactText.focus();
			focus = false;
		}
	} else if (contactText.classList.contains("invalid")) contactText.classList.remove("invalid");

	if (check) submitSuccess();
}
function isValidEmailAddress(email) {
	var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return pattern.test(email);
}
function submitSuccess() {
	if (contactSuccess !== null && !contactSuccess.classList.contains("ok")) {
		contactSuccess.classList.add("ok");
	}
	//contactForm.submit();	   //???  Without reloading the page
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
		return el.addEventListener("click", { handleEvent: openNotifiedModal1 });
	});
}
function openNotifiedModal1(e) {
	e.preventDefault();
	if (getNotifiedModal1 !== null && !getNotifiedModal1.classList.contains("on")) getNotifiedModal1.classList.add("on");
}
/*=============================================================================*/
//					CANCEL MODAL(SMALL) CONTACT FORM
/*=============================================================================*/
if (cancelModal1Button !== null) {
	cancelModal1Button.addEventListener("click", { handleEvent: closeNotifiedModal1 });
}
function closeNotifiedModal1(e) {
	e.preventDefault();
	if (getNotifiedModal1 !== null && getNotifiedModal1.classList.contains("on")) getNotifiedModal1.classList.remove("on");
	resetInvalid();
}
/*=============================================================================*/
//					MODAL(SMALL) CONTACT FORM SUBMIT WITH JS VALIDATION
/*=============================================================================*/

if (submitNotified !== null) {
	submitNotified.addEventListener("click", { handleEvent: checkSubmitFormModal });
}
//keydown Enter key in form
formModal.addEventListener("keydown", function (e) {
	if (event.keyCode === 13) {
		e.preventDefault();
		checkSubmitFormModal(e);
	}
});
function checkSubmitFormModal(e) {
	e.preventDefault();
	var checkM = true,
	    focusM = true;
	if (notifiedName.value == "") {
		notifiedName.classList.add("invalid");
		checkM = false;
		if (focusM) {
			notifiedName.focus();
			focusM = false;
		}
	} else if (notifiedName.classList.contains("invalid")) notifiedName.classList.remove("invalid");

	if (!isValidEmailAddress(notifiedEmail.value)) {
		notifiedEmail.classList.add("invalid");
		checkM = false;
		if (focusM) {
			notifiedEmail.focus();
			focusM = false;
		}
	} else if (notifiedEmail.classList.contains("invalid")) notifiedEmail.classList.remove("invalid");

	if (checkM) {
		openNotifiedModal2(e);
		//formModal.submit();	   //???  Without reloading the page
	}
}
function resetInvalid() {
	if (notifiedName.classList.contains("invalid")) notifiedName.classList.remove("invalid");
	if (notifiedEmail.classList.contains("invalid")) notifiedEmail.classList.remove("invalid");
}
function openNotifiedModal2(e) {
	if (getNotifiedModal2 !== null && !getNotifiedModal2.classList.contains("on")) getNotifiedModal2.classList.add("on");
	closeNotifiedModal1(e);
	document.addEventListener("click", function (event) {
		var target = findClosest(event.target, function (el) {
			return el.id == "getNotified2";
		});
		if (!target) {
			closeNotifiedModal2();
		}
	}, true);
}
function findClosest(element, fn) {
	if (!element) return undefined;
	return fn(element) ? element : findClosest(element.parentElement, fn);
}
function closeNotifiedModal2() {
	if (getNotifiedModal2 !== null && getNotifiedModal2.classList.contains("on")) getNotifiedModal2.classList.remove("on");
}