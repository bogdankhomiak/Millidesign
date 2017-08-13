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
});
