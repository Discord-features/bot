const Discord = require("discord.js");
const Command = require("../Structure/Command");
const { ButtonBuilder, ActionRowBuilder } = require("discord.js");


module.exports = new Command({

    name: "invite",
	cooldown: 5, 

    async run(bot, message, args, db){
        db.query(`SELECT * FROM server WHERE id_server = ${message.guild.id}`, async (err, req) => {
            if (err) throw err;
            const languages =  await req[0].languages;
            if(languages === "fr"){
            const fr_link = new ActionRowBuilder()
            .addComponents(
            new ButtonBuilder()
            .setLabel("Invitation")
            .setStyle(5)
            .setURL("https://putlinkhere.com")
            );        
            message.reply({ content: "🔗 Clique sur ce magnifique bouton pour m'inviter sur ton serveur !", components: [fr_link]})
                }
            if(languages === "de"){
                const de_link = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                    .setLabel("Einladung")
                    .setStyle(5)
                    .setURL("https://putlinkhere.com")
                    );
                    message.reply({ content: "🔗 Klicke auf diesen wunderschönen Button, um mich auf deinem Server einzuladen !", components: [de_link]})
                }
            else{
                const link = new ActionRowBuilder()
                .addComponents(
                new ButtonBuilder()
                .setLabel("Invite")
                .setStyle(5)
                .setURL("https://putlinkhere.com")
                 );    
            message.reply({content: "🔗 Click on this beautiful button to invite me on your server !", components: [link]})
            }
     })
    }
})