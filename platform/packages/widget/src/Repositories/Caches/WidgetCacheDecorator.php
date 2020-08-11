<?php

namespace ZHXCore\Widget\Repositories\Caches;

use ZHXCore\Support\Repositories\Caches\CacheAbstractDecorator;
use ZHXCore\Widget\Repositories\Interfaces\WidgetInterface;

class WidgetCacheDecorator extends CacheAbstractDecorator implements WidgetInterface
{
    /**
     * {@inheritDoc}
     */
    public function getByTheme($theme)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }
}
