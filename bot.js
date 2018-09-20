const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[NAWAF] ${client.users.size}`)
    client.user.setStatus("online")
});

 



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




client.on("guildMemberAdd", (member) => {

    let channel = member.guild.channels.get("488406701582843920");

    if (!channel) {

        console.log("!the channel id it's not correct");

        return;

    }

    if (member.id == client.user.id) {

        return;

    }

    console.log('-');

    var guild;

    while (!guild)

        guild = client.guilds.get("488391992204722182");

    guild.fetchInvites().then((data) => {

        data.forEach((Invite, key, map) => {

            var Inv = Invite.code;

            if (dat[Inv])

                if (dat[Inv] < Invite.uses) {

                    setTimeout(function() {

 channel.send(`**invited by** ${Invite.inviter} `) ;

                    },1500);

 }

            dat[Inv] = Invite.uses;

       

       });

    });

});

client.on("message", message => {
    
    if(message.content.startsWith(prefix + "server")) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**الأمر للاداره فقط **");
const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("RANDOM")
.setDescription(`**
.addField("**👑__اونر السيرفر__**", '**Unknown**' ,true)
.addField("**🆔__ايدي السيرفر__**", message.guild.id,true)
.addField("**📅__تم إنشاؤها__**", message.guild.createdAt.toLocaleString(),true)
.addField("**🌐__نوع السيرفر__**", message.guild.region,true)
.addField("**👥__عدد الاعضاء__**", message.guild.memberCount`,true)
.addField("**📝__الرومات الكتابية__**", message.guild.channels.filter(m => m.type === 'text').size`,true)
.addField("**🎤__رومات الصوت__**", message.guild.channels.filter(m => m.type === 'voice').size`,true)
.addField("**🔵__عدد الاعضاء الاونلاين__**", message.guild.members.filter(m=>m.presence.status == 'online').size`,true)
** `)
message.channel.send({embed:embed})
    }
});


  









  



























        
























 




















client.login(process.env.BOT_TOKEN);
