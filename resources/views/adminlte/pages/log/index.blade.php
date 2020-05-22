@extends('layouts.adminlte')

@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
<div class="row">
    <div class="col-xs-12">
        <div class="box">
            <div class="box-header with-border">
                
                <span>
                    <a  href="{{route('logs.index')}}" class="btn btn-default btn-sm btn-primary btn-logs-filter" style="color:white" pjax><i class="fa fa-refresh"></i> Refresh</a>
                    <div class="btn-group" style="margin-right: 10px" data-toggle="buttons">
                        <label class="btn btn-sm btn-dropbox 5bf1932171cbf-filter-btn " id="filter-logs">
                            <input type="checkbox"><i class="fa fa-filter"></i>&nbsp;&nbsp;Filter
                        </label>


                    </div>

                    <div class="pull-right">
                            @if(auth()->user()->can('delete-logs') || auth()->user()->can('delete-all-logs') || is_root_user(auth()->user()))
                            <button class="btn btn-default btn-sm btn-danger delete-all-logs"  style="color:white"><i class="fa fa-fw fa-trash"> </i>Clear All</button>
                            <form id='form-clear-all' action="{{route('logs.delete')}}" method="POST">
                                   {{ csrf_field() }}
                                    {{ method_field('DELETE') }}
                                <input hidden type="submit" value="Clear All Logs"/>
                            </form>
                        @endif  
                        
                    </div>
                </span>
                
            </div>
            <div class="box-header with-border logs-filter-form" style='display:none'>
                <form action="" class="form-horizontal" pjax-container="">
                    <div class="box-body">
                        <div class="fields-group">
                            {{--<div class="form-group">--}}
                                {{--<label class="col-sm-2 control-label"> ID</label>--}}
                                {{--<div class="col-sm-8">--}}
                                    {{--<div class="input-group">--}}
                                        {{--<div class="input-group-addon">--}}
                                            {{--<i class="fa fa-key"></i>--}}
                                        {{--</div>--}}
                                        {{--<input id="txt-id"  type="text" class="form-control id" placeholder="ID" name="id" value="">--}}
                                    {{--</div>    --}}
                                {{--</div>--}}
                            {{--</div>--}}
                            @if(auth()->user()->can('view-all-logs'))
                                <div class="form-group">
                                    <label class="col-sm-2 control-label"> User</label>
                                    <div class="col-sm-8">
                                        <select id="cbo-admins" class="form-control select2 user_id" style="width: 100%;"  name="admin_id" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                            <option value="">&nbsp;</option>
                                            @foreach($listAdmin as $item)

                                            <option  value={{$item->id}}>{{$item->name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                            @endif
                            <div class="form-group">
                                <label class="col-sm-2 control-label"> Method</label>
                                <div class="col-sm-8">
                                    <select id="cbo-methods" class="form-control select2 method " name="method" style="width: 100%;" tabindex="-1" aria-hidden="true">
                                        <option value="">&nbsp;</option>
                                        <option value="GET">GET</option>
                                        <option value="POST">POST</option>
                                        <option value="PUT">PUT</option>
                                        <option value="DELETE">DELETE</option>
                                        <option value="OPTIONS">OPTIONS</option>
                                        <option value="PATCH">PATCH</option>
                                        <option value="LINK">LINK</option>
                                        <option value="UNLINK">UNLINK</option>
                                        <option value="COPY">COPY</option>
                                        <option value="HEAD">HEAD</option>
                                        <option value="PURGE">PURGE</option>
                                    </select>
                                </span>    
                                </div>
                            </div>
                                                                
                            <div class="form-group">
                                <label class="col-sm-2 control-label"> Path</label>
                                <div class="col-sm-8">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-link"></i>
                                        </div>
                                        <input id="txt-path" type="text" class="form-control path" placeholder="Path" name="path" value="">
                                    </div>    
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="col-sm-2 control-label"> Ip</label>
                                <div class="col-sm-8">
                                    <div class="input-group">
                                        <div class="input-group-addon">
                                            <i class="fa fa-laptop"></i>
                                        </div>
                                        <input id="txt-ip" type="text" class="form-control ip" placeholder="Ip" name="ip" value="">
                                    </div>   
                                </div>
                            </div>
                                        
                        </div>
                    </div>
                    <!-- /.box-body -->

                    <div class="box-footer">
                        <div class="col-md-2"></div>
                        <div class="col-md-8" style='padding-left: 5px;'>
                            <div class=" pull-left " >
                                <a class="btn btn-default btn-reset-filter"><i class="fa fa-undo"> </i> Reset</a>
                                
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
                            <th>User</th>
                            <th>Method</th>
                            <th>Path</th>
                            <th>Ip</th>
                            <th>Input</th>
                            <th>Create At</th>
                        </tr>
                        @foreach ($data as $item)
                        <tr>

                            <td>{{$item->admin->name}}</td>
                            <td>
                                @if($item->method == 'GET')
                                    <span class="badge badge-md bg-green">{{$item->method}}</span>
                                @elseif($item->method == 'POST')
                                    <span class="badge badge-md bg-blue">{{$item->method}}</span>
                                    @elseif($item->method == 'DELETE')
                                        <span class="badge badge-md bg-red">{{$item->method}}</span>
                                    @else
                                    <span class="badge badge-md">{{$item->method}}</span>
                                @endif
                            </td>
                            <td><span class="label label-info">{{$item->path}}</span></td>
                            <td><span class="label label-primary">{{$item->ip}}</span></td>
                            <td>
                                @if($item->input == '[]')
                                    <code>{}</code>
                                @else
                                    <pre class="expand-log-input" style="cursor:pointer">{...}</pre>
                                    <pre hidden><span  class="fa fa-compress colapse-log-input" style="float: right; cursor: pointer"></span><code>{{json_encode(json_decode($item->input), JSON_PRETTY_PRINT)}}</code> </pre>
                                @endif
                            </td>
                            <td>{{$item->created_at->format(setting('date_formats'))}}</td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            <!-- /.box-body -->
            <div class="pull-right"><br/>
                {{ $data->links()}}
            </div>
        </div>
        
        <!-- /.box -->
            
    </div>
</div>
@endsection

@push('scripts')
    <script type="text/javascript">
        $( document ).ready(function() {
            $('.select2').select2();

            $('#cbo-admins').val(get('admin_id')).trigger('change');
            $('#cbo-methods').val(get('method')).trigger('change');
            $('#txt-id').val(get('id'));
            $('#txt-path').val(get('path'));
            $('#txt-ip').val(get('ip'));

            //console.log( "ready!" );
            $( "#filter-logs" ).click(function() {
                $(".logs-filter-form").slideToggle();
            });

            if($('#cbo-admins').val() ||  $('#cbo-methods').val() ||  $('#txt-id').val() ||  $('#txt-path').val() ||  $('#txt-ip').val()){
                $( "#filter-logs" ).click();
            }


            $('.expand-log-input').click(function () {
                $(this).next().toggle();
                $(this).toggle();
            });

            $('.colapse-log-input').click(function () {
                $(this).parent().toggle();
                $(this).parent().prev().toggle();

            });

            $('.delete-all-logs').click(function() {
                if (confirm("Are you sure that you want to delete all log?")) {
                    let me = $(this)
                    let url = me.data('url');
                    $('#form-clear-all').submit();
                }
            });


            function get(name){
                if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(window.location.search))
                    return decodeURIComponent(name[1]);
            }

            $('.btn-reset-filter').click(function(){
                $('#cbo-admins').val("").trigger('change');
                $('#cbo-methods').val("").trigger('change');
                $('#txt-id').val("");
                $('#txt-path').val("");
                $('#txt-ip').val("");
                console.log("click");
            });
        });

    </script>
@endpush