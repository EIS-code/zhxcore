<?php

namespace ZHXCore\SeoHelper\Providers;

use ZHXCore\Base\Supports\Helper;
use ZHXCore\Base\Traits\LoadAndPublishDataTrait;
use ZHXCore\SeoHelper\Contracts\SeoHelperContract;
use ZHXCore\SeoHelper\Contracts\SeoMetaContract;
use ZHXCore\SeoHelper\Contracts\SeoOpenGraphContract;
use ZHXCore\SeoHelper\Contracts\SeoTwitterContract;
use ZHXCore\SeoHelper\SeoHelper;
use ZHXCore\SeoHelper\SeoMeta;
use ZHXCore\SeoHelper\SeoOpenGraph;
use ZHXCore\SeoHelper\SeoTwitter;
use Illuminate\Support\ServiceProvider;

/**
 * @since 02/12/2015 14:09 PM
 */
class SeoHelperServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(SeoMetaContract::class, SeoMeta::class);
        $this->app->bind(SeoHelperContract::class, SeoHelper::class);
        $this->app->bind(SeoOpenGraphContract::class, SeoOpenGraph::class);
        $this->app->bind(SeoTwitterContract::class, SeoTwitter::class);

        Helper::autoload(__DIR__ . '/../../helpers');
    }

    public function boot()
    {
        $this->setNamespace('packages/seo-helper')
            ->loadAndPublishConfigurations(['general'])
            ->loadAndPublishViews()
            ->loadAndPublishTranslations()
            ->publishAssets();

        $this->app->register(HookServiceProvider::class);
        $this->app->register(EventServiceProvider::class);
    }
}
