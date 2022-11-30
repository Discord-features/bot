const Discord = require("discord.js");
const Command = require("../Structure/Command");
const { EmbedBuilder } = require("discord.js");

module.exports = new Command({

    name: "help",
	cooldown: 5, 

    async run(bot, message, args, db){
        db.query(`SELECT * FROM server WHERE id_server = ${message.guild.id}`, async (err, req) => {
            if (err) throw err;
            const languages =  await req[0].languages;
            if(languages === "fr"){
             const fr_help = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle("Aide")
                .setDescription("Voici la liste des commandes du bot")
                .addFields(
                   { name: '</languages:1045403989845479434>', value: 'Choisissez la langue du bot' },
                   { name: '</botinfo:1045403989845479435>', value: 'Obtenez des informations sur le bot' },
                   { name: '</help:1045403989845479436>', value: 'Obtenez de l\'aide' },
                   { name: '</list:1045403989845479437>', value: 'Obtenez la liste des fonctionnalités discord en bêta' },
                   { name: '</ping:1045403989845479438>', value: 'Obtenez le ping du bot' },
                   { name: '</website:1045403989845479439>', value: 'Obtenez le lien du site web du bot' },
                   { name: '</support:1045403989845479438>', value: 'Obtenez le serveur de support du bot' },
                   { name: '</invite:1045403989845479440>', value: 'Obtenez le lien d\'invitation du bot' },
                   { name: '</beta:1045403989845479440>', value: 'Obtenez des informations sur la façon dont fonctionne les bêta dans discord'},
                   { name: '</report:1045403989845479441>', value: 'Signaler quelque chose' },
                   { name: '</beta-tester:1045403989845479442>', value: "Obtenez des informations sur la façon de devenir un testeur bêta"},
                   )
                   .setTimestamp()
                   .setFooter({ text: "Demander par " + message.user.username, iconURL: message.user.avatarURL() })
                message.reply({ embeds: [fr_help] });    
                }
            if(languages === "de"){
            const de_help = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle("Hilfe")
            .setDescription("Hier ist die Liste der Befehle des Bots")
            .addFields(
                { name: '</languages:1045403989845479434>', value: 'Wählen Sie die Sprache des Bots aus' },
                { name: '</botinfo:1045403989845479435>', value: 'Erhalten Sie Informationen über den Bot' },
                { name: '</help:1045403989845479436>', value: 'Erhalten Sie Hilfe' },
                { name: '</list:1045403989845479437>', value: 'Erhalten Sie eine Liste der Discord-Funktionen im Beta-Test' },
                { name: '</ping:1045403989845479438>', value: 'Erhalten Sie die Ping-Zeit des Bots' },
                { name: '</website:1045403989845479439>', value: 'Erhalten Sie den Link zur Website des Bots' },
                { name: '</support:1045403989845479438>', value: 'Erhalten Sie den Support-Server des Bots' },
                { name: '</invite:1045403989845479440>', value: 'Erhalten Sie den Einladungslink des Bots' },
                { name: '</beta:1045403989845479440>', value: 'Erhalten Sie Informationen darüber, wie Discord-Betas funktionieren'},
                { name: '</report:1045403989845479441>', value: 'Etwas melden' },
                { name: '</beta-tester:1045403989845479442>', value: "Erhalten Sie Informationen darüber, wie Sie ein Beta-Tester werden"},
                )
            .setTimestamp()
            .setFooter({ text: "Gefragt von " + message.user.username, iconURL: message.user.avatarURL() })
            message.reply({ embeds: [de_help] });    
            }    
            else{
             const en_help = new EmbedBuilder()
                .setColor(0x0099FF)
                .setTitle("Help")
                .setDescription("Here is the list of the bot commands")
                .addFields(
                { name: '</languages:1045403989845479434>', value: 'Choose the bot language' },
                { name: '</botinfo:1045403989845479435>', value: 'Get informations about the bot' },
                { name: '</help:1045403989845479436>', value: 'Get help' },
                { name: '</list:1045403989845479437>', value: 'Get the list of discord beta features' },
                { name: '</ping:1045403989845479438>', value: 'Get the bot ping' },
                { name: '</website:1045403989845479439>', value: 'Get the bot website' },
                { name: '</support:1045403989845479438>', value: 'Get the bot support server' },
                { name: '</invite:1045403989845479440>', value: 'Get the bot invite link' },
                { name: '</beta:1045403989845479440>', value: 'Get informations about how the beta works in discord'},
                { name: '</report:1045403989845479441>', value: 'Report something' },
                { name: '</beta-tester:1045403989845479442>', value: "Get informations about how to become a beta tester"},
                )
                .setTimestamp()
                .setFooter({ text: "asked by " + message.user.username, iconURL: message.user.avatarURL() })
                message.reply({ embeds: [en_help] });
            }
     })
    }
})