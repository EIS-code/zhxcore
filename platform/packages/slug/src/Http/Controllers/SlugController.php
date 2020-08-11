<?php

namespace ZHXCore\Slug\Http\Controllers;

use ZHXCore\Base\Http\Controllers\BaseController;
use ZHXCore\Slug\Http\Requests\SlugRequest;
use ZHXCore\Slug\Repositories\Interfaces\SlugInterface;
use ZHXCore\Slug\Services\SlugService;

class SlugController extends BaseController
{
    /**
     * @var SlugInterface
     */
    protected $slugRepository;

    /**
     * @var SlugService
     */
    protected $slugService;

    /**
     * SlugController constructor.
     * @param SlugInterface $slugRepository
     * @param SlugService $slugService
     */
    public function __construct(SlugInterface $slugRepository, SlugService $slugService)
    {
        $this->slugRepository = $slugRepository;
        $this->slugService = $slugService;
    }

    /**
     * @param SlugRequest $request
     * @return int|string
     */
    public function store(SlugRequest $request)
    {
        return $this->slugService->create($request->input('name'), $request->input('slug_id'),
            $request->input('model'));
    }
}
