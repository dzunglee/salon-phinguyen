@extends('cbsite::layouts.main')

@section('content')
    <section id="post-detail" class="post">
        <div class="content-blog">
            <div class="container">
                <section class="d-flex py-5">
                    <h1 class="text-white">{{ __('Blog') }}</h1>
                    <div class="flex-grow-1"></div>
                </section>
                <section class="row new-detail">
                    <div class="col-md-12 grid-item">
                        <article class="vertical">
                            <div class="row">
                                <div class="image">

                                    @if(!empty($itemBlog->attributes['cover-image']))
                                        <img src="{{url('/').$itemBlog->attributes['cover-image']}}">
                                    @else
                                        <img src="/storage/default/blog02.jpg">
                                    @endif
                                </div>
                            </div>
                            <div class="px-lg-5 pt-4">
                                @if(isset($itemBlog->attributes['video']))
                                    <div class="wrap-image mb-3">
                                        <iframe src="https://www.youtube.com/embed/{{get_id_from_youtube_url($itemBlog->attributes['video'])}}" frameborder="0" allow="accelerometer; autoplay;showinfo=0 picture-in-picture"></iframe>
                                    </div>
                                @endif
                                <h3 class="mb-5 mt-3">{{$itemBlog->title}}</h3>
                                <main class="pb-5">
                                    @if(!empty($itemBlog->photo))
                                        <img src="{{$itemBlog->photo}}">
                                        <br><br>
                                    @endif
                                    {!! $itemBlog->content !!}
                                </main>
                            </div>
                        </article>
                    </div>
                </section>
            </div>
        </div>

        <div class="mt-5">
            <div class="container ">
                <h3 class="mb-2 text-white">{{ __('Recent-post') }}</h3>
                <div class="list-recent">
                    <div class="owl-carousel owl-theme owl-carousel-recent">
                        @foreach($recentPost as $item)
                            <div class="mb-4 item pt-0">
                                <article class="vertical" id="vertical">
                                    <div class="image mb-2 row ">
                                        <a href="{{make_dynamic_post_route($item)}}">
                                            <img src="{{$item->photo}}" width="650" class="img-recent-post">
                                            @if(isset($item->attributes['video']))
                                                <span class="fa fa-youtube-play"></span>
                                            @endif
                                        </a>
                                    </div>
                                    <div class="wrap-content d-flex flex-column" style="height: 160px;">
                                        <a href="{{make_dynamic_post_route($item)}}">
                                            <h3 class="title-apple">{{$item->title}}</h3>
                                        </a>
                                        <main class="main-recentPost">
                                            {{$item->description}}
                                        </main>
                                    </div>
                                </article>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>
@stop