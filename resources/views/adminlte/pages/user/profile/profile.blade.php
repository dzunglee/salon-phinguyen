
@extends('adminlte.pages.user.profile.profile-layout')
@section('tab-content')

        <!-- /.col -->
        <div class="col-md-9">
            <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                    <li id="htab-profile" class="htab active"  data-id="profile" ><a href="" pjax>Profile</a></li>
                    <li id="htab-activity" class="htab" data-id="activity" ><a href="{{route('cms.profile.activity')}}" pjax>Activity</a></li>
                    {{--<li id="htab-settings" class="htab" data-id="settings"><a href="{{route('cms.profile.settings')}}" pjax>Settings</a></li>--}}
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="profile">
                        <div class="box-header with-border">
                            <h3 class="box-title">Public info</h3>
                        </div>
                        <br/>
                        <form class="form-horizontal" action="{{route('cms.profile.update')}}" method="post" accept-charset="UTF-8" class="form-horizontal" enctype="multipart/form-data" pjax-container="">
                            {{ csrf_field() }}
                            {{ method_field('PUT') }}
                            <div class="form-group">
                                <label for="inputEmail" class="col-sm-2 control-label">Username </label>

                                <div class="col-sm-10">
                                    <input disabled type="email" class="form-control" id="inputEmail" placeholder="Email" name="email" value="{{$admin->email}}">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputName" class="col-sm-2 control-label">Display name &nbsp;<span style="color:#db4437;">*</span></label>

                                <div class="col-sm-10">
                                    <input type="name" class="form-control" id="inputName" placeholder="Name" name="name" value="{{$admin->name}}">
                                </div>
                            </div>


                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-10">
                                    <button type="submit" class="btn btn-primary">Update info</button>
                                </div>
                            </div>
                        </form>
                        <div class="box-header with-border">
                            <h3 class="box-title">Change password</h3>
                        </div>
                        <br/>

                        <form class="form-horizontal" action="{{route('cms.profile.update.password')}}" method="post" accept-charset="UTF-8" class="form-horizontal" enctype="multipart/form-data" pjax-container="">
                            {{ csrf_field() }}
                            {{ method_field('PUT') }}
                            <div class="form-group">
                                <label for="password" class="col-sm-2  control-label">Password &nbsp;<span style="color:#db4437;">*</span></label>

                                <div class="col-sm-10">
                                    <input type="password" id="password" name="password"
                                           value=""  minlength="6" maxlength="32"
                                           class="form-control password" placeholder="Input Password">
                                    <div id="password-strength-meter" hidden>
                                        <div class="progress" style="height: 2px">
                                            <div id="p-progress" class="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width:0%">
                                                {{--<span id="p-text"></span>--}}
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div class="form-group">
                                <label for="password_confirmation" class="col-sm-2  control-label">Re-Password&nbsp;
                                    <span style="color:#db4437;">*</span></label>

                                <div class="col-sm-10">
                                    <input type="password" id="password_confirmation" name="password_confirmation"
                                           minlength="6" maxlength="32"
                                           value=""
                                           class="form-control password_confirmation"
                                           placeholder="Input Password confirmation">
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-sm-offset-2 col-sm-10 pull-right">
                                    <button type="submit" class="btn btn-primary">Change password</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- /.tab-pane -->

                </div>
                <!-- /.tab-content -->
            </div>
            <!-- /.nav-tabs-custom -->
        </div>
        <!-- /.col -->


@stop

@push('scripts')
    <script type="text/javascript">
        $(function () {
            var curPasswordStrength = "";
            $("#password").on('input', function() {
                let pass = $(this).val();

                if(!pass){
                    curPasswordStrength = "";
                    $("#password-strength-meter").hide();
                    $('#p-progress').css({'width':'0'});
                }else{
                    $("#password-strength-meter").show();
                }

                // console.log(pass, CheckPasswordStrength(pass));

                var newPasswordStrength = $.CheckStringStrength(pass)
                if(curPasswordStrength != newPasswordStrength){
                    curPasswordStrength = newPasswordStrength;
                    updatepasswordStrengthMeter(curPasswordStrength);
                }
            });

            function updatepasswordStrengthMeter(passwordStrength) {
                switch (passwordStrength) {
                    case 'weak':
                        $('#p-progress').css({'width':'30%', 'background-color': '#dd4b39'});
                        // $("#p-text").text("Weak");
                        break;
                    case 'good':
                        $('#p-progress').css({'width':'70%', 'background-color': '#f39c12'});
                        // $("#p-text").text("Good");
                        break;
                    case 'strong':
                        $('#p-progress').css({'width':'100%', 'background-color': '#00a65a'});
                        // $("#p-text").text("Strong");
                        break;

                }
            }
        });

    </script>
@endpush