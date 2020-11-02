const { Client, Collection } = require('discord.js')
const { join }               = require('path')
const { readdirSync }        = require('fs')
const { prefix, token }      = require('../config.js')

const files     = readdirSync(join(__dirname, '/commands'))
const client    = new Client()
client.commands = new Collection()

files.forEach(file => {
  const command = require(`./commands/${file}`)
  command.info.triggers.forEach(trigger => client.commands.set(trigger, command))
  console.log(`- ${file}`)
})

client.once('ready', () => console.log(`${client.user.tag} is ready.`))
client.on('message', async message => {
  if (!message.guild || message.author.bot || !message.content.startsWith(prefix)) return

  const args    = message.content.slice(prefix.length).split(/ +/)
  const command = args.shift().toLowerCase()
  
  if (!client.commands.has(command)) return

  try {
    client.commands.get(command).execute(client, message, args)
  } catch(error) {
    message.channel.send(`oops! an error occurred. Please contact with bot developer, **Nimplex#6232**.`)
    console.error(error)
  }
})

client.login(token)