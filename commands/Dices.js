const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
      .setName('rl')
      .setDescription('Rolls an Exalted based-dice'),
  
      async execute(interaction)  {
        const dices = 10
          await interaction.reply(`**${interaction.user.username}** rolou ${dices} dados.
**Sucessos:** ${exalted(dices)}
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
