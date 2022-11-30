const Discord = require("discord.js");
const Command = require("../Structure/Command");
const { ButtonBuilder, ActionRowBuilder } = require("discord.js");

module.exports = new Command({

    name: "website",
	cooldown: 5, 

    async run(bot, message, args, db){
      db.query(`SELECT * FROM server WHERE id_server = ${message.guild.id}`, async (err, req) => {
        if (err) throw err;
        const languages =  await req[0].languages;
        if(languages === "fr"){
        const fr_link = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel("Site Web")
            .setStyle(5)
            .setURL("https://putlinkhere.com")
        );    
        message.reply({ content: "🔗 Clique sur ce magnifique bouton pour accéder à notre site web !", components: [fr_link]})
            }
        if(languages === "de"){
            const de_link = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                .setLabel("Webseite")
                .setStyle(5)
                .setURL("https://putlinkhere.com")
                );
                message.reply({ content: "🔗 Klicke auf diesen wunderschönen Button, um auf unsere Website zuzugreifen !", components: [de_link]})
            }    
        else{
        const link = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel("Website")
            .setStyle(5)
            .setURL("https://putlinkhere.com")
        );
        message.reply({content: "🔗 Click on this beautiful button to access our website !", components: [link]})
        }
        }) 
         }
})