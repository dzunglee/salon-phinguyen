@include('partials.content-header')

<section class="content" id="content">

    @include('partials.content-alert')

    @yield('content')


</section>
<section data-script-scope>
    @stack('scripts')
</section>



