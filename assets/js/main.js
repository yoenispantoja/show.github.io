jQuery(function($) {
    'use strict',

    // accordian
    $('.accordion-toggle').on('click', function() {
      $(this).closest('.panel-group').children().each(function() {

            $(this).find('>.panel-heading').removeClass('active');
        });

        $(this).closest('.panel-heading').toggleClass('active');
    });

    //Initiat WOW JS
    new WOW().init();

    // portfolio filter
    /*$(window).load(function() {
        $('.preloader').delay(500).fadeOut('slow');
        $('body').delay(500).css({'overflow':'visible'});

    });*/

    // Contact form
    var form = $('#main-contact-form');
    form.submit(function(event) {
        event.preventDefault();
        var form_status = $('<div class="form_status"></div>');
        $.ajax({
            url: $(this).attr('action'),

            beforeSend: function() {
                form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
            }
        }).done(function(data) {
            form_status.html('<p class="text-success">' + data.message + '</p>').delay(3000).fadeOut();
        });
    });


    // Comprobar si estamos, al menos, 100 px por debajo de la posición top
    // para mostrar o esconder el botón


    // al hacer click, animar el scroll hacia arriba
    $('.scroll-to-top').click(function(e) {

        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);

    });

    // Menu scroll
    var nav = $('nav');
    pos = nav.offset();

    //desplazamiento comico
    lis = $('.navbar-nav').children();
    links = lis.children();
    links.click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top - 125;
                $('html,body').animate({ scrollTop: targetOffset }, 1700);
                return false;
            }
        }
    });

    //Desplazamiento desde el footer

    lis2 = $('.menuFooter').children();
    linksF = lis2.children();
    linksF.click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {

            var $target = $(this.hash);

            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');

            if ($target.length) {

                var targetOffset = $target.offset().top - 125;

                $('html,body').animate({ scrollTop: targetOffset }, 1700);

                return false;

            }

        }

    });








});
