"use strict";
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        items: 1
    });
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    $('.slider-btns__right').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.slider-btns__left').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $(".header-nav-btn").click(function () {
        $(".header-nav").toggleClass("on");
    });
    $(".header-nav-btn").click(function () {
        //$(".sandwich").toggleClass("active");
        if ($(".header-nav").is(":visible")) {
            $(".header-nav").fadeOut(400);
        } else {
            $(".header-nav").fadeIn(400);
        }
    });

    $(".header-nav__link").click(function () {
        $(".header-nav").fadeOut(400);
        //$(".sandwich").toggleClass("active");
    })

    var t, e = $(".header-nav"),
        n = e.outerHeight(),
        i = e.find(".header-nav__link"),
        o = i.map(function () {
            var t = $($(this).attr("href"));
            if (t.length)
                return t
        });
    i.click(function (t) {
        if ($(window).width() > 768) {
            var e = $(this).attr("href"), i = "#" === e ? 0 : $(e).offset().top - n + 1;
            $("html, body").stop().animate({
                scrollTop: i
            }, 500),
                t.preventDefault()
        } else {
            var e = $(this).attr("href")
                , i = "#" === e ? 0 : $(e).offset().top;
            $("html, body").stop().animate({
                scrollTop: i
            }, 500),
                t.preventDefault()
        }
    }),
        $(window).scroll(function () {
            var e = $(this).scrollTop() + n
                , r = o.map(function () {
                if ($(this).offset().top < e)
                    return this
            });
            r = r[r.length - 1];
            var s = r && r.length ? r[0].id : "";
            t !== s && (t = s, i.parent().removeClass("header-nav__item_active").end().filter("[href='#" + s + "']").parent().addClass("header-nav__item_active"))
        })
});

