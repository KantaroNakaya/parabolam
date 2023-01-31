$(function(){
    
    //ファーストビューのスライド実装
    $('.slider').slick({
		fade:true,//切り替えをフェードで行う。初期値はfalse。
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		autoplaySpeed: 1500,//次のスライドに切り替わる待ち時間
		speed:1000,//スライドの動きのスピード。初期値は300。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 1,//スライドを画面に3枚見せる
		slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
        pauseOnFocus: false,//フォーカスで一時停止を無効
        pauseOnHover: false,//マウスホバーで一時停止を無効
        pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
        prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
	});

	//スマホ用：スライダーをタッチしても止めずにスライドをさせる
	$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
		$('.slider').slick('slickPlay');
	});
    
    
    
    ///////////////////////////////
    ///////////////////////////////
    ///////////////////////////////
    

	//「白い箱を下からふわっとさせる動き」を実装 
	$(window).on("scroll load", function(){
        $(".whiteBox").each(function(){
            var ePos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > ePos - windowHeight + windowHeight/5 ){
                $(this).css({transform: "translate(0,0)", opacity:1})
            }
        });
    });
      
      
    ///////////////////////////////
    ///////////////////////////////
    ///////////////////////////////
    
	
    // 「ページトップに戻る」ボタンの実装
    var pagetop = $('#js-pagetop');
      pagetop.hide();
      $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
          pagetop.fadeIn();
        } else {
          pagetop.fadeOut();
        }
      });
      pagetop.click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
      });
});
