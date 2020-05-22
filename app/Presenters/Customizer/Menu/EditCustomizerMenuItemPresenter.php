<?php

namespace App\Presenters\Customizer\Menu;
use App\Classes\Tree;
use SaliproPham\LaravelMVCSP\Presenter;

class EditCustomizerMenuItemPresenter extends Presenter
{
    public function transform()
    {
        $data = $this->getOriginalData();
        $menuByTypeList = $data['menuByTypeList'];
        $this->item = $data['item'];
        $this->menuType = $data['menuType'];
        $this->typeOfMenuList = $this->getOriginalData()['typeOfMenuList'];

        $tree = new Tree($menuByTypeList,'title','parent_id','menu');
        $this->menuOptionHtml = $tree->treeToOptions($data['item']->parent_id);
    }
}
