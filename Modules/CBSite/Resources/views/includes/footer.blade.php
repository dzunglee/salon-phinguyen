
<footer class="pt-5 pb-5" id="contact">
    <div class="container">
        <div class="cb-divider mb-5"></div>
        <div class="row">
            <div class="col-md-5">
                <h2 class="mb-4 text-uppercase">{{isset($ourContactData['attributes']['big-title-1'])?$ourContactData['attributes']['big-title-1'] : ''}}</h2>
                <div class="text-blur">
                    {!! nl2br(isset($ourContactData['attributes']['description-1'])?$ourContactData['attributes']['description-1'] : '') !!}
                </div>
                <div class="text-form">
                    {!! nl2br(isset($ourContactData['attributes']['slogan-1'])?$ourContactData['attributes']['slogan-1'] : '') !!}
                </div>
                <ul class="navbar-nav flex-row" style="padding-top: 15px">
                    @foreach($socialMenu as $item)
                        <li><a target="_blank" class="nav-link px-3" href="{{$item['uri']}}" style="padding-left: 0rem !important"><span class="fa {{$item['icon']}}"></span></a></li>
                    @endforeach
                </ul>
            </div>
            <div class="flex-grow-1"></div>
            <div class="col-md-5">
                <h2 class="mb-4 text-uppercase">{{isset($ourContactData['attributes']['big-title-2'])?$ourContactData['attributes']['big-title-2'] : ''}}</h2>
                <h4 class="mb-3">{{isset($ourContactData['attributes']['company-name'])?$ourContactData['attributes']['company-name'] : ''}}</h4>
                <div class="text-blur">
                    <div><span class="mr-3"><i class="icon-address fa fa-map-marker"></i></span>{{isset($ourContactData['attributes']['address-2'])?$ourContactData['attributes']['address-2'] : ''}}</div>
                    <div><span class="mr-3"><i class="icon-address fa fa-phone-square"></i></span>{{isset($ourContactData['attributes']['phone-2'])?$ourContactData['attributes']['phone-2'] : ''}}</div>
                    <div><span class="mr-3"><i class="icon-address fa fa-envelope"></i></span>{{isset($ourContactData['attributes']['email-2'])?$ourContactData['attributes']['email-2'] : ''}}</div>
                    
                </div>
            </div>
        </div>
        <div class="mt-5 d-flex" style="margin-top: 0rem !important">

            <div class="d-flex align-items-end copy-right">{!! setting('fe_copy_right_text','') !!}</div>
            <div class="flex-grow-1 px-3 d-flex flex-row align-items-end">
                <div class="cb-gradient pb-1"></div>
            </div>
            <div class="d-flex justify-content-end">

                <div class="d-flex flex-row">
                    <ul class="navbar-nav flex-row">
                        <div class="multi-language">
                            <a href="{{url('vi')}}" class="{{session('lang') == 'vi' ? 'active' : '' }}"><img src="{{url('/img/icons/vietnam.png')}}"></a>
                            <a href="{{url('en')}}" class="{{session('lang') == 'en' || empty(session('lang')) ? 'active' : '' }}"><img src="{{url('/img/icons/great-britain.png')}}"></a>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>