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
        .setName('d20')
        .setDescription('Rolls a D20 with chosen success rate')
        .addStringOption(option => option.setName("modifier")
        .setDescription('Modificador da rolagem'))
        .addIntegerOption(option => option.setName("cd")
        .setDescription('Success condition')),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const modifier = interaction.options.getString('modifier');
            const cd = interaction.options.getInteger('cd');
            yield interaction.reply(`**${interaction.user.username}** rolou o D20.
**Modificador: ** ${modifier ? modifier : 0}
**Resultados:** ${rollD20(cd, parseInt(modifier))}`);
        });
    }
};
const resultIndex = [];
function rollD20(cd, modifier) {
    /*Array reset*/
    resultIndex.length = 0;
    /*Strength test*/
    const firstNumber = Math.floor(Math.random() * 3 + 1);
    /*Weak Roll*/
    if (firstNumber === 1) {
        const selector = Math.floor(Math.random() * 4 + 1);
        if (selector == 1 || selector == 2) {
            const d20 = Math.floor(Math.random() * 8 + 2);
            if (d20 + modifier >= cd)
                resultIndex.push(`**${d20 + modifier}**`);
            else
                resultIndex.push(`~~${d20 + modifier}~~`);
            return resultIndex;
        }
        if (selector == 3) {
            const d20 = Math.floor(Math.random() * 10 + 2);
            if (d20 + modifier >= cd)
                resultIndex.push(`**${d20 + modifier}**`);
            else
                resultIndex.push(`~~${d20 + modifier}~~`);
            return resultIndex;
        }
        if (selector == 4) {
            const d20 = Math.floor(Math.random() * 20 + 1);
            if (d20 + modifier >= cd)
                resultIndex.push(`**${d20 + modifier}**`);
            else
                resultIndex.push(`~~${d20 + modifier}~~`);
            return resultIndex;
        }
    }
    /*Medium roll*/
    if (firstNumber === 2) {
        const selector = Math.floor(Math.random() * 4 + 1);
        if (selector == 1) {
            const d20 = Math.floor(Math.random() * 13 + 3);
            if (d20 + modifier >= cd)
                resultIndex.push(`**${d20 + modifier}**`);
            else
                resultIndex.push(`~~${d20 + modifier}~~`);
            return resultIndex;
        }
        if (selector == 2 || selector == 3) {
            const d20 = Math.floor(Math.random() * 20 + 1);
            if (d20 + modifier >= cd)
                resultIndex.push(`**${d20 + modifier}**`);
            else
                resultIndex.push(`~~${d20 + modifier}~~`);
            return resultIndex;
        }
        if (selector == 4) {
            const d20 = Math.floor(Math.random() * 14 + 7);
            if (d20 + modifier >= cd)
                resultIndex.push(`**${d20 + modifier}**`);
            else
                resultIndex.push(`~~${d20 + modifier}~~`);
            return resultIndex;
        }
    }
    /*Strong roll*/
    if (firstNumber === 3) {
        const selector = Math.floor(Math.random() * 4 + 1);
        if (selector == 1) {
            const d20 = Math.floor(Math.random() * 20 + 1);
            if (d20 + modifier >= cd)
                resultIndex.push(`**${d20 + modifier}**`);
            else
                resultIndex.push(`~~${d20 + modifier}~~`);
            return resultIndex;
        }
        if (selector == 2) {
            const d20 = Math.floor(Math.random() * 13 + 8);
            if (d20 + modifier >= cd)
                resultIndex.push(`**${d20 + modifier}**`);
            else
                resultIndex.push(`~~${d20 + modifier}~~`);
            return resultIndex;
        }
        if (selector == 3 || selector == 4) {
            const d20 = Math.floor(Math.random() * 11 + 10);
            if (d20 + modifier >= cd)
                resultIndex.push(`**${d20 + modifier}**`);
            else
                resultIndex.push(`~~${d20 + modifier}~~`);
            return resultIndex;
        }
    }
}
