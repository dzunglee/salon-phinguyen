<?php

use App\Models\Category;
use App\Models\CustomizerMenuType;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class MakeImbaData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

    public $lang = ['en' => 'en', 'vi' => 'vi'];

    public function multiLanguage($en = null, $vi = null)
    {
        $data = json_encode([$this->lang['en'] => $en, $this->lang['vi'] => $vi]);
        $data = str_replace("\\/", "/", $data);
        return $data;
    }

    public function up()
    {
        Model::unguard();
        DB::statement("SET foreign_key_checks=0");
        DB::table('attributes')->truncate();
        DB::table('posts')->truncate();
        DB::statement("SET foreign_key_checks=1");
        //MakePostTagDataTableSeeder
        Model::unguard();

        DB::statement("SET foreign_key_checks=0");
        DB::table('tags')->truncate();
        DB::statement("SET foreign_key_checks=1");

        $data = [
            [
                'id' => '1',
                'tag_name' => 'Page section',
                'slug' => 'page-section',
            ],
            [
                'id' => '2',
                'tag_name' => 'Post',
                'slug' => 'post',
            ],
            [
                'id' => '3',
                'tag_name' => 'Game',
                'slug' => 'game',
            ],
            [
                'id' => '4',
                'tag_name' => 'Team',
                'slug' => 'team',
            ],
            [
                'id' => '5',
                'tag_name' => 'Studio',
                'slug' => 'studio',
            ],
            [
                'id' => '6',
                'tag_name' => 'Job',
                'slug' => 'job',
            ],
        ];

        foreach ($data as $row) {
            Tag::create($row);
        }
        //MakePostCategory
        DB::statement("SET foreign_key_checks=0");
        DB::table('categories')->truncate();
        DB::statement("SET foreign_key_checks=1");
        $data = [
            [
                'id' => '1',
                'category_name' => 'PC',
                'parent_id' => 0,
                'order' => 1,
                'slug' => 'pc',
            ],
            [
                'id' => '2',
                'category_name' => 'Mobile',
                'parent_id' => 0,
                'order' => 1,
                'slug' => 'mobile',
            ],
        ];
        foreach ($data as $row) {
            Category::create($row);
        }
        //MakeSiteMenuTableSeeder
        DB::statement("SET foreign_key_checks=0");
        DB::table('customizer_menu_types')->truncate();
        DB::table('customizer_menus')->truncate();
        DB::statement("SET foreign_key_checks=1");

        CustomizerMenuType::create([
            'id' => '1',
            'title' => 'Imba menu',
            'slug' => 'imba-menu',
        ]);

        CustomizerMenuType::create([
            'id' => '2',
            'title' => 'Socials menu',
            'slug' => 'socials-menu',
        ]);

        $mainMenuItems = [
            [
                'id' => '1',
                'parent_id' => '0',
                'order' => null,
                'title' => $this->multiLanguage(
                    'About',
                    'About'
                ),
                'icon' => 'fa-home',
                'uri' => '#about',
                'type' => 'link',
                'menu_type_id' => '1',
            ],
            [
                'id' => '2',
                'parent_id' => '0',
                'order' => null,
                'title' => $this->multiLanguage(
                    'Games',
                    'Games'
                ),
                'icon' => 'fa-home',
                'uri' => '#games',
                'type' => 'link',
                'menu_type_id' => '1',
            ],
            [
                'id' => '3',
                'parent_id' => '0',
                'order' => null,
                'title' => $this->multiLanguage(
                    'Team',
                    'Team'
                ),
                'icon' => 'fa-home',
                'uri' => '#team',
                'type' => 'link',
                'menu_type_id' => '1',
            ],
            [
                'id' => '4',
                'parent_id' => '0',
                'order' => null,
                'title' => $this->multiLanguage(
                    'Careers',
                    'Careers'
                ),
                'icon' => 'fa-home',
                'uri' => '#careers',
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
            ]
        ];


        $socialMenuItems = [
            [
                'id' => '6',
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
                'id' => '7',
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
        foreach ($mainMenuItems as $row) {
            DB::table('customizer_menus')->insert($row);
        }
        foreach ($socialMenuItems as $row) {
            DB::table('customizer_menus')->insert($row);
        }
        //MakeBannerDataTableSeeder
        Post::where('title', 'banner')->forcedelete();

        $postData = [
            'id' => '1',
            'title' => $this->multiLanguage(
                'Banner',
                'Banner'
            ),
            'title_seo' => '',
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
            'slug' => 'banner',
            'category_id' => null,
            'is_published' => 1,
            'can_delete' => false,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 1]
        );

        $attributeData = [
            [
                'display_name' => 'Title 1',
                'name' => 'title-1',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'We make',
                    'We make'
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Title 2',
                'name' => 'title-2',
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'Games',
                    'Games'
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Item 1',
                'name' => str_slug('Item 1'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'Epic | imba/light/images/hero_slide_1.jpg',
                    'Epic | imba/light/images/hero_slide_1.jpg'
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Item 2',
                'name' => str_slug('Item 2'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'Beautiful | imba/light/images/hero_slide_2.jpg',
                    'Beautiful | imba/light/images/hero_slide_2.jpg'
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Item 3',
                'name' => str_slug('Item 3'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'Awesome | imba/light/images/hero_slide_3.jpg',
                    'Awesome | imba/light/images/hero_slide_3.jpg'
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
        ];

        foreach ($attributeData as $item) {
            DB::table('attributes')->insert($item);
        }
        //MakeAboutDataTableSeeder
        Post::where('title', 'about-us')->forcedelete();

        $postData = [
            'id' => '2',
            'title' => $this->multiLanguage(
                'ABOUT US',
                null
            ),
            'title_seo' => '',
            'description' => $this->multiLanguage(
                '',
                null
            ),
            'content' => $this->multiLanguage(
                null,
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => null,
            'slug' => 'about-us',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 1]
        );

        $attributeData = [
            [
                'display_name' => 'Title 1',
                'name' => str_slug('Title 1'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "About",
                    "About"
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Title 2',
                'name' => str_slug('Title 2'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Us",
                    "Us"
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Description',
                'name' => str_slug('Description'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "We are a dedicated team of developers, designers, artists, programmers, and most importantly gaming enthusiasts. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae ante pharetra, molestie nunc non, interdum ipsum.",
                    "We are a dedicated team of developers, designers, artists, programmers, and most importantly gaming enthusiasts. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae ante pharetra, molestie nunc non, interdum ipsum."
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Image 1',
                'name' => str_slug('Image 1'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "imba/light/images/awards.png",
                    "imba/light/images/awards.png"
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Image 2',
                'name' => str_slug('Image 2'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "imba/light/images/img7.png",
                    "imba/light/images/img7.png"
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
        ];

        foreach ($attributeData as $item) {
            DB::table('attributes')->insert($item);
        }


        //MakeOurGamesData
        Post::where('title', 'our-games')->forcedelete();

        $postData = [
            'id' => '3',
            'title' => $this->multiLanguage(
                'OUR GAMES',
                'OUR GAMES'
            ),
            'title_seo' => '',
            'description' => $this->multiLanguage(
                '',
                ''
            ),
            'content' => $this->multiLanguage(
                null,
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => null,
            'slug' => 'our-games',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 1]
        );

        $attributeData = [
            [
                'display_name' => 'Title 1',
                'name' => str_slug('Title 1'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Our",
                    "Our"
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Title 2',
                'name' => str_slug('Title 2'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Game",
                    "Game"
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Description',
                'name' => str_slug('Description'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Here at Strider games we pride ourselves in delivering rich and polished experiences that our fanbase can enjoy and immerse themselve into. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis rhoncus nibh.",
                    "Here at Strider games we pride ourselves in delivering rich and polished experiences that our fanbase can enjoy and immerse themselve into. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis rhoncus nibh."
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ]
        ];

        foreach ($attributeData as $item) {
            DB::table('attributes')->insert($item);
        }

        //MakeTheTeamData
        Post::where('title', 'the-team')->forcedelete();

        $postData = [
            'id' => '4',
            'title' => $this->multiLanguage(
                'THE TEAM',
                'THE TEAM'
            ),
            'title_seo' => '',
            'description' => $this->multiLanguage(
                '',
                ''
            ),
            'content' => $this->multiLanguage(
                null,
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => null,
            'slug' => 'the-team',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 1]
        );

        $attributeData = [
            [
                'display_name' => 'Title 1',
                'name' => str_slug('Title 1'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "The",
                    "The"
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Title 2',
                'name' => str_slug('Title 2'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Team",
                    "Team"
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Description',
                'name' => str_slug('Description'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Our passion unites us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt mi ut mauris varius, vitae lobortis erat ullamcorper. Pellentesque vel dolor non nisi fringilla scelerisque in non ante.",
                    "Our passion unites us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt mi ut mauris varius, vitae lobortis erat ullamcorper. Pellentesque vel dolor non nisi fringilla scelerisque in non ante."
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ]
        ];

        foreach ($attributeData as $item) {
            DB::table('attributes')->insert($item);
        }

        //MakeOurStudioData
        Post::where('title', 'our-studio')->forcedelete();

        $postData = [
            'id' => '5',
            'title' => $this->multiLanguage(
                'OUR STUDIO',
                'OUR STUDIO'
            ),
            'title_seo' => '',
            'description' => $this->multiLanguage(
                '',
                ''
            ),
            'content' => $this->multiLanguage(
                null,
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => null,
            'slug' => 'our-studio',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 1]
        );

        $attributeData = [
            [
                'display_name' => 'Title 1',
                'name' => str_slug('Title 1'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Our",
                    "Our"
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Title 2',
                'name' => str_slug('Title 2'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Studio",
                    "Studio"
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Description',
                'name' => str_slug('Description'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, nisl non mattis sollicitudin, risus quam tempor sem, vel interdum est libero non odio.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, nisl non mattis sollicitudin, risus quam tempor sem, vel interdum est libero non odio."
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ]
        ];

        foreach ($attributeData as $item) {
            DB::table('attributes')->insert($item);
        }

        for ($i = 0; $i < 6; $i++) {
            DB::table('attributes')->insert([
                'display_name' => 'Item ' . $i,
                'name' => str_slug('Item ' . $i),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    'imba/light/images/studio.jpg',
                    'imba/light/images/studio.jpg'
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ]);
        }
        //MakeJobOpeningData
        Post::where('title', 'job-openings')->forcedelete();

        $postData = [
            'id' => '6',
            'title' => $this->multiLanguage(
                'JOB OPENINGS',
                'JOB OPENINGS'
            ),
            'title_seo' => '',
            'description' => $this->multiLanguage(
                '',
                ''
            ),
            'content' => $this->multiLanguage(
                null,
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => null,
            'slug' => 'job-openings',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 1]
        );

        $attributeData = [
            [
                'display_name' => 'Title 1',
                'name' => str_slug('Title 1'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Job",
                    "Job"
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Title 2',
                'name' => str_slug('Title 2'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Openings",
                    "Openings"
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Description',
                'name' => str_slug('Description'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Are you a talented and motivated individual? Then we would love to have you in our team. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, nisl non mattis sollicitudin, risus quam tempor sem, vel interdum est libero non odio.",
                    "Are you a talented and motivated individual? Then we would love to have you in our team. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, nisl non mattis sollicitudin, risus quam tempor sem, vel interdum est libero non odio."
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ]
        ];

        foreach ($attributeData as $item) {
            DB::table('attributes')->insert($item);
        }

        //MakeJobOpeningData
        Post::where('title', 'get-in-touch')->forcedelete();

        $postData = [
            'id' => '7',
            'title' => $this->multiLanguage(
                'GET IN TOUCH',
                'GET IN TOUCH'
            ),
            'title_seo' => '',
            'description' => $this->multiLanguage(
                '',
                ''
            ),
            'content' => $this->multiLanguage(
                null,
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'photo' => null,
            'slug' => 'get-in-touch',
            'category_id' => null,
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        DB::table('posts')->insert($postData);
        $post = Post::all()->last();
        DB::table('post_tag')->insert(
            ['post_id' => $post->id, 'tag_id' => 1]
        );

        $attributeData = [
            [
                'display_name' => 'Title 1',
                'name' => str_slug('Title 1'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Get in",
                    "Get in"
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Title 2',
                'name' => str_slug('Title 2'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "Touch",
                    "Touch"
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'display_name' => 'Description',
                'name' => str_slug('Description'),
                'type' => 'text',
                'content' => $this->multiLanguage(
                    "We would love to hear from you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra laoreet dolor sit amet blandit. Ut suscipit nisl ut risus volutpat malesuada.",
                    "We would love to hear from you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra laoreet dolor sit amet blandit. Ut suscipit nisl ut risus volutpat malesuada."
                ),
                'entity_id' => $post->id,
                'entity_type' => 'App\Models\Post',
                'created_at' => date("Y-m-d h:m:s")
            ]
        ];

        foreach ($attributeData as $item) {
            DB::table('attributes')->insert($item);
        }

        // seed game data
        $stars = ['4', '4.5', '5'];
        $gameImage = ['imba/light/images/game4.jpg', 'imba/light/images/game.jpg'];
        $game = [
            'title' => $this->multiLanguage(
                'AURORA AWAKENING',
                'AURORA AWAKENING'
            ),
            'title_seo' => '',
            'description' => $this->multiLanguage(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis rhoncus nibh. Phasellus dignissim luctus consectetur. Fusce viverra est non purus ultrices, vel molestie massa tincidunt.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis rhoncus nibh. Phasellus dignissim luctus consectetur. Fusce viverra est non purus ultrices, vel molestie massa tincidunt.'
            ),
            'content' => $this->multiLanguage(
                '<h2 class="short-hr-left">A DARK WORLD</h2><p>Integer eget diam felis. Quisque et aliquet lectus, et lacinia turpis. Praesent eget pretium orci. Sed vestibulum rutrum volutpat. Curabitur feugiat arcu odio, quis convallis eros laoreet ac.</p><img class="img-fluid" src="imba/light/images/game_large.jpg" alt="screenshot"><br><h2 class="short-hr-left">ENGAGING STORY</h2><p>Suspendisse ultricies, dui vitae convallis blandit, ipsum sem mattis diam, in egestas arcu lacus sed lectus. Donec at interdum tellus. Quisque pellentesque a felis et rutrum. Donec condimentum magna sit amet viverra convallis. Fusce accumsan efficitur orci a commodo.</p><img class="img-fluid" src="imba/light/images/game_large.jpg" alt="screenshot"><br><h2 class="short-hr-left">INTERESTING CHARACTERS</h2><p>Mauris at sapien nibh. Integer id tellus vitae ante cursus pharetra. Vestibulum ultrices eleifend enim, quis maximus nibh dapibus in. Phasellus lacinia nec leo at semper. Duis nisl odio, lacinia quis dui at, pretium tincidunt metus. Maecenas condimentum purus sit amet neque maximus tempor. Proin eros massa, ullamcorper eget rutrum eu, feugiat id purus.</p>',
                '<h2 class="short-hr-left">A DARK WORLD</h2><p>Integer eget diam felis. Quisque et aliquet lectus, et lacinia turpis. Praesent eget pretium orci. Sed vestibulum rutrum volutpat. Curabitur feugiat arcu odio, quis convallis eros laoreet ac.</p><img class="img-fluid" src="imba/light/images/game_large.jpg" alt="screenshot"><br><h2 class="short-hr-left">ENGAGING STORY</h2><p>Suspendisse ultricies, dui vitae convallis blandit, ipsum sem mattis diam, in egestas arcu lacus sed lectus. Donec at interdum tellus. Quisque pellentesque a felis et rutrum. Donec condimentum magna sit amet viverra convallis. Fusce accumsan efficitur orci a commodo.</p><img class="img-fluid" src="imba/light/images/game_large.jpg" alt="screenshot"><br><h2 class="short-hr-left">INTERESTING CHARACTERS</h2><p>Mauris at sapien nibh. Integer id tellus vitae ante cursus pharetra. Vestibulum ultrices eleifend enim, quis maximus nibh dapibus in. Phasellus lacinia nec leo at semper. Duis nisl odio, lacinia quis dui at, pretium tincidunt metus. Maecenas condimentum purus sit amet neque maximus tempor. Proin eros massa, ullamcorper eget rutrum eu, feugiat id purus.</p>'
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'slug' => 'get-in-touch',
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s"),
            'attributes' => [
                [
                    'display_name' => 'Youtube video id',
                    'name' => str_slug('Youtube video id'),
                    'type' => 'text',
                    'content' => $this->multiLanguage(
                        "DPBW_MFqeRs",
                        "DPBW_MFqeRs"
                    ),
                    'entity_type' => 'App\Models\Post',
                    'created_at' => date("Y-m-d h:m:s")
                ],
                [
                    'display_name' => 'Game type',
                    'name' => str_slug('Game type'),
                    'type' => 'text',
                    'content' => $this->multiLanguage(
                        "Action RPG | PC",
                        "Action RPG | PC"
                    ),
                    'entity_type' => 'App\Models\Post',
                    'created_at' => date("Y-m-d h:m:s")
                ],
                [
                    'display_name' => 'Android link',
                    'name' => str_slug('Android link'),
                    'type' => 'text',
                    'content' => $this->multiLanguage(
                        "https://play.google.com/store?hl=en",
                        "https://play.google.com/store?hl=en"
                    ),
                    'entity_type' => 'App\Models\Post',
                    'created_at' => date("Y-m-d h:m:s")
                ],
                [
                    'display_name' => 'IOS link',
                    'name' => str_slug('IOS link'),
                    'type' => 'text',
                    'content' => $this->multiLanguage(
                        "https://apps.apple.com/gb/developer/apple/id284417353",
                        "https://apps.apple.com/gb/developer/apple/id284417353"
                    ),
                    'entity_type' => 'App\Models\Post',
                    'created_at' => date("Y-m-d h:m:s")
                ],
                [
                    'display_name' => 'Star',
                    'name' => str_slug('Star'),
                    'type' => 'text',
                    'content' => $this->multiLanguage(
                        $stars[array_rand($stars)],
                        $stars[array_rand($stars)]
                    ),
                    'entity_type' => 'App\Models\Post',
                    'created_at' => date("Y-m-d h:m:s")
                ],
            ]
        ];
        $attributeData = $game['attributes'];
        unset($game['attributes']);


        for ($i = 0; $i < 6; $i++) {
            $game['category_id'] = random_int(1, 2);
            $game['photo'] = $this->multiLanguage(
                $gameImage[array_rand($gameImage)],
                $gameImage[array_rand($gameImage)]
            );
            DB::table('posts')->insert($game);
            $post = Post::all()->last();
            DB::table('post_tag')->insert(
                ['post_id' => $post->id, 'tag_id' => 3]
            );
            foreach ($attributeData as $it) {
                $it['entity_id'] = $post->id;
                if ($it['name'] == 'star') {
                    $it['content'] = $this->multiLanguage(
                        $stars[array_rand($stars)],
                        $stars[array_rand($stars)]
                    );
                }
                DB::table('attributes')->insert($it);
            }
        }

        // seed team data
        $teamImage = ['imba/light/images/team1.jpg', 'imba/light/images/team.jpg'];
        $team = [
            'title' => $this->multiLanguage(
                'Vladimir M.',
                'Vladimir M.'
            ),
            'title_seo' => '',
            'description' => $this->multiLanguage(
                'Lead Designer',
                'Lead Designer'
            ),
            'content' => $this->multiLanguage(
                null,
                null
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'slug' => 'get-in-touch',
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];
        for ($i = 0; $i < 4; $i++) {
            $team['photo'] = $this->multiLanguage(
                $teamImage[array_rand($teamImage)],
                $teamImage[array_rand($teamImage)]
            );
            DB::table('posts')->insert($team);
            $post = Post::all()->last();
            DB::table('post_tag')->insert(
                ['post_id' => $post->id, 'tag_id' => 4]
            );
        }

        // seed job data
        $job = [
            'title' => $this->multiLanguage(
                'LEAD PROGRAMMER',
                'LEAD PROGRAMMER'
            ),
            'title_seo' => '',
            'description' => $this->multiLanguage(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            ),
            'content' => $this->multiLanguage(
                '<h3>THE IDEAL CANDIDATE:</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, nisl non mattis sollicitudin, risus quam tempor sem, vel interdum est libero non odio.</p><ul class="skill-list"><li>C++</li><li>Dream Weaver</li><li>Unreal Engine</li><li>Blender</li><li>Scale Form</li></ul> <br><h3>REQUIREMENTS:</h3><ul><li><p>B.Sc. in Computer Science and/or Mathematics</p></li><li><p>Proficient with c++ and object-oriented programming</p></li><li><p>Development experience in the games industry a plus.</p></li><li><p>Strong communication and organizational skills</p></li><li><p>Must work well under pressure and handle multiple tasks</p></li><li><p>Passion for making GREAT games</p></li></ul> <br><h3>HOW TO APPLY:</h3><p>If you think you have what it takes to join our team you an apply here <a href="mailto:office@example.com">office@example.com</a></p>',
                '<h3>THE IDEAL CANDIDATE:</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, nisl non mattis sollicitudin, risus quam tempor sem, vel interdum est libero non odio.</p><ul class="skill-list"><li>C++</li><li>Dream Weaver</li><li>Unreal Engine</li><li>Blender</li><li>Scale Form</li></ul> <br><h3>REQUIREMENTS:</h3><ul><li><p>B.Sc. in Computer Science and/or Mathematics</p></li><li><p>Proficient with c++ and object-oriented programming</p></li><li><p>Development experience in the games industry a plus.</p></li><li><p>Strong communication and organizational skills</p></li><li><p>Must work well under pressure and handle multiple tasks</p></li><li><p>Passion for making GREAT games</p></li></ul> <br><h3>HOW TO APPLY:</h3><p>If you think you have what it takes to join our team you an apply here <a href="mailto:office@example.com">office@example.com</a></p>'
            ),
            'post_type' => null,
            'editor' => 1,
            'author' => 1,
            'slug' => 'get-in-touch',
            'is_published' => 1,
            'created_at' => date("Y-m-d h:m:s")
        ];

        for ($i = 0; $i < 3; $i++) {
            DB::table('posts')->insert($job);
            $post = Post::all()->last();
            DB::table('post_tag')->insert(
                ['post_id' => $post->id, 'tag_id' => 6]
            );
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public
    function down()
    {
        Schema::dropIfExists('');
    }
}
