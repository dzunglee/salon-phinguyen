var baseUrl = $('meta[name="base_url"]').attr('content');
var windowWidth = $(window).width();
$(document).ready(function () {

    function getHeaderHeight() {
        return $('header').outerHeight();
    }
    $('.nav-item a').on('click', function(e) {
        e.preventDefault();
        var elm = $(this);
        var target = $(this).attr('href');
        if(target !== '#'){
            if (windowWidth < 991){
                if (target !== '#'){
                    $('header .collapse').collapse("hide");
                    $('.navbar-toggler').toggleClass('change');
                }
            }
            if (!scrollHash(target, elm)){
                window.location = target;
            }
        }
    });

    function scrollHash(url, elm) {
        if (url.length && url.length !== '#') {
            var target = $( url.replace(baseUrl, ''));
            if (target.length){
                if (target.attr('id') == 'careers') {
                    $('html, body').animate({
                        scrollTop: target.offset().top,
                    }, 300, 'linear', function () {
                        setTimeout(function () {
                            $('.nav-item a').removeClass('active');
                            elm.addClass('active');
                        },100);
                    });
                }else {
                    var headerHeight = $('#header').outerHeight();
                    $('html, body').animate({
                            scrollTop: target.offset().top - headerHeight,
                    }, 300, 'linear', function () {
                        setTimeout(function () {
                            $('.nav-item a').removeClass('active');
                            elm.addClass('active');
                        },100);
                    });
                }
                return true;
            }
        }
        return false;
    }
    setTimeout(function () {
        scrollHash(baseUrl+window.location.hash);
    }, 500);
    function onScroll(event) {
        //fix cai lazy 
        var myLazyLoad = new LazyLoad({
            elements_selector: ".lazy",
            load_delay: 300
        });
        //--
        var scrollPos = $(document).scrollTop();
        $('.nav-item a').each(function (k, v) {
            var currLink = $(this);
            if (currLink.attr("href") !== '#'){
                var refElement = $('#'+currLink.attr("href").split('#')[1]);
                if (refElement.length > 0) {
                    if (typeof refElement.position() !== 'undefined' && refElement.position().top <= (scrollPos + getHeaderHeight() + 10) && refElement.position().top + refElement.outerHeight() > (scrollPos + getHeaderHeight())) {
                        $('#menu-center ul li a').removeClass("active");
                        currLink.addClass("active");
                    }
                    else {
                        currLink.removeClass("active");
                    }
                }
            }
        });
        var windowW = $(window).width();
        var header = $("header");
        var menu = $("nav.navbar");
        var subLogo = $("#logo_sub");
        var top = $(window).scrollTop();
        if (top > 0){
            menu.addClass('fixed');
            subLogo.addClass('d-none');
            if(windowW > 991)
                header.css('height','75px');
            else
                header.css('height','80px');
        }else {
            menu.removeClass('fixed');
            subLogo.removeClass('d-none');
            if(windowW > 991)
                header.css('height','96px');
            else
                header.css('height','80px');
        }
    }
    function skillAnimate(){
        var skillBar = $('.left-border');
        if (skillBar.length > 0){
            var top = $(window).scrollTop();
            var height = $(window).height();
            if (top + height/2 >= skillBar.offset().top ){
                skillBar.addClass('show');
            }else {
                skillBar.removeClass('show');
            }
        }
    }
    skillAnimate();
    onScroll();
    //scroll menu
    $(window).scroll(function () {
        onScroll();
        skillAnimate();
    });
    $('.video-about').hide();
    setTimeout(function(){
        console.log("Hello");
        $('.video-about').show();

    }, 1500);
    $('.filterBtn').click(function () {
        $('.leftBtn li').removeClass('active');
        $(this).closest('li').addClass('active');
        $('.portfolio-item').hide();
        var target = $($(this).data('target'));
        setTimeout(function () {
            target.fadeIn();
            if (target.find('iframe').length !== 0){
                $('#portfolio1').find('iframe').attr('src','');
                var iframe = target.find('iframe');
                iframe.attr('src', iframe.data('url'));
            }
        },0);
    });
    //parallax
    var scene = $('#scene').get(0);
    if (scene)
        new Parallax(scene);

    $('.owl-carousel-member').on('changed.owl.carousel', function (e) {
        removeCssMember()
        setTimeout(function () {
            var index = $('.owl-carousel-member').find('.owl-item.center').find('.item').data('number');
            $('.owl-carousel-member-detail').trigger('to.owl.carousel', index);
            cssMember();
        },50);
    });

    //slide
    $('.owl-carousel-partner').owlCarousel({
        margin:10,
        dots: false,
        items: 1,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 2,
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });
    $('.owl-carousel-recent').owlCarousel({
        margin:10,
        dots: false,
        items: 1,
        nav: true,
        loop: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    $('.owl-carousel-member').owlCarousel({
        margin: 10,
        dots: false,
        items: 1,
        loop: true,
        center: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                stagePadding: 20,
            },
            375: {
                items: 2,
                stagePadding: 10,
            },
            480: {
                items: 2,
                stagePadding: 20,
            },
            768: {
                items: 2,
                stagePadding: 100,
            },
            992: {
                items: 2,
                stagePadding: 100,
            },
            1200: {
                stagePadding: 250,
                items: 3
            }
        }
    });
    $('.owl-carousel-member-detail').owlCarousel({
        dots: false,
        loop: true,
        animateOut: 'fadeOut',
        items: 1,
        slideTransition: 'linear',
        mouseDrag: false,
        touchDrag: false,
        autoHeight: true
    });

    $('.owl-carousel-member').on('initialized.owl.carousel', function (e) {
        cssMember();
        console.log('init');
    });

    function removeCssMember() {
        var activeItems = $('.owl-carousel-member .owl-item.active');
        activeItems.removeClass('translate-2');
    }
    function cssMember() {
        var activeItems = $('.owl-carousel-member .owl-item.active');
        var center = $('.owl-carousel-member .owl-item.center');
        if (activeItems.length > 2){
            center.next().addClass('translate-2');
            center.prev().addClass('translate-2');
            // $(activeItems.get(0)).addClass('translate-2');
            // $(activeItems.get(2)).addClass('translate-2');
        }else {
            $(activeItems.get(0)).addClass('translate-2');
            $(activeItems.get(1)).addClass('translate-2');
        }
    }

    setTimeout(function () {
        $('.list').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.grid-sizer',
            },
        });
    },500)

    $('body').on('click','.owl-carousel-member .item', function () {
        $('.owl-carousel-member').trigger('to.owl.carousel', $(this).data('number'));
    });

    //click button menu
    $('.navbar-toggler').each(function(){
        $(this).click(function(){
            $(this).siblings().removeClass('change');
            $(this).toggleClass('change');
        });
    });
    //click arrow service
    $('.main-content').each(function(){
        $(this).click(function(){
            var y = $(this).closest(".service-item");
            y.find(".arrow-down").toggleClass("active");
            y.find(".text-service").toggleClass("open");
            $(this).toggleClass("active");
        });
    });
    //link svg
    $('.hover-svg').each(function(){
        $(this).hover(function(){
            var y = $(this).closest(".service-item");
            y.find("svg").toggleClass("hover");
            $(this).toggleClass("hover");
        });
    });
    try {
        $('.service-item .image-svg').each(function (i, v) {
            var elm = $(v);
            new Vivus(elm.attr('id'), {
                duration: 1,
                file: elm.data('src'),
            });
        });
        new Vivus('logo', {
            duration: 1,
            file: $('#logo').data('src'),
        }, function () {

        });
    }catch (e) {
        console.log(e)
    }
    //about-svg
        $(window).scroll(function(){
            // var elmnt = document.getElementById("image-svg-about1");
            // var y = elmnt.scrollHeight;
            // console.log(y);
            // var scroll = $(window).scrollTop();
            
            var scrollPosition = $(window).height() + $(window).scrollTop();
            // if(scroll>750){
            //     $('.has-animate').addClass("animated");
            // }
            var link = $("#image-svg-about1");
            var offset = link.offset();
            var top = offset.top;
            var bottom = top + link.outerHeight();
            // var bot = $("#image-svg-about1").offset();
            if(scrollPosition > bottom){
                $('.has-animate').addClass("animated");   
            }
        });
    try {
        $('.svg-image-about .image-svg-about').each(function (i, v) {
            var elm = $(v);
            new Vivus(elm.attr('id'), {
                duration: 1,
                file: elm.data('src'),
            });
        });
    }catch (e) {
        console.log(e)
    }

    //about-svg-mobile
    try {
        $('.svg-image-about-mobile .image-svg-about-mobile').each(function (i, v) {
            var elm = $(v);
            new Vivus(elm.attr('id'), {
                duration: 1,
                file: elm.data('src'),
            });
        });
    }catch (e) {
        console.log(e)
    }

    $('.left-border .bounce').click(function () {
        var me = $(this);
        $('.left-border .wrap-content').addClass('show');
        $('.left-border .content').removeClass('active');
        setTimeout(function () {
            console.log(me);
            $(me.data('target')).addClass('active');
        }, 100)
    });
    $('.left-border .close').click(function () {
        $('.left-border .content').removeClass('active');
        setTimeout(function () {
            $('.left-border .wrap-content').removeClass('show');
        }, 400)
    });

    function makeClassSameHeight(elmClass) {
        var maxHeight = 0;
        $(elmClass).height('auto');

        $(elmClass).each(function(){
            if ($(this).height() > maxHeight) { maxHeight = $(this).height();
            }
        });
        if($(window).width() > 767){
            $(elmClass).height(maxHeight);
            console.log("lan 2");
        }
        else{
            $('.text-service').height('auto');
            console.log("lan1");
            
        }
            
    }

    makeClassSameHeight('.text-service');

    $( window ).resize(function() {
        makeClassSameHeight('.service-item');
    });
    // $("#Our-team").hide();
    // $("#Our-member").hide();
    // setTimeout(function(){
    //     $("#Our-team").show();
    //     $("#Our-member").show();
    //     console.log("loadding success");
    // },1000);
    function init(){
        // $('.someclass').size();

    }
    window.onload = init;
    
    // var myLazyLoad = new LazyLoad({
    //     elements_selector: ".lazy",
    //     load_delay: 300
    // });
    //--
    var scrollPosition = $(window).height() + $(window).scrollTop();
    var link = $("#image-svg-about1");
    var offset = link.offset();
    var top = offset.top;
    var bottom = top + link.outerHeight();
    // var bot = $("#image-svg-about1").offset();
    if(scrollPosition > bottom){
        $(function() {
            $('.has-animate').addClass('animated');
          });
        console.log("animated");
    }
});