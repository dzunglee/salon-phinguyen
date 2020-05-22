<?php

namespace App\Models;

use Spatie\Permission\Models\Role;

class ExtendRole extends Role
{
    public function groupPermissions()
    {
        return $this->belongsToMany(GroupPermission::class,'role_group_permission','role_id','group_permission_id');
    }
}
