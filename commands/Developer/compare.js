exports.run = async (client, msg, [target]) => {
    const executor = msg.author;
    const canMod = await client.funcs.hierarchyCheck(client, executor, target, msg.guild).catch((err) =>{
        if(err){
            fail("User not in guild.", msg);
        }
    });

    if (!canMod) {
        //Notify user of command cancellation
        return msg.channel.sendMessage("Can't moderate user");
    }

    //Perform command operations
    return msg.channel.sendMessage("Can moderate user");

};

fail = (err, msg) => {
    return msg.channel.sendMessage("Failed to execute command: " + err);
};

exports.conf = {
    enabled: true,
    selfbot: false,
    runIn: ["text"],
    aliases: [""],
    permLevel: 10,
    botPerms: [],
    requiredFuncs: ["hierarchyCheck"],
    requiredModules: []
};

exports.help = {
    name: "compare",
    description: "Test command for hierarchyCheck function",
    usage: "<target:user>",
    usageDelim: " ",
    type: "commands"
};