const discord = require("discord.js");

module.exports = {
  name: "botinfo",
  category: "help",
  description: "INVITE PARAS BOT",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle(`__**INFORMATION ABOUT BOT**__`)
      .addField("<a:A_Arrow3:745150626048245770>BOT NAME", `HIP HOP`)
      .addField(
        "<a:A_Arrow3:745150626048245770>BOT DEVELOPER ",
        `
 <a:cc_flame:738428479409750087> <@567704764813541376>
 <@548952436287733790> `
      )
      .addField(
        "<a:A_Arrow3:745150626048245770>TOTAL SERVER",
       `<a:cc_flame:738428479409750087>${client.guilds.cache.size}`,
        true
      )
      .addField(
        "<a:A_Arrow3:745150626048245770>TOTAL CHANNAL",
        `<a:cc_flame:738428479409750087>${client.channels.cache.size}`
      )
      .addField(
        "<a:A_Arrow3:745150626048245770>TOTAL USER",
        `<a:cc_flame:738428479409750087>${client.users.cache.size}`,
        true
      )
      .addField("<a:A_Arrow3:745150626048245770>BOT LIBRARY", `discord.js`)

      .setColor("RANDOM")
      .setFooter(`information about bot`);

    message.channel.send(embed);
  }
};
