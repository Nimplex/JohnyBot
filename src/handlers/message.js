module.exports = message => {
  if (message.author.bot || !message.guild || !message.content.startsWith(client.config.prefix)) return
  
  const args = message.content.slice(client.config.prefix.length).split(/ +/)
  const command = args.shift().toLowerCase() 

  if(!client.commands.has(command)) return
  try {
    const cmd = client.commands.get(command)
    if (cmd.info.permissions.developer && message.author.id !== '364056796932997121') return client.modules.error(message, 'You need to have developer permissions to use this command.')
    else if (!message.member.permissions.has(cmd.info.permissions.member)) return client.modules.error(message, `You need to have ${cmd.info.permissions.member} permission(s) to use this command.`)
    else if (!message.guild.me.permissions.has(cmd.info.permissions.bot)) return client.modules.error(message, `I'm missing permission(s): ${cmd.info.permissions.member}.`)
    else cmd.execute(client, message, args)
  } catch(err) {
    client.modules.error(message, err)
  }
}