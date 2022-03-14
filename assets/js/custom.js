$(window).load(function() {
    "use strict";
    $(".preloader-outer").delay(350).fadeOut('slow');
});

$(function(){
    "use strict";

    $(".navigation").onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 700,
        scrollThreshold: 0.5,
        easing: 'easeInOutCubic'
    });

    $(".hamburger-menu, .main-nav ul li a").on( 'click', function() {
        $(".header").toggleClass("pushed");
        $(".main-content").toggleClass("main-pushed");
        $('.bar').toggleClass('animate');
    });

    $(".header").css({'height':($(window).height())+'px'});
});
