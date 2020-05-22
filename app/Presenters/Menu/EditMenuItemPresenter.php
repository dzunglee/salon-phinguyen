<?php

namespace App\Presenters\Menu;
use App\Classes\Tree;
use App\Models\ExtendRole;
use App\Models\GroupPermission;
use App\Models\Menu;
use SaliproPham\LaravelMVCSP\Presenter;

class EditMenuItemPresenter extends Presenter
{
    public function transform()
    {
        // TODO: Implement transform() method.jk
        $data = $this->getOriginalData();
        $this->item = $data['item'];
        $this->roles = $data['roles'];
        $this->permissions = $data['permissions'];
        $this->currentGroupPermission = $data['currentGroupPermission'];
        $tree = new Tree($data['menu'],'title','parent_id','menu');
        $this->menuOptionHtml = $tree->treeToOptions($data['item']->parent_id,[$data['item']->id]);
    }
}
