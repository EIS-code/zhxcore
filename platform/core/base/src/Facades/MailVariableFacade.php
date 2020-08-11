<?php

namespace ZHXCore\Base\Facades;

use ZHXCore\Base\Supports\EmailHandler;
use Illuminate\Support\Facades\Facade;

/**
 * @deprecated since v5.5
 */
class MailVariableFacade extends Facade
{
    /**
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return EmailHandler::class;
    }
}
