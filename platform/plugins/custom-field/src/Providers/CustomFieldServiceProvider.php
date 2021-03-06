<?php

namespace ZHXCore\CustomField\Providers;

use ZHXCore\ACL\Repositories\Interfaces\RoleInterface;
use ZHXCore\ACL\Repositories\Interfaces\UserInterface;
use ZHXCore\Blog\Models\Category;
use ZHXCore\Blog\Models\Post;
use ZHXCore\CustomField\Support\CustomFieldSupport;
use ZHXCore\Page\Models\Page;
use Illuminate\Routing\Events\RouteMatched;
use ZHXCore\Base\Traits\LoadAndPublishDataTrait;
use ZHXCore\CustomField\Facades\CustomFieldSupportFacade;
use ZHXCore\Page\Repositories\Interfaces\PageInterface;
use ZHXCore\Base\Supports\Helper;
use ZHXCore\CustomField\Models\CustomField;
use ZHXCore\CustomField\Models\FieldGroup;
use ZHXCore\CustomField\Models\FieldItem;
use ZHXCore\CustomField\Repositories\Caches\CustomFieldCacheDecorator;
use ZHXCore\CustomField\Repositories\Eloquent\CustomFieldRepository;
use ZHXCore\CustomField\Repositories\Caches\FieldGroupCacheDecorator;
use ZHXCore\CustomField\Repositories\Eloquent\FieldGroupRepository;
use ZHXCore\CustomField\Repositories\Caches\FieldItemCacheDecorator;
use ZHXCore\CustomField\Repositories\Eloquent\FieldItemRepository;
use ZHXCore\CustomField\Repositories\Interfaces\CustomFieldInterface;
use ZHXCore\CustomField\Repositories\Interfaces\FieldGroupInterface;
use ZHXCore\CustomField\Repositories\Interfaces\FieldItemInterface;
use Event;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;

class CustomFieldServiceProvider extends ServiceProvider
{

    use LoadAndPublishDataTrait;

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        Helper::autoload(__DIR__ . '/../../helpers');

        $loader = AliasLoader::getInstance();
        $loader->alias('CustomField', CustomFieldSupportFacade::class);

        $this->app->bind(CustomFieldInterface::class, function () {
            return new CustomFieldCacheDecorator(
                new CustomFieldRepository(new CustomField),
                CUSTOM_FIELD_CACHE_GROUP
            );
        });

        $this->app->bind(FieldGroupInterface::class, function () {
            return new FieldGroupCacheDecorator(
                new FieldGroupRepository(new FieldGroup),
                CUSTOM_FIELD_CACHE_GROUP
            );
        });

        $this->app->bind(FieldItemInterface::class, function () {
            return new FieldItemCacheDecorator(
                new FieldItemRepository(new FieldItem),
                CUSTOM_FIELD_CACHE_GROUP
            );
        });
    }

    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->setNamespace('plugins/custom-field')
            ->loadAndPublishConfigurations(['permissions', 'general'])
            ->loadAndPublishTranslations()
            ->loadRoutes(['web'])
            ->loadAndPublishViews()
            ->loadMigrations()
            ->publishAssets();

        $this->app->register(HookServiceProvider::class);
        $this->app->register(EventServiceProvider::class);

        Event::listen(RouteMatched::class, function () {
            dashboard_menu()->registerItem([
                'id'          => 'cms-plugins-custom-field',
                'priority'    => 5,
                'parent_id'   => null,
                'name'        => 'plugins/custom-field::base.admin_menu.title',
                'icon'        => 'fas fa-cubes',
                'url'         => route('custom-fields.index'),
                'permissions' => ['custom-fields.index'],
            ]);

            $this->registerUsersFields();
            $this->registerPagesFields();
            $this->registerBlogFields();
        });
    }

    /**
     * @return CustomFieldSupport
     */
    protected function registerUsersFields()
    {
        return CustomFieldSupportFacade::registerRule('other', trans('plugins/custom-field::rules.logged_in_user'),
            'logged_in_user', function () {
                $users = $this->app->make(UserInterface::class)->all();
                $userArr = [];
                foreach ($users as $user) {
                    $userArr[$user->id] = $user->username . ' - ' . $user->email;
                }

                return $userArr;
            })
            ->registerRule('other', trans('plugins/custom-field::rules.logged_in_user_has_role'),
                'logged_in_user_has_role', function () {
                    $roles = $this->app->make(RoleInterface::class)->all();
                    $rolesArr = [];
                    foreach ($roles as $role) {
                        $rolesArr[$role->slug] = $role->name . ' - (' . $role->slug . ')';
                    }

                    return $rolesArr;
                });
    }

    /**
     * @return CustomFieldSupport|bool
     */
    protected function registerPagesFields()
    {
        if (!defined('PAGE_MODULE_SCREEN_NAME')) {
            return false;
        }

        return CustomFieldSupportFacade::registerRule('basic', trans('plugins/custom-field::rules.page_template'),
            'page_template', function () {
                return get_page_templates();
            })
            ->registerRule('basic', trans('plugins/custom-field::rules.page'), Page::class, function () {
                return $this->app->make(PageInterface::class)
                    ->advancedGet([
                        'select'   => [
                            'id',
                            'name',
                        ],
                        'order_by' => [
                            'created_at' => 'DESC',
                        ],
                    ])
                    ->pluck('name', 'id')
                    ->toArray();
            })
            ->expandRule('other', trans('plugins/custom-field::rules.model_name'), 'model_name', function () {
                return [
                    Page::class => trans('plugins/custom-field::rules.model_name_page'),
                ];
            });
    }

    /**
     * @return bool|CustomFieldSupport
     */
    protected function registerBlogFields()
    {
        if (!defined('POST_MODULE_SCREEN_NAME')) {
            return false;
        }

        return CustomFieldSupportFacade::registerRuleGroup('blog')
            ->registerRule('blog', trans('plugins/custom-field::rules.category'), Category::class, function () {
                return $this->getBlogCategoryIds();
            })
            ->registerRule('blog', trans('plugins/custom-field::rules.post_with_related_category'),
                Post::class . '_post_with_related_category', function () {
                    return $this->getBlogCategoryIds();
                })
            ->registerRule('blog', trans('plugins/custom-field::rules.post_format'),
                Post::class . '_post_format', function () {
                    $formats = [];
                    foreach (get_post_formats() as $key => $format) {
                        $formats[$key] = $format['name'];
                    }
                    return $formats;
                })
            ->expandRule('other', trans('plugins/custom-field::rules.model_name'), 'model_name', function () {
                return [
                    Post::class     => trans('plugins/custom-field::rules.model_name_post'),
                    Category::class => trans('plugins/custom-field::rules.model_name_category'),
                ];
            });
    }

    /**
     * @return array
     */
    protected function getBlogCategoryIds()
    {
        $categories = get_categories();

        $categoriesArr = [];
        foreach ($categories as $row) {
            $categoriesArr[$row->id] = $row->indent_text . ' ' . $row->name;
        }

        return $categoriesArr;
    }
}
