const { SlashCommandBuilder } = require('discord.js')

//Importação do modulo discord.js
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
  const firstNumber = Math.floor(Math.random()*3 + 1)
  //Rolagem fraca
  if  (firstNumber == 1)  {
      const selector = Math.floor(Math.random()*4 + 1)
    if  (selector == 1 || 2) {
      const d10 = Math.floor(Math.random()*8 + 2)
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
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${d10}`)
      return d10 
    }
    if  (selector == 3) {
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
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${d10}`)
      return d10 
    }
    if  (selector == 4) {
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
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${d10}`)
      return d10 
    }
  }
  //Rolagem mediana
  if  (firstNumber == 2)  {
    const selector = Math.floor(Math.random()*4 + 1)
    if  (selector == 1) {
      const d10 = Math.floor(Math.random()*8 + 2)
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
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${d10}`)
      return d10 
    }
    if  (selector == 2 || 3) {
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
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${d10}`)
      return d10 
    }
    if  (selector == 4) {
      const d10 = Math.floor(Math.random()*9 + 2)
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
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${d10}`)
      return d10 
    }
  }
  //Rolagem boa
  if  (firstNumber == 3)  {
    const selector = Math.floor(Math.random()*4 + 1)
    if  (selector == 1) {
      const d10 = Math.floor(Math.random()*7 + 3)
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
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${d10}`)
      return d10 
    }
    if  (selector == 2) {
      const d10 = Math.floor(Math.random()*7 + 4)
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
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${d10}`)
      return d10 
    }
    if  (selector == 3 || 4) {
      const d10 = Math.floor(Math.random()*6 + 5)
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
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${d10}`)
      return d10 
    }
  }
  
  
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
