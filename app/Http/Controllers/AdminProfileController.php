<?php

namespace App\Http\Controllers;

use App\Classes\ActivityLogs;
use App\Models\Activity;
use App\Models\ExtendRole;
use App\Models\GroupPermission;
use App\Presenters\Activity\FormatActivityDateTimePresenter;
use App\Services\AdminProfileService;

class AdminProfileController extends Controller
{

    public $service;

    public function __construct()
    {
        $this->service = service(AdminProfileService::class);
    }

    public function profile(){
        $this->title('Profile');
        $this->description('');
        $this->breadcrumb(["text"=>"Profile"]);
        $admin = me();
        return $this->view('pages.user.profile.profile', compact('admin'));
    }

    public function activity(){
        $this->title('Profile');
        $this->description('');
        $this->breadcrumb(["text"=>"Profile"]);
        $admin = me();
        $psrData = presenter(FormatActivityDateTimePresenter::class, ['admin'=>$admin]);
        return $this->view('pages.user.profile.activity', $psrData);
    }

    public function settings(){
        $this->title('Profile');
        $this->description('');
        $this->breadcrumb(["text"=>"Profile"]);
        $admin = me();
        return $this->view('pages.user.profile.settings', compact('admin'));
    }

    public function loadActivity()    {
        $activities = $this->service->loadActivity(request()->id);
        if(!$activities->isEmpty())
        {
            return response(view('pages.user.list_activities'), 200);
        }else{
            return response('No thing to show', 400);
        }
    }

    public function updateProfile(){
        $data = $this->validate(request(),[
            'name' => 'required|min:5',
        ]);
        $admin = me();

        if ($admin){
            try{
                $this->service->updateProfile($admin, $data);
                ActivityLogs::init('text','Update Profile');

                show_alert("Info updated successfully!", 'success', 'Success');
                return redirect(route('cms.profile'));

            }catch (\Exception $err){
                show_alert($err->getMessage(), 'error', 'Error');
                return redirect()->back()->withInput();
            }
        }
        show_alert("Can not update info", 'error', 'Error');
        return redirect()->back()->withInput();
    }

    public function updatePassword(){
        $data = $this->validate(request(),[
            'password' => 'required|confirmed|min:6|max:32',
        ]);
        $admin = me();

        if ($admin){
            try{
                $data['password'] = bcrypt($data['password']);
                $this->service->updateProfile($admin, $data);

                ActivityLogs::init('text', "changed your password");
                show_alert("Password updated successfully!", 'success', 'Success');
                return redirect(route('cms.profile'));

            }catch (\Exception $err){
                show_alert($err->getMessage(), 'error', 'Error');
                return redirect()->back()->withInput();
            }
        }
        show_alert("Can not update password", 'error', 'Error');
        return redirect()->back()->withInput();
    }

    public function uploadAvatar(){
        $admin = me();
        $avatar = request()->input('avatar',null);
        if ($admin && $avatar){
            try{
                $data = $this->service->updateAvatar($admin, $avatar);
                ActivityLogs::init('image', "", "", $data['avatar']);
                return response( $data['avatar'], '200');
            }catch (\Exception $err){
                show_toast($err->getMessage(), 'error');
                return response( "Update avatar failed!", '400');
            }
        }
        return response( 'Update avatar failed!', '400');
    }

    public  function getMoreActivities(){
        $psrData = presenter(FormatActivityDateTimePresenter::class);
        return $this->view('pages.user.list_activities', $psrData);
    }

}
