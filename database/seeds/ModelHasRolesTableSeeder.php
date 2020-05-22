<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ModelHasRolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement("SET foreign_key_checks=0");
        DB::table(config('permission.table_names.model_has_roles'))->truncate();
        DB::statement("SET foreign_key_checks=1");
        $data = [
            [
                'role_id' => 1,
                'model_type' => 'App\Models\Admin',
                'model_id' => 1
            ]
        ];

        foreach ($data as $item){
            DB::table(config('permission.table_names.model_has_roles'))->insert($item);
        }
    }
}
