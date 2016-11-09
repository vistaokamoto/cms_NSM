// JavaScript Document

//-------------------------------------------------------共通
//メニュー
$(function(){
$("#globalNavi ul ul").hide();
$("#globalNavi li").hover(function(){
	$("ul:not(:animated)",this).slideDown("fast");
},
function(){
	$("ul",this).slideUp("fast");
});
});

//検索フォームのデフォルト文字
$(function(){
$(".searchInput").val("search").css("color","#666").one("focus",function(){
$(this).val("").css("color","#000");
}).blur(function(){
if($(this).val()==""){
$(this).val("search").css("color","#666").one("focus",function(){
$(this).val("").css("color","#000");
});
}
});
});

//画像ロールオーバー
$(function(){    
   $('#search img, .scheduleBanner img, img.over, .over img').hover(function(){    
   $(this).stop().animate({'opacity' : '0.75'}, 0);    
   }, function(){$(this).stop().animate({'opacity' : '1'}, 0);});
});
//-------------------------------------------------------個別ページ専用
//TOPページメイン用
$(function(){    
   $('#mainIndex a img').hover(function(){    
   $(this).stop().animate({'opacity' : '0'}, 500);    
   }, function(){$(this).stop().animate({'opacity' : '1'}, 500);});    
});

//IE7のz-indexバグ対策
// $(function() {
//     var zIndexNumber = 10000;
//     $('div').each(function() {
//         $(this).css('zIndex', zIndexNumber);
//         zIndexNumber -= 10;
//     });
// });

//学科TOPのinfoNavi2の高さを揃える
$(function() {
var maxHeight=0;
$("#infoNavi2 dl").each(function(){
if (maxHeight<$(this).height()){
maxHeight=$(this).height();
}
}).height(maxHeight);
});

$(function(){
$('#fixedBottom').css({
zIndex:9999
});
});

//入学をお考えの方のボタン内の随時更新ピコピコ
$(function(){
    setInterval(function(){
        $('ul.gnavi_u li.firstChild span.icon_hot img').fadeOut(500,function(){$(this).fadeIn(500)});
    },1800);
});



/*スクロール追随ページ表示*/

// $(document).ready(function(){
//          $("#footer").append('<nav div="fixedNav"><img src="http://www.nsm.ac.jp/common/img/btn_side_event.png" alt="職業体験" /></nav>');//←.htmlの中身ここまで
// });


/*スクロール追随*/
$(function() {
            var sideBtnFoot = $('#footer');
            sideBtnFoot.append('<nav id="fixedNav"><ul><li><a href="http://www.nsm.ac.jp/event/"><img src="http://www.nsm.ac.jp/common/img/btn_side_event.png" alt="" /></a></li><li><a href="http://www.nsm.ac.jp/request_doc/request.php"><img src="http://www.nsm.ac.jp/common/img/btn_side_siryo.png" alt="" /></a></li><li><a href="http://www.nsm.ac.jp/event/explain/"><img src="http://www.nsm.ac.jp/common/img/btn_side_explain.png" alt="" /></a></li></ul></nav>');//←.htmlの中身ここまで
            var sideBtn = $('#fixedNav ul');
            sideBtn.css('right', '-50px');
            var showFlug = false;
          
            //スクロールが150に達したらボタン表示   
            $(window).scroll(function () {
                    if ($(this).scrollTop() > 150) {
                        if (showFlug == false) {
                            showFlug = true;
                            sideBtn.stop().animate({'right' : '0px'}, 200);
                            //sideBtn.fadeIn();フェードイン
                        }
                    } else {
                        if (showFlug) {
                            showFlug = false;
                            sideBtn.stop().animate({'right' : '-50px'}, 200);
                            //sideBtn.fadeOut();フェードアウト
                        }
                    }
                });
        });
