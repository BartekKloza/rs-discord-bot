const Discord = require('discord.js');
require('dotenv').config();

const runAodSimulation = require('./commands/aod');
const runAmbiSimulation = require('./commands/ambi');
const runTelosSimulation = require('./commands/telos');
const getVisWaxInfo = require('./commands/viswax');
const bronzoCommand = require('./commands/bronzo');

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
  if (command === 'telos') {
    runTelosSimulation(numOfKills, args, message);
  }
  if (command === 'wax') {
    getVisWaxInfo(message);
  }
  if (command === 'bronzo') {
    bronzoCommand(message);
  }
})

client.login(process.env.DISCORD_BOT_TOKEN);
