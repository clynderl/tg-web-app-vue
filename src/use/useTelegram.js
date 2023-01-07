const tg = window.Telegram.WebApp;
export default function useTelegram() {
    const onClose = () => {
        tg.close();
    };

    const onToggleButton = () => {
        tg.MainButton.show();
    };

    return {
        tg,
        onClose,
        onToggleButton,
    };
}
