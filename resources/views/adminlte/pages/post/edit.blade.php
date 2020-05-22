@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@push('css')
    <style>
        .drag-disabled + .note-editor .note-dropzone { opacity: 0 !important; }
        .block-csf div { padding: 9px 24px 0px 13px; display: -webkit-box;}
        .block-csf, .block-image .input-group{ display: -webkit-box;}
        .block-image{ display: block !important; }
        input{ height: 33px;}
    </style>
@endpush

@section('content')

<div class="row">
    <div class="col-md-12">
        <div class="box box-info " id="filedrag">
            <div class="box-header with-border">
                <h3 class="box-title col-xs-6">Edit post</h3>
                <div class="text-right col-xs-6" style="padding: 0">
                    @include('adminlte.partials.lang')
                </div>
                <!-- <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label> -->
            </div>
              <div class="box-body pad">
  
                  <form action="{{route('posts.update',[$data->id])}}" class="form-group" method="POST" enctype="multipart/form-data" novalidate>
                  {{ csrf_field() }}
                    {{ method_field('PUT') }}
                    <input name="lang" value="{{session('locale')}}" hidden>
                    <div class="row">
                      <div class="col-md-8">
                          <label>Title &nbsp;<span style="color:#db4437;">*</span></label>
                          <input type="text"  name="title"  value="{{$data->title}}" class="form-control" placeholder="Enter title here" required>
                          <br/>

                          <label>Slug</label>
                            <input type="text" class="form-control" value=" {{$data->slug}}" name="slug" id="slugPost">
                          <br/>

                          <label>Title  Seo</label>
                          <input type="text"  name="title_seo"  value="{{$data->title_seo}}" class="form-control slug-content" placeholder="Enter title here" required>
                          <br/>

                          <label>Description</label>
                          <textarea class="form-control" rows="5"  name="description" placeholder="Place your post content here">{{$data->description}}</textarea><br/>

                          <label>Content</label>
                          <textarea class="contentEditor drag-disabled"   name="content" placeholder="Place your post content here"
                                    style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;">
                                    {{$data->content}}
                          </textarea><br/>

                          
                          @if(!empty($custom_fields['select']) || count($data->attributes) >0)
                                <hr>
                              {{edit_custom_field($data)}}
                              <div class="form-group" id="customField">
                                  <label class=" "> Custom fields</label>
                              @if(count($data->attributes) >0)
                                @foreach($data->attributes as $key => $attribute)
                                  <div class="row" data-key="{{$key}}">
                                      <div class="col-xs-8 col-md-3 pr-0">
                                          <input class="form-control slug{{$key}}" name="attributes[{{$key}}][display_name]" @if($attribute->attDefault == 1) readonly="readonly" @endif value="{{$attribute->name}}">
                                          @if($attribute->attDefault == 0)
                                            <button type="button" class="btn btn-xs btn-link mt-1 btnRemove">remove</button>
                                          @endif
                                      </div>
                                        <script>
                                            $('.slug{{$key}}'+'').change(function () {
                                                $('.slug{{$key}}'+'').val($.str_slug($(this).val()));
                                            });
                                        </script>
                                      <div class="col-xs-4 col-md-2 pr-0">
                                          <select class="form-control changeType" name="attributes[{{$key}}][type]">
                                          @switch($attribute->type)
                                              @case ('richTextEditor')
                                                  <option value="{{$attribute->type}}">Rich Text Editor</option>
                                                  @break
                                              @case ('text')
                                                  <option value="{{$attribute->type}}">Text</option>
                                                  @break
                                              @case ('number')
                                                  <option value="{{$attribute->type}}">Number</option>
                                                  @break
                                              @case ('email')
                                                  <option value="{{$attribute->type}}">Email</option>
                                                  @break
                                              @case ('time')
                                                  <option value="{{$attribute->type}}">Time</option>
                                                  @break
                                              @case ('boolean')
                                                  <option value="{{$attribute->type}}">Yes or No</option>
                                                  @break
                                              @case ('image')
                                                  <option value="{{$attribute->type}}">Image</option>
                                                  @break
                                              @case ('dates')
                                                  <option value="{{$attribute->type}}">Date</option>
                                                  @break
                                              @case ('dateRanger')
                                                  <option value="{{$attribute->type}}">Date Ranger</option>
                                                  @break
                                              @case ('color')
                                                  <option value="{{$attribute->type}}">Color</option>
                                                  @break
                                              @default
                                                  <option value="{{$attribute->type}}">Text</option>
                                          @endswitch
                                          </select>
                                      </div>

                                      <div class="col-xs-12 col-md-7" id="{{$key}}">
                                          @switch($attribute->type)
                                              @case ('richTextEditor')
                                                  <textarea rows="2" name="attributes[{{$key}}][content]" class="form-control contentEditor-cs" placeholder="Input value">{{$attribute->content}}</textarea>
                                                  @break
                                              @case ('text')
                                                  <textarea rows="2" name="attributes[{{$key}}][content]" class="form-control" placeholder="Input value">{{$attribute->content}}</textarea>
                                                  @break
                                              @case ('number')
                                                  <input type="number" name="attributes[{{$key}}][content]" value="{{$attribute->content}}" class="form-control">
                                                  @break
                                              @case ('email')
                                                  <input type="email" name="attributes[{{$key}}][content]" value="{{$attribute->content}}" class="form-control">
                                                  @break
                                              @case ('time')
                                                  <input type="time" name="attributes[{{$key}}][content]" value="{{$attribute->content}}" class="form-control">
                                                  @break
                                              @case ('boolean')
                                                  <select class="form-control boolean"  name="attributes[{{$key}}][content]">
                                                      <option value="yes" {{$attribute->content == 'yes'?'selected':''}}>Yes</option>
                                                      <option value="no" {{$attribute->content == 'no'?'selected':''}}>No</option>
                                                  </select>
                                                  @break
                                              @case ('image')
                                                  <div class="form-group" >
                                                     <div class="media-loader-parent">
                                                         <div class="preview">
                                                             <div class="preview-item">
                                                                 <img height="150" src="{{url($attribute->content)}}" title="user2.png" alt="user2.png">
                                                             </div>
                                                         </div>
                                                         <div class="input-group">
                                                             <span class="input-group-addon" ><i class="fa fa-upload"></i></span>
                                                             <input name="attributes[{{$key}}][content]" value="{{$attribute->content}}"  autocomplete="off" type="text" class="form-control media-loader" placeholder="Choose file" >
                                                         </div>
                                                     </div>
                                                    </div>
                                                  @break
                                              @case ('dates')
                                                  <div class="form-group">
                                                      <div class="input-group date">
                                                          <div class="input-group-addon">
                                                              <i class="fa fa-calendar"></i>
                                                          </div>
                                                          <input type="text" value="{{$attribute->content}}" name="attributes[{{$key}}][content]" class="form-control pull-right datepicker-cs">
                                                      </div>
                                                  </div>
                                                  @break
                                              @case ('dateRanger')
                                                  <div class="form-group">
                                                      <div class="input-group date">
                                                          <div class="input-group-addon">
                                                              <i class="fa fa-calendar"></i>
                                                          </div>
                                                          <input type="text" value="{{$attribute->content}}" name="attributes[{{$key}}][content]" class="form-control pull-right reservation-cs" >
                                                      </div>
                                                  </div>
                                                  @break
                                              @case ('color')
                                                  <div class="form-group">
                                                      <div class="input-group my-colorpicker-cs colorpicker-element">
                                                          <input type="text" value="{{$attribute->content}}" name="attributes[{{$key}}][content]" class="form-control">
                                                          <div class="input-group-addon">
                                                              <i></i>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  @break
                                              @default
                                              <input type="{{$attribute->type}}" name="attributes[{{$key}}][content]" value="{{$attribute->content}}" class="form-control">
                                          @endswitch
                                      </div>

                                      <div class="clearfix"></div>
                                      <div class="col-xs-12"><hr></div>
                                  </div>
                              @endforeach
                              @endif
                              </div>
                              @if(!empty($custom_fields['select']))
                                  <div class="text-right">
                                      <button type="button" class="btn btn-primary addMoreField" data-target="#customField"> <i class="fa fa-plus mr-1"></i> Add field</button>
                                  </div>
                              @endif
                          @endif
                      </div>
                      <div class="col-md-4">
                            <label for="category_id" class="">Category</label><br/>

                            <input type="hidden" name="category_id"/>
                            <select class="select2 category_id" style="width: 100%;" name="category_id"  >
                                <option value="">Choose Category</option>
                                {!! $treeComboBox !!}
                            </select><br/><br/>


                            <label> Tag</label><br/>
                            <select id="cbo-admins" class=" select2 tag_id" style="width: 100%;"  multiple="multiple" name="tag_id[]" style="width: 100%;" tabindex="-1" aria-hidden="true">

                                @foreach ($listTags as $item)
                                    <option {{$item->selected?'selected':''}} value={{$item->id}}>{{$item->tag_name}}</option>
                                @endforeach
                            </select>
                            <div class="form-group  ">
                                <label for="avatar" class="  control-label">Photo</label>

                                <div class="media-loader-parent">
                                    <div class="preview">
                                        <div class="preview-item">
                                            <img height="150" src="{{$data->photo}}" title="{{$data->photo}}" alt="">
                                        </div>
                                    </div>
                                    <div class="input-group ">
                                        <span class="input-group-addon"><i class="fa fa-upload"></i></span>
                                        <input type="text " class="form-control media-loader" placeholder="Choose file" name="photo" value="{{$data->photo}}">
                                    </div>
                                </div>
                            </div>

                        @if($isPublisher)
                              <br/>
                            <label>
                                <input class="flat-red" name='is_publish' id="is_publish" style='vertical-align: top;' {{$data->is_published==1?'checked':''}} type="checkbox"> <span>Publish this post</span>
                            </label>

                           <br/>
                           <div id='pick-publish-date' {{$data->is_published==1?'':'hidden'}}>
                               <label>Date publish</label>
                                @if($data->publish_date)
                                    <div class="input-group date">
                                        <div class="input-group-addon">
                                        <i class="fa fa-calendar"></i>
                                        </div>
                                        <input type="text" name="date" value = "{{\DateTime::createFromFormat('Y-m-d', $data->publish_date)->format('m/d/Y')}}" class="datepicker-ph form-control pull-right" >
                                    </div><br/>
                                @else
                                    <div class="input-group date">
                                        <div class="input-group-addon">
                                        <i class="fa fa-calendar"></i>
                                        </div>
                                        <input type="text" name="date" class="form-control  pull-right datepicker" id="datepicker" >
                                    </div><br/>
                                @endif
                           </div>
                        @endif
                    </div>
                        
                    </div>
                    <br/>
                    <div class="box-footer">
                              
                        <div class="col-md-12">

                            <div class=" pull-right">
                                <a href="{{route('posts.index')}}"  style='margin-right: 10px' class="btn btn-default">Cancel</a>
                                <button class="btn btn-primary"><i class="fa fa-save mr-1"></i>Save changes</button>
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
      $(function () {
          $('.select2').select2();
          $('.contentEditor-cs,.contentEditor').summernote({
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
                ['misc', [ 'help', 'fullscreen', 'codeview']]
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

          $(".datepicker-ph").datepicker({
              'autoclose': true
          })

          $(".datepicker").datepicker({
              'autoclose': true
          }).datepicker("setDate", new Date());

          $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
              checkboxClass: 'icheckbox_square-green'
          }).on('ifChanged', function(event){
              $("#pick-publish-date").toggle();
          });

          $('.my-colorpicker-cs').colorpicker()
          $(".datepicker-cs").datepicker({
              'autoclose': false
          });
          $('.reservation-cs').daterangepicker()

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
                  '        <select class="form-control changeType" data-target="#'+time+'" name="attributes['+time+'][type]" onclick="addField()">\n' +
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
          $('#slugPost').change(function () {
            $('#slugPost').val($.str_slug($(this).val()));
        });
      });

  </script>
@endpush