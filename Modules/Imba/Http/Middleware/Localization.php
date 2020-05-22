<?php

namespace Modules\Imba\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class Localization
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $locale = $request->get('locale', null);
        if (!$locale) {
            $locale = Cookie::get('locale', null);
            try {
                if ($locale) {
                    $locale = decrypt($locale, false);
                    app()->setLocale($locale);
                }
            } catch (\Exception $e) {
                logger($e->getMessage());
            }
            app()->setLocale($locale);
        } else {
            if (in_array($locale, ['en', 'vi'])) {
                Cookie::queue('locale', 'en', 1000000);
                return redirect(request()->url())->withCookie('locale', $locale, 1000000);
            }
        }
        return $next($request);
    }
}
