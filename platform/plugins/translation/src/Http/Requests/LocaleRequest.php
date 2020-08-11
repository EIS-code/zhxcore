<?php

namespace ZHXCore\Translation\Http\Requests;

use ZHXCore\Support\Http\Requests\Request;

class LocaleRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'locale' => 'required',
        ];
    }
}
