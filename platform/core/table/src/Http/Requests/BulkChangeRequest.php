<?php

namespace ZHXCore\Table\Http\Requests;

use ZHXCore\Support\Http\Requests\Request;

class BulkChangeRequest extends Request
{
    /**
     * @return array
     */
    public function rules()
    {
        return [
            'class' => 'required',
        ];
    }
}