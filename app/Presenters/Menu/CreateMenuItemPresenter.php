<?php

namespace App\Presenters\Menu;
use App\Classes\Tree;
use App\Models\ExtendRole;
use App\Models\GroupPermission;
use SaliproPham\LaravelMVCSP\Presenter;

class CreateMenuItemPresenter extends Presenter
{
    public function transform()
    {
        $data = $this->getOriginalData();
        $this->permissions= $data['permissions'];
        $this->roles= $data['roles'];
        $tree = new Tree($data['menu'],'title','parent_id','menu');
        $this->menuOptionHtml = $tree->treeToOptions();
    }
}
