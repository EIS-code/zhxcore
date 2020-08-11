<?php

if (!function_exists('log_viewer')) {
    /**
     * Get the LogViewer instance.
     *
     * @return \ZHXCore\LogViewer\Contracts\LogViewer
     */
    function log_viewer()
    {
        return app('zhxcore::log-viewer');
    }
}

if (!function_exists('log_levels')) {
    /**
     * Get the LogLevels instance.
     *
     * @return \ZHXCore\LogViewer\Contracts\Utilities\LogLevels
     */
    function log_levels()
    {
        return app('zhxcore::log-viewer.levels');
    }
}

if (!function_exists('log_menu')) {
    /**
     * Get the LogMenu instance.
     *
     * @return \ZHXCore\LogViewer\Contracts\Utilities\LogMenu
     */
    function log_menu()
    {
        return app('zhxcore::log-viewer.menu');
    }
}

if (!function_exists('log_styler')) {
    /**
     * Get the LogStyler instance.
     *
     * @return \ZHXCore\LogViewer\Contracts\Utilities\LogStyler
     */
    function log_styler()
    {
        return app('zhxcore::log-viewer.styler');
    }
}

if (!function_exists('extract_date')) {
    /**
     * Extract date from string (format : YYYY-MM-DD).
     *
     * @param  string $string
     * @return string
     */
    function extract_date($string)
    {
        return preg_replace(
            '/.*(' . REGEX_DATE_PATTERN . ').*/',
            '$1',
            $string
        );
    }
}
