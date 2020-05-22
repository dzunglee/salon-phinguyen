<?php

namespace App\Http\Middleware;

use App\Classes\ActivityLogs;
use App\Http\Controllers\AdminActivityController;
use Closure;
use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\LogController;

class AdminActivityMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = '')
    {
        $response = $next($request);
        if(!$guard){
            $guard = config('w3cms.auth.guard');
        }
        if (Auth::guard($guard)->check()) {
            ActivityLogs::store($request);
        }
        return $response;
    }
}
