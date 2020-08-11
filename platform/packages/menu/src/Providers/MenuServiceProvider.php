<?php

namespace ZHXCore\Menu\Providers;

use ZHXCore\Base\Supports\Helper;
use ZHXCore\Base\Traits\LoadAndPublishDataTrait;
use ZHXCore\Menu\Models\Menu as MenuModel;
use ZHXCore\Menu\Models\MenuLocation;
use ZHXCore\Menu\Models\MenuNode;
use ZHXCore\Menu\Repositories\Caches\MenuCacheDecorator;
use ZHXCore\Menu\Repositories\Caches\MenuLocationCacheDecorator;
use ZHXCore\Menu\Repositories\Caches\MenuNodeCacheDecorator;
use ZHXCore\Menu\Repositories\Eloquent\MenuLocationRepository;
use ZHXCore\Menu\Repositories\Eloquent\MenuNodeRepository;
use ZHXCore\Menu\Repositories\Eloquent\MenuRepository;
use ZHXCore\Menu\Repositories\Interfaces\MenuInterface;
use ZHXCore\Menu\Repositories\Interfaces\MenuLocationInterface;
use ZHXCore\Menu\Repositories\Interfaces\MenuNodeInterface;
use Event;
use Illuminate\Routing\Events\RouteMatched;
use Illuminate\Support\ServiceProvider;

class MenuServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        Helper::autoload(__DIR__ . '/../../helpers');
    }

    public function boot()
    {
        $this->app->bind(MenuInterface::class, function () {
            return new MenuCacheDecorator(
                new MenuRepository(new MenuModel)
            );
        });

        $this->app->bind(MenuNodeInterface::class, function () {
            return new MenuNodeCacheDecorator(
                new MenuNodeRepository(new MenuNode)
            );
        });

        $this->app->bind(MenuLocationInterface::class, function () {
            return new MenuLocationCacheDecorator(
                new MenuLocationRepository(new MenuLocation)
            );
        });

        $this->setNamespace('packages/menu')
            ->loadAndPublishConfigurations(['permissions', 'general'])
            ->loadRoutes(['web'])
            ->loadAndPublishViews()
            ->loadAndPublishTranslations()
            ->loadMigrations()
            ->publishAssets();

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()
                ->registerItem([
                    'id'          => 'cms-core-menu',
                    'priority'    => 2,
                    'parent_id'   => 'cms-core-appearance',
                    'name'        => 'packages/menu::menu.name',
                    'icon'        => null,
                    'url'         => route('menus.index'),
                    'permissions' => ['menus.index'],
                ]);

            if (!defined('THEME_MODULE_SCREEN_NAME')) {
                dashboard_menu()
                    ->registerItem([
                        'id'          => 'cms-core-appearance',
                        'priority'    => 996,
                        'parent_id'   => null,
                        'name'        => 'core/base::layouts.appearance',
                        'icon'        => 'fa fa-paint-brush',
                        'url'         => '#',
                        'permissions' => [],
                    ]);
            }

            if (function_exists('admin_bar')) {
                admin_bar()->registerLink('Menu', route('menus.index'), 'appearance');
            }
        });
    }
}
