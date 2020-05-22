<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class CustomizerMenuItem extends Model
{
    use HasTranslations;
    public $translatable = ['title'];

    protected $table = 'customizer_menus';

    protected $fillable = ['parent_id', 'order', 'title', 'icon', 'uri', 'type', 'menu_type_id'];

    public function menu(){
        return $this->belongsTo(CustomizerMenuType::class,'menu_type_id');
    }
}
