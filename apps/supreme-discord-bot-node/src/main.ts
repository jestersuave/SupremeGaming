import { Client } from 'discord.js';

import { BOT_TOKEN } from './environments/environment';

const client = new Client();

client.on('message', (message) => {
  console.log(message.cleanContent);
});

client.login(BOT_TOKEN);
