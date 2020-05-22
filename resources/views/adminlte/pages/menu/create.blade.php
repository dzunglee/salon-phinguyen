@extends('layouts.adminlte')

@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Create new menu</h3>
                </div>
                <form method="POST" action="{{route('menus.store')}}" class="form-horizontal" accept-charset="UTF-8" pjax-container="1">
                    <div class="box-body" style="display: block;">
                        {{ csrf_field() }}
                        <div class="box-body fields-group">
                            <div class="form-group  ">
                                <label for="parent_id" class="col-sm-2  control-label">Parent</label>
                                <div class="col-sm-8">
                                    <input type="hidden" name="parent_id"/>
                                    <input type="hidden" name="type" value="menu"/>
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
                                        <input type="text" id="title" name="title" value="{{old('title')}}" class="form-control title" placeholder="Input Title" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="icon" class="col-sm-2  control-label">Icon</label>
                                <div class="col-sm-8">
                                    <div class="input-group">
                                        <span class="input-group-addon"><i class="fa fa-pencil fa-fw"></i></span>
                                        <input style="width: 140px" type="text" id="icon" name="icon" value="fa-500px" class="form-control icon" placeholder="Input Icon" />
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

                                        <input type="text" id="uri" name="uri" value="{{old('uri')}}" class="form-control uri" placeholder="Input URI" />

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-footer">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-8">
                            <div class="btn-group pull-right">
                                <button class="btn btn-primary"><i class="fa fa-plus mr-1"></i> Add</button>
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
