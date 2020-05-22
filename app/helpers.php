<?php

use \Illuminate\Support\MessageBag;

if (!function_exists('show_toast')) {

    /**
     * Flash a toastr message bag to session.
     *
     * @param string $message
     * @param string $type success|warning|error
     * @param array  $options
     */
    function show_toast($message = '', $type = 'success', $options = [])
    {
        $toastr = new MessageBag(get_defined_vars());

        session()->flash('toastr', $toastr);
    }
}

if (!function_exists('show_alert')) {

    /**
     * Flash a message bag to session.
     *
     * @param string $title
     * @param string $message
     * @param string $type
     */
    function show_alert( $message , $type = 'info', $title = '')
    {
        $message = new MessageBag(get_defined_vars());

        session()->flash($type, $message);
    }
}

if (!function_exists('cms_url')) {

    /**
     * Generate a url for the cms
     *
     * @param null $path
     * @param array $parameters
     * @param null $secure
     * @return \Illuminate\Contracts\Routing\UrlGenerator|string
     */
    function cms_url($path = null, $parameters = [], $secure = null)
    {
        $path = config('w3cms.prefix') . '/' . ltrim($path, '/');
        return url($path, $parameters, $secure);
    }
}


if (!function_exists('me')) {
    function me()
    {
        if (Auth::guard(config('w3cms.auth.guard'))->check()) {
            return Auth::guard(config('w3cms.auth.guard'))->user();
        }
        return null;
    }
}


if (!function_exists('admin_url')) {
    function admin_url($url)
    {
        if ($url !== '/')
            return url('admin') . '/' . $url;
        return url('admin');
    }
}


if (!function_exists('admin_notify')) {

    /**
     * Flash a toastr message bag to session.
     * @param $message
     * @param string $type
     */
    function admin_notify($message, $type = 'Error')
    {
        $message = [
            'title' => $type,
            'message' => $message,
            'icon' => 'fa-ban',
            'class' => 'alert-danger',
        ];
        switch ($type) {
            case 'Success':
                $message['icon'] = 'fa-check';
                $message['class'] = 'alert-success';
                break;
            case 'Warning':
                $message['icon'] = 'fa-warning';
                $message['class'] = 'alert-warning';
                break;
        }
        $error = new \Illuminate\Support\MessageBag($message);
        \Illuminate\Support\Facades\Session::flash('error', $error);
    }
}

if (!function_exists('admin_error')) {
    function admin_error($message)
    {
        admin_notify($message, 'Error');
    }
}
if (!function_exists('admin_success')) {
    function admin_success($message)
    {
        admin_notify($message, 'Success');
    }
}
if (!function_exists('admin_warning')) {
    function admin_warning($message)
    {
        admin_notify($message, 'Warning');
    }
}
if (!function_exists('is_root_user')) {
    function is_root_user($user){
        return $user->isSuperAdmin();
    }
}

if (!function_exists('group_array_by_value')) {
    function group_array_by_value($old_arr, $value)
    {
        $arr = array();

        foreach ($old_arr as $key => $item) {
            $arr[$item[$value]][$key] = $item;
        }

        ksort($arr, SORT_NUMERIC);
        foreach ($arr as &$item) {
            $item = array_values($item);
        }
        return $arr;
    }
}


if (!function_exists('arrayToKeyValueArray')) {
    function arrayToKeyValueArray($array = [], $key, $value = null)
    {
        $newArray = [];
        foreach ($array as $item) {
            if (is_object($item)) {
                if ($value)
                    $newArray[$item->$key] = $item->$value;
                else
                    $newArray[$item->$key] = $item;
            }

        }
        return $newArray;
    }
}

if (!function_exists('indexOfCharactersInString')) {
    function indexOfCharactersInString($string = '', $needle = '', $lastPos = 0)
    {
        $positions = [];
        if (strrchr($string, '/') != '/') {
            $string .= '/';
        };
        while (($lastPos = strpos($string, $needle, $lastPos)) !== false) {
            $positions[] = $lastPos;
            $lastPos = $lastPos + strlen($needle);
        }
        return $positions;
    }

    ;
}

if (!function_exists('name_with_method')) {
    function name_with_method($name, $method)
    {
        if (strrchr($name, '/') == '/*')
            return str_slug($name . '-all-' . $method);
        return str_slug($name . '-' . $method);
    }
}

if (!function_exists('path_with_method')) {
    function path_with_method($path, $method)
    {
        return $path . '_' . $method;
    }
}


if (!function_exists('tree_menu')) {
    function tree_menu(&$list, $parent)
    {
        $tree = array();
        foreach ($parent as $k => $l) {
            if (isset($list[$l['id']])) {
                $l['children'] = tree_menu($list, $list[$l['id']]);
            }
            $tree[] = $l;
        }
        return $tree;
    }
}
if (!function_exists('edit_custom_field')) {
    function edit_custom_field(&$data)
    {
        $store = json_decode(file_get_contents(base_path('database/dataJson/fieldsDefault.json')), true);
        if(!empty($store)){
            foreach ($store as $key => $item_store){
                foreach ($data->attributes as $item_att){
                    if ($item_att->name == $item_store['name']){
                        $item_att->attDefault = 1;
                    }else{
                        $item_att->attDefault = 0;
                    }
                }
            }
        }
    }
}

if (!function_exists('defaultFields')) {
    function defaultFields()
    {
        file_put_contents(base_path('database/dataJson/fieldsDefault.json'), json_encode(null));
    }
}

if (!function_exists('add_custom_field')) {
    function add_custom_field($slug = null, $type = null, $helpText = null)
    {
        if (!empty($slug)){
            $rq = $slug.str_random(rand(rand(5,20),rand(21,50)));
            $key = Hash::make($rq);
            $type = checkType($type);
            addStore($slug, $type);
            echo view('adminlte.partials.add-custom-file',compact('key','slug','type','helpText'))->render();
        }else{
            echo "Add custom field False";
        }
    }

    function addStore($slug, $type){
        $store = json_decode(file_get_contents(base_path('database/dataJson/fieldsDefault.json')), true);
        $data = ['name'=>$slug, 'type'=>$type['name']];

        if(empty($store)){
            file_put_contents(base_path('database/dataJson/fieldsDefault.json'), json_encode([$data]));
        }else{
            file_put_contents(base_path('database/dataJson/fieldsDefault.json'), json_encode(array_merge($store,[$data])));
        }
    }

    function checkType($data){
        if (empty($data['name'])){
            $data['name'] = "text";
        }
        if (empty($data['min'])){
            $data['min'] = null;
        }
        if (empty($data['max'])){
            $data['max'] = null;
        }
        if (empty($data['required'])){
            $data['required'] = 'required';
        }
        if (empty($data['pattern'])){
            $data['pattern'] = null;
        }else{
            $data['pattern'] = 'pattern = " '.$data['pattern'].' " ';
        }
        if (empty($data['id'])){
            $data['id'] = null;
        }
        if (empty($data['class'])){
            $data['class'] = null;
        }
        return $data;
    }
}

