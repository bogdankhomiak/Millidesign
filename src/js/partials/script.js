"use strict";
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        items: 1
    });
    var t = $(".owl-carousel");
    t.owlCarousel(),
        $(".next").click(function () {
            t.trigger("next.owl.carousel")
        }),
        $(".prev").click(function () {
            t.trigger("prev.owl.carousel")
        })
});
