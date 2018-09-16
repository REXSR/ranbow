const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = '/'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`تجربة الاكواد.`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`السيرفرات! [ " ${client.guilds.size} " ]`);
  console.log(`الاعضاء! [ " ${client.users.size} " ]`);
  console.log(`القنوات! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
   
      
  client.on('message',async message => {
  if(message.content.startsWith(prefix + "server")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle(`\`${message.guild.name}\``)
    .setThumbnail(message.guild.iconURL)
    .addField('• ايدي السيرفر:', `- ${message.guild.id}`,true)
    .addField('• اونر السيرفر:', `- ${message.guild.owner}`, true)
    .addField('• الشاتات و الرومات:', `\`#\` ${message.guild.channels.filter(a => a.type === 'text').size} - \`🎤\` ${message.guild.channels.filter(a => a.type === 'voice').size}`, true)
    .addField('• الاعضاء:', `\`Count\` ${message.guild.memberCount} - \`Last\` ${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `${m}`).splice(0, 1)}`, true)
    .addField('• روم الافك:', `${message.guild.afkChannel || 'None'}`, true)
    .addField('• آخر:', `\`Roles\` ${message.guild.roles.size} - \`Emojis\` ${message.guild.emojis.size} \`[\` ${message.guild.emojis.map(m => m).join(' **|** ')} \`]\``,true)
    .addField('• المنطقة:', `${message.guild.region}`, true);

    message.channel.send(embed);
  }
});






      
      
            

 


    

client.on('message', message => {
   if (message.content === "/id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("NAME› ",`${message.author.username}`, true)
  .addField('Tag›',"#" +  message.author.discriminator, true)
  .addField("ID›", message.author.id, true)
  .addField("Create›", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});

         
     
client.on('message', message => {
    if (message.content.startsWith('bot')) {
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
 

    



     
      

         
     





  


















client.login(process.env.BOT_TOKEN);
