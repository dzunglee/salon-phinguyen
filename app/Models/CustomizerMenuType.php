<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomizerMenuType extends Model
{

    protected $table = 'customizer_menu_types';

    protected $fillable = ['title','slug','order','type'];

    public function menuItems(){
        return $this->hasMany(CustomizerMenuItem::class,'menu_type_id','id');
    }
}
