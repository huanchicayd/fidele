$(document).ready(function(){

    //Slider home
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3250,
        speed: 1350
    });

    //Mobile menu
    $('.navbar-nav__btn-menu').click(function(e){
        e.preventDefault();
        $('.nav').toggleClass('active-menu');
    });

    $('.nav-especialidades__btn').click(function(e){
        e.preventDefault();
        $('.nav-especialidades__menu').toggleClass('nav-especialidades--active');
    });

    //Active nav links
    $(function(){
        var pgurl = window.location.href.substr(
            window.location.href.lastIndexOf('/') + 1
        );

        var $menuLinks = $('.nav a');

        $menuLinks.each(function(){
            if($(this).attr('href') === pgurl) {
                $(this).addClass('active-link');
            }
        });

        if(pgurl === ''){
            $('.nav a[href="index.php"]').addClass('active-link');
        }

        var pgurlEspecialidades = window.location.href.substr(
            window.location.href.lastIndexOf('/') + 1
        );

        if(pgurlEspecialidades === 'estetica.php' ||
            pgurlEspecialidades === 'implantodontia.php' ||
            pgurlEspecialidades === 'ortodontia.php' ||
            pgurlEspecialidades === 'prevencao.php' ||
            pgurlEspecialidades === 'protese.php' ||
            pgurlEspecialidades === 'endodontia.php'){

            $('.nav a.link-especialidades').addClass('active-link');
        }
    });

    //Botão de voltar para o topo
    function voltarAoTopo() {
        $(document).on('scroll', function() {
            var y = $(this).scrollTop();
            if (y > 500) {
                $('a.btn-back').fadeIn();
            } else {
                $('a.btn-back').fadeOut();
            }
        });

        $('a.btn-back').click(function(){
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            return false
        });
    }
    voltarAoTopo();

});