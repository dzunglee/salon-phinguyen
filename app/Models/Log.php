<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Log extends Model
{
    //
    public $table = 'admin_logs';

    use SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'admin_id','method','method','path','ip','input'
    ];

    public function admin(){
        return $this->belongsTo('App\Models\Admin');
    }
}
