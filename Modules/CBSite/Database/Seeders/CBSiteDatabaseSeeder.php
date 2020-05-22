<?php

namespace Modules\CBSite\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class CBSiteDatabaseSeeder extends Seeder
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
        DB::table('attributes')->truncate();
        DB::table('posts')->truncate();


        $this->call(MakePostTagDataTableSeeder::class);
        $this->call(MakeSiteMenuTableSeeder::class);
        $this->call(MakeBannerDataTableSeeder::class);
        $this->call(MakeAboutDataTableSeeder::class);
        $this->call(MakeWhatWeDoDataTableSeeder::class);
        $this->call(MakeOurDominanceDataTableSeeder::class);
        $this->call(MakeOurTeamDataTableSeeder::class);
        $this->call(MakeOurServiceDataTableSeeder::class);
        $this->call(MakeOurPortfolioDataTableSeeder::class);
        $this->call(MakeOurPartnerDataTableSeeder::class);
        $this->call(MakeBlogDataTableSeeder::class);
        $this->call(MakeContactDataTableSeeder::class);
        $this->call(MakePostTagLinkedDataTableSeeder::class);
        $this->call(MakeMemberItemTableSeeder::class);
        $this->call(MakePartnerItemTableSeeder::class);
        $this->call(MakeBlogItemTableSeeder::class);
        $this->call(MakePortfolioItemTableSeeder::class);
        DB::statement("SET foreign_key_checks=1");
    }
}
