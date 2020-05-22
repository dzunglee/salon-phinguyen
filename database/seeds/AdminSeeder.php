<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Models\Admin;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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

//        // Faker generation
//        $admin_quantity = 50;  // Number admins need to generation
//        (new Faker\Generator)->seed(1000);
//        factory(Admin::class, $admin_quantity)->create();

    }
}
