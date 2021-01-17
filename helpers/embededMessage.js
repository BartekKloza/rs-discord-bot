const Discord = require('discord.js');

const msgEmbed = (title, imgUrl, formattedDropsObjectsArr, author) => new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(title)
    .setAuthor(author)
    .setThumbnail(imgUrl)
    .addFields(...formattedDropsObjectsArr)
    .setTimestamp()
  .setFooter('Bot stworzony przez BronzoPL');
    
module.exports = msgEmbed;
