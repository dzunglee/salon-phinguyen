<style>
    .image-edit{
        max-width: 100%;
        width: 100%;
    }
    .wrap-image{
        display: inline-block;
        border: solid 1px;
        position: relative;
        overflow: hidden;
        width: 100%;
    }
    .crop-area{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        /*border: solid 1px #0d6aad;*/
        box-shadow: 0 0 2000px 2000px rgba(0, 0, 0, 0.5)
    }
    .controls{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .tl, .tr, .bl, .br, .t, .l, .b, .r{
        position: absolute;
        display: block;
        width: 6px;
        height: 6px;
        background-color: #0d6aad;
    }
    .tl{
        top: 0;
        left: 0;
        cursor: nw-resize;
    }
    .tr{
        top: 0;
        right: 0;
        cursor: ne-resize;
    }
    .bl{
        bottom: 0;
        left: 0;
        cursor: ne-resize;
    }
    .br{
        bottom: 0;
        right: 0;
        cursor: nw-resize;
    }
    .t{
        top: 0;
        right: 50%;
        transform: translateX(50%);
        cursor: n-resize;
    }
    .l{
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        cursor: e-resize;
    }
    .b{
        bottom: 0;
        right: 50%;
        transform: translateX(50%);
        cursor: n-resize;
    }
    .r{
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        cursor: e-resize;
    }
    .full-drag{
        width: calc(100% - 12px);
        height: calc(100% - 12px);
        position: absolute;
        top: 6px;
        left: 6px;
        cursor: move;
    }

</style>
<div class="modal fade" tabindex="-1" role="dialog" id="modal-edit-image" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">Edit image</h4>
            </div>
            <div class="modal-body" style="min-height: 475px">
                <form method="post" action="{{route('cms.media.post-image-edit')}}" class="form-edit-image">
                    <input type="hidden" name="_token" value="{{csrf_token()}}">
                    <input type="hidden" name="image-path" value="{{$path}}">
                    <input type="hidden" name="ratio" value="1">
                    <div class="row">
                        <div class="col-xs-8 h-100">
                            <div class="wrap-image" ondragover="allowDrop(event)">
                                <img class="image-edit" src="{{$imagePath}}" ondragover="allowDrop(event)">
                                <div class="crop-area" ondragover="allowDrop(event)">
                                    <div class="controls" ondragover="allowDrop(event)">
                                        <div class="full-drag" draggable="true" ondragover="allowDrop(event)">
                                        </div>
                                        <div class="tl" draggable="true"></div>
                                        <div class="tr" draggable="true"></div>
                                        <div class="bl" draggable="true"></div>
                                        <div class="br" draggable="true"></div>
                                        <div class="t" draggable="true"></div>
                                        <div class="l" draggable="true"></div>
                                        <div class="b" draggable="true"></div>
                                        <div class="r" draggable="true"></div>
                                    </div>
                                </div>
                            </div></div>
                        <div class="col-xs-4 h-100">
                            <div class="form-group">
                                <label>Resize</label>
                                <div class="row">
                                    <div class="col-xs-5 pr-0"><input class="form-control input-group-prepend" name="width" value="{{$width}}" max="{{$width}}" min="30" type="number"></div>
                                    <div class="col-xs-1 text-center no-padding" style="line-height: 34px">X</div>
                                    <div class="col-xs-5 px-0"><input class="form-control d-inline" name="height" value="{{$height}}" max="{{$height}}" min="30" type="number"></div>
                                    <div class="col-xs-1 text-center no-padding" style="line-height: 34px">px</div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>
                                    <input type="checkbox" name="keep-ratio" determinate="false">
                                    Constrains aspect ratio
                                </label>
                            </div>
                            <div class="form-group">
                                <label>Quantity (%)</label>
                                <input class="form-control" name="quantity" value="100" type="number" max="100" min="30">
                            </div>
                        </div>
                    </div>
                    <div>
                        Width: <span class="newWidthValue">{{$width}}px</span>,
                        Height: <span class="newHeightValue" >{{$height}}px</span>
                        <input name="newWidthValue" type="hidden" value="{{$width}}">
                        <input name="newHeightValue" type="hidden" value="{{$height}}">
                        <input name="x" type="hidden" value="0">
                        <input name="y" type="hidden" value="0">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <div class="text-right">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary btn-choose save-btn">Save</button>
                    <button type="submit" class="btn btn-primary btn-choose create-btn">Save & Create</button>
                </div>
            </div>
        </div>
    </div>
    <script>

        function allowDrop(e){
            e.preventDefault();
        }
        function dragStart(event) {
            event.dataTransfer.setData("Text", event.target.id);
        }

        // $('input[name="keep-ratio"]').iCheck();
        $('#image-edit').ready(function () {
            setTimeout(function () {
                window.realWidth = '{{$width}}';
                window.realHeight = '{{$height}}';

                window.control = $('.controls');
                window.cropArea = $('.crop-area');
                window.parent = $('.image-edit');
                window.parentOffset = window.parent.offset();
                window.iWidth = $('.image-edit').width();
                window.iHeight = $('.image-edit').height();

                window.ratio = window.realWidth/window.iWidth;
                window.widthHeight = window.realWidth/window.realHeight;

                $('input[name="ratio"]').val(window.ratio);

                updateData();

                $('body').on('drag','.t', function (e) {
                    e.preventDefault();
                    let relY = e.pageY - window.parentOffset.top;
                    if (relY < window.cBottom && relY >= -0.5){
                        let newHeight = window.cBottom - relY;
                        window.cropArea.css('height', newHeight);
                        window.cropArea.css('top', relY);
                        updateWidthHeight(window.cRight - window.cLeft, newHeight);
                    }
                });

                $('body').on('drag','.b', function (e) {
                    e.preventDefault();
                    let relY = e.pageY - window.parentOffset.top;
                    if (relY < window.iHeight + 1 && relY >= window.cTop){
                        let newHeight = relY - window.cTop;
                        window.cropArea.css('height', newHeight);
                        updateWidthHeight(window.cRight - window.cLeft, newHeight);
                    }
                });
                $('body').on('drag','.r', function (e) {
                    e.preventDefault();
                    let relX = e.pageX - window.parentOffset.left;
                    if (relX < window.iWidth + 1 && relX >= window.cLeft){
                        let newWidth = relX - window.cLeft;
                        window.cropArea.css('width', newWidth);
                        updateWidthHeight(newWidth, window.cBottom - window.cTop);
                    }
                });
                $('body').on('drag','.l', function (e) {
                    e.preventDefault();
                    let relX = e.pageX - window.parentOffset.left;
                    if (relX < window.cRight && relX >= -0.5){
                        let newWidth = window.cRight - relX;
                        window.cropArea.css('width', newWidth);
                        window.cropArea.css('left', relX);
                        updateWidthHeight(newWidth, window.cBottom - window.cTop);
                    }
                });

                $('body').on('drag','.tl', function (e) {
                    e.preventDefault();
                    let relX = e.pageX - window.parentOffset.left;
                    let relY = e.pageY - window.parentOffset.top;
                    if (relX < window.cRight && relX >= -0.5){
                        let newWidth = window.cRight - relX;
                        window.cropArea.css('left', relX);
                        window.cropArea.css('width', newWidth);
                        updateWidthHeight(newWidth, null);
                    }
                    if(relY < window.cBottom && relY >= -0.5){
                        let newHeight = window.cBottom - relY;
                        window.cropArea.css('top', relY);
                        window.cropArea.css('height', newHeight);
                        updateWidthHeight(null, newHeight);
                    }
                });

                $('body').on('drag','.tr', function (e) {
                    e.preventDefault();
                    let relX = e.pageX - window.parentOffset.left;
                    let relY = e.pageY - window.parentOffset.top;
                    if (relX < window.iWidth + 1 && relX >= window.cLeft){
                        let newWidth = relX - window.cLeft;
                        window.cropArea.css('width', newWidth);
                        updateWidthHeight(newWidth, null);
                    }
                    if(relY < window.cBottom && relY >= -0.5){
                        let newHeight = window.cBottom - relY;
                        window.cropArea.css('top', relY);
                        window.cropArea.css('height', newHeight);
                        updateWidthHeight(null, newHeight);
                    }
                });

                $('body').on('drag','.bl', function (e) {
                    e.preventDefault();
                    let relX = e.pageX - window.parentOffset.left;
                    let relY = e.pageY - window.parentOffset.top;
                    if (relX < window.iWidth && relX >= window.cLeft - 1){
                        let newWidth = window.cRight - relX;
                        window.cropArea.css('left', relX);
                        window.cropArea.css('width', newWidth);
                        updateWidthHeight(newWidth, null);
                    }
                    if (relY < window.iHeight + 1 && relY >= window.cTop){
                        let newHeight = relY - window.cTop;
                        window.cropArea.css('height', newHeight);
                        updateWidthHeight(null, newHeight);
                    }
                });

                $('body').on('drag','.br', function (e) {
                    e.preventDefault();
                    let relX = e.pageX - window.parentOffset.left;
                    let relY = e.pageY - window.parentOffset.top;
                    if (relX < window.iWidth + 1 && relX >= window.cLeft){
                        let newWidth = relX - window.cLeft;
                        window.cropArea.css('width', newWidth);
                        updateWidthHeight(newWidth, null);
                    }
                    if (relY < window.iHeight + 1 && relY >= window.cTop){
                        let newHeight = relY - window.cTop;
                        window.cropArea.css('height', newHeight);
                        updateWidthHeight(null, newHeight);
                    }
                });




                $('body').on('dragstart','.full-drag', function (e) {
                    let relX = e.pageX - window.parentOffset.left;
                    let relY = e.pageY - window.parentOffset.top;
                    window.mouseToTop = relY - window.cTop;
                    window.mouseToBottom = $('.controls').height() - window.mouseToTop;
                    window.mouseToLeft = relX - window.cLeft;
                    window.mouseToRight = $('.controls').width() - window.mouseToLeft;
                });

                $('body').on('drag','.full-drag', function (e) {
                    e.preventDefault();
                    let relX = e.pageX - window.parentOffset.left;
                    let relY = e.pageY - window.parentOffset.top;
                    let relTop = relY - window.mouseToTop;
                    let relBottom = window.mouseToBottom + relY;
                    let relLeft = relX - window.mouseToLeft;
                    let relRight = window.mouseToRight + relX;

                    if (relTop > 0 && relBottom < window.iHeight){
                        window.cropArea.css('top', relTop);
                    }
                    if (relLeft > 0 && relRight < window.iWidth){
                        window.cropArea.css('left', relLeft);
                    }
                });

                $('body').on('dragend','.t', function (e) {
                    e.preventDefault();
                    updateData();
                });
                $('body').on('dragend','.b', function (e) {
                    e.preventDefault();
                    updateData();
                });
                $('body').on('dragend','.l', function (e) {
                    e.preventDefault();
                    updateData();
                });
                $('body').on('dragend','.r', function (e) {
                    e.preventDefault();
                    updateData();
                });
                $('body').on('dragend','.tl', function (e) {
                    e.preventDefault();
                    updateData();
                });
                $('body').on('dragend','.tr', function (e) {
                    e.preventDefault();
                    updateData();
                });
                $('body').on('dragend','.bl', function (e) {
                    e.preventDefault();
                    updateData();
                });
                $('body').on('dragend','.br', function (e) {
                    e.preventDefault();
                    updateData();
                });
                $('body').on('dragend','.full-drag', function (e) {
                    e.preventDefault();
                    updateData();
                });


                function updateData() {
                    window.cTop = $('.t').offset().top - window.parentOffset.top;
                    window.cBottom = $('.b').offset().top - window.parentOffset.top + $('.b').outerHeight();
                    window.cLeft = $('.l').offset().left - window.parentOffset.left;
                    window.cRight = $('.r').offset().left - window.parentOffset.left + $('.b').outerWidth();
                    updateXY(window.cTop, window.cLeft)
                }
            },500);
        });

        $('body').off('click','.save-btn').on('click','.save-btn', function (e) {
            e.preventDefault();
            sendEditImage('save');
        });
        $('body').off('click','.create-btn').on('click','.create-btn', function (e) {
            e.preventDefault();
            sendEditImage('create');
        });

        $('body').on('click','[name="width"]', function (e) {
            e.preventDefault();
            if($('[name="keep-ratio"]').is(':checked'))
                calculatorAspectRatio('width');
        });
        $('body').on('click','[name="height"]', function (e) {
            e.preventDefault();
            if($('[name="keep-ratio"]').is(':checked'))
                calculatorAspectRatio('height');
        });
        $('body').on('click','[name="keep-ratio"]', function (e) {
            $(this).is(':checked')
                calculatorAspectRatio('width');
        });






        function sendEditImage(type) {
            let form = $('.form-edit-image');
            let url = form.attr('action');
            let inputs = form.serializeArray();
            let data = {};
            $.each(inputs, function(i, field){
                data[field.name] = field.value
            });
            data['type'] = type;
            data['current-folder'] = $('input[name="current-folder"]').val();
            $.ajax({
                type: "POST",
                url: url,
                data: data,
                statusCode: {
                    404: function () {
                        toastr.error('File not found',null,[]);
                    },
                    401: function () {
                        toastr.error('Not authorized',null,[]);
                    },
                    403: function () {
                        toastr.error('Access Forbidden',null,[]);
                    },
                    400: function (result) {
                        toastr.error(result.responseText,null,[]);
                    },
                    500: function () {
                        toastr.error('Internal Server Error',null,[]);
                    }
                },
                success: function(data){
                    toastr.success(data,null,[]);

                    $('.btn-reload').click();
                    $('#modal-edit-image').modal('hide');
                }
            });
        }

        function updateWidthHeight(vWith, vHeight) {
            if (vWith !== null){
                $('.newWidthValue').text(parseInt(vWith * window.ratio));
                $('[name="newWidthValue"]').val(vWith * window.ratio);
            }
            if (vHeight !== null){
                $('.newHeightValue').text(parseInt(vHeight * window.ratio));
                $('[name="newHeightValue"]').val(vHeight * window.ratio);
            }
        }

        function updateXY(vTop, vLeft) {
            $('[name="x"]').val(vLeft * window.ratio);
            $('[name="y"]').val(vTop * window.ratio);
        }

        function calculatorAspectRatio(type) {
            if (type === 'width'){
                $('[name="height"]').val(parseInt($('[name="width"]').val() / window.widthHeight));
            } else {
                $('[name="width"]').val(parseInt($('[name="height"]').val() * window.widthHeight));
            }
        }
    </script>
</div>