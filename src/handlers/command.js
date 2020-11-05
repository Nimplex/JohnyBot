module.exports = async message => { 
  let [commandName, ...args] = message.content.slice(Johny.prefix.length).split(/ +/g)
  let command
  await Johny.plugins.forEach(plugin => {
    const match = plugin.commands.find(cmd => cmd.data.triggers && cmd.data.triggers.includes(commandName.toLowerCase()))
    if (match) command = match
  })
  if (!command) return
  if (!message.member.permissions.has(command.data.permissions.user)) return
  if (!message.guild.me.permissions.has(command.data.permissions.bot)) return Johny.models.error(message, `I'm missing permissions: ${command.data.permissions.bot}`)
  command.exec({
    command: command,
    message: message,
    args: args
  })
  .catch(error => Johny.console.error(error))
}