@extends('layouts.adminlte')

@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Edit menu</h3>
                </div>
                <form method="POST" action="{{route('menus.update',[$item->id])}}" class="form-horizontal" accept-charset="UTF-8" pjax-container="1">
                    <div class="box-body" style="display: block;">
                        {{ csrf_field() }}
                        {{ method_field('PUT') }}
                        <div class="box-body fields-group">
                            <div class="form-group  ">
                                <label for="parent_id" class="col-sm-2  control-label">Parent</label>
                                <div class="col-sm-8">
                                    <input type="hidden" name="parent_id"/>
                                    <select class="form-control parent_id" style="width: 100%;" name="parent_id"  >
                                        <option value="0">Root</option>
                                        {!! $menuOptionHtml !!}
                                    </select>
                                </div>
                            </div>
                            <div class="form-group  ">
                                <label for="title" class="col-sm-2  control-label">Title</label>
                                <div class="col-sm-8">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-pencil fa-fw"></i></span>
                                        <input type="text" id="title" name="title" value="{{$item->title}}" class="form-control title" placeholder="Input Title" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="icon" class="col-sm-2  control-label">Icon</label>
                                <div class="col-sm-8">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-pencil fa-fw"></i></span>
                                        <input style="width: 140px" type="text" id="icon" name="icon" value="{{$item->icon}}" class="form-control icon" placeholder="Input Icon" />
                                    </div>
                                    <span class="help-block">
                                        <i class="fa fa-info-circle"></i>&nbsp;For more icons please see <a href="http://fontawesome.io/icons/" target="_blank">http://fontawesome.io/icons/</a>
                                    </span>

                                </div>
                            </div>
                            <div class="form-group  ">

                                <label for="uri" class="col-sm-2  control-label">URI</label>

                                <div class="col-sm-8">

                                    <div class="input-group">

                                        <span class="input-group-addon"><i class="fa fa-pencil fa-fw"></i></span>

                                        <input type="text" id="uri" name="uri" value="{{$item->uri}}" class="form-control uri" placeholder="Input URI" />

                                    </div>


                                </div>
                            </div>
                            {{--<div class="form-group  ">--}}

                                {{--<label for="roles" class="col-sm-2  control-label">Roles</label>--}}

                                {{--<div class="col-sm-8">--}}

                                    {{--<select class="form-control roles" style="width: 100%;" name="roles[]" multiple="multiple" data-placeholder="Input Roles"  >--}}
                                        {{--@foreach($roles as $role)--}}
                                            {{--<option value="{{$role->name}}" {{in_array($role->name,$item->roles)?'selected':''}}>{{$role->name}}</option>--}}
                                        {{--@endforeach--}}
                                    {{--</select>--}}
                                {{--</div>--}}
                            {{--</div>--}}
                            {{--<div class="form-group  ">--}}
                                {{--<label for="permissions" class="col-sm-2  control-label">Permissions</label>--}}
                                {{--<div class="col-sm-8">--}}
                                    {{--<select class="form-control permissions" style="width: 100%;" name="permissions[]"--}}
                                            {{--multiple="multiple" data-placeholder="Input Permissions">--}}
                                        {{--@foreach($permissions as $permission)--}}
                                            {{--<option value="{{$permission->id}}" {{in_array($permission->id,$currentGroupPermission)?'selected':''}}>{{$permission->description}}</option>--}}
                                        {{--@endforeach--}}
                                    {{--</select>--}}
                                {{--</div>--}}
                            {{--</div>--}}
                        </div>
                    </div>
                    <div class="box-footer">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-8">
                            <div class="btn-group pull-right">
                                <button class="btn btn-primary"><i class="fa fa-save mr-1"></i>Save changes</button>
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
        $( document ).ready(function() {
            $(".parent_id").select2({"allowClear":true,"placeholder":"Parent"});
            $(".roles").select2({"allowClear":true,"placeholder":"Roles"});
            $(".permissions").select2({"allowClear": true, "placeholder": "Permissions"});
            $('.icon').iconpicker({placement:'bottomLeft'});
        });
    </script>
@endpush
