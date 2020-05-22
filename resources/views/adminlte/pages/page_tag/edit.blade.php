@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <!-- form start -->
                <form action="{{route('page-tags.update',[$tag->id])}}" method="post" accept-charset="UTF-8"
                      class="form-horizontal" enctype="multipart/form-data" pjax-container="">
                    {{ csrf_field() }}
                    {{ method_field('PUT') }}

                    <div class="box-header with-border">
                        <h3 class="box-title">Edit tag</h3>
                    </div>

                    <div class="box-body">
                        <div class="fields-group">
                            <div class="form-group  ">
                                <label for="username" class="col-sm-2  control-label">Tag Name &nbsp;<span style="color:#db4437;">*</span></label>
                                <div class="col-sm-8">
                                    <input type="text" id="tag_name" name="tag_name" value="{{$tag->tag_name}}"
                                               class="form-control username" placeholder="Input Username">

                                </div>
                            </div>

                            <div class="form-group  ">
                                <label for="name" class="col-sm-2  control-label">Slug &nbsp;<span style="color:#db4437;">*</span></label>
                                <div class="col-sm-8">
                                    <input type="text" id="slug" name="slug" value="{{$tag->slug}}"
                                               class="form-control name"
                                               placeholder="Input Name">
                                </div>
                            </div>

                        </div>

                    </div>
                    <!-- /.box-body -->

                    <div class="box-footer">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-8 ">
                            <div class="pull-right">
                                <button class="btn btn-primary"><i class="fa fa-save mr-1"></i>Save changes</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">List pages of tag</h3>
                </div>
                <div class="box-body table-responsive">
                    <table class="table table-hover table-bordered">
                        <tbody>
                        <tr>
                            <th class="min-col-100">Title</th>
                            <th class="col-admin">Author</th>
                            <th>Template</th>
                            <th>Slug</th>
                            <th>Tags</th>
                            <th width="30px"></th>
                        </tr>

                        @foreach($pages as $item)
                            <tr>
                                <td>{{$item->title}}</td>
                                <td>
                                    @if($item->getAuthor)
                                        {{$item->getAuthor->name}}
                                    @endif
                                </td>
                                <td>{{$item->template}}</td>
                                <td>{{$item->slug}}</td>
                                <td>
                                    @if($item->tags)
                                        @foreach($item->tags as $tag)
                                            <a  pjax href="{{route('page.index').'?tag_id%5B%5D='.$tag->id}}">
                                                <span class="label label-default">{{$tag->tag_name}}</span>
                                            </a>

                                        @endforeach
                                    @endif
                                </td>
                                <td class="no-padding" style="vertical-align: middle">
                                    <div class="dropdown">
                                        <i class="btn fa fa-ellipsis-v dropdown-toggle py-1" data-toggle="dropdown" aria-expanded="true"></i>
                                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                            <li><a href="{{route('page.edit',[$item->id])}}" title="Edit">Edit</a></li>
                                            <li><a href="javascript:void(0);" class="grid-row-delete" data-url="{{route('page.remove_page_tag',[$item->id,$tag->id])}}" title="Delete" data-parent-elm="tr">Remove page's tag</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
                <!-- /.box-body -->
            </div>
        </div>
    </div>
@stop
@push('scripts')
    <script type="text/javascript">
        $(function () {
            $('#tag_name').keyup(function () {
                $('#slug').val($.str_slug($(this).val()));
            });

            $('#slug').change(function () {
                $('#slug').val($.str_slug($(this).val()));
            });
            
        });
    </script>
@endpush
