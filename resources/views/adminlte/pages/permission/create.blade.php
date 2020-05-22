@extends('layouts.adminlte')

@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Create new permission</h3>
                </div>
                <form action="{{route('permissions.store')}}" method="post" accept-charset="UTF-8" class="form-horizontal" enctype="multipart/form-data" pjax-container="">
                    {{ csrf_field() }}
                    <div class="box-body">
                        <div class="fields-group">
                            <div class="form-group  ">
                                <label for="username" class="col-sm-2  control-label">Path</label>
                                <div class="col-sm-8">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-pencil fa-fw"></i></span>
                                        <input type="text" id="username" name="path" value="{{old('path')}}" class="form-control" placeholder="Input name" required>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group  ">
                                <label for="description" class="col-sm-2  control-label">Description</label>
                                <div class="col-sm-8">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-pencil fa-fw"></i></span>
                                        <input type="text" id="description" name="description" value="{{old('description')}}" class="form-control" placeholder="Input description" required>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group  ">
                                <label for="methods" class="col-sm-2  control-label">Method</label>
                                <div class="col-sm-8">
                                    <select class="form-control methods" style="width: 100%;" name="methods[]"
                                            multiple="multiple" data-placeholder="Input Method">
                                        <option value="get">GET</option>
                                        <option value="post">POST</option>
                                        <option value="put">PUT</option>
                                        <option value="patch">PATCH</option>
                                        <option value="delete">DELETE</option>
                                        <option value="options">OPTIONS</option>
                                    </select>
                                    <span class="help-block">
                                        <i class="fa fa-info-circle"></i>&nbsp;All methods if empty
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-footer">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-8">
                            <div class="btn-group pull-right">
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@stop

@push('scripts')
    <script type="text/javascript">
        $(document).ready(function () {
            $(".methods").select2({"allowClear": true, "placeholder": "Methods"});
        });
    </script>
@endpush