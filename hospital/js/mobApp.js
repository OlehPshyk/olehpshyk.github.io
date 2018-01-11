$(document).ready(function(){
	$("#OwlCarouselMobApp").owlCarousel({
		loop:true,	    
	    slideSpeed: 500,	    
	    animateOut: 'fadeOut',
  		animateIn: 'fadeIn',
  		touchDrag: false,
        mouseDrag: false,
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