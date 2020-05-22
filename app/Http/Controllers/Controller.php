<?php

namespace App\Http\Controllers;

use App\Classes\Traits\PageInfo;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, PageInfo;

    protected $lang = ['vi', 'en'];

    public function setTitle($data){
        view()->share('title', $data);
    }
}
