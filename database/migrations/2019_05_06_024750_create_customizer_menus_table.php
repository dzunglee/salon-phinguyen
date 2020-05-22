<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomizerMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customizer_menus', function (Blueprint $table) {
            $table->increments('id');
            $table->tinyInteger('parent_id')->default(0);
            $table->tinyInteger('order')->nullable();
            $table->string('title',50);
            $table->string('icon',50)->nullable();
            $table->string('uri',50)->nullable();
            $table->string('type',50)->nullable();
            $table->unsignedInteger('menu_type_id',false);
            $table->foreign('menu_type_id')->references('id')->on('customizer_menu_types')->onDelete('cascade');;
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
        Schema::dropIfExists('customizer_menus');
    }
}
