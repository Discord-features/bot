const Discord = require("discord.js");
const Command = require("../Structure/Command");
const { ActionRowBuilder, SelectMenuBuilder } = require("discord.js");

module.exports = new Command({

    name: "list",
	cooldown: 5, 

    async run(bot, message, args, db){
        db.query(`SELECT * FROM server WHERE id_server = ${message.guild.id}`, async (err, req) => {
            if (err) throw err;
            const languages =  await req[0].languages;
            if(languages === "fr"){
            const select_list = new ActionRowBuilder() 
            .addComponents(
                new Discord.SelectMenuBuilder()
                .setCustomId('select_list')
                .setPlaceholder('Séléctionnez une fonctionalité !')
                .addOptions(
                    {
                        label: "fonctionalité 1",
                        description: "Description de la fonctionalité 1",
                        emoji: "🔗",
                        value: "list1",
                    },
                    {
                        label: "fonctionalité 2",
                        description: "Description de la fonctionalité 2",
                        emoji: "🔗",
                        value: "list2",
                    },
                    {
                        label: "fonctionalité 3",
                        description: "Description de la fonctionalité 3",
                        emoji: "🔗",
                        value: "list3",
                    },
                    {
                        label: "fonctionalité 4",
                        description: "Description de la fonctionalité 4",
                        emoji: "🔗",
                        value: "list4",
                    },
                    {
                        label: "fonctionalité 5",
                        description: "Description de la fonctionalité 5",
                        emoji: "🔗",
                        value: "list5",
                    },
                    {
                        la: "fonctionalité 6",
                        description: "Description de la fonctionalité 6",
                        emoji: "🔗",
                        value: "list6",
                    },
                    {
                        label: "fonctionalité 7",
                        description: "Description de la fonctionalité 7",
                        emoji: "🔗",
                        value: "list7",
                    },
                    {
                        label: "fonctionalité 8",
                        description: "Description de la fonctionalité 8",
                        emoji: "🔗",
                        value: "list8",
                    },
                ),
            );
            message.reply({ content: 'Séléctionnez une fonctionalité !', components: [select_list], ephemeral: true })
            }
            if(languages === "de"){
                
            }
            else{
             
              }
     })
    }
})