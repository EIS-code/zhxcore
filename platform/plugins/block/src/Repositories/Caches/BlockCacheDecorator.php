<?php

namespace ZHXCore\Block\Repositories\Caches;

use ZHXCore\Support\Repositories\Caches\CacheAbstractDecorator;
use ZHXCore\Block\Repositories\Interfaces\BlockInterface;

class BlockCacheDecorator extends CacheAbstractDecorator implements BlockInterface
{
    /**
     * {@inheritDoc}
     */
    public function createSlug($name, $id)
    {
        return $this->flushCacheAndUpdateData(__FUNCTION__, func_get_args());
    }
}
