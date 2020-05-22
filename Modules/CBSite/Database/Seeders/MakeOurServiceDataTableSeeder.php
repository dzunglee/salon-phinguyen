<?php

namespace Modules\CBSite\Database\Seeders;

use App\Models\Attribute;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MakeOurServiceDataTableSeeder extends Seeder
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
        Post::where('title', 'our-services')->forcedelete();

        $postData = [
            'id' => '6',
            'title' => $this->multiLanguage(
                'OUR SERVICES',
                null
            ),
            'title_seo' => 'OUR SERVICES',
            'description' => $this->multiLanguage(
                'With 4 years of experience in the automation systems and the knowledge from global technology market, we are always confident in designing and building systems to solve problems in life for wide variety of customers.',
                null
            ),
            'content' => $this->multiLanguage(
                '<p>With 4 years of experience in the automation systems and the knowledge from global technology market, we are always confident in designing and building systems to solve problems in life for wide variety of customers.</p><p>No matter which segment you are in and what your needs are, Combros promises to strive for the best understanding and bring result that satisfies your desire by providing the most effective solutions, including:</p>',
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => $this->multiLanguage(
                null,
                null
            ),
            'slug' => 'our-services',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();

        $attributeData = [
            [
                'display_name' => 'Service 1',
                'name' => str_slug('Service 1'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    '/storage/default/SVG/service_icon.svg | Technology Solutions |As an impactful player in the market, we are honored to master in automation systems and circuits, electricity, mobile and PC applications. We use advanced technologies together with local understandings to provide the most impactful and suitable solutions for customer. Our technology-based platforms help us create value for our partners throughout various stages of customer lifecycle.',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Service 2',
                'name' => str_slug('Service 2'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    '/storage/default/SVG/service_setting.svg | Hi-tech Products | Since our foundation, our aim has been to pursue technology innovation based on our belief in the infinite possibilities of technological development. Combros continuously observes and collects from the life demands, where we define, build and provide the effective product. we are confident in designing and building hi-tech products in order to improve the work efficiency, the quality of community life.',
                    null
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Service 2',
                'name' => str_slug('Service 3'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    '/storage/default/SVG/service_box.svg | Outsourcing | We are ready to cooperate with every partner to work and turn their ideas into reality. We are committed to becoming trusted and valued partner. Our commitment is the high quality of our products, customer satisfaction and spirit of excellence. The expertise in products, applications and technology is our strength.',
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
