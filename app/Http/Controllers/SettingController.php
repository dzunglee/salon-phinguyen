<?php

namespace App\Http\Controllers;

use App\Services\SettingService;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     * @var \App\Services\SettingService
     */
    private $service;

    public function __construct()
    {
        $this->service = service(SettingService::class);
    }

    public function index(){
        $this->title('Settings');
        $this->description('');
        $this->breadcrumb(["text"=>"Settings"]);
        $data = [];
        $tab = request()->get('tab', 'general');
        switch ($tab){
            case 'media' :
                $data = $this->service->getMediaSettings();
                break;
            case 'permalink' :
                $data = $this->service->getPermalinkSettings();
                break;
            case 'customfields' :
                $data = $this->service->getCustomfieldsSettings();
                break;
            default:
                $data = $this->service->getGeneralSettings();
        }

        return $this->view('pages.setting.index', compact('tab', 'data'));
    }

    public function save(Request $request){
        $res = $this->service->saveSettings();
        if ($res->errorCode == 200){
            show_toast($res->message,'success');
            return redirect()->back();
        }
        show_toast($res->message,'error');
        return redirect()->back()->withInput();
    }
}
