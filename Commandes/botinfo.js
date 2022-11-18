const Discord = require("discord.js");
const Command = require("../Structure/Command");
const config = require("../config.json");

module.exports = new Command({

    name: "botinfo",
	cooldown: 5, 

    async run(bot, message, args, db){
  

  db.query(`SELECT * FROM server WHERE id_server = ${message.guild.id}`, async (err, req) => {
       const languages =  await req.languages;
       if(languages === "fr"){
        console.log("fr")
       }
       else if(languages === "en"){
        console.log("en")
       }
    })
}})