<?php

namespace ZHXCore\Menu\Repositories\Caches;

use ZHXCore\Menu\Repositories\Interfaces\MenuNodeInterface;
use ZHXCore\Support\Repositories\Caches\CacheAbstractDecorator;

class MenuNodeCacheDecorator extends CacheAbstractDecorator implements MenuNodeInterface
{
    /**
     * {@inheritDoc}
     */
    public function getByMenuId($menuId, $parentId, $select = ['*'], array $with = ['child', 'reference', 'reference.slugable'])
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }
}
