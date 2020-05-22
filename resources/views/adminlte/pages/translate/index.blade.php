@extends('layouts.adminlte')

@section('bodyClass', 'hold-transition skin-blue sidebar-aside')

@section('content')
    <h1 style="margin: 0rem 0rem 1rem 0rem;
    font-size: 24px;">
        Translate
        <small></small>
    </h1>
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-header">
                    <div class="pull-right" style="display:flex; 
                    flex-direction: row-reverse;>
                            <div class=" text-right
                    ">
                    @include('adminlte.partials.lang')
                </div>
                <form data-method="put" action="{{route('translate.update')}}" method="post">
                    {{ csrf_field() }}
                    {{ method_field('PUT') }}
                    <div class="form-group">
                        @foreach ($data as $key => $value)
                            <div class="col-sm-8 mb-3">
                                <div class="input-group" style="display:flex; flex-description: row">
                                    <label for="username" class="col-sm-4">{{$value}}</label>
                                    <input type="text" name="translateChange[{{$key}}]"
                                           value="{{ isset($dataVi[$key])?$dataVi[$key]:'' }}" class="form-control"
                                           required>
                                </div>
                            </div>
                        @endforeach
                        <div class="col-sm-8 mb-3">
                            <input type="submit" class="btn btn-primary" value="Change" style="float:right">
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>

@endsection

