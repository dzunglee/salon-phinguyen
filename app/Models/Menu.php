<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Traits\HasRoles;

class Menu extends Model
{
    use HasRoles;

    protected $guard_name = 'cms';

    protected $table = 'admin_menu';

    protected $fillable = [
        'parent_id', 'order', 'title', 'icon', 'uri', 'type'
    ];
}

