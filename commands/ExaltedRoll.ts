const { SlashCommandBuilder } = require('discord.js')

//Importação do modulo discord.js
module.exports = {
  data: new SlashCommandBuilder()
      .setName('er')
      .setDescription('Rolls an Exalted-based dice')
      .addStringOption(option =>
        option.setName("dados")
          .setDescription('Quantidade de dados a ser rolada:'))
      ,
  
      async execute(interaction)  {
        const dices:string = interaction.options.getString('dados')
          await interaction.reply(`**${interaction.user.username}** rolou ${parseInt(dices)}D10.
**Sucessos: ** ${exalted(parseInt(dices))}
**Resultados:** ${resultsArr}`)
      }
  }

const succesesArr:  number[] = []
const resultsArr = []



//-------

function exaltedD10(){
  const firstNumber:number = Math.floor(Math.random()*3 + 1)
  //Rolagem fraca
  if  (firstNumber == 1)  {
      const selector:number = Math.floor(Math.random()*4 + 1)
    if  (selector == 1 || 2) {
      const er:number = Math.floor(Math.random()*8 + 2)
      if(er == 10){
        const print = 2
        resultsArr.push(` **${er}**`)
        succesesArr.push(print)
      }else if(er >= 7){
        const print = 1
        resultsArr.push(` ${er}`)
        succesesArr.push(print)
      }else{
        const print = 0
        resultsArr.push(` ~~${er}~~`)
        succesesArr.push(print)
      }
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${er}`)
      return er 
    }
    if  (selector == 3) {
      const er:number = Math.floor(Math.random()*10 + 1)
      if(er == 10){
        const print = 2
        resultsArr.push(` **${er}**`)
        succesesArr.push(print)
      }else if(er >= 7){
        const print = 1
        resultsArr.push(` ${er}`)
        succesesArr.push(print)
      }else{
        const print = 0
        resultsArr.push(` ~~${er}~~`)
        succesesArr.push(print)
      }
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${er}`)
      return er 
    }
    if  (selector == 4) {
      const er:number = Math.floor(Math.random()*10 + 1)
      if(er == 10){
        const print = 2
        resultsArr.push(` **${er}**`)
        succesesArr.push(print)
      }else if(er >= 7){
        const print = 1
        resultsArr.push(` ${er}`)
        succesesArr.push(print)
      }else{
        const print = 0
        resultsArr.push(` ~~${er}~~`)
        succesesArr.push(print)
      }
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${er}`)
      return er 
    }
  }
  //Rolagem mediana
  if  (firstNumber == 2)  {
    const selector:number = Math.floor(Math.random()*4 + 1)
    if  (selector == 1) {
      const er:number = Math.floor(Math.random()*8 + 2)
      if(er == 10){
        const print = 2
        resultsArr.push(` **${er}**`)
        succesesArr.push(print)
      }else if(er >= 7){
        const print = 1
        resultsArr.push(` ${er}`)
        succesesArr.push(print)
      }else{
        const print = 0
        resultsArr.push(` ~~${er}~~`)
        succesesArr.push(print)
      }
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${er}`)
      return er 
    }
    if  (selector == 2 || 3) {
      const er:number = Math.floor(Math.random()*10 + 1)
      if(er == 10){
        const print = 2
        resultsArr.push(` **${er}**`)
        succesesArr.push(print)
      }else if(er >= 7){
        const print = 1
        resultsArr.push(` ${er}`)
        succesesArr.push(print)
      }else{
        const print = 0
        resultsArr.push(` ~~${er}~~`)
        succesesArr.push(print)
      }
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${er}`)
      return er 
    }
    if  (selector == 4) {
      const er:number = Math.floor(Math.random()*9 + 2)
      if(er == 10){
        const print = 2
        resultsArr.push(` **${er}**`)
        succesesArr.push(print)
      }else if(er >= 7){
        const print = 1
        resultsArr.push(` ${er}`)
        succesesArr.push(print)
      }else{
        const print = 0
        resultsArr.push(` ~~${er}~~`)
        succesesArr.push(print)
      }
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${er}`)
      return er 
    }
  }
  //Rolagem boa
  if  (firstNumber == 3)  {
    const selector:number = Math.floor(Math.random()*4 + 1)
    if  (selector == 1) {
      const er:number = Math.floor(Math.random()*7 + 3)
      if(er == 10){
        const print = 2
        resultsArr.push(` **${er}**`)
        succesesArr.push(print)
      }else if(er >= 7){
        const print = 1
        resultsArr.push(` ${er}`)
        succesesArr.push(print)
      }else{
        const print = 0
        resultsArr.push(` ~~${er}~~`)
        succesesArr.push(print)
      }
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${er}`)
      return er 
    }
    if  (selector == 2) {
      const er:number = Math.floor(Math.random()*7 + 4)
      if(er == 10){
        const print = 2
        resultsArr.push(` **${er}**`)
        succesesArr.push(print)
      }else if(er >= 7){
        const print = 1
        resultsArr.push(` ${er}`)
        succesesArr.push(print)
      }else{
        const print = 0
        resultsArr.push(` ~~${er}~~`)
        succesesArr.push(print)
      }
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${er}`)
      return er 
    }
    if  (selector == 3 || 4) {
      const er:number = Math.floor(Math.random()*6 + 5)
      if(er == 10){
        const print = 2
        resultsArr.push(` **${er}**`)
        succesesArr.push(print)
      }else if(er >= 7){
        const print = 1
        resultsArr.push(` ${er}`)
        succesesArr.push(print)
      }else{
        const print = 0
        resultsArr.push(` ~~${er}~~`)
        succesesArr.push(print)
      }
      console.log(`Resultado: ${selector}`)
      console.log(`Dado: ${er}`)
      return er 
    }
  }
  
  
}

function exalted(diceInput: number){
  succesesArr.length = 0
  resultsArr.length = 0
for(let i = 1; i <= diceInput; i++){
  exaltedD10()
}
const sum:  number = succesesArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 0
  )
  console.log(succesesArr)
  return sum
}
//---------------------------------------
