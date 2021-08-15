const Discord = require("discord.js");
const db = require("quick.db");
module.exports = {
  name: "anti-badwords",
  aliases: ["antibadwords", "antiwords"],
  execute: async(client, message, args) => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
        if(!message.guild.me.hasPermission('MANAGE_MESSAGES')) {return message.channel.send('<a:no:876439250965508146> | I do not have permission to delete messages.')
        }
        if(await db.has(`swear-${message.guild.id}`) === false) {
            await db.set(`swear-${message.guild.id}`, true)
            message.channel.send('<:tick_yes:866150426738425856> | AntiBadwords has been turned on!')

        } else {
          await db.delete(`swear-${message.guild.id}`)
           return message.channel.send('<a:no:876439250965508146> | AntiBadwords has been turned off!')
        }
  }
}
