<?php

namespace ZHXCore\PageBuilder\Http\Requests;

use ZHXCore\Support\Http\Requests\Request;

class PageBuilderRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'content' => 'required',
        ];
    }
}
