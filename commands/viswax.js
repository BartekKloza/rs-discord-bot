const Discord = require('discord.js');
const HTMLParser = require('node-html-parser');
const fetch = require('node-fetch');

let root;
const url = "https://secure.runescape.com/m=forum/a=13/sl=0/forums?75,76,378,66118165,goto,1";

const getVisWaxInfo = (message) => {
  fetch(url)
    .then (res => res.text())
    .then(body => root = HTMLParser.parse(body))
    .then (() => extractData(message))
}


const extractData = (message) => {
  let slot1 = root.querySelector('.forum-post__body').childNodes[14].rawText;
  let slot21 = root.querySelector('.forum-post__body').childNodes[20].rawText;
  let slot22 = root.querySelector('.forum-post__body').childNodes[22].rawText;
  let slot23 = root.querySelector('.forum-post__body').childNodes[24].rawText;

  const msgEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Dzisiejsze Vis Wax combo:')
    .setThumbnail('https://runescape.wiki/images/4/49/Vis_wax_detail.png?37b96')
    .addFields(
      {
        name: 'Slot 1',
        value: slot1
      },
      {
        name: 'Slot 2',
        value: slot21 + '\n' + slot22 + '\n' + slot23
      }
    )
    .setTimestamp()
    .setFooter('Bot stworzony przez BronzoPL');
  message.channel.send(msgEmbed);
}

module.exports = getVisWaxInfo;
