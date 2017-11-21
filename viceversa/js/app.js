
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
document.querySelector(".menu-button").addEventListener("click", dropped)

// for mobile button "close-button"
document.querySelector(".close-button").addEventListener("click", dropped)


// FOOTER-REVEAL
$('footer').footerReveal();



<!-- REVEAL -->
if (window.innerWidth > 900){		//only on large screen			
	window.sr = ScrollReveal({ reset: true,
							   viewFactor: 0.4,
							   opacity: 0,
							   origin: 'bottom',
							   distance: '10px',
							   duration: 1000,
							   delay: 100,
							   mobile: true});
	sr.reveal('.reveal-v1');
} 
else {
	window.sr = ScrollReveal({ reset: true,
							   viewFactor: 0.3,
							   opacity: 0,							   
							   origin: 'bottom',
							   // distance: '10px',
							   duration: 1000,
							   delay: 100,
							   mobile: true});
	sr.reveal('.reveal-v1');
}

