@extends('layouts.adminlte')

@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-xs-8">
            <div class="box">
                <div class="box-header">
                    <div class="pull-right">
                        <form method="get" action="{{route('roles.index')}}">
                            <div class="input-group input-group-sm pull-right" style="width: 150px;">
                                <div class="remove-able input-group-sm">
                                    <input type="text" name="s" value="{{request('s')}}" class="form-control pull-right" placeholder="Search">
                                    <i class="fa fa-remove"></i>
                                </div>
                                <div class="input-group-btn">
                                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- /.box-header -->
                <div class="box-body table-responsive">
                    <table class="table table-hover table-bordered">
                        <tbody><tr>
                            <th width="37px">ID</th>
                            <th>Name</th>
                            <th class="min-col-100">Description</th>
                            <th>Level</th>
                            <th width="30px"></th>
                        </tr>
                        @foreach($data as $item)
                            <tr>
                                <td>{{$item->id}}</td>
                                <td>
                                    <a class="edit-ajax" data-target="#edit-modal" href="{{route('roles.edit',[$item->id])}}" title="Edit">{{$item->name}}</a>
                                </td>
                                <td>{{$item->description}}</td>
                                <td>{{$levelList[$item->level]}}</td>
                                <td class="no-padding" style="vertical-align: middle">
                                    <div class="dropdown">
                                        <i class="btn fa fa-ellipsis-v dropdown-toggle py-1" data-toggle="dropdown" aria-expanded="true"></i>
                                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                            <li><a class="edit-ajax" data-target="#edit-modal" href="{{route('roles.edit',[$item->id])}}" title="Edit">Edit</a></li>
                                            <li><a href="javascript:void(0);" class="grid-row-delete" data-url="{{route('roles.destroy',[$item->id])}}" title="Delete" data-parent-elm="tr">Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
                <!-- /.box-body -->
                <div class="box-footer clearfix">
                    {{ $data->links() }}
                </div>
                <div class="modal fade" tabindex="-1" role="dialog" id="edit-modal" aria-labelledby="myLargeModalLabel">
                    <div class="modal-dialog modal-md" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModalLabel">Edit role</h4>
                            </div>
                            <div class="modal-body" style="min-height: 328px">
                                ...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.box -->
        </div>
        <div class="col-xs-4 pl-0">
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h4 class="box-title">
                        Create new Role
                    </h4>
                </div>
                <!-- /.box-header -->
                <form action="{{route('roles.store')}}" method="post" accept-charset="UTF-8" enctype="multipart/form-data" pjax>
                    <div class="box-body table-responsive">
                        {{ csrf_field() }}
                        <div class="form-group">
                            <label for="name">Name <span class="text-red">*</span></label>
                            <input  type="text" id="name" name="name" value="{{old('name')}}" class="form-control" placeholder="Input name" required>
                        </div>
                        <div class="form-group">
                            <label for="permissions">{{trans('Level')}}</label>
                            <select class="form-control" name="level">
                                @foreach($levelList as $key => $level)
                                    <option value="{{$key}}">{{$level}}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="permissions">Permissions</label>
                            <select class="form-control" name="permissions[]" id="permissions" multiple>
                                @foreach($permissions as $key => $permission)
                                    <option value="{{$permission->name}}">{{$permission->name}}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea  type="text" id="description" name="description" class="form-control" placeholder="Input Description">{{old('description')}}</textarea>
                        </div>
                        <div class="text-right">
                            <button type="submit" class="btn btn-primary"><i class="fa fa-plus mr-1"></i> Add</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@stop

@push('scripts')
    <script type="text/javascript">
        $(function () {
            $('#permissions').select2();
        });
    </script>
@endpush