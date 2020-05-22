<?php

use Illuminate\Database\Seeder;
use App\Models\Menu;
use Illuminate\Support\Facades\DB;

class AdminsMenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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
            ],[
                'id' => '9',
                'parent_id' => '8',
                'order' => '24',
                'title' => 'All Post',
                'icon' => 'fa-bars',
                'ajax' => '1',
                'uri' => 'posts',
                'type' => 'menu',
            ],[
                'id' => '10',
                'parent_id' => '8',
                'order' => '24',
                'title' => 'Categories',
                'icon' => 'fa-newspaper-o',
                'ajax' => '1',
                'uri' => 'category',
                'type' => 'menu',
            ],[
                'id' => '11',
                'parent_id' => '8',
                'order' => '24',
                'title' => 'Tags',
                'icon' => 'fa-tags',
                'ajax' => '1',
                'uri' => 'tags',
                'type' => 'menu',
            ],[
                'id' => '12',
                'parent_id' => '0',
                'order' => '24',
                'title' => 'File Manager',
                'icon' => 'fa-file',
                'ajax' => '1',
                'uri' => 'media',
                'type' => 'menu',
            ],[
                'id' => '13',
                'parent_id' => '0',
                'order' => '23',
                'title' => 'Page',
                'icon' => 'fa-book',
                'ajax' => '1',
                'uri' => 'page',
                'type' => 'menu',
            ],[
                'id' => '14',
                'parent_id' => '13',
                'order' => '24',
                'title' => 'All Pages',
                'icon' => 'fa-tags',
                'ajax' => '1',
                'uri' => 'page',
                'type' => 'menu',
            ],[
                'id' => '15',
                'parent_id' => '0',
                'order' => '24',
                'title' => 'Setting',
                'icon' => 'fa-cog',
                'ajax' => '1',
                'uri' => '#',
                'type' => 'menu',
            ],[
                'id' => '16',
                'parent_id' => '15',
                'order' => '24',
                'title' => 'General',
                'icon' => 'fa-cog',
                'ajax' => '1',
                'uri' => 'setting?tab=general',
                'type' => 'menu',
            ],[
                'id' => '17',
                'parent_id' => '15',
                'order' => '25',
                'title' => 'Media',
                'icon' => 'fa-cog',
                'ajax' => '1',
                'uri' => 'setting?tab=media',
                'type' => 'menu',
            ],[
                'id' => '18',
                'parent_id' => '15',
                'order' => '26',
                'title' => 'Permalink',
                'icon' => 'fa-cog',
                'ajax' => '1',
                'uri' => 'setting?tab=permalink',
                'type' => 'menu',
            ],[
                'id' => '19',
                'parent_id' => '15',
                'order' => '26',
                'title' => 'Custom Fields',
                'icon' => 'fa-cog',
                'ajax' => '1',
                'uri' => 'setting?tab=customfields',
                'type' => 'menu',
            ],[
                'id' => '20',
                'parent_id' => '13',
                'order' => '24',
                'title' => 'Tags',
                'icon' => 'fa-tags',
                'ajax' => '1',
                'uri' => 'page-tags',
                'type' => 'menu',
            ],[
                'id' => '21',
                'parent_id' => '0',
                'order' => '25',
                'title' => 'Customizer',
                'icon' => 'fa-globe',
                'ajax' => '1',
                'uri' => '#',
                'type' => 'menu',
            ],[
                'id' => '22',
                'parent_id' => '21',
                'order' => '24',
                'title' => 'Menu',
                'icon' => 'fa-bars',
                'ajax' => '1',
                'uri' => 'customizer/menu',
                'type' => 'menu',
            ],[
                'id' => '23',
                'parent_id' => '21',
                'order' => '24',
                'title' => 'Site identify',
                'icon' => 'fa-globe',
                'ajax' => '1',
                'uri' => 'customizer/site-settings',
                'type' => 'menu',
            ],[
                'id' => '24',
                'parent_id' => '0',
                'order' => '30',
                'title' => 'Translate',
                'icon' => 'fa-language',
                'ajax' => '0',
                'uri' => 'translate',
                'type' => 'menu',
            ]
        ];

        foreach ($admins_menu as $row) {
            Menu::create($row);
        }

    }
}
