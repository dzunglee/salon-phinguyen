@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="box box-info">
                <!-- form start -->
                <form action="{{route('tags.update',[$tag->id])}}" method="post" accept-charset="UTF-8"
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
                                <button class="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">List posts of tag</h3>
                </div>
                <div class="box-body table-responsive no-padding">
                    <table class="table table-hover table-bordered">
                        <tbody>
                        <tr>
                            <th>Photo</th>
                            <th class="min-col-100">Title</th>
                            <th class="min-col-100">Description</th>
                            <th class="col-admin">Author</th>
                           <th class="col-admin">Editor</th>
                            <th>Category</th>
                            <th>Tags</th>
                            <th width="150px">Time</th>
                            <th width="30px"></th>
                        </tr>
                        @foreach($posts as $item)
                            <tr>
                                <td>{{$item->id}}</td>
                                <td style=" width: 100px!important;" class="text-center"><img class="img-responsive" src='{{$item->photo?$item->photo:""}}'/></td>
                                <td>{{$item->title}}</td>
                                <td>
                                    @if($item->getAuthor)
                                        {{$item->getAuthor->name}}
                                    @endif
                                </td>
                                <td>
                                    @if($item->getEditor)
                                        {{$item->getEditor->name}}
                                    @endif
                                </td>

                                <td>{{$item->category?$item->category->category_name:''}}</td>
                                <td>
                                    @if($item->tags)
                                        @foreach($item->tags as $itemTag)
                                            <span class="label label-default">{{$itemTag->tag_name}}</span>
                                        @endforeach
                                    @endif
                                </td>
                                <td> <small>
                                        @if($item->publish_date)
                                            <span >Published at: {{date_format(date_create($item->publish_date),setting('date_formats'))}}</span><br/>
                                        @endif
                                        @if($item->created_at)
                                            <span style="opacity: 0.6; font-style: italic;">Created at: {{$item->created_at->format(setting('date_formats'))}}</span>
                                        @endif
                                    </small>
                                </td>
                                <td class="no-padding" style="">
                                    <div class="dropdown" style="padding-top: 5px">
                                        <i class="btn fa fa-ellipsis-v dropdown-toggle py-1" data-toggle="dropdown" aria-expanded="true"></i>
                                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                            <li><a class="edit-ajax" data-target="#edit-modal" href="{{route('posts.edit',[$item->id])}}" title="Edit">Edit</a></li>
                                            <li><a href="javascript:void(0);" class="grid-row-delete" data-url="{{route('posts.remove_post_tag',[$item->id,$tag->id])}}" title="Delete" data-parent-elm="tr">Remove post's tag</a></li>
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
