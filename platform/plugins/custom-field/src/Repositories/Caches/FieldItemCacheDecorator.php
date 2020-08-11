<?php

namespace ZHXCore\CustomField\Repositories\Caches;

use ZHXCore\CustomField\Repositories\Interfaces\FieldItemInterface;
use ZHXCore\Support\Repositories\Caches\CacheAbstractDecorator;

class FieldItemCacheDecorator extends CacheAbstractDecorator implements FieldItemInterface
{
    /**
     * {@inheritDoc}
     */
    public function deleteFieldItem($id)
    {
        return $this->flushCacheAndUpdateData(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function getGroupItems($groupId, $parentId = null)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    /**
     * {@inheritDoc}
     */
    public function updateWithUniqueSlug($id, array $data)
    {
        return $this->flushCacheAndUpdateData(__FUNCTION__, func_get_args());
    }
}
