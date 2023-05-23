const { REST, Routes } = require('discord.js')

//Require do 'dotenv'
const dotenv = require('dotenv')
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env

//Command imports
const fs = require("node:fs")
const path = require("node:path")
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const commands = []

for (const file of commandFiles)    {
    const command = require(`./commands/${file}`)
    commands.push(command.data.toJSON())
}

//Rest instance
const rest = new REST({version: "10"}).setToken(TOKEN);

//Deploy instance
(async () =>    {
    try {
        console.log(`Resetting ${commands.length} commands...`)

        //PUT
        const data = await rest.put(
            Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
            {body: commands}
        )
            console.log(`Commands have been succesfully registered!`)
    }
    catch (e)   {
        console.error(e)
    }
})()