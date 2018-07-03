$(function() {

    'use strict';
    //************************************************************
    //MENU TOGGLE
    //************************************************************

    var $headerMenuButton = $('.header__button-menu'),
        $menu = $('.menu');

    $headerMenuButton.click(function() {
        $(this).toggleClass('active');
        $menu.fadeToggle(300).css('display', 'flex');
    });

    //Выключение при клике по ссылке
    $menu.on('click', 'ul a', function() {
        $headerMenuButton.removeClass('active');
        $menu.fadeOut(300);
    });

    //*******************************************************
    //SCROLL
    //*******************************************************

    $('.scroll').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 600, 'swing');
    });

    /*******************************************************/
    //POPUP
    /*******************************************************/

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    /*******************************************************/
    //SLIDER
    /*******************************************************/
    $('.slider').addClass('owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: '',
        autoplayTimeout: 10000,
        autoplay: true,
        smartSpeed: 600
    });

    /*******************************************************/
    //ACCORDION
    /*******************************************************/
     $('.accordion').each(function() {
        var $this = $(this);
        $this.children('.accordion__box').hide();
    }).on('click', '.accordion__button', function(e) {
        e.stopPropagation();
        var $this = $(this);
        $this.closest('.accordion').hasClass('active') ? $this.closest('.accordion').removeClass('active').children('.accordion__box').slideUp(200) : $this.closest('.accordion').addClass('active').children('.accordion__box').slideDown(200).end().siblings().removeClass('active').children('.accordion__box').slideUp(200);
    });

    /*******************************************************/
    // Google Map
    /*******************************************************/
    var markerPositions = new Array();
        markerPositions[1] = new google.maps.LatLng(55.817883, 37.440213);

    function initialize() {
        var loc, map;

        loc = new google.maps.LatLng(55.817883, 37.440213);

        map = new google.maps.Map(document.getElementById('map'), {
             zoom: 15,
             center: loc,
             mapTypeId: google.maps.MapTypeId.ROADMAP,
             scrollwheel: false
        });

        var iconlink = 'img/';
        for(var i in markerPositions) {
          var markerPosition = markerPositions[i];

          var marker = new google.maps.Marker({
              map: map,
              position: markerPosition,
              visible: true,
              icon: iconlink + 'icon-map.png'
          });
        }
    }
    initialize();
    google.maps.event.addDomListener(window, 'load', initialize);

});
