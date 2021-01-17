const bronzoCommand = (message) => {
  message.channel.send('Dostępne komendy:');
  message.channel.send('**Aod symulacja:** !aod 100 bronzo kalif kiekrz applez zi00mek loli rafix');
  message.channel.send('**Ambi symulacja:** !ambi 20 bronzo');
  message.channel.send('**Telos symulacja:** !telos <startEnrage> <streak> <lotd> <nickname>');
  message.channel.send('**Dzisiejsze VisWax combo:** !wax --- ');
}

module.exports = bronzoCommand;
