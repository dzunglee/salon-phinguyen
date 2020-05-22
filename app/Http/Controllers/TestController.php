<?php

namespace App\Http\Controllers;

use App\Classes\Tree;

class TestController extends Controller
{
    function test(){
        $menu = get_menu('main-menu');
        dd($menu);
    }
}
