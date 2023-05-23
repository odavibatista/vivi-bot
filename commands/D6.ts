const { SlashCommandBuilder } = require('discord.js')

//Importação do modulo discord.js
module.exports = {
    data: new SlashCommandBuilder()
        .setName('d6')
        .setDescription('Rolls D6s on the wished amount')
        .addStringOption(option =>
            option.setName("amount")
            .setDescription('Quantidade de D6s a ser rolada:'))
        .addIntegerOption(option =>
            option.setName("modifier")
            .setDescription('Modificador da rolagem'))
        ,
        
        async execute(interaction)  {
            const dices = interaction.options.getString('amount')
            const modifier = interaction.options.getInteger('modifier')
            await interaction.reply(`**${interaction.user.username}** rolou ${parseInt(dices)}D6.
**Modificador: ** ${modifier ? modifier : 0}
**Soma: ** ${multipleD6(parseInt(dices), modifier)}
**Resultados:** ${summedD6s}`)
        }
    }


const resultsOfD6s: number[]   =   []
const summedD6s: string[]   =    []


function rollD6()   {
    const firstNumber:number  = Math.floor(Math.random()*3 + 1)
    
    /*Rolagem Fraca*/
    if  (firstNumber === 1) {
        const selector:number  = Math.floor(Math.random()*4 + 1)
        if  (selector == 1 || selector == 2) {
            const d6:number  = Math.floor(Math.random()*2 + 1)
                summedD6s.push(` ${d6}`)
                resultsOfD6s.push(d6)
            
        }

        if  (selector == 3) {
            const d6:number  = Math.floor(Math.random()*3 + 1)
            summedD6s.push(` ${d6}`)
            resultsOfD6s.push(d6)
        }

        if  (selector == 4) {
            const d6:number  = Math.floor(Math.random()*4 + 1)
            summedD6s.push(` ${d6}`)
            resultsOfD6s.push(d6)
        }
    }

    /*Medium roll*/
    if  (firstNumber === 2) {
        const selector: number  = Math.floor(Math.random()*4 + 1)
        if  (selector == 1) {
            const d6:   number  = Math.floor(Math.random()*3 + 1)
            summedD6s.push(` ${d6}`)
            resultsOfD6s.push(d6)
        }

        if  (selector == 2 || selector == 3)    {
            const d6:   number  = Math.floor(Math.random()*4 + 2)
            summedD6s.push(` ${d6}`)
            resultsOfD6s.push(d6)
        }

        if  (selector == 4) {
            const d6:   number  = Math.floor(Math.random()*4 + 3)
            summedD6s.push(` ${d6}`)
            resultsOfD6s.push(d6)
        }
    }

    /*Strong roll*/
    if  (firstNumber === 3) {
        const selector: number  = Math.floor(Math.random()*4 + 1)
        if  (selector == 1) {
            const d6:   number = Math.floor(Math.random()*5 + 2)
            summedD6s.push(` ${d6}`)
            resultsOfD6s.push(d6)
            
        }

        if  (selector == 2)    {
            const d6:   number = Math.floor(Math.random()*4 + 3)
            summedD6s.push(` ${d6}`)
            resultsOfD6s.push(d6) 
        }

        if  (selector == 3 || selector == 4) {
            const d6:   number = Math.floor(Math.random()*3 + 4)
            summedD6s.push(` ${d6}`)
            resultsOfD6s.push(d6)
        }
    }
}

function multipleD6(diceInput: number, modifier?: number){
    resultsOfD6s.length = 0
    summedD6s.length = 0
    if(modifier){
        resultsOfD6s.push(modifier)
    }if(modifier === null){
        modifier === 0}
    for(let i = 1; i <= diceInput; i++){
        rollD6()
    }
    const sum = resultsOfD6s.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
        )
        console.log(resultsOfD6s)
        return sum
}