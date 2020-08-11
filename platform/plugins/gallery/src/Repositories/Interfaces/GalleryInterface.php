<?php

namespace ZHXCore\Gallery\Repositories\Interfaces;

use ZHXCore\Support\Repositories\Interfaces\RepositoryInterface;

interface GalleryInterface extends RepositoryInterface
{

    /**
     * Get all galleries.
     *
     * @return mixed
     */
    public function getAll();

    /**
     * @return mixed
     */
    public function getDataSiteMap();

    /**
     * @param $limit
     */
    public function getFeaturedGalleries($limit);
}
