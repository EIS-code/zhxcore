<?php

namespace ZHXCore\Theme\Events;

use ZHXCore\Base\Events\Event;
use ZHXCore\Slug\Models\Slug;
use Illuminate\Queue\SerializesModels;

class RenderingSingleEvent extends Event
{
    use SerializesModels;

    /**
     * @var Slug
     */
    public $slug;

    /**
     * RenderingSingleEvent constructor.
     * @param Slug $slug
     */
    public function __construct(Slug $slug)
    {
        $this->slug = $slug;
    }
}
