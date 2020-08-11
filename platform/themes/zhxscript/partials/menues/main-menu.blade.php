<ul {!! $options !!}>
    @foreach ($menu_nodes as $key => $row)
        <li class="nav-item @if ($row->has_child) @endif {{ $row->css_class }} @if ($row->url == Request::url()) active @endif">
            <a href="{{ $row->url }}" target="{{ $row->target }}" class="nav-link">
                @if ($row->icon_font)<i class='{{ trim($row->icon_font) }}'></i> @endif{{ $row->title }}
            </a>
            @if ($row->has_child)
                {!!
                    Menu::generateMenu([
                        'menu'       => $menu,
                        'menu_nodes' => $row->child,
                        'view'       => 'menues.main-menu',
                        'options'    => ['class' => 'sub-menu'],
                    ])
                !!}
            @endif
        </li>
    @endforeach
</ul>
