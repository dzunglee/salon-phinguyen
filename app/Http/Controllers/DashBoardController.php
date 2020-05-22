<?php

namespace App\Http\Controllers;

use App\Services\DashBoardService;
use Illuminate\Http\Request;

class DashBoardController extends Controller
{
    function __construct()
    {
        $this->DashBoard = service(DashBoardService::class);
    }

    public function index(){
        $this->title('Dashboard ');
        $this->description('');
        $this->breadcrumb(["text"=>"Dashboard"]);

        $statistical = $this->DashBoard->statistical();
        return $this->view('pages.index',compact('statistical'));
    }
}
