<?php

namespace ZHXCore\Gallery\Providers;

use ZHXCore\Base\Events\CreatedContentEvent;
use ZHXCore\Base\Events\DeletedContentEvent;
use ZHXCore\Theme\Events\RenderingSiteMapEvent;
use ZHXCore\Base\Events\UpdatedContentEvent;
use ZHXCore\Gallery\Listeners\CreatedContentListener;
use ZHXCore\Gallery\Listeners\DeletedContentListener;
use ZHXCore\Gallery\Listeners\RenderingSiteMapListener;
use ZHXCore\Gallery\Listeners\UpdatedContentListener;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        RenderingSiteMapEvent::class => [
            RenderingSiteMapListener::class,
        ],
        UpdatedContentEvent::class   => [
            UpdatedContentListener::class,
        ],
        CreatedContentEvent::class   => [
            CreatedContentListener::class,
        ],
        DeletedContentEvent::class   => [
            DeletedContentListener::class,
        ],
    ];
}
