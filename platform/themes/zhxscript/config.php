<?php

use ZHXCore\Theme\Theme;

return [

    /*
    |--------------------------------------------------------------------------
    | Inherit from another theme
    |--------------------------------------------------------------------------
    |
    | Set up inherit from another if the file is not exists,
    | this is work with "layouts", "partials" and "views"
    |
    | [Notice] assets cannot inherit.
    |
    */

    'inherit' => null, //default

    /*
    |--------------------------------------------------------------------------
    | Listener from events
    |--------------------------------------------------------------------------
    |
    | You can hook a theme when event fired on activities
    | this is cool feature to set up a title, meta, default styles and scripts.
    |
    | [Notice] these event can be override by package config.
    |
    */

    'events' => [

        // Before event inherit from package config and the theme that call before,
        // you can use this event to set meta, breadcrumb template or anything
        // you want inheriting.
        'before' => function($theme)
        {
            // You can remove this line anytime.
        },

        // Listen on event before render a theme,
        // this event should call to assign some assets,
        // breadcrumb template.
        'beforeRenderTheme' => function (Theme $theme)
        {
            // Partial composer.
            // $theme->partialComposer('header', function($view) {
            //     $view->with('auth', \Auth::user());
            // });

            // You may use this event to set up your assets.
            //$theme->asset()->container('footer')->usePath()->add('script', 'script.js');

            if (function_exists('shortcode')) {
                $theme->composer(['index', 'page', 'post'], function (\ZHXCore\Shortcode\View\View $view) {
                    $view->withShortcodes();
                });
            }
        },

        // Listen on event before render a layout,
        // this should call to assign style, script for a layout.
        'beforeRenderLayout' => [

            'default' => function ($theme)
            {
                $theme->asset()->usePath()->add('bootstrap', 'css/bootstrap.css');
                $theme->asset()->usePath()->add('carousel', 'css/owl.carousel.min.css');
                $theme->asset()->usePath()->add('theme', 'css/owl.theme.default.min.css');
                $theme->asset()->usePath()->add('aos', 'css/aos.css');
                $theme->asset()->usePath()->add('style', 'css/style.css');


                $theme->asset()->container('footer')->usePath()->add('jquery', 'js/jquery-3.3.1.min.js');
                $theme->asset()->container('footer')->usePath()->add('bootstrap', 'js/bootstrap.min.js');
                $theme->asset()->container('footer')->usePath()->add('carousel', 'js/owl.carousel.min.js');
                $theme->asset()->container('footer')->usePath()->add('aos', 'js/aos.js');
                $theme->asset()->container('footer')->usePath()->add('custom', 'js/custom.js');
                $theme->asset()->container('footer')->usePath()->add('app', 'js/app.js');

            }
        ]
    ]
];
