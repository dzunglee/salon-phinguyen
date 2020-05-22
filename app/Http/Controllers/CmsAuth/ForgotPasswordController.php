<?php

namespace App\Http\Controllers\CmsAuth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Support\Facades\Auth;
//Password Broker Facade
use Illuminate\Support\Facades\Password;

class ForgotPasswordController extends Controller
{

    protected $guard;
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
        $this->guard = config('w3cms.auth.guard');
        $this->passwords = config('w3cms.auth.passwords');
    }

    /**
     * Override "guard"
     *
     * @return mixed
     */
    protected function guard()
    {
        return Auth::guard($this->guard);
    }

    /**
     * Override broker that controls table for resetting password
     *
     * @return mixed
     */
    public function broker()
    {
        return Password::broker($this->passwords);
    }

}
