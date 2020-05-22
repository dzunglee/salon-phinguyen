<?php
namespace App\Classes;

use App\Models\Admin;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Permission;

use Illuminate\Contracts\Auth\Access\Gate as GateContract;

class AdminAuth extends Auth{

    private static $singletonObj = null;
    public $allMethod = 'any';

    public static function getInstance() {
        if (self::$singletonObj !== null) {
            return self::$singletonObj;
        }
        self::$singletonObj = new self();
        return self::$singletonObj;
    }

    public static function checkAuth($permissionName = ''){
        if(!$permissionName){
            $object = self::getInstance();
            return $object->checkByRoute();
        }
        return self::user()->can($permissionName);
    }

    public function checkByRoute(){
        $method = request()->method();
        $path = request()->path();
        $list = explode('/', $path);
        if($list){
            $permissionList = $this->getPermissionListForRoute($list);
//            dd($permissionList);
            for( $i = 0; $i < sizeof($permissionList); $i++ ){
                $permissionName = Permission::
                    where('path', $permissionList[$i])
                    ->where(function($query) use ($method)
                    {
                        $query->where('method', $method)
                            ->orWhere('method', $this->allMethod);
                    })
                    ->pluck(config('permission.cache.model_key'))->first();

                if($permissionName){
                    return self::user()->can($permissionName);
                }
            }
            return true;
        }
        return true;
    }

    public function getPermissionListForRoute($list){
        $listPermission = [];
        $this->createPermissionPaths($listPermission, $list[0], $list, 1);
        return $listPermission;
    }

    public function createPermissionPaths(&$listPermission, $path, $list, $index){
        if($index >= sizeof($list)){
            $temp = [];
            while (strpos($path, '*/*')){
                array_push($temp, $path);
                $path = str_replace('*/*', '*', $path);
            }
            array_push($temp, $path);

            for($i = sizeof($temp) - 1; $i >= 0; $i--){
                if(!in_array($temp[$i], $listPermission)){
                    array_push($listPermission, $temp[$i]);
                }
            }
            return;
        }
        $this->createPermissionPaths($listPermission, $path.'/*', $list, $index+1);
        $this->createPermissionPaths($listPermission, $path.'/'.$list[$index], $list, $index+1);
    }
}