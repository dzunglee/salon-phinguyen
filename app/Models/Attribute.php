<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Attribute extends Model
{
    use HasTranslations;
    public $translatable = ['content'];

    protected $fillable = ['display_name', 'name', 'description', 'type', 'content', 'entity_id', 'entity_type', 'default'];
}
