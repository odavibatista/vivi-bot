const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');

const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

//Command imports
const fs = require('node:fs')
const path = require('node:path')
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection()

for (const file of commandFiles)    {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    if  ("data" in command && "execute" in command)   {
        client.commands.set(command.data.name, command)
    }else{
        console.log(`This command in ${filePath} has absent "data" or "execute"!`)
    }
}


//Bot login
client.once(Events.ClientReady, c => {
	console.log(`Hello! I'm ready to run magic and dices for you, ${c.user.tag}`);
});

client.login(TOKEN);

//Interaction Listener
client.on(Events.InteractionCreate, async interaction =>  {
    if  (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if  (!command){
        console.error(`WHOA! Command not found!!`)
        return
    }
    try {
        await command.execute(interaction)
    }
    catch   (e) {
        console.error(e)
        await interaction.reply("WHOA! An error ocurred!")
    }
    
})
