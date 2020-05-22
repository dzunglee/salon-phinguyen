<?php

namespace App\Presenters\Role;
use SaliproPham\LaravelMVCSP\Presenter;

class IndexRolePresenter extends Presenter
{
    public function transform()
    {
        $data = $this->getOriginalData();
        $this->data = $data['data'];
        $this->permissions = $data['permissions'];
        $this->levelList = $data['levelList'];
    }
}
