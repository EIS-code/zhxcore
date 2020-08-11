<?php

namespace ZHXCore\Block\Models;

use ZHXCore\Base\Enums\BaseStatusEnum;
use ZHXCore\Base\Traits\EnumCastable;
use ZHXCore\Base\Models\BaseModel;

class Block extends BaseModel
{
    use EnumCastable;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'blocks';

    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'content',
        'status',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => BaseStatusEnum::class,
    ];
}
