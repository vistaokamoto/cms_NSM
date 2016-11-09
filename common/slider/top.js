//main slider
$(function() {
			
	var Page = (function() {

	var $navArrows = $( '#nav-arrows' ),
		$nav = $( '#nav-dots > span' ),
		slitslider = $( '#slider' ).slitslider( {
		onBeforeChange : function( slide, pos ) {

		$nav.removeClass( 'nav-dot-current' );
		$nav.eq( pos ).addClass( 'nav-dot-current' );

						
						
//追記
clearTimeout(reserveNext);

}, // ←カンマ忘れに注意

//追記
onAfterChange: function(slide,pos){
toNext();

}
} ),

	init = function() {
	initEvents();

//追記
toNext();
},
	initEvents = function() {

	// add navigation events
	$navArrows.children( ':last' ).on( 'click', function() {
		slitslider.next();
		return false;
	} );

	$navArrows.children( ':first' ).on( 'click', function() {
		slitslider.previous();
		return false;
	} );

	$nav.each( function( i ) {
	$( this ).on( 'click', function( event ) {	
	var $dot = $( this );
	if( !slitslider.isActive() ) {
		$nav.removeClass( 'nav-dot-current' );
		$dot.addClass( 'nav-dot-current' );
									
	}
									
	slitslider.jump( i + 1 );
	return false;
	} );
	} );
};			

//追記
var reserveNext,
toNext = function(){
reserveNext = setTimeout(function(){
slitslider.next();
},10000);
};
	return { init : init };
})();

Page.init();

/**
* Notes: 
* 
* example how to add items:
*/

/*
				
	var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');
				
	// call the plugin's add method
	ss.add($items);

*/
			
});

//bg schroll
$( function() {
	$('.main_bg_11').bgscroll({scrollSpeed: 50, direction:'h' });
	$('.main_bg_12').bgscroll({scrollSpeed: 50, direction:'h' });
	//$('.main_bg_weare').bgscroll({scrollSpeed: 50, direction:'h' });
});


//photo fade
$(function(){
	var setImg = '#viewer';
	var fadeSpeed = 1500;
	var switchDelay = 5000;

	$(setImg).children('img').css({opacity:'0'});
	$(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'20'},fadeSpeed);

	setInterval(function(){
		$(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
	},switchDelay);
});

//youtube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
height: '400',
width: '660',
videoId: 'UYfuaaUn_1I',
playerVars: { 'controls': 0, 'loop': 1, 'rel' :0, 'showinfo':0 , wmode : "transparent"},
events: {
'onReady': onPlayerReady,
'onStateChange': onPlayerStateChange
}
});
}
function onPlayerReady(event) {
event.target.playVideo();
event.target.mute();
}
function onPlayerStateChange(event) {
}

//slider
$(document).ready(function(){
	$('.bxslider').bxSlider({
		auto:true,
		speed:800,
		randomStart: false,
		startSlide: 0,
		pager: true,
		nextText: '<i class="fa fa-chevron-right"></i>',
		prevText: '<i class="fa fa-chevron-left"></i>',
		pause:5000
	});
});

//blog
$(function(){
   $.ajax({
      url: "contents/blogs/new",
      dataType:"html",
      timeout:2000,
      cache: false,
      
      success:function(xml){
         $(xml).find("item").each(function(){
            var url=$(this).find("url").text();
            var title=$(this).find("title").text();
			var text=$(this).find("text").text();
			var images=$(this).find("images").text();
            var date=$(this).find("date").text();
			var new_icon=$(this).find("new_icon").text();
            $("<div class='info_blog_box hover_anime clearfix"+new_icon+"'></div>").html("<a href='"+url+"'><p class='news_date'>"+date+"</p><div class='news_title'>"+title+"</div><div class='info_blog_photo_wrap'><img src='"+images+"'></div><p>"+text+"</p></a>").appendTo("#xmlfeed");
         });
      }
   });
});

//marquee
$(document).ready(function(){
// マウスオーバーで止めない，スクロールのスピードを変更
$(".marquee").marquee({pauseOnHover:true,pauseSpeed: 2000,scrollSpeed:10});
});