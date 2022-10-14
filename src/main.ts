import { Telegraf } from 'telegraf';
import { configuracionDelEntorno } from './config';

const { token } = configuracionDelEntorno();
const bot = new Telegraf(token);

// Define el comando /start
bot.start(async (ctx) => {
  /* 
    El contexto (ctx) contiene información sobre el chat desde donde se invocó al bot.
    
    - Se puede acceder, por ejemplo, a información de la persona que escribió el mensaje (ctx.from),
    al mensaje en sí mismo (ctx.message) y varias cosas más.
    - También tiene varios métodos que permiten realizar acciones: responder (ctx.reply), reenviar
    el mensaje (ctx.forwardMessage), cambiar la foto del chat (ctx.setChatPhoto), etc.
  */
  await ctx.reply(`¡Hola ${ctx.from.first_name}!`);
});

// Define el comando /help
bot.help(async (ctx) => {
  await ctx.reply('Todavía no sé cuál es mi gracia... 🤔');
});

// Define el comando que especifiquemos - /numero, en este caso
bot.command('numero', async (ctx) => {
  const elegido = Math.floor(Math.random() * 100);
  await ctx.replyWithMarkdownV2(
    `Tu número de la fortuna es el *${elegido}* 🤑`,
  );
});

// Reacciona al evento especificado - la recepción de un sticker, en este caso
bot.on('sticker', async (ctx) => {
  await ctx.reply('Lindo sticker', {
    reply_to_message_id: ctx.message.message_id,
  });
});

// Reacciona a los mensajes que cumplan con la expresión regular
bot.hears(/Mi nombre es (\w+)/, async (ctx) => {
  const nombre = ctx.match[1];
  await ctx.reply(`👋 ¡Qué bonito verte de nuevo, ${nombre}!`);
});

// Inicializa el bot
bot.launch();

console.log('🤖 ¡Listo para responder mensajes!');

// Baja el servidor cuando recibe la orden por la consola
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
