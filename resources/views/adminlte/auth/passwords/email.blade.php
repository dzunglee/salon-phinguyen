@extends('adminlte.auth.main_content')

@section('content')
<div class="login-html">
    <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">{{ __('Reset Password') }}</label>
    @if (session('status'))
        <div class="alert alert-success" role="alert">
            {{ session('status') }}
        </div>
    @endif

    <form method="POST" action="{{ route('cms.password.email') }}">
        @csrf
        <div class="login-form"><br>

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
            <br/>
            <div class="group">
                <button id="btn-submit" class="button">
                    {{ __('Send Password Reset Link') }}
                    <i class="fa fa-spinner fa-spin"></i>
                </button>
            </div>
        </div>
    </form>
    <div class="more-fearture">or <a id="txt-redirect" href="{{route('cms.login.show')}}">SIGN IN</a></div>
</div>
@endsection
