<?php

namespace ZHXCore\CustomField\Facades;

use Illuminate\Support\Facades\Facade;
use ZHXCore\CustomField\Support\CustomFieldSupport;

class CustomFieldSupportFacade extends Facade
{
    /**
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return CustomFieldSupport::class;
    }
}
