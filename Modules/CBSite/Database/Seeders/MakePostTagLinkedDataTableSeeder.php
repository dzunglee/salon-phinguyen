<?php

namespace Modules\CBSite\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MakePostTagLinkedDataTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        DB::statement("SET foreign_key_checks=0");
        DB::table('post_tag')->truncate();
        DB::statement("SET foreign_key_checks=1");

        $data = [1,2,3,4,5,6,7,8,9,10];

        foreach ($data as $item){
            DB::table('post_tag')->insert(
                ['post_id' => $item, 'tag_id' => 1]
            );
        }
    }
}
