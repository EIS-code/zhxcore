<?php

namespace ZHXCore\Contact\Forms;

use Assets;
use ZHXCore\Base\Forms\FormAbstract;
use ZHXCore\Contact\Enums\ContactStatusEnum;
use ZHXCore\Contact\Http\Requests\EditContactRequest;
use ZHXCore\Contact\Models\Contact;

class ContactForm extends FormAbstract
{

    /**
     * {@inheritDoc}
     */
    public function buildForm()
    {

        Assets::addScriptsDirectly('vendor/core/plugins/contact/js/contact.js')
            ->addStylesDirectly('vendor/core/plugins/contact/css/contact.css');

        $this
            ->setupModel(new Contact)
            ->setValidatorClass(EditContactRequest::class)
            ->withCustomFields()
            ->add('status', 'customSelect', [
                'label'      => trans('core/base::tables.status'),
                'label_attr' => ['class' => 'control-label required'],
                'choices'    => ContactStatusEnum::labels(),
            ])
            ->setBreakFieldPoint('status')
            ->addMetaBoxes([
                'information' => [
                    'title'      => trans('plugins/contact::contact.contact_information'),
                    'content'    => view('plugins/contact::contact-info', ['contact' => $this->getModel()])->render(),
                    'attributes' => [
                        'style' => 'margin-top: 0',
                    ],
                ],
                'replies' => [
                    'title'      => trans('plugins/contact::contact.replies'),
                    'content'    => view('plugins/contact::reply-box', ['contact' => $this->getModel()])->render(),
                ],
            ]);
    }
}
