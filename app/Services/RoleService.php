<?php

namespace App\Services;

use App\Models\Admin;
use App\Models\ExtendRole;
use App\Models\GroupPermission;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\Input;
use Mockery\Exception;
use SaliproPham\LaravelMVCSP\Service;
use Spatie\Permission\Models\Role;

class RoleService extends Service
{
    use ValidatesRequests;

    public $levelList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    public function getRoleByUser($user)
    {
        if (is_root_user($user)) {
            $roles = Role::orderBy('level')->get();
        } else {
            $roles = $user->getRoleNames();
            $highestRole = Role::whereIn('name',$roles)->orderBy('level')->first();
            if (!$highestRole){
                return [];
            }
            $newRole = Role::where('level','>=',$highestRole->level)->orderBy('level')->get();
            return $newRole;
        }
        return $roles;
    }

    public function getRoleList()
    {
        $s = request()->get('s', '');
        $query = Role::query();
        if (!empty($s))
            $query->where('name', 'like', '%' . $s . '%');
        $data = $query->paginate(config('w3cms.items_per_page'))->appends(Input::except('page'));
        return $data;
    }

    public function store()
    {
        $res = (object)[
            'errorCode' => 200,
            'message' => 'Create new role successfully'
        ];

        $data = $this->validate(request(), [
            'name' => 'required|max:255',
            'description' => 'nullable|max:255',
            'level' => 'required|numeric|min:0|max:9'
        ]);

        $permissions = $this->validate(request(), [
            'permissions' => 'nullable'
        ]);
        try {
            $role = Role::create($data);
            if (!$role) {
                $res->errorCode = 1;
                $res->message = 'Can not create new role';
            } else {
                try {
                    foreach ($permissions as $permission) {
                        $role->givePermissionTo($permission);
                    }
                } catch (\Exception $e) {
                    logger($e->getMessage());
                    $res->errorCode = 400;
                    $res->message = 'Can not set permissions for new role';
                }
            }
        } catch (\Exception $e) {
            $res->errorCode = 400;
            $res->message = $e->getMessage();
        }
        return $res;
    }

    public function update($id)
    {

        $res = (object)[
            'errorCode' => 200,
            'message' => 'Update role successfully'
        ];
        $data = $this->validate(request(), [
            'name' => 'required|max:255',
            'description' => 'nullable|max:255',
            'level' => 'required|numeric|min:0|max:9'
        ]);

        $permissions = $this->validate(request(), [
            'permissions' => 'nullable'
        ]);

        try {
            Role::where('id', $id)->update($data);
            $role = Role::find($id);
            foreach ($permissions as $permission) {
                $role->givePermissionTo($permission);
            }
        } catch (\Exception $e) {
            $res->errorCode = 1;
            $res->message = $e->getMessage();
        }
        return $res;
    }

    public function destroy($id)
    {
        $res = (object)[
            'errorCode' => 200,
            'message' => 'Delete role successfully'
        ];
        if (!Role::destroy($id)) {
            $res->errorCode = 1;
            $res->message = 'Can not delete role';
        }
        return $res;
    }
}
