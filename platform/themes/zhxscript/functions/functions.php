<?php

use ZHXCore\Block\Models\Block;

register_page_template([
    'default' => 'Default'
]);

register_sidebar([
    'id'          => 'second_sidebar',
    'name'        => 'Second sidebar',
    'description' => 'This is a sample sidebar for zhxscript theme',
]);

theme_option()
    ->setField([
        'id'         => 'copyright',
        'section_id' => 'opt-text-subsection-general',
        'type'       => 'text',
        'label'      => __('Copyright'),
        'attributes' => [
            'name'    => 'copyright',
            'value'   => '© :year ZHXSCRIPT LLC. All right reserved.',
            'options' => [
                'class'        => 'form-control',
                'placeholder'  => __('Change copyright'),
                'data-counter' => 250,
            ]
        ],
        'helper' => __('Copyright on footer of site'),
    ]);

add_action('init', function () {
    config(['filesystems.disks.public.root' => public_path('storage')]);
}, 124);


if(is_plugin_active('block')){
    theme_option()
        ->setField([
            'id'         => 'Hero-block',
            'section_id' => 'opt-text-subsection-general',
            'type'       => 'select',
            'label'      => __('Hero Block'),
            'attributes' => [
                'name'    => 'hero_block',
                'list'    => app(Block::class)->pluck('name', 'alias'),
                'value'   => 'red',
                'options' => [
                    'class' => 'form-control',
                ],
            ],
            'helper'     => __('Select content for homepage hero.'),
        ]);
}
