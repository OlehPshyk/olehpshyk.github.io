"use strict";

// capcha initialize
var captchaImageCode = document.getElementById("CaptchaImageCode"),
    userCaptchaCode = document.getElementById("UserCaptchaCode"),
    wrongCaptchaError = document.getElementById("WrongCaptchaError"),
    successMessage = document.getElementById("SuccessMessage"),
    form = document.getElementById("form"),
    reloadBtn = document.getElementById("ReloadBtn");
var cd;
CreateCaptcha();
form && form.addEventListener("submit", checkForm);
reloadBtn && reloadBtn.addEventListener("click", CreateCaptcha);

function checkForm(e) {
	ValidateCaptcha() ? goodCapcha(e) : badCapcha(e);
}
function goodCapcha(e) {
	//console.log("submit");
	//e.preventDefault();

	if (userCaptchaCode) {
		userCaptchaCode.value = "";
		userCaptchaCode.setAttribute("placeholder", "Kodu giriniz");
	}

	CreateCaptcha();
	if (wrongCaptchaError) {
		wrongCaptchaError.style.display = "none";
	}
	if (successMessage) {
		successMessage.style.display = "block";
	}
	submitForm();
}
function submitForm() {
	// var data = new FormData(form);

	// var request = new XMLHttpRequest();

	// request.onreadystatechange = function(){
	//   document.getElementById("result").innerText = request.responseText;
	// }

	// request.open(form.method, form.action);
	// request.send(data);

	form && form.submit();
}
function badCapcha(e) {
	e.preventDefault();
	if (userCaptchaCode && userCaptchaCode.value == "" || userCaptchaCode.value == null || userCaptchaCode.value == "undefined") {
		if (wrongCaptchaError) {
			wrongCaptchaError.innerHTML = "Please enter code given below in a picture.";
			wrongCaptchaError.style.display = 'block';
		}
		userCaptchaCode && userCaptchaCode.focus();
	} else {
		if (wrongCaptchaError) {
			wrongCaptchaError.innerHTML = "Invalid Captcha! Please try again.";
			wrongCaptchaError.style.display = 'block';
		}
		CreateCaptcha();
		userCaptchaCode && userCaptchaCode.focus();
	}
}
// Create Captcha
function CreateCaptcha() {
	var alpha = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
	var i;
	for (i = 0; i < 6; i++) {
		var a = alpha[Math.floor(Math.random() * alpha.length)];
		var b = alpha[Math.floor(Math.random() * alpha.length)];
		var c = alpha[Math.floor(Math.random() * alpha.length)];
		var d = alpha[Math.floor(Math.random() * alpha.length)];
		var e = alpha[Math.floor(Math.random() * alpha.length)];
		var f = alpha[Math.floor(Math.random() * alpha.length)];
	}
	cd = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f;
	if (captchaImageCode) {
		while (captchaImageCode.firstChild) {
			captchaImageCode.removeChild(captchaImageCode.firstChild);
		}
	}
	//.append('<canvas id="CapCode" class="capcode"></canvas>')
	var canvas = document.createElement('canvas');
	if (canvas) {
		canvas.id = "CapCode";
		canvas.setAttribute("class", "capcode");
		captchaImageCode && captchaImageCode.appendChild(canvas);
		var c = document.getElementById("CapCode");
		if (c) {
			var ctx = c.getContext("2d"),
			    x = c.width / 2,
			    img = new Image();
			img.src = "./img/salvage-tileable-and-seamless-pattern.jpg";
			img.onload = function () {
				var pattern = ctx.createPattern(img, "repeat");
				ctx.fillStyle = pattern;
				ctx.fillRect(0, 0, c.width, c.height);
				ctx.font = "46px Titillium Web";
				ctx.fillStyle = '#ccc';
				ctx.textAlign = 'center';
				ctx.setTransform(1, -0.12, 0, 1, 0, 50);
				ctx.fillText(cd, x, 55);
			};
		}
	}
}
// Validate Captcha
function ValidateCaptcha() {
	var string1 = removeSpaces(cd);
	var string2 = removeSpaces(userCaptchaCode.value);
	if (string1 == string2) {
		return true;
	} else {
		return false;
	}
}
// Remove Spaces
function removeSpaces(string) {
	return string.split(' ').join('');
}
//Check Captcha
// function CheckCaptcha() {	
// 	var result = ValidateCaptcha();
// 	if( userCaptchaCode.value == "" || userCaptchaCode.value == null || userCaptchaCode.value == "undefined") {
// 		wrongCaptchaError.innerHTML="Please enter code given below in a picture.";
// 		wrongCaptchaError.style.display = 'block';		
// 	    userCaptchaCode.focus();
// 	} else {
// 	    if(result == false) { 
// 	    	wrongCaptchaError.innerHTML = "Invalid Captcha! Please try again.";
// 	    	wrongCaptchaError.style.display = 'block';
// 	    	CreateCaptcha();
// 	    	userCaptchaCode.focus();	    	
// 	    }
// 	    else { 
// 	    	userCaptchaCode.value = "";
// 	    	userCaptchaCode.setAttribute("placeholder", "Kodu giriniz");
// 	    	CreateCaptcha();
// 	    	wrongCaptchaError.style.display = "none";
// 	    	successMessage.style.display = "block";
// 	    }
// 	}
// }