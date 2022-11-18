const { REST } = require('@discordjs/rest');
const { Routes } = require("discord-api-types/v9")
const { SlashCommandBuilder } = require("@discordjs/builders");
const { token } = require('../config');

module.exports = async(bot) => {
      
    const commands = [
        
        // languages
        new SlashCommandBuilder()
        .setName("languages")
        .setNameLocalizations({
            fr: 'langage',
        })
        .setDescription('Choose the bot language')
        .setDescriptionLocalizations({
            fr: 'Choisissez la langue du bot',
        }),
        //botinfo
        new SlashCommandBuilder()
        .setName("botinfo")
        .setNameLocalizations({
            fr: 'botinfo',
        })
        .setDescription('Get information about the bot')
        .setDescriptionLocalizations({
            fr: 'Obtenez des informations sur le bot',
        }),
        //help
        new SlashCommandBuilder()
        .setName("help")
        .setNameLocalizations({
            fr: 'aide',
        })
        .setDescription('Get help')
        .setDescriptionLocalizations({
            fr: 'Obtenez de l\'aide',
        }),
        //list
        new SlashCommandBuilder()
        .setName("list")
        .setNameLocalizations({
            fr: 'liste',
        })
        .setDescription('Get the list of discord features in beta')
        .setDescriptionLocalizations({
            fr: 'Obtenez la liste des fonctionnalités discord en bêta',
        })
        //ping
        .setName("ping")
        .setNameLocalizations({
            fr: 'ping',
        })
        .setDescription('Get the bot ping')
        .setDescriptionLocalizations({
            fr: 'Obtenez le ping du bot',
        }),
        //website
        new SlashCommandBuilder()
        .setName("website")
        .setNameLocalizations({
            fr: 'site',
        })
        .setDescription('Get the bot website')
        .setDescriptionLocalizations({
            fr: 'Obtenez le site du bot',
        }),
        //support
        new SlashCommandBuilder()
        .setName("support")
        .setNameLocalizations({
            fr: 'support',
        })
        .setDescription('Get the bot support server')
        .setDescriptionLocalizations({
            fr: 'Obtenez le serveur de support du bot',
        }),
        //invite
        new SlashCommandBuilder()
        .setName("invite")
        .setNameLocalizations({
            fr: 'invite',
        })
        .setDescription('Get the bot invite link')
        .setDescriptionLocalizations({
            fr: 'Obtenez le lien d\'invitation du bot',
        }),
        //beta
        new SlashCommandBuilder()
        .setName("beta")
        .setNameLocalizations({
            fr: 'beta',
        })
        .setDescription("Get informations about how work beta in discord")
        .setDescriptionLocalizations({
            fr: 'Obtenez des informations sur la façon dont fonctionne les bêta dans discord',
        }),
        //report
        new SlashCommandBuilder()
        .setName("report")
        .setNameLocalizations({
            fr: 'signaler',
        })
        .setDescription("Report something")
        .setDescriptionLocalizations({
            fr: 'Signaler quelque chose',
        }),
        //beta-tester
        new SlashCommandBuilder()
        .setName("beta-tester")
        .setNameLocalizations({
            fr: 'beta-testeur',
            })
        .setDescription("Get informations about how to become a beta tester")
        .setDescriptionLocalizations({
            fr: 'Obtenez des informations sur la façon de devenir un testeur bêta',
        }),
    ]

    const rest = new REST({ version: '10' }).setToken(token);
      
    bot.guilds.cache.forEach(async guild => {
        await rest.put(Routes.applicationGuildCommands(bot.user.id, guild.id), { body: commands });

    })

    console.log("Les slash commandes ont étés crées avec succès")
 
}