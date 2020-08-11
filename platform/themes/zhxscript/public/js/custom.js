(function ($) {
	// Preloader
	$(window).on('load', function () {
	    if ($('.loader').length) {
	      $('.loader').delay(100).fadeOut('slow', function () {
	        $(this).remove();
	      });
	    }
	});

	$('.owl-carousel-services').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin: 5,
		autoplay:true,
		autoplayTimeout:5000,
		smartSpeed: 2000,
		touchDrag  : true,
		mouseDrag  : true,
		dots: true,
		nav: false,
		responsiveClass:true,
		responsive:{
			1366:{
				items:4,
			},
			1024:{
				items:4,
			},
			640:{
				items:2,
			},
			0:{
				items:1,
			}
		}
	})
})(jQuery);
