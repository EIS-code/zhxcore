<?php

namespace ZHXCore\CustomField\Http\Requests;

use ZHXCore\Base\Enums\BaseStatusEnum;
use ZHXCore\Support\Http\Requests\Request;
use Illuminate\Validation\Rule;

class CreateFieldGroupRequest extends Request
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
            'order'  => 'integer|min:0|required',
            'rules'  => 'json|required',
            'title'  => 'required|max:255',
            'status' => ['required', Rule::in(BaseStatusEnum::values())],
        ];
    }
}
