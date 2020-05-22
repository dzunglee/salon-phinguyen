@extends('auth.main_content')

@section('content')
    <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign Up</label>
                    <form method="POST" action="{{ route('cms.register') }}">
                        @csrf
                        <div class="login-form"><br>
                            <div class="form-group group ">
                                <label for="name" class="label">{{ __('Name') }}</label>

                                <div class="">
                                    <input id="name" type="text" class="input" name="name" value="{{ old('name') }}" required autofocus>

                                    @if ($errors->has('name'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('name') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group group ">
                                <label for="email" class="label">{{ __('E-Mail Address') }}</label>

                                <div class="">
                                    <input id="email" type="email" class="input" name="email" value="{{ old('email') }}" required>

                                    @if ($errors->has('email'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('email') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group group ">
                                <label for="password" class="label">{{ __('Password') }}</label>

                                <div class="">
                                    <input id="password" type="password" class="input" name="password" required>

                                    @if ($errors->has('password'))
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $errors->first('password') }}</strong>
                                        </span>
                                    @endif
                                </div>
                            </div>

                            <div class="form-group group ">
                                <label for="password-confirm" class="label">{{ __('Confirm Password') }}</label>

                                <div class="">
                                    <input id="password-confirm" type="password" class="input" name="password_confirmation" required>
                                </div>
                            </div>
                            <br>
                            <div class="group">
                                <button id="btn-submit" class="button">
                                    {{ __('Register') }}
                                    <i class="fa fa-spinner fa-spin"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                    {{--<div class="more-fearture">or <a id="txt-redirect" href="{{route('cms.login.show')}}">SIGN IN</a></div>--}}

</div>
@endsection
