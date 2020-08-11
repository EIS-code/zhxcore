<?php

namespace ZHXCore\Translation;

use ZHXCore\PluginManagement\Abstracts\PluginOperationAbstract;
use Schema;

class Plugin extends PluginOperationAbstract
{
    public static function remove()
    {
        Schema::dropIfExists('translations');
    }
}
