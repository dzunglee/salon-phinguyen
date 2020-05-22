<?php
/**
 * Created by PhpStorm.
 * User: dzung
 * Date: 3/25/2019
 * Time: 10:13 AM
 */

namespace App\Classes;


use Mockery\Exception;

class Tree
{
    /**
     * @var array
     */
    public $data = [];
    public $idField = 'id';
    public $titleField = 'title';
    public $parentIdField = 'parent_id';
    public $childrenKey = 'children';
    public $type = '';
    public $space = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';

    /**
     * Tree constructor.
     * @param array $data
     * @param string $title
     * @param string $parentIdField determined parent key
     * @param string $type determined type of item
     * @param string $childrenKey define a array key that own children in tree
     * @param string $idField custom item id
     */
    public function __construct( $data = [], $title = '', $parentIdField = '', $type = '', $childrenKey = '' , $idField = '')
    {
        $this->data = is_array($data)?$data:$this->data;
        $this->titleField = !empty($title)?$title:$this->titleField;
        $this->type = !empty($type)?$type:$this->type;
        $this->idField = !empty($idField)?$idField:$this->idField;
        $this->parentIdField = !empty($parentIdField)?$parentIdField:$this->parentIdField;
        $this->childrenKey = !empty($childrenKey)?$childrenKey:$this->childrenKey;
    }

    /**
     * @return array
     */
    public function arrayToTree(){
        $newArrays = [];
        $parents = [];
        $parentId = $this->parentIdField;
        foreach ($this->data as $item){
            if (!$item[$parentId]) {
                $parents[] = $item;
            }
            $newArrays[$item[$parentId]][] = $item;
        }
        return $this->dataToTree($newArrays, $parents);
    }

    /**
     * @param $list
     * @param $parent
     * @return array
     */
    function dataToTree(&$list, $parent){
        $id = $this->idField;
        $tree = array();
        foreach ($parent as $k=>$p){
            if(isset($list[$p[$id]])){
                $p[$this->childrenKey] = tree_menu($list, $list[$p[$id]]);
            }
            $tree[] = $p;
        }
        return $tree;
    }

    /**
     * @param null $selected_id selected id
     * @param array $hideIds do not display items and their children
     * @param array $disableIds disable items
     * @return string
     * @internal param Tree|array $tree
     */
    public function treeToOptions($selected_id = null, $hideIds = [], $disableIds = []){
        $tree = $this->arrayToTree();
        return $this->drawOptionItem($tree, $selected_id, $hideIds, $disableIds);
    }

    /**
     * @param $tree
     * @param $selected_id
     * @param array $hideIds
     * @param array $disableIds
     * @param string $space
     * @return string
     */
    function drawOptionItem($tree, $selected_id = null, $hideIds = [], $disableIds = [], $space = ''){
        try{
            $res = '';
            $id = $this->idField;
            $title = $this->titleField;
            $children = $this->childrenKey;
            $type = $this->type;
            foreach ($tree as $item){
                if (!isset($item['type']) || $item['type'] == $type || $item['type'] !== 'space'){
                    if (is_array($hideIds) && !in_array($item[$id],$hideIds)){
                        $res .= '<option value="'.$item[$id].'"';
                        $res .= $selected_id == $item[$id]?' selected ':'';
                        $res .= in_array($item[$id], $disableIds)?'disabled':'';
                        $res .= '>';
                        if(isset($item[$title])) {
                            $res .= $space . $item[$title];
                        }
                        $res .= '</option>';
                        if (isset($item[$children])){
                            $res .= $this->drawOptionItem($item[$children], $selected_id, $hideIds, $disableIds, $space.$this->space);
                        }
                    }
                }
            }
            return $res;
        }catch (Exception $e){
            throw $e;
        }
    }

    /**
     * @param string $routeName
     * @return string
     */
    public function treeToDropAble($routeName = ''){
        $tree = $this->arrayToTree();
        return $this->drawDropAbleItem($tree, $routeName);
    }

    /**
     * @param $tree
     * @param $routeName
     * @return string
     */
    function drawDropAbleItem($tree, $routeName){
        $type = $this->type;
        $id = $this->idField;
        $title = $this->titleField;
        $children = $this->childrenKey;
        $view = '';
        foreach ($tree as $item){
            if (!isset($item['type']) || $item['type'] == $type || $item['type'] !== 'space'){
                $view .= '<li class="dd-item" data-id="'.$item[$id].'">';
                $view .= '<input name="lang" value="{{session("locale1")}}" hidden>';
                $view .= '<div class="dd-handle">';
                $view .= isset($item['icon'])?'<i class="fa '.$item['icon'].'"></i>&nbsp;':'';
                $view .= isset($item[$title])?'<strong>'.$item[$title].'&nbsp;&nbsp;&nbsp;&nbsp;</strong>':'';
                $view .= isset($item['uri']) && !is_numeric($item['uri'])?(filter_var($item['uri'], FILTER_VALIDATE_URL)?'<a target="blank" href="'.$item['uri'].'" class="dd-nodrag">'.$item['uri'].'</a>':'<a target="blank" href="'.admin_url($item['uri']).'" class="dd-nodrag">'.$item['uri'].'</a>'):'';
                $view .= '<span class="pull-right dd-nodrag"><a href="'.route($routeName.'.edit',[$item[$id]]).'"><i class="fa fa-edit" style="margin-right: 4px"></i></a><a href="javascript:void(0);" data-url="'.route($routeName.'.destroy',[$item[$id]]).'" class="grid-row-delete" data-parent-elm="li"><i class="fa fa-trash"></i></a></span>';
                $view .= '</div>';
                if (isset($item[$children])){
                    $view .= '<ol class="dd-list">';
                    $view .= $this->drawDropAbleItem($item[$children], $routeName);
                    $view .= '</ol>';
                }
                $view .= '</li>';
            }else{
                $view .= '<li class="dd-item" data-id="'.$item[$id].'">';
                $view .= '<div class="dd-handle text-center">';
                $view .= '<strong>'.$item[$title].'</strong>';
                $view .= '<span class="pull-right dd-nodrag"><a href="javascript:void(0);" data-url="'.route($routeName.'.destroy',[$item[$id]]).'" class="grid-row-delete" data-parent-elm="li"><i class="fa fa-trash"></i></a></span>';
                $view .= '</div>';
                $view .= '</li>';
            }
        }
        return $view;
    }

    /**
     * @param string $routeName
     * @return string
     */
    public function treeToDropAbleCustomizerMenuItem($routeName = ''){
        $tree = $this->arrayToTree();
        return $this->drawDropAbleCustomizerMenuItem($tree, $routeName);
    }

    /**
     * @param $tree
     * @param $routeName
     * @return string
     */
    function drawDropAbleCustomizerMenuItem($tree, $routeName){
        $type = $this->type;
        $id = $this->idField;
        $title = $this->titleField;
        $children = $this->childrenKey;
        $view = '';
        foreach ($tree as $item){
            if (!isset($item['type']) || $item['type'] == $type || $item['type'] !== 'space'){
                $view .= '<li class="dd-item" data-id="'.$item[$id].'">';
                $view .= '<div class="dd-handle">';
                $view .= isset($item['icon'])?'<i class="fa '.$item['icon'].'"></i>&nbsp;':'';
                $view .= isset($item[$title])?'<strong>'.$item[$title].'&nbsp;&nbsp;&nbsp;&nbsp;</strong>':'';
                $view .= isset($item['uri']) && !is_numeric($item['uri'])?(filter_var($item['uri'], FILTER_VALIDATE_URL)?'<a target="blank" href="'.$item['uri'].'" class="dd-nodrag">'.$item['uri'].'</a>':'<a target="blank" href="'.admin_url($item['uri']).'" class="dd-nodrag">'.$item['uri'].'</a>'):'';
                $view .= '<span class="pull-right dd-nodrag"><a class="edit-ajax" data-target="#edit-modal" href="'.route($routeName.'.edit',[$item['id']]).'" title="Edit"><i class="fa fa-edit cc" style="margin-right: 4px"></i></a><a href="javascript:void(0);" data-url="'.route($routeName.'.destroy',[$item[$id]]).'" class="grid-row-delete" data-parent-elm="li"><i class="fa fa-trash"></i></a></span>';
                $view .= '</div>';
                if (isset($item[$children])){
                    $view .= '<ol class="dd-list">';
                    $view .= $this->drawDropAbleCustomizerMenuItem($item[$children], $routeName);
                    $view .= '</ol>';
                }
                $view .= '</li>';
            }else{
                $view .= '<li class="dd-item" data-id="'.$item[$id].'">';
                $view .= '<div class="dd-handle text-center">';
                $view .= '<strong>'.$item[$title].'</strong>';
                $view .= '<span class="pull-right dd-nodrag"><a href="javascript:void(0);" data-url="'.route($routeName.'.destroy',[$item[$id]]).'" class="grid-row-delete" data-parent-elm="li"><i class="fa fa-trash"></i></a></span>';
                $view .= '</div>';
                $view .= '</li>';
            }
        }
        return $view;
    }
}