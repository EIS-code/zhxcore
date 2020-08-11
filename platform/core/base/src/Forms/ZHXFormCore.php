<?php

namespace ZHXCore\Base\Forms;

use Illuminate\Http\Request;
use Laraform;

class ZHXFormCore extends Laraform
{
    /**
     * @var string
     */
    public $component = 'laraform';

    /**
     * @var string
     */
    public $endpoint = '/laraform/process';

    /**
     * @var
     */
    public $request;

    /**
     * @param Request $request
     */
    public function boot(Request $request)
    {
        $this->request = $request;

        if (method_exists( $this, 'init' )) {
            $this->init();
        }
    }
}
