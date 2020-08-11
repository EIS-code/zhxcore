<?php

use ZHXCore\Base\Enums\BaseStatusEnum;
use ZHXCore\Base\Enums\SimpleStatusEnum;

return [
    'statuses' => [
        BaseStatusEnum::DRAFT      => 'Draft',
        BaseStatusEnum::PENDING    => 'Pending',
        BaseStatusEnum::PUBLISHED  => 'Published',
        SimpleStatusEnum::ACTIVE   => 'Active',
        SimpleStatusEnum::DISABLED => 'Disabled',
    ],
];