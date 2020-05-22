<!-- /// FOOTER /// -->
<footer id="main-footer">
    <div id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-12 d-flex align-items-center flex-wrap">
                    <div class="col-12 col-md-6">
                        <p id="copyright" class="text-center text-md-left">
                            {{config('setting.fe_copy_right_text','')}}
                        </p><!-- Copyright Text -->
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="d-flex justify-content-center justify-content-md-end">
                            <ul class="social-links pr-3 d-flex align-items-center">
                                @foreach($socialMenu as $item)
                                    <li>
                                        <a target="_blank" href="{{$item['uri']}}">
                                            <span class="fa {{$item['icon']}}"></span>
                                        </a>
                                    </li>
                                @endforeach
                            </ul>
                            <ul class="social-links flag">
                                <li>
                                    <a class="switchLanguage {{app()->getLocale() == 'vi'?'active':''}}"
                                       href="{{url()->current()}}" data-url="{{url()->current()}}"
                                       data-locale="vi" title="Tiếng Việt">
                                        <img src="{{asset('imba/light/images/vietnam.svg')}}">
                                    </a>
                                </li>
                                <li>
                                    <a class="switchLanguage {{app()->getLocale() == 'en'?'active':''}}"
                                       href="{{url()->current()}}" data-url="{{url()->current()}}"
                                       data-locale="en" title="English">
                                        <img src="{{asset('imba/light/images/usa.svg')}}">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- Container End -->
    </div>
</footer><!-- Footer End -->