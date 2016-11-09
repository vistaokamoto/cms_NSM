(function($) {
  $(function() {

    /* -----------------------------------------------------------------------
    ## PC ####################################################################
    ----------------------------------------------------------------------- */
    /*スクロール追随*/
    var sideBtnFoot = $('#footer');
    sideBtnFoot.append('<nav id="fixedNav"><ul><li><a href="http://www.nsm.ac.jp/event/"><img src="http://www.nsm.ac.jp/common/img/btn_side_event.png" alt="" /></a></li><li><a href="http://www.nsm.ac.jp/request_doc/request.php"><img src="http://www.nsm.ac.jp/common/img/btn_side_siryo.png" alt="" /></a></li><li><a href="http://www.nsm.ac.jp/event/explain/"><img src="http://www.nsm.ac.jp/common/img/btn_side_explain.png" alt="" /></a></li></ul></nav>'); //←.htmlの中身ここまで
    var sideBtn = $('#fixedNav ul');
    sideBtn.css('right', '-50px');
    var showFlug = false;

    //スクロールが150に達したらボタン表示   
    $(window).scroll(function() {
      if ($(this).scrollTop() > 150) {
        if (showFlug == false) {
          showFlug = true;
          sideBtn.stop().animate({
            'right': '0px'
          }, 200);
          //sideBtn.fadeIn();フェードイン
        }
      } else {
        if (showFlug) {
          showFlug = false;
          sideBtn.stop().animate({
            'right': '-50px'
          }, 200);
          //sideBtn.fadeOut();フェードアウト
        }
      }
    });

    //ヘッダーのロールオーバー
    $('.pcHeader .gnavi_u a, .pcHeader .gnavi_l a').hover(function() {
      if ($(this).find('img').size() !== 0) {
        var $img = $(this).find('img');
        var src = $img.attr('src').replace(/_off(\.jpg|\.gif|\.png|\.jpeg)/, '_on$1');
        $img.attr('src', src);
      }
    }, function() {
      if ($(this).find('img').size() !== 0) {
        var $img = $(this).find('img');
        var src = $img.attr('src').replace(/_on(\.jpg|\.gif|\.png|\.jpeg)/, '_off$1');
        $img.attr('src', src);
      }
    });

    //入学をお考えの方のボタン内の随時更新ピコピコ
    setInterval(function(){
        $('ul.gnavi_u span.icon_hot img').fadeOut(500,function(){$(this).fadeIn(500)});
    },1800);

  });
}).call(this, jQuery);
