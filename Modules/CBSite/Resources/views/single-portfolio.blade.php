@extends('cbsite::layouts.main')

@section('content')
    <section id="post-detail" class="post">
        <div class="content-blog">
            <div class="container">
                <section class="d-flex py-5">
                    <h1 class="text-white">{{ __('Portfolio') }}</h1>
                    <div class="flex-grow-1"></div>
                </section>
                <section class="row new-detail">
                    <div class="col-md-12 grid-item">
                        <article class="vertical">
                            @if($portfolioSection)
                                <div class="row">
                                    <div class="image d-none d-lg-block">
                                        <img src="{{$portfolioSection->photo}}">
                                    </div>
                                    <div class="image-mobile d-lg-none">
                                        <img src="{{isset($portfolioSection->attributes[0])?$portfolioSection->attributes[0]['content']:''}}">
                                    </div>
                                </div>
                            @endif
                            <div class="px-lg-5 pt-4">
                                @if(isset($item->attributes['video']))
                                    <div class="wrap-image mb-3">
                                        <iframe src="https://www.youtube.com/embed/{{get_id_from_youtube_url($item->attributes['video'])}}" frameborder="0" allow="accelerometer; autoplay;showinfo=0 picture-in-picture"></iframe>
                                    </div>
                                @endif
                                <h3 class="mb-5 mt-3">{{$item->title}}</h3>
                                <main class="pb-5">
                                    {!! $item->content !!}
                                </main>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    </section>
@stop