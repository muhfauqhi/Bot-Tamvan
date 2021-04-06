const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix, token } = require('./config.json')

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)

    if (command.aliases) {
        command.aliases.forEach(alias => {
            client.aliases.set(alias, command);
        });
    };
}

client.once('ready', () => {
    console.log('The client is ready')
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (client.aliases.has(command)) {
        client.aliases.get(command).execute(message, args);
        return;
    } else if (!client.commands.has(command)) return;
    else {
        try {
            // console.log(message)
            client.commands.get(command).execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    }
})

client.login(token)
