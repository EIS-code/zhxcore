<?php

namespace ZHXCore\Base\Providers;

use ZHXCore\Base\Commands\ClearLogCommand;
use Illuminate\Support\ServiceProvider;
use ZHXCore\Base\Commands\InstallCommand;

class CommandServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->commands([
            ClearLogCommand::class,
            InstallCommand::class
        ]);
    }
}
