<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(AdminSeeder::class);
        $this->command->info(' Seeded Admin Table!');
        $this->command->info(' Admin : admin@gmail.com/123456');



//        GroupPermissionTableSeeder SEEDER
        $this->call(GroupPermissionTableSeeder::class);
        $this->command->info(' Seeded GroupPermissionTableSeeder!');


//        RoleTableSeeder SEEDER
        $this->call(RoleTableSeeder::class);
        $this->command->info(' Seeded RoleTableSeeder!');

//        RoleTableSeeder SEEDER
        $this->call(MakeSettingData::class);
        $this->command->info(' Seeded Settings!');

//
//        $this->call(ModelHasRolesTableSeeder::class);
//        $this->command->info(' Seeded ModelHasRolesTableSeeder!');

////
//        $this->call(ModelHasPermissionsTableSeeder::class);
//        $this->command->info(' Seeded ModelHasPermissionsTableSeeder!');

//
//        $this->call(RoleHasPermissionsTableSeeder::class);
//        $this->command->info(' Seeded RoleHasPermissionsTableSeeder!');

//
        $this->call(AdminsMenuSeeder::class);
        $this->command->info(' Seeded AdminsMenuSeeder!');

        $this->call(PermissionTableSeeder::class);
        $this->command->info(' Seeded PermissionTableSeeder!');

    }
}
