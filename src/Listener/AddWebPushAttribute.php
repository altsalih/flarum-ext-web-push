<?php

namespace MaoSal\WebPush\Listener;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\Api\Event\Serializing;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class AddWebPushAttribute {
	protected $settings;

	public function __construct(SettingsRepositoryInterface $settings) {
		$this->settings = $settings;
	}

	public function subscribe(Dispatcher $events) {
		$events->listen(Serializing::class, [$this, 'addAttributes']);
	}

	public function addAttributes(Serializing $event) {
		$event->attributes['maosal_webpush.app_id'] = $this->settings->get('maosal-webpush.app_id');
		$event->attributes['maosal_webpush.subdomain'] = $this->settings->get('maosal-webpush.subdomain');
	}
}
