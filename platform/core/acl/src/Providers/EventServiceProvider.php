<?php

namespace ZHXCore\ACL\Providers;

use ZHXCore\ACL\Events\RoleAssignmentEvent;
use ZHXCore\ACL\Events\RoleUpdateEvent;
use ZHXCore\ACL\Listeners\LoginListener;
use ZHXCore\ACL\Listeners\RoleAssignmentListener;
use ZHXCore\ACL\Listeners\RoleUpdateListener;
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
        RoleUpdateEvent::class     => [
            RoleUpdateListener::class,
        ],
        RoleAssignmentEvent::class => [
            RoleAssignmentListener::class,
        ],
        Login::class               => [
            LoginListener::class,
        ],
    ];
}
