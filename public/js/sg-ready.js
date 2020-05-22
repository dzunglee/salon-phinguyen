function fixedBlVideoHeight(){
    let blVideo = $('.bl-video');
    blVideo.css('height',$(window).height() - $('header').outerHeight());
}


$(window).resize(function () {
    fixedBlVideoHeight();
});
$(document).ready(function () {
    fixedBlVideoHeight();

    $('.service-row .item').click(function () {
        let me = $(this);
        let tabs = $('.service-tabs .item');
        $('.service-row .item').removeClass('active');
        me.addClass('active');
        tabs.removeClass('active');
        $(tabs[me.index()]).addClass('active');
    });
});