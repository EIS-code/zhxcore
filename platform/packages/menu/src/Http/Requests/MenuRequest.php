<?php

namespace ZHXCore\Menu\Http\Requests;

use ZHXCore\Base\Enums\BaseStatusEnum;
use ZHXCore\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class MenuRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name'   => 'required|min:3|max:120',
            'status' => Rule::in(BaseStatusEnum::values()),
        ];
    }
}
