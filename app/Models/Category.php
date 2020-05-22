<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasRoles;
    
    //
    public $table = 'categories';
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'category_name','parent_id','order','slug'
    ];

    public function posts(){
        return $this->hasMany(Post::class,'category_id');
    }
}
