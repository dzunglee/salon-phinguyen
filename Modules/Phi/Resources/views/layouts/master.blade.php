<!DOCTYPE html>
<html lang="{{config('app.locale')}}">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1">
    <meta name="description" content="{!!$site_title.$site_description!!}">
    <meta name="keyword" content="{{config('setting.fe_site_keywords','')}}, {{$site_title}}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="base_url" content="{{ url('/') }}">
    <link rel="icon" href="{{config('setting.fe_fav','')}}" type="image/png">
    <title>{{$site_title}}</title>

    <!--Meta facebook-->
    <meta property="og:image" content="{{$site_image}}"/>
    <meta property="og:title" content="{{$site_title}}"/>
    <meta property="og:url" content="{{url()->current()}}"/>
    <meta property="og:description" content="{{$site_description}}"/>
    <meta property="og:type" content="website"/>
    <!--Meta facebook-->

    <!--Meta twitter-->
    <meta name="twitter:image" content="{{$site_image}}"/>
    <meta name="twitter:title" content="{{$site_title}}"/>
    <meta property="twitter:description" content="{{$site_description}}"/>
    <!--Meta twitter-->

    <link rel="canonical" href="{{url()->current()}}"/>

    {{-- Laravel Mix - CSS File --}}
    <link href='https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,200,300' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="{{asset('phi/css/master.css')}}">

</head>
<body>
@include('phi::includes.header')
<section id="section">
    @yield('content')
</section>
@include('phi::includes.footer')

{{-- Laravel Mix - JS File --}}
<script src="{{asset('phi/js/jquery.1.11.2.js')}}"></script>
<script src="{{asset('phi/js/bootstrap.js')}}"></script>
<script src="{{asset('phi/js/function.js')}}"></script>
<script src="{{asset('phi/js/bootstrap-datepicker.js')}}"></script>
<script src="{{asset('phi/js/parallax.js')}}"></script>
<script src="{{asset('phi/js/scorll.js')}}"></script>
<script src="{{asset('phi/js/jquery.easing.min.js')}}"></script>
<script src="{{asset('phi/js/slick.js')}}"></script>
<script src="{{asset('phi/js/menu.js')}}"></script>
<script src="{{asset('phi/js/ios-timer.js')}}"></script>
<script src="{{asset('phi/js/jquery.fencybox.js')}}"></script>
<script src="{{asset('phi/js/jquery.portfolio.js')}}"></script>
<script src="{{asset('phi/js/jquery.mousewheel-3.0.6.pack.js')}}"></script>
<script src="{{asset('phi/js/wow.js')}}"></script>
<script src="{{asset('phi/js/jquery.validate.js')}}"></script>
<!-- REVOLUTION JS FILES -->
<script src="{{asset('phi/js/revoluation/jquery.themepunch.tools.min.js')}}"></script>
<script src="{{asset('phi/js/revoluation/jquery.themepunch.revolution.min.js')}}"></script>
<!-- SLIDER REVOLUTION 5.0 EXTENSIONS
(Load Extensions only on Local File Systems !
The following part can be removed on Server for On Demand Loading) -->
<script src="{{asset('phi/js/revoluation/revolution.extension.layeranimation.min.js')}}"></script>
<script src="{{asset('phi/js/revoluation/revolution.extension.migration.min.js')}}"></script>
<script src="{{asset('phi/js/revoluation/revolution.extension.navigation.min.js')}}"></script>
<script src="{{asset('phi/js/revoluation/revolution.extension.parallax.min.js')}}"></script>
<script src="{{asset('phi/js/revoluation/revolution.extension.slideanims.min.js')}}"></script>
<script src="{{asset('phi/js/revoluation/revoluationfunction.js')}}"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB64kJJiSynOc9ZqkNMOyl94cvsw5Z2uno"></script>
{!! config('setting.fe_footer_scripts','') !!}
@if(config('app.env') == 'local')
    <script src="http://localhost:35729/livereload.js"></script>
@endif
</body>
</html>
