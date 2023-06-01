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
        .setName('d100')
        .setDescription('Rolls a d100 with chosen success rate')
        .addIntegerOption(option => option.setName("cd")
        .setDescription('Success condition')),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const cd = interaction.options.getInteger('cd');
            yield interaction.reply(`**${interaction.user.username}** rolou o D100.
**Resultado:** ${rolld100(cd)}`);
        });
    }
};
const d100Result = [];
function rolld100(cd) {
    /*Array reset*/
    d100Result.length = 0;
    /*Strength test*/
    const firstNumber = Math.floor(Math.random() * 3 + 1);
    /*Weak Roll*/
    if (firstNumber === 1) {
        const selector = Math.floor(Math.random() * 4 + 1);
        if (selector == 1 || selector == 2) {
            const d100 = Math.floor(Math.random() * 25 + 1);
            if (d100 >= cd)
                d100Result.push(`**${d100}**`);
            else
                d100Result.push(`~~${d100}~~`);
            return d100Result;
        }
        if (selector == 3) {
            const d100 = Math.floor(Math.random() * 35 + 1);
            if (d100 >= cd)
                d100Result.push(`**${d100}**`);
            else
                d100Result.push(`~~${d100}~~`);
            return d100Result;
        }
        if (selector == 4) {
            const d100 = Math.floor(Math.random() * 50 + 1);
            if (d100 >= cd)
                d100Result.push(`**${d100}**`);
            else
                d100Result.push(`~~${d100}~~`);
            return d100Result;
        }
    }
    /*Medium roll*/
    if (firstNumber === 2) {
        const selector = Math.floor(Math.random() * 4 + 1);
        if (selector == 1) {
            const d100 = Math.floor(Math.random() * 86 + 15);
            if (d100 >= cd)
                d100Result.push(`**${d100}**`);
            else
                d100Result.push(`~~${d100}~~`);
            return d100Result;
        }
        if (selector == 2 || selector == 3) {
            const d100 = Math.floor(Math.random() * 100 + 1);
            if (d100 >= cd)
                d100Result.push(`**${d100}**`);
            else
                d100Result.push(`~~${d100}~~`);
            return d100Result;
        }
        if (selector == 4) {
            const d100 = Math.floor(Math.random() * 76 + 25);
            if (d100 >= cd)
                d100Result.push(`**${d100}**`);
            else
                d100Result.push(`~~${d100}~~`);
            return d100Result;
        }
    }
    /*Strong roll*/
    if (firstNumber === 3) {
        const selector = Math.floor(Math.random() * 4 + 1);
        if (selector == 1) {
            const d100 = Math.floor(Math.random() * 76 + 25);
            if (d100 >= cd)
                d100Result.push(`**${d100}**`);
            else
                d100Result.push(`~~${d100}~~`);
            return d100Result;
        }
        if (selector == 2) {
            const d100 = Math.floor(Math.random() * 46 + 55);
            if (d100 >= cd)
                d100Result.push(`**${d100}**`);
            else
                d100Result.push(`~~${d100}~~`);
            return d100Result;
        }
        if (selector == 3 || selector == 4) {
            const d100 = Math.floor(Math.random() * 31 + 70);
            if (d100 >= cd)
                d100Result.push(`**${d100}**`);
            else
                d100Result.push(`~~${d100}~~`);
            return d100Result;
        }
    }
}
