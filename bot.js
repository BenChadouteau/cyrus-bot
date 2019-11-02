const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    const embed = new Discord.RichEmbed()
      .setTitle('Pong!')
      .setColor(0xFF0000)
      .setDescription('BOOM IT\'S A PONG!');
    msg.channel.send(embed);
    //msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);