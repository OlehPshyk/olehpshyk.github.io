
/*=======================================================*/
// BUTTONS CLICK
/*=======================================================*/
// add class mobile-menu-dropped to #header   (small screen)
function dropped() {
	document.querySelector("#header").classList.toggle("mobile-menu-dropped");    			
}
// add class large-dropdown to #header   (large screen)
function dropdown(){
	var el = document.querySelector("#header");
	el.classList.toggle("large-dropdown"); 
}
// for mobile button "menu-button"
document.querySelector(".menu-button").addEventListener("click", dropped);

// for mobile button "close-button"
document.querySelector(".close-button").addEventListener("click", dropped);

/*=======================================================*/
// HOVER mouseover & mouseout
/*=======================================================*/
// Vice Versa Art Books
var logo = document.querySelector(".logo"),
	hoverArt = document.querySelector(".hover-art"),
	testHeader = document.querySelector("#header");
			
// check if mobile menu	dropped?
function isMobileDrop(el) {
  	return ( el.classList.contains('mobile-menu-dropped') ? true : false );
}
function isLargeDrop(el) {
  	return ( el.classList.contains('large-dropdown') ? true : false );
}

function addArt() {	
 	if(hoverArt !== null){
		if ( (!hoverArt.classList.contains("on")) && (!isMobileDrop(testHeader)) && (!isLargeDrop(testHeader)) ){
			//hoverArt.classList.add("on"); 
			setTimeout(function(){hoverArt.classList.add("on");}, 200);		   			
		} 
	} 			
}

function removeArt() {
	if(hoverArt !== null){
		if (hoverArt.classList.contains("on")){
			//hoverArt.classList.remove("on");
			setTimeout(function(){hoverArt.classList.remove("on");}, 500);		   			
		}
	}
}
if(logo !== null){
	logo.addEventListener("mouseover", addArt);
	logo.addEventListener("mouseout", removeArt);
}

/*=======================================================*/
// LOGINNED mouseover & mouseout
/*=======================================================*/
// LOGINNED MAIL DISPLAY
var loginned = document.querySelector(".loginned"),
	hoverLoginned = document.querySelector(".hover-loginned");
	// testHeader = document.querySelector("#header"); //already is ready before

function addLoginned() {	
 	if(hoverLoginned !== null){
		if ( (!hoverLoginned.classList.contains("on")) && (!isMobileDrop(testHeader)) && (!isLargeDrop(testHeader)) ){
			//hoverLoginned.classList.add("on"); 
			setTimeout(function(){hoverLoginned.classList.add("on");}, 200);		   			
		} 
	} 			
}

function removeLoginned() {
	if(hoverLoginned !== null){
		if (hoverLoginned.classList.contains("on")){
			//hoverLoginned.classList.remove("on");
			setTimeout(function(){hoverLoginned.classList.remove("on");}, 500);		   			
		}
	}
}
if(loginned !== null){
	loginned.addEventListener("mouseover", addLoginned);
	loginned.addEventListener("mouseout", removeLoginned);
}

/*=======================================================*/
// FOOTER-REVEAL
/*=======================================================*/
$('footer').footerReveal();



<!-- REVEAL -->
if (window.innerWidth > 900){		//only on large screen			
	window.sr = ScrollReveal({ reset: false,
							   viewFactor: 0.4,
							   opacity: 0,
							   scale: 0,
							   origin: 'bottom',
							   distance: '50px',
							   duration: 1000,
							   delay: 100,
							   mobile: true});
	sr.reveal('.reveal-v1');
} 
else {
	window.sr = ScrollReveal({ reset: false,
							   viewFactor: 0.3,
							   opacity: 0,	
							   scale: 0,						   
							   origin: 'bottom',
							   distance: '50px',
							   duration: 1000,
							   delay: 100,
							   mobile: true});
	sr.reveal('.reveal-v1');
}
/*=======================================================*/
