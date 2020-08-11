<?php

namespace ZHXCore\Slug\Providers;

use Form;
use Illuminate\Support\ServiceProvider;

class FormServiceProvider extends ServiceProvider
{

    public function boot()
    {
        $this->app->booted(function () {
            Form::component('permalink', 'packages/slug::permalink', [
                'name',
                'value'      => null,
                'id'         => null,
                'prefix'     => '',
                'preview'    => false,
                'ending_url' => config('core.base.general.public_single_ending_url'),
                'attributes' => [],
            ]);
        });
    }
}
