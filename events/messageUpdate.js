exports.run = (client, msg, oldMessage, newMessage) => {
  const Discord = require('discord.js');
  try {
    const editEmbed = new Discord.RichEmbed()
      .setAuthor(`#${msg.channel.name}`, msg.guild.iconURL)
      .setColor("#4286f4")
      .addField("Message Edited", `**BEFORE:** \`${oldMessage}\`\n**AFTER:** \`${newMessage}\``, true)
      .setTimestamp()
      .setFooter(`${msg.author.username}#${msg.author.discriminator}`, msg.author.avatarURL);
    client.channels.get(`${msg.guildConf.logChannel}`).sendEmbed(editEmbed, '', { disableEveryone: true });
  } catch (err) {
    return;
  }
};
