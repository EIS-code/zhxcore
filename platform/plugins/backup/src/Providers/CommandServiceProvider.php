<?php

namespace ZHXCore\Backup\Providers;

use ZHXCore\Backup\Commands\BackupCreateCommand;
use ZHXCore\Backup\Commands\BackupListCommand;
use ZHXCore\Backup\Commands\BackupRemoveCommand;
use ZHXCore\Backup\Commands\BackupRestoreCommand;
use Illuminate\Support\ServiceProvider;

class CommandServiceProvider extends ServiceProvider
{
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                BackupCreateCommand::class,
                BackupRestoreCommand::class,
                BackupRemoveCommand::class,
                BackupListCommand::class,
            ]);
        }
    }
}
