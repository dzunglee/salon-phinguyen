<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Database\Eloquent\SoftDeletes;

class PTag extends Model
{
    use HasRoles;
    use SoftDeletes;


    protected $guard_name = 'admin';
    protected $dates = ['deleted_at'];

    public $table = 'page_tags';

    protected $fillable = [
        'tag_name', 'slug'
    ];

    public function pages()
    {
        return $this->belongsToMany(Page::class, 'page_tag', 'tag_id', 'page_id');
    }


}
