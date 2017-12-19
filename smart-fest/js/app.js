"use strict";

var getNotified = document.querySelectorAll(".notified"),
    getNotifiedModal1 = document.querySelector(".getNotifiedModal1"),
    cancelModal1Button = document.querySelector(".cancel-modal1-button"),
    submitNotified = document.querySelector(".getNotifiedModal1 .submit-button"),
    getNotifiedModal2 = document.querySelector(".getNotifiedModal2");

function openNotifiedModal1(e) {
	e.preventDefault();
	if (getNotifiedModal1 !== null && !getNotifiedModal1.classList.contains("on")) getNotifiedModal1.classList.add("on");
}

if (getNotified.lenght !== 0) {
	getNotified.forEach(function (el) {
		return el.addEventListener("click", { handleEvent: openNotifiedModal1 });
	});
}

function closeNotifiedModal1(e) {
	e.preventDefault();
	if (getNotifiedModal1 !== null && getNotifiedModal1.classList.contains("on")) getNotifiedModal1.classList.remove("on");
}
function closeNotifiedModal2() {
	if (getNotifiedModal2 !== null && getNotifiedModal2.classList.contains("on")) getNotifiedModal2.classList.remove("on");
}
if (cancelModal1Button !== null) {
	cancelModal1Button.addEventListener("click", { handleEvent: closeNotifiedModal1 });
}
function findClosest(element, fn) {
	if (!element) return undefined;
	return fn(element) ? element : findClosest(element.parentElement, fn);
}
function openNotifiedModal2(e) {
	e.preventDefault();
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

if (submitNotified !== null) {
	submitNotified.addEventListener("click", { handleEvent: openNotifiedModal2 });
}

var contactSubmit = document.querySelector(".contact .submit-button"),
    contact = document.querySelector(".contact"),
    success = document.querySelector(".success");
function submitsuccess(e) {
	e.preventDefault();
	if (contact !== null && !contact.classList.contains("off")) {
		contact.classList.add("off");
	}
	if (success !== null && success.classList.contains("off")) {
		success.classList.remove("off");
	}
}
if (contactSubmit !== null) {
	contactSubmit.addEventListener("click", { handleEvent: submitsuccess });
}