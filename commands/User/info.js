exports.run = async (client, msg) => {
const { version: komadaVersion } = require("komada");
const { version: discordVersion } = require("discord.js");

  const infoEmbed = new client.methods.Embed()
      .setTitle("Bot Information")
      .setColor("#4286f4")
      .addField("About", "A fork of the ChopBot project.", true)
      .addField("Authors", "• <@106061111605878784> \n• <@171366637969211392> \n• <@109004714934300672>", true)
      .addField("Libraries", `[Discord.js](https://discord.js.org/#/) v${discordVersion}\n[Komada](https://www.npmjs.com/package/komada) v${komadaVersion}\n[YAMDBF DM Manager](https://www.npmjs.com/package/yamdbf-addon-dm-manager) v0.1.3`)
      .setThumbnail(client.user.avatarURL(), 50, 50)
      .setTimestamp()
      .setFooter(`Requested by ${msg.author.tag}`, msg.author.avatarURL());
  return msg.send('', { disableEveryone: true, embed: infoEmbed });
};

exports.conf = {
  enabled: true,
  runIn: ["text", "dm", "group"],
  aliases: ["details", "what"],
  permLevel: 0,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "info",
  description: "Provides bot information, such as a list of authors and libraries.",
  usage: "",
  usageDelim: "",
};
