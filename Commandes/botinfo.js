const Discord = require("discord.js");
const Command = require("../Structure/Command");
const { ActionRowBuilder, SelectMenuBuilder } = require("discord.js");

module.exports = new Command({

    name: "botinfo",
	cooldown: 5, 

    async run(bot, message, args, db){
        //si le serv fr
        let ping = Date.now() - message.createdTimestamp
        let botinfo = new Discord.EmbedBuilder()
        .setColor("#0099ff")
        .setTitle("__Informations sur le bot__")
        .setDescription("Voici les informations sur <@916001919103815733> !")
        .addFields(
        { name: 'Développé:', value: 'Par <@477869784932024321>!'},
        { name: 'Version du bot:', value: '``V1.4``'},
        { name: 'Version de Node.js:', value: '``V16.9.0``'},
		{ name: 'Version de discord.js:', value: '``V14.3.0``'},
        { name: 'Ping:', value: '``' + ping + ' ms``'},
        { name: 'En ligne depuis:', value: '<t:1638471657:d>'},
        )
        var lrayrethmalkirth = new Discord.ActionRowBuilder()
        .addComponents(new Discord.ButtonBuilder()
        .setLabel("Rayreth")
        .setStyle(5)
        .setURL("https://github.com/arayreth")
        )
       
        message.reply({embeds: [botinfo], components: [lrayrethmalkirth]})
        //sinon
    }
})