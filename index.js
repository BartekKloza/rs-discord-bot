const Discord = require('discord.js');
require('dotenv').config();

const runAodSimulation = require('./commands/aod');
const runAmbiSimulation = require('./commands/ambi');
const getVisWaxInfo = require('./commands/viswax');

const client = new Discord.Client();

const prefix = '!';

client.once('ready', () => {
  console.log('BronzoBOT is online!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  let args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  const numOfKills = args[0];
  if (numOfKills > 10000) {
    message.channel.send('Podaj mniejsza liczbe kc! Max: 10000');
    return;
  }
  args.shift();

  if (command === 'aod') {
    runAodSimulation(numOfKills, args, message);
  }
  if (command === 'ambi') {
    runAmbiSimulation(numOfKills, args, message);
  }
  if (command === 'wax') {
    getVisWaxInfo(message);
  }
  if (command === 'bronzo') {
    message.channel.send('Dostępne komendy:')
    message.channel.send('**Aod symulacja:** !aod 100 bronzo kalif kiekrz applez zi00mek loli rafix');
    message.channel.send('**Ambi symulacja:** !ambi 20 bronzo');
    message.channel.send('**Dzisiejsze VisWax combo:** !wax');
    message.channel.send('Kod zrodlowy bota: <https://github.com/BartekKloza/rs-discord-bot>')
  }
})

client.login(process.env.DISCORD_BOT_TOKEN);
