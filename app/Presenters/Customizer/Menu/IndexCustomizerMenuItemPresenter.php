<?php

namespace App\Presenters\Customizer\Menu;
use App\Classes\Tree;
use SaliproPham\LaravelMVCSP\Presenter;

class IndexCustomizerMenuItemPresenter extends Presenter
{
    public function transform()
    {
        $data = $this->getOriginalData()['data'];
        $this->menuType = $this->getOriginalData()['menuType'];
        $this->typeOfMenuList = $this->getOriginalData()['typeOfMenuList'];
        $tree = new Tree($data,'title','parent_id');
        $this->dragAbleHtml = $tree->treeToDropAbleCustomizerMenuItem('menu-item');
        $tree = new Tree($data,'title','parent_id','menu');
        $this->menuOptionHtml = $tree->treeToOptions();
    }
}
