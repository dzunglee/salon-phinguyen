<?php

namespace App\Models;

use App\Classes\Traits\Attributes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class Post extends Model
{
    use Attributes;
    use HasTranslations;
    use SoftDeletes;

    public $table = 'posts';
    protected $dates = ['deleted_at'];
    public $translatable = ['title', 'description', 'content', 'title_seo', 'photo'];

    protected $fillable = [
        'post_name', 'title', 'description', 'content', 'post_type', 'editor', 'author', 'slug', 'photo', 'category_id', 'publish_date', 'custom_field', 'is_published', 'title_seo', 'can_delete'
    ];

    public function category()
    {
        return $this->belongsTo('App\Models\Category');
    }

    public function getEditor()
    {
        return $this->belongsTo('App\Models\Admin', 'editor');
    }

    public function getAuthor()
    {
        return $this->belongsTo('App\Models\Admin', 'author');
    }

    public function tags()
    {
        return $this->belongsToMany('App\Models\Tag', 'post_tag');
    }

}
