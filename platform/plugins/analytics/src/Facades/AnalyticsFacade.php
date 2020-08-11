<?php

namespace ZHXCore\Analytics\Facades;

use ZHXCore\Analytics\Analytics;
use Illuminate\Support\Facades\Facade;

/**
 * @see \ZHXCore\Analytics\Analytics
 */
class AnalyticsFacade extends Facade
{
    /**
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return Analytics::class;
    }
}
