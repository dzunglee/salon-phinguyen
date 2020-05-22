@extends('layouts.adminlte')

@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Create new role</h3>
                </div>
                <form action="{{route('roles.store')}}" method="post" accept-charset="UTF-8" class="form-horizontal" enctype="multipart/form-data" pjax-container="">
                    {{ csrf_field() }}
                    <div class="box-body">
                        <div class="fields-group">
                            <div class="form-group  ">
                                <label for="username" class="col-sm-2  control-label">Name</label>
                                <div class="col-sm-8">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-pencil fa-fw"></i></span>
                                        <input type="text" id="username" name="name" value="{{old('name')}}" class="form-control username" placeholder="Input name" required>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group  ">
                            <label for="username" class="col-sm-2  control-label">Description</label>
                            <div class="col-sm-8">
                                <div class="input-group">
                                    <span class="input-group-addon"><i class="fa fa-pencil fa-fw"></i></span>
                                    <input type="text" id="username" name="description" value="{{old('description')}}"
                                           class="form-control username" placeholder="Input description">
                                </div>
                            </div>
                        </div>
                        <div class="form-group  ">
                            <label for="username" class="col-sm-2  control-label">Permissions</label>
                            <div class="col-sm-8">
                                <select multiple="multiple" size="10" name="permissions[]" id="permissions" title="duallistbox_demo2">
                                    @foreach($permissions as $permission)
                                        <option value="{{$permission->id}}">{{$permission->description}}</option>
                                    @endforeach
                                </select>
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
//            var demo1 = $('select[id="permissions"]').bootstrapDualListbox({
//                "infoText": "Showing all {0}",
//                "infoTextEmpty": "Empty list",
//                "infoTextFiltered": "{0} \/ {1}",
//                "filterTextClear": "Show all",
//                "filterPlaceHolder": "Filter"
//            });
        });
    </script>
@endpush