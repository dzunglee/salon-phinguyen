<?php
/**
 * Created by PhpStorm.
 * User: dzung
 * Date: 11/16/2018
 * Time: 4:01 PM
 */

namespace App\Traits;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;

trait AuthorizeTrait {

    public $cmsPath = 'cms';

    public function checkAuth($permission = null){
        return true;
        $request = request();
        $user = Auth::guard(config('w3cms.auth.guard'))->user();
        $path = substr($request->path(),strlen($this->cmsPath));
        $method = $request->method();
        if (is_root_user($user)){
            return true;
        }
        if (empty($path)){
            return true;
        }
        if ($permission){
            if ($user->can($permission)){
                return true;
            }
            return false;
            
        }else{
            //check wildcard
            $index = indexOfCharactersInString($path,'/',0);
            foreach ($index as $position){
                $wildcard = substr($path,0,strlen($path) - (strlen($path) - $position - 1));
                if ($user->can(strtolower(str_slug($wildcard.'-all-'.'any')))){
                    return true;
                }
                if ($user->can(strtolower(str_slug($wildcard.'-all-'.$method)))){
                    return true;
                }
            }
            $path = substr($path,1, strlen($path) - 1);
            if ($user->can(name_with_method($path, 'any')))
                return true;
            if ($user->can(name_with_method($path, $method)))
                return true;
        }
        return abort(403, 'Unauthorized');
    }
}