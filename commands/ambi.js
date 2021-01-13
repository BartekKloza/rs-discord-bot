const Discord = require('discord.js');

const getRandomInt = require('../helpers/getRandomInt');

const runAmbiSimulation = (numOfKills, args, message) => {
  let resultObj = {};
  let rewardsObj = {};
  let anyDrops = false;
  if (args.length > 3) {
    message.channel.send('Zbyt duza liczba graczy (max 3)!');
    return;
  }
  
  args.forEach(player => {
    resultObj[player] = []
  });
  if (args.length == 1) {
    args.forEach(player => {
    for (i = 0; i < numOfKills; i++) {
      resultObj[player].push(getRandomInt(1, 16501));
    };
  });
    args.forEach(player => {
      let pet = false;
      let playerArr = resultObj[player];
      let rewardString = '';
      let possiblePartsArr = ['limb', 'stock', 'mechanism'];
      console.log('bambi debug');
      console.log(resultObj[player]);

        playerArr.forEach(number => {
          if (number % 55 == 0) {
            // if all have been rolled, reset
            if (possiblePartsArr.length == 0) possiblePartsArr = ['limb', 'stock', 'mechanism'];
            console.log('possiblePartsArr', possiblePartsArr);
            let rollXbowPart = getRandomInt(0, possiblePartsArr.length);
            let rollDouble = getRandomInt(1, 6);
            let shouldGetDoubled = rollDouble == 1 ? true : false;
            console.log('rollDouble', rollDouble, shouldGetDoubled)
            if (possiblePartsArr[rollXbowPart] == 'limb' && shouldGetDoubled) rewardString += ' <:limb:798298909520691231> <:limb:798298909520691231>';
            if (possiblePartsArr[rollXbowPart] == 'limb' && !shouldGetDoubled) rewardString += ' <:limb:798298909520691231>';
            if (possiblePartsArr[rollXbowPart] == 'stock' && shouldGetDoubled) rewardString += ' <:stock:798299059038847036> <:stock:798299059038847036>';
            if (possiblePartsArr[rollXbowPart] == 'stock' && !shouldGetDoubled) rewardString += ' <:stock:798299059038847036>';
            if (possiblePartsArr[rollXbowPart] == 'mechanism' && shouldGetDoubled) rewardString += ' <:mechanism:798299009478688779> <:mechanism:798299009478688779>';
            if (possiblePartsArr[rollXbowPart] == 'mechanism' && !shouldGetDoubled) rewardString += ' <:mechanism:798299009478688779>';
            possiblePartsArr.splice(rollXbowPart, 1);
            anyDrops = true;
          }
          if (number % 300 == 0 && pet == false) {
            rewardString += ' <:bambi:798299922653773854>';
            anyDrops = true;
            pet = true;
          }
        });
      rewardsObj[player] = rewardString;
    });
  }

  if (args.length == 2) {
    args.forEach(player => {
    for (i = 0; i < numOfKills; i++) {
      resultObj[player].push(getRandomInt(1, 167001));
    };
  });
    args.forEach(player => {
      let pet = false;
      let playerArr = resultObj[player];
      let rewardString = '';
      let possiblePartsArr = ['limb', 'stock', 'mechanism'];
      console.log('bambi debug');
      console.log(resultObj[player]);

        playerArr.forEach(number => {
          if (number % 167 == 0) {
            // if all have been rolled, reset
            if (possiblePartsArr.length == 0) possiblePartsArr = ['limb', 'stock', 'mechanism'];
            console.log('possiblePartsArr', possiblePartsArr);
            let rollXbowPart = getRandomInt(0, possiblePartsArr.length);
            let rollDouble = getRandomInt(1, 6);
            let shouldGetDoubled = rollDouble == 1 ? true : false;
            console.log('rollDouble', rollDouble, shouldGetDoubled)
            if (possiblePartsArr[rollXbowPart] == 'limb' && shouldGetDoubled) rewardString += ' <:limb:798298909520691231> <:limb:798298909520691231>';
            if (possiblePartsArr[rollXbowPart] == 'limb' && !shouldGetDoubled) rewardString += ' <:limb:798298909520691231>';
            if (possiblePartsArr[rollXbowPart] == 'stock' && shouldGetDoubled) rewardString += ' <:stock:798299059038847036> <:stock:798299059038847036>';
            if (possiblePartsArr[rollXbowPart] == 'stock' && !shouldGetDoubled) rewardString += ' <:stock:798299059038847036>';
            if (possiblePartsArr[rollXbowPart] == 'mechanism' && shouldGetDoubled) rewardString += ' <:mechanism:798299009478688779> <:mechanism:798299009478688779>';
            if (possiblePartsArr[rollXbowPart] == 'mechanism' && !shouldGetDoubled) rewardString += ' <:mechanism:798299009478688779>';
            possiblePartsArr.splice(rollXbowPart, 1);
            anyDrops = true;
          }
          if (number % 1000 == 0 && pet == false) {
            rewardString += ' <:bambi:798299922653773854>';
            anyDrops = true;
            pet = true;
          }
        });
      rewardsObj[player] = rewardString;
    });
  }

  if (args.length == 3) {
    args.forEach(player => {
    for (i = 0; i < numOfKills; i++) {
      resultObj[player].push(getRandomInt(1, 399001));
    };
    });

      args.forEach(player => {
        let pet = false;
        let playerArr = resultObj[player];
        let rewardString = '';
        let possiblePartsArr = ['limb', 'stock', 'mechanism'];
        console.log('bambi debug');
        console.log(resultObj[player]);
        playerArr.forEach(number => {
          if (number % 266 == 0) {
            // if all have been rolled, reset
            if (possiblePartsArr.length == 0) possiblePartsArr = ['limb', 'stock', 'mechanism'];
            console.log('possiblePartsArr', possiblePartsArr);
            let rollXbowPart = getRandomInt(0, possiblePartsArr.length);
            let rollDouble = getRandomInt(1, 10001);
            let shouldGetDoubled = rollDouble % 5 == 0 ? true : false;
            console.log('rollDouble', rollDouble, shouldGetDoubled)
            if (possiblePartsArr[rollXbowPart] == 'limb' && shouldGetDoubled) rewardString += ' <:limb:798298909520691231> <:limb:798298909520691231>';
            if (possiblePartsArr[rollXbowPart] == 'limb' && !shouldGetDoubled) rewardString += ' <:limb:798298909520691231>';
            if (possiblePartsArr[rollXbowPart] == 'stock' && shouldGetDoubled) rewardString += ' <:stock:798299059038847036> <:stock:798299059038847036>';
            if (possiblePartsArr[rollXbowPart] == 'stock' && !shouldGetDoubled) rewardString += ' <:stock:798299059038847036>';
            if (possiblePartsArr[rollXbowPart] == 'mechanism' && shouldGetDoubled) rewardString += ' <:mechanism:798299009478688779> <:mechanism:798299009478688779>';
            if (possiblePartsArr[rollXbowPart] == 'mechanism' && !shouldGetDoubled) rewardString += ' <:mechanism:798299009478688779>';
            possiblePartsArr.splice(rollXbowPart, 1);
            anyDrops = true;
          }
          if (number % 1500 == 0 && pet == false) {
            rewardString += ' <:bambi:798299922653773854>';
            anyDrops = true;
            pet = true;
          }
        });
        rewardsObj[player] = rewardString;
      });
  }

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
      .setAuthor('Symulacja dropow Ambasadora')
      .setThumbnail('https://runescape.wiki/images/7/7e/The_Ambassador.png?efb9b')
      .setTimestamp()
      .setFooter('Bot stworzony przez BronzoPL');
    message.channel.send(msgEmbed);
    return;
  }

  const msgEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Dropy: (liczba kc = ' + numOfKills + ')')
    .setAuthor('Symulacja dropow Ambasadora')
    .setThumbnail('https://runescape.wiki/images/7/7e/The_Ambassador.png?efb9b')
    .addFields(...formattedDropsObjectsArr)
    .setTimestamp()
    .setFooter('Bot stworzony przez BronzoPL');

  message.channel.send(msgEmbed).catch(e => {
    message.channel.send("Error! Prawdopodobnie zbyt duza liczba dropow do wyswietlenia! Sprobuj z mniejszym kc!")
  });
  
}

module.exports = runAmbiSimulation;
