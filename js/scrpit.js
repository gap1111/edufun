$(document).ready(function() {
    $('.slider-1').owlCarousel({
        items: 1,
        margin: 30,
        loop: true,
        nav: true,
        mouseDrag: false,
        dots: false,


    })
    $(".questions__trigger").click(function() {
        $(".questions__trigger").removeClass('active')
        $(this).addClass('active')
        $(".questions__content").slideUp("");
        $(this).next().slideDown("");
    });


    AOS.init();



});