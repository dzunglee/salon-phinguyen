<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PageTag extends Model
{
    public $table = 'page_tag';
    
    protected $fillable = [
        'page_id','tag_id'
    ];

    public function post(){
        return $this->belongsTo('Modules\Post\Models\Page');
    }

    public function tag(){
        return $this->belongsTo('Modules\Post\Models\PTag');
    }
}