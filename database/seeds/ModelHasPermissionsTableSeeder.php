<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ModelHasPermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement("SET foreign_key_checks=0");
        DB::table('model_has_permissions')->truncate();
        DB::statement("SET foreign_key_checks=1");
        $data = [
            [
                'permission_id' => 69,
                'model_type' => 'App\Models\Admin',
                'model_id' => 1
            ],
            [
                'permission_id' => 70,
                'model_type' => 'App\Models\Admin',
                'model_id' => 1
            ],
            [
                'permission_id' => 71,
                'model_type' => 'App\Models\Admin',
                'model_id' => 1
            ],
            [
                'permission_id' => 77,
                'model_type' => 'App\Models\Admin',
                'model_id' => 1
            ],
            [
                'permission_id' => 78,
                'model_type' => 'App\Models\Admin',
                'model_id' => 1
            ]
        ];

        foreach ($data as $item){
            DB::table('model_has_permissions')->insert($item);
        }
    }
}
