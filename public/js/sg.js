function toggleVideo() {
    let blVideo = $('.bl-video');
    let videoIframe = $('#videoIframe');
    if (blVideo.hasClass('open')){
        blVideo.removeClass('open');
        videoIframe.attr('src','');
    }else {
        blVideo.addClass('open');
        setTimeout(function () {
            console.log(videoIframe);
            videoIframe.attr('src',$(videoIframe).data('src'));
            videoIframe[0].src += "&autoplay=1";
        },500);
    }
}

$('.toggleVideo').click(function (e) {
    toggleVideo();
    e.preventDefault();
});