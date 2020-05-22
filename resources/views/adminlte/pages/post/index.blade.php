@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
<div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-header">
                    <div class="box-title text-bold">
                        <div class=" pull-right" data-toggle="buttons">
                            <label class="btn btn-sm btn-dropbox 5bf1932171cbf-filter-btn " id="filter-logs">
                                <input type="checkbox"><i class="fa fa-filter"></i>&nbsp;&nbsp;Filter
                            </label>
    
                        </div>
                        <form style="display:inherit ">
                            <div class="input-group input-group-sm pull-right margin-r-5" style="width: 150px;">
                                <div class="remove-able input-group-sm">
                                    <input id="search-post" type="text" name="search" class="form-control pull-right"
                                           placeholder="Search" title="search by id or title">
                                    <i class="fa fa-remove"></i>
                                </div>
                                <div class="input-group-btn">
                                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div class="pull-right">
                        <div class=" pull-right">
                            <a href="{{route('posts.create')}}" class="btn btn-sm btn-success">
                                <i class="fa fa-plus"></i>&nbsp;&nbsp;New
                            </a>
                        </div>

                    </div>
                </div>
                <div class="box-header with-border logs-filter-form" style='display:none'>
                        <form action="" class="form-horizontal" pjax-container="">
                            <div class="box-body">
                                <div class="fields-group">
                                    <div class="form-group">
                                        <label class="col-sm-2 control-label"> Editor</label>
                                        <div class="col-sm-8">
                                            <select id="cbo-editors" class="form-control select2 editor" style="width: 100%;"  name="editor" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                <option value="">&nbsp;</option>
                                                @foreach($listAdmin as $item)

                                                <option  value={{$item->id}}>{{$item->name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                            <label class="col-sm-2 control-label"> Author</label>
                                            <div class="col-sm-8">
                                                <select id="cbo-admins" class="form-control select2 author" style="width: 100%;"  name="author" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                    <option value="">&nbsp;</option>
                                                    @foreach($listAdmin as $item)

                                                    <option  value={{$item->id}}>{{$item->name}}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-sm-2 control-label"> Publishing Status</label>
                                            <div class="col-sm-8">
                                                <select id="cbo-is-published" class="form-control select2 author" style="width: 100%;"  name="is_published" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                    <option value="">All</option>
                                                    <option value="1">Published</option>
                                                    <option value="0">Unpublished</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-sm-2 control-label"> Category</label>
                                            <div class="col-sm-8">
                                                <select  id="cbo-categories"  class="select2 category_id" style="width: 100%;" name="category_id"  >
                                                    <option value="">&nbsp;</option>
                                                    {!! $treeComboBox !!}
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-sm-2 control-label"> Tag</label>
                                            <div class="col-sm-8">
                                                <select id="cbo-tags" class="form-control select2 tag_id" style="width: 100%;"  multiple="multiple" name="tag_id[]" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                                    @foreach($listTags as $item)
                                                        <option  value={{$item->id}}>{{$item->tag_name}}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <!-- /.box-body -->

                            <div class="box-footer">
                                <div class="col-md-2"></div>
                                <div class="col-md-8" style='padding-left: 5px;'>
                                    <div class=" pull-left " >
                                        <a class="btn btn-default btn-reset-filter" href="{{route('posts.index')}}" pjax><i class="fa fa-undo"> </i> Reset</a>

                                    </div>
                                    <div class=" pull-left" style="margin-left: 10px;">
                                        <button class="btn btn-info submit"><i class="fa fa-search"></i>&nbsp;&nbsp;Apply</button>
                                    </div>

                                </div>
                            </div>
                        </form>

                    </div>
                <!-- /.box-header -->
                <div class="box-body table-responsive">
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
                                <th style="width:65px">Lang</th>
                                <th width="150px">Time</th>
                                <th width="30px"></th>
                            </tr>
                            @foreach($data as $keydata => $item)
                            <tr>
                                <td style=" width: 100px!important;" class="text-center"><img class="img-responsive" src='{{$item->photo?$item->photo:""}}'/></td>
                                <td><a href="{{route('posts.edit',[$item->id])}}">{{$item->title}}</a></td>
                                <td>{{$item->description}}</td>
                                <td>
                                    @if($item->getAuthor)
                                        <a pjax href="{{route('posts.index').'?author='.$item->getAuthor->id}}">{{$item->getAuthor->name}}</a>
                                    @endif
                                </td>
                                <td>
                                    @if($item->getEditor)
                                        <a pjax href="{{route('posts.index').'?editor='.$item->getEditor->id}}">{{$item->getEditor->name}}</a>
                                    @endif
                                </td>
                                <td>
                                    {{--{{$item->category?$item->category->category_name:''}}--}}
                                    @if($item->category)
                                        <a  pjax href="{{route('posts.index').'?category_id='.$item->category->id}}">
                                            <span class="badge bg-default" >{{$item->category->category_name}}</span>
                                        </a>
                                    @endif
                                </td>
                                <td>
                                    @if($item->tags)
                                        @foreach($item->tags as $tag)
                                            <a  pjax href="{{route('posts.index').'?tag_id%5B%5D='.$tag->id}}">
                                                <span class="label label-default">{{$tag->tag_name}}</span>
                                            </a>

                                        @endforeach
                                    @endif
                                </td>
                                <td style="text-align:center">
                                    {{$translate[$keydata]}}
                                </td>
                                <td>
                                    <small>
                                    @if($item->publish_date)
                                            <span >Published at: {{date_format(date_create($item->publish_date),setting('date_formats'))}}</span><br/>
                                    @endif
                                    @if($item->created_at)
                                        <span style="opacity: 0.6; font-style: italic;">Created at: {{$item->created_at->format(setting('date_formats'))}}</span>
                                    @endif
                                    </small>

                                </td>
                                <td class="no-padding" style="" >
                                    <div class="dropdown" style="margin-top: 5px;">
                                        <i class="btn fa fa-ellipsis-v dropdown-toggle py-1" data-toggle="dropdown" aria-expanded="true"></i>
                                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                            <li><a href="{{route('posts.edit',[$item->id])}}" title="Edit">Edit</a></li>
                                            <li><a href="javascript:void(0);" class="grid-row-delete" data-url="{{route('posts.destroy',[$item->id])}}" title="Delete" data-parent-elm="tr">Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                <!-- /.box-body -->

                <div class="pull-right">
                    <br/>
                    {{ $data->links()}}
                </div>
            </div>
            <!-- /.box -->
        </div>
    </div>
    <style>
        .img-responsive{
            max-height: 100px;
            margin: auto;
        }

        td {
             word-break: break-word;
        }

        td .lable, td .badge{
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            max-width: 150px;
        }

    </style>

@stop

@push('scripts')
    <script type="text/javascript">
        $(function() {
            console.log('ready');
            $('.select2').select2();
            $('#cbo-admins').val(get('author')).trigger('change');
            $('#cbo-editors').val(get('editor')).trigger('change');
            $('#cbo-categories').val(get('category_id')).trigger('change');
            $('#cbo-tags').val(getArray('tag_id%5B%5D')).trigger('change');

            $("#search-post").val(get('search'));
            $("#filter-logs").click(function () {
                $(".logs-filter-form").slideToggle();
            });

            console.log(get('editor'), $('#cbo-editors').val());
            if ($('#cbo-admins').val() || $('#cbo-editors').val() || $('#cbo-categories').val() || $('#cbo-tags').val().length) {
                $("#filter-logs").click();
            }

            function get(sParam) {
                var sPageURL = window.location.search.substring(1),
                    sURLVariables = sPageURL.split('&'),
                    sParameterName,
                    i;

                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split('=');

                    if (sParameterName[0] === sParam) {
                        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                    }
                }
            };

            function getArray(sParam) {
                var array = [];
                var sPageURL = window.location.search.substring(1),
                    sURLVariables = sPageURL.split('&'),
                    sParameterName,
                    i;

                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split('=');

                    if (sParameterName[0] === sParam) {
                        array.push(sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]));
                    }
                }
                return array;
            };
            function getSearchParams(k) {
                var p = {};
                location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (s, k, v) {
                    p[k] = v
                })
                return k ? p[k] : p;
            }

            $('.btn-reset-filter').click(function () {
                $('#cbo-admins').val("").trigger('change');
                $('#cbo-editors').val("").trigger('change');
                $('#cbo-categories').val("").trigger('change');
                $('#cbo-tags').val(null).trigger('change');
                $('#cbo-is-published').val(null).trigger('change');
            });

        });

    </script>
@endpush
