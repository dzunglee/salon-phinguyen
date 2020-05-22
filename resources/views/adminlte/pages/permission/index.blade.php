@extends('layouts.adminlte')

@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-xs-8">
            <div class="box">
                <div class="box-header">
                        <form method="get" class="form-inline" action="{{route('permissions.index')}}">
                            @foreach($types as $key => $type)
                                @if(is_array(request('t')) && in_array($key,request('t')))
                                    <span type="button" class="mr-2 btn bg-{{$type['color']}} filter-chip" data-name="t[]" data-value="{{$key}}">{{$type['name']}}</span>
                                    <input type="hidden" name="t[]" value="{{$key}}">
                                @else
                                    <span type="button" class="mr-2 btn bg-gray filter-chip" data-name="t[]" data-value="{{$key}}">{{$type['name']}}</span>
                                @endif
                            @endforeach
                            <div class="pull-right">
                                <div class="input-group input-group-sm" style="width: 150px;">
                                    <div class="remove-able input-group-sm">
                                        <input type="text" name="s" value="{{request('s')}}" class="form-control pull-right" placeholder="Search">
                                        <i class="fa fa-remove"></i>
                                    </div>

                                    <div class="input-group-btn">
                                        <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                </div>
                <!-- /.box-header -->
                <div class="box-body table-responsive">
                    <table class="table table-hover table-bordered">
                        <tbody><tr>
                            <th width="37px">ID</th>
                            <th>Name</th>
                            <th class="min-col-100">Description</th>
                            <th>Type</th>
                            <th width="30px"></th>
                        </tr>
                        @foreach($data as $item)
                            <tr>
                                <td>{{$item->id}}</td>
                                <td>
                                    <a class="edit-ajax" data-target="#edit-modal" href="{{route('permissions.edit',[$item->id])}}" title="Edit">{{$item->name}}</a>
                                </td>
                                <td>{{$item->description}}</td>
                                <td>
                                    <label class="label bg-{{isset($types[$item->type])?$types[$item->type]['color']:'primary'}}">{{$item->type}}</label></td>
                                <td class="no-padding" style="vertical-align: middle">
                                    <div class="dropdown">
                                        <i class="btn fa fa-ellipsis-v dropdown-toggle" data-toggle="dropdown" aria-expanded="true"></i>
                                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                            <li><a class="edit-ajax" data-target="#edit-modal" href="{{route('permissions.edit',[$item->id])}}" title="Edit">Edit</a></li>
                                            <li><a href="javascript:void(0);" class="grid-row-delete" data-url="{{route('permissions.destroy',[$item->id])}}" title="Delete" data-parent-elm="tr">Delete</a></li>
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
                                <h4 class="modal-title" id="myModalLabel">Edit permission</h4>
                            </div>
                            <div class="modal-body" style="min-height: 475px">
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
                        Add new Permission
                    </h4>
                </div>
                <!-- /.box-header -->
                <form action="{{route('permissions.store')}}" method="post" accept-charset="UTF-8" enctype="multipart/form-data" pjax>
                    <div class="box-body table-responsive">
                        {{ csrf_field() }}
                        <div class="form-group">
                            <label for="name">Name <span class="text-red">*</span></label>
                            <input  type="text" id="name" name="name" value="{{old('name')}}" class="form-control" placeholder="Input name" required>
                            <small class="help-block"> Use only letters and underscore character</small>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea  type="text" id="description" name="description" class="form-control" placeholder="Input Description">{{old('description')}}</textarea>
                        </div>
                        <div class="form-group">
                            <label for="path">Path</label>
                            <input  type="text" id="path" name="path" value="{{old('path')}}" class="form-control" placeholder="Input path">
                        </div>
                        <div class="form-group">
                            <label for="method">Method</label>
                            <select class="form-control" name="method" id="method">
                                @foreach($methods as $key => $method)
                                    <option value="{{$method}}">{{strtoupper($method)}}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="type">Type</label>
                            <select class="form-control" name="type" id="type">
                                @foreach($types as $key => $type)
                                    <option value="{{$key}}">{{$type['name']}}</option>
                                @endforeach
                            </select>
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
        $( document ).ready(function() {
            $('#name').keyup(function () {
                let me = $(this);
                var textValue = me.val();
                textValue =textValue.toLowerCase().replace(/ /g,"_");
                me.val(textValue);
            }).change(function () {
                let me = $(this);
                var textValue = me.val();
                textValue =textValue.toLowerCase().replace(/ /g,"_");
                me.val(textValue);
            })
        });
    </script>
@endpush