const Discord = require('discord.js');

const getRandomInt = require('../helpers/getRandomInt');

const runAodSimulation = (numOfKills, args, message) => {
  let resultObj = {};
  let rewardsObj = {};
  let anyDrops = false;
  if (args.length > 7) {
    message.channel.send('Zbyt duza liczba graczy (max 7)!');
    return;
  }
  args.forEach(player => {
    resultObj[player] = []
  });
  args.forEach(player => {
    for (i = 0; i < numOfKills; i++) {
      resultObj[player].push(getRandomInt(1, 20001));
    };
  });
  args.forEach(player => {
    let playerArr = resultObj[player];
    let codex = 0;
    let bloodChest = 0;
    let shadowChest = 0;
    let iceChest = 0;
    let smokeChest = 0;
    let wand = 0;
    let orb = 0;
    let rewardString = '';
    console.log(playerArr)
    playerArr.forEach(number => {
      if (number % 252 == 0) {
        codex = codex + 1;
        rewardString += ' <:codex:678658206603673620>';
        anyDrops = true;
      }
      if (number % 1988 == 0) {
        wand = wand + 1;
        rewardString += ' <:wand:678657673406840832>';
        anyDrops = true;
      }
      if (number % 1989 == 0) {
        orb = orb + 1;
        rewardString += ' <:core:678657844484243504>';
        anyDrops = true;
      }
      if (number % 19996 == 0) {
        bloodChest = bloodChest + 1;
        rewardString += ' <:chestC:678656849020583973>';
        anyDrops = true;
      }
      if (number % 19997 == 0) {
        shadowChest = shadowChest + 1;
        rewardString += ' <:chestU:678656911486353450>';
        anyDrops = true;
      }
      if (number % 19998 == 0) {
        iceChest = iceChest + 1;
        rewardString += ' <:chestG:678656964116480021>';
        anyDrops = true;
      }
      if (number % 19999 == 0) {
        smokeChest = smokeChest + 1;
        rewardString += ' <:ChestF:678656991261884476>';
        anyDrops = true;
      }
    });
    rewardsObj[player] = rewardString;

  });
  rewardsObj['kiekrz'] = '';
  let formattedDropsObjectsArr = [];
  Object.keys(rewardsObj).forEach(function (key) {
    if (rewardsObj[key].length > 0) {
      formattedDropsObjectsArr.push({
        name: key,
        value: rewardsObj[key]
      })
    }
  });
  if (!anyDrops) {
    const msgEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Nikt nie dostal dropa!')
      .setAuthor('Symulacja dropow AOD')
      .setThumbnail('https://runescape.wiki/images/2/2b/Nex_%28Angel_of_Death%29.png')
      .setTimestamp()
      .setFooter('Bot stworzony przez BronzoPL');
    message.channel.send(msgEmbed);
    return;
  }

  const msgEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Dropy: (liczba kc = ' + numOfKills + ')')
    .setAuthor('Symulacja dropow AOD')
    .setThumbnail('https://runescape.wiki/images/2/2b/Nex_%28Angel_of_Death%29.png')
    .addFields(...formattedDropsObjectsArr)
    .setTimestamp()
    .setFooter('Bot stworzony przez BronzoPL');

  message.channel.send(msgEmbed).catch(e => {
    message.channel.send("Error! Prawdopodobnie zbyt duza liczba dropow do wyswietlenia! Sprobuj z mniejszym kc!")
  });
  
}

module.exports = runAodSimulation;
