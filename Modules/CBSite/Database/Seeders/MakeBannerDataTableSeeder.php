<?php

namespace Modules\CBSite\Database\Seeders;

use App\Models\Attribute;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MakeBannerDataTableSeeder extends Seeder
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
        Post::where('title', 'banner')->forcedelete();

        $postData = [
            'id' => '1',
            'title' => $this->multiLanguage(
                'Banner',
                null
            ),
            'title_seo' => 'Banner',
            'description' => $this->multiLanguage(
                null,
                null
            ),
            'content' =>  $this->multiLanguage(
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
            'slug' => 'banner',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();

        $attributeData = [
            [
                'display_name' => 'Big title',
                'name' => 'big-title',
                'type' => 'text',
                'content' =>  $this->multiLanguage(
                    'FOR SMART LIFE',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Description',
                'name' => 'description',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'Innovation is the fuel that keeps Combros thriving and striving, on your behalf to create value, relevance and differentiation in all products and services.<br>
“Without innovation there is no progress; it’s the most important thing that Combros – and any business can do to keep pace and get ahead”.',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
        ];

        foreach ($attributeData as $item) {
            DB::table('attributes')->insert($item);
        }
    }
}
