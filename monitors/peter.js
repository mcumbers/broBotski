let victim = '322210616158978059';
let johnnies = '319384085300641793';

exports.conf = {
    enabled: false,
    spamProtection: false,
}

exports.run = async (client, msg, guild) => {
    if (msg.guild.id === johnnies){
        if (msg.author.id === victim){
            let firstReact = await msg.react("🇫");
            let secondReact = await msg.react("🇦");
            let thirdReact = await msg.react("🇬");
        }
    }
};