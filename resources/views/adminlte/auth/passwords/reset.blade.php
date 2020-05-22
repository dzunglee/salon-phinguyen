@extends('auth.main_content')

@section('content')
    <div class="login-html">
        <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">{{ __('Reset Password') }}</label>
        <form method="POST" action="{{ route('cms.password.update') }}">
            @csrf
            <div class="login-form"><br>
                <input type="hidden" name="token" value="{{ $token }}">

                <div class="form-group group ">
                    <label for="email" class="label">{{ __('E-Mail Address') }}</label>

                    <div class="">
                        <input id="email" type="email" class="input" name="email" value="{{ $email ?? old('email') }}" required>

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
                        {{ __('Reset Password') }}
                        <i class="fa fa-spinner fa-spin"></i>
                    </button>
                </div>
            </div>
        </form>
        <div class="more-fearture">or <a id="txt-redirect" href="{{route('cms.login.show')}}">SIGN IN</a></div>
    </div>

@endsection
