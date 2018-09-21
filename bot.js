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

client.on('message', ALPHACODES => { 
  var sender = ALPHACODES.author
  if(!ALPHACODES.guild) return
  if(!sw[ALPHACODES.guild.id]) sw[ALPHACODES.guild.id] = {
  onoff: 'Off',
  ch:    'Welcome',
  msk:   'Welcome'
}
        if(ALPHACODES.content.startsWith(prefix + `set-wlc`)) {        
        let perms = ALPHACODES.member.hasPermission(`MANAGE_CHANNELS`)
        if(!perms) return ALPHACODES.channel.send('**You need `Manage Channels` permission**')
        let args = ALPHACODES.content.split(" ").slice(1)
        if(!args.join(" ")) return ALPHACODES.reply(`
  ** ${prefix}set-wlc toggle **
  ** ${prefix}set-wlc set [Channel Name] **
  ** ${prefix}set-wlc msg [Welcome ALPHACODES] **`) // ->set-wlc toggle - ->set-wlc set - ->set-wlc msg
        let state = args[0]
        if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'set' || !state.trim().toLowerCase() == 'msg' ) return ALPHACODES.reply(`
 ** ${prefix}set-wlc toggle **
 ** ${prefix}set-wlc set [Channel Name] **
 ** ${prefix}set-wlc msg [Welcome ALPHACODES] **`) // ->set-wlc toggle - ->set-wlc set - ->set-wlc msg
        if(state.trim().toLowerCase() == 'toggle') { 
        if(sw[ALPHACODES.guild.id].onoff === 'Off') return [ALPHACODES.channel.send(`**Welcome ALPHACODES Is **on** !**`), sw[ALPHACODES.guild.id].onoff = 'On']
        if(sw[ALPHACODES.guild.id].onoff === 'On')  return [ALPHACODES.channel.send(`**Welcome ALPHACODES Is **off** !**`), sw[ALPHACODES.guild.id].onoff = 'Off']
}
        if(state.trim().toLowerCase() == 'set') {
        let newch = ALPHACODES.content.split(" ").slice(2).join(" ")
        if(!newch) return ALPHACODES.reply(`${prefix}set-wlc set [Channel name]`)
        if(!ALPHACODES.guild.channels.find(`name`,newch)) return ALPHACODES.reply(`**I Cant Find This Channel.**`)
            sw[ALPHACODES.guild.id].ch = newch
            ALPHACODES.channel.send(`**Welcome channel Has Been Changed to ${newch}.**`)
} 
        if(state.trim().toLowerCase() == 'msg') {
        let newmsg = ALPHACODES.content.split(" ").slice(2).join(" ")
        if(!newmsg) return ALPHACODES.reply(`${prefix}set-wlc msg [New ALPHACODES]`)
            sw[ALPHACODES.guild.id].msk = newmsg
            ALPHACODES.channel.send(`**Welcome ALPHACODES Has Been Changed to ${newmsg}.**`)
} 
}
        if(ALPHACODES.content === prefix + 'set-wlc info') {
        let perms = ALPHACODES.member.hasPermission(`MANAGE_GUILD`) 
        if(!perms) return ALPHACODES.reply(`You don't have permissions.`)
        var embed = new Discord.RichEmbed()
        .addField(`Welcome ALPHACODES  `, `
On/Off  : __${sw[ALPHACODES.guild.id].onoff}__
Channel : __${sw[ALPHACODES.guild.id].ch}__
ALPHACODES : __${sw[ALPHACODES.guild.id].msk}__`)
        .setColor(`BLUE`)
        ALPHACODES.channel.send({embed})
}
        fs.writeFile("./setwlc.json", JSON.stringify(sw), (err) => {
        if (err) console.error(err)
});
})


  









  



























        
























 




















client.login(process.env.BOT_TOKEN);
