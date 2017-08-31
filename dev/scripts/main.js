$('document').ready(function(){

    //Slider home
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500
    });

    $('.navbar-nav__btn-menu').click(function(e){
        e.preventDefault();
        $('.nav').toggleClass('active-menu');
    });

});