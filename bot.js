client.on('ready', () => {

    console.log(`Logged in as ${client.user.tag}!`);

    console.log(`in ${client.guilds.size} servers `)

    console.log(`[NAWAF] ${client.users.size}`)

    client.user.setStatus("online")

});

 

const prefix = "/"




client.on('message', message => {

    if (message.content.startsWith("/bot")) {

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











const RainClient = require("rainbow-role")

const rain = new RainClient("?", "RainbowRole", 10, 5, false)

//prefix (string) => البرفكس الي تبيه يكون للكوماند => default is "#"

//roleName (string) => اسم الرول الي تبيه يكون حق ال rainbow => default is "Rainbow"

//size (number) => كم عدد الالوان الي تبيه => default is 10

//speed(number) => سرعة ال rainbow بالثواني => default is 60

//logging(boolean ) => هل تبي يطلعلك بالكونسل لوق كل ما يتغير اللون؟ => default is false

 

//يمديك تستخدم اي من ال parmas في كودك ...

rain.rainbow(client) // على حسب , اذا كنت معرفه client او bot



client.login(process.env.BOT_TOKEN);
