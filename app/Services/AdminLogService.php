<?php

namespace App\Services;
use App\Classes\AdminAuth;
use App\Models\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;
use SaliproPham\LaravelMVCSP\Service;

class AdminLogService extends Service
{
    public function getList($all = false){
        $sortBy = "id";
        $order = "id";

        $data = Log::query()->with(['admin']);

//        if(request()->input('id') != ''){
//            $data = $data->where('id', request()->input('id'));
//        }

        if(request()->input('method') != ''){
            $data = $data->where('method',request()->input('method'));
        }

        if(request()->input('path') != ''){
            $data = $data->where('path',request()->input('path'));
        }

        if(request()->input('ip') != ''){
            $data = $data->where('ip',request()->input('ip'));
        }

        if(!$all){
            $userID = json_decode(Auth::guard(config('w3cms.auth.guard'))->user())->id;
            $data = $data->where('admin_id', $userID);
        }else{
            if(request()->input('admin_id') != ''){
                $data = $data->where('admin_id', request()->input('admin_id'));
            }
        }


        return $data->orderBy($sortBy, $order)->paginate(config('w3cms.items_per_page'))->appends(Input::except('page'));
    }

    public function create($data){
        return Log::create($data);
    }

    public function delete($all = false){
        $userID = json_decode(Auth::guard(config('w3cms.auth.guard'))->user())->id;
        $lastLogID = Log::orderBy('id', 'desc')->where('admin_id', $userID)->first()->id;

        if($all){
            return  Log::whereNotIn('id', [$lastLogID])
                ->delete();
        }else{
            return Log::where('admin_id', $userID)
                ->whereNotIn('id', [$lastLogID])
                ->delete();
        }
    }
}
