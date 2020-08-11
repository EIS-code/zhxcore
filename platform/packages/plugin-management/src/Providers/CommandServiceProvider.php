<?php

namespace ZHXCore\PluginManagement\Providers;

use ZHXCore\PluginManagement\Commands\PluginActivateCommand;
use ZHXCore\PluginManagement\Commands\PluginAssetsPublishCommand;
use ZHXCore\PluginManagement\Commands\PluginDeactivateCommand;
use ZHXCore\PluginManagement\Commands\PluginRemoveCommand;
use Illuminate\Support\ServiceProvider;

class CommandServiceProvider extends ServiceProvider
{
    public function boot()
    {
        if ($this->app->runningInConsole()) {
            $this->commands([
                PluginAssetsPublishCommand::class,
            ]);
        }

        $this->commands([
            PluginActivateCommand::class,
            PluginDeactivateCommand::class,
            PluginRemoveCommand::class,
        ]);
    }
}
