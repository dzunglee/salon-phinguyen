<?php

namespace App\Presenters\Role;
use App\Models\ExtendRole;
use App\Models\GroupPermission;
use SaliproPham\LaravelMVCSP\Presenter;

class EditRolePresenter extends Presenter
{
    public function transform()
    {
        $data = $this->getOriginalData();
        $item = $data['item'];
        $permissions = $data['permissions'];
        foreach ($permissions as $permission){
            if ($item->hasPermissionTo($permission->name)){
                $permission->selected = true;
            }else{
                $permission->selected = false;
            }
        }
        $this->item = $item;
        $this->permissions = $permissions;
        $this->levelList = $data['levelList'];
    }
}
