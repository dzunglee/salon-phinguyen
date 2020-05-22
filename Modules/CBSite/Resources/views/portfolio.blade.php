@extends('cbsite::layouts.main')

@section('content')
<section id="blog1" class="post">
    <div class="content-blog">
        <div class="container">
            <section class="d-flex py-5">
                <h1 class="text-white">{{ __('Portfolio') }}</h1>
                <h1 class="mobile">{{ __('Portfolio') }}</h1>
                <div class="flex-grow-1"></div>
            </section>
            <section class="list row"id="list-blog">
                @foreach($mainPost as $item)
                    <div class="col-lg-4 col-md-6 mb-4 grid-item">
                        <article class="vertical" id="vertical">
                            <div class="image">
                                <a href="{{url('/portfolio/'.$item->slug.'/'.$item->id)}}">
                                    <img src="{{$item->photo}}" width="650" class="zoom-image">
                                </a>
                            </div>
                            <div class="wrap-content d-flex flex-column">
                                <a href="{{url('/portfolio/'.$item->slug.'/'.$item->id)}}">
                                    <h3>{{$item->title}}</h3>
                                </a>
                                <div class="category"><i>{{isset($item->category->category_name)?$item->category->category_name:''}}</i></div>
                                <main class="ell-text ell-three" style="-webkit-box-orient: vertical">
                                    {{$item->description}}
                                </main>
                            </div>
                        </article>
                    </div>
                @endforeach
                <div class="col-1 grid-sizer"></div>
            </section>
                {{$mainPost->links()}}
        </div>
    </div>
</section>
@stop