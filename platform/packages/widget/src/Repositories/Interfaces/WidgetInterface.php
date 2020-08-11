<?php

namespace ZHXCore\Widget\Repositories\Interfaces;

use ZHXCore\Support\Repositories\Interfaces\RepositoryInterface;

interface WidgetInterface extends RepositoryInterface
{
    /**
     * Get all theme widgets
     * @param string $theme
     * @return mixed
     */
    public function getByTheme($theme);
}
