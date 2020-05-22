var player;

function onYouTubeIframeAPIReady() {
    // player = new YT.Player('video-placeholder', {
    //     videoId: 'JZDmBWRPWlw',
    //     playerVars: {
    //         color: 'white',
    //         controls: 0,
    //         loop: 1,
    //         rel: 0
    //     },
    //     events: {
    //         onReady: function () {
    //             console.log('ready')
    //         }
    //     }
    // });
}

function toggleVideo() {
    let blVideo = $('.bl-video');
    if (blVideo.hasClass('open')) {
        blVideo.removeClass('open');
        // player.pauseVideo();
    } else {
        blVideo.addClass('open');
        setTimeout(function () {
            // player.playVideo();

        }, 500);
    }
}

function fixVideoWidth(isInit){
    let videoContainer = $('#videoContainer');
    let height = videoContainer.outerHeight();
    let width = height * 1.778;
    videoContainer.css('width',width);
    if (!isInit) {
        let lefBar = $('.left-bar');
        let blVideo = $('.bl-video');
        if (blVideo.hasClass('open')) {
            let wWidth = $(window).width();
            lefBar.css('flex', '0 0 ' + ((wWidth - width)/wWidth) * 100 + '%');
        }else {
            lefBar.css('flex', '0 0 30%');
        }
    }
}

$('.toggleVideo').click(function (e) {
    toggleVideo();
    fixVideoWidth();
    e.preventDefault();
});

function fixedBlVideoHeight() {
    let blVideo = $('.bl-video');
    blVideo.css('height', $(window).height() - $('header').outerHeight());
}


$(window).resize(function () {
    fixedBlVideoHeight();
    fixVideoWidth();
});
//scroll magic
var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
    triggerElement: "#ourStoryTrigger",
    triggerHook   : .35,
})
    .setClassToggle('.child-bl','show')
    // .addIndicators()
    .addTo(controller);
var structScene = new ScrollMagic.Scene({
    triggerElement: "#structureTrigger",
    triggerHook   : .5,
})
    // .addIndicators()
    .addTo(controller);

structScene.on('enter', function () {
    let card = $('.bl-structure .card');
    for (let i = 0; i < 5; i++ ){
        setTimeout(function () {
            $(card[i]).addClass('animated');
        },i*100)
    }
});
structScene.on('leave', function () {
    let card = $('.bl-structure .card');
    for (let i = 0; i < 5; i++ ){
        setTimeout(function () {
            $(card[i]).removeClass('animated');
        },i*150)
    }
});


var coreValueScene = new ScrollMagic.Scene({
    triggerElement: "#coreValueTrigger",
    triggerHook   : .25,
})
    // .addIndicators()
    .addTo(controller);

let time = 500;
coreValueScene.on('enter', function () {
    var items = $('.core-values .item');
    items.addClass('move-height');
    items.addClass('move-width');
    // setTimeout(function () {
    //     items.addClass('move-width');
    // },time)
});
coreValueScene.on('leave', function () {
    var items = $('.core-values .item');
    items.removeClass('move-height');
    items.removeClass('move-width');
    setTimeout(function () {
    },time)
});


// ready
$(document).ready(function () {
    fixedBlVideoHeight();
    fixVideoWidth(true);
    $('.service-row .item').click(function () {
        let me = $(this);
        let tabs = $('.service-tabs .item');
        $('.service-row .item').removeClass('active');
        me.addClass('active');
        tabs.removeClass('active');
        $(tabs[me.index()]).addClass('active');
    });

    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault()

        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        )
    })

    // auto hide play button
    var timeout = null;

    $('.bl-video').on('mousemove', function() {
        clearTimeout(timeout);
        let btn = $('.toggleVideo');
        let arrow = $('.toggleVideoArrow');
        btn.fadeIn();
        arrow.fadeIn();
        timeout = setTimeout(function() {
            let blVideo = $('.bl-video');
            if (blVideo.hasClass('open')) {
                btn.fadeOut();
                arrow.fadeOut();
            }
        }, 2000);
    });

    //

    $('.shape').each(function (i, v) {
        let target = $(v);
        target.css('background','url('+target.data('image')+')')
    });

    $('.card').each(function (i, v) {
        let target = $(v);
        target.css('background-color',target.data('color'))
        target.find('.after').css('background-color',target.data('color'))
    });

    $('.card .a').each(function (i, v) {
        let target = $(v);
        target.css('color',target.data('color'))
        target.find('.a-before').css('background-color',target.data('color'))
        target.find('.a-after').css('background-color',target.data('color'))
    });
    $('.square').each(function (i, v) {
        let target = $(v);
        target.css('background-color',target.data('color'))
    });

    $('.view-full').click(function () {
        $('.image-item').fadeIn();
        $(this).css('opacity','0');
        console.log($(this));
    });

    $( ".carousel .carousel-inner" ).swipe( {
        swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
            this.parent( ).carousel( 'next' );
        },
        swipeRight: function ( ) {
            this.parent( ).carousel( 'prev' );
        },
        threshold: 0,
        tap: function(event, target) {
            this.parent( ).carousel( 'next' );
            // get the location: in my case the target is my link
        },
        //เอา  a ออกถ้าต้องการให้ slide ที่เป็น tag a สามารถคลิกได้
        excludedElements:"label, button, input, select, textarea, .noSwipe"
    } );

    $('.carousel .carousel-inner').on('dragstart', 'a', function () {
        return false;
    });
});