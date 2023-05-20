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
        .setName('exalted')
        .setDescription('Rolls a D6 on the wished amount')
        .addStringOption(option => option.setName("amount")
        .setDescription('Quantidade de dados a ser rolada:')),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const dices = interaction.options.getString('amount');
            yield interaction.reply(`**${interaction.user.username}** rolou ${parseInt(dices)} dados.
    **Sucessos: ** 
    **Resultados:** ${resultsArr}`);
        });
    }
};
const succesesArr = [];
const resultsArr = [];
function rollD6(cap) {
}
