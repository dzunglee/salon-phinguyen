<?php

namespace App\Http\Controllers;


use App\Models\Admin;
use App\Presenters\Permission\EditPermissionPresenter;
use App\Presenters\Permission\IndexPermissionPresenter;
use App\Services\PermissionService;
use App\Services\RoleService;
use App\Traits\AuthorizeTrait;
use Illuminate\Http\Request;
use Mockery\Exception;
use Spatie\Permission\Models\Permission;
use App\Models\GroupPermission;
use Spatie\Permission\Models\Role;

class PermissionController extends Controller
{
    use AuthorizeTrait;

    /**
     * @var \App\Services\PermissionService
     */
    private $service;

    public function __construct()
    {
        $this->service = service(PermissionService::class);
    }

    public function index()
    {
        $this->title('Permissions');
        $this->description('');
        $this->breadcrumb(["text"=>"Permissions"]);
        $this->checkAuth();
        $data = $this->service->getPermissionList();
        $data = presenter(IndexPermissionPresenter::class,['data'=>$data, 'methods' => $this->service->arrMethods, 'types' => $this->service->types]);
        return $this->view('pages.permission.index', $data);
    }

    public function create()
    {
        abort(404);
        $this->title('Create Permission');
        $this->description('');
        $this->breadcrumb(["text"=>"Permissions", 'url'=> 'permissions'],["text"=>"Create"] );
        $this->checkAuth();
        return $this->view('pages.permission.create');
    }

    public function store()
    {
        $res = $this->service->store();
        if ($res->errorCode == 200){
            show_toast($res->message,'success');
            return redirect(route('permissions.index'));
        }
        show_toast($res->message,'error');
        return redirect()->back()->withInput();
    }

    public function show($id)
    {
        abort(404);
    }

    public function edit($id)
    {
        $item = $this->service->getPermissionById($id);
        if (!$item){
            abort(404);
        }
        $contents = view('pages.permission.edit', ['item' => $item, 'methods' => $this->service->arrMethods, 'types' => $this->service->types])->render();
        return response($contents,200);
    }

    public function update(Request $request, $id)
    {
        $this->checkAuth();
        $savePermission = service(PermissionService::class);
        $res = $savePermission->update($id);
        if ($res->errorCode == 200){
            return response($res->message, 200);
        }
        return response($res->message, $res->errorCode);
    }

    public function destroy($id)
    {
        $this->checkAuth();
        $menuService = service(PermissionService::class);
        $res = $menuService->destroy($id);
        if ($res->errorCode == 200){
            return response('Deleted',$res->errorCode);
        }
        return response('Can not delete this permission.',$res->errorCode);
    }

}
