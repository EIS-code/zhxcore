<?php

namespace ZHXCore\CustomField\Providers;

use ZHXCore\Base\Events\CreatedContentEvent;
use ZHXCore\Base\Events\DeletedContentEvent;
use ZHXCore\Base\Events\UpdatedContentEvent;
use ZHXCore\CustomField\Listeners\CreatedContentListener;
use ZHXCore\CustomField\Listeners\DeletedContentListener;
use ZHXCore\CustomField\Listeners\UpdatedContentListener;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        UpdatedContentEvent::class => [
            UpdatedContentListener::class,
        ],
        CreatedContentEvent::class => [
            CreatedContentListener::class,
        ],
        DeletedContentEvent::class => [
            DeletedContentListener::class,
        ],
    ];
}
