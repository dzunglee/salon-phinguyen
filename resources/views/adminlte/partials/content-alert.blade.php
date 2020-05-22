@if ($errors = session()->get('errors'))

    {{-- VALIDATE with bag default--}}
    @if ($errors->any())
        <div class="alert alert-danger alert-dismissable">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            @foreach ($errors->all() as $error)
                - {{ $error }}<br>
            @endforeach
        </div>


    {{-- EXCEPTION from pjax --}}
    @elseif($errors->hasBag('exception'))
        <?php $error = $errors->getBag('exception');?>
        <div class="alert alert-danger alert-dismissable">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            <h4>
                <i class="icon fa fa-warning"></i>
                <i style="border-bottom: 1px dotted #fff;cursor: pointer;" title="{{ $error->get('type')[0] }}"
                   ondblclick="var f=this.innerHTML;this.innerHTML=this.title;this.title=f;">{{ class_basename($error->get('type')[0]) }}</i>
                In <i title="{{ $error->get('file')[0] }} line {{ $error->get('line')[0] }}"
                      style="border-bottom: 1px dotted #fff;cursor: pointer;"
                      ondblclick="var f=this.innerHTML;this.innerHTML=this.title;this.title=f;">{{ basename($error->get('file')[0]) }}
                    line {{ $error->get('line')[0] }}</i> :
            </h4>
            <p>{!! $error->get('message')[0] !!}</p>
        </div>

    {{-- ANY --}}
    @elseif($bags = $errors->getBags())
        @foreach ($bags as $name => $bag)
            <div class="alert alert-danger alert-dismissable">
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                <h4><i class="icon fa fa-exclamation-circle"></i>{{ $name }}</h4>
                @foreach ($bag->all() as $error)
                    - {{ $error }}<br>
                @endforeach
            </div>
        @endforeach
    @endif


@endif


@if($error = session()->get('error'))
    <div class="alert alert-danger alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        @if($title = array_get($error->get('title'), 0))
            <h4><i class="icon fa fa-exclamation-circle"></i>{{ $title }}</h4>
        @endif
        <p>{!!  array_get($error->get('message'), 0) !!}</p>
    </div>
@endif

@if($success = session()->get('success'))
    <div class="alert alert-success alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        @if($title = array_get($success->get('title'), 0))
            <h4><i class="icon fa fa-check-circle"></i>{{ $title }}</h4>
        @endif
        <p>{!!  array_get($success->get('message'), 0) !!}</p>
    </div>
@endif

@if($info = session()->get('info'))
    <div class="alert alert-info alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        @if($title = array_get($info->get('title'), 0))
            <h4><i class="icon fa fa-info-circle"></i>{{ $title }}</h4>
        @endif
        <p>{!!  array_get($info->get('message'), 0) !!}</p>
    </div>
@endif

@if($warning = session()->get('warning'))
    <div class="alert alert-warning alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        @if($title = array_get($warning->get('title'), 0))
            <h4><i class="icon fa fa-warning"></i>{{ $title }}</h4>
        @endif
        <p>{!!  array_get($warning->get('message'), 0) !!}</p>
    </div>
@endif



@if(Session::has('toastr'))
    @php
        $toastr     = Session::get('toastr');
        $type       = array_get($toastr->get('type'), 0, 'success');
        $message    = array_get($toastr->get('message'), 0, '');
        $options    = json_encode($toastr->get('options', []));
    @endphp
    <script>
        $(function () {
            toastr.{{$type}}('{!!  $message  !!}', null, {!! $options !!});
        });
    </script>
@endif