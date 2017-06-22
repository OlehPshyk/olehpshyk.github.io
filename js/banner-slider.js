$(document).ready(function(){
	$("#OwlCarouselBaner").owlCarousel({
		loop:true,	    
	    slideSpeed: 500,
	    autoplay: true,
	    autoplayTimeout: 4000,
	    loop: true,		            		            		            
	    dots: false,
	    nav: true,		            
	    navText : ["",""],
	    rewindNav : true,
	    responsive:{
	        0: {
	            items:1
	        }
	    }
	});
});