const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ".";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`#Royal Shop .`,"http://twitch.tv/S-F")
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
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




client.on('message', message => {
 
              if(!message.channel.guild) return;
 
    var prefix = "!";
 
    if(message.content.startsWith('!bc')) {
 
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
 
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 
 
    let request = `Requested By ${message.author.username}`;
 
    if (!args) return message.reply('**اكتب شي لي ارسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
 
    msg.react('✅')
 
    .then(() => msg.react('❌'))
 
    .then(() =>msg.react('✅'))
 
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
 
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
       let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
 
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
 
    reaction1.on("collect", r => {
 
    message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
 
    message.guild.members.forEach(m => {
 
    var bc = new
 
       Discord.RichEmbed()
 
       .setColor('RANDOM')
 
         .setTitle('لي دخول السيرفر اضغط هنا')
       
       .setURL('https://discord.gg/Qrd4Srp')
 
       .addField('Server', message.guild.name)
 
       .addField('Sender', message.author.username)
 
       .addField('Message', args)
 
    m.send({ embed: bc })
 
    msg.delete();
 
    })
 
    })
 
    reaction2.on("collect", r => {
 
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
 
    msg.delete();
 
    })
 
    })
 
    }
 
    });

client.on('message', message => {
        var prefix = '.'; // هنا تقدر تغير البرفكس
	var command = message.content.split(" ")[0];
	if(command == prefix + '.obc') {
		var args = message.content.split(' ').slice(1).join(' ');
		if(message.author.bot) return;
	if(!args) return message.channel.send(`**➥ Useage:** ${prefix}bc كلامك `);
		
		let bcSure = new Discord.RichEmbed()
		.setTitle(`:mailbox_with_mail: **هل انت متأكد انك تريد ارسال رسالتك الى** ${message.guild.memberCount} **عضو**`)
		.setThumbnail(client.user.avatarURL)
		.setColor('RANDOM')
		.setDescription(`**\n:envelope: ➥ رسالتك**\n\n${args}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)
		
		message.channel.send(bcSure).then(msg => {
			msg.react('✅').then(() => msg.react('❎'));
			message.delete();
			
			
			let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
			let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
			
			let sendBC = msg.createReactionCollector(yesEmoji);
			let dontSendBC = msg.createReactionCollector(noEmoji);
			
			sendBC.on('collect', r => {
				message.guild.members.forEach(member => {
					member.send(args.replace(`[user]`, member)).catch();
					if(message.attachments.first()){
						member.sendFile(message.attachments.first().url).catch();
					}
				})
				message.channel.send(`:timer: **يتم الان الارسال الى** \`\`${message.guild.memberCount}\`\` **عضو**`).then(msg => msg.delete(5000));
				msg.delete();
			})
			dontSendBC.on('collect', r => {
				msg.delete();
				message.reply(':white_check_mark: **تم الغاء ارسال رسالتك بنجاح**').then(msg => msg.delete(5000));
			});
		})
	}
});












client.login(process.env.BOT_TOKEN);
