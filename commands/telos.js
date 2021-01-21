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

const getOrbChance = (unique) => Math.ceil(unique * 115 / 75);
const getDormantCodexChance = (unique) => Math.ceil(unique * 115 / 10);

const runTelosSimulation = (enrage, args, message) => {
  if (args.length != 3) {
    message.channel.send('Zle uzyta komenda! Przyklad: !telos 200 10 1 bronzo');
    return;
  }
  let currentEnrage = parseInt(enrage);
  let streak = parseInt(args[0]);
  let lotd = args[1] == 1 ? true : false;
  let playerName = args[2]
  let anyDrops = false;
  let rewardString = '';
  let orbsArr = ['green', 'red', 'black'];
  let finalEnrage = 0;


  for (let i = 0; i < streak; i++) {
    let currentUnique = getUniqueValue(currentEnrage, i, lotd)
    let currentOrbChance = getOrbChance(currentUnique);
    let currentDormantCodexChance = getDormantCodexChance(currentUnique);
    let rollForUnique = getRandomInt(1, currentOrbChance * currentDormantCodexChance + 1);
    if (rollForUnique % currentOrbChance == 0) {
      if (orbsArr.length == 0) orbsArr = ['green', 'red', 'black'];
      let rollOrbColor = getRandomInt(0, orbsArr.length);
      if (orbsArr[rollOrbColor] == 'green') rewardString += ' <:orbgreen:801620413170843658>';
      if (orbsArr[rollOrbColor] == 'red') rewardString += ' <:orbred:801620922423050280>';
      if (orbsArr[rollOrbColor] == 'black') rewardString += ' <:orbblack:801620883989987338>';
      anyDrops = true;
      orbsArr.splice(rollOrbColor, 1);
    } else if(rollForUnique % currentDormantCodexChance == 0) {
      let rollDormant = getRandomInt(0, 4);
      if (rollDormant == 0) rewardString += ' <:sgb:718422390845210665>';
      if (rollDormant == 1) rewardString += ' <:zgs:801623691213275156>';
      if (rollDormant == 2) rewardString += ' <:sliske:801623645910335508>';
      if (rollDormant == 3) rewardString += ' <:codex:678658206603673620>';
      anyDrops = true;
    }
    finalEnrage = currentEnrage;
    currentEnrage += rollEnrageIncrease();
  }

  if (!anyDrops) {
    const msgEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Dry streak! Nie wypadl zaden rare item!')
      .setAuthor('Symulacja dropow Telosa')
      .setThumbnail('https://runescape.wiki/images/thumb/c/c6/Telos%2C_the_Warden.png/400px-Telos%2C_the_Warden.png?99e18')
      .setTimestamp()
      .setFooter('Bot stworzony przez BronzoPL');
    message.channel.send(msgEmbed);
    return;
  }
  let formattedDropsObjectsArr = {
    name: playerName,
    value: rewardString
  }
  const msgEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Dropy: (streak = ' + streak + ', koncowy enrage = ' + finalEnrage + ')')
    .setAuthor('Symulacja dropow Telosa')
    .setThumbnail('https://runescape.wiki/images/thumb/c/c6/Telos%2C_the_Warden.png/400px-Telos%2C_the_Warden.png?99e18')
    .addFields(formattedDropsObjectsArr)
    .setTimestamp()
    .setFooter('Bot stworzony przez BronzoPL');

  message.channel.send(msgEmbed).catch(e => {
    message.channel.send("Error! Prawdopodobnie zbyt duza liczba dropow do wyswietlenia! Sprobuj z mniejszym kc!")
  });
  
  // let unique = getUniqueValue(enrage, streak, lotd);
  
  // message.channel.send('Szansa na orba = ' + '1/' + getOrbChance(unique));
  // message.channel.send('Szansa na specyficzny dormant/codex = ' + '1/' + getDormantCodexChance(unique));

  

  // message.channel.send(msgEmbed).catch(e => {
  //   message.channel.send("Error! Prawdopodobnie zbyt duza liczba dropow do wyswietlenia! Sprobuj z mniejszym kc!")
  // });
  
}

module.exports = runTelosSimulation;
