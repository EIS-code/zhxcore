<?php

namespace ZHXCore\ACL\Repositories\Caches;

use ZHXCore\ACL\Repositories\Interfaces\RoleInterface;
use ZHXCore\Support\Repositories\Caches\CacheAbstractDecorator;

class RoleCacheDecorator extends CacheAbstractDecorator implements RoleInterface
{
    /**
     * {@inheritDoc}
     */
    public function createSlug($name, $id)
    {
        return $this->flushCacheAndUpdateData(__FUNCTION__, func_get_args());
    }
}
