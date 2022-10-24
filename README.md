# Repositorio semilla: bot de Telegram con grammY y TypeScript :seedling:

> Este es uno de los repositorios que utilizamos en el curso **Desarrollo de bots de Telegram en TypeScript**, [disponible en YouTube](https://www.youtube.com/playlist?list=PL7q-McYJyHlip2-k4RW1nDxJWsFuO4nO1). Te recomendamos que mires el curso para entender un poco más sobre las tecnologías que elegimos. :smiley:

¡Bienvenida/o! En este repositorio encontrarás una plantilla (de las infinitas posibles) para crear un bot de Telegram utilizando NodeJS y TypeScript. Las principales tecnologías que utilizamos son:

- [NodeJS](https://nodejs.org/es/): entorno de ejecución para JavaScript/TypeScript.
- [grammY](https://grammy.dev/): framework para crear bots de Telegram.
- [Jest](https://jestjs.io/): framework para escribir tests.

Para crear un proyecto siguiendo esta plantilla, lo único que tenés que hacer es clickear en el botón que dice `Use this template`. ¡Y no te olvides de cambiarle el nombre en el `package.json`!

## :point_up: Prerrequisitos - para instalar antes de empezar

Vas a necesitar un IDE o al menos un editor de texto que coloree la sintaxis. Recomendamos utilizar [Visual Studio Code](https://code.visualstudio.com/) - que se lleva muy bien con proyectos TypeScript - enriquecido con los siguientes plugins:

- [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

Para ejecutar el código es necesario tener NodeJS en su versión 16 (`lts/gallium`). Para instalarlo recomendamos utilizar el manejador de versiones [`nvm`](https://github.com/nvm-sh/nvm), aunque también podés hacerlo manualmente siguiendo las instrucciones adecuadas para tu sistema operativo.

## :ballot_box_with_check: Configuración inicial del proyecto

Asumiendo que ya configuraste todos los prerrequisitos, estos son los comandos que deberías ejecutar la primera vez que trabajes en el proyecto:

```shell
# Copia las variables de entorno necesarias para comunicarse con la Bot API de Telegram.
cp .env.example .env

# Instala las dependencias Node del proyecto.
npm install
```

¡No te olvides de reemplazar el valor del `BOT_TOKEN` por el que te dio [@BotFather](https://t.me/botfather).

## :woman_technologist: :man_technologist: Comandos útiles para el día a día

A continuación, algunos comandos necesarios para el desarrollo diario en este proyecto.

```shell
# Levanta el proyecto y recarga automáticamente si hay cambios.
npm start

# Corre ESlint y Prettier, corrigiendo los errores que pueda y formateando el código.
npm run lint

# Ejecuta los tests una sola vez.
npm test

# Ejecuta los tests y se queda esperando por cambios.
npm test:watch
```
