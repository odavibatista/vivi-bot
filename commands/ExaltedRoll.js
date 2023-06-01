var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//@ts-ignore
const { SlashCommandBuilder } = require('discord.js');
//Importação do modulo discord.js
module.exports = {
    data: new SlashCommandBuilder()
        .setName('er')
        .setDescription('Rolls an Exalted-based dice')
        .addStringOption(option => option.setName("dados")
        .setDescription('Quantidade de dados a ser rolada:')),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const dices = interaction.options.getString('dados');
            yield interaction.reply(`**${interaction.user.username}** rolou ${parseInt(dices)}D10.
**Sucessos: ** ${exalted(parseInt(dices))}
**Resultados:** ${resultsArr}`);
        });
    }
};
const succesesArr = [];
const resultsArr = [];
//-------
function exaltedD10() {
    const firstNumber = Math.floor(Math.random() * 3 + 1);
    //Rolagem fraca
    if (firstNumber == 1) {
        const selector = Math.floor(Math.random() * 4 + 1);
        if (selector == 1 || 2) {
            const er = Math.floor(Math.random() * 8 + 2);
            if (er == 10) {
                const print = 2;
                resultsArr.push(` **${er}**`);
                succesesArr.push(print);
            }
            else if (er >= 7) {
                const print = 1;
                resultsArr.push(` ${er}`);
                succesesArr.push(print);
            }
            else {
                const print = 0;
                resultsArr.push(` ~~${er}~~`);
                succesesArr.push(print);
            }
            console.log(`Resultado: ${selector}`);
            console.log(`Dado: ${er}`);
            return er;
        }
        if (selector == 3) {
            const er = Math.floor(Math.random() * 10 + 1);
            if (er == 10) {
                const print = 2;
                resultsArr.push(` **${er}**`);
                succesesArr.push(print);
            }
            else if (er >= 7) {
                const print = 1;
                resultsArr.push(` ${er}`);
                succesesArr.push(print);
            }
            else {
                const print = 0;
                resultsArr.push(` ~~${er}~~`);
                succesesArr.push(print);
            }
            console.log(`Resultado: ${selector}`);
            console.log(`Dado: ${er}`);
            return er;
        }
        if (selector == 4) {
            const er = Math.floor(Math.random() * 10 + 1);
            if (er == 10) {
                const print = 2;
                resultsArr.push(` **${er}**`);
                succesesArr.push(print);
            }
            else if (er >= 7) {
                const print = 1;
                resultsArr.push(` ${er}`);
                succesesArr.push(print);
            }
            else {
                const print = 0;
                resultsArr.push(` ~~${er}~~`);
                succesesArr.push(print);
            }
            console.log(`Resultado: ${selector}`);
            console.log(`Dado: ${er}`);
            return er;
        }
    }
    //Rolagem mediana
    if (firstNumber == 2) {
        const selector = Math.floor(Math.random() * 4 + 1);
        if (selector == 1) {
            const er = Math.floor(Math.random() * 8 + 2);
            if (er == 10) {
                const print = 2;
                resultsArr.push(` **${er}**`);
                succesesArr.push(print);
            }
            else if (er >= 7) {
                const print = 1;
                resultsArr.push(` ${er}`);
                succesesArr.push(print);
            }
            else {
                const print = 0;
                resultsArr.push(` ~~${er}~~`);
                succesesArr.push(print);
            }
            console.log(`Resultado: ${selector}`);
            console.log(`Dado: ${er}`);
            return er;
        }
        if (selector == 2 || 3) {
            const er = Math.floor(Math.random() * 10 + 1);
            if (er == 10) {
                const print = 2;
                resultsArr.push(` **${er}**`);
                succesesArr.push(print);
            }
            else if (er >= 7) {
                const print = 1;
                resultsArr.push(` ${er}`);
                succesesArr.push(print);
            }
            else {
                const print = 0;
                resultsArr.push(` ~~${er}~~`);
                succesesArr.push(print);
            }
            console.log(`Resultado: ${selector}`);
            console.log(`Dado: ${er}`);
            return er;
        }
        if (selector == 4) {
            const er = Math.floor(Math.random() * 9 + 2);
            if (er == 10) {
                const print = 2;
                resultsArr.push(` **${er}**`);
                succesesArr.push(print);
            }
            else if (er >= 7) {
                const print = 1;
                resultsArr.push(` ${er}`);
                succesesArr.push(print);
            }
            else {
                const print = 0;
                resultsArr.push(` ~~${er}~~`);
                succesesArr.push(print);
            }
            console.log(`Resultado: ${selector}`);
            console.log(`Dado: ${er}`);
            return er;
        }
    }
    //Rolagem boa
    if (firstNumber == 3) {
        const selector = Math.floor(Math.random() * 4 + 1);
        if (selector == 1) {
            const er = Math.floor(Math.random() * 7 + 3);
            if (er == 10) {
                const print = 2;
                resultsArr.push(` **${er}**`);
                succesesArr.push(print);
            }
            else if (er >= 7) {
                const print = 1;
                resultsArr.push(` ${er}`);
                succesesArr.push(print);
            }
            else {
                const print = 0;
                resultsArr.push(` ~~${er}~~`);
                succesesArr.push(print);
            }
            console.log(`Resultado: ${selector}`);
            console.log(`Dado: ${er}`);
            return er;
        }
        if (selector == 2) {
            const er = Math.floor(Math.random() * 7 + 4);
            if (er == 10) {
                const print = 2;
                resultsArr.push(` **${er}**`);
                succesesArr.push(print);
            }
            else if (er >= 7) {
                const print = 1;
                resultsArr.push(` ${er}`);
                succesesArr.push(print);
            }
            else {
                const print = 0;
                resultsArr.push(` ~~${er}~~`);
                succesesArr.push(print);
            }
            console.log(`Resultado: ${selector}`);
            console.log(`Dado: ${er}`);
            return er;
        }
        if (selector == 3 || 4) {
            const er = Math.floor(Math.random() * 6 + 5);
            if (er == 10) {
                const print = 2;
                resultsArr.push(` **${er}**`);
                succesesArr.push(print);
            }
            else if (er >= 7) {
                const print = 1;
                resultsArr.push(` ${er}`);
                succesesArr.push(print);
            }
            else {
                const print = 0;
                resultsArr.push(` ~~${er}~~`);
                succesesArr.push(print);
            }
            console.log(`Resultado: ${selector}`);
            console.log(`Dado: ${er}`);
            return er;
        }
    }
}
function exalted(diceInput) {
    succesesArr.length = 0;
    resultsArr.length = 0;
    for (let i = 1; i <= diceInput; i++) {
        exaltedD10();
    }
    const sum = succesesArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(succesesArr);
    return sum;
}
//---------------------------------------
