const Discord = require("discord.js");
const Command = require("../Structure/Command");
const { ButtonBuilder, ActionRowBuilder } = require("discord.js");

module.exports = new Command({

    name: "support",
	cooldown: 5, 

    async run(bot, message, args, db){
     db.query(`SELECT * FROM server WHERE id_server = ${message.guild.id}`, async (err, req) => {
            if (err) throw err;
            const languages =  await req[0].languages;
            if(languages === "fr"){
                const fr_link = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setLabel("Serveur Support")
                    .setStyle(5)
                    .setURL("https://putlinkhere.com")
                );
                message.reply({content: "🔗 Clique sur ce magnifique bouton pour rejoindre le serveur support !", components: [fr_link]})
            }
            if(languages === "de"){
                const de_link = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setLabel("Support Server")
                    .setStyle(5)
                    .setURL("https://putlinkhere.com")
                );
                message.reply({content: "🔗 Klicke auf diesen wunderschönen Button, um dem Support-Server beizutreten !", components: [de_link]})
            }
            else{
                const link = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setLabel("Support Server")
                    .setStyle(5)
                    .setURL("https://putlinkhere.com")
                );
                message.reply({content: "🔗 Click on this beautiful button to join the support server !", components: [link]})
            }
     });
    }
})