const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "7359764178:AAF2T0GuMvz_33W8NUKePAbfDyDlfnQcn3I";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
// bot.onText(/\/echo (.+)/, (msg, match) => {
//   // 'msg' is the received Message from Telegram
//   // 'match' is the result of executing the regexp above on the text content
//   // of the message

//   const chatId = msg.chat.id;
//   const resp = match[1]; // the captured "whatever"

//   // send back the matched "whatever" to the chat
//   bot.sendMessage(chatId, resp);
// });

// bot.onText(/\/code/, (msg) => {
//   const chatId = msg.chat.id;
//   const repoLink = "https://github.com/MarikaBBB/telegramBot.git"; // Replace with your real link
//   bot.sendMessage(chatId, `Here is my repository: ${repoLink}`);
// });

// Listen for any kind of message. There are different kinds of
// messages.
// bot.on("message", (msg) => {
//   const chatId = msg.chat.id;

//   const text = msg.text || "";

//   // Avoid responding to commands
//   if (text.startsWith("/")) {
//     return;
//   }

//   // send a message to the chat acknowledging receipt of their message
//   bot.sendMessage(chatId, "Received your message");
// });
