@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')
@section('content')
    <div class="row">
        <div class="col-xs-8">
            <div class="box">
                <div class="box-header">
                    <div class="box-title text-bold pull-right">
                        <form method="get" action="{{route('users.index')}}">
                            <div class="input-group input-group-sm pull-right" style="width: 150px;">
                                <div class="remove-able input-group-sm">
                                    <input type="text" name="s" value="{{request('s')}}" class="form-control pull-right" placeholder="Search by name">
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
                <div class="box-body">
                    <table class="table table-bordered table-hover">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Roles</th>
                            <th>Created At</th>
                            <th width="30px"></th>
                        </tr>
                        @foreach($data as $item)
                            <tr>
                                <td>{{$item->id}}</td>
                                <td><a class="edit-ajax" data-target="#edit-modal" href="{{route('users.edit',[$item->id])}}" title="Edit">{{$item->name}}</a></td>
                                <td>{{$item->email}}</td>
                                <td>
                                    @if($item->isSuperAdmin())
                                        <span class="label bg-primary text-overflow">Super admin</span>
                                    @else
                                        @foreach($item->roles as $role)
                                            <span class="label bg-primary text-overflow">{{$role}}</span>
                                        @endforeach
                                    @endif
                                </td>
                                <td>{{!empty($item->created_at)?$item->created_at->format(setting('date_formats')):''}}</td>
                                <td class="no-padding" style="vertical-align: middle">
                                    <div class="dropdown">
                                        <i class="btn fa fa-ellipsis-v dropdown-toggle py-1" data-toggle="dropdown" aria-expanded="true"></i>
                                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                            <li><a class="edit-ajax" data-target="#edit-modal" href="{{route('users.edit',[$item->id])}}" title="Edit">Edit</a></li>
                                            @if(auth()->user()->id != $item->id && !$item->isSuperAdmin())
                                                <li><a href="javascript:void(0);" class="grid-row-delete" data-url="{{route('users.destroy',[$item->id])}}" title="Delete" data-parent-elm="tr">Delete</a></li>
                                            @endif
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                    </table>
                </div>
                <!-- /.box-body -->
                <div class="box-footer clearfix">
                    <ul class="pagination pagination-sm no-margin pull-right">
                        {{ $data->links() }}
                    </ul>
                </div>
                <div class="modal fade" tabindex="-1" role="dialog" id="edit-modal" aria-labelledby="myLargeModalLabel">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                <h4 class="modal-title" id="myModalLabel">Edit user</h4>
                            </div>
                            <div class="modal-body" style="min-height: 547px">
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
                        Add new User
                    </h4>
                </div>
                <!-- /.box-header -->
                <form id="main-form" action="{{route('users.store')}}" method="post" accept-charset="UTF-8" pjax>
                    <div class="box-body">
                        {{ csrf_field() }}
                        <div class="form-group  ">
                            <label for="name" >Email <span class="text-red">*</span></label>
                            <input type="email" id="email" name="email" value="{{old('email')}}" class="form-control" placeholder="Input email" autocomplete="off" required>
                        </div>
                        <div class="form-group  ">
                            <label for="username" >Name<span class="text-red">*</span></label>
                            <input autocomplete="off"  type="text" id="" name="name" value="{{old('name')}}" class="form-control" placeholder="Input name" required>
                        </div>
                        <div class="form-group">
                            <label for="avatar">Avatar</label>
                            <div class="media-loader-parent">
                                <div class="input-group ">
                                    <span class="input-group-addon"><i class="fa fa-upload"></i></span>
                                    <input autocomplete="off"  type="text " name="avatar" class="form-control media-loader"  data-preview="#preview" placeholder="Choose file" value="" data-files="">
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">Password <span class="text-red">*</span></label>
                            <input autocomplete="off" type="password" id="password" name="password" value="" class="form-control"  minlength="6" maxlength="32" placeholder="Input Password" required>
                        </div>
                        <div class="form-group">
                            <label for="password_confirmation">Password confirmation <span class="text-red">*</span></label>
                            <input autocomplete="off"  type="password" id="password_confirmation" name="password_confirmation" value=""  minlength="6" maxlength="32" class="form-control" placeholder="Input Password confirmation" required>
                        </div>

                        <div class="form-group">
                            <label for="role">Roles</label>
                            <select class="form-control" name="role[]" id="role" multiple>
                                @foreach($roles as $key => $role)
                                    <option value="{{$role->name}}" {{($role->id == setting('default_role'))? "selected":"" }}>{{$role->name}}</option>
                                @endforeach
                            </select>
                        </div>

                        <div class="box-footer">
                            <div class="text-right">
                                <button class="btn btn-primary"><i class="fa fa-plus mr-1"></i> Add
                                </button>
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
        $(function () {
            $('#role').select2();
        });
    </script>
@endpush