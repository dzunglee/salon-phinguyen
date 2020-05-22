<?php

use App\Models\CustomizerMenuType;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomizerMenuTableSheeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement("SET foreign_key_checks=0");
        DB::table('customizer_menu_types')->truncate();
        DB::statement("SET foreign_key_checks=1");
        $data = [
            [
                'id' => 1,
                'title' => 'Menu 1',
                'slug' => str_slug('Menu 1'),
                'order' => 1,
                'type' => null,
                'created_at' => date("Y-m-d h:m:s"),
            ],
            [
                'id' => 2,
                'title' => 'Menu 2',
                'slug' => str_slug('Menu 2'),
                'order' => 1,
                'type' => null,
                'created_at' => date("Y-m-d h:m:s"),
            ],
            [
                'id' => 3,
                'title' => 'Menu 3',
                'slug' => str_slug('Menu 3'),
                'order' => 1,
                'type' => null,
                'created_at' => date("Y-m-d h:m:s"),
            ],
        ];

        foreach ($data as $item) {
            CustomizerMenuType::create($item);
        }
    }
}
