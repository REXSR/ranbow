client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);

    console.log(`in ${client.guilds.size} servers `)

    console.log(`[NAWAF] ${client.users.size}`)

    client.user.setStatus("online")

});

 

const prefix = "/"


client.on('message', message => {
    if (message.content.startsWith("bot")) {
      message.channel.send({
 embed: new Discord.RichEmbed() 
    .setColor('RED')
    .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**وقت الاقلاع⌚**', timeCon(process.uptime()), true)
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
     })
    }
  });
  function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
};




client.on('message',async message => {

  let messageArray = message.content.split(' ');

  let mention = message.mentions.users.first();

  if(message.content.startsWith(prefix + 'transfer')) {

    if(!mention) return message.channel.send('منشن شخص');

    if(isNaN(messageArray[2])) return message.channel.send('هذه الخانة يجب ان تكون رقم وليس احرف');

    credits[mention.id].credits += (+messageArray[2]);

    credits[message.author.id].credits += (-messageArray[2]);

    fs.writeFile('./transfer' ,JSON.stringify(credits), (err) => {

      if(err) console.error(err);

    });

    message.channel.send(**💰 | ${message.author.username}, has transfered ${messageArray[2]}$ to ${mention}**)

  }

}); 


  









  



























        













































client.login(process.env.BOT_TOKEN);
