@extends('auth.main_content')
@section('content')
    <style rel="stylesheet">

        /*.hr {*/
            /*height: 2px;*/
            /*margin: 60px 0 50px 0;*/
            /*background: rgba(255, 255, 255, .2);*/
        /*}*/

        /*.foot-lnk {*/
            /*text-align: center;*/
        /*}*/

        #txt-forgetpass{
            text-align: right;
        }
    </style>
    <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
        <form action="{{route('cms.login')}}" method="POST">
            {{--Error if exist--}}
            @if ($errors->any())
                <div class="alert alert-danger" role="alert">
                    @foreach ($errors->all() as $error)
                        {{ $error }}
                    @endforeach
                </div>
            @endif

            <input type="hidden" name="_token" id="csrf-token" value="{{ Session::token() }}"/>
            <div class="login-form"><br>
                <div class="sign-in-htm">
                    <div class="group">
                        <label for="user" class="label">Username</label>
                        <input id="user" type="text" class="input" name="email">
                    </div>
                    <div class="group">
                        <label for="pass" class="label">Password</label>
                        <input id="pass" name="password" type="password" class="input" data-type="password">
                    </div>
                    <div class="group row">
                        <div class="col-xs-6">
                            <input id="check" type="checkbox" class="check" name="remember" checked>
                            <label for="check"><span class="icon"></span> Keep me signed in</label>
                        </div>
                        <div class="col-xs-6">
                            <a id="txt-forgetpass" href="{{route('cms.password.request')}}">Forgot your password?</a>
                        </div>


                    </div>
                    <br>
                    <div class="group">
                        <button id="btn-submit" class="button">
                            Sign In
                            <i class="fa fa-spinner fa-spin"></i>
                        </button>
                    </div>
                    {{--<div class="hr"></div>--}}

                </div>
            </div>
            <div>

            {{--</div><a id="txt-forgetpass" href="{{route('cms.register')}}">SIGN UP</a>--}}
        </form>
    </div>
    <script>

        document.getElementById("btn-submit").onclick = function() {
            // event.preventDefault();
            this.classList.add("disabled");
        };

    </script>
@stop