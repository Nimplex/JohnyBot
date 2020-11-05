module.exports = async message => { 
  let [commandName, ...args] = message.content.slice(Johny.prefix.length).split(/ +/g)
  let command
  await Johny.plugins.forEach(plugin => {
    const match = plugin.commands.find(cmd => cmd.data.triggers && cmd.data.triggers.includes(commandName.toLowerCase()))
    if (match) command = match
  })
  if (!command) return
  command.exec({
    command: command,
    message: message,
    args: args
  })
  .catch(error => Johny.console.error(error))
}