@extends('layouts.adminlte')

@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-xs-8">
            <div class="box">
                <div class="box-header">
                    <div class="pull-right">
                        <form method="get" action="{{route('menu.index')}}">
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
                            <th>Title</th>
                            <th class="min-col-100">Slug</th>
                            <th width="30px"></th>
                        </tr>
                        @foreach($data as $item)
                            <tr>
                                <td>{{$item->id}}</td>
                                <td>
                                    <a class="edit-ajax" data-target="#edit-modal" href="{{route('menu.edit',[$item->id])}}" title="Edit">{{$item->title}}</a>
                                </td>
                                <td>{{$item->slug}}</td>
                                <td class="no-padding" style="vertical-align: middle">
                                    <div class="dropdown">
                                        <i class="btn fa fa-ellipsis-v dropdown-toggle py-1" data-toggle="dropdown" aria-expanded="true"></i>
                                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                            <li><a class="edit-ajax" data-target="#edit-modal" href="{{route('menu.edit',[$item->id])}}" title="Edit">Edit</a></li>
                                            <li><a href="{{route('c-menu.edit',['slug' => $item->slug])}}" title="Edit item" pjax>Edit item</a></li>
                                            <li><a href="javascript:void(0);" class="grid-row-delete" data-url="{{route('menu.destroy',[$item->id])}}" title="Delete" data-parent-elm="tr">Delete</a></li>
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
                                <h4 class="modal-title" id="myModalLabel">Edit menu</h4>
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
                        Create new menu
                    </h4>
                </div>
                <!-- /.box-header -->
                <form action="{{route('menu.store')}}" method="post" accept-charset="UTF-8" enctype="multipart/form-data" pjax>
                    <div class="box-body table-responsive">
                        {{ csrf_field() }}
                        <div class="form-group">
                            <label for="title">Title <span class="text-red">*</span></label>
                            <input  type="text" id="title" name="title" value="{{old('name')}}" class="form-control" placeholder="Input name" required max="50">
                        </div>

                        <div class="form-group">
                            <label for="slug" class="control-label">Slug &nbsp;<span class="text-red">*</span></label>
                            <input type="text" id="slug" name="slug" value="{{old('slug')}}"
                                   class="form-control" placeholder="Input slug" required>
                            <p style="font-style: italic; margin: 5px 0 5px; opacity: .5;" > The “slug”
                                is the URL-friendly version of the name. It is usually all
                                lowercase and contains only letters, numbers, and hyphens.</p>
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
            $('#title').keyup(function () {
                $('#slug').val($.str_slug($(this).val()));
            });

            $('#slug').change(function () {
                $('#slug').val($.str_slug($(this).val()));
            });
        });
    </script>
@endpush