<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport"  content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1">
    <meta name="description" content="{!!$site_title.$site_description!!}">
    <meta name="keyword" content="{{setting('fe_site_keywords','')}}, {{$site_title}}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="base_url" content="{{ url('/') }}">
    <link rel="icon" href="{{setting('fe_fav','')}}" type="image/png">
    <title>{{$site_title}}</title>

    <!--Meta facebook-->
    <meta property="og:image" content="{{$site_image}}" />
    <meta property="og:title" content="{{$site_title}}" />
    <meta property="og:url" content="{{url()->current()}}" />
    <meta property="og:description" content="{{$site_description}}" />
    <meta property="og:type" content="website" />
    <!--Meta facebook-->

    <!--Meta twitter-->
    <meta name="twitter:image" content="{{$site_image}}" />
    <meta name="twitter:title" content="{{$site_title}}" />
    <meta property="twitter:description" content="{{$site_description}}" />
    <!--Meta twitter-->

    <link rel="canonical" href="{{url()->current()}}" />
    <link rel="stylesheet" href="{{asset('modules/cb_site/css/plugin.min.css')}}">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&amp;subset=vietnamese&display=fallback" rel="stylesheet">
    <link rel="stylesheet" href="{{asset('modules/cb_site/css/app.min.css')}}">

</head>
<body>
@include('cbsite::includes.header')

@yield('content')

@include('cbsite::includes.footer')

</body>
    <script src="{{asset('modules/cb_site/js/core.min.js')}}"></script>
    <script src="{{asset('modules/cb_site/js/plugin.min.js')}}" defer></script>
    <script src="{{asset('modules/cb_site/js/app.min.js')}}" defer></script>
    @include('cbsite::includes.scripts')
</html>