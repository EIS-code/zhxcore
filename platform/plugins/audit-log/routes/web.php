<?php

Route::group(['namespace' => 'ZHXCore\AuditLog\Http\Controllers', 'middleware' => 'web'], function () {
    Route::group(['prefix' => config('core.base.general.admin_dir'), 'middleware' => 'auth'], function () {

        Route::resource('audit-logs', 'AuditLogController', ['names' => 'audit-log'])->only(['index', 'destroy']);

        Route::group(['prefix' => 'audit-logs'], function () {
            Route::get('widgets/activities', [
                'as'         => 'audit-log.widget.activities',
                'uses'       => 'AuditLogController@getWidgetActivities',
                'permission' => 'audit-log.index',
            ]);

            Route::delete('items/destroy', [
                'as'         => 'audit-log.deletes',
                'uses'       => 'AuditLogController@deletes',
                'permission' => 'audit-log.destroy',
            ]);

            Route::get('items/empty', [
                'as'         => 'audit-log.empty',
                'uses'       => 'AuditLogController@deleteAll',
                'permission' => 'audit-log.destroy',
            ]);
        });
    });
});
