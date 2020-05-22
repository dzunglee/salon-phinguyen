@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-xs-7">
            <div class="box box-default">
                <div class="box-header">
                    <div class="box-title text-bold pull-right">
                        <form style="display:inherit">
                            <div class="input-group input-group-sm pull-right" style="width: 150px; ">
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
                </div>

                <div class="box-body table-responsive  ">
                    <table class="table table-hover table-bordered">
                        <tbody>
                        <tr>
                            <th>Tag Name</th>
                            <th>Slug</th>
                            <th width="30px"></th>
                        </tr>
                        @foreach($data as $item)
                            <tr>
                                <td>{{$item->tag_name}}</td>
                                <td>{{$item->slug}}</td>
                                <td class="no-padding" style="vertical-align: middle">
                                    <div class="dropdown">
                                        <i class="btn fa fa-ellipsis-v dropdown-toggle py-1" data-toggle="dropdown" aria-expanded="true"></i>
                                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                            <li><a href="{{route('tags.edit',[$item->id])}}" title="Edit">Edit</a></li>
                                            <li><a href="javascript:void(0);" class="grid-row-delete" data-url="{{route('tags.destroy',[$item->id])}}" title="Delete" data-parent-elm="tr">Delete</a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                    <div class="pull-right">
                        <br/>
                        {{ $data->links()}}
                    </div>
                </div>
            </div>

        </div>
        <div class="col-md-5 pl-0 pull-right">
            <div class="box box-primary">
                <div class="box-header with-border">
                    <h3 class="box-title">Add new tag</h3>
                </div>
                <form action="{{route('tags.store')}}" method="post" accept-charset="UTF-8"
                      class="form-horizontal"
                      enctype="multipart/form-data" pjax-container="">
                    {{ csrf_field() }}
                    <div class="box-body">
                        <div class="fields-group">

                            <div class="form-group  ">
                                <label for="tag_name" class="col-sm-3  control-label">Name Tag &nbsp;<span style="color:#db4437;">*</span></label>
                                <div class="col-sm-9">
                                    <input type="text" id="tag_name" name="tag_name"
                                               value="{{old('tag_name')}}"
                                               class="form-control" placeholder="Input tag" required>
                                    <p style="font-style: italic;margin: 5px 0 5px;opacity: .5;"> The name is
                                        how it appears on your site.</p>
                                </div>
                            </div>

                            <div class="form-group  ">
                                <label for="slug" class="col-sm-3  control-label">Slug &nbsp;<span style="color:#db4437;">*</span></label>
                                <div class="col-sm-9">
                                    <input type="text" id="slug" name="slug" value="{{old('slug')}}"
                                               class="form-control" placeholder="Input slug" required>
                                    <p style="font-style: italic; margin: 5px 0 5px; opacity: .5;"> The “slug”
                                        is the URL-friendly version of the name. It is usually all
                                        lowercase and contains only letters, numbers, and hyphens.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div class="box-footer">
                            <div class=" pull-right">
                                <button class="btn btn-primary"><i class="fa fa-plus mr-1"></i>Add</button>
                            </div>
                    </div>
                    <!-- /.box-footer -->
                </form>
            </div>
        </div>

        {{----}}
        {{--Index--}}
        {{----}}

    </div>
@stop

@push('scripts')
    <script type="text/javascript">
        $(function () {
            $('#tag_name').keyup(function () {
                $('#slug').val($.str_slug($(this).val()));
            });

            $("#search-post").val(get('search'));

            $('#slug').change(function () {
                $('#slug').val($.str_slug($(this).val()));
            });
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

        });
    </script>
@endpush
