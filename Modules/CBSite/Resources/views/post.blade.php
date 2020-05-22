@extends('cbsite::layouts.main')

@section('content')
<section id="blog1" class="post">
    <div class="content-blog">
        <div class="container">
            <section class="d-flex py-5">
                <h1 class="text-white">{{ __('Blog') }}</h1>
                <h1 class="mobile">{{ __('Blog') }}</h1>
                <div class="flex-grow-1"></div>
            </section>
            <section class="list row"id="list-blog">
                @foreach($mainPost as $item)
                    <div class="col-lg-4 col-md-6 mb-4 grid-item">
                        <article class="vertical" id="vertical">
                            <div class="image">
                                <a href="{{make_dynamic_post_route($item)}}">
                                    <img src="{{$item->photo}}" width="650" class="zoom-image">
                                </a>
                            </div>
                            <div class="wrap-content d-flex flex-column">
                                <a href="{{make_dynamic_post_route($item)}}">
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
            <!-- <ul class="pagination">
                <li><a href="#" class="prev"><i class="fa fa-chevron-left"></i></a>
                </li>
                <li><a href="#"  class="active">1</a></li>
                <li> <a href="#">2</a></li>
                <li> <a href="#">3</a></li>
                <li> <a href="#">4</a></li>
                <li>
                    <a href="#" class="next"><i class="fa fa-chevron-right"></i></a>
                </li>
            </ul>    -->
        </div>
    </div>
</section>
@stop