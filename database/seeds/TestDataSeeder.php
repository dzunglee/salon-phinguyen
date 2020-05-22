<?php

use Illuminate\Database\Seeder;

class TestDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(CustomizerMenuTableSheeder::class);
        $this->command->info(' Seeded Customizer Menu Table!');
    }
}
