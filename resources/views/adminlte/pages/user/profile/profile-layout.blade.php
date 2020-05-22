
@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')
@section('content')
<!-- Main content -->
<style>
    .profile-image-outer{
        width: 100px;
        height: 100px;
        margin: 0 auto;
        position: relative;
    }

    .profile-image-inner:hover  .handle-upload-avatar{
        display: block;

    }

    .profile-user-img {
        width: 100px;
        height: 100px!important;
    }

    .handle-upload-avatar{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #3c8dbc82;
        border-radius: 50px;
    }

    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    .inputfile + label {
        position: absolute;
        font-size: 20px;
        font-weight: 700;
        color: #FFF;
        display: inline-block;
        cursor: pointer;
        margin-top: 50%;
        margin-left: 50%;
        transform: translate(-50%, -50%);
    }

    #upload-loading{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #3c8dbc82;
        border-radius: 50px;
    }

    #upload-loading.loading{
        display: block;
    }

    .placeholder {
        margin: 0 auto;
        max-width: 200px;
        min-height: 100px;
        background-color: #eee;
        border-radius: 50px;
    }

    @keyframes placeHolderShimmer{
        0%{
            background-position: -468px 0
        }
        100%{
            background-position: 468px 0
        }
    }

    .animated-background {
        animation-duration: 1.25s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        background: darkgray;
        background: linear-gradient(to right, #eeeeee 10%, #dddddd 18%, #eeeeee 33%);
        background-size: 800px 104px;
        height: 100px;
        position: relative;
        border-radius: 50px;
    }

    .timeline-item img{
        max-height: 100px;
        max-width: 100px;
    }

    .timeline {
        position: relative;
        margin: 0 0 60px 0;
        padding: 0;
        list-style: none;
    }

    #remove-row #btn-more{
        position: absolute;
    }

</style>
    <div class="row">
        <div class="col-md-3">

            <!-- Profile Image -->
            <div class="box box-primary">
                <div class="box-body box-profile">
                    <div class="profile-image-outer">
                        <div class="profile-image-inner media-loader-parent hide-preview">
                            <img id="avatar" class="profile-user-img img-responsive img-circle current-user-avt" src="{{asset($admin->avatar) }}" alt="User profile picture">
                            <div class="handle-upload-avatar ">
                                <input type="text " class="form-control media-loader inputfile" placeholder="Choose file" id="avatar-file" name="file" value="{{$admin->avatar}}" data-url="{{route('cms.profile.upload-avatar')}}">
                                <label for="avatar-file"> <i class="fa fa-edit"></i></label>
                            </div>
                            <div id="upload-loading" class="">
                                <div class="placeholder">
                                    <div class="animated-background"></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <h3 class="profile-username text-center">{{$admin->name}}</h3>

                    {{--<p class="text-muted text-center">Software Engineer</p>--}}

                    {{--<ul class="list-group list-group-unbordered">--}}
                        {{--<li class="list-group-item">--}}
                            {{--<b>Followers</b> <a class="pull-right">1,322</a>--}}
                        {{--</li>--}}
                        {{--<li class="list-group-item">--}}
                            {{--<b>Following</b> <a class="pull-right">543</a>--}}
                        {{--</li>--}}
                        {{--<li class="list-group-item">--}}
                            {{--<b>Friends</b> <a class="pull-right">13,287</a>--}}
                        {{--</li>--}}
                    {{--</ul>--}}

                    {{--<a href="#" class="btn btn-primary btn-block"><b>Follow</b></a>--}}
                </div>
                <!-- /.box-body -->
            </div>
            <!-- /.box -->

            <!-- About Me Box -->
            {{--<div class="box box-primary">--}}
                {{--<div class="box-header with-border">--}}
                    {{--<h3 class="box-title">About Me</h3>--}}
                {{--</div>--}}
                {{--<!-- /.box-header -->--}}
                {{--<div class="box-body">--}}
                    {{--<strong><i class="fa fa-book margin-r-5"></i> Education</strong>--}}

                    {{--<p class="text-muted">--}}
                        {{--B.S. in Computer Science from the University of Tennessee at Knoxville--}}
                    {{--</p>--}}

                    {{--<hr>--}}

                    {{--<strong><i class="fa fa-map-marker margin-r-5"></i> Location</strong>--}}

                    {{--<p class="text-muted">Malibu, California</p>--}}

                    {{--<hr>--}}

                    {{--<strong><i class="fa fa-pencil margin-r-5"></i> Skills</strong>--}}

                    {{--<p>--}}
                        {{--<span class="label label-danger">UI Design</span>--}}
                        {{--<span class="label label-success">Coding</span>--}}
                        {{--<span class="label label-info">Javascript</span>--}}
                        {{--<span class="label label-warning">PHP</span>--}}
                        {{--<span class="label label-primary">Node.js</span>--}}
                    {{--</p>--}}

                    {{--<hr>--}}

                    {{--<strong><i class="fa fa-file-text-o margin-r-5"></i> Notes</strong>--}}

                    {{--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>--}}
                {{--</div>--}}
                {{--<!-- /.box-body -->--}}
            {{--</div>--}}
            <!-- /.box -->
        </div>
        <!-- /.col -->
        @yield('tab-content')

        <!-- /.col -->
    </div>
    <!-- /.row -->

@stop

@push('scripts')
    <script type="text/javascript">
        $(function () {
            // $('a[href="#'+ activeTab +'"]').tab('show')
            $("#avatar-file").change(function (){
                console.log("upload");
                let loading = $("#upload-loading");
                loading.addClass("loading");
                let me = $(this);
                console.log("upload");
                let formData = new FormData();
                formData.append('_token', $('meta[name="csrf-token"]').attr('content'));
                formData.append('avatar',  $(this).val());

                let url = me.data('url');
                let data = formData;
                $.ajax({
                    url: url,
                    method: 'post',
                    contentType: false,
                    processData: false,
                    data: data,
                    statusCode: {
                        422: function () {
                            toastr.error('The given data was invalid');
                            loading.removeClass("loading");
                        },
                        403: function () {
                            toastr.error('Access Forbidden');
                            loading.removeClass("loading");
                        },
                        400: function (result) {
                            toastr.error(result.responseText);
                            loading.removeClass("loading");
                        },
                        500: function () {
                            toastr.error('Internal Server Error');
                            loading.removeClass("loading");
                        }
                    },
                    success: function (result) {
                        $(".current-user-avt").attr("src",result);
                        //$.pjax.reload({container:"#pjax-container"});
                        toastr.success('Updated successfully!');
                        loading.removeClass("loading");
                    }
                });
            });
        });
    </script>
@endpush