<header id="header">
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
        <a class="navbar-brand" href="{{url('/')}}" id="logo" data-src="{{url(setting('fe_logo_image','#'))}}">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div class="burger-1 bugger"></div>
            <div class="burger-2 bugger"></div>
            <div class="burger-3 bugger"></div>
        </button>
        <div class="collapse navbar-collapse position-relative" id="navbarSupportedContent">
            <div class="mr-auto"></div>
            <ul class="navbar-nav">
                @foreach($menu as $key => $item)
                    @if(isset($item['children']))
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="menu-item-{{$key}}" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>{{$item['title']}}</span>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="menu-item-{{$key}}">
                                @foreach($item['children'] as $child)
                                    <a class="dropdown-item" href="{{url('/').$child['uri']}}">
                                        <div>{{$child['title']}}</div></a>
                                @endforeach
                            </div>
                        </li>
                    @else
                        <li class="nav-item"><a href="{{url('/').$item['uri']}}" class="nav-link" id="menu-item-{{$key}}"><span>{{$item['title']}}</span></a>
                    @endif
                @endforeach
            </ul>
            <span class="navbar-toggler d-lg-none btn-close" data-toggle="collapse" data-target="#navbarSupportedContent"></span>
        </div>
        </div>
    </nav>
</header>