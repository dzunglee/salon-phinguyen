
@if(isset($title) && $title)
<section class="content-header">
    <h1>
        {{ $title or '' }}
        <small>{{ $desc or '' }}</small>
    </h1>
    @if (isset($breadcrumb))
        <ol class="breadcrumb" style="margin-right: 30px;">
            <li><a href="{{ cms_url('/') }}"><i class="fa fa-home"></i> Home</a></li>
            @foreach($breadcrumb as $item)
                @if($loop->last)
                    <li class="active">
                        @if (array_has($item, 'icon'))
                            <i class="fa fa-{{ $item['icon'] }}"></i>
                        @endif
                        {{ $item['text'] }}
                    </li>
                @else
                    <li>
                        <a href="{{ cms_url(array_get($item, 'url')) }}">
                            @if (array_has($item, 'icon'))
                                <i class="fa fa-{{ $item['icon'] }}"></i>
                            @endif
                            {{ $item['text'] }}
                        </a>
                    </li>
                @endif
            @endforeach
        </ol>
    @endif

</section>
@endif