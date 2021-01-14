const Discord = require('discord.js');

const getRandomInt = require('../helpers/getRandomInt');

const runTelosSimulation = (enrage, args, message) => {
  message.channel.send('DEBUG enrage = ' + enrage)
  enrage = parseInt(enrage);
  let streak = args[0];
  let lotd = args[1] == 1 ? true : false;
  let player = args[2]
  let anyDrops = false;
  let modifiedEnrage = enrage;
  if (args.length > 3) {
    message.channel.send('Zle uzyta komenda! Przyklad: !telos 200 10 1 bronzo');
    return;
  }
  if (lotd) {
    console.log(typeof enrage);
    modifiedEnrage = Math.min(enrage + 25, 4000);
  }
  let unique = Math.floor(10000 / (10 + modifiedEnrage * 0.25 + streak * 3));
  if (enrage < 100) unique = unique * 10;
  if (enrage < 25) unique = unique * 3;
  unique = Math.max(unique, 9);
  message.channel.send('DEBUG enrage = ' + modifiedEnrage + '| streak = ' + streak);
  message.channel.send('Szansa na orba = ' + '1/' + Math.ceil(unique * 115 / 75));
  message.channel.send('Szansa na specyficzny dormant/codex = ' + '1/' + Math.ceil(unique * 115 / 10));

  

  // message.channel.send(msgEmbed).catch(e => {
  //   message.channel.send("Error! Prawdopodobnie zbyt duza liczba dropow do wyswietlenia! Sprobuj z mniejszym kc!")
  // });
  
}

module.exports = runTelosSimulation;
