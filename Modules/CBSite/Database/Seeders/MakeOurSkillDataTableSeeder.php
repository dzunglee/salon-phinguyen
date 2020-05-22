<?php

namespace Modules\CBSite\Database\Seeders;

use App\Models\Attribute;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class MakeOurSkillDataTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        Post::where('title', 'our-skill')->forcedelete();

        $postData = [
            'id' => '4',
            'title' => 'OUR SKILL',
            'title_seo' => 'OUR SKILL',
            'description' => '',
            'content' => '',
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => $this->multiLanguage(
                null,
                null
            ),
            'slug' => 'our-skill',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        $post = Post::create($postData);

        $attributeData = [
            [
                'display_name' => 'Skill 1',
                'name' => 'skill-1',
                'type' => 'text',
                'content' => 'Mobile App Service | 95',
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Skill 2',
                'name' => 'skill-2',
                'type' => 'text',
                'content' => 'Server / Soft Service | 90',
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Skill 3',
                'name' => 'skill-3',
                'type' => 'text',
                'content' => 'Cross Platform | 75',
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Skill 4',
                'name' => 'skill-4',
                'type' => 'text',
                'content' => 'Embedded System | 85',
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Skill 5',
                'name' => 'skill-5',
                'type' => 'text',
                'content' => 'Circuit Design | 75',
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
        ];

        foreach ($attributeData as $item) {
            Attribute::create($item);
        }
    }
}
