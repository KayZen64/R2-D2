const Discord = require("discord.js");

module.exports = async => {
    let commands = [];

    bot.commands.forEach(async commmand => {
        let slashCommand = new Discord.SlashCommandBuilder()
        .setName(command.name)
        .setDescription(command.description)
        .setDMPermission(command.dm)
        .setDefaultMemberPermissions(command.permission)

        if(command.options?.length >= 1) {
            for(let i = 0; i < command.options.length; i++) {
                slashCommand[`add${command.options[i].type.slice(0, 1).toLowerCase()+ command.options[i].type.slice(1, command.options[1].type.length)}Option`](option => option.setName(command.options[i].name).setDescription(command.options[i].description).setRequired(command.options[i].required))
            };
        }

        await commands.push(slashCommand);
    });

    const rest = new Discord.REST
}