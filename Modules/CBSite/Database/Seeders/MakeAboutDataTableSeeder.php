<?php

namespace Modules\CBSite\Database\Seeders;

use App\Models\Attribute;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MakeAboutDataTableSeeder extends Seeder
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
        Post::where('title', 'about-us')->forcedelete();
        $postData = [
            'id' => '2',
            'title' => $this->multiLanguage(
                'ABOUT US',
                null
            ),
            'title_seo' => 'ABOUT US',
            'description' => $this->multiLanguage(
                'Combros is established by Engineers from Electrical and Technology of HCMC University of Technology in 2015 and specializes in automation, embedded technology and smart solutions with its head office in Ho Chi Minh City, Vietnam. <p></p><p>Joining Suga Group in 2017 made Combros convert into an officially professional company and took advantage of resources from other teams in Suga Group, which is the foundation to become the leading company in Industry 4.0 trend and IoT platform.</p>',
                null
            ),
            'content' => $this->multiLanguage(
                'Combros is established by Engineers from Electrical and Technology of HCMC University of Technology in 2015 and specializes in automation, embedded technology and smart solutions with its head office in Ho Chi Minh City, Vietnam. <p></p><p>Joining Suga Group in 2017 made Combros convert into an officially professional company and took advantage of resources from other teams in Suga Group, which is the foundation to become the leading company in Industry 4.0 trend and IoT platform.</p>',
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => $this->multiLanguage('/storage/default/SVG/desktop.svg',null),
            'slug' => 'about-us',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();

        $attributeData = [
            [
                'display_name' => 'Video',
                'name' => str_slug('video'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "https://www.youtube.com/watch?v=Eersi9ymeko",
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'banner-mobile',
                'name' => str_slug('banner-mobile'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "/storage/default/SVG/Mobile.svg",
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
