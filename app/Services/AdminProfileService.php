<?php

namespace App\Services;
use App\Classes\UploadFile;
use App\Models\Activity;
use Illuminate\Support\Facades\Auth;
use SaliproPham\LaravelMVCSP\Service;

class AdminProfileService extends Service
{
    public function update($admin, $data){
        if($admin->email == $data['email']){
            unset($data['email']);

        }

        if ($data['password']){
            $data['password'] = bcrypt($data['password']);
        }else{
            unset($data['password']);
        }

        $avatar = \request()->file('avatar',null);
        if ($avatar){
            $data['avatar'] = $this->handleUploadFile($avatar);
        }
        $admin->fill($data);
        $admin->save();
    }

    public function updateProfile($admin, $data){
        $admin->fill($data);
        return $admin->save();
    }

    public function updateAvatar($admin, $avatar){
        if(!$avatar){
            $avatar = 'https://place-hold.it/300';
        }
        $data['avatar'] = $avatar;
        $admin->fill($data);
        $admin->save();
        return $data;
    }

    public function loadActivity($lastID)    {
        $userID = json_decode(Auth::guard(config('w3cms.auth.guard'))->user())->id;
        $activities = Activity::where('admin_id', $userID)->where('id','<',$lastID)->orderBy('id','id')->limit(5)->get();

        if(!$activities->isEmpty())
        {
            return response(view('pages.user.list_activities'), 200);
        }else{
            return response('No thing to show', 400);
        }
    }

}
