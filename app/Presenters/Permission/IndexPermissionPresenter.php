<?php

namespace App\Presenters\Permission;
use App\Models\GroupPermission;
use SaliproPham\LaravelMVCSP\Presenter;

class IndexPermissionPresenter extends Presenter
{
    public function transform()
    {
        $data = $this->getOriginalData();
        $this->data = $data['data'];
        $this->methods = $data['methods'];
        $this->types = $data['types'];
    }
}
