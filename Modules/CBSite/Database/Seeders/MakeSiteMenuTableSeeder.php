<?php

namespace Modules\CBSite\Database\Seeders;

use App\Models\CustomizerMenuItem;
use App\Models\CustomizerMenuType;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MakeSiteMenuTableSeeder extends Seeder
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
    public $en = 'en';
    public $vi = 'vi';
    public function run()
    {
        DB::statement("SET foreign_key_checks=0");
        DB::table('customizer_menu_types')->truncate();
        DB::table('customizer_menus')->truncate();
        DB::statement("SET foreign_key_checks=1");

        CustomizerMenuType::create([
            'id' => '1',
            'title' => 'Suga menu',
            'slug' => 'suga-menu',
        ]);

        CustomizerMenuType::create([
            'id' => '2',
            'title' => 'Socials menu',
            'slug' => 'socials-menu',
        ]);

        $sugaMenuItems = [
            [
                'id' => '1',
                'parent_id' => '0',
                'order' => null,
                'title' => $this->multiLanguage(
                    'About',
                    null
                ),
                'icon' => 'fa-home',
                'uri' => '#about-us',
                'type' => 'link',
                'menu_type_id' => '1',
            ],
            [
                'id' => '2',
                'parent_id' => '0',
                'order' => null,
                'title' => $this->multiLanguage(
                    'Portfolio',
                    null
                ),
                'icon' => 'fa-home',
                'uri' => '#portfolio',
                'type' => 'link',
                'menu_type_id' => '1',
            ],
            [
                'id' => '3',
                'parent_id' => '0',
                'order' => null,
                'title' => $this->multiLanguage(
                    'Partners',
                    null
                ),
                'icon' => 'fa-home',
                'uri' => '#partner',
                'type' => 'link',
                'menu_type_id' => '1',
            ],
            [
                'id' => '4',
                'parent_id' => '0',
                'order' => null,
                'title' => $this->multiLanguage(
                    'Blog',
                    null
                ),
                'icon' => 'fa-home',
                'uri' => '#blog',
                'type' => 'link',
                'menu_type_id' => '1',
            ],
            [
                'id' => '5',
                'parent_id' => '0',
                'order' => null,
                'title' => $this->multiLanguage(
                    'Contact',
                    null
                ),
                'icon' => 'fa-home',
                'uri' => '#contact',
                'type' => 'link',
                'menu_type_id' => '1',
            ],
            [
                'id' => '6',
                'parent_id' => '1',
                'order' => null,
                'title' => $this->multiLanguage(
                    'About us',
                    null
                ),
                'icon' => 'fa-home',
                'uri' => '#about',
                'type' => 'link',
                'menu_type_id' => '1',
            ],
            [
                'id' => '7',
                'parent_id' => '1',
                'order' => null,
                'title' => $this->multiLanguage(
                    'Our services',
                    null
                ),
                'icon' => 'fa-home',
                'uri' => '#our-services',
                'type' => 'link',
                'menu_type_id' => '1',
            ],
            [
                'id' => '8',
                'parent_id' => '1',
                'order' => null,
                'title' => $this->multiLanguage(
                    'Our dominance',
                    null
                ),
                'icon' => 'fa-home',
                'uri' => '#our-skill',
                'type' => 'link',
                'menu_type_id' => '1',
            ],
            [
                'id' => '9',
                'parent_id' => '1',
                'order' => null,
                'title' => $this->multiLanguage(
                    'Our team',
                    null
                ),
                'icon' => 'fa-home',
                'uri' => '#our-team',
                'type' => 'link',
                'menu_type_id' => '1',
            ],
        ];


        $socialMenuItems = [
            [
                'id' => '10',
                'parent_id' => '0',
                'order' => null,
                'title' => $this->multiLanguage(
                    'Facebook',
                    null
                ),
                'icon' => 'fa-facebook-official',
                'uri' => 'https://www.facebook.com/sugagroupcorp/',
                'type' => 'link',
                'menu_type_id' => '2',
            ],
            [
                'id' => '11',
                'parent_id' => '0',
                'order' => null,
                'title' => $this->multiLanguage(
                    'Youtube',
                    null
                ),
                'icon' => 'fa-youtube-play',
                'uri' => 'https://www.youtube.com/channel/UCpAreLM0pUvnPLTpVYFlYZQ',
                'type' => 'link',
                'menu_type_id' => '2',
            ]
        ];
        foreach ($sugaMenuItems as $row) {
            DB::table('customizer_menus')->insert($row);
        }
        foreach ($socialMenuItems as $row) {
            DB::table('customizer_menus')->insert($row);
        }
    }
}
