<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $data = [
            [
                'name' => 'view-all-logs',
                'guard_name' => config('w3cms.auth.guard','cms'),
                'method' => '0'
            ],
            [
                'name' => 'delete-all-logs',
                'guard_name' => config('w3cms.auth.guard','cms'),
                'method' => '0'
            ],
            [
                'name' => 'delete-logs',
                'guard_name' => config('w3cms.auth.guard','cms'),
                'method' => '0'
            ],
            [
                'name' => 'post-publisher',
                'guard_name' => config('w3cms.auth.guard','cms'),
                'method' => '0'
            ]

        ];

         foreach ($data as $row) {
             $a = Permission::where('name', $row['name'])->where('guard_name', $row['guard_name'])->first();
             if (!$a) {
                 Permission::create($row);
             }
         }
    }
}
