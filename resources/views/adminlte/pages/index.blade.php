@extends('layouts.adminlte')

@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')

<div class="row">

    <div class="col-lg-4 col-xs-4">
        <div class="small-box bg-aqua">
            <div class="inner">
                <h3>{{$statistical['user']}}</h3>
                <p>Users</p>
            </div>
            <div class="icon">
                <i class="fa fa-users"></i>
            </div>
            <a href="{{route('users.index')}}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
        </div>
    </div>

    <div class="col-lg-4 col-xs-4">
        <!-- small box -->
        <div class="small-box bg-green">
            <div class="inner">
                <h3>{{$statistical['post']}}<span class="small text-white">/{{$statistical['postUser']}}</span></h3>
                <p>Posts</p>
            </div>
            <div class="icon">
                <i class="fa fa-edit"></i>
            </div>
            <a href="{{route('posts.index')}}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
        </div>
    </div>

    <div class="col-lg-4 col-xs-4">
        <div class="small-box bg-yellow">
            <div class="inner">
                <h3>{{$statistical['page']}}</h3>
                <p>Page</p>
            </div>
            <div class="icon">
                <i class="fa fa-clone"></i>
            </div>
            <a href="{{route('page.index')}}" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
        </div>
    </div>


</div>

@endsection

