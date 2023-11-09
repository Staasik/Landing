$(function () {
    $(window).on('load', function () {
        $('.stocks__content').slick({
            slidesToShow: 3,
            dots: true,
            appendDots: '.stocks__pagination',
            dotsClass: "stocks__pagination",
            customPaging: function (slick, index) {
                return '<div class="stocks__dot_item"></div>';
            },
            prevArrow: false,
            nextArrow: false,
            responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });
    });
})