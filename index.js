const TelegramApi = require('node-telegram-bot-api');
const token ='6673783373:AAECjlJjJM8kVvelDbnweDRgMHWjZwEq20Y';

const bot = new TelegramApi(token, {polling: true});

bot.on('message', msg=>{
	const text = msg.text;
	const chatId = msg.chat.id;
	const first_name = msg.chat.first_name;
	const last_name = msg.chat.last_name;
	if(text==='/start') {
		bot.sendMessage(chatId, `Добро пожаловать в тестовый бот`);
	}
	if(text==='/info') {
		bot.sendMessage(chatId, `Вас зовут ${first_name}`);
	}
/* 	bot.sendMessage(chatId, `Вы написали мне:${text}`); */
	/* console.log(msg); */
})