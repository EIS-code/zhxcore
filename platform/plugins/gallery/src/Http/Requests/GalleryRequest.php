<?php

namespace ZHXCore\Gallery\Http\Requests;

use ZHXCore\Base\Enums\BaseStatusEnum;
use ZHXCore\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class GalleryRequest extends Request
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     *
     */
    public function rules()
    {
        return [
            'name'        => 'required|max:120',
            'description' => 'required|max:400',
            'order'       => 'required|integer|min:0|max:127',
            'status'      => Rule::in(BaseStatusEnum::values()),
        ];
    }
}
