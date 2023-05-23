const { SlashCommandBuilder } = require('discord.js')

//Importação do modulo discord.js
module.exports = {
    data: new SlashCommandBuilder()
        .setName('d8')
        .setDescription('Rolls D8s on the wished amount')
        .addStringOption(option =>
            option.setName("amount")
            .setDescription('Quantidade de D8s a ser rolada:'))
        .addIntegerOption(option =>
            option.setName("modifier")
            .setDescription('Modificador da rolagem'))
        ,
        
        async execute(interaction)  {
            const dices = interaction.options.getString('amount')
            const modifier = interaction.options.getInteger('modifier')
            await interaction.reply(`**${interaction.user.username}** rolou ${parseInt(dices)}D8.
**Modificador: ** ${modifier ? modifier : 0}
**Soma: ** ${multipleD8(parseInt(dices), modifier)}
**Resultados:** ${summedD8s}`)
        }
    }


const resultsOfD8s: number[]   =   []
const summedD8s: string[]   =    []


function rollD8()   {
    const firstNumber:number  = Math.floor(Math.random()*3 + 1)
    
    /*Weak Roll*/
    if  (firstNumber === 1) {
        const selector:number  = Math.floor(Math.random()*4 + 1)
        if  (selector == 1 || selector == 2) {
            const d8:number  = Math.floor(Math.random()*3 + 1)
                summedD8s.push(` ${d8}`)
                resultsOfD8s.push(d8)
            
        }

        if  (selector == 3) {
            const d8:number  = Math.floor(Math.random()*4 + 1)
                summedD8s.push(` ${d8}`)
                resultsOfD8s.push(d8)
        }

        if  (selector == 4) {
            const d8:number  = Math.floor(Math.random()*5 + 1)
                summedD8s.push(` ${d8}`)
                resultsOfD8s.push(d8)
        }
    }

    /*Medium roll*/
    if  (firstNumber === 2) {
        const selector: number  = Math.floor(Math.random()*4 + 1)
        if  (selector == 1) {
            const d8:   number  = Math.floor(Math.random()*4 + 1)
            summedD8s.push(` ${d8}`)
            resultsOfD8s.push(d8)
        }

        if  (selector == 2 || selector == 3)    {
            const d8:   number  = Math.floor(Math.random()*5 + 3)
            summedD8s.push(` ${d8}`)
            resultsOfD8s.push(d8)
        }

        if  (selector == 4) {
            const d8:   number  = Math.floor(Math.random()*5 + 4)
            summedD8s.push(` ${d8}`)
            resultsOfD8s.push(d8)
        }
    }

    /*Strong roll*/
    if  (firstNumber === 3) {
        const selector: number  = Math.floor(Math.random()*4 + 1)
        if  (selector == 1) {
            const d8:   number = Math.floor(Math.random()*7 + 2)
            summedD8s.push(` ${d8}`)
            resultsOfD8s.push(d8)
            
        }

        if  (selector == 2)    {
            const d8:   number = Math.floor(Math.random()*6 + 3)
            summedD8s.push(` ${d8}`)
            resultsOfD8s.push(d8) 
        }

        if  (selector == 3 || selector == 4) {
            const d8:   number = Math.floor(Math.random()*5 + 4)
            summedD8s.push(` ${d8}`)
            resultsOfD8s.push(d8)
        }
    }
}

function multipleD8(diceInput: number, modifier?: number){
    resultsOfD8s.length = 0
    summedD8s.length = 0
    if(modifier){
        resultsOfD8s.push(modifier)
    }if(modifier === null){
        modifier === 0}
    for(let i = 1; i <= diceInput; i++){
        rollD8()
    }
    const sum = resultsOfD8s.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
        )
        console.log(resultsOfD8s)
        return sum
}