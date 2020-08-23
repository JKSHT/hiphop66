const discord = require("discord.js");

module.exports = {
  name: "help",
  category: "help",
  description: "HELP MENU {UPDATED}",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`HELP MENU UPDATED`)
      .setDescription(
        ` **MODRATION COMMANDS**
[CLICK HERE](https://github.com/JKSHT/hip-hop-bot/blob/master/MODERATION.md)

**INFORMATION COMMANDS**
[CLICK HERE](https://github.com/JKSHT/hip-hop-bot/blob/master/INFO.md)

**MUSIC COMMANDS**
[CLICK HERE](https://github.com/JKSHT/hip-hop-bot/blob/master/MUSIC.md)

**NSFW COMMANDS**
[CLICK HERE](https://github.com/JKSHT/hip-hop-bot/blob/master/nsfw.md)

**FUN COMMANDS**
[CLICK HERE](https://github.com/JKSHT/hip-hop-bot/blob/master/Fun.md)

**SPECIAL COMMANDS**
[CLICK HERE](https://github.com/JKSHT/hip-hop-bot/blob/master/SPECIAL%20COMMANDS.md)

**WELCOME COMMANDS**
[CLICK HERE](https://github.com/JKSHT/hip-hop-bot/blob/master/WELCOME.md)`
      )

      .setColor("RANDOM")
      .setFooter(`BOT MADE BY JOKER`)
      .setTimestamp((message.timestamp = Date.now()));

    message.channel.send(embed);
  }
};
