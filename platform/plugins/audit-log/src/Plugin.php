<?php

namespace ZHXCore\AuditLog;

use ZHXCore\PluginManagement\Abstracts\PluginOperationAbstract;
use ZHXCore\Dashboard\Repositories\Interfaces\DashboardWidgetInterface;
use Schema;

class Plugin extends PluginOperationAbstract
{
    public static function remove()
    {
        Schema::dropIfExists('audit_histories');
        app(DashboardWidgetInterface::class)->deleteBy(['name' => 'widget_audit_logs']);
    }
}
