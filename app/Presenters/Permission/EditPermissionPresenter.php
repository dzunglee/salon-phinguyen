<?php

namespace App\Presenters\Permission;
use App\Models\GroupPermission;
use SaliproPham\LaravelMVCSP\Presenter;

class EditPermissionPresenter extends Presenter
{
    public function transform()
    {
        $data = $this->getOriginalData();
        $this->item = $data['item'];
        $this->methods = $data['methods'];
        $this->types = $data['types'];
    }
}
