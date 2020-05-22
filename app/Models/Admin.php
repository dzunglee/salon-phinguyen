<?php

namespace App\Models;

//use Illuminate\Contracts\Auth\Admin as Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
//use Spatie\Permission\Traits\HasRoles;

use App\Notifications\AdminResetPasswordNotification;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class Admin extends Authenticatable
{
    use HasRoles;
    use Notifiable;
    use SoftDeletes;
    protected $guard_name = 'cms';

    protected $fillable = [
        'name', 'email', 'password','level', 'is_active', 'avatar'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new AdminResetPasswordNotification($token));
    }

    public function isSuperAdmin(){
        return $this->level == 0;

    }
}
