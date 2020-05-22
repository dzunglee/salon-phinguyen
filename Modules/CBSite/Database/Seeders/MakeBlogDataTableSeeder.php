<?php

namespace Modules\CBSite\Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MakeBlogDataTableSeeder extends Seeder
{
    public $lang = ['en'=>'en', 'vi'=>'vi'];

    public function multiLanguage($en = null, $vi = null){
        $data = json_encode([$this->lang['en']=>$en,$this->lang['vi']=>$vi]);
        $data = str_replace("\\/", "/", $data);
        return $data;
    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::where('title', 'blog')->forcedelete();

        $postData = [
            'id' => '9',
            'title' => $this->multiLanguage(
                'BLOG',
                null
            ),
            'title_seo' => 'BLOG',
            'description' => $this->multiLanguage(
                null,
                null
            ),
            'content' => $this->multiLanguage(
                null,
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => $this->multiLanguage(
                null,
                null
            ),
            'slug' => 'blog',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
    }
}
