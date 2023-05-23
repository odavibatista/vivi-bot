const { SlashCommandBuilder } = require('discord.js')
module.exports = {
data: new SlashCommandBuilder()
    .setName('commands')
    .setDescription(`Lists all the bot's commands`),

    async execute(interaction)  {

        await interaction.reply(`**VIVI BOT's COMMANDS**
**/d4 **     [amount]    [modifier]:    Rolls D4s on the wished amount with modifier;
**/d6 **     [amount]    [modifier]:    Rolls D6s on the wished amount with modifier;
**/d8 **     [amount]    [modifier]:    Rolls D8s on the wished amount with modifier;
**/d10**    [amount]    [modifier]:    Rolls D10s on the wished amount with modifier;
**/d12**    [amount]    [modifier]:    Rolls D12s on the wished amount with modifier;
**/d20**   [amount]    [modifier]:    Rolls D20s on the wished amount with modifier;
**/er **      [amount]:     Rolls an Exalted or VTM dice on the wished amount;
**/hot**:   Throws a coin, getting "Heads!" or "Tails!";')`)
    }
}