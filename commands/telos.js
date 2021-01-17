const Discord = require('discord.js');

const getRandomInt = require('../helpers/getRandomInt');

const rollEnrageIncrease = () => getRandomInt(5, 20);

const getUniqueValue = (enrage, streak, lotd) => {
  let modifiedEnrage = lotd ? Math.min(enrage + 25, 4000) : Math.min(enrage, 4000)
  let unique = Math.floor(10000 / (10 + modifiedEnrage * 0.25 + streak * 3));
  if (enrage < 100) unique = unique * 10;
  if (enrage < 25) unique = unique * 3;
  unique = Math.max(unique, 9);
  return unique;
}

const getOrbChance = (unique) => Math.ceil(unique * 115 / 75)
const getDormantCodexChance = (unique) => Math.ceil(unique * 115 / 10)

const runTelosSimulation = (enrage, args, message) => {
  if (args.length != 3) {
    message.channel.send('Zle uzyta komenda! Przyklad: !telos 200 10 1 bronzo');
    return;
  }
  enrage = parseInt(enrage);
  let streak = args[0];
  let lotd = args[1] == 1 ? true : false;
  let playerName = args[2]
  let anyDrops = false;
  let modifiedEnrage = enrage;
  
  let unique = getUniqueValue(enrage, streak, lotd);
  
  message.channel.send('Szansa na orba = ' + '1/' + getOrbChance(unique));
  message.channel.send('Szansa na specyficzny dormant/codex = ' + '1/' + getDormantCodexChance(unique));

  

  // message.channel.send(msgEmbed).catch(e => {
  //   message.channel.send("Error! Prawdopodobnie zbyt duza liczba dropow do wyswietlenia! Sprobuj z mniejszym kc!")
  // });
  
}

module.exports = runTelosSimulation;
