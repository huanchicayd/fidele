$('document').ready(function(){

    //Slider home
    $('.slider').slick({
        dots: true,
        autoplay: true,
        arrows: false
    });

    $('.navbar-nav__btn-menu').click(function(e){
        e.preventDefault();
        $('.nav').toggleClass('active-menu');
    });

});