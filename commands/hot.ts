const { SlashCommandBuilder } = require('discord.js')
module.exports = {
data: new SlashCommandBuilder()
    .setName('hot')
    .setDescription('Joga uma moeda, tirando cara ou coroa.'),

    async execute(interaction)  {
    await interaction.reply(`**${interaction.user.username}** jogou uma moeda.
    Resultado: ${headsOrTails}`)
    }
}

function headsOrTails   ()  {
    const headsOrTailsVariable: number   =   new Date().getMilliseconds() + Math.floor(Math.random()*Math.floor(Math.random()*1000 + 1) + 1)
    if(headsOrTailsVariable % 2 === 0)  {
        console.log("Heads!")
        return "Heads!"
    }   else {
        console.log("Tails!")
        return "Tails!"
    }
}