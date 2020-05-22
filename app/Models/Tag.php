<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tag extends Model
{
    use HasRoles;
    use SoftDeletes;


    protected $guard_name = 'admin';
    protected $dates = ['deleted_at'];

    public $table = 'tags';

    protected $fillable = [
        'tag_name', 'slug'
    ];


}
