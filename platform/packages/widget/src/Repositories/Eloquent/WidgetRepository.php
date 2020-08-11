<?php

namespace ZHXCore\Widget\Repositories\Eloquent;

use ZHXCore\Support\Repositories\Eloquent\RepositoriesAbstract;
use ZHXCore\Widget\Repositories\Interfaces\WidgetInterface;

class WidgetRepository extends RepositoriesAbstract implements WidgetInterface
{
    /**
     * {@inheritDoc}
     */
    public function getByTheme($theme)
    {
        $data = $this->model->where('theme', $theme)->get();
        $this->resetModel();

        return $data;
    }
}
