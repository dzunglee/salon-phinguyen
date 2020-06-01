<header id="main-header">
    <nav class="navbar fixed-top navbar-expand-lg navbar-{{$theme}}">
        <div class="container">
            <!-- Site Logo -->
            <a id="logo" class="navbar-brand" href="{{route('home')}}">
                <img class="img-fluid logo {{$theme == 'light'?'':'hide'}}"
                     src="{{config('setting.fe_logo_image_light')}}"
                     alt="site logo">
                <img class="img-fluid logo {{$theme == 'dark'?'':'hide'}}"
                     src="{{config('setting.fe_logo_image_dark')}}"
                     alt="site logo">
            </a>
            <!-- Dropdown Button -->
            <button id="hamburger" class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <!-- Navigation Links -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    @foreach($menu as $key => $item)
                        @if(isset($item['children']))
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="menu-item-{{$key}}" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span>{{$item['title']}}</span>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="menu-item-{{$key}}">
                                    @foreach($item['children'] as $child)
                                        <a class="dropdown-item" href="{{url('/').$child['uri']}}">
                                            <div>{{$child['title']}}</div>
                                        </a>
                                    @endforeach
                                </div>
                            </li>
                        @else
                            <li class="nav-item {{$loop->first?'active':''}}">
                                <a href="{{url('/').$item['uri']}}" class="nav-link" id="menu-item-{{$key}}">
                                    {{$item['title']}}
                                </a>
                        @endif
                    @endforeach
                    <li class="nav-item d-flex align-items-center justify-content-end pl-2 py-2">
                        <div data-toggle="tooltip" id="switchLangTooltip"
                             title="{{$theme !== 'dark' ? __('dark-mode') : __('light-mode')}}"
                             data-dark="@lang('dark-mode')"
                             data-light="@lang('light-mode')">
                            <label class="for-switch-lang" for="switchLang">
                                <input type="checkbox" class="hide"
                                       id="switchLang" {{$theme == 'dark'?'checked':''}}>
                                <i class="fa"></i>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header><!-- Header End -->