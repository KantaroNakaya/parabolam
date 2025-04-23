$(function () {
    // スライダーの実装
    const swiper = new Swiper(".slider", {
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        speed: 1000,
    });
});

// 「ページトップに戻る」ボタンの実装
var pagetop = $("#js-pagetop");
pagetop.hide();
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        pagetop.fadeIn();
    } else {
        pagetop.fadeOut();
    }
});
pagetop.click(function () {
    $("body, html").animate(
        {
            scrollTop: 0,
        },
        500
    );
    return false;
});

$(window).scroll(function () {
    $(".animate-line").each(function () {
        var hit = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var wHeight = $(window).height();
        var customTop = 100;
        if (hit + customTop < wHeight + scroll) {
            $(this).addClass("inview");
        }
    });
});
