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

client.on("ready", () => {
    setInterval(function(){
        client.guilds.get("488391992204722182").roles.find("name", "play").edit({
            color : "RANDOM"
        });
    },1000)



client.on('message', message => {
 if (message.author.id === client.user.id) return;
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
  if (!args[1]) {
message.channel.send("``bc <message>``");
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(' الـمرسل ', `${message.author.username}!${message.author.discriminator}`,true)
          .addField('»الـسيرفر«', `${message.guild.name}`,true)
          .addField(' الرسالة ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.send(`${m}`,{embed: bc});
      });
      const Nawaf = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('✅| جاري ارسال رسالتك ')
      .addBlankField(true)
      .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)
      .addField('📝| الرسالة ', args)
      .setColor('RANDOM')
      message.channel.sendEmbed(embed);
  }
  } else {
      return;
  }
});      
            

 


    

client.on('message', message => {
   if (message.content === "id") {
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

         
     



     
      

         
     





  


















client.login(process.env.BOT_TOKEN);
