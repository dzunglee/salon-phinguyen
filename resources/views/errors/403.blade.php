@extends('layouts.adminlte')
@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <h1 class="text-center text-danger">Forbidden</h1>
    <div class="text-center">
        {{--<img style="max-width: 100%" src="{{asset('img/403.jpg')}}">--}}
    </div><br>
    <div class="text-center"><a href="{{url()->previous()}}" class="btn btn-success">Back</a></div>
@endsection