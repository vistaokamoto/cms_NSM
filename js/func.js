(function($) {
    $(function() {
        $('.pattern1').slick({
            infinite: true,
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            adaptiveHeight: true,
            centerMode: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
        });
        $('.box').matchHeight();
        $('.pattern1').on('beforeChange', function(){
            var ww = $(window).width();
            if(ww < 640) {
                $('.box').matchHeight({remove:true});
            } else {
                $.fn.matchHeight._apply($('.box'));
            }
        });
        $('.pattern1').on('setPosition', function(e){
            var ww = $(window).width();
            if(ww < 640) {
                $('.box').matchHeight({remove:true});
            } else {
                $.fn.matchHeight._apply($('.box'));
            }
        });
    });
}).call(this, jQuery);