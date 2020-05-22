<?php

namespace App\Services;
use App\Classes\UploadFile;
use App\Models\Admin;
use Illuminate\Support\Facades\Input;
use SaliproPham\LaravelMVCSP\Service;

class AdminService extends Service
{
    public function getList($search = ""){
        $query = Admin::query();
        if (!empty($search))
            $query->where('name', 'like', '%'.$search.'%');
        $list = $query->paginate(config('w3cms.items_per_page'))->appends(Input::except('page'));
        foreach ($list as &$item){
            $item->roles = $item->getRoleNames();
        }
        return $list;

    }
    public function getListAll(){
        return Admin::all();
    }

    public function get($id = ""){
        return Admin::find($id);
    }

    public function getByEmail($email){
        return Admin::where('email',$email)->first();
    }

    public function create($data, $roles){

        $avatar = request()->input('avatar',null);
        if (!$avatar){
            $data['avatar'] = 'https://place-hold.it/300';
        }
        $data['password'] = bcrypt($data['password']);
        $user = Admin::create($data);
        $user->assignRole($roles);
        return $user;
    }

    public function update($admin, $data, $roles){

        $res = (object)[
            'errorCode' => 200,
            'message' => 'User updated successfully'
        ];
        try{
            if ($data['password']){
                $data['password'] = bcrypt($data['password']);
            }else{
                unset($data['password']);
            }

            $avatar = request()->input('avatar',null);
            if (!$avatar){
                $data['avatar'] = 'https://place-hold.it/300';
            }

            $admin->fill($data);
            $admin->save();
            $admin->syncRoles($roles);
        }catch (\Exception $e){
            $res->errorCode = 1;
            $res->message = $e->getMessage();
        }
        return $res;
    }

    public function destroy($id){
        return Admin::destroy($id);
    }

    public function handleUploadFile($file){
        $folder = 'images/avatars';
        return UploadFile::uploadSquareImage($file, $folder);
    }

}
