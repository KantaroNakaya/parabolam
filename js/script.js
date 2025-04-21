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
});
