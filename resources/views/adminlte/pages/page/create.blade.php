@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">

                <form action="{{route('page.store')}}" method="post" accept-charset="UTF-8" class="form-horizontal"
                      enctype="multipart/form-data" pjax-container="">
                    {{ csrf_field() }}

                    <div class="box-body">
                        <div class="col-md-8">
                            <label>Title&nbsp;<span style="color:#db4437;">*</span></label>
                            <input type="text" id="title" name="title" value=""
                                   class="form-control name margin-bottom"
                                   placeholder="Input Title" required>

                            <label>Content&nbsp;<span style="color:#db4437;">*</span></label>
                            <textarea class="textarea margin-bottom contentEditor" name="content" id="content"
                                      placeholder="Place your post content here"
                                      style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"
                                      required>
                            </textarea>
                            <div class="form-group ml-0 mr-0">
                                <label class=" "> Tag</label><br/>
                                <select id="cbo-admins" class=" select2 tag_id" style="width: 100%;"  multiple="multiple" name="tag_id[]" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                    @foreach($listTags as $item)
                                        <option  value={{$item->id}}>{{$item->tag_name}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="col-md-4">

                            <div class="">
                                <label>Template</label> <br>
                                <select class="form-control margin-bottom" style="width: 100%;" name="template"
                                        data-placeholder="Template">
                                    @foreach($template as $row)
                                        <option
                                            value="{{$row}}">{{$row}}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="box-footer">
                        <div class="col-md-12">
                            <div class="btn-group pull-right">
                                <button class="btn btn-primary"><i class="fa fa-plus mr-1"></i> Add</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection

@push('scripts')

    <script type="text/javascript">
        $(function () {
            $('.select2').select2();
            $('.contentEditor').summernote({
                height: 150,   //set editable area's height
            });
        });
    </script>
@endpush
