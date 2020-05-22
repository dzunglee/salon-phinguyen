@extends('cbsite::layouts.main')

@section('content')
    <section id="banner">
        <div class="content-img"></div>
        <div class="wrap-content-section">

            <div class="content-section">
                <div class="container d-flex flex-row">
                    <div class="row">
                        <article class="col-md-4 col-lg-5 col-xl-5 justify-content-center align-items-center d-flex pt-3">
                            <div>
                                <h1 class="animated fadeInUp animatedFadeInUp">{{isset($bannerData['attributes']['big-title'])?$bannerData['attributes']['big-title'] : ''}}</h1>
                                <main class="text-blur text-index animated fadeIn animatedFadeInUp animation-delay-5" style="opacity: 1">
                                    {!! nl2br(isset($bannerData['attributes']['description'])?$bannerData['attributes']['description'] : '') !!}
                                </main>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="wrap-logo">
                    <div class="big-logo" id="scene">
                        <div data-depth="0.4"></div>
                        <div class="part1" data-depth="0.4"></div>
                        <div class="part2" data-depth="0.8"></div>
                        <div class="part3" data-depth="1.0"></div>
                        <div class="part4" data-depth="0.7"></div>
                    </div>
                </div>
                <div class="ball1"></div>
                <div class="ball2"></div>
            </div>
        </div>
    </section>
    <section id="about-us">
        <div class="bg-top"></div>
        <div class="container pb-5">
            <article class="row pt-3" id="about">
                <div class="col-lg-4">
                    <h2 class="text-uppercase mb-3">{{isset($aboutData->title)?$aboutData->title : ''}}</h2>
                    <div class="cb-gradient"></div>
                    <main class="text-blur my-4">
                        {!! isset($aboutData->content)?$aboutData->content : '' !!}
                    </main>
                </div>
                <div class="col-lg-8 pl-lg-5">
                    <div class="pl-lg-5" style="height: 0;padding-bottom: 56.25%; position: relative">
                            <div class="video-about" style="padding-bottom: 0px; position: absolute; width: 100%; height: 100%;object-fit: cover">
                            {{-- <div>
                                <iframe src="{{'https://www.youtube.com/embed/'.get_id_from_youtube_url($aboutData->attributes['video'])}}" frameborder="0" allow="accelerometer;showinfo=0 picture-in-picture"></iframe>
                            </div> --}}
                            
                            <iframe
                                width="100%"
                                height="100%"
                                src="{{'https://www.youtube.com/embed/'.get_id_from_youtube_url($aboutData->attributes['video'])}}"
                                srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href={{'https://www.youtube.com/embed/'.get_id_from_youtube_url($aboutData->attributes['video'])}}?autoplay=1><img src=https://img.youtube.com/vi/{{get_id_from_youtube_url($aboutData->attributes['video'])}}/hqdefault.jpg><span>▶</span></a>"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                ></iframe>
                            </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="image-about">
                        {{-- <div data-src="{{$aboutData->photo}}" class="image-svg"></div> --}}
                        @if(substr($aboutData->photo, -3) == 'svg')
                            <article class="svg-image-about hover-about-svg">
                                <div class="image text-center mb-4">
                                    <div id="image-svg-about1" class="image-svg-about d-none  d-lg-block" data-src="{{$aboutData->photo}}"></div>
                                </div>
                            </article>
                        @else
                            <img src="{{$aboutData->photo}}">
                        @endif
                        <article class="svg-image-about-mobile hover-about-svg">
                            <div class="image text-center mb-4">
                            <div data-src="{{!empty($aboutData->attributes['banner-mobile']) ? $aboutData->attributes['banner-mobile'] : ''}}" class="image-svg-about-mobile d-block d-lg-none" id="image-svg-mobile">
                            </div>
                        </article>
                        {{-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1198.53 305.81"><defs><style>.cls-1,.cls-2,.cls-3{fill:#fff;}.cls-2,.cls-3{font-size:16px;}.cls-2{font-family:Roboto-Medium, Roboto;font-weight:500;}.cls-3{font-family:Roboto-Regular, Roboto;}.cls-4{letter-spacing:-0.01em;}.cls-5{letter-spacing:-0.02em;}.cls-6{letter-spacing:-0.01em;}.cls-7{letter-spacing:0.02em;}.cls-8{letter-spacing:-0.05em;}</style></defs><title>Element</title><g id="Layer_2" data-name="Layer 2"><g id="Element"><g id="y2014"><rect class="cls-1" x="73.02" y="222.18" width="10" height="70"/><circle class="cls-1" cx="78.02" cy="297.31" r="8.5"/><text class="cls-2" transform="translate(66.76 288.18) rotate(-90)">2014</text><text class="cls-3" transform="translate(0 174.97)">Itlabs4u was born on <tspan x="0" y="19.2">a small scale</tspan></text></g><g id="y2015"><rect class="cls-1" x="291.69" y="83.18" width="10.5" height="210"/><circle class="cls-1" cx="296.94" cy="296.75" r="8.5"/><text class="cls-2" transform="translate(286.41 288.18) rotate(-90)">2015</text><text class="cls-3" transform="translate(228.51 52.71)">Comb<tspan class="cls-4" x="42.54" y="0">r</tspan><tspan x="47.8" y="0">os is formed</tspan></text></g><g id="y2016"><rect class="cls-1" x="510.86" y="222.31" width="10" height="70"/><circle class="cls-1" cx="515.6" cy="296.88" r="8.5"/><text class="cls-2" transform="translate(504.48 288.31) rotate(-90)">2016</text><text class="cls-3" transform="translate(414.1 174.75)">Buiding up t<tspan class="cls-5" x="84.32" y="0">r</tspan><tspan x="89.42" y="0">acking systems </tspan><tspan x="0" y="19.2">for mo</tspan><tspan class="cls-4" x="47.2" y="19.2">t</tspan><tspan x="52.27" y="19.2">or-bike, car</tspan></text></g><g id="y2017"><rect class="cls-1" x="729.53" y="83.18" width="10.5" height="210"/><circle class="cls-1" cx="734.83" cy="296.75" r="8.5"/><text class="cls-2" transform="translate(723.71 288.18) rotate(-90)">2017</text><text class="cls-3" transform="translate(621.3 13.69)"><tspan xml:space="preserve">   Join Suga G</tspan><tspan class="cls-4" x="97.36" y="0">r</tspan><tspan x="102.62" y="0">oup</tspan><tspan x="0" y="19.2" xml:space="preserve">   D</tspan><tspan class="cls-6" x="22.38" y="19.2">e</tspan><tspan x="30.75" y="19.2">veloped p</tspan><tspan class="cls-4" x="99.4" y="19.2">r</tspan><tspan x="104.66" y="19.2">o</tspan><tspan class="cls-4" x="113.78" y="19.2">t</tspan><tspan x="118.85" y="19.2">otype p</tspan><tspan class="cls-4" x="171.16" y="19.2">r</tspan><tspan x="176.42" y="19.2">oducts </tspan><tspan x="0" y="38.4">for sma</tspan><tspan class="cls-7" x="55.03" y="38.4">r</tspan><tspan x="60.84" y="38.4">t home cont</tspan><tspan class="cls-4" x="145.98" y="38.4">r</tspan><tspan x="151.23" y="38.4">ol</tspan></text><circle class="cls-1" cx="624.04" cy="8.58" r="2.5"/><circle class="cls-1" cx="624.04" cy="28.06" r="2.5"/></g><g id="y2018"><rect class="cls-1" x="978.7" y="222.31" width="10" height="70"/><circle class="cls-1" cx="983.7" cy="296.88" r="8.5"/><text class="cls-2" transform="translate(972.94 288.31) rotate(-90)">2018</text><text class="cls-3" transform="translate(847.92 127.84)"><tspan xml:space="preserve">   Successfully, d</tspan><tspan class="cls-6" x="117.76" y="0">e</tspan><tspan x="126.13" y="0">veloped p</tspan><tspan class="cls-4" x="194.78" y="0">r</tspan><tspan x="200.04" y="0">oject for </tspan><tspan x="0" y="19.2">Biti</tspan><tspan class="cls-8" x="22.95" y="19.2">’</tspan><tspan x="25.27" y="19.2">s kids</tspan><tspan x="0" y="38.4" xml:space="preserve">   Coope</tspan><tspan class="cls-5" x="58" y="38.4">r</tspan><tspan x="63.1" y="38.4">ated with Singapore pa</tspan><tspan class="cls-7" x="225.91" y="38.4">r</tspan><tspan x="231.72" y="38.4">tners </tspan><tspan x="0" y="57.6">on NB lo</tspan><tspan class="cls-5" x="60.25" y="57.6">T</tspan><tspan x="69.48" y="57.6" xml:space="preserve"> technology platform</tspan></text><circle class="cls-1" cx="852.21" cy="123.51" r="2.5"/><circle class="cls-1" cx="852.21" cy="159.99" r="2.5"/></g><polygon id="next" class="cls-1" points="1155.21 288.2 1156.21 263.6 1156.21 238.99 1177.07 251.03 1198.53 263.08 1177.37 275.64 1155.21 288.2"/></g></g></svg> --}}
                    </div>
                </div>

            </article>
        </div>
    </section>
    <section id="our-service">
        <div class="bg-top"></div>
        <div class="bg-service">
            <section class="container pt-4">
                <article class="row align-items-start pt-3" id="our-services">
                    <div class="col-lg-4">
                        <h2 class="text-uppercase mb-3">{{isset($ourServiceData->title)?$ourServiceData->title : ''}}</h2>

                    </div>
                    <div class="col-lg-8">
                        <main class="text-blur mb-3">
                            {!! isset($ourServiceData->content)?$ourServiceData->content : '' !!}
                        </main>
                        <div class="cb-gradient mb-3"></div>
                    </div>
                </article>
            </section>
            <section class="mt-lg-5 pt-lg-5 w-100 pb-5">
                <div class="container">
                    <div class="row">
                        @foreach($ourServiceData->items as $key => $item)
                            <div class="col-md-4 service-s">
                                <article class="service-item hover-svg hover-margin">
                                    <div class="image text-center mb-4">
                                        <div id="image-{{$key}}" class="image-svg" data-src="{{isset($item['0'])?$item['0']:''}}"></div>
                                    </div>
                                    <div class="main-content text-service">
                                        <div class="svg-mobile">
                                            <img data-src="{{isset($item['0'])?$item['0']:''}}" class="lazy"/>
                                            <h3>
                                                {{isset($item['1'])?$item['1']:''}}
                                                <span class="arrow-down"></span>
                                            </h3>
                                        </div>
                                        <main class="text-service" style="-webkit-box-orient: vertical">
                                            {!! isset($item['2'])?nl2br($item['2']):'' !!}
                                        </main>
                                    </div>
                                </article>
                            </div>
                        @endforeach
                    </div>
                </div>
            </section>
        </div>
    </section>
    <section id="skill" class="pt-3">
    <div class="bg-top"></div>
        <div class="container pb-5">
            <article class="row pt-3" id="our-skill">
                <div class="col-lg-4">
                    <h2 class="text-uppercase mb-3">{{isset($ourDominanceData->title)?$ourDominanceData->title : ''}}</h2>
                    <div class="cb-gradient"></div>
                    <p class="my-4">{!! $ourDominanceData->content !!}</p>
                </div>
                <div class="col-lg-8">
                    <div class="left-border">
                        @foreach($ourDominanceData->items as $key => $item)
                            <div class="item mb-4">
                                <div class="d-flex item">
                                    <div class="line cb-gradient" data-value="{{isset($item[1])?$item[1]:''}}">
                                        <div></div>
                                    </div>
                                    <h3 class="bounce my-0" data-target="#content-{{$key}}">{{isset($item[0])?$item[0]:''}}</h3>
                                </div>
                            </div>
                        @endforeach
                        <div class="wrap-content">
                            <div class="wrap-content-relative">
                                @foreach($ourDominanceData->itemsDetail as $key => $item)
                                    <div class="content" id="content-{{$key}}" style="background-image: url('{{isset($ourDominanceData->items[$key][2])?$ourDominanceData->items[$key][2]:''}}')">
                                        <div class="top">
                                            <button class="close"></button>
                                        </div>
                                        <article>
                                            <div class="image d-flex flex-column justify-content-center">
                                            </div>
                                            <div class="text d-flex flex-column">
                                                <h4 class="text-left mb-4">{{isset($ourDominanceData->items[$key])?$ourDominanceData->items[$key][0]:''}}</h4>
                                                <main class="flex-grow-1 d-flex flex-column justify-content-center">
                                                    <div>
                                                        {!! $item[0] !!}
                                                    </div>
                                                </main>
                                            </div>
                                        </article>
                                    </div>
                                @endforeach

                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
    <section id="our-team1">
        <div class="container pt-3" id="our-team">
            <h2 class="text-center">{{isset($ourTeamData->title)?$ourTeamData->title : ''}}</h2>
            <div class="wrap-image">
                <img data-src="{{$ourTeamData->photo}}" class="lazy">
            </div>
        </div>
        <section class="container-fluid px-0">
            <div class="owl-carousel owl-theme owl-carousel-member" id="Our-team">
                @foreach($memberList as $key => $member)
                    <div class="item" data-number="{{$key}}">
                        <article class="width">
                            <div class="wrap-image">
                                <img data-src="{{$member->photo}}" height="100px" class="lazy">
                            </div>
                            <main class="detail">
                                <h4>{{$member->title}}</h4>
                                <div class="text-name">{{isset($member->attributes['position'])?$member->attributes['position']:''}}</div>
                            </main>
                        </article>
                    </div>
                @endforeach
            </div>
        </section>
        <section class="members-detail">
            <div class="owl-carousel owl-theme owl-carousel-member-detail" id="Our-member">
                @foreach($memberList as $key => $member)
                    <div class="container">
                        <article class="owl-slide-text item">
                            <main class="row owl-slide-animated owl-slide-subtitle">
                                <div class="relative">
                                    <img class="image lazy" data-src="{{isset($member->attributes['background-image-detail'])?$member->attributes['background-image-detail']:''}}">
                                    <div>
                                        <div>
                                            <div class="content-member">
                                                <div class="detail">
                                                    <div class="content-detail">
                                                        <div class="text-blur1 text-content" style="-webkit-box-orient: vertical">
                                                            {!! isset($member->attributes['detail'])?$member->attributes['detail']:'' !!}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                        </article>
                    </div>
                @endforeach
                </div>
            </div>
        </section>
    </section>

    <section id="portfolio1">
        <div class="content-section" style="padding-bottom: 100px">
            <section class="container">
                <article class="row align-items-end pt-3" id="portfolio">
                    <div class="col-lg-4">
                        <div class="d-flex">
                            <h2 class="text-uppercase mb-3">{{isset($ourPortfolioData->title)?$ourPortfolioData->title : ''}}</h2>
                            <div class="flex-grow-1"></div>
                            <a class="relative text-white d-md-none" href="{{url('portfolio')}}">
                                <span class="has-arrow-right" onclick="returnFirst(this)">{{ __('View-all') }}</span>
                            </a>
                        </div>
                        <div class="cb-gradient mb-3 d-lg-none"></div>
                    </div>
                    <div class="col-lg-8">
                        <main class="text-blur mb-3">
                            {{isset($ourPortfolioData->content)?$ourPortfolioData->content : ''}}
                        </main>
                        <div class="cb-gradient d-none d-lg-block"></div>
                    </div>
                </article>
            </section>
            <section class="container pt-4 pb-5 py-lg-5">
                <div class="row mb-4">
                    <div class="col-md-4">
                        <ul class="leftBtn">
                            @foreach($ourPortfolioItem as $key => $portfolio)
                                <li class="filterBtn {{$key == 0?'active':''}}" data-target="#portfolio-{{$key}}">
                                    <span>{{$portfolio->title}}</span>
                                </li>
                            @endforeach
                            <li class="d-md-block d-none">
                                <span class="show-all">
                                    <div class="border"></div>
                                    <a href="{{url('portfolio')}}">
                                        {{ __('All-Portfolio') }}
                                    </a>
                                </span>
                            </li>
                        </ul>

                    </div>
                    <div class="col-md-8 horver-portfolio">
                        <div class="cover">
                            <div class="wrap-items">
                                <div>
                                    @foreach($ourPortfolioItem as $key => $portfolio)
                                        <div class="wrap-content portfolio-item {{$key !== 0?'none':''}}" id="portfolio-{{$key}}">
                                            <div>
                                                @if(isset($portfolio->attributes['video']))
                                                    <div class="video-about" style="height:100%">
                                                        {{-- <iframe data-url="https://www.youtube.com/embed/{{get_id_from_youtube_url($portfolio->attributes['video'])}}" src="{{$key === 0?'https://www.youtube.com/embed/'.get_id_from_youtube_url($portfolio->attributes['video']):''}}" frameborder="0" allow="accelerometer; autoplay;showinfo=0 picture-in-picture"></iframe> --}}
                                                        <iframe
                                                        width="100%"
                                                        height="507px"
                                                        src="https://www.youtube.com/embed/{{get_id_from_youtube_url($portfolio->attributes['video'])}}"
                                                        srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/{{get_id_from_youtube_url($portfolio->attributes['video'])}}?autoplay=1><img src=https://img.youtube.com/vi/{{get_id_from_youtube_url($portfolio->attributes['video'])}}/hqdefault.jpg><span>▶</span></a>"
                                                        frameborder="0"
                                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                        allowfullscreen
                                                        ></iframe>
                                                    </div>
                                                @else
                                                    <img data-src="{{$portfolio->photo}}" class="lazy">
                                                @endif
                                                <p class="description-portfolio">{{$portfolio['description']}}</p>
                                                <a href="{{url('/portfolio/'.$portfolio->slug.'/'.$portfolio->id)}}">
                                                    <span class="has-arrow-right"><span>{{ __('View-more') }}</span> <span class="icon-row">&rarr;</span></span>
                                                </a>
                                            </div>
                                        </div>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="bg-bottom d-none d-lg-block"></div>
    </section>
    <section id="partner">
        <div class="container section-content">
            <h2 class="text-center mb-4">{{isset($ourPartnerData->title)?$ourPartnerData->title : ''}}</h2>
            <div class="px-lg-5">
                {{-- <div class="owl-carousel owl-theme owl-carousel-partner">
                    @foreach($partnerList as $item)
                        <div class="wrap-carousel-image px-4">
                            <img data-src="{{$item->photo}}" height="100px" class="lazy">
                        </div>
                    @endforeach
                </div> --}}
                <div class="owl-carousel owl-theme owl-carousel-partner">
                    @foreach($partnerList as $item)
                        <div class="wrap-carousel-image px-4">
                            <img src="{{$item->photo}}" height="100px">
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
    </section>
    <section id="blog1">
        <div class="bg-top d-none d-lg-block"></div>
        <div class="content-blog">
            <div class="container">
                <section class="d-flex py-5" id="blog">
                    <h2>{{isset($blogData->title)?$blogData->title : ''}}</h2>
                    <div class="flex-grow-1"></div>
                    <a href="{{url('blog')}}" class="blog-span-s">
                        <span class="has-arrow-right" style="color: white"><span> {{ __('View-more') }} </span> <span class="icon-row"> &rarr; </span></span>
                    </a>
                </section>
            </div>
        </div>
        <script>
            function returnFirst(x) {
            x.classList.toggle("change");
            }
        </script>
        <div class="content-blog">
            <div class="container">
                <section class="row wrap-blog">
                    @foreach($blogList as $key => $item)
                        <div class="{{$key==0?'col-md-4 mb-4 grid-item':($key==0?:'col-md-4 mb-4 grid-item')}}">
                            <article class="{{$key==0?'normal':($key==1?'normal':'normal')}}">
                                <div class="image">
                                    <div class="wrap-image">
                                        <a href="{{make_dynamic_post_route($item)}}">
                                            <img data-src="{{$item->photo}}" class="lazy zoom-image">
                                            @if(isset($item->attributes['video']))
                                                <span class="fa fa-youtube-play"></span>
                                            @endif
                                        </a>

                                    </div>
                                </div>
                                <div class="wrap-content d-flex flex-column justify-content-start">
                                    <div class="content">
                                        <div class="absolute d-flex flex-column justify-content-start">
                                        <a href="{{make_dynamic_post_route($item)}}">
                                            <h3>{{$item->title}}</h3>
                                        </a>
                                        <main class="ell-text ell-four" style="-webkit-box-orient: vertical">
                                            {{$item->description}}
                                        </main>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    @endforeach
                </section>

            </div>
        </div>
    </section>
@stop
