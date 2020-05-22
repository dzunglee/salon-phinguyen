@extends('layouts.adminlte')

@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="nav-tabs-custom">
        <div class="tab-content">
            <form role="form" method="post" action="{{route('site-settings.save')}}" pjax>
                {{ csrf_field() }}
                <input type="hidden" name="tab" value="{{request('tab')}}">
                @foreach($data as $key => $setting)
                    @switch($setting['type'])
                        @case('custom-column')
                        <div class="form-group">
                            <label>{{$setting['text']}}
                                @if($setting['required'])
                                    <span class="text-red">*</span>
                                @endif
                            </label>
                            <div class="row">
                                @foreach($setting['data'] as $col)
                                    @foreach($col['data'] as $k => $colData)
                                        <div class="{{$col['class']}}">
                                            @switch($colData['type'])
                                                @case('text')
                                                <input value="{{$colData['data']}}" id="{{$k}}" name="{{$k}}"
                                                       type="{{$colData['typeInput']}}" class="form-control"
                                                       placeholder="{{$colData['placeholder']}}"
                                                       minlength="{{$colData['minlength']}}"
                                                       maxlength="{{$colData['maxlength']}}"
                                                       min="{{$colData['minlength']}}"
                                                       max="{{$colData['maxlength']}}" {{$colData['required']?'required':''}}>
                                                @break
                                                @case('select')
                                                <select id="{{$k}}" class="form-control"
                                                        name="{{$k}}" {{$colData['multiple']?'multiple':''}}>
                                                    @foreach($colData['data'] as $option)
                                                        <option value="{{$option['value']}}" {{$option['selected']?'selected':''}}>{{$option['text']}}</option>
                                                    @endforeach
                                                </select>
                                                @break
                                                @case('text-only')
                                                <span class="form-control no-border pl-0">{{$colData['text']}}</span>
                                                @break
                                                @case('image')
                                                <div class="form-group">
                                                    <label for="{{$k}}">
                                                        {{$colData['text']}}
                                                    </label>
                                                    <div class="media-loader-parent">
                                                        <div class="preview">
                                                            <div class="preview-item">
                                                                <img height="150" src="{{$colData['data']}}">
                                                            </div>
                                                        </div>
                                                        <div class="input-group ">
                                                                <span class="input-group-addon"><i
                                                                            class="fa fa-upload"></i></span>
                                                            <input type="text " class="form-control media-loader"
                                                                   placeholder="Choose file" name="{{$k}}"
                                                                   value="{{$colData['data']}}" {{$colData['required']?'required':''}}>
                                                        </div>
                                                    </div>
                                                </div>
                                                @break
                                            @endswitch
                                        </div>
                                    @endforeach
                                @endforeach
                            </div>
                        </div>
                        @break
                        @case('text')
                        <div class="form-group">
                            <label for="{{$key}}">
                                {{$setting['text']}}
                                @if($setting['required'])
                                    <span class="text-red">*</span>
                                @endif
                            </label>
                            <input value="{{$setting['data']}}" id="{{$key}}" name="{{$key}}"
                                   type="{{$setting['typeInput']}}" class="form-control"
                                   placeholder="{{$setting['placeholder']}}" minlength="{{$setting['minlength']}}"
                                   maxlength="{{$setting['maxlength']}}" {{$setting['required']?'required':''}}>
                        </div>
                        @break
                        @case('textarea')
                        <div class="form-group">
                            <label for="{{$key}}">
                                {{$setting['text']}}
                                @if($setting['required'])
                                    <span class="text-red">*</span>
                                @endif
                            </label>
                            <textarea id="{{$key}}" name="{{$key}}" class="form-control"
                                      placeholder="{{$setting['placeholder']}}" minlength="{{$setting['minlength']}}"
                                      maxlength="{{$setting['maxlength']}}" min="{{$setting['minlength']}}"
                                      max="{{$setting['maxlength']}}" {{$setting['required']?'required':''}}>{{$setting['data']}}</textarea>
                        </div>
                        @break
                        @case('image')
                        <div class="form-group">
                            <label for="{{$key}}">
                                {{$setting['text']}}
                                @if($setting['required'])
                                    <span class="text-red">*</span>
                                @endif
                            </label>
                            <div class="media-loader-parent">
                                <div class="preview">
                                    <div class="preview-item">
                                        <img height="150" src="{{$setting['data']}}">
                                    </div>
                                </div>
                                <div class="input-group ">
                                    <span class="input-group-addon"><i class="fa fa-upload"></i></span>
                                    <input type="text " class="form-control media-loader" placeholder="Choose file"
                                           name="{{$key}}"
                                           value="{{$setting['data']}}" {{$setting['required']?'required':''}}>
                                </div>
                            </div>
                        </div>
                        @break
                        @case('select')
                        <div class="form-group">
                            <label for="{{$key}}">
                                {{$setting['text']}}
                                @if($setting['required'])
                                    <span class="text-red">*</span>
                                @endif
                            </label>
                            <select id="{{$key}}" class="form-control"
                                    name="{{$key}}" {{$setting['multiple']?'multiple':''}}>
                                @foreach($setting['data'] as $option)
                                    <option value="{{$option['value']}}" {{$option['selected']?'selected':''}}>{{$option['text']}}</option>
                                @endforeach
                            </select>
                        </div>
                        @break
                        @case('option')
                        <label for="{{$key}}">
                            {{$setting['text']}}
                            @if($setting['required'])
                                <span class="text-red">*</span>
                            @endif
                        </label>
                        <div class="form-group">
                            @foreach($setting['data'] as $option)
                                <div class="radio">
                                    <label class="radio d-block">
                                        <input type="radio" name="{{$key}}"
                                               value="{{$option['value']}}" {{$option['checked']?'checked':''}}>
                                        {{$option['text']}} {!! isset($option['html'])? $option['html']:"" !!}
                                    </label>
                                </div>
                            @endforeach
                        </div>
                        @break
                        @case('html')
                        <label for="{{$key}}">
                            {{$setting['text']}}
                            @if($setting['required'])
                                <span class="text-red">*</span>
                            @endif
                        </label>
                        <div class="form-group">
                                <textarea name="{{$key}}" class="summernote-html"
                                          placeholder="{{$setting['placeholder']}}">
                                    {{$setting['data']}}
                                </textarea>
                        </div>
                        @break
                    @endswitch
                @endforeach
                <div class="box-footer pl-0">
                    <button type="submit" class="btn btn-primary"><i class="fa fa-save mr-1"></i>Save changes</button>
                </div>
            </form>
        </div>
    </div>
@stop

@push('scripts')

    <script type="text/javascript">
      $(function () {
        $('.summernote-html').summernote({
          height: 100,
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
            ['misc', ['help', 'fullscreen', 'codeview']]
          ]
        });
      });

    </script>
@endpush