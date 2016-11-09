(function($){
	$(function(){
	$('.slider').slick({
		infinite: true,
		dots:true,
		slidesToShow: 5,
		slidesToScroll: 1,
		//adaptiveHeight: true,
		responsive: [{
			breakpoint: 960,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},{
			breakpoint: 640,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
		]
	});

	});
}).call(this, jQuery);