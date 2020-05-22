<?php

namespace App\Presenters\Admin;
use SaliproPham\LaravelMVCSP\Presenter;

class EditAdminPresenter extends Presenter
{
    public function transform()
    {
        $data = $this->getOriginalData();
        $user = $data['item'];
        $this->item = $data['item'];
        foreach ($data['roles'] as &$role){
            if ($user->hasRole($role->name)){
                $role->selected = true;
            }
        }
        $this->roles = $data['roles'];

    }
}
