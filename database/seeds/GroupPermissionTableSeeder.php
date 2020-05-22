<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GroupPermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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

        foreach ($data as $item){
            DB::table('group_permission')->insert($item);
        }
    }
}
