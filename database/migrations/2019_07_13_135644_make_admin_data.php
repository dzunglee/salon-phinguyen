<?php

use App\Models\Admin;
use App\Models\Menu;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;

class MakeAdminData extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Admin seeder
        DB::statement("SET foreign_key_checks=0");
        DB::table('admins')->truncate();
        DB::statement("SET foreign_key_checks=1");
        $admins = [
            [
                'id' => 1,
                'name' => 'admin',
                'email' => 'admin@gmail.com',
                'password' => bcrypt('123456'),
                'level' => 0,
                'avatar' => '/storage/default/logo.png',
                'created_at' => date("Y-m-d h:m:s"),
            ], [
                'name' => 'Nguyễn Văn Tí',
                'email' => 'admin@suga.com',
                'password' => bcrypt('123456'),
                'created_at' => date("Y-m-d h:m:s"),

            ]
        ];

        foreach ($admins as $admin) {
            Admin::create($admin);
        }

        // GroupPermissionTableSeeder SEEDER
        DB::statement("SET foreign_key_checks=0");
        DB::table('group_permission')->truncate();
        DB::statement("SET foreign_key_checks=1");
        $data = [
            [
                'id' => 1,
                'path' => 'auth/users/*',
                'description' => 'permission 1',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'id' => 2,
                'path' => 'auth/user',
                'description' => 'permission 2',
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'id' => 3,
                'path' => 'auth/menus',
                'description' => 'permission 3',
                'created_at' => date("Y-m-d h:m:s")
            ],
        ];

        foreach ($data as $item) {
            DB::table('group_permission')->insert($item);
        }

        //RoleTableSeeder SEEDER
        DB::statement("SET foreign_key_checks=0");
        DB::table('roles')->truncate();
        DB::statement("SET foreign_key_checks=1");
        $data = [
            [
                'id' => 1,
                'name' => 'All permission',
                'description' => 'All permission',
                'guard_name' => config('w3cms.auth.guard'),
                'level' => 1,
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'id' => 2,
                'name' => 'All auth permission',
                'description' => 'All auth permission',
                'guard_name' => config('w3cms.auth.guard'),
                'level' => 2,
                'created_at' => date("Y-m-d h:m:s")
            ],
            [
                'id' => 3,
                'name' => 'Auth users',
                'description' => 'Auth users',
                'guard_name' => config('w3cms.auth.guard'),
                'level' => 3,
                'created_at' => date("Y-m-d h:m:s")
            ]
        ];

        foreach ($data as $item) {
            DB::table('roles')->insert($item);
        }

        // MakeSettingData SEEDER

        DB::statement("SET foreign_key_checks=0");
        DB::table('settings')->truncate();
        DB::statement("SET foreign_key_checks=1");
        $data = [
            [
                'key' => 'post_max_size',
                'value' => '5'
            ],
            [
                'key' => 'up_load_max_size',
                'value' => '5'
            ],
            [
                'key' => 'override_if_exists',
                'value' => '1'
            ],
            [
                'key' => 'default_view',
                'value' => 'grid'
            ],
            [
                'key' => 'organize_uploads_by_time',
                'value' => '0'
            ],
            [
                'key' => 'default_sort_date_or_name',
                'value' => 'name'
            ],
            [
                'key' => 'default_sort_az_or_za',
                'value' => 'asc'
            ],
            [
                'key' => 'site_title',
                'value' => 'Imba'
            ],
            [
                'key' => 'separator',
                'value' => '|'
            ],
            [
                'key' => 'fe_logo_image_light',
                'value' => '/storage/default/light/images/logo.png'
            ],
            [
                'key' => 'fe_logo_image_dark',
                'value' => '/storage/default/dark/images/logo.png'
            ],
            [
                'key' => 'fe_logo_text',
                'value' => 'logo'
            ],
            [
                'key' => 'site_cover_image',
                'value' => '/storage/default/light/images/logo.png'
            ],
            [
                'key' => 'fe_fav',
                'value' => '/storage/default/dark/images/favicon/favicon-16x16.png'
            ],
            [
                'key' => 'fe_site_description',
                'value' => 'description'
            ],
            [
                'key' => 'fe_site_keywords',
                'value' => 'keywords'
            ],
            [
                'key' => 'site_url',
                'value' => env('APP_URL')
            ],
            [
                'key' => 'fe_copy_right_text',
                'value' => '© 2020 Imba. All rights reserved.'
            ],
            [
                'key' => 'language',
                'value' => 'en'
            ],
            [
                'key' => 'phone',
                'value' => '+84 2862 515 775'
            ],
            [
                'key' => 'email',
                'value' => 'office@example.com'
            ],
            [
                'key' => 'website',
                'value' => 'imba.co'
            ],
            [
                'key' => 'address',
                'value' => '207 Nguyen Trong Tuyen St. Ward 8, Phu Nhuan Dist., Ho Chi Minh City Vietnam'
            ],
        ];

        foreach ($data as $item) {
            DB::insert('insert into settings (`key`, `value`) value (?, ?)', [(string)$item['key'], (string)$item['value']]);
        }

        //AdminsMenuSeeder
        DB::statement("SET foreign_key_checks=0");
        DB::table('admin_menu')->truncate();
        DB::statement("SET foreign_key_checks=1");
        $admins_menu = [
            [
                'id' => '1',
                'parent_id' => '0',
                'order' => '1',
                'title' => 'Dashboard',
                'icon' => 'fa-dashboard',
                'ajax' => '0',
                'uri' => '/',
                'type' => 'menu',
            ], [
                'id' => '2',
                'parent_id' => '0',
                'order' => '18',
                'title' => 'Admins',
                'icon' => 'fa-tasks',
                'ajax' => '1',
                'uri' => '#',
                'type' => 'menu',
            ], [
                'id' => '3',
                'parent_id' => '0',
                'order' => '19',
                'title' => 'Users',
                'icon' => 'fa-users',
                'ajax' => '1',
                'uri' => 'users',
                'type' => 'menu',
            ], [
                'id' => '4',
                'parent_id' => '2',
                'order' => '20',
                'title' => 'Roles',
                'icon' => 'fa-user',
                'ajax' => '1',
                'uri' => 'roles',
                'type' => 'menu',
            ], [
                'id' => '5',
                'parent_id' => '2',
                'order' => '21',
                'title' => 'Permission',
                'icon' => 'fa-ban',
                'ajax' => '1',
                'uri' => 'permissions',
                'type' => 'menu',
            ], [
                'id' => '6',
                'parent_id' => '2',
                'order' => '22',
                'title' => 'Menu',
                'icon' => 'fa-bars',
                'ajax' => '1',
                'uri' => 'menus',
                'type' => 'menu',
            ], [
                'id' => '7',
                'parent_id' => '2',
                'order' => '23',
                'title' => 'Operation log',
                'icon' => 'fa-history',
                'ajax' => '1',
                'uri' => 'logs',
                'type' => 'menu',
            ], [
                'id' => '8',
                'parent_id' => '0',
                'order' => '24',
                'title' => 'Posts',
                'icon' => 'fa-sticky-note-o',
                'ajax' => '1',
                'uri' => '#',
                'type' => 'menu',
            ], [
                'id' => '9',
                'parent_id' => '8',
                'order' => '24',
                'title' => 'All Post',
                'icon' => 'fa-bars',
                'ajax' => '1',
                'uri' => 'posts',
                'type' => 'menu',
            ], [
                'id' => '10',
                'parent_id' => '8',
                'order' => '24',
                'title' => 'Categories',
                'icon' => 'fa-newspaper-o',
                'ajax' => '1',
                'uri' => 'category',
                'type' => 'menu',
            ], [
                'id' => '11',
                'parent_id' => '8',
                'order' => '24',
                'title' => 'Tags',
                'icon' => 'fa-tags',
                'ajax' => '1',
                'uri' => 'tags',
                'type' => 'menu',
            ], [
                'id' => '12',
                'parent_id' => '0',
                'order' => '24',
                'title' => 'File Manager',
                'icon' => 'fa-file',
                'ajax' => '1',
                'uri' => 'media',
                'type' => 'menu',
            ], [
                'id' => '13',
                'parent_id' => '0',
                'order' => '23',
                'title' => 'Page',
                'icon' => 'fa-book',
                'ajax' => '1',
                'uri' => 'page',
                'type' => 'menu',
            ], [
                'id' => '14',
                'parent_id' => '13',
                'order' => '24',
                'title' => 'All Pages',
                'icon' => 'fa-tags',
                'ajax' => '1',
                'uri' => 'page',
                'type' => 'menu',
            ], [
                'id' => '15',
                'parent_id' => '0',
                'order' => '24',
                'title' => 'Setting',
                'icon' => 'fa-cog',
                'ajax' => '1',
                'uri' => '#',
                'type' => 'menu',
            ], [
                'id' => '16',
                'parent_id' => '15',
                'order' => '24',
                'title' => 'General',
                'icon' => 'fa-cog',
                'ajax' => '1',
                'uri' => 'setting?tab=general',
                'type' => 'menu',
            ], [
                'id' => '17',
                'parent_id' => '15',
                'order' => '25',
                'title' => 'Media',
                'icon' => 'fa-cog',
                'ajax' => '1',
                'uri' => 'setting?tab=media',
                'type' => 'menu',
            ], [
                'id' => '18',
                'parent_id' => '15',
                'order' => '26',
                'title' => 'Permalink',
                'icon' => 'fa-cog',
                'ajax' => '1',
                'uri' => 'setting?tab=permalink',
                'type' => 'menu',
            ], [
                'id' => '19',
                'parent_id' => '15',
                'order' => '26',
                'title' => 'Custom Fields',
                'icon' => 'fa-cog',
                'ajax' => '1',
                'uri' => 'setting?tab=customfields',
                'type' => 'menu',
            ], [
                'id' => '20',
                'parent_id' => '13',
                'order' => '24',
                'title' => 'Tags',
                'icon' => 'fa-tags',
                'ajax' => '1',
                'uri' => 'page-tags',
                'type' => 'menu',
            ], [
                'id' => '21',
                'parent_id' => '0',
                'order' => '25',
                'title' => 'Customizer',
                'icon' => 'fa-globe',
                'ajax' => '1',
                'uri' => '#',
                'type' => 'menu',
            ], [
                'id' => '22',
                'parent_id' => '21',
                'order' => '24',
                'title' => 'Menu',
                'icon' => 'fa-bars',
                'ajax' => '1',
                'uri' => 'customizer/menu',
                'type' => 'menu',
            ], [
                'id' => '23',
                'parent_id' => '21',
                'order' => '24',
                'title' => 'Site identify',
                'icon' => 'fa-globe',
                'ajax' => '1',
                'uri' => 'customizer/site-settings',
                'type' => 'menu',
            ], [
                'id' => '24',
                'parent_id' => '0',
                'order' => '30',
                'title' => 'Translate',
                'icon' => 'fa-dashboard',
                'ajax' => '0',
                'uri' => 'translate',
                'type' => 'menu',
            ]
        ];

        foreach ($admins_menu as $row) {
            Menu::create($row);
        }

        //PermissionTableSeeder
        $data = [
            [
                'name' => 'view-all-logs',
                'guard_name' => config('w3cms.auth.guard', 'cms'),
                'method' => '0'
            ],
            [
                'name' => 'delete-all-logs',
                'guard_name' => config('w3cms.auth.guard', 'cms'),
                'method' => '0'
            ],
            [
                'name' => 'delete-logs',
                'guard_name' => config('w3cms.auth.guard', 'cms'),
                'method' => '0'
            ],
            [
                'name' => 'post-publisher',
                'guard_name' => config('w3cms.auth.guard', 'cms'),
                'method' => '0'
            ]

        ];

        foreach ($data as $row) {
            $a = Permission::where('name', $row['name'])->where('guard_name', $row['guard_name'])->first();
            if (!$a) {
                Permission::create($row);
            }
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
