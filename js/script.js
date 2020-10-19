
"use strict";

/* ==== Jquery Functions ==== */
(function($) {
	
	/* ==== Tool Tip ==== */	
    $('[data-toggle="tooltip"]').tooltip();	
	
	/* ==== Testimonials Slider ==== */	
  	$(".itemgrid").owlCarousel({      
	   loop:true,
		margin:30,
		nav:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			768:{
				items:2,
				nav:false
			},
			1170:{
				items:4,
				nav:false,
				loop:true
			}
		}
  	});	
	
	/* ==== Testimonials Slider ==== */	
  	$(".testimonialsList").owlCarousel({      
	   loop:true,
		margin:30,
		nav:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			768:{
				items:1,
				nav:false
			},
			1170:{
				items:2,
				nav:false,
				loop:true
			}
		}
  	});
	
	
	/* ==== Revolution Slider ==== */
	if($('.tp-banner').length > 0){
		$('.tp-banner').show().revolution({
			delay:6000,
	        startheight:550,
	        startwidth: 1140,
	        hideThumbs: 1000,
	        navigationType: 'none',
	        touchenabled: 'on',
	        onHoverStop: 'on',
	        navOffsetHorizontal: 0,
	        navOffsetVertical: 0,
	        dottedOverlay: 'none',
	        fullWidth: 'on'
		});
	}
	
	
	
	
})(jQuery);












const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));














$(document).ready(function() {
    $("#slider").slider({
        range: true,
        min: 0,
        max: 5000,
        step: 1,
        values: [0, 5000],
        animate: 300,
        slide: function(event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
            }
        }
    });

    $("input.sliderValue").change(function() {
        var $this = $(this);
        $("#slider").slider("values", $this.data("index"), $this.val());
    });
});