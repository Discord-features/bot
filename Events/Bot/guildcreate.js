const Discord = require("discord.js")
const Event = require('../../Structure/Event')
const SlashCommand = require("../../Structure/SlashCommand");
const db = require("../../Structure/Database");

module.exports = new Event("guildCreate", async guild => {
    console.log(`Le bot a rejoint le serveur ${guild.name} (id: ${guild.id}). Il y a maintenant ${guild.guilds.cache.size} serveurs !`);
    const default_language = "en";
    db.query(`INSERT INTO server (id_server, name_server, languages) VALUES ('${guild.id}', '${guild.name}', '${default_language}')`, function (err, result) {
        if (err) throw err;
        console.log("The server has been added to the database");
    });
})