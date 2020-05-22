<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>AdminLTE 2 | Dashboard</title>
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="admin-url" content="{{ admin_url('/') }}">

    <link rel="stylesheet" href="{{ asset('css/app.plugins.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.core.css') }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <link rel="stylesheet" href="{{ asset('css/custom.admin.css') }}">
    <link rel="stylesheet" href="{{ asset('css/filemanager.css') }}">

    @stack('css')
    @yield('css')
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- Google Font -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700">
    <script src="{{ asset('js/app.core.js') }}"></script>
</head>
<body class="@yield('bodyClass')">

<div class="wrapper">

    @include('partials.header')

    @include('partials.sidebar')

    <div class="content-wrapper @yield('pageClass')" id="pjax-container">
        @include('partials.content')
    </div>

    {{-- Footer --}}
    @include('partials.footer')

    {{--Control Sidebar --}}
    @include('partials.controlbar')

</div>
<!-- ./wrapper -->
<script src="{{ asset('js/app.plugins.js') }}"></script>
<script src="{{ asset('summernote/lang/en-us.js')}}"></script>
<script src="{{ asset('summernote/summernote-image-attributes.js')}}"></script>
<script src="{{ asset('js/app.js') }}"></script>



</body>
</html>
