const { SlashCommandBuilder } = require('discord.js')

//Importação do modulo discord.js
module.exports = {
    data: new SlashCommandBuilder()
        .setName('exalted')
        .setDescription('Rolls a D6 on the wished amount')
        .addStringOption(option =>
            option.setName("amount")
            .setDescription('Quantidade de dados a ser rolada:'))
        ,
    
        async execute(interaction)  {
            const dices = interaction.options.getString('amount')
            await interaction.reply(`**${interaction.user.username}** rolou ${parseInt(dices)} dados.
    **Sucessos: ** 
    **Resultados:** ${resultsArr}`)
        }
    }


const succesesArr: number[] =   []
const resultsArr: number[] =    []

function rollD6 (cap: string) {

}