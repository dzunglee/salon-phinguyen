<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MakeSettingData extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement("SET foreign_key_checks=0");
        DB::table('settings')->truncate();
        DB::statement("SET foreign_key_checks=1");
        $data = [
            [
                'key' => 'post_max_size',
                'value' => '5'
            ],
            [
                'key' => 'up_load_max_size',
                'value' => '5'
            ],
            [
                'key' => 'override_if_exists',
                'value' => '1'
            ],
            [
                'key' => 'default_view',
                'value' => 'grid'
            ],
            [
                'key' => 'organize_uploads_by_time',
                'value' => '0'
            ],
            [
                'key' => 'default_sort_date_or_name',
                'value' => 'name'
            ],
            [
                'key' => 'default_sort_az_or_za',
                'value' => 'asc'
            ],
            [
                'key' => 'site_title',
                'value' => 'Imba'
            ],
            [
                'key' => 'separator',
                'value' => '|'
            ],
            [
                'key' => 'fe_logo_image',
                'value' => '/storage/default/cb_logo.svg'
            ],
            [
                'key' => 'fe_logo_text',
                'value' => 'logo'
            ],
            [
                'key' => 'fe_logo',
                'value' => 'image'
            ],
            [
                'key' => 'fe_fav',
                'value' => '/storage/default/logo.png'
            ],
            [
                'key' => 'fe_site_description',
                'value' => 'description'
            ],
            [
                'key' => 'fe_site_keywords',
                'value' => 'keywords'
            ],
            [
                'key' => 'site_url',
                'value' => 'http://sugavn20.local/'
            ],
            [
                'key' => 'fe_copy_right_text',
                'value' => '© 2020 Imba. All rights reserved.'
            ],
            [
                'key' => 'site_cover_image',
                'value' => '/storage/default/logo.png'
            ],
        ];

        foreach ($data as $item) {
            DB::insert('insert into settings (`key`, `value`) value (?, ?)', [(string)$item['key'], (string)$item['value']]);
        }

    }
}
