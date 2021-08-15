const Discord = require('discord.js');


module.exports = {
	name: 'username',
  aliases: 'c-name',
	execute: async(client, message, args) => {
    if(message.author.id == "852219497763045398") {
		const embed = new Discord.MessageEmbed().setColor('#FF00FF')
		await client.user.setUsername(args.join(' ')).then(
			message.channel.send(embed.setDescription('You have successfully changed my username!'))
		).catch(e => e)
    }
	},
};
