<?php

namespace ZHXCore\Base\Providers;

use ZHXCore\Base\Events\BeforeEditContentEvent;
use ZHXCore\Base\Events\CreatedContentEvent;
use ZHXCore\Base\Events\DeletedContentEvent;
use ZHXCore\Base\Events\SendMailEvent;
use ZHXCore\Base\Events\UpdatedContentEvent;
use ZHXCore\Base\Listeners\BeforeEditContentListener;
use ZHXCore\Base\Listeners\CreatedContentListener;
use ZHXCore\Base\Listeners\DeletedContentListener;
use ZHXCore\Base\Listeners\SendMailListener;
use ZHXCore\Base\Listeners\UpdatedContentListener;
use Event;
use File;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        SendMailEvent::class          => [
            SendMailListener::class,
        ],
        CreatedContentEvent::class    => [
            CreatedContentListener::class,
        ],
        UpdatedContentEvent::class    => [
            UpdatedContentListener::class,
        ],
        DeletedContentEvent::class    => [
            DeletedContentListener::class,
        ],
        BeforeEditContentEvent::class => [
            BeforeEditContentListener::class,
        ],
    ];

    public function boot()
    {
        parent::boot();

        Event::listen(['cache:cleared'], function () {
            File::delete([storage_path('cache_keys.json'), storage_path('settings.json')]);
        });
    }
}
