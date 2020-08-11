<?php

namespace ZHXCore\AuditLog\Providers;

use ZHXCore\AuditLog\Commands\ActivityLogClearCommand;
use Illuminate\Support\ServiceProvider;

class CommandServiceProvider extends ServiceProvider
{
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                ActivityLogClearCommand::class,
            ]);
        }
    }
}
