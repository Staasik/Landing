$(function () {
    $(window).on('load', function () {
        $('.advantages__items').slick({
            slidesToShow: 6,
            dots: false,
            appendDots: '.advantages__pagination',
            dotsClass: "advantages__pagination",
            customPaging: function (slick, index) {
                return '<div class="advantages__dot_item"></div>';
            },
            prevArrow: false,
            nextArrow: false,
            responsive: [{
                breakpoint: 1000,
                settings: {
                    centerMode: true,
                    variableWidth: true,
                    infinite: false,
                    slidesToShow: 1,
                    dots: true,
                    appendDots: '.advantages__pagination',
                    dotsClass: "advantages__pagination",
                    customPaging: function (slick, index) {
                        return '<div class="advantages__dot_item"></div>';
                    },
                    prevArrow: false,
                    nextArrow: false,
                }
            }]
        });
    });
})