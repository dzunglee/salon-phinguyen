<div class="modal fade" tabindex="-1" role="dialog" id="modal-popup-file" aria-labelledby="myLargeModalLabel" style="overflow: inherit;">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="myModalLabel">File manager</h4>
            </div>
            <div class="modal-body" style="min-height: 475px">
                <style>
                    .preview-inner{
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                    }

                    .preview-inner img{
                        margin: auto;
                        display: block;
                        margin-top: 50%;
                        transform: translateY(-50%);
                        max-height: 100%;
                        max-width: 100%;
                    }

                    .cutItem > div {
                        opacity: 0.6;
                    }
                    .content-fmg{
                        height: calc(100vh - 323px);
                        overflow: auto;
                    }
                </style>
                <div class="row mb-0">
                    <div class="col-md-12">
                        <div class="my-0">
                            <div class="btn-group">
                                <a class="btn btn-default btn-sm btn-reload" data-path="{{route('cms.media',['path', request('path')])}}"><i class="fa fa-rotate-right "></i></a>
                            </div>

                            <div class="btn-group">
                                <label class="btn btn-primary btn-sm">
                                    <i class="fa fa-cloud-upload"></i>&nbsp;Upload
                                    <input class="fileselect-fmg" type="file" id="single-fileupload" name="avatar" data-preview="#preview" data-filedrag="#filedrag-fmg" data-files="" multiple>
                                </label>
                                <a id="btn-add-folder" class="btn btn-primary btn-sm">
                                    <i class="fa fa-folder"></i>&nbsp;Add folder
                                </a>
                            </div>
                            <div class="btn-group btn-tool">
                                <button type="button" id="btn-move" class="btn btn-default btn-sm"><i class="fa fa-share"></i>&nbsp;Move</button>
                                <button type="button" id="btn-rename" class="btn btn-default btn-sm" data-toggle="modal" data-target="#modal-default"><i class="fa fa-i-cursor"></i>&nbsp;Rename</button>
                                <button type="button" id="btn-edit" class="btn btn-default btn-sm "><i class="fa fa-edit"></i>&nbsp;Edit</button>
                                <button type="button" id="btn-delete" class="btn btn-default btn-sm" data-url="{{route('media.delete')}}"><i class="fa fa-trash-o"></i>&nbsp;Delete</button>
                                <button type="button" id="btn-copy" class="btn btn-default btn-sm"><i class="fa fa-copy"></i>&nbsp;Copy Link</button>
                            </div>
                            {{--<button id="btn-paste" class="btn btn-default btn-sm hidden" data-url="{{route('media.move')}}"><i class="fa fa-paste"></i>&nbsp;Paste</button>--}}
                            <div class=" pull-right media-settings-dropdown">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"><i class="fa fa-ellipsis-v"></i>
                                    </button>
                                    <ul class="dropdown-menu" data-url = '{{route('media.settings.get')}}'>
                                        <li><a href="" id="setting-show-preview" >Show preview</a></li>
                                    </ul>
                                </div>
                                <!-- /btn-group -->

                            </div>
                            <div class="reload-box">
                                @include('adminlte.pages.media.index-without-header')
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div class="modal-footer text-right">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary btn-choose disabled">Select</button>
            </div>
        </div>
    </div>
</div>

<div id="modal-panel">
    {!! view('pages.media.modal-rename') !!}
    {!! view('pages.media.modal-add-folder') !!}
    {!! view('pages.media.modal-move') !!}
    {!! view('pages.media.modal-settings') !!}
</div>
<script>


    window.isModal = true;

    function activeBtnChoose(){
        let selectedFiles = $('.file.active');
        let btn = $('.btn-choose');
        console.log(selectedFiles);
        if (selectedFiles.length > 0)
            btn.removeClass('disabled');
        else
            btn.addClass('disabled');
    }
    $('body').on('click', function (event) {
        setTimeout(function () {
            activeBtnChoose();
        },100);
    });
    $('body').off('click', '.file-item').on('click', '.file-item', function () {
        setTimeout(function () {
            activeBtnChoose();
        },100);
    });
    $('body').off('dblclick', '.file').on('dblclick', '.file', function () {
        let file = $(this).data('data');
        let res = chooseFiles([file]);
        handleFilesChosen($(this), res);
    });

    $('body').off('click', '.btn-choose').on('click', '.btn-choose', function () {
        let selectedFiles = $('.file.active');
        if (selectedFiles.length > 0){
            let files = [];
            $.each(selectedFiles, function (index, value) {
                files.push($(value).data('data'));
            });
            let res = chooseFiles(files);
            handleFilesChosen($(this), res);
        }
    });
    function handleFilesChosen(el, files){
        let target = el.closest('.media-loader-parent').find('input');
        let imageWrapper = $('<div class="preview"></div>');
        let parent = el.closest('.media-loader-parent');

        parent.find('.preview').remove();
        var d = new Date();

        if (Array.isArray(files)){
            if (!target.attr('multiple')){
                toastr.error('Choose only an image',null,[]);
            }else {

                let url = [];

                $.each(files, function (i, value) {
                    if (value.image){
                        let div = $('<div class="preview-item"></div>');
                        let image = $('<img height="100">');
                        var imgUrl = value.url + '?t=' +  d.getTime();
                        image.attr('src',imgUrl);
                        image.attr('title',value.name);
                        image.attr('alt',value.name);
                        image.appendTo(div);
                        div.appendTo(imageWrapper);
                        url.push(value.url);
                    }
                });
                $(target[0]).val(JSON.stringify(url));
                console.log(url);
                el.closest('.modal').modal('hide');
            }
        }else {
            var imgUrl = files.url + '?t=' +  d.getTime();
            if (files.image){
                let div = $('<div class="preview-item"></div>');
                let image = $('<img height="150">');
                image.attr('src','{{url('/')}}' + '/' + imgUrl);
                image.attr('title',files.name);
                image.attr('alt',files.name);
                image.appendTo(div);
                div.appendTo(imageWrapper);
                $(target[0]).val(files.url);
                $(target[0]).trigger('change');
                el.closest('.modal').modal('hide');
            }
        }
        parent.prepend(imageWrapper);
    }

    function chooseFiles(files) {
        if (files.length === 1){
            return files[0]
        }
        let res = [];
        $.each(files, function (index, value) {
            res.push(value)
        });
        return res;
    }

    //index below

    window.loading = $('.fm-loading .before');
    window.fmnParent = $('.fmn-parent');

    window.ajaxLoading = {
        xhr: function () {
            let xhr = new window.XMLHttpRequest();
            //Download progress
            xhr.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    let percentComplete = (evt.loaded / evt.total) * 100;
                    window.loading.css('width', percentComplete + '%');
                }else {
                    window.loading.css('width', '100%');
                }
            }, false);
            return xhr;
        },
        beforeSend: function () {
            window.loading.css('opacity', '1');
            window.fmnParent.css('pointer-events','none')
        },
        complete: function () {
            setTimeout(function () {
                window.loading.css('width', '0%');
                window.loading.css('opacity', '0');
                window.fmnParent.css('pointer-events','auto');
            }, 100)
        },
    };

    function updateAjaxLoadingBeforeSend(doSomethingBefore, doSomethingComplete){ //ajaxData own beforeSend
        let newAjaxLoading = window.ajaxLoading;
        if (doSomethingBefore){
            let newAjaxLoadingBefore = function () {
                window.loading.css('opacity', '1');
                window.fmnParent.css('pointer-events','none')
                doSomethingBefore();
            };
            newAjaxLoading.beforeSend = newAjaxLoadingBefore;
        }
        if (doSomethingComplete){
            let newAjaxLoadingAfter = function () {
                setTimeout(function () {
                    window.loading.css('width', '0%');
                    window.loading.css('opacity', '0');
                    window.fmnParent.css('pointer-events','all');
                    doSomethingComplete();
                }, 100)
            };
            newAjaxLoading.complete = newAjaxLoadingAfter;
        }
        return newAjaxLoading;
    }

    window.fileSelect = $('.fileselect-fmg');
    window.fileSelect.customFileUpload({
        accepts: []
    });

    window.fileSelect.change(function () {
        let url = '{{route('cms.media.upload')}}';
        let me = $(this);
        let data = new FormData();
        $.each(me[0].files, function(i, file) {
            data.append('files[]', file);
        });
        var listElement = renderNewUploadItem(me[0].files);
        data.append('_token',$('meta[name="csrf-token"]').attr('content'));
        data.append('folder',$('input[name="current-folder"]').val());
        data.append('totalFile', me[0].files.length);

        $.ajax({
            url: url,
            type: 'POST',
            processData: false,
            contentType: false,
            data: data,
            error:function(error){
                switch (error.status) {
                    case 401:
                        toastr.error('Not authorized',null,[]);
                        break;
                    case 403:
                        toastr.error('Access Forbidden',null,[]);
                        break;
                    case 413:
                        toastr.error('Upload failed, the selected file too large',null,[]);
                        break;
                    case 400:
                        toastr.error(error.responseText,null,[]);
                        break;
                    case 419:
                        break;
                    case 500:
                        toastr.error('Internal Server Error',null,[]);
                        break;
                    default:  toastr.error('Upload Failed!',null,[]);
                }

                listElement.forEach(function (item) {
                    var element = $(item);
                    element.addClass('upload-failed').removeClass('loading newUpload');
                    setTimeout(function () {
                        element.remove();
                    }, 3000);

                });
            },
            success: function (result) {
                handleUploadItemSuccess(result, listElement);
            }
        });
    });
    $('body').off('click', '.show-list').on('click','.show-list', function () {
        changeView('list', this);
    });
    $('body').off('click', '.show-grid').on('click','.show-grid', function () {
        changeView('grid', this);
    });

    $('body').off('click', '.folder-item').on('dblclick','.folder-item', function (e) {
        e.preventDefault();
        e.stopPropagation();
        loadNewContent($(this).data('path'));
    });

    $('body').off('click', '.fm-breadcrumb').on('click','.fm-breadcrumb', function (e) {
        e.preventDefault();
        e.stopPropagation();
        loadNewContent($(this).attr('href'));
    });

    $('body').off('click', '.btn-reload').on('click','.btn-reload', function (e) {
        e.preventDefault();
        e.stopPropagation();
        let curPath = $('input[name="current-folder"]').val();
        if (curPath === '/'){
            loadNewContent('{{route('cms.media')}}');
        } else {
            loadNewContent($('input[name="current-path"]').val());
        }
    });

    $('body').off('click', '.btn-edit').on('click', '#btn-edit', function () {
        let file = $('.file-item.active');
        if (file.length == 0){
            swal("Error!", "No file chosen!", "error")
        }else if(file.length > 1) {
            swal("Error!", "Choose a file only pls!", "error")
        }else {
            let path = file.data('data');
            if (!path.path){
                swal("Error!", "This file is not supported!", "error")
            }else {
                getImageEdit(path.path);
            }
        }
    });


    function changeView(type, el) {
        $('.view-active').removeClass('view-active');
        $(el).addClass('view-active');
        viewType = type;
        handleShowViewByType();
    }

    function handleShowViewByType() {
        let view = $('.content-fmg');
        if (viewType === 'grid'){
            view.addClass('grid');
        }else {
            view.removeClass('grid');
        }
    }

    ///////////////////////////////////////////////////
    var curPath = $('input[name = "current-folder"]').val();
    //$('.curPath').data('path');
    hideButton();
    removePreviewContent();

    var selectedItem = {};
    var selectedList = [];
    var editableType = ['image/gif', 'image/jpeg', 'image/png'];
    var isShowPreview = !$('.file-preview').is(":hidden");
    var isUploadReplace = true;
    var viewType = $('.treeList').hasClass('grid')?'grid':'list';
    var listSort = {name:'{{$short['name']}}',order: '{{$short['order']}}'};

    $('body').off('click','.file-item.header > div:not(:first-child)').on('click','.file-item.header > div:not(:first-child)', function (e) {
        let me = $(this).children('i');
        listSort.name = me.data('short');
        if (me.hasClass('fa-angle-up')){
            listSort.order = 'des';
        } else {
            listSort.order = 'asc';
        }
        $('.btn-reload').trigger('click');
    });
    $('body').off('click', '.treeItem').on('click','.treeItem', function (e) {
        var element = $(e.currentTarget);
        selectedItem = element.data('data');
        if($.isEmptyObject(selectedItem)) {return;}

        if (!checkSelectMultiKeyPress(e))
        {
            $('.treeItem').removeClass('active');
            selectedList = [];
        }

        if(checkSelectMultiKeyPress(e) && element.hasClass('active')){
            element.removeClass('active');
            removeItemFromSelectedList(selectedItem);
            if(selectedList[0]) {
                selectedItem = selectedList[0];
            }else{
                selectedItem = {};
            }
        }else{
            element.addClass('active');
            selectedList.push(selectedItem);
        }
        showButton();
        setPreviewContent();
        e.stopPropagation();

    });

    function checkSelectMultiKeyPress(e){
        if(e.ctrlKey || e.metaKey) return true;
        return false;
    }

    function removeItemFromSelectedList(item){
        console.log(!selectedList[0]);
        if(!item || !selectedList || selectedList.length == 0) return;
        selectedList.forEach(function (currentItem, index) {
            if(currentItem.id == item.id){
                if(selectedItem && currentItem.id == selectedItem.id) {
                    selectedItem = selectedList[0]? selectedList[0]: {};
                    // removePreviewContent();
                    // if($.isEmptyObject(selectedItem)) hideButton();
                }
                selectedList.splice(index, 1);
                return;
            }
        });
    }

    function removeItemFromSelectedListByPath(path){
        if(!path || !selectedList || selectedList.length == 0) return;
        selectedList.forEach(function (currentItem, index) {
            if(currentItem.path == path){
                selectedList.splice(index, 1);
                if(selectedItem && currentItem.id == selectedItem.id) {
                    selectedItem = selectedList[0]? selectedList[0]: {};
                    removePreviewContent();
                    if($.isEmptyObject(selectedItem)) hideButton();
                }
                return;
            }
        });
    }

    function updateItemInSelectedList(itemID, newItem){
        if(!itemID || !selectedList || selectedList.length == 0) return;
        selectedList.forEach(function (currentItem, index) {
            if(currentItem.id == itemID){
                selectedList[index] = newItem;
                return;
            }
        });
    }

    $('body').off('click', '.treePanel').on('click', '.treePanel', function (e) {
        if(e.target.id == "file-preview") return;
        if($(e.target).closest('#file-preview').length)  return;
        selectedItem = {};
        selectedList = [];
        $('.treeItem').removeClass('active');
        hideButton();
        removePreviewContent();
    });

    function updateItemName(itemID, data) {
        if(!data) return;
        var item = $('#' + itemID);
        $('#detail-name').text(data.name);
        updateItemInSelectedList(selectedItem.id, data);
        selectedItem = data;
        $(item).data('data', data).data('id', data.path)
            .attr('data-data', JSON.stringify(data)).attr('data-id', data.path);
        $(item).children('.last-modified').text(data.lastModified);
        $(item).children('.name').text(data.name).attr('title', data.name);
        $(item).children('.thumb').children('img').attr('src', data.url);

        if(data.type == 'folder'){
            $(item).data('path', data.dataPath);
        }
        $(item).attr('id', data.id);
    }

    function setPreviewContent() {
        if($.isEmptyObject(selectedItem)) {return;}
        $('#detail-name').html(selectedItem.name);
        $('#detail-size').html(selectedItem.size);
        $('#detail-last-modified').html(selectedItem.lastModified);
        $('#detail-type').html(selectedItem.type);

        if(selectedItem.type == 'folder'){
            $('#preview-img').attr('src','https://www.materialui.co/materialIcons/file/folder_grey_192x192.png');
            $('.groupDetailSize').hide();
            $('.groupDetailLastModified').hide();
        }else{
            if(editableType.includes(selectedItem.type)) {
                $('#preview-img').attr('src',selectedItem.url);
            }else{
                $('#preview-img').attr('src','https://png.pngtree.com/svg/20160307/51b4fb208b.svg');
            }
            $('.groupDetailSize').show();
            $('.groupDetailLastModified').show();
        }

        $('.file-preview .file-preview-inner').show();
    }

    function removePreviewContent(){
        $('#detail-name').html('');
        $('#detail-size').html('');
        $('#detail-last-modified').html('');
        $('#detail-type').html('');
        $('.file-preview .file-preview-inner').hide();
    }

    function showButton() {
        if($.isEmptyObject(selectedItem)) {hideButton(); return;}

        $('.btn-tool .btn').each(function() {
            $( this ).show();
        });

        if(selectedList.length > 1) {
            $('#btn-rename').hide();
            $('#btn-copy').hide();
            $('#btn-edit').hide();
        }

        if(!editableType.includes(selectedItem.type)){
            $('#btn-edit').hide();
        }
        if(selectedItem.type == 'folder'){
            $('#btn-copy').hide();
        }
    }

    function hideButton() {
        $('.btn-tool .btn').each(function() {
            $( this ).hide();
        });
    }



    $('#setting-show-preview').off('click').click(function (e) {
        e.preventDefault();
        $('.file-preview').toggle();
        isShowPreview = !$('.file-preview').is(":hidden");
        if(isShowPreview){
            $('.treeList').removeClass('col-xs-12').addClass('col-xs-9');
        }else {
            $('.treeList').removeClass('col-xs-9').addClass('col-xs-12');
        }
    });

    $('#btn-copy').off('click').click(function (e) {
        if($.isEmptyObject(selectedItem)) {return;}
        setClipboardText(selectedItem.urlFull);
    });

    $('#btn-rename').off('click').click(function (e) {
        if($.isEmptyObject(selectedItem)) {return;}
        $('#modal-rename input[name="oldName"]').val(selectedItem.name);
        $('#modal-rename input[name="newName"]').val(selectedItem.name);

        $('#form-rename #alert-error p').text('');
        $('#form-rename #alert-error').hide();
        $('#modal-rename').modal('show');
    });

    $('#modal-rename').on('shown.bs.modal', function(){
        $( "#modal-rename input" ).focus().select();
    });

    $('#btn-add-folder').off('click').click(function (e) {
        $('#form-add-folder #alert-error p').text('');
        $('#form-add-folder #alert-error').hide();
        $( "#modal-add-folder input" ).select();

        $('#modal-add-folder').modal('show');
    });
    $('#modal-add-folder').on('shown.bs.modal', function(){
        $( "#inpNewFolderName" ).focus().select();
    });
    var directoryPath = "";
    var destinationPath = "";

    $('#btn-move').off('click').click(function (e) {
        if($.isEmptyObject(selectedItem)) {return;}

        $('#modal-move #alert-error p').text('');
        $('#modal-move #alert-error').hide();
        $('#modal-move #btn-move-submit').data('data', selectedItem);
        $('#btn-create-folder').show();
        $('#btn-move-submit').show();
        $('#modal-move').modal('show');
        getDirectoryList("/");
    });

    function getDirectoryList(path){
        url = $('#modal-move').data('tree-url');
        console.log(path);
        $.ajax({
            type: "GET",
            url: url,
            data: {
                'path': path
            },
            error:function(error){
                switch (error.status) {
                    case 401:
                        toastr.error('Not authorized',null,[]);
                        break;
                    case 403:
                        toastr.error('Access Forbidden',null,[]);
                        break;
                    case 400:
                        toastr.error(error.responseText,null,[]);
                        break;
                    case 419:
                        break;
                    case 500:
                        toastr.error('Internal Server Error',null,[]);
                        break;
                    default:  toastr.error('Load Folder Failed!',null,[]);
                }
            },

            success: function(data)
            {
                $('#modal-move .modal-body').empty().append(data);
                directoryPath = destinationPath = path ;
                $('#btn-create-folder').show();
                $('#btn-move-submit').show();
                $('#modal-move #alert-error p').text("");
                $('#modal-move #alert-error').hide();

            }
        });
    }

    $('body').off('click', '.modalTreeItem').on('click', '.modalTreeItem', function (e) {
        var me = $(e.currentTarget);
        $('.modalTreeItem').removeClass('active');
        me.addClass('active');
        e.stopPropagation();
        var data = $(e.currentTarget).data(data);
        if(data && data.data){
            if(!directoryPath || directoryPath == '/' ){
                destinationPath = data.data.name;
            }else{
                destinationPath = directoryPath + '/' + data.data.name;
            }
        }
    });

    $('body').off('dblclick', '.modalTreeItem').on('dblclick', '.modalTreeItem', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var data = $(e.currentTarget).data(data);
        if(data && data.data){
            if(!directoryPath || directoryPath == '/' ){
                directoryPath = data.data.name;
            }else{
                directoryPath = directoryPath + '/' + data.data.name
            }
            getDirectoryList(directoryPath);
        }
    });

    $('body').off('click', '.tree-breadcrumb-link').on('click', '.tree-breadcrumb-link', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var data = $(e.currentTarget).attr('href');
        if(data){
            directoryPath = data;
            getDirectoryList(directoryPath);
        }
    });

    $('body').off('click', '.angleRight').on('click', '.angleRight', function (e) {
        e.stopPropagation();
        e.preventDefault();
        var parent = $(e.currentTarget).parent();
        var data = parent.data('data');
        console.log(data);
        if(data){
            if(!directoryPath || directoryPath == '/' ){
                directoryPath = data.name;
            }else{
                directoryPath = directoryPath + '/' + data.name
            }
            getDirectoryList(directoryPath);
        }
    });

    $('body').off('click', '.modalTreePanel').on('click', '.modalTreePanel', function (e) {
        me = $(e.currentTarget);
        $('.modalTreeItem').removeClass('active');

        if(!$('#form-tree-add').is(":hidden") && (e.target.id != 'form-tree-add' && !$(e.target).closest('#form-tree-add').length) ){
            $('#form-tree-add').hide();
            $('#btn-create-folder').show();
            $('#modal-move #alert-error p').text("");
            $('#modal-move #alert-error').hide();
            $('#btn-move-submit').show();
        }
        destinationPath = directoryPath;
    });


    $('body').on('click', '#btn-create-folder', function (e) {
        me = $(e.currentTarget);
        $('#form-tree-add').show();
        $( "#newName" ).focus().select();
        $('#btn-create-folder').hide();
        $('#btn-move-submit').hide();
    });


    $("body").off('click','#form-tree-add [type="submit"]').on('click','#form-tree-add [type="submit"]',function(e) {
        e.preventDefault();
        $('#form-tree-add').submit();
    });

    $('body').off('submit', '#form-tree-add').on('submit', '#form-tree-add', function (e) {
        $('#modal-move #alert-error p').text("");
        $('#modal-move #alert-error').hide();
        e.preventDefault(); // avoid to execute the actual submit of the form.
        e.stopPropagation();
        var form = $(this);
        form.addClass('disabled');
        var url = form.attr('action');
        var data = form.serialize() + '&curPath='+ directoryPath;

        $.ajax({
            type: "POST",
            url: url,
            data: data, // serializes the form's elements.
            error:function(error){
                switch (error.status) {
                    case 401:
                        toastr.error('Not authorized',null,[]);
                        form.removeClass('disabled');
                        break;
                    case 403:
                        toastr.error('Access Forbidden',null,[]);
                        form.removeClass('disabled');
                        break;
                    case 400:
                        $('#modal-move #alert-error p').text(error.responseText);
                        $('#modal-move #alert-error').show();
                        form.removeClass('disabled');
                        break;
                    case 419:
                        break;
                    case 422:
                        $('#modal-move #alert-error p').text(getValidateErrorText(error.responseJSON.errors));
                        $('#modal-move #alert-error').show();
                        form.removeClass('disabled');
                        break;
                    case 500:
                        toastr.error('Internal Server Error',null,[]);
                        form.removeClass('disabled');
                        break;
                    default:  toastr.error('Add Failed!',null,[]);
                        form.removeClass('disabled');
                }
            },
            success: function(data)
            {
                if(data){
                    $('.modalTreeList').append(data.treeFolder);
                    if(curPath == directoryPath){
                        $('.treeList').append(data.folder);
                    }
                }

                $('#form-tree-add').hide();
                $('#modal-move #alert-error p').text("");
                $('#modal-move #alert-error').hide();
                $('#btn-create-folder').show();
                $('#btn-move-submit').show();
                form.removeClass('disabled');
            }
        });
        return false;
    });

    $('#btn-move-submit').off('click').click(function (e) {
        $('#modal-move #alert-error p').text("");
        $('#modal-move #alert-error').hide();
        if(!selectedList || selectedList.length == 0 || !destinationPath) {return;}
        let me = $(this)
        let url = me.data('url');
        $.ajax({
            type: "POST",
            url: url,
            data: {
                '_token': $('meta[name="csrf-token"]').attr('content'),
                'destinationPath': destinationPath,
                'selectedList' : selectedList
            },
            error:function(error){
                switch (error.status) {
                    case 401:
                        toastr.error('Not authorized',null,[]);
                        $('#modal-move').modal('hide');
                        break;
                    case 403:
                        toastr.error('Access Forbidden',null,[]);
                        $('#modal-move').modal('hide');
                        break;
                    case 400:
                        $('#modal-move #alert-error p').text("Cannot move file/folder");
                        $('#modal-move #alert-error').show();
                        break;
                    case 419:
                        break;
                    case 500:
                        toastr.error('Internal Server Error',null,[]);
                        $('#modal-move').modal('hide');
                        break;
                    default:  toastr.error('Move Failed!',null,[]);
                        $('#modal-move').modal('hide');
                }
            },
            success: function(data)
            {
                //toastr.success('Move success!', null, []);
                handleMoveItemSuccess(data);
                //$('#modal-move').modal('hide');
            }
        });
    });

    $("#form-rename").off('click').submit(function(e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
        $('#form-rename #alert-error p').text("");
        $('#form-rename #alert-error').hide();
        var form = $(this);
        var url = form.attr('action');
        var data = form.serialize() + '&curPath='+ curPath;

        $.ajax({
            type: "POST",
            url: url,
            data: data, // serializes the form's elements.
            error:function(error){
                switch (error.status) {
                    case 401:
                        toastr.error('Not authorized',null,[]);
                        $('#modal-rename').modal('hide');
                        break;
                    case 403:
                        toastr.error('Access Forbidden',null,[]);
                        $('#modal-rename').modal('hide');
                        break;
                    case 400:
                        $('#form-rename #alert-error p').text(error.responseText);
                        $('#form-rename #alert-error').show();
                        break;
                    case 404:
                        toastr.error('File/Folder does not exist!',null,[]);
                        $('#modal-rename').modal('hide');
                        break;
                    case 419:
                        break;
                    case 422:
                        $('#form-rename #alert-error p').text(getValidateErrorText(error.responseJSON.errors));
                        $('#form-rename #alert-error').show();
                        break;
                    case 500:
                        toastr.error('Internal Server Error',null,[]);
                        $('#modal-rename').modal('hide');
                        break;
                    default:  toastr.error('Rename Failed!',null,[]);
                        $('#modal-rename').modal('hide');
                }
            },
            success: function(data)
            {
                toastr.success('Rename successfully!',null,[]);
                updateItemName(selectedItem.id, data);
                $('#modal-rename').modal('hide');
            }
        });
    });

    $("#form-add-folder").submit(function(e) {
        e.preventDefault(); // avoid to execute the actual submit of the form.
        $('#form-add-folder #alert-error p').text("");
        $('#form-add-folder #alert-error').hide();
        var form = $(this);
        var url = form.attr('action');
        var data = form.serialize() + '&curPath='+ curPath;

        $.ajax({
            type: "POST",
            url: url,
            data: data, // serializes the form's elements.
            error:function(error){
                switch (error.status) {
                    case 401:
                        toastr.error('Not authorized',null,[]);
                        $('#modal-add-folder').modal('hide');
                        break;
                    case 403:
                        toastr.error('Access Forbidden',null,[]);
                        $('#modal-add-folder').modal('hide');
                        break;
                    case 400:
                        $('#form-add-folder #alert-error p').text(error.responseText);
                        $('#form-add-folder #alert-error').show();
                        break;
                    case 419:
                        break;
                    case 422:
                        $('#form-add-folder #alert-error p').text(getValidateErrorText(error.responseJSON.errors));
                        $('#form-add-folder #alert-error').show();
                        break;
                    case 500:
                        toastr.error('Internal Server Error',null,[]);
                        $('#modal-add-folder').modal('hide');
                        break;
                    default:  toastr.error('Add Failed!',null,[]);
                        $('#modal-add-folder').modal('hide');
                }
            },
            success: function(data)
            {
                console.log(data);
                $('#modal-add-folder').modal('hide');
                $('.treeList').append(data);
                $('.table-caption').hide();
            }
        });

    });

    function loadNewContent(url) {
        let ajaxStruct = {
            type: "GET",
            url: url,
            data: {
                'type': 'reload',
                'isShowPreview': isShowPreview,
                'viewType': viewType,
                'sort': listSort,
            },
            error:function(error){
                switch (error.status) {
                    case 401:
                        $('#modal-edit-menu').modal('hide');
                        toastr.error('Not authorized',null,[]);
                        break;
                    case 403:
                        $('#modal-edit-menu').modal('hide');
                        toastr.error('Access Forbidden',null,[]);
                        break;
                    case 400:
                        $('#modal-edit-menu').modal('hide');
                        toastr.error(error.responseText,null,[]);
                        break;
                    case 419:
                        break;
                    case 500:
                        $('#modal-edit-menu').modal('hide');
                        toastr.error('Internal Server Error',null,[]);
                        break;
                    default:  toastr.error('Load Folder Failed!',null,[]);
                }
            },
            success: function(data)
            {
                selectedList = [];
                selectedItem = {};
                $('.reload-box').empty().html(data);
                hideButton();
                removePreviewContent();
                handleShowViewByType();
                curPath = $('input[name = "current-folder"]').val();
            }
        };
        let newAjaxLoading = updateAjaxLoadingBeforeSend(function () {
            console.log('before send')
        }, function () {
            console.log('complete send')
        });
        ajaxStruct = Object.assign(ajaxStruct, newAjaxLoading);
        $.ajax(ajaxStruct);
    }

    $('#btn-delete').off('click').click(function (e) {
        if(!selectedList && selectedList.length == 0) return;
        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete?",
            icon: "warning",
            dangerMode: true,
            buttons: true,
        })
            .then(willDelete => {
                if (willDelete) {
                    let me = $(this)
                    let url = me.data('url');
                    $.ajax({
                        url: url,
                        type: 'DELETE',
                        data: {
                            '_token': $('meta[name="csrf-token"]').attr('content'),
                            'selectedList' : selectedList
                        },
                        error:function(error){
                            switch (error.status) {
                                case 401:
                                    toastr.error('Not authorized',null,[]);
                                    break;
                                case 403:
                                    toastr.error('Access Forbidden',null,[]);
                                    break;
                                case 400:
                                    toastr.error(error.responseText, null, []);
                                    break;
                                case 419:
                                    break;
                                case 500:
                                    toastr.error('Internal Server Error',null,[]);
                                    break;
                                default:  toastr.error('Delete Failed!',null,[]);
                            }
                        },
                        success: function (result) {
                            //$('.btn-reload').trigger('click');
                            //toastr.success('Deleted!', null, []);
                            handleDeleteItemSuccess(result);
                        }
                    });
                }
            })
    });

    function setClipboardText(text){
        var id = "mycustom-clipboard-textarea-hidden-id";
        var existsTextarea = document.getElementById(id);

        if(!existsTextarea){
            console.log("Creating textarea");
            var textarea = document.createElement("textarea");
            textarea.id = id;
            // Place in top-left corner of screen regardless of scroll position.
            textarea.style.position = 'fixed';
            textarea.style.top = 0;
            textarea.style.left = 0;

            // Ensure it has a small width and height. Setting to 1px / 1em
            // doesn't work as this gives a negative w/h on some browsers.
            textarea.style.width = '1px';
            textarea.style.height = '1px';

            // We don't need padding, reducing the size if it does flash render.
            textarea.style.padding = 0;

            // Clean up any borders.
            textarea.style.border = 'none';
            textarea.style.outline = 'none';
            textarea.style.boxShadow = 'none';

            // Avoid flash of white box if rendered for any reason.
            textarea.style.background = 'transparent';
            document.getElementById("modal-popup-file").appendChild(textarea);
            //console.log("The textarea now exists :)");
            existsTextarea = document.getElementById(id);
        }else{
            //console.log("The textarea already exists :3")
        }
        existsTextarea.value = text;
        existsTextarea.select();
        try {
            var status = document.execCommand('copy');
            if(!status){
                toastr.error('Cannot copy text', null, []);
            }else{
                toastr.success('The link is now on the clipboard',null,[]);
            }
        } catch (err) {
            toastr.error('Unable to copy', null, []);
        }
    }

    function getImageEdit(imagePath) {
        let url = '{{route('cms.media.edit-image')}}';
        $.ajax({
            type: "GET",
            url: url,
            data: {
                'image-path': imagePath
            },
            error:function(error){
                switch (error.status) {
                    case 401:
                        toastr.error('Not authorized',null,[]);
                        break;
                    case 403:
                        toastr.error('Access Forbidden',null,[]);
                        break;
                    case 404:
                        toastr.error('File not found',null,[]);
                        break;
                    case 400:
                        toastr.error(error.responseText, null, []);
                        break;
                    case 419:
                        break;
                    case 500:
                        toastr.error('Internal Server Error',null,[]);
                        break;
                    default:  toastr.error('Cannot get image',null,[]);
                }
            },
            success: function(data){
                $('#content').append(data);
                let modal = $('#modal-edit-image');
                modal.modal('show');
                modal.on('hidden.bs.modal', function () {
                    modal.remove();
                    $('.modal-backdrop').remove();
                });
            }
        });
    };

    // sau
    window.handleImageLoadFailed = function (event) {
        $(this).replaceWith($(' <i class="fa fa-file" aria-hidden="true"></i>'));
    }

    function renderNewUploadItem(files) {
        if(!files) return [];
        listElement = [];
        $.each(files, function(i, file) {
            var div = $('<div class="file-item treeItem file loading newUpload" data-name='+  JSON.stringify(file.name)  +'></div>');
            var divThumb = $(' <div class="thumb"></div>');
            var img = {};
            if(editableType.includes(file.type)) {
                img =$('<img class="imgUploadThumb" onerror="javascript:handleImageLoadFailed.call(this, event);">');
                divThumb.append(img);
            }else{
                divThumb.append($(' <i class="fa fa-file" aria-hidden="true"></i>'));
            }
            div.append(divThumb);
            div.append($('<div class="name">'+ file.name +'</div>'));
            div.append($('<div class="type">'+ file.type +'</div>'));
            div.append($('<div class="size">'+ $.bytesToSize(file.size) +'</div>'));
            div.append($('<div class="last-modified">...</div>'));
            div.append($('<div class="clearfix"></div>'));

            $('.treeList').append(div);
            listElement.push(div);


            var reader = new FileReader();
            reader.onload = function(e) {
                if(img) $(img).attr('src',e.target.result);
            }
            reader.readAsDataURL(file);
        });
        return listElement;
    }

    $('body').off('error', '.imgUploadThumb').on('error', '.imgUploadThumb', function (e) {
        console.log('failed ', $(this));
    });

    function handleUploadItemSuccess(result, listElement) {
        if($.isEmptyObject(result)) {
            listElement.forEach(function (item) {
                var element = $(item);
                element.addClass('upload-failed');
                setTimeout(function () {
                    element.remove();
                }, 3000);

            });
            toastr.error('Upload failed!', null, []);
            return;
        }

        result.errorFiles.forEach(function (item) {
            console.log(item.name);
            listElement.forEach(function (el, index, object) {
                var element = $(el);
                if(item.name == element.data('name')){
                    element.addClass('upload-failed').removeClass('loading newUpload');
                    object.splice(index, 1);
                    setTimeout(function () {
                        element.remove();
                    }, 3000);
                    return;
                }
            });

        });

        if(result.numberItemSuccess > 0 && result.numberItemFailed > 0){
            toastr.warning('some file/folder could not be upload!', null, []);
        }else{
            if(result.numberItemSuccess == 0){
                if(result.numberItemFailed == 1){
                    toastr.error(result.errorFiles[0].errorMsg, null, []);
                }else{
                    toastr.error('Upload failed!', null, []);
                }
            }
        }
        // console.log(result);
        if(result.doneFiles){
            result.doneFiles.forEach(function (item) {
                updateUploadSuccessItem(item, listElement);
                removeIdenticalItem(item);
            });
        }

        listElement.forEach(function (item) {
            $(item).removeClass('loading newUpload');
        });

    }

    function updateUploadSuccessItem(data) {
        if(!data) return;
        // console.log(data);
        listElement.forEach(function (item) {
            if($(item).data('name') == data.old_name){
                $(item).attr('data-data', JSON.stringify(data))
                    .attr('data-id', data.path);
                $(item).children('.last-modified').text(data.lastModified);
                $(item).children('.name').text(data.name).attr('title', data.name);
                $(item).children('.type').text(data.type);
                $('.table-caption').hide();
            }
        });
    }

    function removeIdenticalItem(data) {
        if(!isUploadReplace || !data) return;
        $('div:not(.newUpload)[data-id="'+ data.path +'"]').remove();
    }

    function handleDeleteItemSuccess(result) {
        if($.isEmptyObject(result)) {
            return;
        }

        if(result.numberItemSuccess > 0 && result.numberItemFailed > 0){
            toastr.warning('some file/folder could not be deleted!', null, []);
        }else{
            if(result.numberItemSuccess == 0){
                toastr.error('Delete failed!', null, []);
            }
        }
        if(result.doneFiles){
            result.doneFiles.forEach(function (item) {
                updateSuccessItemDelete(item);
                removeItemFromSelectedListByPath(item);
                if($('.file-item').length < 2){
                    $('.table-caption').show();
                }
            });
        }

        $('.treeItem').removeClass('loading');
    }

    function updateSuccessItemDelete(data) {
        if(!data) return;
        // console.log(data);
        $('div [data-id="'+ data +'"]').remove();
    }

    function handleMoveItemSuccess(result) {
        if($.isEmptyObject(result)) {
            return;
        }
        if(result.numberItemSuccess > 0 && result.numberItemFailed > 0){
            $('#modal-move #alert-error p').text("some file/folder is could not be moved ");
            $('#modal-move #alert-error').show();
        }else{
            if(result.numberItemSuccess == 0){
                if(result.numberItemFailed == 1){
                    $('#modal-move #alert-error p').text(result.errorFiles[0].errorMsg);
                    $('#modal-move #alert-error').show();
                }else{
                    $('#modal-move #alert-error p').text("Move failed");
                    $('#modal-move #alert-error').show();
                }
            }

            if(result.numberItemFailed == 0){
                toastr.success('Moved successfully!', null, []);
                $('#modal-move').modal('hide');
            }
        }

        if(result.doneFiles){
            result.doneFiles.forEach(function (item) {
                updateSuccessItemDelete(item);
                removeItemFromSelectedListByPath(item);
            });
        }
        $('.treeItem').removeClass('loading');
    }

    function getValidateErrorText(errors){
        var text = '';
        if(errors){
            for (var key in errors) {
                if (errors.hasOwnProperty(key)) {
                    text += errors[key][0];
                }
            }
            return text;
        }
        else{
            return null;
        }
    }

</script>