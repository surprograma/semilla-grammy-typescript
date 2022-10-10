import { Telegraf } from 'telegraf';
import * as dotenv from 'dotenv';
import { exit } from 'process';

dotenv.config();

const token = process.env.BOT_TOKEN as string;

if (!token) {
  console.error(
    'Para poder ejecutar el bot, agregá el token que te dio @BotFather como BOT_TOKEN en el archivo .env',
  );
  exit(1);
}

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
