const Discord = require("discord.js");

module.exports = async (bot, message) => {
    let prefix = "!";

    let messageArray = message.content.split(" ");
    let commandName = messageArray[0].slice(prefix.length);
    console.log(commandName);
    let args = messageArray.slice(1);

    if(!message.content.startsWith(prefix)) return;

    //let command = require(`../Commands/${commandName}.js`);
    //if(!command) return message.reply("Cette commande n'existe pas !");

    // command.run(bot, message, args);
};