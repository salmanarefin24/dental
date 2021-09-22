// Hero Section Functional Using JQury
$(document).ready(function(){

	$('.hero-section-slider').owlCarousel({
	    loop:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }  
	});

	$('.clients-logo').owlCarousel({
	    loop:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    margin:50,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        679:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	    }  
	});

	


});