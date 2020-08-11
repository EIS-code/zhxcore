<?php

namespace ZHXCore\AuditLog\Providers;

use ZHXCore\AuditLog\Events\AuditHandlerEvent;
use ZHXCore\AuditLog\Listeners\AuditHandlerListener;
use ZHXCore\AuditLog\Listeners\CreatedContentListener;
use ZHXCore\AuditLog\Listeners\DeletedContentListener;
use ZHXCore\AuditLog\Listeners\LoginListener;
use ZHXCore\AuditLog\Listeners\UpdatedContentListener;
use ZHXCore\Base\Events\CreatedContentEvent;
use ZHXCore\Base\Events\DeletedContentEvent;
use ZHXCore\Base\Events\UpdatedContentEvent;
use Illuminate\Auth\Events\Login;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        AuditHandlerEvent::class   => [
            AuditHandlerListener::class,
        ],
        Login::class               => [
            LoginListener::class,
        ],
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
