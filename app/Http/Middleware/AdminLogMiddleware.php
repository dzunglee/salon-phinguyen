<?php

namespace App\Http\Middleware;

use App\Classes\AdminLog;
use Closure;
use Illuminate\Support\Facades\Auth;

class AdminLogMiddleware
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
        if(!$guard){
            $guard = config('w3cms.auth.guard');
        }

        if (Auth::guard($guard)->check()) {
            AdminLog::store($request, Auth::guard($guard)->user());
            return $next($request);
        }
        
    }
}
