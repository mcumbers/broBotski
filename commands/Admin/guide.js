exports.run = async (client, msg) => {
    const guideEmbed = new client.methods.Embed()
        .setAuthor("broBotski Setup Guide", client.user.avatarURL())
        .setColor("#ffffff")
        .setDescription("Thanks for choosing broBotski! This short guide will help you set up the bot on your Discord Server!")
        .addField("⚠️ IMMEDIATE ACTION ⚠️", "What you'll need to do is create a new text channel where broBotski will post logs of certain events that happen in your server. Once you've made this channel, make sure broBotski has full access to it.\nAfter this, run the command `-conf set logChannel <Your New Channel Here>`")
        .addField("Role Hierarchy", "The only other thing you *should* need to do is make sure broBotski and its new roles are correctly placed in your server's role hierarchy. You'll want broBotski to be at the very top (So it can perform actions with all users) And then mix in the other roles where appropriate.\n**Keep in mind:** Staff will __**not**__ be able to moderate any users with a role higher than their own!")
        .addField("Enhanced Moderation", "When broBotski first joined your server, it *probably* created a bunch of new roles for you. These are roles that broBotski uses to decide who can use what commands, and to inflict punishment on people you mute or ban from voice chat.\nIt's a good idea to check and make sure the permissions have been set up properly, and run `-conf list` to make sure it assigned the roles properly.")
        .addField("Server Configuration", "There's a lot you can customize about how broBotski works on your server. Take some time to check out the `-conf` command, or ask one of the bot developers for more information.")
        .setFooter("Thanks for choosing broBotski! If you need any help setting it up, contact one of the developers listed with the -info command!")
    return msg.send('', { disableEveryone: true, embed: guideEmbed });
};

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 3,
    botPerms: [],
    requiredFuncs: [],
};

exports.help = {
    name: "guide",
    description: "A guide on how to set the bot up for usage on your server.",
    usage: "",
    usageDelim: "",
};
