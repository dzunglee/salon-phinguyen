<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->longText('title')->nullable();
            $table->string('title_seo')->nullable();
            $table->longText('description')->nullable();
            $table->string('description_seo')->nullable();
            $table->longText('content')->nullable();
            $table->string('post_type')->nullable();
            $table->unsignedInteger('editor')->nullable();
            $table->unsignedInteger('author')->nullable();
            $table->longText('photo')->nullable();
            $table->string('slug')->nullable();
            $table->longText('custom_field')->nullable();
            $table->unsignedInteger('category_id')->nullable();
            $table->date('publish_date')->nullable();
            $table->boolean('is_published')->nullable();
            $table->boolean('can_delete')->default(true);
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('editor')->references('id')->on('admins');
            $table->foreign('author')->references('id')->on('admins');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
