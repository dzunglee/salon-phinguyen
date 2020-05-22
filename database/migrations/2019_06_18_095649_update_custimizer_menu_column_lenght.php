<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateCustimizerMenuColumnLenght extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('customizer_menus', function (Blueprint $table) {
            $table->string('title',100)->change();
            $table->string('icon',100)->nullable()->change();
            $table->string('uri',100)->nullable()->change();
            $table->string('type',100)->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('customizer_menus', function (Blueprint $table) {
            $table->string('title',50)->change();
            $table->string('icon',50)->nullable()->change();
            $table->string('uri',50)->nullable()->change();
            $table->string('type',50)->nullable()->change();
        });
    }
}
