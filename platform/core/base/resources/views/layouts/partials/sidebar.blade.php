
<!--begin::Menu Container-->
<div
        id="kt_aside_menu"
        class="aside-menu my-4 {{ \ZHXCore\Base\Supports\Theme\Metronic::printClasses('aside_menu', false) }}"
        data-menu-vertical="1"
        {{ \ZHXCore\Base\Supports\Theme\Metronic::printAttrs('aside_menu') }}>
    <ul class="menu-nav {{ \ZHXCore\Base\Supports\Theme\Metronic::printClasses('aside_menu_nav', false) }}">

        @foreach ($menus = dashboard_menu()->getAll() as $menu)

            <li class="menu-item  @if ($menu['active']) menu-item-active @endif @if (isset($menu['children']) && count($menu['children'])) menu-item-submenu @endif" id="{{ $menu['id'] }}" aria-haspopup="true">
                <a href="{{ $menu['url'] }}" class="menu-link @if(isset($menu['children']) && count($menu['children'])) menu-toggle @endif">
                    <i class="{{ $menu['icon'] }}"></i>
                    &nbsp;
                    <span class="menu-text">
                        {{ !is_array(trans($menu['name'])) ? trans($menu['name']) : null }}
                        {!! apply_filters(BASE_FILTER_APPEND_MENU_NAME, null, $menu['id']) !!}
                    </span>
                    @if (isset($menu['children']) && count($menu['children'])) <span class="menu-arrow @if ($menu['active']) open @endif"></span> @endif
                </a>
                @if (isset($menu['children']) && count($menu['children']))
                    <div class="menu-submenu ">
                        <i class="menu-arrow"></i>
                        <ul class="menu-subnav @if (!$menu['active']) hidden-ul @endif">
                            @foreach ($menu['children'] as $item)
                                <li class="menu-item  @if ($menu['active']) menu-item-active @endif" id="{{ $menu['id'] }}" aria-haspopup="true">
                                    <a href="{{ $item['url'] }}" class="menu-link ">
                                        <i class="{{ $item['icon'] }}"></i>
                                        <span class="menu-text">{{ trans($item['name']) }}</span>
                                    </a>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                @endif
            </li>
        @endforeach
</ul>
    <!--end::Menu Nav-->
</div>
<!--end::Menu Container-->