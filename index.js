const TelegramApi = require('node-telegram-bot-api');
const token ='6673783373:AAECjlJjJM8kVvelDbnweDRgMHWjZwEq20Y';

const bot = new TelegramApi(token, {polling: true});

bot.on('message', msg=>{
	const text = msg.text;
	const chatId = msg.chat.id;
	bot.sendMessage(chatId, `Вы написали мне:${text}`);
	/* console.log(msg); */
})