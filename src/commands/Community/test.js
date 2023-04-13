const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('this is the test command!'),
    async execute(interaction, client) {
        await interaction.reply({content: 'the bot is working!'});
    }
}