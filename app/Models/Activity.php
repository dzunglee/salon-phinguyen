<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Activity extends Model
{
    //
    public $table = 'admin_activities';

    use SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'admin_id','action','type','content','attachment'
    ];

    public function admin(){
        return $this->belongsTo('App\Models\Admin');
    }
}
