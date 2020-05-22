<?php

namespace App\Http\Controllers\Customizer;

use App\Services\SiteIdentifyService;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SiteIdentifyController extends Controller
{
    /**
     * @var \App\Services\Customizer\SiteIdentifyService
     */
    private $service;

    public function __construct()
    {
        $this->service = service(\App\Services\Customizer\SiteIdentifyService::class);
    }
    public function index(){
        $this->title('Settings');
        $this->description('');
        $this->breadcrumb(["text"=>"Settings"]);
        $data = $this->service->getSiteIdentifySettings();
        return $this->view('pages.customizer.site_identify.index',compact('data'));
    }
    public function save(){
        $res = $this->service->saveSettings();
        if ($res->errorCode == 200){
            show_toast($res->message,'success');
            return redirect()->back();
        }
        show_toast($res->message,'error');
        return redirect()->back()->withInput();
    }
}
