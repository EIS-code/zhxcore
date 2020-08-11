<?php

namespace ZHXCore\Slug\Providers;

use ZHXCore\Base\Supports\Helper;
use ZHXCore\Base\Traits\LoadAndPublishDataTrait;
use ZHXCore\Slug\Models\Slug;
use ZHXCore\Slug\Repositories\Caches\SlugCacheDecorator;
use ZHXCore\Slug\Repositories\Eloquent\SlugRepository;
use ZHXCore\Slug\Repositories\Interfaces\SlugInterface;
use Illuminate\Support\ServiceProvider;

class SlugServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(SlugInterface::class, function () {
            return new SlugCacheDecorator(new SlugRepository(new Slug));
        });

        Helper::autoload(__DIR__ . '/../../helpers');
    }

    public function boot()
    {
        $this->setNamespace('packages/slug')
            ->loadAndPublishConfigurations(['general'])
            ->loadAndPublishViews()
            ->loadRoutes(['web'])
            ->loadAndPublishTranslations()
            ->loadMigrations()
            ->publishAssets();

        $this->app->register(FormServiceProvider::class);
        $this->app->register(HookServiceProvider::class);
        $this->app->register(EventServiceProvider::class);
        $this->app->register(CommandServiceProvider::class);
    }
}
