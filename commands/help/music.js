const discord = require("discord.js");

module.exports = {
  name: "music",
  category: "help",
  description: "BOT GET SOON UPDATES ",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`BOT WILL SOON NEW FEATURES `)
      .setDescription(
        `
<a:discord:729261670341279774>__**MUSIC COMMAND**__<a:discord:729261670341279774>
<a:1_:729258591420153856>\`h!play\` :- give name of song or link
<a:1_:729258591420153856>\`h!search\` :- give title of song
<a:1_:729258591420153856>\`h!skip\`:- skip the song
<a:1_:729258591420153856>\`h!stop\` :- stop the song
<a:1_:729258591420153856>\`h!pause\`:- pause the song
<a:1_:729258591420153856>\`h!resume\`:- resume the song
<a:1_:729258591420153856>\`h!nowplaying\` :-  now playing songs
<a:1_:729258591420153856>\`h!queue\` :- give list of queue songs
<a:1_:729258591420153856>\`h!volume\` :- set volume 0 to 100

[Support Server]() 
`
      )
      .setThumbnail(client.user.displayAvatarURL())
      .setColor("RANDOM")
      .setFooter(`JOKER DEVELOPER `)
      .setTimestamp((message.timestamp = Date.now()));

    await message.channel.send(embed);

  }
};
