## Notifia
No sweat, TypeScript-supported Node library for sending messages to an array of different providers.

### Providers

* Discord
* Slack
* Mail
* **Much, much more to come!**

### Installation

You'll need Node.js, a package manager (npm, yarn, pnpm etc.) installed.

```shell
npm install notifia
# or
yarn add notifia
# or
pnpm add notifia
```

### Usage

#### Discord

```ts
// ESM is required
import { DiscordProvider } from 'notifia';

const discord = new DiscordProvider('webhookUrl');

const send = async (content: string) => {
	await discord.send(content);
}

await send('Initial fire.');
setInterval(async () => await send('Fired webhook.'), 10000);
```
