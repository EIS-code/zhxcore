<?php

namespace ZHXCore\Contact\Http\Controllers;

use ZHXCore\Base\Forms\FormBuilder;
use ZHXCore\Base\Http\Controllers\BaseController;
use ZHXCore\Base\Http\Responses\BaseHttpResponse;
use ZHXCore\Base\Traits\HasDeleteManyItemsTrait;
use ZHXCore\Contact\Enums\ContactStatusEnum;
use ZHXCore\Contact\Forms\ContactForm;
use ZHXCore\Contact\Http\Requests\ContactReplyRequest;
use ZHXCore\Contact\Http\Requests\EditContactRequest;
use ZHXCore\Contact\Repositories\Interfaces\ContactReplyInterface;
use ZHXCore\Contact\Tables\ContactTable;
use ZHXCore\Contact\Repositories\Interfaces\ContactInterface;
use ZHXCore\Setting\Supports\SettingStore;
use EmailHandler;
use Exception;
use Illuminate\Http\Request;
use ZHXCore\Base\Events\DeletedContentEvent;
use ZHXCore\Base\Events\UpdatedContentEvent;

class ContactController extends BaseController
{
    use HasDeleteManyItemsTrait;

    /**
     * @var ContactInterface
     */
    protected $contactRepository;

    /**
     * @param ContactInterface $contactRepository
     */
    public function __construct(ContactInterface $contactRepository)
    {
        $this->contactRepository = $contactRepository;
    }

    /**
     * @param ContactTable $dataTable
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Throwable
     */
    public function index(ContactTable $dataTable)
    {
        page_title()->setTitle(trans('plugins/contact::contact.menu'));

        return $dataTable->renderTable();
    }

    /**
     * @param $id
     * @param FormBuilder $formBuilder
     * @return string
     *
     */
    public function edit($id, FormBuilder $formBuilder)
    {
        page_title()->setTitle(trans('plugins/contact::contact.edit'));

        $contact = $this->contactRepository->findOrFail($id);

        return $formBuilder->create(ContactForm::class, ['model' => $contact])->renderForm();
    }

    /**
     * @param $id
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update($id, EditContactRequest $request, BaseHttpResponse $response)
    {
        $contact = $this->contactRepository->findOrFail($id);

        $contact->fill($request->input());

        $this->contactRepository->createOrUpdate($contact);

        event(new UpdatedContentEvent(CONTACT_MODULE_SCREEN_NAME, $request, $contact));

        return $response
            ->setPreviousUrl(route('contacts.index'))
            ->setMessage(trans('core/base::notices.update_success_message'));
    }

    /**
     * @param $id
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function destroy($id, Request $request, BaseHttpResponse $response)
    {
        try {
            $contact = $this->contactRepository->findOrFail($id);
            $this->contactRepository->delete($contact);
            event(new DeletedContentEvent(CONTACT_MODULE_SCREEN_NAME, $request, $contact));

            return $response->setMessage(trans('core/base::notices.delete_success_message'));
        } catch (Exception $exception) {
            return $response
                ->setError()
                ->setMessage($exception->getMessage());
        }
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     * @throws Exception
     */
    public function deletes(Request $request, BaseHttpResponse $response)
    {
        return $this->executeDeleteItems($request, $response, $this->contactRepository, CONTACT_MODULE_SCREEN_NAME);
    }

    /**
     * @param $id
     * @param ContactReplyRequest $request
     * @param BaseHttpResponse $response
     * @param ContactReplyInterface $contactReplyRepository
     * @return BaseHttpResponse
     */
    public function postReply(
        $id,
        ContactReplyRequest $request,
        BaseHttpResponse $response,
        ContactReplyInterface $contactReplyRepository
    ) {
        $contact = $this->contactRepository->findOrFail($id);

        EmailHandler::send($request->input('message'), 'Re: ' . $contact->subject, $contact->email);

        $contactReplyRepository->create([
            'message'    => $request->input('message'),
            'contact_id' => $id,
        ]);

        $contact->status = ContactStatusEnum::READ();
        $this->contactRepository->createOrUpdate($contact);

        return $response
            ->setMessage(__('Message sent successfully!'));
    }
}
