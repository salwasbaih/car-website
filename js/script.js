
$(function () {
$('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 2000,
        slideTransition: 'linear',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })
})

$('.back-top').click(function () {

    var top = $(window).scrollTop();

    if (top > 300) {
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    } else {
        $('body, html').animate({
            scrollTop: bodyHeight
        }, 1000);
    }

})

 $('nav a').click(function (e) {
        e.preventDefault();
        var targerElemet = $(this).attr('href');
        var scrollValue = $(targerElemet).offset().top;
        $('body, html').animate({
            scrollTop: scrollValue
        }, 1000);
    })