var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID, RANDOM_URL, RANDOM_ORG_KEY } = process.env;
//Command imports
const fs = require('node:fs');
const path = require('node:path');
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command);
    }
    else {
        console.log(`This command in ${filePath} has absent "data" or "execute"!`);
    }
}
//Bot login
client.once(Events.ClientReady, c => {
    console.log(`Hello! I'm ready to run magic and dices for you, ${c.user.tag}`);
});
client.login(TOKEN);
//Interaction Listener
client.on(Events.InteractionCreate, (interaction) => __awaiter(this, void 0, void 0, function* () {
    if (!interaction.isChatInputCommand())
        return;
    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) {
        console.error(`WHOA! Command not found!!`);
        return;
    }
    try {
        yield command.execute(interaction);
    }
    catch (e) {
        console.error(e);
        yield interaction.reply("WHOA! An error ocurred!");
    }
}));
