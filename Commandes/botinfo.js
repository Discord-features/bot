const Discord = require("discord.js");
const Command = require("../Structure/Command");
const config = require("../config.json");

module.exports = new Command({

    name: "botinfo",
	cooldown: 5, 

    async run(bot, message, args, db){
  

db.query(`SELECT * FROM server WHERE id_server = ${message.guild.id}`, async (err, req) => {
       if (err) throw err;
       const languages =  await req[0].languages;
       if(languages === "fr"){
        
       }
       else if(languages === "en"){
        
         }
})
}})