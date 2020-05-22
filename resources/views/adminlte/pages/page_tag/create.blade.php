@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Create new tag</h3>
                </div>
                <form action="{{route('tags.store')}}" method="post" accept-charset="UTF-8" class="form-horizontal"
                      enctype="multipart/form-data" pjax-container="">
                    {{ csrf_field() }}
                    <div class="box-body">
                        <div class="fields-group">

                            <div class="form-group  ">
                                <label for="tag_name" class="col-sm-2  control-label">Name Tag</label>
                                <div class="col-sm-8">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-pencil fa-fw"></i></span>
                                        <input type="text" id="tag_name" name="tag_name" value="{{old('tag_name')}}"
                                               class="form-control" placeholder="Input tag" required>
                                    </div>

                                    <p> The name is how it appears on your site.</p>
                                </div>
                            </div>

                            <div class="form-group  ">
                                <label for="slug" class="col-sm-2  control-label">Slug</label>
                                <div class="col-sm-8">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-pencil fa-fw"></i></span>
                                        <input type="text" id="slug" name="slug" value="{{old('slug')}}"
                                               class="form-control" placeholder="Input slug" required>
                                    </div>
                                    <p> The “slug” is the URL-friendly version of the name. It is usually all
                                        lowercase and contains only letters, numbers, and hyphens.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="box-footer">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-8">
                            <div class=" pull-right">
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                    <!-- /.box-footer -->
                </form>
            </div>
        </div>
    </div>
@stop

@push('js')
    <script type="text/javascript">
        $(function () {
            $("input.avatar").fileinput({
                "overwriteInitial": true,
                "initialPreviewAsData": true,
                "browseLabel": "Browse",
                "showRemove": false,
                "showUpload": false,
                "allowedFileTypes": ["image"]
            });
            $(".roles").select2({"allowClear": true, "placeholder": "Roles"});
            $(".permissions").select2({"allowClear": true, "placeholder": "Permissions"});
        });
    </script>
@endpush
