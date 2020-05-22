<?php

namespace App\Http\Controllers;

use App\Presenters\Admin\EditAdminPresenter;
use App\Services\AdminService;
use App\Services\RoleService;

class AdminController extends Controller
{

//    private $msgExistingEmail = 'Email already exists!';
//    private $msgItemNotFound = '';
//    private $msgCreatedSuccess = 'User created successfully!';
//    private $msgUpdatedSuccess = '"User updated successfully!"';
//    private $msgDeleteFailed = '';

    /**
     * @var \App\Services\AdminService
     */
    public $service;
    /**
     * @var \App\Services\RoleService
     */
    public $roleService;

    public function __construct()
    {
        $this->service = service(AdminService::class);
        $this->roleService = service(RoleService::class);
    }

    public function index(){
        $this->title('Users');
        $this->description('');
        $this->breadcrumb(["text"=>"Users"]);
        $s = request()->get('s','');
        $data = $this->service->getList($s);
        $roles = $this->roleService->getRoleByUser(me());
        return $this->view('pages.user.index', compact('data', 'roles'));

    }

    public function create(){
        abort(404);
    }

    public function store(){
        $data = $this->validate(request(),[
            'name' => 'required|min:5',
            'email' => 'email|required|max:255|unique:admins,email,NULL,id,deleted_at,NULL|',
            'password' => 'nullable|required|confirmed|min:6|max:32',
            'avatar' =>  'nullable',
        ]);
        $roles = $this->validate(request(),[
            'role' =>  'array|nullable',
            'role.*' =>  'required',
        ]);
        if ($this->service->getByEmail($data['email'])){
            show_toast('Email already exists!', 'error', 'Error');
            return redirect()->back()->withInput();
        }

        try{
            $this->service->create($data, $roles);
        }catch (\Exception $err){
            show_toast($err->getMessage(), 'error', 'Error');
            return redirect()->back()->withInput();
        }
        show_toast("User created successfully!", 'success', 'Success');
        return redirect(route('users.index'));

    }

    public function edit($id){
        $roles = $this->roleService->getRoleByUser(me());
        $admin = $this->service->get($id);
        if(!$admin){
            abort(404);
        }
        $data = presenter(EditAdminPresenter::class,[
            'item' => $admin,
            'roles' => $roles,
        ]);

        return $this->view('pages.user.edit', $data);
    }

    public function update($id){
        $admin =  $this->service->get($id);
        if(!$admin){
            abort(404);
        }

        $data = $this->validate(request(),[
            'name' => 'required|min:5',
            'password' => 'nullable|confirmed|min:6|max:32',
            'avatar' =>  '',
        ]);
        $roles = $this->validate(request(),[
            'role' =>  'array|nullable',
            'role.*' =>  'required',
        ]);
        $res = $this->service->update($admin, $data, $roles);
        if ($res->errorCode == 200){
            return response($res->message, 200);
        }
        return response($res->message, $res->errorCode);

    }

    public function show(){
        abort(404);
    }

    public function destroy($id){
        $user =  $this->service->get($id);
        if($user){
            if(auth()->user()->id == $id){
                return response('Cannot delete yourself!',400);
            }

            if($user->isSuperAdmin()){
                return response('Cannot delete super admin!',400);
            }

            try{
                $this->service->destroy($id);

            }catch (\Exception $err){
                //show_toast($err->getMessage(), 'error', 'Error');
                return response($err->getMessage(),400);
            }
            return response('',200);
        }

        //show_toast("deleted!", 'success');
        return response('User not found!',400);

    }
}
