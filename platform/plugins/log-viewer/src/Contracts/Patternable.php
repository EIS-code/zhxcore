<?php

namespace ZHXCore\LogViewer\Contracts;

use ZHXCore\LogViewer\Contracts\Utilities\Filesystem;

interface Patternable
{
    /**
     * Get the log pattern.
     *
     * @return string
     */
    public function getPattern();

    /**
     * Set the log pattern.
     *
     * @param string $date
     * @param string $prefix
     * @param string $extension
     *
     * @return self
     */
    public function setPattern(
        $prefix = Filesystem::PATTERN_PREFIX,
        $date = Filesystem::PATTERN_DATE,
        $extension = Filesystem::PATTERN_EXTENSION
    );
}
