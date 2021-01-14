const Discord = require('discord.js');

const msgEmbed = (numOfKills, imgUrl, formattedDropsObjectsArr, author) => new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Dropy: (liczba kc = ' + numOfKills + ')')
    .setAuthor(author)
    .setThumbnail(imgUrl)
    .addFields(...formattedDropsObjectsArr)
    .setTimestamp()
  .setFooter('Bot stworzony przez BronzoPL');
    
module.exports = msgEmbed;
