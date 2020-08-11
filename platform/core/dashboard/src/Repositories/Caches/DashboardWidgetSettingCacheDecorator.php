<?php

namespace ZHXCore\Dashboard\Repositories\Caches;

use ZHXCore\Dashboard\Repositories\Interfaces\DashboardWidgetSettingInterface;
use ZHXCore\Support\Repositories\Caches\CacheAbstractDecorator;

class DashboardWidgetSettingCacheDecorator extends CacheAbstractDecorator implements DashboardWidgetSettingInterface
{
    /**
     * {@inheritDoc}
     */
    public function getListWidget()
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }
}
