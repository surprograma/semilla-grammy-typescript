import { Telegraf } from 'telegraf';
import { configuracionDelEntorno } from './config';

const { token } = configuracionDelEntorno();
const bot = new Telegraf(token);

bot.start((ctx) => {
  ctx.reply(`¡Hola ${ctx.from.first_name}!`);
});

bot.help((ctx) => {
  ctx.reply('Todavía no sé para qué sirvo... 🤔');
});

bot.launch();

console.log('🤖 ¡Listo para responder mensajes!');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
