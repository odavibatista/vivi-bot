const { SlashCommandBuilder } = require('discord.js')


module.exports = {
  data: new SlashCommandBuilder()
      .setName('rl')
      .setDescription('Rolls an Exalted-based dice')
      .addStringOption(option =>
        option.setName("dados")
          .setDescription('Quantidade de dados a ser rolada:'))
      ,
  
      async execute(interaction)  {
        const dices = interaction.options.getString('dados')
          await interaction.reply(`**${interaction.user.username}** rolou ${parseInt(dices)} dados.
**Sucessos: ** ${exalted(parseInt(dices))}
**Resultados:** ${resultsArr}`)
      }
  }

const succesesArr = []
const resultsArr = []



//-------

function exaltedD10(){
  const d10 = Math.floor(Math.random()*10 + 1)
  if(d10 == 10){
    const print = 2
    resultsArr.push(` **${d10}**`)
    succesesArr.push(print)
  }else if(d10 >= 7){
    const print = 1
    resultsArr.push(` ${d10}`)
    succesesArr.push(print)
  }else{
    const print = 0
    resultsArr.push(` ~~${d10}~~`)
    succesesArr.push(print)
  }
  return d10 
  
}

function exalted(diceInput){
  succesesArr.length = 0
  resultsArr.length = 0
for(let i = 1; i <= diceInput; i++){
  exaltedD10()
}
const sum = succesesArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
  )
  console.log(succesesArr)
  return sum
}
//---------------------------------------
