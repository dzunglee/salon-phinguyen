@extends('imba::layouts.master')

@section('content')
    <!-- /// HERO SECTION /// -->
    <div id="hero-section" class="small-margin">
        <div class="row hero-unit">
            <div class="col-xl-5 col-md-12">
                <div class="hero-caption"><!-- Main Tagline -->
                    <h1 class="uppercase">{{$banner->attributes['title-1']}}<br>
                        <span id="moving-text" class="colored">
                            @foreach($banner->items as $item)
                                @if ($loop->last)
                                    {{$item[0]}}
                                @else
                                    {{$item[0]}},
                                @endif
                            @endforeach
                        </span>
                        <br>
                        {{$banner->attributes['title-2']}}
                        <br>
                    </h1>
                </div>
            </div>
            <div class="col-xl-7 col-md-12">
                <div id="hero-slider" class="carousel slide carousel-fade" data-ride="carousel">
                    <div class="carousel-inner">

                        @foreach($banner->items as $item)
                            @if ($loop->first)
                                <div class="carousel-item active">
                                    <img src="{{$item[1]}}" class="d-block w-100" alt="img">
                                </div>
                            @else
                                <div class="carousel-item">
                                    <img src="{{$item[1]}}" class="d-block w-100" alt="img">
                                </div>
                            @endif
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div><!-- Hero Section End -->
    <!-- /// Main Container /// -->
    <div class="container">
        <!-- /// ABOUT SECTION /// -->
        <div id="about" class="large-margin">
            <a href="about"></a><!-- Nav Anchor -->
            <div class="row heading tiny-margin">
                <div class="col-md-auto">
                    <h1 class="animation-element slide-down uppercase">
                        {{isset($about->attributes['title-1'])?$about->attributes['title-1']:''}}
                        <span class="colored">{{isset($about->attributes['title-2'])?$about->attributes['title-2']:''}}</span>
                    </h1>
                </div>
                <div class="col">
                    <hr class="animation-element extend">
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <p class="small-margin">
                        {!! isset($about->attributes['description'])?$about->attributes['description']:'' !!}
                    </p>
                    <img width="200px" id="awards"
                         src="{{isset($about->attributes['image-1'])?$about->attributes['image-1']:''}}"
                         class="img-fluid" alt="awads">
                </div>
                <div class="col-md-6 d-flex align-items-end justify-content-end">
                    <img width="250px" id="support-image"
                         src="{{isset($about->attributes['image-2'])?$about->attributes['image-2']:''}}"
                         data-src="{{isset($about->attributes['image-2'])?$about->attributes['image-2']:''}}"
                         class="img-fluid b-lazy" alt="digital collage">
                </div>
            </div>
        </div>
        <!-- /// GAMES SECTION /// -->
        <div id="games" class="large-margin">
            <a href="games"></a><!-- Nav Anchor -->
            <div class="row heading tiny-margin">
                <div class="col-md-auto">
                    <h1 class="animation-element slide-down uppercase">
                        {{isset($ourGame->attributes['title-1'])?$ourGame->attributes['title-1']:''}}
                        <span class="colored">{{isset($ourGame->attributes['title-2'])?$ourGame->attributes['title-2']:''}}</span>
                    </h1>
                </div>
                <div class="col">
                    <hr class="animation-element extend">
                </div>
            </div>
            <div class="row ">
                <div class="col-md-11 small-margin">
                    <p>
                        {!! isset($ourGame->attributes['description'])?$ourGame->attributes['description']:'' !!}
                    </p>
                </div>
                <div class="col-md-12">
                    <ul class="game-tags">
                        <li><a href="#" data-filter="*">ALL</a></li>
                        @foreach($categories as $item)
                            <li><a href="#" data-filter=".{{$item->slug}}"
                                   class="uppercase">{{$item->category_name}}</a></li>
                        @endforeach
                    </ul>
                </div>
            </div>
            <div class="games-portfolio ">
                @foreach($games as $item)
                    <div class="row game-card {{$item->class}} new">
                        <div class="col-lg-12 col-xl-5 game-card-left">
                            @if(!isset($item->attributes['youtube-video-id']) || empty($item->attributes['youtube-video-id']))
                                <a href="{{$item->photo}}" data-lightbox="screenshots_aurora">
                                    <div class="overlay">
                                        <i class="fa fa-picture-o fa-3x"></i>
                                    </div>
                                    <picture>
                                        <source media="(min-width: 1200px)" srcset="{{$item->photo}}">
                                        <source media="(min-width: 768px)" srcset="{{$item->photo}}">
                                        <img src="{{asset('imba/light/images/placeholder.jpg')}}"
                                             data-src="{{asset('imba/light/images/placeholder.jpg')}}"
                                             class="img-fluid b-lazy"
                                             alt="aurora image">
                                    </picture>
                                </a>
                            @else
                                <a href="#" class="js-video-button"
                                   data-video-id='{{isset($item->attributes['youtube-video-id'])?$item->attributes['youtube-video-id']:''}}'
                                   data-channel="youtube">
                                    <!-- Video link goes here -->
                                    <div class="overlay">
                                        <i class="fa fa-play fa-3x"></i>
                                    </div>
                                    <img src="{{$item->photo}}" data-src="{{$item->photo}}"
                                         class="img-fluid b-lazy"
                                         alt="video thumbnail"> <!-- Video Thumbnail Img -->
                                </a>
                            @endif
                        </div>
                        <div class="col-lg-12 col-xl-7 game-card-right">
                            <h2 class="short-hr-left">{{$item->title}}</h2>
                            <p class="tags"><span class="subtle">Horror Adventure | Mobile</span></p>
                            <p class="game-description">{{$item->description}}
                                <span class="expand colored strong" data-toggle="modal"
                                      data-target="#game{{$item->id}}">Read More</span>
                            </p>
                            @if(isset($item->attributes['android-link']) && !empty($item->attributes['android-link']))
                                <a target="_blank" href="{{$item->attributes['android-link']}}" class="button-store">
                                    <i class="fa fa-android fa-2x"></i>
                                    <p>Available on<br><span class="strong">Google Play</span></p>
                                </a>
                            @endif
                            @if(isset($item->attributes['ios-link']) && !empty($item->attributes['ios-link']))
                                <a target="_blank" href="{{$item->attributes['ios-link']}}" class="button-store">
                                    <i class="fa fa-apple fa-2x"></i>
                                    <p>Available on<br><span class="strong">Apple Store</span></p>
                                </a>
                            @endif
                            @if(isset($item->attributes['star']) && !empty($item->attributes['star']))
                                <div class="rating">
                                    <p class="strong">{{$item->attributes['star']}}</p>
                                    <ul>
                                        @for($i = 0; $i < round((int)$item->attributes['star']); $i++)
                                            <li><i class="fa fa-star colored"></i></li>
                                        @endfor
                                        @for($i = 0; $i< (5 - round((int)$item->attributes['star'])); $i++)
                                            <li><i class="fa fa-star-o"></i></li>
                                        @endfor
                                    </ul>
                                </div>
                            @endif
                        </div>
                        <!-- Modal -->
                        <div class="modal fade game-modal" id="game{{$item->id}}" tabindex="-1" role="dialog"
                             aria-labelledby="bedlam"
                             aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title" id="bedlam">{{$item->title}}</h1>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        {!! $item->content !!}
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="button secondary" data-dismiss="modal">Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
        <!-- /// TEAM SECTION /// -->
        <div id="team" class="large-margin">
            <a href="team"></a><!-- Nav Anchor -->
            <div class="row heading tiny-margin">
                <div class="col-md-auto">
                    <h1 class="animation-element slide-down uppercase">
                        {{$theTeam->attributes['title-1']}}
                        <span class="colored">{{$theTeam->attributes['title-2']}}</span>
                    </h1>
                </div>
                <div class="col">
                    <hr class="animation-element extend">
                </div>
            </div>
            <div class="row medium-margin">
                <div class="col-md-11 tiny-margin">
                    <p>
                        {{$theTeam->attributes['description']}}
                    </p>
                </div>
                <div id="full-row" class="row text-center">
                    @foreach($teams as $item)
                        <div class="col-md-3 team-card">
                            <figure>
                                <img src="{{$item->photo}}" data-src="{{$item->photo}}"
                                     class="img-fluid b-lazy"
                                     alt="teammember">
                            </figure>
                            <p class="team-name">{{$item->title}}</p>
                            <p class="subtle">{{$item->description}}</p>
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="row tiny-margin">
                <div class="col-md-auto">
                    <h1 class="animation-element slide-down uppercase">
                        {{$ourStudio->attributes['title-1']}}
                        <span class="colored">{{$ourStudio->attributes['title-2']}}</span>
                    </h1>
                </div>
                <div class="col">
                    <hr class="animation-element extend">
                </div>
            </div>
            <div class="grid-gallery">
                <div class="row">
                    <div class="col-md-12 tiny-margin">
                        <p>
                            {{$ourStudio->attributes['description'] ?? false}}
                        </p>
                    </div>
                    @if(isset($ourStudio->attributes['youtube-video-id-studio']))
                        <div class="col-md-12 tiny-margin mb-5">
                            <a href="#" class="js-video-button"
                               data-video-id='{{isset($ourStudio->attributes['youtube-video-id-studio'])?$ourStudio->attributes['youtube-video-id-studio']:''}}'
                               data-channel="youtube">
                                <div class="overlay border-left-none">
                                    <i class="fa fa-play fa-3x"></i>
                                </div>
                                <img src="{{$ourStudio->attributes['photo-video-studio'] ?? 'http://i3.ytimg.com/vi/'.$ourStudio->attributes['youtube-video-id-studio'].'/maxresdefault.jpg'}}"
                                     data-src="{{$ourStudio->attributes['photo-video-studio'] ?? 'http://i3.ytimg.com/vi/'.$ourStudio->attributes['youtube-video-id-studio'].'/maxresdefault.jpg'}}"
                                     class="img-fluid b-lazy img-photo-studio"
                                     alt="video thumbnail">
                            </a>
                        </div>
                    @elseif(!isset($ourStudio->attributes['youtube-video-id-studio']) && isset($ourStudio->attributes['photo-video-studio']))
                        <div class="col-md-12 tiny-margin mb-5">
                            <a href="{{$ourStudio->attributes['photo-video-studio']}}"
                               data-lightbox="screenshots_studio">
                                <div class="overlay border-left-none">
                                    <i class="fa fa-picture-o fa-3x"></i>
                                </div>
                                <picture>
                                    <source media="(min-width: 1200px)"
                                            srcset="{{$ourStudio->attributes['photo-video-studio']}}">
                                    <source media="(min-width: 768px)"
                                            srcset="{{$ourStudio->attributes['photo-video-studio']}}">
                                    <img src="{{asset('imba/light/images/placeholder.jpg')}}"
                                         data-src="{{asset('imba/light/images/placeholder.jpg')}}"
                                         class="img-fluid b-lazy"
                                         alt="aurora image img-photo-studio">
                                </picture>
                            </a>
                        </div>
                    @endif
                    @foreach($ourStudio->items as $item)
                        @if(isset($item[0]))
                            <div class="col-md-4 gallery-item mb-1">
                                <a href="{{$item[0]}}" data-lightbox="studio_gallery">
                                    <div class="overlay gallery">
                                        <i class="fa fa-picture-o fa-3x"></i>
                                    </div>
                                    <img src="{{$item[0]}}" data-src="{{$item[0]}}"
                                         class="img-fluid b-lazy"
                                         alt="Studio image">
                                </a>
                            </div>
                        @endif
                    @endforeach
                </div>
            </div>
        </div>
        <!-- /// CAREERS SECTION /// -->
        <div id="careers" class='large-margin'>
            <a href="careers"></a><!-- Nav Anchor -->
            <div class="row heading tiny-margin">
                <div class="col-md-auto">
                    <h1 class="animation-element slide-down uppercase">
                        {{$jobOpenings->attributes['title-1']}}
                        <span class="colored">{{$jobOpenings->attributes['title-2']}}</span>
                    </h1>
                </div>
                <div class="col">
                    <hr class="animation-element extend">
                </div>
            </div>
            <div class="row medium-margin">
                <div class="col-md-11">
                    <p>
                        {{$jobOpenings->attributes['description']}}
                    </p>
                </div>
                @foreach($jobs as $key => $item)
                    <div class="col-md-4">
                        <div class="job-card">
                            <h3 class="colored">{{$item->title}}</h3>
                            <p>{{$item->description}}</p>
                            <button class="button" data-toggle="modal" data-target="#modal{{$key}}">@lang('view-detail')
                            </button>
                        </div>
                        <!-- Modal -->
                        <div class="modal fade" id="modal{{$key}}" tabindex="-1" role="dialog"
                             aria-labelledby="lead-programmer"
                             aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h2 class="modal-title colored" id="lead-programmer">{{$item->title}}</h2>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        {!! $item->content !!}
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="button secondary" data-dismiss="modal">
                                            @lang('close')
                                        </button>
                                        <a href="mailto:{{config('setting.email')}}" class="button">@lang('apply')</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
        <!-- /// CONTACT SECTION /// -->
        <div id="contact" class="large-margin">
            <a href="contact"></a><!-- Nav Anchor -->
            <div class="row heading tiny-margin">
                <div class="col-md-auto">
                    <h1 class="animation-element slide-down uppercase">
                        {{$getInTouch->attributes['title-1']}}
                        <span class="colored">{{$getInTouch->attributes['title-2']}}</span>
                    </h1>
                </div>
                <div class="col">
                    <hr class="animation-element extend">
                </div>
            </div>
            <div class="">
                <div class="row small-margin">
                    <div class="col-md-11">
                        <p>
                            {{$getInTouch->attributes['description']}}
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 d-flex flex-column">
                        <h2 class="short-hr-left uppercase">@lang('leave-us-a-message')</h2>
                        <form id="contactForm" data-toggle="validator" action="{{route('contact')}}"
                              class="flex-grow-1">
                            {{csrf_field()}}
                            <div class="form-group">
                                <!-- Name Field -->
                                <input type="text" id="name" placeholder="@lang('name')*" required size="35"
                                       data-error="@lang('message') @lang('is-required')" name="name">
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <!-- Email Field -->
                                <input type="email" id="email" placeholder="@lang('email')*" required size="35"
                                       data-error="@lang('message') @lang('is-required')" name="email">
                                <div class="help-block with-errors"></div>
                            </div>
                            <div class="form-group">
                                <!-- Message Field -->
                                <textarea id="message" name="message" placeholder="@lang('message')*" required
                                          data-error="@lang('message') @lang('can-not-be-empty')"
                                          maxlength="999"></textarea>
                                <div class="help-block with-errors"></div>
                                <!-- Submit Button -->
                                <button type="submit" class="button uppercase">@lang('send-message')</button>
                                <!-- Success Message -->
                                <div id="msgSubmit" class="text-center hidden"></div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <h2 class="short-hr-left uppercase">@lang('our-details')</h2>
                        <div id="contact-info">
                            <ul>
                                <li><i class="fa fa-phone"></i>
                                    <p>@lang('phone'): <span class="colored"><a
                                                    href="tel:{{config('setting.phone')}}">{{config('setting.phone')}}</a></span>
                                    </p>
                                </li>
                                <li><i class="fa fa-envelope"></i>
                                    <p>@lang('email'): <span class="colored"><a
                                                    href="mailto:{{config('setting.email')}}">{{config('setting.email')}}</a></span>
                                    </p></li>
                                <li><i class="fa fa-globe"></i>
                                    <p>@lang('website'):
                                        <span class="colored">
                                            <a href="http://{{config('setting.website')}}"
                                               target="_blank">{{config('setting.website')}}</a>
                                        </span>
                                    </p></li>
                                <li><i class="fa fa-map-marker"></i>
                                    <p>@lang('address'): <span class="colored">{{config('setting.address')}}</span>
                                    </p></li>
                            </ul>
                        </div>
                        <!-- Google Map -->
                        <div class="gg-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.180634840234!2d106.67343995038563!3d10.797473261719611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752929dd2103c5%3A0x13bdfd0b773a1d6c!2zMjA3IE5ndXnhu4VuIFRy4buNbmcgVHV54buDbiwgUGjGsOG7nW5nIDgsIFBow7ogTmh14bqtbiwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1590648071599!5m2!1svi!2s"
                                    width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""
                                    aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- Main Container End -->
@endsection
