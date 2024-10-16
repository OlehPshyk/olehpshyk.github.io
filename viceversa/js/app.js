
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
	idHeader = document.querySelector("#header"),	
	artTimeoutAdd, artTimeoutRemove;	
			
// check if mobile menu	dropped?
function isMobileDrop(el) {
  	return ( el.classList.contains('mobile-menu-dropped') ? true : false );
}
// check if admin menu	dropped?
function isLargeDrop(el) {
  	return ( el.classList.contains('large-dropdown') ? true : false );
}
function addArt() {		
	if ( idHeader.classList.contains("hoverArt") )
		clearTimeout(artTimeoutRemove);	
 	if(idHeader !== null){
		if ( (!idHeader.classList.contains("hoverArt")) && (!isMobileDrop(idHeader)) && (!isLargeDrop(idHeader)) ){				   			
			artTimeoutAdd = window.setTimeout(function(){idHeader.classList.add("hoverArt");}, 400);							
			//idHeader.classList.add("hoverArt");
		} 
	}	
}
function removeArt() {	
	if ( !idHeader.classList.contains("hoverArt") )
		clearTimeout(artTimeoutAdd);		
	if(idHeader !== null){
		if (idHeader.classList.contains("hoverArt")){						
			artTimeoutRemove = window.setTimeout(function(){idHeader.classList.remove("hoverArt");}, 500);			
			//idHeader.classList.remove("hoverArt");		   			
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
	hoverLoginned = document.querySelector(".hover-loginned"),
	loginnedTimeoutAdd, loginnedTimeoutRemove;	
	// idHeader = document.querySelector("#header"); //already is ready before
	

function addLoginned() {
	if ( idHeader.classList.contains("hoverLoginned") )
		clearTimeout(loginnedTimeoutRemove);		
 	if(idHeader !== null){
		if ( (!idHeader.classList.contains("hoverLoginned")) && (!isMobileDrop(idHeader)) && (!isLargeDrop(idHeader)) ){			
			loginnedTimeoutAdd = window.setTimeout(function(){idHeader.classList.add("hoverLoginned");}, 400);		
			//idHeader.classList.add("hoverLoginned");
		} 
	} 			
}

function removeLoginned() {
	if ( !idHeader.classList.contains("hoverLoginned") )
		clearTimeout(loginnedTimeoutAdd);
	if(idHeader !== null){
		if (idHeader.classList.contains("hoverLoginned")){			
			loginnedTimeoutRemove = window.setTimeout(function(){idHeader.classList.remove("hoverLoginned");}, 500);	
			//idHeader.classList.remove("hoverLoginned");	   			
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
if (window.innerWidth > 1199){		//only on large screen			
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
//FADE-IN EFFECT  (JS only)  FIRST VARIANT
/*=======================================================*/
		
var body = document.querySelector("body");
if ( body.classList.contains("fade-out") ) {
	document.addEventListener("DOMContentLoaded", function(){body.classList.remove("fade-out")});				
}

/*=======================================================*/
//  OFF SCROLLING
/*=======================================================*/
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}
function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}
/*=======================================================*/
//  SEARCH & NEWSLETTER	
/*=======================================================*/
var aSearch = document.querySelectorAll(".search"),
	aNewslatter = document.querySelectorAll(".newslatter"),
	search = document.querySelector("#search"),
	newslatter = document.querySelector("#newslatter"),
	antiblick = document.querySelector("#antiblick"),
	searchTime, newslatterTime, searchTimeCancel, newslatterTimeCancel,
	closeSearch = document.querySelector(".closeSearch"),
	closeNewslatter = document.querySelector(".closeNewslatter"),
	subscribe = document.querySelector("#subscribe");
	

function addActiveSerch(i) {
	if ( (aSearch[i] !== null) && (!aSearch[i].classList.contains("active")) ) {
		aSearch[i].classList.add("active");
	}
}
function addActiveNewslatter(i) {
	if ( (aNewslatter[i] !== null) && (!aNewslatter[i].classList.contains("active")) ) {
		aNewslatter[i].classList.add("active");
	}
}
function removeActiveSerch() {
	if(aSearch.lenght !== 0){
		aSearch.forEach(function(el){
			if ( (el !== null) && (el.classList.contains("active")) ) {
				el.classList.remove("active");
			}	
		});	
	}
}
function removeActiveNewslatter() {
	if(aNewslatter.lenght !== 0){
		aNewslatter.forEach(function(el){
			if ( (el !== null) && (el.classList.contains("active")) ) {
				el.classList.remove("active");
			}	
		});			
	}
}
function isSearchOpen() {
	return ( ((search !== null) && (search.classList.contains("fade-in"))) ? true : false );
}
function isNewsletterOpen() {	
	return ( ((newslatter !== null) && (newslatter.classList.contains("fade-in"))) ? true : false );
}
function showSearch(e) {
	//console.log(e, this.index);
	e.preventDefault(); //return false statement for <a href="">
	disableScroll();
	document.querySelectorAll('#search .input').forEach( function(f){f.focus()} );
	if (search !== null) {
		clearTimeout(searchTime);
		search.classList.add("fade-in");
		search.classList.remove("fade-out");
		addActiveSerch(this.index);
	}			
	if ( isNewsletterOpen() ){
		if (antiblick !== null) {
			antiblick.classList.add("on");
		}
		newslatter.classList.remove("fade-in");
		newslatter.classList.add("fade-out");
		newslatterTime = window.setTimeout(function(){newslatter.classList.remove("fade-out");}, 800);
		removeActiveNewslatter();		//all small & large
	} 	
}
function showNewslatter(e) {
	//console.log(e, this.index);
	e.preventDefault(); //return false statement for <a href="">
	disableScroll();
	document.querySelectorAll('#newslatter .input').forEach( function(f){f.focus()} );
	if (newslatter !== null) {
		clearTimeout(newslatterTime);		
		newslatter.classList.add("fade-in");
		newslatter.classList.remove("fade-out");
		addActiveNewslatter(this.index);
	}			
	if ( (search !== null) && (search.classList.contains("fade-in")) ){
		if (antiblick !== null) {
			antiblick.classList.add("on");
		}
		search.classList.remove("fade-in");
		search.classList.add("fade-out");
		searchTime = window.setTimeout(function(){search.classList.remove("fade-out");}, 800);	
		removeActiveSerch();		//all small & large	
	} 		
}
if(aSearch.lenght !== 0){
	aSearch.forEach(function(el, index){el.addEventListener("click", {handleEvent: showSearch, index})});		
}
if(aNewslatter.lenght !== 0){
	aNewslatter.forEach(function(el, index){el.addEventListener("click", {handleEvent: showNewslatter, index})});	
}
function cancelSearch() {
	if ( (antiblick !== null) && (antiblick.classList.contains("on")) ) {
		antiblick.classList.remove("on");
	}
	if ( (search !== null) && (search.classList.contains("fade-in")) ){		
		search.classList.remove("fade-in");
		search.classList.add("fade-out");
		searchTimeCancel = window.setTimeout(function(){search.classList.remove("fade-out");}, 800);
		removeActiveSerch();
		enableScroll();
	}	
}
function cancelNewslatter() {
	if ( (antiblick !== null) && (antiblick.classList.contains("on")) ) {
		antiblick.classList.remove("on");
	}
	if ( isNewsletterOpen() ){		
		newslatter.classList.remove("fade-in");
		newslatter.classList.add("fade-out");
		newslatterTimeCancel = window.setTimeout(function(){newslatter.classList.remove("fade-out");}, 800);
		removeActiveNewslatter();
		enableScroll();
	}	
}
if(closeSearch !== null){
	closeSearch.addEventListener("click", cancelSearch);
}
if(closeNewslatter !== null){
	closeNewslatter.addEventListener("click", cancelNewslatter);
}

// Or we can use ajax
//   $('form-newsletter').submit(function(e) {
//   	e.preventDefault(); 
//     	var $form = $(this);
//     	$.ajax({
//       	type: $form.attr('method'),
//       	url: $form.attr('action'),
//       	data: $form.serialize()
//     	}).done(function() {
//      	сonsole.log('success');
//     	}).fail(function() {
//       	console.log('fail');
//     	});
//   });