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
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">

    {{-- Laravel Mix - CSS File --}}
    <link id="my-css" rel="stylesheet" href="{{ mix(sprintf('/imba/%s/css/my-css.css', $theme)) }}">

</head>
<body class="{{$theme == 'dark' ? 'dark' : 'light'}}">
<!-- Loading Screen -->
<div id="loader-wrapper">
    <h1 class="loader-logo uppercase">{{$site_title}}</h1>
    <div id="progress"></div>
    <h3 class="loader-text uppercase">@lang('loading')</h3>
</div>
@include('imba::includes.header')
<section id="...section">
    @yield('content')
</section>
@include('imba::includes.footer')

{{-- Laravel Mix - JS File --}}
<script>
  window.messages = {
    form_require: "@lang('form-require')",
    message_submitted: "@lang('message-submitted')",
    thank_for_subscribe: "@lang('thank-for-subscribe')",
  };
  window.theme = {
    dark: {
      css: "{{ mix(sprintf('/imba/%s/css/my-css.css', 'dark')) }}",
      js: "{{ mix(sprintf('/imba/%s/js/my-js.js', 'dark')) }}"
    },
    light: {
      css: "{{ mix(sprintf('/imba/%s/css/my-css.css', 'light')) }}",
      js: "{{ mix(sprintf('/imba/%s/js/my-js.js', 'light')) }}"
    }
  }
</script>
<script id="my-js" src="{{ mix(sprintf('/imba/%s/js/my-js.js', $theme)) }}"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB64kJJiSynOc9ZqkNMOyl94cvsw5Z2uno"></script>
{!! config('setting.fe_footer_scripts','') !!}
<script src="http://localhost:35729/livereload.js"></script>
</body>
</html>
