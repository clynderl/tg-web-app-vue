
const TelegramBot = require('node-telegram-bot-api');

const token = '5617619529:AAHKy_jaZ2OvCui-tWD_srO8njzkb5Csn_g';
const webAppUrl = 'https://web.telegram.org/#/im?p=@test_bot'

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'Welcome to the bot', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Начать обмен', web_app: { url: webAppUrl } },],
                ]
            }
        });

        await bot.sendMessage(chatId, 'Welcome to the bot', {
            reply_markup: {
                keyboard: [
                    [{ text: 'Начать обмен', web_app: { url: webAppUrl } },],
                ]
            }
        });
    }
});