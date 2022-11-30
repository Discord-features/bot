const Discord = require("discord.js");
const Command = require("../Structure/Command");
const config = require("../config.json");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require("discord.js");

module.exports = new Command({

    name: "botinfo",
	cooldown: 5, 

    async run(bot, message, args, db){
    const links = new ActionRowBuilder()
      .addComponents(
      new ButtonBuilder()
      .setLabel("Invite")
      .setStyle(5)
      .setURL("https://discord.com"),
      new ButtonBuilder()
      .setLabel("Support")
      .setStyle(5)
      .setURL("https://discord.gg/invite"),  
      new ButtonBuilder()
      .setLabel("Github")
      .setStyle(5)
      .setURL("https://github.com/Discord-features"),
      new ButtonBuilder()
      .setLabel("Website")
      .setStyle(5)
      .setURL("https://putlinkhere.com")  
        );
db.query(`SELECT * FROM server WHERE id_server = ${message.guild.id}`, async (err, req) => {
       if (err) throw err;
       const languages =  await req[0].languages;
       if(languages === "fr"){
        const fr_botinfo = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle("Informations sur le bot")
        .setDescription("Voici les informations sur le bot !")
        .addFields(
            { name: 'Nom du bot' , value: '``' + bot.user.username + '``' , inline: true },
            { name: 'Tag du bot' , value: '``' + bot.user.tag + '``' , inline: true },
            { name: 'ID du bot' , value: '``' + bot.user.id + '``' , inline: true },
            { name: 'Version du bot', value: '``' + config.bot_version + '``' , inline: true },
            { name: 'Version de nodejs', value: '``' + process.version + '``' , inline: true },
            { name: 'Version de DiscordJS', value: '``' + Discord.version + '``' , inline: true },
            { name: 'Nombre de serveurs' , value: '``' + bot.guilds.cache.size + '``' , inline: true },
            { name: 'Nombre d\'utilisateurs' , value: '``' + bot.users.cache.size + '``' , inline: true },
            { name: 'Nombre de commandes' , value: '``' + bot.commands.size + '``' , inline: true },
        )
        .setTimestamp()
        .setFooter({ text: "Demander par " + message.user.username, iconURL: message.user.avatarURL() })
        message.reply({ embeds: [fr_botinfo], components: [links] })
       }
       if(languages === "de"){
        const de_botinfo = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle("Bot Informationen")
        .setDescription("Hier sind die Informationen über den Bot !")
        .addFields(
            { name: 'Botname' , value: '``' + bot.user.username + '``' , inline: true },
            { name: 'Bot Tag' , value: '``' + bot.user.tag + '``' , inline: true },
            { name: 'Bot ID' , value: '``' + bot.user.id + '``' , inline: true },
            { name: 'Bot Version', value: '``' + config.bot_version + '``' , inline: true },
            { name: 'Nodejs Version', value: '``' + process.version + '``' , inline: true },
            { name: 'DiscordJS Version', value: '``' + Discord.version + '``' , inline: true },
            { name: 'Anzahl der Server' , value: '``' + bot.guilds.cache.size + '``' , inline: true },
            { name: 'Anzahl der Benutzer' , value: '``' + bot.users.cache.size + '``' , inline: true },
            { name: 'Anzahl der Befehle' , value: '``' + bot.commands.size + '``' , inline: true },
        )
        .setTimestamp()
        .setFooter({ text: "Gefragt von " + message.user.username, iconURL: message.user.avatarURL() })
        message.reply({ embeds: [de_botinfo], components: [links] })
        }
       else{
       const en_botinfo = new EmbedBuilder()
         .setColor(0x0099FF)
         .setTitle("Bot informations")
         .setDescription("Here are the bot informations !")
         .addFields(
        { name: 'Bot name' , value: '``' + bot.user.username + '``' , inline: true },
        { name: 'Bot tag' , value: '``' + bot.user.tag + '``' , inline: true },
        { name: 'Bot ID' , value: '``' + bot.user.id + '``' , inline: true },
        { name: 'Bot version', value: '``' + config.bot_version + '``' , inline: true },
        { name: 'Nodejs version', value: '``' + process.version + '``' , inline: true },
        { name: 'DiscordJS version', value: '``' + Discord.version + '``' , inline: true },
        { name: 'Number of servers' , value: '``' + bot.guilds.cache.size + '``' , inline: true },
        { name: 'Number of users' , value: '``' + bot.users.cache.size + '``' , inline: true },
        { name: 'Number of commands' , value: '``' + bot.commands.size + '``' , inline: true },
        )
        .setTimestamp()
        .setFooter({ text: "Asked by " + message.user.username, iconURL: message.user.avatarURL() })
        message.reply({ embeds: [en_botinfo], components: [links] })
         }      
         }
)
}})