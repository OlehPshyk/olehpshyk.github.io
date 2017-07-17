jQuery(document).ready(function($) {        		
		        $('#OwlCarouselTestimonials').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,		            
		            margin: 0,        			
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 3000,
		            smartSpeed: 1950,
		            responsive: {
		              0: {
		                items: 1
		              },
		              900: {
		                items: 2
		              },		              
		              1600: {
		                items: 3
		              }
		            }
		        });
        	});