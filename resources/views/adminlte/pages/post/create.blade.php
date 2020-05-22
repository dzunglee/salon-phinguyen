@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@push('css')
    <style>
        .drag-disabled + .note-editor .note-dropzone { opacity: 0 !important; }
        .block-csf div { padding: 9px 24px 0px 13px; display: -webkit-box;}
        .block-csf, .block-image .input-group, block-image span{ display: -webkit-box; !important;}
        .block-image{ display: block !important; }
        input{ height: 33px;}
    </style>
@endpush

@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="box box-info" id="filedrag">
            <div class="box-header with-border">
                <h3 class="box-title">Create new post</h3>
            </div>
                <div class="box-body pad">
                    <form action="{{route('posts.store')}}" class="form-group" method="POST"  enctype="multipart/form-data" >
                        {{ csrf_field() }}
                        <div class="row">
                        <div class="col-md-8">
{{--                            <div class="media-loader-parent">--}}
{{--                                <div class="input-group ">--}}
{{--                                    <span class="input-group-addon"><i class="fa fa-upload"></i></span>--}}
{{--                                    <input multiple type="text " class="form-control media-loader" placeholder="Choose file" value="storage/public/2UpjoyvHAc2SuwZBRtpcTBJLFBKTM-UBJ32GPL0-342e949b8d6a-192%20-%20Copy.png">--}}
{{--                                </div>--}}
{{--                            </div>--}}
                            <label>Title &nbsp;<span style="color:#db4437;">*</span></label>
                            <input id="post-title" type="text"  name="title" class="form-control" placeholder="Enter title here" required/><br/>

                            <label>Title  Seo</label>
                            <input type="text"  name="title_seo"   class="form-control slug-content" placeholder="Enter title seo here">
                            <br/>

                            <label>Description</label>
                            <textarea class="form-control" rows="5"  name="description" placeholder="Place your post description here"></textarea><br/>

                            <textarea class="contentEditor drag-disabled" name="content" placeholder="Place your post content here"
                                    style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;" required>
                            </textarea>
                            <hr>
                            @if(!empty($custom_fields['select']))
                                <h4><b>Custom fields</b></h4>
                                {{ defaultFields() }}
{{--                            {{ add_custom_field('number',['name'=>'number'],"text") }}--}}
                                <div class="no-cp">
                                    <div class="form-group" id="customField"></div>
                                </div>

                                <div class="text-right">
                                    <button type="button" class="btn btn-primary addMoreField" data-target="#customField"> <i class="fa fa-plus mr-1"></i> Add field</button>
                                </div>
                            @endif
                        </div>

                        <div class="col-md-4">
                                <div class="form-group">
                                        <label for="category_id" class="">Category</label><br/>
        
                                        <input type="hidden" name="category_id"/>
                                        <select class="select2 category_id" style="width: 100%;" name="category_id"  >
                                            <option value="">Choose Category</option>
                                            {!! $treeComboBox !!}
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label class=" "> Tag</label><br/>
                                        <select id="cbo-admins" class=" select2 tag_id" style="width: 100%;"  multiple="multiple" name="tag_id[]" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                            @foreach($listTags as $item)
                                                <option  value={{$item->id}}>{{$item->tag_name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                            <div class="form-group  ">
                                <label for="avatar" class="  control-label">Photo</label>
                                <div class="media-loader-parent">
                                    <div class="input-group ">
                                        <span class="input-group-addon"><i class="fa fa-upload"></i></span>
                                        <input autocomplete="off" multiple type="text" class="form-control media-loader" placeholder="Choose file" name="photo">
                                    </div>
                                </div>
                            </div>

                            @if($isPublisher)
                                <label>
                                    <input class="flat-red" name='is_publish' id="is_publish" style='vertical-align: top;' type="checkbox"> <span>Publish this post</span>
                                </label>
                                <br/>
                                <div id='pick-publish-date' hidden>
                                    <label>Date publish</label>
                                    <div class="input-group date">
                                        <div class="input-group-addon">
                                            <i class="fa fa-calendar"></i>
                                        </div>
                                        <input type="text" name="date" class="form-control  pull-right datepicker" id="datepicker">
                                    </div><br/>
                                </div>
                            @endif
                        </div>
                        </div>
                        <br/>
                        <div class="box-footer">

                            <div class="col-md-12">
                              <div class=" pull-right">
                                  <button class="btn btn-primary"><i class="fa fa-plus mr-1"></i> Add</button>
                              </div>
                            </div>
                        </div>
                    </form>
                </div>
        </div>
    </div>
    
</div>

@endsection

@push('scripts')

  <script type="text/javascript">
      function addField() {
          $('.my-colorpicker-cs').colorpicker()
          $(".datepicker-cs").datepicker({
              'autoclose': false
          }).datepicker("setDate", new Date());
          $('.reservation-cs').daterangepicker()
          var dt = new Date();
          var time = dt.getHours() + ":" + dt.getMinutes();
          if (dt.getMinutes() < 10 ){
              var time = dt.getHours() + ":0" + dt.getMinutes();
          }if (dt.getHours() < 10 ){
              var time = "0"+dt.getHours() + ":" + dt.getMinutes();
          }if (dt.getHours() < 10 && dt.getMinutes() < 10 ){
              var time = "0"+dt.getHours() + ":0" + dt.getMinutes();
          }
          $(".time").val(time);
      }

      function valueTexarea() {
          var x = document.getElementById("fname");
          alert(1);
          x.value = x.value.toUpperCase();
      }

      $(function () {
          $('.fileselect').customFileUpload({
              accepts: ['image/gif', 'image/jpeg', 'image/png']
          });

          $('.select2').select2();
          //bootstrap WYSIHTML5 - text editor
          var summernote = $('.contentEditor').summernote({
                height: 500,   //set editable area's height
                popover: {
                    image: [
                        ['custom', ['imageAttributes']],
                        ['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
                        ['float', ['floatLeft', 'floatRight', 'floatNone']],
                        ['remove', ['removeMedia']]
                    ],
                },
                lang: 'en-US',
                imageAttributes:{
                    icon: '<i class="note-icon-pencil"/>',
						  figureClass: 'figureClass',
						  figcaptionClass: 'captionClass',
						  captionText: 'Caption Goes Here.',
						  manageAspectRatio: true
                },
                callbacks: {
                    onImageUpload: function(image) {
                        console.log(image.length);
                            summernoteUploadImage(image);
                    },
                    onPaste: function (e) {
                        var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('text/html');
                        e.preventDefault();
                        var div = $('<div />');
                        div.append(bufferText);
                        div.find('*').removeAttr('style');
                        setTimeout(function () {
                            document.execCommand('insertHtml', false, div.html());
                        }, 10);
                    }
                },
                toolbar: [
                    console.log("1111"),
                // [groume, [list of button]]
                ['style', ['style']],
                ['style', ['bold', 'italic', 'underline']],
                        ['fontsize', ['fontsize']],
                ['color', ['color']],
                ['height', ['height']],
                ['operation', ['undo', 'redo']],
                ['font', ['strikethrough', 'superscript', 'subscript', 'clear']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['object', ['link', 'table', 'picture', 'video']],
                ['misc', [ 'help', 'fullscreen', 'codeview']],
            ]
          });
          function summernoteUploadImage(image){
            var data = new FormData();
            $.each(image, function(index, value){
                data.append("image[]", value);
            })
            console.log(data);
            
            data.append('_token', $('meta[name="csrf-token"]').attr('content'));
            $.ajax({
                url: '{{route('cms.media.image-summernote')}}',
                cache: false,
                contentType: false,
                processData: false,
                data: data,
                type: "post",
            success: function(res) {
                $.each(res.doneFiles, function(index, value){
                    var url = value.urlFull;
                    var image = $('<img>').attr('src',url);
                    
                    $('.contentEditor').summernote("insertNode", image[0]);
                });
            },
            error: function(data) {
                console.log(data);
            }
            });
        };

          $(".datepicker").datepicker({
              'autoclose': false
          }).datepicker("setDate", new Date());

          $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
              checkboxClass: 'icheckbox_square-green'
          }).on('ifChanged', function(event){
              $("#pick-publish-date").toggle();
          });

          $('.my-colorpicker').colorpicker()
          $(".datepicker").datepicker({
              'autoclose': false
          }).datepicker("setDate", new Date());
          $('.reservation').daterangepicker()

          let body = $('body');
          body.on('click', '.addMoreField', function () {
              var time = (new Date()).getTime();
              var html = $(
                  '<div class="row" data-key="'+time+'">\n' +
                  '    <div class="col-xs-8 col-md-3 pr-0">\n' +
                  '        <input class="form-control slug'+time+'" name="attributes['+time+'][display_name]" placeholder="Input name" required>\n' +
                  '        <button class="btn btn-xs btn-link mt-1 btnRemove">remove</button>\n' +
                  '    </div>\n' +
                  '    <div class="col-xs-4 col-md-2 pr-0">\n' +
                  '        <select class="form-control changeType" data-target="#'+time+'" name="attributes['+time+'][type]"  onclick="addField()">\n' +
                  {!! $custom_fields['select'] !!}
                  '        </select>\n' +
                  '    </div>\n' +
                  '    <div class="col-xs-12 col-md-7" id="'+time+'">\n' +
                  {!! $custom_fields['option'] !!}
                  '    </div>\n' +
                  '    <div class="col-xs-12"><hr></div>\n' +
                  '</div>');
              var me = $(this);
              $(me.data('target')).append(html)
              $('.contentEditor-cs').summernote({
                  height: 150,
              });
              $('.slug'+time+'').change(function () {
                  $('.slug'+time+'').val($.str_slug($(this).val()));
              });
              $('.my-colorpicker-cs').colorpicker()
              $(".datepicker-cs").datepicker({
                  'autoclose': false
              }).datepicker("setDate", new Date());
              $('.reservation-cs').daterangepicker();

          });
      });

      // $("#post-title").on('input',function(e){
      //     //console.log($(this).val());
      //     $("#post-slug").attr("placeholder", string_to_slug($(this).val()));
      // })
  </script>
@endpush