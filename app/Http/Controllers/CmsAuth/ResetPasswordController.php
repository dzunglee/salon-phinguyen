<?php

namespace App\Http\Controllers\CmsAuth;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Support\Facades\Password;

class ResetPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset requests
    | and uses a simple trait to include this behavior. You're free to
    | explore this trait and override any methods you wish to tweak.
    |
    */

    use ResetsPasswords;

    /**
     * Where to redirect users after resetting their password.
     *
     * @var string
     */
    protected $redirectTo = '';

    protected $guard;

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
        $this->redirectTo = config('w3cms.prefix');
    }

    //Show form to seller where they can reset password
    public function showResetForm(Request $request, $token = null)
    {
        return view('auth.passwords.reset')->with(
            ['token' => $token, 'email' => $request->email]
        );
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

    /**
     * Override "guard"
     *
     * @return mixed
     */
    protected function guard()
    {
        return Auth::guard($this->guard);
    }
}
