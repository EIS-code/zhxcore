<?php

namespace ZHXCore\Theme\Events;

use ZHXCore\Base\Events\Event;
use Illuminate\Queue\SerializesModels;

class RenderingSiteMapEvent extends Event
{
    use SerializesModels;
}
