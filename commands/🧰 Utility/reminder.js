const { Client, Message, MessageEmbed } = require('discord.js');
require('discord-reply')
const ms = require("ms")
module.exports = {
    name: 'reminder',
  aliases: ["remindme", "remind"],
    execute: async(client, message, args) => {
        let time = args[0]
        if(!time) {
          var embed = new MessageEmbed()
   
        .setDescription("<a:no:876439250965508146> **Wrong Usage** <a:no:876439250965508146> \n What is the time when the reminder should be off? ")
        .setColor("RANDOM")
        return message.channel.send(embed);
        }
        if(ms(time) > ms("1w")){

         var embed = new MessageEmbed()
           
         .setDescription(`<a:no:876439250965508146> **Wrong Usage** <a:no:876439250965508146> \n ${message.author.tag} You cannot set your reminder for more than 1w`)
          .setColor("RANDOM")
         return message.channel.send(embed);
        }
        let alert = args.slice(1).join(" ")
        if(!alert) {
          var embed = new MessageEmbed()
            
         .setDescription(`<a:no:876439250965508146> **Wrong Usage** <a:no:876439250965508146>\n What is reminder for?`)
          .setColor("RANDOM")
         return message.channel.send(embed);
          
        }
       var embed = new MessageEmbed()
         .setDescription(`<a:no:876439250965508146> **Successfull** <a:no:876439250965508146>`)   
        .setColor("RANDOM")
        .addField(`Time:`, `\`${time}\``, true)
        .addField(`For:`, `\`${alert}\``, true)
        message.lineReply(embed)
        setTimeout(() => {
            let DP = new MessageEmbed()
            .setAuthor(`Your reminder is Done`)
            .setColor("RANDOM")
            .addField("Duration", `\`${time}\``, true)
            .addField(`Reason:`, `\`${alert}\``, true)
            message.author.send(DP)
        }, ms(time))
    }
}
