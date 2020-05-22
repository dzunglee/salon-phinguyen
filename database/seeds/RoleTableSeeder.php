<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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

        foreach ($data as $item){
            DB::table('roles')->insert($item);
        }
    }
}
