<?php

namespace App\Http\Controllers;

use App\Services\AdminLogService;
use App\Services\AdminService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\Log;
use App\Models\Admin;
use App\Traits\AuthorizeTrait;
use App\Classes\AdminAuth;

class LogController extends Controller
{
    public $accessAllLog = "view-all-logs";
    public $deleteAllLog = "delete-all-logs";
    public $deleteLogs ='delete-logs';
    //use AuthorizeTrait;
    public $service;

    public function __construct()
    {
        $this->service = service(AdminLogService::class);
    }


    /**
     * Handle an incoming request.
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Exception
     */
    public function index(Request $request){
        //$this->checkAuth();
        $this->title('Logs');
        $this->description('');
        $this->breadcrumb(["text"=>"Logs"]);

        $serviceAdmin = service(AdminService::class);

        $listAdmin = $serviceAdmin->getListAll();
        //dd(is_root_user(auth()->user()));
        $data = $this->service->getList(AdminAuth::checkAuth($this->accessAllLog));

        return $this->view('pages.log.index',compact('data', 'listAdmin'));
    }

    public function show(){
        abort(404);
    }

    public function deleteAll(Request $request){
        //dd($request->input('method'));
//        if(!$this->checkAuth($this->deleteLogs)){
//            abort(403);
//        }
//        if(!$this->checkAuth($this->accessAllLog)){
//              $this->service->deleteLogs(true);
//        }else{
//              $this->service->deleteLogs();
//        }
        if(!AdminAuth::checkAuth($this->deleteLogs) && !AdminAuth::checkAuth($this->deleteAllLog)){
            abort(403);
        }
        $this->service->delete(AdminAuth::checkAuth($this->deleteAllLog));
        show_alert('All logs has been deleted!', 'success', 'Success');

        return redirect()->back();
    }

    public function destroy($id){
        //dd('destroy');
    }
    

}
