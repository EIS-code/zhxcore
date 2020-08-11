<?php

namespace ZHXCore\LogViewer\Providers;

use ZHXCore\LogViewer\LogViewer;
use Illuminate\Routing\Events\RouteMatched;
use ZHXCore\Base\Supports\Helper;
use ZHXCore\Base\Traits\LoadAndPublishDataTrait;
use Event;
use Illuminate\Support\ServiceProvider;
use ZHXCore\LogViewer\Contracts;
use ZHXCore\LogViewer\Utilities;

class LogViewerServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind('zhxcore::log-viewer', LogViewer::class);

        Helper::autoload(__DIR__ . '/../../helpers');

        $this->app->singleton('zhxcore::log-viewer.levels', function ($app) {
            return new Utilities\LogLevels($app['translator'], config('plugins.log-viewer.general.locale'));
        });
        $this->app->bind(Contracts\Utilities\LogLevels::class, 'zhxcore::log-viewer.levels');

        $this->app->singleton('zhxcore::log-viewer.styler', Utilities\LogStyler::class);
        $this->app->bind(Contracts\Utilities\LogStyler::class, 'zhxcore::log-viewer.styler');

        $this->app->singleton('zhxcore::log-viewer.menu', Utilities\LogMenu::class);
        $this->app->bind(Contracts\Utilities\LogMenu::class, 'zhxcore::log-viewer.menu');

        $this->app->singleton('zhxcore::log-viewer.filesystem', function ($app) {
            $filesystem = new Utilities\Filesystem($app['files'], config('plugins.log-viewer.general.storage-path'));

            $filesystem->setPattern(
                config('plugins.log-viewer.general.pattern.prefix', Utilities\Filesystem::PATTERN_PREFIX),
                config('plugins.log-viewer.general.pattern.date', Utilities\Filesystem::PATTERN_DATE),
                config('plugins.log-viewer.general.pattern.extension', Utilities\Filesystem::PATTERN_EXTENSION)
            );

            return $filesystem;
        });
        $this->app->bind(Contracts\Utilities\Filesystem::class, 'zhxcore::log-viewer.filesystem');

        $this->app->singleton('zhxcore::log-viewer.factory', Utilities\Factory::class);
        $this->app->bind(Contracts\Utilities\Factory::class, 'zhxcore::log-viewer.factory');

        $this->app->singleton('zhxcore::log-viewer.checker', Utilities\LogChecker::class);
        $this->app->bind(Contracts\Utilities\LogChecker::class, 'zhxcore::log-viewer.checker');
    }

    public function boot()
    {
        $this->setNamespace('plugins/log-viewer')
            ->loadAndPublishConfigurations(['general', 'permissions'])
            ->loadRoutes(['web'])
            ->loadAndPublishViews()
            ->loadAndPublishTranslations()
            ->loadMigrations()
            ->publishAssets();

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()->registerItem([
                'id'          => 'cms-plugin-system-logs',
                'priority'    => 7,
                'parent_id'   => 'cms-core-platform-administration',
                'name'        => 'plugins/log-viewer::log-viewer.menu_name',
                'icon'        => null,
                'url'         => route('log-viewer::logs.index'),
                'permissions' => ['logs.index'],
            ]);
        });
    }
}
