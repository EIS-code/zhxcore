<?php
/**
 * Manage the Administration Theme
 */
namespace ZHXCore\Base\Supports\Theme;

use ZHXCore\Base\Supports\Theme\Metronic;

class Init
{
    public static function run()
    {
        self::initPageLoader();
        self::initLayout();
        self::initHeader();
        self::initSubheader();
        self::initContent();
        self::initAside();
        self::initFooter();
    }

    private static function initLayout()
    {
        Metronic::addAttr('body', 'id', 'kt_body');

        // Offcanvas directions
        Metronic::addClass('body', 'quick-panel-right');
        Metronic::addClass('body', 'demo-panel-right');
        Metronic::addClass('body', 'offcanvas-right');
    }

    private static function initPageLoader()
    {
        if (!empty(config('core.base.layout.page-loader.type'))) {
            Metronic::addClass('body', 'page-loading-enabled');
            Metronic::addClass('body', 'page-loading');
        }
    }

    private static function initHeader()
    {
        if (config('core.base.layout.header.self.fixed.desktop')) {
            Metronic::addClass('body', 'header-fixed');
            Metronic::addClass('header', 'header-fixed');
        } else {
            Metronic::addClass('body', 'header-static');
        }

        if (config('core.base.layout.header.self.fixed.mobile')) {
            Metronic::addClass('body', 'header-mobile-fixed');
            Metronic::addClass('header-mobile', 'header-mobile-fixed');
        }

        // Menu
        if (config('core.base.layout.header.menu.self.display')) {
            Metronic::addClass('header_menu', 'header-menu-layout-' . config('core.base.layout.header.menu.self.layout'));

            if (config('core.base.layout.header.menu.self.root-arrow')) {
                Metronic::addClass('header_menu', 'header-menu-root-arrow');
            }
        }

        if (config('core.base.layout.header.self.width') === 'fluid') {
            Metronic::addClass('header-container', 'container-fluid');
        } else {
            Metronic::addClass('header-container', 'container');
        }
    }

    private static function initSubheader()
    {
        if (config('core.base.layout.subheader.display')) {
            Metronic::addClass('body', 'subheader-enabled');
        } else {
            return;
        }

        $subheader_style = config('core.base.layout.subheader.style');
        $subheader_fixed = config('core.base.layout.subheader.fixed');

        // Fixed content head
        if (config('core.base.layout.subheader.fixed') && config('core.base.layout.header.self.fixed.desktop')) {
            Metronic::addClass('body', 'subheader-fixed');
            $subheader_style = 'solid';
        } else {
            $subheader_fixed = false;
        }

        if ($subheader_style) {
            Metronic::addClass('subheader', 'subheader-'.$subheader_style);
        }

        if (config('core.base.layout.subheader.width') == 'fluid') {
            Metronic::addClass('subheader-container', 'container-fluid');
        } else {
            Metronic::addClass('subheader-container', 'container');
        }

        if (config('core.base.layout.subheader.clear')) {
            Metronic::addClass('subheader', 'subheader-clear');
        }
    }

    private static function initContent()
    {
        if (config('core.base.layout.content.fit-top')) {
            Metronic::addClass('content', 'pt-0');
        }

        if (config('core.base.layout.content.fit-bottom')) {
            Metronic::addClass('content', 'pt-0');
        }

        if (config('core.base.layout.content.width') == 'fluid') {
            Metronic::addClass('content-container', 'container-fluid');
        } else {
            Metronic::addClass('content-container', 'container');
        }
    }

    private static function initAside()
    {
        if (config('core.base.layout.aside.self.display') != true) {
            return;
        }

        // Enable Aside
        Metronic::addClass('body', 'aside-enabled');

        // Fixed Aside
        if (config('core.base.layout.aside.self.fixed')) {
            Metronic::addClass('body', 'aside-fixed');
            Metronic::addClass('aside', 'aside-fixed');
        } else {
            Metronic::addClass('body', 'aside-static');
        }

        // Check Aside
        if (config('core.base.layout.aside.self.display') != true) {
            return;
        }

        // Default fixed
        if (config('core.base.layout.aside.self.minimize.default')) {
            Metronic::addClass('body', 'aside-minimize');
        }

        // Menu
        // Dropdown Submenu
        if (config('core.base.layout.aside.menu.dropdown') == true) {
            Metronic::addClass('aside_menu', 'aside-menu-dropdown');
            Metronic::addAttr('aside_menu', 'data-menu-dropdown', '1');
        }

        // Scrollable Menu
        if (config('core.base.layout.aside.menu.dropdown') != true) {
            Metronic::addAttr('aside_menu', 'data-menu-scroll', "1");
        } else {
            Metronic::addAttr('aside_menu', 'data-menu-scroll', "0");
        }

        if (config('core.base.layout.aside.menu.submenu.dropdown.hover-timeout')) {
            Metronic::addAttr('aside_menu', 'data-menu-dropdown-timeout', config('core.base.layout.aside.menu.submenu.dropdown.hover-timeout'));
        }
    }

    private static function initFooter()
    {
        // Fixed header
        if (config('core.base.layout.footer.fixed') == true) {
            Metronic::addClass('body', 'footer-fixed');
        }

        if (config('core.base.layout.footer.width') == 'fluid') {
            Metronic::addClass('footer-container', 'container-fluid');
        } else {
            Metronic::addClass('footer-container', 'container');
        }
    }

}
