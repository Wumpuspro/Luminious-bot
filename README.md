# Luminious bot

[![](https://github.com/Wumpuspro/Scam-alert-bot/blob/main/.assests/npg.jpg)](https://discord.gg/UA6sSqKXpZ)
[![](https://img.shields.io/badge/discord.js-v13.0.0--dev-blue.svg?logo=npm)](https://github.com/discordjs)
[![](https://img.shields.io/badge/patreon-donate-orange.svg)](https://www.patreon.com/Blazerop)


https://discord.gg/mtgtrEw9VJ for all emoji access




https://replit.com/@npgop1/Luminious-bot#README.md  repl codes if you are lazy to fork this but remember give me credits

> This bot is used by more than 120k Discord users and more than 400 servers.

Luminious is a open source Discord bot coded in JavaScript with [Discord.js](https://discord.js.org) and [Mongoose](https://mongoosejs.com/docs/api.html) by [Wumpuspro](https://github.com/Wumpuspro).  
Feel free to add a star ⭐ to the repository to promote the project!


# Filling Config Files
Fill the config.js and utils/gw-config.json With Your Credentials
# Config.js
```
module.exports = {
    "registercommands" : false, //Write True If You Are Launching The Bot First Time
     "token": "", //Your Super Secret Bot Token
    "imageapi": "", //Your Amethyste Api You can get it from https://api.amethyste.moe/
    "ownerID": [], //Your Discord User ID
"prefix": "", //Your Bot's Prefix
"mongourl": "", // Mongodb url You can see tutorial of it on https://www.youtube.com/watch?v=nj-lJfkgb6w
"secret": "", // Your super secret bot token You can get it from the section of Oauth2 of Discord Developer Portal named Client Secret
 "dashboardURL": "", // write https://localhost:3000 if you are hosting in your own pc/laptop and if using website hosting then connect domain and just write that website copy paste in here or enter ip of that hosting server with the port ahead of it
"chat": {
        "url": "",
        "bid": "",
        "key": "",
        "uid": ""
    }, // You can get This Things from https://brainshop.ai
"api": "", // Your Youtube Api
"youtubeAPI": "", // Your Youtube Api
mainprefix: "",  // Again Your Prefix
"owner": "Npg", // Owner Name

  basiclang: "en", //The basic language of the bot, "fr" for French and "en" for English
    embeds: {
        color: "BLUE", //Embed color (in English)
        footers: "GIVEAWAY :tada: :tada:" //Embed footer
    },

   

    events: {
        addcolor: "GREEN", //The color of the event add (in English)
        remcolor: "RED" //The color of the event remove (in English)
    },

    reaction: "🎉", //Reaction to the giveaways if you in the console you see 'unknown emoji' that's what this emoji is not recognized by Discord

    grole: "Giveaway Manager", //If the member doesn't have permission to handle messages he can still use the giveaways commands if he has the role configured right here

    auth: {
        support: "XXX", //The link of your Discord server
        dperms: "8" //The permissions that the bot asks on we want to add it on a Discord server (8 = moderator)
    }, 
} 
```
# gw-config.json
```{
    
 
    "ownerID": "852219497763045398",

    "everyoneMention": false,
    "hostedBy": true,
    "botsCanWin": false,


    "embedColor": "#000080",
    "embedColorEnd": "#FF0000",
    "reaction": "🎉",
    "giveawayEmoji": "🎉"

    
   
}
```



### A powerful Bot made with node.js and discord.jsv13

Luminious is an powerful bot 


You can directly **edit your configuration**, **manage your servers**, **view rankings**, **modify your profile** and much more!

> Find the code in the src folder! 

## Installation

### Non-customized version

If you don't want to edit the code of the bot, a permanent online version is available, which you can invite to your own Discord!   

## Links


* [DISCORD](https://discord.gg/UA6sSqKXpZ)
* [Github](https://github.com/Wumpuspro/Luminious-bot/)


## Contributing

Before **creating an issue**, please ensure that it hasn't already been reported/suggested,
And if you have a question, please ask it in the [Discord server](https://discord.gg/UA6sSqKXpZ/) instead of opening an issue.
If you wish to contribute to the Adequate codebase , feel free to fork the repository and submit a pull request! but you should know discord.jsv13 for contribution!!

## License

Luminious is licensed under the GPL 3.0 license. See the file `LICENSE` for more information. If you plan to use any part of this source code in your own bot, I would be grateful if you would include some form of credit somewhere.
