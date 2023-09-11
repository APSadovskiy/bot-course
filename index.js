const TelegramApi = require('node-telegram-bot-api');
const {gameOptions, againOptions} = require('./options');
const token = '6673783373:AAECjlJjJM8kVvelDbnweDRgMHWjZwEq20Y';

const bot = new TelegramApi(token, { polling: true });

const chats = {}

const startGame = async (chatId) => {
	await bot.sendMessage(chatId, `Сейчас я загадаю цифру от 1 до 9, а Вы должны ее угадать.`);
	const randomNumber = Math.floor(Math.random() * 10);
	chats[chatId] = randomNumber;
	await bot.sendMessage(chatId, `Отгадайте`, gameOptions);
}
const start = () => {
	bot.setMyCommands([
		{ command: '/start', description: 'Начальное приветствие' },
		{ command: '/info', description: 'Получить информацию о пользователе' },
		{ command: '/game', description: 'Игра - Угадай цифру' }
	]);
	bot.on('message', async msg => {
		const text = msg.text;
		const chatId = msg.chat.id;
		const first_name = msg.chat.first_name;
		const last_name = msg.chat.last_name;
		if (text === '/start') {
			await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.webp');
		}
		if (text === '/info') {
			return bot.sendMessage(chatId, `Вас зовут ${first_name}`);
		}
		if (text === '/game') {
			return startGame(chatId);
		}
		return bot.sendMessage(chatId, `Я Вас не понимаю. Попробуте еще раз.`);
		/* 	bot.sendMessage(chatId, `Вы написали мне:${text}`); */
		/* console.log(msg); */
	})
}
bot.on('callback_query', async msg => {
	const data = msg.data;
	const chatId = msg.message.chat.id;
	if (data === '/again') {
		return startGame(chatId);
	}
	if (data == chats[chatId]) {
		return bot.sendMessage(chatId, `Поздравляю, вы угадали цифру ${data}`, againOptions);
	} else {
		return bot.sendMessage(chatId, `Вы не угадали. Бот загадал цифру ${chats[chatId]}`, againOptions);
	}

})
start(); 