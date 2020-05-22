<?php

namespace App\Providers;

use App\Http\Controllers\MenuController;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        /**
         * Init theme folder
         */
        $themeFolder = config('w3cms.theme');
        \View::addLocation(resource_path('views' . DIRECTORY_SEPARATOR . $themeFolder));

        view()->composer(['*'], function($view) {
            $view->with('me', me());
        });
        view()->composer(['*'], function($view) {
            $view->with('menus', (new MenuController())->getMenu());
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
