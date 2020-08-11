<?php

namespace ZHXCore\Contact\Http\Requests;

use ZHXCore\Support\Http\Requests\Request;

class ContactRequest extends Request
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     *
     * @throws \Illuminate\Contracts\Filesystem\FileNotFoundException
     */
    public function rules()
    {
        if (setting('enable_captcha') && is_plugin_active('captcha')) {
            return [
                'name'                 => 'required',
                'email'                => 'required|email',
                'content'              => 'required',
                'g-recaptcha-response' => 'required|captcha',
            ];
        }
        return [
            'name'    => 'required',
            'email'   => 'required|email',
            'content' => 'required',
        ];
    }

    /**
     * @return array
     */
    public function messages()
    {
        return [
            'name.required'                 => trans('plugins/contact::contact.form.name.required'),
            'email.required'                => trans('plugins/contact::contact.form.email.required'),
            'email.email'                   => trans('plugins/contact::contact.form.email.email'),
            'content.required'              => trans('plugins/contact::contact.form.content.required'),
            'g-recaptcha-response.required' => trans('plugins/contact::contact.form.g-recaptcha-response.required'),
            'g-recaptcha-response.captcha'  => trans('plugins/contact::contact.form.g-recaptcha-response.captcha'),
        ];
    }
}
