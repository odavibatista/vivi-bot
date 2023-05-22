const { SlashCommandBuilder } = require('discord.js')

//Importação do modulo discord.js
module.exports = {
    data: new SlashCommandBuilder()
        .setName('d10')
        .setDescription('Rolls a D10 on the wished amount')
        .addStringOption(option =>
            option.setName("amount")
            .setDescription('Quantidade de dados a ser rolada:'))
        ,
    
        async execute(interaction)  {
            const dices = interaction.options.getString('amount')
            await interaction.reply(`**${interaction.user.username}** rolou ${parseInt(dices)}D10.
**Soma: ** ${multipleD10(parseInt(dices))}
**Resultados:** ${summedD10s}`)
        }
    }


const resultsOfD10s: number[]   =   []
const summedD10s: string[]   =    []


function rollD10()   {
    const firstNumber:number  = Math.floor(Math.random()*3 + 1)
    
    /*Rolagem Fraca*/
    if  (firstNumber === 1) {
        const selector:number  = Math.floor(Math.random()*4 + 1)
        if  (selector == 1 || selector == 2) {
            const d10:number  = Math.floor(Math.random()*4 + 1)
            summedD10s.push(` ${d10}`)
            resultsOfD10s.push(d10)
            
        }

        if  (selector == 3) {
            const d10:number  = Math.floor(Math.random()*4 + 2)
            summedD10s.push(` ${d10}`)
            resultsOfD10s.push(d10)
        }

        if  (selector == 4) {
            const d10:number  = Math.floor(Math.random()*10 + 1)
            summedD10s.push(` ${d10}`)
            resultsOfD10s.push(d10)
        }
    }

    /*Medium roll*/
    if  (firstNumber === 2) {
        const selector: number  = Math.floor(Math.random()*4 + 1)
        if  (selector == 1) {
            const d10:   number  = Math.floor(Math.random()*7 + 1)
            summedD10s.push(` ${d10}`)
            resultsOfD10s.push(d10)
        }

        if  (selector == 2 || selector == 3)    {
            const d10:   number  = Math.floor(Math.random()*10 + 1)
            summedD10s.push(` ${d10}`)
            resultsOfD10s.push(d10)
        }

        if  (selector == 4) {
            const d10:   number  = Math.floor(Math.random()*8 + 3)
            summedD10s.push(` ${d10}`)
            resultsOfD10s.push(d10)
        }
    }

    /*Strong roll*/
    if  (firstNumber === 3) {
        const selector: number  = Math.floor(Math.random()*4 + 1)
        if  (selector == 1) {
            const d10:   number = Math.floor(Math.random()*10 + 1)
            summedD10s.push(` ${d10}`)
            resultsOfD10s.push(d10)
            
        }

        if  (selector == 2)    {
            const d10:   number = Math.floor(Math.random()* 7 + 4)
            summedD10s.push(` ${d10}`)
            resultsOfD10s.push(d10) 
        }

        if  (selector == 3 || selector == 4) {
            const d10:   number = Math.floor(Math.random()*5 + 6)
            summedD10s.push(` ${d10}`)
            resultsOfD10s.push(d10)
        }
    }
}

function multipleD10(diceInput){
    resultsOfD10s.length = 0
    summedD10s.length = 0
    for(let i = 1; i <= diceInput; i++){
        rollD10()
    }
    const sum = resultsOfD10s.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
        )
        console.log(resultsOfD10s)
        return sum
}