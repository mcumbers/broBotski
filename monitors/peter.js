let victim = '322210616158978059';
let johnnies = '319384085300641793';

exports.conf = {
    enabled: true,
    spamProtection: false,
}

exports.run = async (client, msg, guild) => {
    return new Promise((resolve) => {
        if (msg.guild.id === johnnies){
            if (msg.author.id === victim){
                await msg.react("🇫");
                await msg.react("🇦");
                await msg.react("🇬");
            }
        }
        resolve();
    });
};