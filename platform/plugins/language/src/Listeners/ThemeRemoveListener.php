<?php

namespace ZHXCore\Language\Listeners;

use ZHXCore\Setting\Repositories\Interfaces\SettingInterface;
use ZHXCore\Theme\Events\ThemeRemoveEvent;
use ZHXCore\Widget\Repositories\Interfaces\WidgetInterface;
use Exception;
use Language;

class ThemeRemoveListener
{

    /**
     * Handle the event.
     *
     * @param ThemeRemoveEvent $event
     * @return void
     */
    public function handle(ThemeRemoveEvent $event)
    {
        try {
            $languages = Language::getActiveLanguage(['lang_code']);

            foreach ($languages as $language) {
                app(WidgetInterface::class)->deleteBy(['theme' => $event->theme . '-' . $language->lang_code]);
                app(SettingInterface::class)->getModel()
                    ->where('key', 'like', 'theme-' . $event->theme . '-' . $language->lang_code . '-%')
                    ->delete();
            }

        } catch (Exception $exception) {
            info($exception->getMessage());
        }
    }
}
