const Discord = require("discord.js");
const Command = require("../Structure/Command");
const config = require("../config.json");

module.exports = new Command({

    name: "botinfo",
	cooldown: 5, 

    async run(bot, message, args, db){
     db.query(`SELECT * FROM server WHERE id_server = '${message.guild.id}'`, function (err, result) {
            if (err) throw err;
            console.log(result);
                const language = result[0].languages;
                if (language === "fr") {
                 console.log("message en fr")   
                 message.reply("Cette commande est en cours de développement, elle sera disponible dans les prochaines mises à jour.") 
                }
                else{
                    console.log("message en en")
                    message.reply("This command is under development, it will be available in the next updates.") 
                }
})
}})