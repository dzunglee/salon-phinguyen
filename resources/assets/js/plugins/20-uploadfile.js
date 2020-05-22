+function ($) {
    'use strict';
    $.fn.customFileUpload =  function (options) {
        return this.each(function() {
            var el = $(this);
            el.options = options;
            el.validImageTypes = el.options.accepts || [];   //['image/gif', 'image/jpeg', 'image/png']
            el.me = el;
            el.multiple = el.attr('multiple');
            el.filedrag = $(el.data('filedrag'));
            el.defaultText = el.filedrag.find('.inputText').text();
            el.preview = $(el.data('preview'));
            el.inputText = el.filedrag.find('.inputText');
            el.init = function () {

                // showAvailableFile
                var availables = el.data('files');
                if(availables.length > 0){
                    for (var i = 0, f; f = availables[i]; i++) {
                        var div = $('<div class="preview-item"></div>');
                        var img = $('<img src="'+f+'" class="thumbnail">');
                        img.height(100);
                        el.preview.append(div.append(img))
                    }
                }

                if (window.File && window.FileList && window.FileReader) {
                    // file select
                    el.on("change", $.proxy(FileSelectHandler, this));

                    // is XHR2 available?
                    var xhr = new XMLHttpRequest();
                    if (xhr.upload) {
                        // file drop
                        var dragArea = $('<div class="dragArea"><div class="inputText">Drop files here</div></div>')
                        dragArea.prependTo(el.filedrag);
                        el.inputText = el.filedrag.find('.inputText');
                        el.defaultText = el.filedrag.find('.inputText').text();
                        el.filedrag.addClass('filedrag');
                        el.closest('label').addClass('btn-file');

                        el.filedrag.on("dragover", $.proxy(FileDragHover, this));
                        el.filedrag.on("dragleave",$.proxy(FileDragHover, this));
                        dragArea.on("drop", $.proxy(changeFile, this));
                    }
                }
            };



// file drag hover
            function FileDragHover(e) {
                e.stopPropagation();
                e.preventDefault();
                el.inputText.text(el.defaultText);
                if (e.type == "dragover") {
                    el.filedrag.addClass('hover');
                }else {
                    el.filedrag.removeClass('hover');
                }
            }


            function changeFile(e) {
                el.filedrag.removeClass('hover');
                e.stopPropagation();
                e.preventDefault();
                el[0].files = e.target.files || e.originalEvent.dataTransfer.files;
                el.trigger('change');
                $(e.target).removeClass('hover');
            }
// file selection
            function FileSelectHandler(e) {

                // cancel event and hover styling
                FileDragHover(e);

                // fetch FileList object
                var files = e.target.files || e.originalEvent.dataTransfer.files;
                var amount = el.multiple?30:1;
                if (checkAmount(files,amount)){
                    el.inputText.text(el.defaultText);
                    // process all File objects
                    if (fileValidation(files, el.validImageTypes)) {
                        console.log('validate success');
                        showFiles(files, el.preview);
                        if (files.length > 1)
                            el.inputText.text(files.length + ' files');
                        if (files.length === 1)
                            el.inputText.text(files[0].name);
                    }else {
                        el.filedrag.addClass('hover');
                        el.inputText.text('File format was invalid');
                        el.val('');
                        console.log('validate failed');
                        el.preview.empty();
                        setTimeout(function () {
                            el.filedrag.removeClass('hover');
                        }, 2000)
                    }
                }else {
                    el.filedrag.addClass('hover');
                    el.inputText.text('Amount of files was invalid');
                    el.val('');
                    el.preview.empty();
                    setTimeout(function () {
                        el.filedrag.removeClass('hover');
                    }, 2000)
                }

            }

            function fileValidation(files, validImageTypes){
                var res = true;
                if (validImageTypes.length>0){
                    for (var i = 0, f; f = files[i]; i++) {
                        if(!validImageTypes.includes(f.type))
                            res = false
                    }
                }
                return res;

            }

            function checkAmount(files, amount){
                amount = amount?amount:1;
                return files.length <= amount
            }

            function showFiles(files, preview) {
                if (preview.length == 1){
                    preview.empty();
                    for (var i = 0, f; f = files[i]; i++) {
                        readAndPreview(f,preview)
                    }
                }
            }
            function readAndPreview(file,preview) {

                // Make sure `file.name` matches our extensions criteria
                if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
                    var reader = new FileReader();

                    reader.addEventListener("load", function () {
                        var image = new Image();
                        image.height = 100;
                        image.title = file.name;
                        image.src = this.result;
                        image.className = 'thumbnail';
                        var div = '<div class="preview-item"></div>';
                        div = $(div).append(image);
                        preview.append( div );
                    }, false);

                    reader.readAsDataURL(file);
                }

            }

            el.init();

            function _change(e) {
                var self = this;
                var $el = self.$element, isDragDrop = arguments.length > 1, isAjaxUpload = self.isAjaxUpload,
                    tfiles = [], files = isDragDrop ? arguments[1] : $el.get(0).files;
                self.reader = null;
                if (isAjaxUpload) {
                    $.each(files, function (vKey, vFile) {
                        self._filterDuplicate(vFile, tfiles, fileIds);
                    });
                } else {
                    if (e.target && e.target.files === undefined) {
                        files = e.target.value ? [{name: e.target.value.replace(/^.+\\/, '')}] : [];
                    } else {
                        files = e.target.files || {};
                    }
                    tfiles = files;
                }
                if ($h.isEmpty(tfiles) || tfiles.length === 0) {
                    if (!isAjaxUpload) {
                        self.clear();
                    }
                    self._raise('fileselectnone');
                    return;
                }
            }
        });
    };
}(jQuery);




