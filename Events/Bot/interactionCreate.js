const { DiscordAPIError } = require("discord.js");
const Event = require("../../Structure/Event");
const Discord = require("discord.js");
const db = require("../../Structure/Database");

module.exports = new Event("interactionCreate", async (bot, interaction) => {

    if (interaction.type === Discord.InteractionType.ApplicationCommand) {

        const command = bot.commands.get(interaction.commandName)

        if(!bot.cooldown.has(command.name)) {
            bot.cooldown.set(command.name, new Discord.Collection())
        }

        // Cooldown

        const time = Date.now();
        const cooldown = bot.cooldown.get(command.name);
        const timeCooldown = (command.cooldown || 5) * 1000;

        if(cooldown.has(interaction.user.id)) {

            const timeRestant = cooldown.get(interaction.user.id) + timeCooldown;

            if(time < timeRestant) {

                const timeLeft = (timeRestant - time);

                return interaction.reply(`Vous devez attendre ` + `\`${(Math.round(timeLeft / (1000 * 60 * 60 * 24) % 30))}\`` + ` jour(s) ` + `\`${(Math.round(timeLeft / (1000 * 60 * 60)))}\`` + ` heure(s) ` + `\`${(Math.round(timeLeft / (1000 * 60) % 60))}\`` + ` minute(s) ` + `\`${(Math.round(timeLeft / 1000 % 60))}\`` + ` seconde(s) pour exécuter cette commande !`)
            }
        }

        cooldown.set(interaction.user.id, time);
        setTimeout(() => cooldown.delete(interaction.user.id), timeCooldown);

        // Permissions

        if(command.permission !== "Aucune" && command.permission !== "Développeur" && !interaction.member.permissions.has(new Discord.PermissionsBitField(command.permission))) return interaction.reply("Vous n'avez pas la permission requise pour exécuter cette commande !")

        // Execution de l'interaction

        command.run(bot, interaction, interaction.options, bot.db)
    }
    if (interaction.isSelectMenu()){
        const selected = interaction.values[0];
        if (interaction.customId === 'select_language'){
            if (selected === 'en'){
                db.query(`UPDATE server SET languages = 'en' WHERE id_server = '${interaction.guild.id}'`, function (err, result) {
                    if (err) throw err;
                    console.log(`La langue du serveur ${interaction.guild.name} (id: ${interaction.guild.id}) a été changée en anglais`);
                });
                interaction.reply({ content: '🇬🇧 You have selected the English language !', ephemeral: true })
            }
            if(selected === 'fr'){
                interaction.reply({ content: '🇫🇷 Vous avez sélectionné la langue française !', ephemeral: true })
                db.query(`UPDATE server SET languages = 'fr' WHERE id_server = '${interaction.guild.id}'`, function (err, result) {
                    if (err) throw err;
                    console.log(`La langue du serveur ${interaction.guild.name} (id: ${interaction.guild.id}) a été changée en français`);
                });
            }
            if(selected === 'de'){
                interaction.reply({ content: '🇩🇪 Sie haben die deutsche Sprache ausgewählt !', ephemeral: true })
                db.query(`UPDATE server SET languages = 'de' WHERE id_server = '${interaction.guild.id}'`, function (err, result) {
                    if (err) throw err;
                    console.log(`La langue du serveur ${interaction.guild.name} (id: ${interaction.guild.id}) a été changée en allemand`);
                });
        }
        }}
    })
