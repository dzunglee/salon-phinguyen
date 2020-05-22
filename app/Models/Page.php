<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Page extends Model
{
    use SoftDeletes;

    protected $table = 'pages';
    protected $dates = ['deleted_at'];

    protected $fillable = ['title', 'description', 'title_seo', 'content', 'author', 'template'];

    public function getAuthor(){
        return $this->belongsTo(Admin::class, 'author');
    }

    public function tags()
    {
        return $this->belongsToMany(PTag::class, 'page_tag', 'page_id', 'tag_id');
    }

}
