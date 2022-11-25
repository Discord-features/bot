const Client = require("./Structure/Client.js")
const bot = new Client();
const db = require("./Structure/Database.js")

const { token } = require('./config.json');

bot.on("guildCreate", async guild => {
    console.log(`Joined ${guild.name} (${guild.id})`)
    const default_language = "en";
db.query(`INSERT INTO server (id_server, name_server, languages) VALUES ('${guild.id}', '${guild.name}', '${default_language}')`, function (err, result) {
    if (err) throw err;
    console.log("The server has been added to the database");
});
})

bot.start(token)