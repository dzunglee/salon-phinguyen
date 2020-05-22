<?php

namespace App\Http\Controllers\CmsAuth;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;


class LoginController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo;
    protected $guard;

    public function __construct()
    {
        $this->redirectTo = config('w3cms.prefix');
        $this->guard = config('w3cms.auth.guard');
    }

    public function showLoginForm()
    {
        if (!Auth::guard($this->guard)->check()) {
            return view('auth.login');
        } else {
            return redirect($this->redirectTo);
        }
    }

    protected function guard()
    {
        return Auth::guard($this->guard);
    }

    protected function loggedOut(Request $request)
    {
        return redirect($this->redirectTo);
    }

    public function login(Request $request)
    {
        $this->validateLogin($request);

        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        if ($this->attemptLogin($request)) {
            return $this->sendLoginResponse($request);
        }
        $this->incrementLoginAttempts($request);

//        return $this->sendFailedLoginResponse($request);
        return back()->withErrors('The username or password is incorrect');;
    }
}


