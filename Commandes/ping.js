const Discord = require("discord.js");
const Command = require("../Structure/Command");

module.exports = new Command({

    name: "ping",
	cooldown: 5, 

    async run(bot, message, args, db){
        message.reply("🏓Pong ``" + Date.now() - message.createdTimestamp + "`` !");
    }
})