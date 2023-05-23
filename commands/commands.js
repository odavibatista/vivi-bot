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
module.exports = {
    data: new SlashCommandBuilder()
        .setName('commands')
        .setDescription(`Lists all the bot's commands`),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            yield interaction.reply(`**VIVI BOT's COMMANDS**
**/d4 **     [amount]    [modifier]:    Rolls D4s on the wished amount with modifier;
**/d6 **     [amount]    [modifier]:    Rolls D6s on the wished amount with modifier;
**/d8 **     [amount]    [modifier]:    Rolls D8s on the wished amount with modifier;
**/d10**    [amount]    [modifier]:    Rolls D10s on the wished amount with modifier;
**/d12**    [amount]    [modifier]:    Rolls D12s on the wished amount with modifier;
**/d20**   [cd]    [modifier]:    Rolls a D20 with CD and modifier;
**/d100**  [cd]: Rolls a D100 with the inserted CD;
**/er **      [amount]:     Rolls an Exalted or VTM dice on the wished amount;
**/hot**:   Throws a coin, getting "Heads!" or "Tails!";')`);
        });
    }
};
