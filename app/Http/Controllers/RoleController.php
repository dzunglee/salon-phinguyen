<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\ExtendRole;
use App\Models\GroupPermission;
use App\Presenters\Role\CreateRolePresenter;
use App\Presenters\Role\EditRolePresenter;
use App\Presenters\Role\IndexRolePresenter;
use App\Services\PermissionService;
use App\Services\RoleService;
use App\Traits\AuthorizeTrait;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    use AuthorizeTrait;

    /**
     * @var \App\Services\RoleService
     */
    private $service;

    /**
     * @var \App\Services\PermissionService
     */
    private $permissionService;

    public function __construct()
    {
        $this->service = service(RoleService::class);
        $this->permissionService = service(PermissionService::class);
    }

    public function index()
    {
        $this->title('Roles');
        $this->description('');
        $this->breadcrumb(["text"=>"Roles"]);
        $this->checkAuth();
        $data = presenter(IndexRolePresenter::class,[
            'data'=>$this->service->getRoleList(),
            'permissions'=>$this->permissionService->getPermissionByUser(me()),
            'levelList' => $this->service->levelList
        ]);
        return $this->view('pages.role.index', $data);
    }

    public function create()
    {
        abort(404);
    }

    public function store()
    {
        $res = $this->service->store();
        if ($res->errorCode == 200){
            show_toast($res->message,'success');
            return redirect(route('roles.index'));
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
        $data = presenter(EditRolePresenter::class,[
            'item' => Role::find($id),
            'permissions'=>$this->permissionService->getPermissionByUser(me()),
            'levelList' => $this->service->levelList
        ]);

        return $this->view('pages.role.edit', $data);
    }

    public function update($id)
    {
        $res = $this->service->update($id);
        if ($res->errorCode == 200){
            return response($res->message, 200);
        }
        return response($res->message, $res->errorCode);
    }

    public function destroy($id)
    {
        $this->checkAuth();
        $res = $this->service->destroy($id);
        if ($res->errorCode == 200){
            return response('Deleted',$res->errorCode);
        }
        return response('Can not delete this role.',$res->errorCode);
    }
}
