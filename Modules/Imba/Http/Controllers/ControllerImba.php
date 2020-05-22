<?php

namespace Modules\Imba\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class ControllerImba extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function updateSeo($title = null, $description = null, $image = null)
    {
        view()->share('site_title', $title ? $title : '');
        view()->share('site_description', $description ? $description : '');
        view()->share('site_image', url($image ? $image : ''));
    }
}
