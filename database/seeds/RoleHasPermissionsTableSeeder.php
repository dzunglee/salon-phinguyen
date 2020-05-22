<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleHasPermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement("SET foreign_key_checks=0");
        DB::table('role_has_permissions')->truncate();
        DB::statement("SET foreign_key_checks=1");
        $data = [

        ];

        foreach ($data as $item){
            DB::table('role_has_permissions')->insert($item);
        }
    }
}
