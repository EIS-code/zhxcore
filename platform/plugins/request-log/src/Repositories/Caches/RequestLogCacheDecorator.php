<?php

namespace ZHXCore\RequestLog\Repositories\Caches;

use ZHXCore\Support\Repositories\Caches\CacheAbstractDecorator;
use ZHXCore\RequestLog\Repositories\Interfaces\RequestLogInterface;

class RequestLogCacheDecorator extends CacheAbstractDecorator implements RequestLogInterface
{
}
