<?php

namespace Modules\CBSite\Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class MakePostTagDataTableSeeder extends Seeder
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
        DB::table('tags')->truncate();
        DB::statement("SET foreign_key_checks=1");

        $data = [
            [
                'id' => '1',
                'tag_name' => 'Page section',
                'slug' => 'page-section',
            ],
            [
                'id' => '2',
                'tag_name' => 'Portfolio',
                'slug' => 'portfolio',
            ],
            [
                'id' => '3',
                'tag_name' => 'Post',
                'slug' => 'post',
            ],
            [
                'id' => '4',
                'tag_name' => 'Our team',
                'slug' => 'our-team',
            ],
            [
                'id' => '5',
                'tag_name' => 'Our partner',
                'slug' => 'our-partner',
            ],
            [
                'id' => '6',
                'tag_name' => 'Feature',
                'slug' => 'feature',
            ],
        ];

        foreach ($data as $row) {
            Tag::create($row);
        }
    }
}
