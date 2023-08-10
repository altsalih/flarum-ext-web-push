import WebPushSettingsModal from './components/WebPushSettingsModal';

app.initializers.add('maosal-web-push', () => {
    app.extensionSettings['maosal-web-push'] = () => app.modal.show(new WebPushSettingsModal());
});