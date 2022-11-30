const Discord = require("discord.js");
const Command = require("../Structure/Command");
const { ActionRowBuilder, SelectMenuBuilder } = require("discord.js");

module.exports = new Command({

    name: "languages",
	cooldown: 5, 

    async run(bot, message, args, db){

        const select_lang = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select_language')
					.setPlaceholder('Select a language !')
					.addOptions(
						{
							label: 'English',
							description: 'Select the English language',
                            emoji: '🇬🇧',
							value: 'en',
						},
						{
							label: 'Français',
							description: 'Séléctionnez la langue française',
                            emoji: '🇫🇷',
							value: 'fr',
						},
						{
							label: 'Deutsch',
							description: 'Wählen Sie die deutsche Sprache',
							emoji: '🇩🇪',
							value: 'de',
						},
					),
			);

        message.reply({ content: ':speech_balloon: Choose the language of the bot !', components: [select_lang], ephemeral: true })

    }
})