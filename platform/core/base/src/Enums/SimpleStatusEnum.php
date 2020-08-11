<?php

namespace ZHXCore\Base\Enums;

use ZHXCore\Base\Supports\Enum;
use Html;

/**
 * @method static SimpleStatusEnum ACTIVE()
 * @method static SimpleStatusEnum DISABLED()
 */
class SimpleStatusEnum extends Enum
{
    public const ACTIVE = 'active';
    public const DISABLED = 'disabled';

    /**
     * @var string
     */
    public static $langPath = 'core/base::enums.statuses';

    /**
     * @return string
     */
    public function toHtml()
    {
        switch ($this->value) {
            case self::ACTIVE:
                return Html::tag('span', self::ACTIVE()->label(), ['class' => 'label-info status-label'])
                    ->toHtml();
            case self::DISABLED:
                return Html::tag('span', self::DISABLED()->label(), ['class' => 'label-warning status-label'])
                    ->toHtml();
            default:
                return parent::toHtml();
        }
    }
}
