<?php

namespace App\Presenters\Role;
use SaliproPham\LaravelMVCSP\Presenter;

class CreateRolePresenter extends Presenter
{
    public function transform()
    {
        $data = $this->getOriginalData();
        $this->permissions = $data['permissions'];
    }
}
