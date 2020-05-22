<?php

namespace Modules\Page\Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class AdminMenuSeederTableSeeder extends Seeder
{
    public function run()
    {
        $menu = [
            [
                'parent_id' => '0',
                'order' => '23',
                'title' => 'Page',
                'icon' => 'fa-pagelines',
                'ajax' => '1',
                'uri' => 'page',
                'type' => '',
            ], [
                'parent_id' => '8',
                'order' => '24',
                'title' => 'All Pages',
                'icon' => 'fa-tags',
                'ajax' => '1',
                'uri' => 'page',
                'type' => '',
            ], [
                'parent_id' => '8',
                'order' => '25',
                'title' => 'Page Categories',
                'icon' => 'fa-tags',
                'ajax' => '1',
                'uri' => 'page-category',
                'type' => '',
            ]
        ];


        foreach ($menu as $row) {
            Menu::where('title',$row['title'])->delete();
            Menu::create($row);
        }
    }
}
