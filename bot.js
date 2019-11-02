const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NjQwMjE3MDc3NzY0MDYzMjMy.Xb2m8Q.MmI_86FHq5QhQYiUhbTRPUdoW8g');

// url
// https://discordapp.com/api/oauth2/authorize?client_id=640217077764063232&scope=bot&permissions=8
