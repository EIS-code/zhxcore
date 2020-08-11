<?php

namespace ZHXCore\Contact\Providers;

use EmailHandler;
use Illuminate\Routing\Events\RouteMatched;
use ZHXCore\Base\Supports\Helper;
use ZHXCore\Base\Traits\LoadAndPublishDataTrait;
use ZHXCore\Contact\Models\ContactReply;
use ZHXCore\Contact\Repositories\Caches\ContactReplyCacheDecorator;
use ZHXCore\Contact\Repositories\Eloquent\ContactReplyRepository;
use ZHXCore\Contact\Repositories\Interfaces\ContactInterface;
use ZHXCore\Contact\Models\Contact;
use ZHXCore\Contact\Repositories\Caches\ContactCacheDecorator;
use ZHXCore\Contact\Repositories\Eloquent\ContactRepository;
use ZHXCore\Contact\Repositories\Interfaces\ContactReplyInterface;
use Event;
use Illuminate\Support\ServiceProvider;

class ContactServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        $this->app->bind(ContactInterface::class, function () {
            return new ContactCacheDecorator(new ContactRepository(new Contact));
        });

        $this->app->bind(ContactReplyInterface::class, function () {
            return new ContactReplyCacheDecorator(new ContactReplyRepository(new ContactReply));
        });

        Helper::autoload(__DIR__ . '/../../helpers');
    }

    public function boot()
    {
        $this->setNamespace('plugins/contact')
            ->loadAndPublishConfigurations(['permissions', 'email'])
            ->loadRoutes(['web'])
            ->loadAndPublishViews()
            ->loadAndPublishTranslations()
            ->loadMigrations()
            ->publishAssets();

        $this->app->register(HookServiceProvider::class);

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()->registerItem([
                'id'          => 'cms-plugins-contact',
                'priority'    => 120,
                'parent_id'   => null,
                'name'        => 'plugins/contact::contact.menu',
                'icon'        => 'far fa-envelope',
                'url'         => route('contacts.index'),
                'permissions' => ['contacts.index'],
            ]);

            EmailHandler::addTemplateSettings(CONTACT_MODULE_SCREEN_NAME, config('plugins.contact.email'));
        });
    }
}
