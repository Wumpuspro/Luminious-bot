const { MessageEmbed } = require('discord.js')

const child = require ('child_process')

module.exports = {
    name: 'show-code',
    description: 'only owners can use so its point less to know the usage of this command xD',
    aliases: ['show-file', 'show-cmd', 'dikha'],
    
    execute: async(client, message, args) => {
      if(message.author.id == '852219497763045398') 
      {
      
      const command = `cat ${args.join(" ")}`;
      if(!command) return message.reply('pls specific a module to install');
      
      child.exec(command, (err, res) => {
        if(err) return console.log(err);
        message.channel.send(res.slice(0, 2000), { code: 'js'});
      })
      }
    }
}
