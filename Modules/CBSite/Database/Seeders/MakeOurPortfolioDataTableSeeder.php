<?php

namespace Modules\CBSite\Database\Seeders;

use App\Models\Attribute;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MakeOurPortfolioDataTableSeeder extends Seeder
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
        Post::where('title', 'our-portfolio')->forcedelete();

        $postData = [
            'id' => '7',
            'title' => $this->multiLanguage(
                'OUR PORTFOLIO',
                null
            ),
            'title_seo' => 'OUR PORTFOLIO',
            'description' =>  $this->multiLanguage(
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
            'photo' => $this->multiLanguage('/storage/default/coverpageCombros1400x350.jpg',null),
            'slug' => 'our-portfolio',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();

        $attributeData = [
            [
                'display_name' => 'Banner mobile',
                'name' => str_slug('Banner mobile'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    '/storage/default/banner-mobile.png',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ]
        ];

        foreach ($attributeData as $item) {
            DB::table('attributes')->insert($item);
        }
    }
}
