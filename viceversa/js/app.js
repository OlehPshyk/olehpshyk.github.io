
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
