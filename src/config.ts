import * as dotenv from 'dotenv';

dotenv.config();

interface BotConfig {
  token: string;
}

export function configuracionDelEntorno(): BotConfig {
  const token = process.env.BOT_TOKEN as string;

  if (!token) {
    throw new Error(
      `¡CONFIGURACIÓN INCOMPLETA!

Para poder ejecutar el bot, agregá el token que te dio @BotFather como BOT_TOKEN en el archivo .env y volvé a ejecutar \`npm start\`.
Por ejemplo:

BOT_TOKEN=123456:abcdefghijklmn`,
    );
  }

  return { token };
}
