<?php

namespace App\Presenters\Menu;
use App\Classes\Tree;
use SaliproPham\LaravelMVCSP\Presenter;

class IndexMenuPresenter extends Presenter
{
    public function transform()
    {
        $data = $this->getOriginalData()['data'];
        $tree = new Tree($data,'title','parent_id','menu');
        $this->dragAbleHtml = $tree->treeToDropAble('menus');
    }
}
