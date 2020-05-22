<?php

namespace Modules\CBSite\Database\Seeders;

use App\Models\Attribute;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MakeContactDataTableSeeder extends Seeder
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
        Post::where('slug', 'contact')->forcedelete();

        $postData = [
            'id' => '10',
            'title' => $this->multiLanguage(
                'Contact',
                null
            ),
            'title_seo' => 'Contact',
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
            'slug' => 'contact',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();

        $attributeData = [
            [
                'display_name' => 'Big title 1',
                'name' => 'big-title-1',
                'type' => 'text',
                'content' =>  $this->multiLanguage(
                    'CONTACT US NOW',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Description 1',
                'name' => 'description-1',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'By contacting us, you are welcome to have any support in relations to innovative technical field & new products invention.',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Slogan 1',
                'name' => 'slogan-1',
                'type' => 'text',
                'content' =>  $this->multiLanguage(
                    '@Combros:
                        "Born to conquer your problems
                          Born FOR SMART LIFE"',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Big title 2',
                'name' => 'big-title-2',
                'type' => 'text',
                'content' =>  $this->multiLanguage(
                    'GET IN TOUCH',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Address 2',
                'name' => 'address-2',
                'type' => 'text',
                'content' =>  $this->multiLanguage(
                    'Floor 2, 1A Truong Quoc Dung Street, Ward 8, Phu Nhuan District, Ho Chi Minh City.',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Phone 2',
                'name' => 'phone-2',
                'type' => 'text',
                'content' =>  $this->multiLanguage(
                    '(+84) 28 6682 6651',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Email 2',
                'name' => 'email-2',
                'type' => 'text',
                'content' =>  $this->multiLanguage(
                    'admin@combros.vn',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Company name',
                'name' => 'company-name',
                'type' => 'text',
                'content' =>  $this->multiLanguage(
                    'COMBROS TECHNOLOGY CO., LTD',
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
