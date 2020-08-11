<?php

namespace Theme\Zhxscript\Http\Controllers;

use ZHXCore\Base\Http\Responses\BaseHttpResponse;
use ZHXCore\Theme\Http\Controllers\PublicController;

class ZhxscriptController extends PublicController
{
    /**
     * {@inheritDoc}
     */
    public function getIndex(BaseHttpResponse $response)
    {
        return parent::getIndex($response);
    }

    /**
     * {@inheritDoc}
     */
    public function getView(BaseHttpResponse $response, $key = null)
    {
        return parent::getView($response, $key);
    }

    /**
     * {@inheritDoc}
     */
    public function getSiteMap()
    {
        return parent::getSiteMap();
    }
}
