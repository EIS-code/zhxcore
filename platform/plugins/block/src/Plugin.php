<?php

namespace ZHXCore\Block;

use Schema;
use ZHXCore\PluginManagement\Abstracts\PluginOperationAbstract;

class Plugin extends PluginOperationAbstract
{
    public static function remove()
    {
        Schema::dropIfExists('blocks');
    }
}
