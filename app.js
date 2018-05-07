const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const broadcast = client.createVoiceBroadcast();
client.on('ready',() => {
	console.log('Pronta para salvar o dia');
	client.user.setPresence({ status: 'online', game: { name: 'o Yuuji da sacada' } });
});
client.on('message', message => {
  if (message.content === 'avatar') {
    message.channel.send('Seu avatar '+ message.author.avatarURL);
}
});
client.on('message', message => {
if (message.content.startsWith('tocar')){
 const channel = message.member.voiceChannel;
  var link = message.content.slice('tocar'.length)
  channel.join()
  .then(connection => {
  const stream = ytdl(link, { filter : 'audioonly' });
  broadcast.playStream(stream);
  const dispatcher = connection.playBroadcast(broadcast);
  console.log('Tocando')
  broadcast.
});
client.on('message', message => {

		if(message.content== 'sair') {
	const channel = message.member.voiceChannel;
	channel.leave();
  }
});
client.login(settings.token);
