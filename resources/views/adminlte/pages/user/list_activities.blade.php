@foreach($activities as $activity)
    @if( isset($activity->date) &&  (!isset($date) || $date != $activity->date))
        <?php $date = $activity->date?>
        <li class="time-label">
            <span class="bg-red">
              {{$activity->date}}
            </span>
        </li>
    @endif

    <li>
        <i class="fa fa-star bg-blue"></i>

        <div class="timeline-item">
            <span class="time"><i class="fa fa-clock-o"></i> {{$activity->time}}</span>

            <h3 class="timeline-header">You {{$activity->action}}
                @if($activity->type == 'link')
                    <a href="{{admin_url($activity->attachment)}}" target="_blank" class="break-word">{{$activity->content}}</a>
                @endif
            </h3>

            @if($activity->attachment)
                @switch($activity->type)
                    @case('image')

                        <div class="timeline-body">
                                <img src="{{$activity->attachment}}" alt="..." class="margin">
                        </div>

                    @break

                    @case('text')
                        <div class="timeline-body">
                            {{$activity->attachment}}
                        </div>
                    @break

                @endswitch
            @endif
        </div>
    </li>
@endforeach
@if($activities->getCollection()->isNotEmpty())
    <li id="outer-load-more">
        <div class="timeline-item">
        <button type="button" id="btn-load-more" data-page="{{ isset($page)?$page:1 }}" data-url = {{route('cms.profile.activities')}} data-date="{{ isset($date)?$date:'' }}"
                class="nounderline btn-block mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent btn btn-primary"
                data-loading-text="Loading..."> Load More </button>
        </div>
    </li>
@endif

<script>
        $(function () {
            $("#btn-load-more").click(function (){
                // let loading = $("#upload-loading");
                // loading.addClass("loading");
                let me = $(this);
                let page = me.data('page') + 1;
                let date = me.data('date');

                let url = me.data('url');
                $.ajax({
                    url: url + "?page=" + page + "&date=" + date,
                    method: 'get',
                    contentType: false,
                    processData: false,
                    statusCode: {
                        422: function () {
                            toastr.error('The given data was invalid');
                            //loading.removeClass("loading");
                        },
                        403: function () {
                            toastr.error('Access Forbidden');
                            //loading.removeClass("loading");
                        },
                        400: function (result) {
                            toastr.error(result.responseText);
                            //loading.removeClass("loading");
                        },
                        500: function () {
                            toastr.error('Internal Server Error');
                            //loading.removeClass("loading");
                        }
                    },
                    success: function (result) {
                        //$.pjax.reload({container:"#pjax-container"});
                        $("#outer-load-more").remove();
                        $('#list-activities').append(result);
                        //toastr.success('Updated successfully!');
                        //loading.removeClass("loading");
                    }
                });
            });

            $(".btn").click(function(){
                $(this).button('loading');

            });
        });
    </script>