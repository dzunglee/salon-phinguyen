<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class GroupPermission extends Model
{
    protected $table = 'group_permission';
    protected $fillable = ['name','path','description'];

    public function permissions()
    {
        return $this->hasMany(Permission::class,'group_permission_id','id');
    }

    public static function getGroupPermissionFromPermissions($permissions, $type = ''){
        $groupPermissionId = [];
        foreach ($permissions as $item){
            !in_array($item->group_permission_id, $groupPermissionId)? array_push($groupPermissionId,$item->group_permission_id): null;
        }
        if ($type == 'array'){
            return count($groupPermissionId) > 0 ? GroupPermission::whereIn('id',$groupPermissionId)->pluck('id')->toArray() : [];
        }
        return count($groupPermissionId) > 0 ? GroupPermission::whereIn('id',$groupPermissionId)->get() : [];
    }

    public static function getPermissionFromRoles($roleNames = []){
        $res = [];
        $roles =  count($roleNames) > 0 ? ExtendRole::whereIn('name',$roleNames)->get():[];
        foreach ($roles as $role){
            foreach ($role->groupPermissions as $permission) {
                array_push($res,$permission->id);
            }
        }
        return $res;
    }
}
