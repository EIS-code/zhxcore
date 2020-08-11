<?php

namespace ZHXCore\Media\Providers;

use ZHXCore\Base\Supports\Helper;
use ZHXCore\Base\Traits\LoadAndPublishDataTrait;
use ZHXCore\Media\Commands\ClearChunksCommand;
use ZHXCore\Media\Commands\DeleteThumbnailCommand;
use ZHXCore\Media\Commands\GenerateThumbnailCommand;
use ZHXCore\Media\Facades\RvMediaFacade;
use ZHXCore\Media\Models\MediaFile;
use ZHXCore\Media\Models\MediaFolder;
use ZHXCore\Media\Models\MediaSetting;
use ZHXCore\Media\Repositories\Caches\MediaFileCacheDecorator;
use ZHXCore\Media\Repositories\Caches\MediaFolderCacheDecorator;
use ZHXCore\Media\Repositories\Caches\MediaSettingCacheDecorator;
use ZHXCore\Media\Repositories\Eloquent\MediaFileRepository;
use ZHXCore\Media\Repositories\Eloquent\MediaFolderRepository;
use ZHXCore\Media\Repositories\Eloquent\MediaSettingRepository;
use ZHXCore\Media\Repositories\Interfaces\MediaFileInterface;
use ZHXCore\Media\Repositories\Interfaces\MediaFolderInterface;
use ZHXCore\Media\Repositories\Interfaces\MediaSettingInterface;
use ZHXCore\Setting\Supports\SettingStore;
use Event;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Routing\Events\RouteMatched;
use Illuminate\Support\ServiceProvider;
use ZHXCore\Media\Chunks\Storage\ChunkStorage;

/**
 * @since 02/07/2016 09:50 AM
 */
class MediaServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        Helper::autoload(__DIR__ . '/../../helpers');

        $this->app->bind(MediaFileInterface::class, function () {
            return new MediaFileCacheDecorator(
                new MediaFileRepository(new MediaFile),
                MEDIA_GROUP_CACHE_KEY
            );
        });

        $this->app->bind(MediaFolderInterface::class, function () {
            return new MediaFolderCacheDecorator(
                new MediaFolderRepository(new MediaFolder),
                MEDIA_GROUP_CACHE_KEY
            );
        });

        $this->app->bind(MediaSettingInterface::class, function () {
            return new MediaSettingCacheDecorator(
                new MediaSettingRepository(new MediaSetting)
            );
        });

        AliasLoader::getInstance()->alias('RvMedia', RvMediaFacade::class);
    }

    public function boot()
    {
        $this->setNamespace('core/media')
            ->loadAndPublishConfigurations(['permissions', 'media'])
            ->loadMigrations()
            ->loadAndPublishTranslations()
            ->loadAndPublishViews()
            ->loadRoutes()
            ->publishAssets();

        $config = $this->app->make('config');
        $setting = $this->app->make(SettingStore::class);

        $config->set([
            'core.media.media.chunk.enabled'    => (bool)$setting->get('media_chunk_enabled',
                $config->get('core.media.media.chunk.enabled')),
            'core.media.media.chunk.chunk_size' => (int)$setting->get('media_chunk_size',
                $config->get('core.media.media.chunk.chunk_size')),
            'core.media.media.chunk.max_file_size' => (int)$setting->get('media_max_file_size',
                $config->get('core.media.media.chunk.max_file_size')),
        ]);

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()->registerItem([
                'id'          => 'cms-core-media',
                'priority'    => 995,
                'parent_id'   => null,
                'name'        => 'core/media::media.menu_name',
                'icon'        => 'far fa-images',
                'url'         => route('media.index'),
                'permissions' => ['media.index'],
            ]);
        });

        $this->commands([
            GenerateThumbnailCommand::class,
            DeleteThumbnailCommand::class,
            ClearChunksCommand::class,
        ]);

        $this->app->booted(function () {
            if (config('core.media.media.chunk.clear.schedule.enabled')) {
                $schedule = $this->app->make(Schedule::class);

                $schedule->command('cms:media:chunks:clear')
                    ->cron(config('core.media.media.chunk.clear.schedule.cron'));
            }
        });

        $this->app->singleton(ChunkStorage::class, function () {
            return new ChunkStorage;
        });
    }
}
