<?php

namespace Modules\CBSite\Database\Seeders;

use App\Models\Attribute;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MakeOurDominanceDataTableSeeder extends Seeder
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
        Post::where('title', 'our-Item')->forcedelete();

        $postData = [
            'id' => '4',
            'title' => $this->multiLanguage(
                "OUR DOMINANCE",
                null
            ),
            'title_seo' => 'OUR DOMINANCE',
            'description' => $this->multiLanguage(
                null,
                null
            ),
            'content' => $this->multiLanguage(
                '<p class="MsoNormal"><span style="font-size:12.0pt;line-height:115%;font-family:
Roboto;mso-bidi-font-weight:bold">Combros is a unique and impactful player in
the market with its own advantages:<o:p></o:p></span></p>',
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => $this->multiLanguage(
                null,
                null
            ),
            'slug' => 'our-dominance',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();

        $attributeData = [
            [
                'display_name' => 'Item 1',
                'name' => 'item-1',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'Global values | 50 | /storage/default/bg-1.jpg',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s"),
                'text' => [
                    'display_name' => 'detail-1',
                    'name' => 'detail-1',
                    'type' => 'richTextEditor',
                    'content' => $this->multiLanguage(
                        '<p>As a part of Suga Group, Combros is able to access and utilize the resources and knowledge from regional to international level.</p><p> We will be a valued and trusted partner to our customers by proactively providing the most impactful and suitable solution for a wide variety of customers and establishing long-term relationships built on customer satisfaction and trust.</p><p><br></p><p><br></p>',
                        null
                    ),
                    'entity_id' => $post->id,
                    'entity_type' => 'App\Models\Post',
                    'created_at' => date("Y-m-d h:m:s"),
                ]
            ],
            [
                'display_name' => 'Item 2',
                'name' => 'item-2',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'Comprehensive solutions | 30 | /storage/default/bg-1.jpg',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s"),
                'text' => [
                    'display_name' => 'detail 2',
                    'name' => 'detail-2',
                    'type' => 'richTextEditor',
                    'content' => $this->multiLanguage(
                        '<p>Combros are always confident in applying our technology to provide comprehensive solutions from hardware devices, embedded systems, to mobile and PC applications, computer technology home, server, website to solve problems in life. </p><p>We contribute to the business activities of our customers by timely recognition of their changing needs and pursuing technologies they value.</p><p><br></p>',
                        null
                    ),
                    'entity_id' => $post->id,
                    'entity_type' => 'App\Models\Post',
                    'created_at' => date("Y-m-d h:m:s"),
                ]
            ],
            [
                'display_name' => 'Item 3',
                'name' => 'item-3',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'Creative ideas | 50 | /storage/default/bg-1.jpg',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s"),
                'text' => [
                    'display_name' => 'detail 3',
                    'name' => 'detail-3',
                    'type' => 'richTextEditor',
                    'content' => $this->multiLanguage(
                        '<p>Combros always take a customer-centric approach in all our business activities by proactively proposing creative ideas for the success of customers. </p><p>We are also eager to take the challenges with the difficulties of over – all hi-tech to provide creative ideas based on existing resources and the original idea of the customer.</p><p><br></p><p><br></p>',
                        null
                    ),
                    'entity_id' => $post->id,
                    'entity_type' => 'App\Models\Post',
                    'created_at' => date("Y-m-d h:m:s"),
                ]
            ],
            [
                'display_name' => 'Item 4',
                'name' => 'item-4',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'Give reasonable advice and solutions | 30 | /storage/default/bg-1.jpg',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s"),
                'text' => [
                    'display_name' => 'detail 4',
                    'name' => 'detail-4',
                    'type' => 'richTextEditor',
                    'content' => $this->multiLanguage(
                        '<p><font face="Roboto">Combros is an expert in providing or consulting solutions for all areas related to automation, system architecture of applications.</font></p><p><font face="Roboto"> We are confident in being proactive in technology, as well as give reasonable advice for each case of customers to ensure that solutions are implemented consistently and continuously.</font></p><p><font face="Roboto"><br></font></p><p><font face="Roboto"><br></font></p>',
                        null
                    ),
                    'entity_id' => $post->id,
                    'entity_type' => 'App\Models\Post',
                    'created_at' => date("Y-m-d h:m:s"),
                ]
            ],
            [
                'display_name' => 'Item 5',
                'name' => 'item-5',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'Fast and flexible | 50 | /storage/default/bg-1.jpg',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s"),
                'text' => [
                    'display_name' => 'detail 5',
                    'name' => 'detail-5',
                    'type' => 'richTextEditor',
                    'content' => $this->multiLanguage(
                        '<p><font face="Roboto">The technology is self-owned by Combros so it is not forced by any stereotype or any third party. </font></p><p><font face="Roboto">Therefore, Combros can offer the most suitable solution quickly according to customer capability.</font></p><p><font face="Roboto"> Flexibility in using different technologies adapted to customer requirements.</font></p><p><br></p>',
                        null
                    ),
                    'entity_id' => $post->id,
                    'entity_type' => 'App\Models\Post',
                    'created_at' => date("Y-m-d h:m:s"),
                ]
            ],
        ];

        foreach ($attributeData as $item) {
            $text = $item['text'];
            unset($item['text']);
            DB::table('attributes')->insert($item);
            DB::table('attributes')->insert($text);
        }
    }
}
