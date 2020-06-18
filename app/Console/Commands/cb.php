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
    protected $signature = 'sg:deploy {env=dev}';

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

        $env = $this->argument('env');
        
        $this->info(">> cp .env.".$env." .env");
        if (file_exists('.env.' . $env) && !file_exists('.env')) {
            $files = copy('.env.' . $env, '.env');
            $this->comment($files . ' file was copied!');
        } else {
            $this->comment('Keep old .env file');
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
            if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
                rmdir($storagePath);
            } else {
                unlink($storagePath);
            }
            $this->comment("removed 'public/storage'");
        }
        $this->call('storage:link');

        $this->info(">> php artisan migrate:fresh");
        #yes "yes" | php artisan migrate
        $this->call('migrate:fresh', ['--force' => true]);


    }
}
