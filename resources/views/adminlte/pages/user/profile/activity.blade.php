
@extends('adminlte.pages.user.profile.profile-layout')
@section('tab-content')

        <div class="col-md-9">
            <div class="nav-tabs-custom">
                <ul class="nav nav-tabs">
                    <li id="htab-profile" class="htab"  data-id="profile" ><a href="{{route('cms.profile')}}" pjax>Profile</a></li>
                    <li id="htab-activity" class="htab active" data-id="activity" ><a href="" pjax>Activity</a></li>
                    {{--<li id="htab-settings" class="htab" data-id="settings"><a href="{{route('cms.profile.settings')}}" pjax >Settings</a></li>--}}
                </ul>
                <div class="tab-content">

                    <div class="tab-pane active" id="activity">
                        <!-- The timeline -->
                        <ul id="list-activities" class="timeline timeline-inverse">
                            {!!\App\Classes\ActivityLogs::render($activities)!!}
                        </ul>
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

        });



    </script>
@endpush