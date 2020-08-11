<?php

namespace ZHXCore\Page\Models;

use ZHXCore\ACL\Models\User;
use ZHXCore\Base\Enums\BaseStatusEnum;
use ZHXCore\Base\Traits\EnumCastable;
use ZHXCore\Revision\RevisionableTrait;
use ZHXCore\Slug\Traits\SlugTrait;
use ZHXCore\Base\Models\BaseModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Page extends BaseModel
{
    use RevisionableTrait;
    use SlugTrait;
    use EnumCastable;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'pages';

    /**
     * @var mixed
     */
    protected $revisionEnabled = true;

    /**
     * @var mixed
     */
    protected $revisionCleanup = true;

    /**
     * @var int
     */
    protected $historyLimit = 20;

    /**
     * @var array
     */
    protected $dontKeepRevisionOf = ['content'];

    /**
     * The date fields for the model.clear
     *
     * @var array
     */
    protected $dates = [
        'created_at',
        'updated_at',
    ];

    /**
     * @var array
     */
    protected $casts = [
        'status' => BaseStatusEnum::class,
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'content',
        'image',
        'template',
        'description',
        'is_featured',
        'status',
        'user_id',
    ];

    /**
     * @return BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class)->withDefault();
    }
}
