<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddParentPermission extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('permissions', function (Blueprint $table) {
            $table->unsignedInteger('group_permission_id')->after('guard_name')->nullable();
            $table->string('method')->after('guard_name');
            $table->dropColumn('path');
            $table->dropColumn('description');
            $table->foreign('group_permission_id')->references('id')->on('group_permission')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('permissions', function (Blueprint $table) {
            $table->dropColumn('group_permission_id');
        });
    }
}
