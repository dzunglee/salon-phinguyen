@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')


@section('content')
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-header">
                    <div class="box-title text-bold">
                        {{--Filter Button--}}
                        <div class="btn-group pull-right" data-toggle="buttons">
                            <label class="btn btn-sm btn-dropbox 5bf1932171cbf-filter-btn " id="filter-logs">
                                <input type="checkbox"><i class="fa fa-filter"></i>&nbsp;&nbsp;Filter
                            </label>
                        </div>

                        {{--Search form--}}
                        <form style="display:inherit">
                            <div class="input-group input-group-sm margin-r-5" style="width: 150px;">
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

                    {{--Create Button--}}
                    <div class="pull-right">
                        <div class="btn-group pull-right">
                            <a href="{{route('page.create')}}" class="btn btn-sm btn-success">
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
                                    <label class="col-sm-2 control-label"> Author</label>
                                    <div class="col-sm-8">
                                        <select id="cbo-admins" class="form-control select2 author" style="width: 100%;"
                                                name="author" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                            <option value="">&nbsp;</option>
                                            @foreach($listAuthor as $item)
                                                <option value={{$item->id}}>{{$item->name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="col-sm-2 control-label"> Template</label>
                                    <div class="col-sm-8">
                                        <select id="cbo-template" class="form-control select2 template"
                                                style="width: 100%;"
                                                name="template" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                            <option value="">&nbsp;</option>
                                            @foreach($listTemplate as $item)
                                                <option value={{$item}}>{{$item}}</option>
                                            @endforeach
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
                                <div class="btn-group pull-left ">
                                    <a pjax href="{{route('page.index')}}"  class="btn btn-default btn-reset-filter"><i class="fa fa-undo"> </i> {{ __('Reset') }}</a>
                                </div>
                                <div class="btn-group pull-left" style="margin-left: 10px;">
                                    <button class="btn btn-info submit"><i class="fa fa-search"></i>&nbsp;&nbsp;Apply
                                    </button>
                                </div>

                            </div>
                        </div>
                    </form>

                </div>


                {{--Show table data--}}
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

                        @foreach($data as $item)
                            <tr>
                                <td>{{$item->title}}</td>
                                <td>
                                    @if($item->getAuthor)
                                       <a pjax href="{{route('page.index').'?author='.$item->getAuthor->id}}">{{$item->getAuthor->name}}</a>
                                    @endif
                                </td>
                                <td><a pjax href="{{route('page.index').'?template='.$item->template}}">{{$item->template}}</a></td>
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
                                            <li><a href="javascript:void(0);" class="grid-row-delete" data-url="{{route('page.destroy',[$item->id])}}" title="Delete" data-parent-elm="tr">Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>

                <div class="pull-right">
                    <br/>
                    {{ $data->links()}}
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->
        </div>
    </div>
@stop

@push('scripts')
    <script type="text/javascript">
        $(document).ready(function () {
            //select 2
            $('.select2').select2();

            $('.select2').select2();
            $('#cbo-admins').val(get('author')).trigger('change');
            $('#cbo-template').val(get('template')).trigger('change');
            $('#cbo-tags').val(getArray('tag_id%5B%5D')).trigger('change');

            $("#search-post").val(get('search'));

            $("#filter-logs").click(function () {
                $(".logs-filter-form").slideToggle();
            });

            console.log(get('editor'), $('#cbo-editors').val());
            if ($('#cbo-admins').val() || $('#cbo-template').val()|| $('#cbo-tags').val().length) {
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
        });
    </script>

@endpush
