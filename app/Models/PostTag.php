<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PostTag extends Model
{
    public $table = 'post_tag';
    
    protected $fillable = [
        'post_id','tag_id'
    ];

    public function post(){
        return $this->belongsTo('Modules\Post\Models\Post');
    }

    public function tag(){
        return $this->belongsTo('Modules\Post\Models\Tag');
    }
}