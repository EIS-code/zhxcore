<?php

namespace ZHXCore\ACL\Providers;

use ZHXCore\ACL\Http\Middleware\Authenticate;
use ZHXCore\ACL\Http\Middleware\RedirectIfAuthenticated;
use ZHXCore\ACL\Models\Activation;
use ZHXCore\ACL\Models\Role;
use ZHXCore\ACL\Models\User;
use ZHXCore\ACL\Repositories\Caches\RoleCacheDecorator;
use ZHXCore\ACL\Repositories\Eloquent\ActivationRepository;
use ZHXCore\ACL\Repositories\Eloquent\RoleRepository;
use ZHXCore\ACL\Repositories\Eloquent\UserRepository;
use ZHXCore\ACL\Repositories\Interfaces\ActivationInterface;
use ZHXCore\ACL\Repositories\Interfaces\RoleInterface;
use ZHXCore\ACL\Repositories\Interfaces\UserInterface;
use ZHXCore\Base\Supports\Helper;
use ZHXCore\Base\Traits\LoadAndPublishDataTrait;
use Event;
use Exception;
use Illuminate\Contracts\Container\BindingResolutionException;
use Illuminate\Routing\Events\RouteMatched;
use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;

class AclServiceProvider extends ServiceProvider
{
    use LoadAndPublishDataTrait;

    public function register()
    {
        /**
         * @var Router $router
         */
        $router = $this->app['router'];

        $router->aliasMiddleware('auth', Authenticate::class);
        $router->aliasMiddleware('guest', RedirectIfAuthenticated::class);

        $this->app->bind(UserInterface::class, function () {
            return new UserRepository(new User);
        });

        $this->app->bind(ActivationInterface::class, function () {
            return new ActivationRepository(new Activation);
        });

        $this->app->bind(RoleInterface::class, function () {
            return new RoleCacheDecorator(new RoleRepository(new Role));
        });

        Helper::autoload(__DIR__ . '/../../helpers');
    }

    /**
     * @throws BindingResolutionException
     */
    public function boot()
    {
        $this->app->register(CommandServiceProvider::class);
        $this->app->register(EventServiceProvider::class);

        $this->setNamespace('core/acl')
            ->loadAndPublishConfigurations(['general', 'permissions'])
            ->loadAndPublishViews()
            ->loadAndPublishTranslations()
            ->publishAssets()
            ->loadRoutes(['web'])
            ->loadMigrations();

        config()->set(['auth.providers.users.model' => User::class]);

        $this->app->register(HookServiceProvider::class);

        $this->garbageCollect();

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()
                ->registerItem([
                    'id'          => 'cms-core-role-permission',
                    'priority'    => 2,
                    'parent_id'   => 'cms-core-platform-administration',
                    'name'        => 'core/acl::permissions.role_permission',
                    'icon'        => null,
                    'url'         => route('roles.index'),
                    'permissions' => ['roles.index'],
                ])
                ->registerItem([
                    'id'          => 'cms-core-user',
                    'priority'    => 3,
                    'parent_id'   => 'cms-core-platform-administration',
                    'name'        => 'core/acl::users.users',
                    'icon'        => null,
                    'url'         => route('users.index'),
                    'permissions' => ['users.index'],
                ]);
        });
    }

    /**
     * Garbage collect activations and reminders.
     *
     * @return void
     * @throws BindingResolutionException
     */
    protected function garbageCollect()
    {
        $config = $this->app->make('config')->get('core.acl.general');

        $this->sweep($this->app->make(ActivationInterface::class), $config['activations']['lottery']);
    }

    /**
     * Sweep expired codes.
     *
     * @param mixed $repository
     * @param array $lottery
     * @return void
     */
    protected function sweep($repository, array $lottery)
    {
        if ($this->configHitsLottery($lottery)) {
            try {
                $repository->removeExpired();
            } catch (Exception $exception) {
                info($exception->getMessage());
            }
        }
    }

    /**
     * Determine if the configuration odds hit the lottery.
     *
     * @param array $lottery
     * @return bool
     */
    protected function configHitsLottery(array $lottery)
    {
        return mt_rand(1, $lottery[1]) <= $lottery[0];
    }
}