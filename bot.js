const Discord = require('discord.js'),

    client = new Discord.Client({sisableEveryone: true})

    console.log("muuuuuuuuute,");

client.on('guildMemberAdd', member => {

const mohamed= member.guild.channels.get("511595760345939968");

if(!mohamed) return;

if(mohamed) {

setTimeout(() => mohamed.send(`**Welcome to Power Server..**`), 4000)        

}

});

client.on('ready',async () => {

  client.channels.find(ch => ch.id === "495002982593855489" && ch.type === 'voice').join();

});


client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**السلام عليكم
-أحادثينا حقيقية وتواجدنا دائم حتى وأن ضاقت بك الأوقات
‏دائم التواجد لذلك أقترب ولا تزيد أضعاف المسافة**. ♥
https://discord.gg/yReJq2T
[ ${member}  ]
@everyone
@here
`)
}).catch(console.error)
})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**السلام عليكم
-أحادثينا حقيقية وتواجدنا دائم حتى وأن ضاقت بك الأوقات
‏دائم التواجد لذلك أقترب ولا تزيد أضعاف المسافة**. ♥
https://discord.gg/yReJq2T
[ ${member}  ]
@everyone
@here
`)
}).catch(console.error)
})
 

client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**السلام عليكم
-أحادثينا حقيقية وتواجدنا دائم حتى وأن ضاقت بك الأوقات
‏دائم التواجد لذلك أقترب ولا تزيد أضعاف المسافة**. ♥
https://discord.gg/yReJq2T
[ ${member}  ]
@everyone
@here
`)
}).catch(console.error)
})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`**السلام عليكم
-أحادثينا حقيقية وتواجدنا دائم حتى وأن ضاقت بك الأوقات
‏دائم التواجد لذلك أقترب ولا تزيد أضعاف المسافة**. ♥
https://discord.gg/yReJq2T
[ ${member}  ]
@everyone
@here
`)
}).catch(console.error)
})
 




client.login(process.env.BOT_TOKEN);
