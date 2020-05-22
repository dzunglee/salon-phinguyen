
@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')
@section('content')
    <style>
        #files img{
            width: 100px;
            height: 100px;
        }
    </style>

    <div class="row">
        <div class="col-md-12">
            <div class="box box-info" id="filedrag">
                {{--<div class="box-header with-border">--}}
                    {{--<h3 class="box-title"></h3>--}}
                {{--</div>--}}
                <form id="main-form" action="{{route('users.store')}}" method="post" accept-charset="UTF-8" class="form-horizontal" enctype="multipart/form-data" pjax-container="">
                    {{ csrf_field() }}
                    <div class="box-body">
                        <div class="fields-group">
                            <div class="form-group  ">
                                <label for="name" class="col-sm-2  control-label">Email &nbsp;<span style="color:#db4437;">*</span></label>
                                <div class="col-sm-8">
                                    <input autocomplete="off"  type="email" id="email" name="email" value="{{old('email')}}" class="form-control name" placeholder="Input email" required>
                                </div>
                            </div>
                            <div class="form-group  ">
                                <label for="username" class="col-sm-2  control-label">Name &nbsp;<span style="color:#db4437;">*</span></label>
                                <div class="col-sm-8">
                                    <input autocomplete="off"  type="text" id="" name="name" value="{{old('name')}}" class="form-control username" placeholder="Input name" required>
                                </div>
                            </div>
                            <div class="form-group  ">
                                <label for="avatar" class="col-sm-2  control-label">Avatar</label>
                                <div class="col-sm-8">
                                    <div class="media-loader-parent">
                                        <div class="preview" id="preview"> </div>
                                        <div class="input-group ">
                                            <span class="input-group-addon"><i class="fa fa-upload"></i></span>
                                            <input autocomplete="off"  type="text " name="avatar" class="form-control media-loader fileselect"  data-preview="#preview" placeholder="Choose file" value="" data-files="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group  ">
                                <label for="password" class="col-sm-2  control-label">Password &nbsp;<span style="color:#db4437;">*</span></label>
                                <div class="col-sm-8">
                                    <input autocomplete="off" type="password" id="password" name="password" value="" class="form-control password"  minlength="6" maxlength="32" placeholder="Input Password" required>
                                </div>
                            </div>
                            <div class="form-group  ">
                                <label for="password_confirmation" class="col-sm-2  control-label">Password confirmation &nbsp;<span style="color:#db4437;">*</span></label>
                                <div class="col-sm-8">
                                    <input autocomplete="off"  type="password" id="password_confirmation" name="password_confirmation" value=""  minlength="6" maxlength="32" class="form-control password_confirmation" placeholder="Input Password confirmation" required>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="box-footer">
                        <div class="col-md-2">
                        </div>
                        <div class="col-md-8">
                            <div class=" pull-right">
                                <button class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                    <!-- /.box-footer -->
                </form>
            </div>

        </div>
    </div>
@stop

@push('scripts')

    <script>
        $(document).ready(function () {
            $('.fileselect').customFileUpload({
                accepts: ['image/gif', 'image/jpeg', 'image/png']
            });
        })
    </script>

@endpush