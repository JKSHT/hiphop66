const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "help",
  description: "INVITE Hip Hop BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`<a:2_:745150805069529128>HERE INVITE LINK OF BOT<a:2_:745150805069529128>`)
    .setDescription(`<a:op28:739168442640498758> <a:op28:739168442640498758> <a:op28:739168442640498758> [CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=739776836250370158&permissions=8&scope=bot)<a:op27:739168678662111285> <a:op27:739168678662111285> <a:op27:739168678662111285> `)
    .setColor("RANDOM")
    .setFooter(`BOT MADE BY JOKER`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}