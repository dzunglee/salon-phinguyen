<?php

namespace App\Services;
use App\Models\Admin;
use App\Models\GroupPermission;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Support\Facades\Input;
use Mockery\Exception;
use SaliproPham\LaravelMVCSP\Service;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionService extends Service
{
    use ValidatesRequests;

    public $arrMethods = ['get','post','put','patch','delete','options','any'];

    public $types = ['system' => ['name'=>'System', 'color'=>'green'],'module' => ['name'=>'Module', 'color'=>'purple']];

    public $anyPer = 'any';

    public function getPermissionByUser($user){
        if (is_root_user($user)){
            return Permission::orderBy('name')->get();
        }
        return $user->getAllPermissions();
    }

    public function getPermissionList(){
        $s = request()->get('s','');
        $t = request()->get('t','');
        $query = Permission::query();
        if (!empty($s))
            $query->where('name', 'like', '%'.$s.'%');
        if (!empty($t) && is_array($t)){
            $query->where(function ($query) use ($t){
                foreach ($t as $value){
                    $query->orWhere('type', 'like', $value);
                }
            });
        }
        return $query->orderBy('name')->paginate(config('w3cms.items_per_page'))->appends(Input::except('page'));
    }

    public function getPermissionById($id){
        return Permission::find($id);
    }

    public function store(){

        $res = (object)[
            'errorCode' => 200,
            'message' =>'Create new permission successfully'
        ];

        $data = $this->validate(request(),[
            'name' => 'required|max:255|regex:/^[a-z_]+$/',
            'path' => 'nullable|max:255',
            'method' => 'nullable|max:255',
            'type' => 'nullable|max:255',
            'description' => 'nullable|max:255'
        ]);
        try {
            if (!Permission::create($data)){
                $res->errorCode = 400;
                $res->message = 'Can not create permission';
            }
        }catch (\Exception $e){
            $res->errorCode = 400;
            $res->message = $e->getMessage();
        }

        return $res;
    }

    public function update($id){
        $res = (object)[
            'errorCode' => 200,
            'message' =>'Update permission successfully'
        ];
        $data = $this->validate(request(),[
            'nameU' => 'required|max:255|regex:/^[a-z_]+$/',
            'pathU' => 'nullable|max:255',
            'methodU' => 'nullable|max:255',
            'typeU' => 'nullable|max:255',
            'descriptionU' => 'nullable|max:255'
        ]);
        $newData = [
            'name' => $data['nameU'],
            'path' => $data['pathU'],
            'method' => $data['methodU'],
            'type' => $data['typeU'],
            'description' => $data['descriptionU']
        ];
        try{
            Permission::where('id',$id)->update($newData);
        }catch (Exception $e){
            $res->errorCode = 400;
            $res->message = $e->getMessage();
        }
        return $res;
    }

    public function destroy($id){
        $res = (object)[
            'errorCode' => 200,
            'message' =>'Delete permission successfully'
        ];
        if(!Permission::destroy($id)){
            $res->errorCode = 1;
            $res->message = 'Can not delete permission';
        }
        return $res;
    }
}
