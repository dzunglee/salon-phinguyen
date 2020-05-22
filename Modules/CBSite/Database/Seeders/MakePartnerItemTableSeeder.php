<?php

namespace Modules\CBSite\Database\Seeders;

use App\Models\Attribute;
use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class  MakePartnerItemTableSeeder extends Seeder
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
        for ($i = 1; $i < 9; $i++) {
            Post::where('slug', str_slug('Partner '.$i))->forcedelete();
        }

        $arrImage = [
            '/storage/default/Our clients/1280px-Coca-Cola_logo.svg.png',
            '/storage/default/Our clients/logo_m1.png',
            '/storage/default/Our clients/logo_bitis.png',
            '/storage/default/Our clients/logo_mpasingapore.png',
            '/storage/default/Our clients/logo_avigo.png',
            '/storage/default/Our clients/logo_vnpt.png',
            '/storage/default/Our clients/logo_watasensor.png',
            '/storage/default/Our clients/logo_vungtautsc.png',
            '/storage/default/Our clients/logo_quangbinh.png',
        ];
        $postData = [];

        foreach($arrImage as $key => $item){
            array_push($postData,[
                'title' => 'Partner '.$i,
                'title_seo' => 'Partner '.$i,
                'description' => '',
                'content' => '',
                'post_type' => null,
                'editor' => 1,
                'author' => 1,
                'photo' => $item,
                'slug' => str_slug('Partner '.$i),
                'category_id' => null,
                'is_published' => 1,
                'created_at' => date("Y-m-d h:m:s")
            ]);
        }

        foreach ($postData as $key => $item){
            $post = Post::create($item);

            DB::table('post_tag')->insert(
                ['post_id' => $post->id, 'tag_id' => 5]
            );
        }
    }
}
