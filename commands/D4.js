var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { SlashCommandBuilder } = require('discord.js');
//Importação do modulo discord.js
module.exports = {
    data: new SlashCommandBuilder()
        .setName('d4')
        .setDescription('Rolls a D4 on the wished amount')
        .addStringOption(option => option.setName("amount")
        .setDescription('Quantidade de D4s a ser rolada:')),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const dices = interaction.options.getString('amount');
            yield interaction.reply(`**${interaction.user.username}** rolou${parseInt(dices)} D4.
    **Soma: ** ${multipleD4(parseInt(dices))}
    **Resultados:** ${summedD4s}`);
        });
    }
};
const resultsOfD4s = [];
const summedD4s = [];
function rollD4() {
    const firstNumber = Math.floor(Math.random() * 3 + 1);
    /*Rolagem Fraca*/
    if (firstNumber === 1) {
        const selector = Math.floor(Math.random() * 4 + 1);
        if (selector == 1 || selector == 2) {
            const d4 = Math.floor(Math.random() * 1 + 1);
            summedD4s.push(` ${d4}`);
            resultsOfD4s.push(d4);
        }
        if (selector == 3) {
            const d4 = Math.floor(Math.random() * 2 + 1);
            summedD4s.push(` ${d4}`);
            resultsOfD4s.push(d4);
        }
        if (selector == 4) {
            const d4 = Math.floor(Math.random() * 3 + 1);
            summedD4s.push(` ${d4}`);
            resultsOfD4s.push(d4);
        }
    }
    /*Medium roll*/
    if (firstNumber === 2) {
        const selector = Math.floor(Math.random() * 4 + 1);
        if (selector == 1) {
            const d4 = Math.floor(Math.random() * 2 + 1);
            summedD4s.push(` ${d4}`);
            resultsOfD4s.push(d4);
        }
        if (selector == 2 || selector == 3) {
            const d4 = Math.floor(Math.random() * 2 + 2);
            summedD4s.push(` ${d4}`);
            resultsOfD4s.push(d4);
        }
        if (selector == 4) {
            const d4 = Math.floor(Math.random() * 2 + 3);
            summedD4s.push(` ${d4}`);
            resultsOfD4s.push(d4);
        }
    }
    /*Strong roll*/
    if (firstNumber === 3) {
        const selector = Math.floor(Math.random() * 4 + 1);
        if (selector == 1) {
            const d4 = Math.floor(Math.random() * 2 + 2);
            summedD4s.push(` ${d4}`);
            resultsOfD4s.push(d4);
        }
        if (selector == 2) {
            const d4 = Math.floor(Math.random() * 2 + 3);
            summedD4s.push(` ${d4}`);
            resultsOfD4s.push(d4);
        }
        if (selector == 3 || selector == 4) {
            const d4 = Math.floor(Math.random() * 1 + 4);
            summedD4s.push(` ${d4}`);
            resultsOfD4s.push(d4);
        }
    }
}
function multipleD4(diceInput) {
    resultsOfD4s.length = 0;
    summedD4s.length = 0;
    for (let i = 1; i <= diceInput; i++) {
        rollD4();
    }
    const sum = resultsOfD4s.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(resultsOfD4s);
    return sum;
}
