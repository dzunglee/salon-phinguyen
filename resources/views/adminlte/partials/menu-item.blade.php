@php
    $current = \Request::path();
    $query = \Request::getQueryString();
    $adminSlug = '/admin';
@endphp
@php

    function drawTree($menus, $current, $query, $adminSlug){
        $view = '';
        foreach ($menus as $menu){
            if (isset($menu['children'])){
                $view .= '<li class="treeview ';
                $view .= hasChildActive($menu['children'], $current, $query, $adminSlug)?'menu-open active':'';
                $view .= '">';
                $view .= '<a href="#" title="'.$menu['title'].'">'.
                    '<i class="fa '.$menu['icon'].'"></i>'.
                    '<span>'.$menu['title'].'</span>'.
                    '<i class="fa fa-angle-left pull-right"></i>'.
                    '</a>';
                $view .= '<ul class="treeview-menu" style="display: ';
                $view .= strpos($current, $menu['uri'])?'block':'';
                $view .= '">';
                $view .= drawTree($menu['children'], $current, $query, $adminSlug);
                $view .= '</ul>';
                $view .= '</li>';
            }else{
                if ($menu['type'] == 'menu'){
                    $view .= '<li class="';
                    $view .= substr($current,strlen($adminSlug)) ===  $menu['uri'] || substr($current.'?'.$query,strlen($adminSlug)) ===  $menu['uri'] || (strlen($current) - strlen($adminSlug) < 0 && $menu['uri'] == '/' || strpos($current, '/'.$menu['uri'].'/'))?'active':'';
                    $view .= '">'.
                        '<a href="'.admin_url($menu['uri']).'" nojax="" title="'.$menu['title'].'">'.
                        '<i class="fa '.$menu['icon'].'"></i>'.
                        '<span>'.$menu['title'].'</span>'.
                        '</a>'.
                        '<ul class="treeview-menu">'.
                            '<li><a>No submenu</a></li>'.
                        '</ul>'.
                        '</li>';
                }else{
                    $view .='<li class="header">MAIN NAVIGATION</li>';
                }
            }
        }
        return $view;
    }

    function hasChildActive($menus, $current, $query, $adminSlug, &$res = 0){
        foreach ($menus as $menu){
            if (substr($current,strlen($adminSlug)) ===  $menu['uri'] || substr($current.'?'.$query,strlen($adminSlug)) ===  $menu['uri'] || (strlen($current) - strlen($adminSlug) < 0 && $menu['uri'] == '/' || strpos($current, '/'.$menu['uri'].'/'))){
                $res = true;
            }else{
                if (isset($menu['children']))
                    $res = hasChildActive($menu['children'], $current,$query, $adminSlug, $res);
            }
        }
        return $res;
    }
    $menuHtml = drawTree($menus, $current, $query, $adminSlug);

@endphp
<li class="header">MAIN NAVIGATION</li>
{!! $menuHtml !!}