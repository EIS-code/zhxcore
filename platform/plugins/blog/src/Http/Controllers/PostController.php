<?php

namespace ZHXCore\Blog\Http\Controllers;

use ZHXCore\Base\Events\BeforeEditContentEvent;
use ZHXCore\Base\Forms\FormBuilder;
use ZHXCore\Base\Http\Controllers\BaseController;
use ZHXCore\Base\Http\Responses\BaseHttpResponse;
use ZHXCore\Base\Traits\HasDeleteManyItemsTrait;
use ZHXCore\Blog\Forms\PostForm;
use ZHXCore\Blog\Http\Requests\PostRequest;
use ZHXCore\Blog\Models\Post;
use ZHXCore\Blog\Repositories\Interfaces\CategoryInterface;
use ZHXCore\Blog\Repositories\Interfaces\PostInterface;
use ZHXCore\Blog\Tables\PostTable;
use ZHXCore\Blog\Repositories\Interfaces\TagInterface;
use ZHXCore\Blog\Services\StoreCategoryService;
use ZHXCore\Blog\Services\StoreTagService;
use Exception;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use ZHXCore\Base\Events\CreatedContentEvent;
use ZHXCore\Base\Events\DeletedContentEvent;
use ZHXCore\Base\Events\UpdatedContentEvent;
use Illuminate\View\View;
use Throwable;

class PostController extends BaseController
{

    use HasDeleteManyItemsTrait;

    /**
     * @var PostInterface
     */
    protected $postRepository;

    /**
     * @var TagInterface
     */
    protected $tagRepository;

    /**
     * @var CategoryInterface
     */
    protected $categoryRepository;

    /**
     * @param PostInterface $postRepository
     * @param TagInterface $tagRepository
     * @param CategoryInterface $categoryRepository
     */
    public function __construct(
        PostInterface $postRepository,
        TagInterface $tagRepository,
        CategoryInterface $categoryRepository
    ) {
        $this->postRepository = $postRepository;
        $this->tagRepository = $tagRepository;
        $this->categoryRepository = $categoryRepository;
    }

    /**
     * @param PostTable $dataTable
     * @return Factory|View
     * @throws Throwable
     */
    public function index(PostTable $dataTable)
    {
        page_title()->setTitle(trans('plugins/blog::posts.menu_name'));

        return $dataTable->renderTable();
    }

    /**
     * @param FormBuilder $formBuilder
     * @return string
     */
    public function create(FormBuilder $formBuilder)
    {
        page_title()->setTitle(trans('plugins/blog::posts.create'));

        return $formBuilder->create(PostForm::class)->renderForm();
    }

    /**
     * @param PostRequest $request
     * @param StoreTagService $tagService
     * @param StoreCategoryService $categoryService
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function store(
        PostRequest $request,
        StoreTagService $tagService,
        StoreCategoryService $categoryService,
        BaseHttpResponse $response
    ) {
        /**
         * @var Post $post
         */
        $post = $this->postRepository->createOrUpdate(array_merge($request->input(), [
            'author_id' => Auth::user()->getKey(),
        ]));

        event(new CreatedContentEvent(POST_MODULE_SCREEN_NAME, $request, $post));

        $tagService->execute($request, $post);

        $categoryService->execute($request, $post);

        return $response
            ->setPreviousUrl(route('posts.index'))
            ->setNextUrl(route('posts.edit', $post->id))
            ->setMessage(trans('core/base::notices.create_success_message'));
    }

    /**
     * @param int $id
     * @param FormBuilder $formBuilder
     * @param Request $request
     * @return string
     */
    public function edit($id, FormBuilder $formBuilder, Request $request)
    {
        $post = $this->postRepository->findOrFail($id);

        event(new BeforeEditContentEvent($request, $post));

        page_title()->setTitle(trans('plugins/blog::posts.edit') . ' "' . $post->name . '"');

        return $formBuilder->create(PostForm::class, ['model' => $post])->renderForm();
    }

    /**
     * @param int $id
     * @param PostRequest $request
     * @param StoreTagService $tagService
     * @param StoreCategoryService $categoryService
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     */
    public function update(
        $id,
        PostRequest $request,
        StoreTagService $tagService,
        StoreCategoryService $categoryService,
        BaseHttpResponse $response
    ) {
        $post = $this->postRepository->findOrFail($id);

        $post->fill($request->input());

        $this->postRepository->createOrUpdate($post);

        event(new UpdatedContentEvent(POST_MODULE_SCREEN_NAME, $request, $post));

        $tagService->execute($request, $post);

        $categoryService->execute($request, $post);

        return $response
            ->setPreviousUrl(route('posts.index'))
            ->setMessage(trans('core/base::notices.update_success_message'));
    }

    /**
     * @param int $id
     * @param Request $request
     * @return BaseHttpResponse
     */
    public function destroy($id, Request $request, BaseHttpResponse $response)
    {
        try {
            $post = $this->postRepository->findOrFail($id);
            $this->postRepository->delete($post);

            event(new DeletedContentEvent(POST_MODULE_SCREEN_NAME, $request, $post));

            return $response
                ->setMessage(trans('core/base::notices.delete_success_message'));
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
        return $this->executeDeleteItems($request, $response, $this->postRepository, POST_MODULE_SCREEN_NAME);
    }

    /**
     * @param Request $request
     * @param BaseHttpResponse $response
     * @return BaseHttpResponse
     * @throws Throwable
     */
    public function getWidgetRecentPosts(Request $request, BaseHttpResponse $response)
    {
        $limit = $request->input('paginate', 10);
        $posts = $this->postRepository->getModel()
            ->orderBy('posts.created_at', 'desc')
            ->paginate($limit);

        return $response
            ->setData(view('plugins/blog::posts.widgets.posts', compact('posts', 'limit'))->render());
    }
}