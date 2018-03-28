const komada = require("komada");

const botConfig = require("./botConfig.json");

const bot = new komada.Client({
	//Komada required vars
	ownerID: botConfig.ownerID,
	prefix: botConfig.prefix,
	cmdEditing: true,
	cmdLogging: true,
	//Permission Structure using ownerID as an array
	permStructure: new komada.PermLevels()
		.addLevel(10, false, (client, msg) => {
			return (msg.author.id === botConfig.ownerID);
		})
		.addLevel(4, false, (client, msg) => {
			if(!msg.guild) return false;
			if(msg.guild.owner.id === msg.author.id){
				return true;
			}
		})
		.addLevel(3, false, (client, msg) => {
			if(!msg.guild) return false;
			const adminRole = msg.guild.roles.find("id", msg.guild.settings.adminRole);
			return adminRole && msg.member.roles.has(adminRole.id);
		})
		.addLevel(2, false, (client, msg) => {
			if(!msg.guild) return false;
			const modRole = msg.guild.roles.find("id", msg.guild.settings.modRole);
			return modRole && msg.member.roles.has(modRole.id);
		})
		.addLevel(1, false, (client, msg) => {
			if(!msg.guild) return false;
			const eventRole = msg.guild.roles.find("id", msg.guild.settings.eventRole);
			return eventRole && msg.member.roles.has(eventRole.id);
		})
		.addLevel(0, false, () => true)
		.structure
});

bot.login(botConfig.botToken);