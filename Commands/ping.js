const Discord = require("discord.js");

module.exports = {
    name: "ping",
    description: "Affiche la latence avec le serveur",
    permission: "Aucune",
    dm:true,
    options: [],

    async run(bot, message) {
        await message.reply(`Ping : \`${bot.ws.ping}\``);
    }
};