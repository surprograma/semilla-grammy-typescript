import { Telegraf } from 'telegraf';
import { configuracionDelEntorno } from './config';

const { token } = configuracionDelEntorno();
const bot = new Telegraf(token);

bot.start((ctx) => {
  /* 
    El contexto (ctx) contiene información sobre el chat desde donde se invocó al bot.
    
    - Se puede acceder, por ejemplo, a información de la persona que escribió el mensaje (ctx.from),
    al mensaje en sí mismo (ctx.message) y varias cosas más.
    - También tiene varios métodos que permiten realizar acciones: responder (ctx.reply), reenviar
    el mensaje (ctx.forwardMessage), cambiar la foto del chat (ctx.setChatPhoto), etc.
  */
  ctx.reply(`¡Hola ${ctx.from.first_name}!`);
});

bot.help((ctx) => {
  ctx.reply('Todavía no sé para qué sirvo... 🤔');
});

bot.launch();

console.log('🤖 ¡Listo para responder mensajes!');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
