const { SlashCommandBuilder } = require('discord.js')

//Importação do modulo discord.js
module.exports = {
    data: new SlashCommandBuilder()
        .setName('d12')
        .setDescription('Rolls D12s on the wished amount')
        .addStringOption(option =>
            option.setName("amount")
            .setDescription('Quantidade de D12s a ser rolada:'))
        .addIntegerOption(option =>
            option.setName("modifier")
            .setDescription('Modificador da rolagem'))
        ,
    
        async execute(interaction)  {
            const dices = interaction.options.getString('amount')
            const modifier = interaction.options.getInteger('modifier')
            await interaction.reply(`**${interaction.user.username}** rolou ${parseInt(dices)}D12.
**Modificador: ** ${modifier ? modifier : 0}
**Soma: ** ${multipleD12(parseInt(dices), parseInt(modifier))}
**Resultados:** ${summedD12s}`)
        }
    }


const resultsOfD12s: number[]   =   []
const summedD12s: string[]   =    []


function rollD12()   {
    const firstNumber:number  = Math.floor(Math.random()*3 + 1)
    
    /*Rolagem Fraca*/
    if  (firstNumber === 1) {
        const selector:number  = Math.floor(Math.random()*4 + 1)
        if  (selector == 1 || selector == 2) {
            const d12:number  = Math.floor(Math.random()*5 + 1)
            summedD12s.push(` ${d12}`)
            resultsOfD12s.push(d12)
            
        }

        if  (selector == 3) {
            const d12:number  = Math.floor(Math.random()*7 + 2)
            summedD12s.push(` ${d12}`)
            resultsOfD12s.push(d12)
        }

        if  (selector == 4) {
            const d12:number  = Math.floor(Math.random()*12 + 1)
            summedD12s.push(` ${d12}`)
            resultsOfD12s.push(d12)
        }
    }

    /*Medium roll*/
    if  (firstNumber === 2) {
        const selector: number  = Math.floor(Math.random()*4 + 1)
        if  (selector == 1) {
            const d12:   number  = Math.floor(Math.random()*9 + 1)
            summedD12s.push(` ${d12}`)
            resultsOfD12s.push(d12)
        }

        if  (selector == 2 || selector == 3)    {
            const d12:   number  = Math.floor(Math.random()*12 + 1)
            summedD12s.push(` ${d12}`)
            resultsOfD12s.push(d12)
        }

        if  (selector == 4) {
            const d12:   number  = Math.floor(Math.random()*10 + 3)
            summedD12s.push(` ${d12}`)
            resultsOfD12s.push(d12)
        }
    }

    /*Strong roll*/
    if  (firstNumber === 3) {
        const selector: number  = Math.floor(Math.random()*4 + 1)
        if  (selector == 1) {
            const d12:   number = Math.floor(Math.random()*12 + 1)
            summedD12s.push(` ${d12}`)
            resultsOfD12s.push(d12)
            
        }

        if  (selector == 2)    {
            const d12:   number = Math.floor(Math.random()* 9 + 4)
            summedD12s.push(` ${d12}`)
            resultsOfD12s.push(d12) 
        }

        if  (selector == 3 || selector == 4) {
            const d12:   number = Math.floor(Math.random()*7 + 6)
            summedD12s.push(` ${d12}`)
            resultsOfD12s.push(d12)
        }
    }
}

function multipleD12(diceInput: number, modifier?:  number){
    resultsOfD12s.length = 0
    summedD12s.length = 0
    if(modifier){
        resultsOfD12s.push(modifier)
    }if(modifier === null){
        modifier === 0}
    for(let i = 1; i <= diceInput; i++){
        rollD12()
    }
    const sum = resultsOfD12s.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
        )
        console.log(resultsOfD12s)
        return sum
}