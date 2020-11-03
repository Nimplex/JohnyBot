module.exports = message => {
  if (message.author.bot || !message.guild || !message.content.startsWith(client.config.prefix)) return
  
  const args = message.content.slice(client.config.prefix.length).split(/ +/)
  const command = args.shift().toLowerCase() 

  if(!client.commands.has(command)) return
  try {
    client.commands.get(command).execute(client, message, args)
  } catch(err) {
    client.modules.error(message, err)
  }
}