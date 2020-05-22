<?php

namespace Modules\CBSite\Database\Seeders;

use App\Models\Attribute;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MakeWhatWeDoDataTableSeeder extends Seeder
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
        Post::where('slug', 'what-we-do')->forcedelete();

        $postData = [
            'id' => '3',
            'title' => $this->multiLanguage(
                "WHAT WE DO",
                null
            ),
            'title_seo' => 'WHAT WE DO',
            'description' => $this->multiLanguage(
                "COMBROS is established by Engineers from Electrical and Technology of Bach Khoa University",
                null
            ),
            'content' => $this->multiLanguage(
                "COMBROS is established by Engineers from Electrical and Technology of Bach Khoa University. Combros members all have the same passions for technology and engineering, which desire to bring wisdom and talents to create products and services to serve the community and society. Start up with some team members, now Combros converted to an official professional company and joined the technology market in VietNam. We develop contiuously and expand into the future.",
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => $this->multiLanguage(null,null),
            'slug' => 'what-we-do',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();

        $attributeData = [
            [
                'display_name' => 'Detail 1',
                'name' => 'detail-1',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Technology Solutions | We are also eager to take the challenges with the difficulties of over - all hi-tech. We are now master in the technology in automation systems and circuits, electricity, mobile and PC applications, computer technology home, internet,...We are ready and confident in designing and building systems solve problems in the life",
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Detail 2',
                'name' => 'detail-2',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Hi-tech Products | In order to improve the work efficiency, the quality of community life. Combros contiuously observes and collects from the life demands, where we define, buid and provide the effective product.",
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Detail 3',
                'name' => 'detail-3',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Outsourcing | We are ready to help and cooperate with every partner to word and build their ideas to success together",
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Detail 4',
                'name' => 'detail-4',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "ODM - Original Design Manufacturing | Combros accepts any challenges about solution from customers or partners to find out solutions and build from A to Z for successful products or services.",
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
