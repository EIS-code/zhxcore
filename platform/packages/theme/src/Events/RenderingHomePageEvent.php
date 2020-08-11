<?php

namespace ZHXCore\Theme\Events;

use ZHXCore\Base\Events\Event;
use Illuminate\Queue\SerializesModels;

class RenderingHomePageEvent extends Event
{
    use SerializesModels;
}