const Discord = require("discord.js")
const Event = require('../../Structure/Event')
const SlashCommand = require("../../Structure/SlashCommand");

module.exports = new Event("ready", async bot => {

    console.log(`${bot.user.username} : En ligne sur ${bot.guilds.cache.size} serveur(s)`)
    bot.user.setPresence(`👋 | ${bot.guilds.cache.size} serveurs`, { type: 3 })

    bot.user.setPresence({
        activities: [{
            name: `👋 | ${bot.guilds.cache.size} serveurs`,
            type: 3
        }],
        status: 'online'
    });
    await SlashCommand(bot)
})