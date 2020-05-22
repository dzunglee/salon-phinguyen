<?php

namespace App\Services;
use App\Models\ExtendRole;
use App\Models\GroupPermission;
use App\Models\Menu;
use Mockery\Exception;
use SaliproPham\LaravelMVCSP\Service;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Spatie\Permission\Models\Permission;

class MenuService extends Service
{
    use ValidatesRequests;
    //
    public function store(){
        $res = (object)[
            'errorCode' => 200,
            'message' =>'Create new menu successfully'
        ];
        $type = $this->request->get('type','menu');
        if($type == 'menu'){
            $data = $this->validate(request(),[
                'parent_id' => 'required',
                'title' => 'required',
                'icon' => 'required',
                'uri' => 'required',
                'type' => 'required',
            ]);
            $menu = Menu::create($data);
            if ($menu){
                try{
                    $roles = request()->get('roles',[]);
                    $permissions = request()->get('permissions',[]);
                    $permissions = Permission::whereIn('group_permission_id',$permissions)->pluck('id')->toArray();
                    $menu->syncRoles($roles);
                    $menu->syncPermissions($permissions);
                }catch (Exception $e){
                    logger($e->getMessage());
                    $res->errorCode = 1;
                    $res->message = 'Can not set permission';
                    return $res;
                }
                return $res;
            }
        }else{
            $data = [
                'parent_id' => '0',
                'title' => 'Space',
                'icon' => 'fa-window-minimize',
                'type' => 'space',
                'uri' => '/',
            ];
            Menu::create($data);
            return $res;
        }
        $res->errorCode = 1;
        $res->message = 'Can not create menu';
        return $res;
    }

    public function update($id){
        $data = $this->validate(request(),[
            'parent_id' => 'required',
            'title' => 'required',
            'icon' => 'required',
            'uri' => 'required',
        ]);
        $res = (object)[
            'errorCode' => 200,
            'message' =>'Update menu successfully'
        ];
        $menu = Menu::find($id);
        $menu->fill($data);
        $menu->save();
        if ($menu){
            try{
                $roles = request()->get('roles',[]);
                $permissions = request()->get('permissions',[]);
                $permissions = Permission::whereIn('group_permission_id',$permissions)->pluck('id')->toArray();
                $menu->syncRoles($roles);
                $menu->syncPermissions($permissions);
            }catch (Exception $e){
                logger($e->getMessage());
                $res->errorCode = 1;
                $res->message = 'Can not set permission';
                return $res;
            }
            return $res;
        }
        $res->errorCode = 1;
        $res->message = 'Can not update menu';
        return $res;
    }

    public function destroy($id){
        $res = (object)[
            'errorCode' => 200,
            'message' =>'Delete menu successfully'
        ];
        if(!Menu::destroy($id)){
            $res->errorCode = 1;
            $res->message = 'Can not delete menu';
        }
        return $res;
    }

    public function saveMenu(){
        $res = (object)[
            'errorCode' => 200,
            'message' =>'Success'
        ];
        $data = json_decode(request()->get('data',[]));
        try{
            $this->saveArrayMenu($data,0);
            return $res;
        }catch (Exception $e){
            $res->errorCode = 1;
            $res->message = 'Can not save menu';
            logger($e->getMessage());
            return $res;
        }
    }

    public function saveArrayMenu($array = [], $parentId, $order = 0){
        foreach ($array as $item){
            $menu = Menu::find($item->id);
            $menu->parent_id = $parentId;
            $order++;
            $menu->order = $order;
            $menu->save();
            if (isset($item->children))
                $this->saveArrayMenu($item->children, $item->id,$order);
        }
    }

    public function getCreateMenuItemData(){
        $res = [
            'permissions' => [],
            'roles' => [],
            'menu' => [],
        ];
        $user = me();
        $res['menu'] = Menu::all()->toArray();
        if (is_root_user($user)){
            $res['permissions'] = GroupPermission::all();
            $res['roles'] = ExtendRole::all();
        }else{
            $res['permissions'] = GroupPermission::getGroupPermissionFromPermissions(me()->permissions()->get());
            $res['roles'] = $user->roles()->get();
        }
        return $res;
    }

    public function getEditMenuItemData($id){
        $res = [
            'item' => null,
            'roles' => null,
            'permissions' => null,
            'currentGroupPermission' => null,
            'menu' => [],
        ];
        $me = me();
        $item = Menu::find($id);
        $res['menu'] = Menu::all()->toArray();
        if ($item) {
            $currentGroupPermission = GroupPermission::getGroupPermissionFromPermissions($item->getAllPermissions(), 'array');
            $item->roles = $item->getRoleNames()->toArray();
            $currentGroupPermissionInRole = GroupPermission::getPermissionFromRoles($item->roles);
            //remove current permissions from roles
            foreach ($currentGroupPermissionInRole as $current) {
                if (in_array($current, $currentGroupPermission)) {
                    unset($currentGroupPermission[array_search($current, $currentGroupPermission)]);
                }
            }
            //
            if (is_root_user($me)) {
                $permissions = GroupPermission::all();
                $roles = ExtendRole::all();
            } else {
                $permissions = GroupPermission::getGroupPermissionFromPermissions($me->permissions()->get());
                $roles = $me->roles()->get();
            }
            $res['item'] = $item;
            $res['roles'] = $roles;
            $res['permissions'] = $permissions;
            $res['currentGroupPermission'] = $currentGroupPermission;
        }else{
            abort(404);
        }
        return $res;
    }

    public function getMenu(){
        return Menu::orderBy('order')->get()->toArray();
    }
}
