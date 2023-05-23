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
        .setName('d8')
        .setDescription('Rolls D8s on the wished amount')
        .addStringOption(option => option.setName("amount")
        .setDescription('Quantidade de D8s a ser rolada:'))
        .addIntegerOption(option => option.setName("modifier")
        .setDescription('Modificador da rolagem')),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const dices = interaction.options.getString('amount');
            const modifier = interaction.options.getInteger('modifier');
            yield interaction.reply(`**${interaction.user.username}** rolou ${parseInt(dices)}D8.
**Modificador: ** ${modifier ? modifier : 0}
**Soma: ** ${multipleD8(parseInt(dices), modifier)}
**Resultados:** ${summedD8s}`);
        });
    }
};
const resultsOfD8s = [];
const summedD8s = [];
function rollD8() {
    const firstNumber = Math.floor(Math.random() * 3 + 1);
    /*Weak Roll*/
    if (firstNumber === 1) {
        const selector = Math.floor(Math.random() * 4 + 1);
        if (selector == 1 || selector == 2) {
            const d8 = Math.floor(Math.random() * 3 + 1);
            summedD8s.push(` ${d8}`);
            resultsOfD8s.push(d8);
        }
        if (selector == 3) {
            const d8 = Math.floor(Math.random() * 4 + 1);
            summedD8s.push(` ${d8}`);
            resultsOfD8s.push(d8);
        }
        if (selector == 4) {
            const d8 = Math.floor(Math.random() * 5 + 1);
            summedD8s.push(` ${d8}`);
            resultsOfD8s.push(d8);
        }
    }
    /*Medium roll*/
    if (firstNumber === 2) {
        const selector = Math.floor(Math.random() * 4 + 1);
        if (selector == 1) {
            const d8 = Math.floor(Math.random() * 4 + 1);
            summedD8s.push(` ${d8}`);
            resultsOfD8s.push(d8);
        }
        if (selector == 2 || selector == 3) {
            const d8 = Math.floor(Math.random() * 5 + 3);
            summedD8s.push(` ${d8}`);
            resultsOfD8s.push(d8);
        }
        if (selector == 4) {
            const d8 = Math.floor(Math.random() * 5 + 4);
            summedD8s.push(` ${d8}`);
            resultsOfD8s.push(d8);
        }
    }
    /*Strong roll*/
    if (firstNumber === 3) {
        const selector = Math.floor(Math.random() * 4 + 1);
        if (selector == 1) {
            const d8 = Math.floor(Math.random() * 7 + 2);
            summedD8s.push(` ${d8}`);
            resultsOfD8s.push(d8);
        }
        if (selector == 2) {
            const d8 = Math.floor(Math.random() * 6 + 3);
            summedD8s.push(` ${d8}`);
            resultsOfD8s.push(d8);
        }
        if (selector == 3 || selector == 4) {
            const d8 = Math.floor(Math.random() * 5 + 4);
            summedD8s.push(` ${d8}`);
            resultsOfD8s.push(d8);
        }
    }
}
function multipleD8(diceInput, modifier) {
    resultsOfD8s.length = 0;
    summedD8s.length = 0;
    if (modifier) {
        resultsOfD8s.push(modifier);
    }
    if (modifier === null) {
        modifier === 0;
    }
    for (let i = 1; i <= diceInput; i++) {
        rollD8();
    }
    const sum = resultsOfD8s.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(resultsOfD8s);
    return sum;
}
