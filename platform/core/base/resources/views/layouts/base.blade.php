<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" {{ \ZHXCore\Base\Supports\Theme\Metronic::printAttrs('html') }} {{ \ZHXCore\Base\Supports\Theme\Metronic::printClasses('html') }}>
<head>
    <meta charset="utf-8"/>

    {{-- Title Section --}}
    <title>{{ config('app.name') }} | @yield('title', $page_title ?? '')</title>

    {{-- Meta Data --}}
    <meta name="description" content="@yield('page_description', $page_description ?? '')"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    {{-- Favicon --}}
    <link rel="shortcut icon" href="{{ asset('vendor/core/media/logos/favicon.ico') }}" />

    {{-- Fonts --}}
    {{ \ZHXCore\Base\Supports\Theme\Metronic::getGoogleFontsInclude() }}

    {{-- Global Theme Styles (used by all pages) --}}
    @foreach(config('core.base.layout.resources.css') as $style)
        <link href="{{ config('layout.self.rtl') ? asset(\ZHXCore\Base\Supports\Theme\Metronic::rtlCssPath($style)) : asset('vendor/core/'.$style) }}" rel="stylesheet" type="text/css"/>
    @endforeach

    {{-- Layout Themes (used by all pages) --}}
    @foreach (\ZHXCore\Base\Supports\Theme\Metronic::initThemes() as $theme)
        <link href="{{ config('layout.self.rtl') ? asset(\ZHXCore\Base\Supports\Theme\Metronic::rtlCssPath($theme)) : asset('vendor/core/'.$theme) }}" rel="stylesheet" type="text/css"/>
    @endforeach

    {{-- Includable CSS --}}
    @yield('styles')
</head>

<body {{ \ZHXCore\Base\Supports\Theme\Metronic::printAttrs('body') }} {{ \ZHXCore\Base\Supports\Theme\Metronic::printClasses('body') }}>

@if (config('layout.page-loader.type') != '')
    @include('layout.partials._page-loader')
@endif

@yield('page')

@include('core/base::elements.common')
<?php
/*
 * <script>var HOST_URL = "{{ route('quick-search') }}";</script>
 */
?>

{{-- Global Config (global config for global JS scripts) --}}
<script>
    var KTAppSettings = {!! json_encode(config('core.base.layout.js'), JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES) !!};
</script>

{{-- Global Theme JS Bundle (used by all pages)  --}}
@foreach(config('core.base.layout.resources.js') as $script)
    <script src="{{ asset('vendor/core/'.$script) }}" type="text/javascript"></script>
@endforeach

{{-- Includable JS --}}
@yield('scripts')

@yield('javascript')

<div id="stack-footer">
    @stack('footer')
</div>

</body>
</html>

