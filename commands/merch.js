const Discord = require('discord.js');
const HTMLParser = require('node-html-parser');
const fetch = require('node-fetch');
const embededMessage = require('../helpers/embededMessage');

let root;
const url = "https://runescape.wiki/w/Travelling_Merchant%27s_Shop";

const getVisWaxInfo = (message) => {
  fetch(url)
    .then (res => res.text())
    .then(body => root = HTMLParser.parse(body))
    .then (() => extractData(message))
}


const extractData = (message) => {
  let wikiTable = root.querySelectorAll('.wikitable.align-center-1.align-center-4');
  let item1Name = wikiTable[1].childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].rawText;
  let item2Name = wikiTable[1].childNodes[0].childNodes[2].childNodes[1].childNodes[0].childNodes[0].rawText;
  let item3Name = wikiTable[1].childNodes[0].childNodes[3].childNodes[1].childNodes[0].childNodes[0].rawText;
  let item4Name = wikiTable[1].childNodes[0].childNodes[4].childNodes[1].childNodes[0].childNodes[0].rawText;
  let itemsArray = [
    { name: 'Slot 1', value: item1Name },
    { name: 'Slot 2', value: item2Name },
    { name: 'Slot 3', value: item3Name },
    { name: 'Slot 4', value: item4Name },
  ]

  const msgEmbed = embededMessage(
    'Dzisiejszy stock u merchanta:',
    'https://runescape.wiki/images/8/86/Travelling_Merchant%27s_Shop.png?8d787',
    itemsArray,
    'Travelling Merchant'
  );

  message.channel.send(msgEmbed).catch(e => {
    message.channel.send("Error! Prawdopodobnie zbyt duza liczba dropow do wyswietlenia! Sprobuj z mniejszym kc!")
  });
}

module.exports = getVisWaxInfo;
