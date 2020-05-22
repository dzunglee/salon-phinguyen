
@extends('adminlte.pages.user.profile.profile-layout')
@section('tab-content')

    <!-- /.col -->
    <div class="col-md-9">
        <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
                <li id="htab-profile" class="htab "  data-id="profile" ><a href="{{route('cms.profile')}}" pjax>Profile</a></li>
                <li id="htab-activity" class="htab" data-id="activity" ><a href="{{route('cms.profile.activity')}}" pjax>Activity</a></li>
                <li id="htab-settings" class="htab active" data-id="settings"><a href="" pjax >Settings</a></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="settings">

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