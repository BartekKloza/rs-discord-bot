const Discord = require('discord.js');

const getRandomInt = require('../helpers/getRandomInt');
const embededMessage = require('../helpers/embededMessage');

const runSolakSimulation = (numOfKills, args, message) => {
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
      resultObj[player].push(getRandomInt(1, 401));
    };
  });
  args.forEach(player => {
    let playerArr = resultObj[player];
    let rewardString = '';
    console.log(playerArr)
      playerArr.forEach(number => {
      if (number == 200 || number == 400) {
        rewardString += ' <:grim:731655920119185449>';
        anyDrops = true;
      }
      if (number % 399 == 0) {
        rewardString += ' <:bbc:731655882621845585>';
        anyDrops = true;
      }
      if (number % 398 == 0) {
        rewardString += ' <:ohbbc:731655946408820767>';
        anyDrops = true;
      }
    });
    
    rewardsObj[player] = rewardString;

  });
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
      .setAuthor('Symulacja dropow Solaka')
      .setThumbnail('https://runescape.wiki/images/thumb/f/f5/Solak.png/600px-Solak.png?747f3')
      .setTimestamp()
      .setFooter('Bot stworzony przez BronzoPL');
    message.channel.send(msgEmbed);
    return;
  }
  const msgEmbed = embededMessage(
    'Dropy: (liczba kc = ' + numOfKills + ')',
    'https://runescape.wiki/images/thumb/f/f5/Solak.png/600px-Solak.png?747f3',
    formattedDropsObjectsArr,
    'Symulacja dropow Solaka'
  );

  message.channel.send(msgEmbed).catch(e => {
    message.channel.send("Error! Prawdopodobnie zbyt duza liczba dropow do wyswietlenia! Sprobuj z mniejszym kc!")
  });
  
}

module.exports = runSolakSimulation;
