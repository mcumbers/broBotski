let victim = '155440962049409024';
let reactEmoji = '🍆';
let GoOGuild = '117055622377111554';

exports.conf = {
    enabled: true,
    spamProtection: false,
}

exports.run = (client, msg, guild) => {
    return new Promise((resolve) => {
        if (msg.guild.id === GoOGuild){
            if (msg.author.id === victim){
                msg.react(reactEmoji);
            }
        }
        resolve();
    });
};