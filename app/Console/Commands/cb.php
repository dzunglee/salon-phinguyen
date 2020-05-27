<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class cb extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sg:deploy';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command Deploy';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {

        $this->info(">> cp .env.production .env");
        if (file_exists('.env.production') && !file_exists('.env')) {
            $files = copy('.env.production', '.env');
            $this->comment($files . ' file was copied!');
        } else {
            $this->comment('nothing');
        }
        #
        $this->info(">> php artisan key:generate");
        if (!env('APP_KEY')) {
            $this->call('key:generate');
        } else {
            $this->comment('Application key exists already');
        }
        $this->info(">> php artisan storage:link");
        $storagePath = base_path('public' . DIRECTORY_SEPARATOR . 'storage');
        if (is_dir($storagePath)) {
            unlink($storagePath);
            $this->comment("removed 'public/storage'");
        }
        $this->call('storage:link');

        $this->info(">> php artisan migrate --force");
        #yes "yes" | php artisan migrate
        $this->call('migrate', ['--force' => true]);


    }
}
