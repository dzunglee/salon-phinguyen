<?php

namespace App\Classes;

use App\Models\Log;

class AdminLog
{
    public static function store($req, $user){
        if($req->path() == 'admin/logs'){return;}

        $userInfo = json_decode($user);
        $data = [
            'admin_id' =>  $userInfo->id,
            'method' =>  $req->method(),
            'path' =>  $req->path(),
            'ip' =>  $req->ip(),
            'input' => json_encode($req->all())];
        Log::create($data);
    }

}