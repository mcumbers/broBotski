let victim = '322210616158978059';
let johnnies = '319384085300641793';

exports.conf = {
    enabled: true,
    spamProtection: false,
}

exports.run = (client, msg, guild) => {
    return new Promise((resolve) => {
        if (msg.guild.id === johnnies){
            if (msg.author.id === victim){
                msg.send("<@322210616158978059>'s a fag.");
            }
        }
        resolve();
    });
};