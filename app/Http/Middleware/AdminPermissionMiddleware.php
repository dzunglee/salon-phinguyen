<?php

namespace App\Http\Middleware;
use App\Classes\AdminAuth;
use Closure;
use Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode as Middleware;
use Illuminate\Http\Response;
use Spatie\Permission\Models\Permission;

class AdminPermissionMiddleware extends Middleware
{
    /**
     * @param \Illuminate\Http\Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(!AdminAuth::checkAuth()){
            return $this->handleForbiddenAccess();
        }
        return $next($request);
    }

    public function handleForbiddenAccess(){
        if (request()->expectsJson()) {
            return response('Access Forbidden',403);
        }else{
            abort(403);
        }
    }

}