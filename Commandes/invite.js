const Discord = require("discord.js");
const { createPool } = require("mysql");
const Command = require("../Structure/Command");
const { ButtonBuilder, ActionRowBuilder } = require("discord.js");


module.exports = new Command({

    name: "invite",
	cooldown: 5, 

    async run(bot, message, args, db){
        const link = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
        .setLabel("Invite")
        .setStyle(5)
        .setURL("https://putlinkhere.com")
         );
        db.query(`SELECT * FROM server WHERE id_server = ${message.guild.id}`, async (err, req) => {
            if (err) throw err;
            const languages =  await req[0].languages;
            if(languages === "fr"){
            message.reply({ content: "🔗 Clique sur ce magnifique bouton pour m'inviter sur ton serveur !", components: [link]})
                }
            else{
            message.reply({content: "🔗 Click on this beautiful button to invite me on your server !", components: [link]})
            }
     })
    }
})