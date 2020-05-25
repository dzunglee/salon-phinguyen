@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <div class="row">
        <div class="col-12">
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                            <th width="30px"></th>
                        </tr>
                        @foreach($data as $item)
                            <tr>
                                <td>{{$item->name}}</td>
                                <td>{{$item->email}}</td>
                                <td>{{$item->message}}</td>
                                <td class="no-padding" style="vertical-align: middle">
                                    <div class="dropdown">
                                        <i class="btn fa fa-ellipsis-v dropdown-toggle py-1" data-toggle="dropdown"
                                           aria-expanded="true"></i>
                                        <ul class="dropdown-menu dropdown-menu-right" role="menu">
                                            <li><a href="javascript:void(0);" class="grid-row-delete"
                                                   data-url="{{route('contacts.destroy',[$item->id])}}" title="Delete"
                                                   data-parent-elm="tr">Delete</a></li>
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
