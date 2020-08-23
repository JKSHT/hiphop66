const discord = require("discord.js");

module.exports = {
  name: "serverinfo",
  category: "info",
  description: "Get the info of any server",
  run: async (client, message, args) => {
    if (message.guild.premiumTier === "Level 0") message.guild.premiumTier = "<:Level0:734479590852132905> 0"
    if (message.guild.premiumTier === "Level 1") message.guild.premiumTier = "<:713173920475381830:734479841629437982> 1"
    if (message.guild.premiumTier === "Level 2") message.guild.premiumTier = "<:713173919418548257:734479792052764774> 2"
    if (message.guild.premiumTier === "Level 3") message.guild.premiumTier = "<:BoostLevel3:734479712029769849> 3"
    
    if (message.guild.region === "india") message.guild.region = "🇮🇳 India"
    if (message.guild.region === "brazil") message.guild.region = "🇧🇷 Brazil"
    if (message.guild.region === "japan") message.guild.region = "🇯🇵 Japan"
    if (message.guild.region === "russia") message.guild.region = "🇷🇺 Russia"
    if (message.guild.region === "europe") message.guild.region = "🇪🇺 Europe"
    if (message.guild.region === "sydney") message.guild.region = "🇦🇺 Sydney"
    if (message.guild.region === "singapore") message.guild.region = "🇸🇬 Singapore"
    if (message.guild.region === "hongkong") message.guild.region = "🇭🇰 Hong Kong"
    if (message.guild.region === "southafrica") message.guild.region = "🇿🇦 South Africa"
    if (message.guild.region === "us-east") message.guild.region = "🇺🇸 US East"
    if (message.guild.region === "us-west") message.guild.region = "🇺🇸 US West"
    if (message.guild.region === "us-central") message.guild.region = "🇺🇸US Central"
    if (message.guild.region === "us-south") message.guild.region = "🇺🇸 US South"
    
      let boostlevel = message.guild.premiumTier
    
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });

    let sicon = message.guild.iconURL({ dynamic: true, size: 2048 });
    
    let embed = new discord.MessageEmbed()
      .setTitle(message.guild)
      .setDescription(
        `
<a:A_Arrow3:745150626048245770>**OWNER**
<a:cc_flame:738428479409750087>${message.guild.owner.user.tag}

<a:A_Arrow3:745150626048245770>**SERVER ID**
<a:cc_flame:738428479409750087>${message.guild.id}

<a:A_Arrow3:745150626048245770>**REGION**
<a:cc_flame:738428479409750087>${message.guild.region}

<a:A_Arrow3:745150626048245770>**TOTAL MEMBERS  **
<a:cc_flame:738428479409750087>${message.guild.memberCount}

<a:A_Arrow3:745150626048245770>**TOTAL CHANNELS **
 <a:cc_flame:738428479409750087>${message.guild.channels.cache.size}

<a:A_Arrow3:745150626048245770>**TOTALLY ROLES**
<a:cc_flame:738428479409750087>${message.guild.roles.cache.size}

<a:A_Arrow3:745150626048245770>**TOTAL EMOJI **
<a:cc_flame:738428479409750087>${message.guild.emojis.cache.size}

<a:A_Arrow3:745150626048245770>**SERVER CREATED AT**
<a:cc_flame:738428479409750087>${message.guild.createdAt}

<a:A_Arrow3:745150626048245770>**SERVER BOOST**
<a:cc_flame:738428479409750087>${message.guild.premiumSubscriptionCount} <:nitroboost:743905977996410901>

<a:A_Arrow3:745150626048245770>**BOOST LEVEL**
<a:cc_flame:738428479409750087>${boostlevel} <a:NitroPro:739890946837053482>

<a:A_Arrow3:745150626048245770>**Security** 
<a:cc_flame:738428479409750087>${message.guild.verificationLevel}
`)
      .setThumbnail(message.guild.iconURL())
      .setColor("RANDOM")
      .setFooter(message.YOU_PIRO_XD)

    message.channel.send(embed);
  }
};