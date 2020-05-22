<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomizerMenuTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customizer_menu_types', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title',50);
            $table->string('slug',50)->unique();
            $table->tinyInteger('order')->nullable();
            $table->string('type',50)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customizer_menu_types');
    }
}
