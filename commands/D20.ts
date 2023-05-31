//@ts-ignore
const { SlashCommandBuilder } = require('discord.js')

//Importação do modulo discord.js
module.exports = {
    data: new SlashCommandBuilder()
        .setName('d20')
        .setDescription('Rolls a D20 with chosen success rate')
        .addStringOption(option =>
            option.setName("modifier")
            .setDescription('Modificador da rolagem'))
        .addIntegerOption(option =>
            option.setName("cd")
            .setDescription('Success condition'))
        ,
    
        async execute(interaction)  {
            const modifier = interaction.options.getString('modifier')
            const cd = interaction.options.getInteger('cd')

            await interaction.reply(`**${interaction.user.username}** rolou o D20.
**Modificador: ** ${modifier ? modifier : 0}
**Resultados:** ${rollD20(cd, parseInt(modifier))}`)

        }
}

const resultIndex: string[] =   []

function rollD20    (cd:    number, modifier?: number)  {
    /*Array reset*/
    resultIndex.length = 0

    /*Strength test*/
    const firstNumber:number  = Math.floor(Math.random()*3 + 1)
    
    /*Weak Roll*/
    if  (firstNumber === 1) {
        const selector:number  = Math.floor(Math.random()*4 + 1)
        if  (selector == 1 || selector == 2) {
            const d20:  number  = Math.floor(Math.random()*8 + 2)
            if  (d20 + modifier >= cd)   resultIndex.push(`**${d20 + modifier}**`)
            else resultIndex.push(`~~${d20 + modifier}~~`)
            return resultIndex
        }

        if  (selector == 3) {
            const d20:  number  = Math.floor(Math.random()*10 + 2)
            if  (d20 + modifier >= cd)   resultIndex.push(`**${d20 + modifier}**`)
            else resultIndex.push(`~~${d20 + modifier}~~`)
            return resultIndex
        }

        if  (selector == 4) {
            const d20:  number  = Math.floor(Math.random()*20 + 1)
            if  (d20 + modifier >= cd)   resultIndex.push(`**${d20 + modifier}**`)
            else resultIndex.push(`~~${d20 + modifier}~~`)
            return resultIndex
        }
    }

    /*Medium roll*/
    if  (firstNumber === 2) {
        const selector: number  = Math.floor(Math.random()*4 + 1)
        if  (selector == 1) {
            const d20:  number  = Math.floor(Math.random()*13 + 3)
            if(d20 + modifier >= cd)   resultIndex.push(`**${d20 + modifier}**`)
            else resultIndex.push(`~~${d20 + modifier}~~`)
            return resultIndex
        }

        if  (selector == 2 || selector == 3)    {
            const d20:  number  = Math.floor(Math.random()*20 + 1)
            if(d20 + modifier >= cd)   resultIndex.push(`**${d20 + modifier}**`)
            else resultIndex.push(`~~${d20 + modifier}~~`)
            return resultIndex
        }

        if  (selector == 4) {
            const d20:  number  = Math.floor(Math.random()*14 + 7)
            if(d20 + modifier >= cd)   resultIndex.push(`**${d20 + modifier}**`)
            else resultIndex.push(`~~${d20 + modifier}~~`)
            return resultIndex
        }
    }

    /*Strong roll*/
    if  (firstNumber === 3) {
        const selector: number  = Math.floor(Math.random()*4 + 1)
        if  (selector == 1) {
            const d20:number  = Math.floor(Math.random()*20 + 1)
            if(d20 + modifier >= cd)   resultIndex.push(`**${d20 + modifier}**`)
            else resultIndex.push(`~~${d20 + modifier}~~`)
            return resultIndex
            
        }

        if  (selector == 2)    {
            const d20:  number  = Math.floor(Math.random()*13 + 8)
            if(d20 + modifier >= cd)   resultIndex.push(`**${d20 + modifier}**`)
            else resultIndex.push(`~~${d20 + modifier}~~`)
            return resultIndex
        }

        if  (selector == 3 || selector == 4) {
            const d20:  number  = Math.floor(Math.random()*11 + 10)
            if(d20 + modifier >= cd)   resultIndex.push(`**${d20 + modifier}**`)
            else resultIndex.push(`~~${d20 + modifier}~~`)
            return resultIndex
        }
    }
}