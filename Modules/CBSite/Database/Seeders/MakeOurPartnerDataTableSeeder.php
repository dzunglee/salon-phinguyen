<?php

namespace Modules\CBSite\Database\Seeders;

use App\Models\Attribute;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MakeOurPartnerDataTableSeeder extends Seeder
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
        Model::unguard();

        Post::where('slug', 'our-partners')->forcedelete();

        $postData = [
            'id' => '8',
            'title' => $this->multiLanguage(
                'OUR PARTNERS',
                null
            ),
            'title_seo' => 'OUR PARTNERS',
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
            'slug' => 'our-partners',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();

        $attributeData = [
            [
                'display_name' => 'Partners 1',
                'name' => 'partners-1',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'https://place-hold.it/200x100',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Partners 2',
                'name' => 'partners-2',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'https://place-hold.it/200x100',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Partners 3',
                'name' => 'partners-3',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'https://place-hold.it/200x100',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Partners 4',
                'name' => 'partners-4',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'https://place-hold.it/200x100',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Partners 5',
                'name' => 'partners-5',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'https://place-hold.it/200x100',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Partners 6',
                'name' => 'partners-6',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'https://place-hold.it/200x100',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Partners 7',
                'name' => 'partners-7',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'https://place-hold.it/200x100',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Partners 8',
                'name' => 'partners-8',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'https://place-hold.it/200x100',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Partners 9',
                'name' => 'partners-9',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'https://place-hold.it/200x100',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Partners 10',
                'name' => 'partners-10',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'https://place-hold.it/200x100',
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
